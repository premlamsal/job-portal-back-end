<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class InterviewNotification extends Notification
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
        $this->data = $data;
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
        return (new MailMessage)
            ->line('Dear ' . $this->data["jobseeker_name"] . ' be ready for interview for the following time.')
            ->line('Venue: ' . $this->data["venue"])
            ->line('Date: ' . $this->data["date"])
            ->line('Time: ' . $this->data["time"])
            ->line('Some Extra Notes : ' . $this->data["note"])
            ->action('Login', url('https://jobmalai.com/login'))
            ->line('System Generated Interview Mail for ' . $this->data["employer_name"]);
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
            'message'=> 'Dear ' . $this->data["jobseeker_name"] . ' be ready for interview for the following time. Venue : ' .$this->data["venue"] .' Date : ' .$this->data["date"] .' Time : ' .$this->data["time"] .' Note : ' .$this->data["note"],
             
         ];
    }
}
