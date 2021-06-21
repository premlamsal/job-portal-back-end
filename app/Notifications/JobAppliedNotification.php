<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class JobAppliedNotification extends Notification
{
    use Queueable;
    private $data;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data=$data;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = "https://jobmalai.com/job-detail/" . $this->data["job_id"];

        return (new MailMessage)

            ->line('Dear ' . $this->data["jobseeker_name"]. ' You have applied the ' . $this->data["job_title"] . ' Job. Please be in touch to get response from the employer.')
            ->action('Show Job', url($url))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [

            'message' => 'Dear ' . $this->data["jobseeker_name"]. ' You have applied the ' . $this->data["job_title"] . ' Job. Please be in touch to get response from the employer.'
        ];

    }
}
