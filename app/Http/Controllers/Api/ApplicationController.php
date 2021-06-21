<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Employer;
use App\Models\Job;
use App\Models\Jobseeker;
use App\Notifications\ApplicationAcceptedNotification;
use App\Notifications\InterviewNotification;
use App\Notifications\JobAppliedNotification;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function applyJob(Request $request)
    {

        $jobseeker_id = $request->user()->id;
        $job_id = $request->job_id;

        //get employer id from job_id

        // $employer_id = Job::where('id', $job_id)->get('employer_id');
        $application = Application::where('job_id', $job_id)->where('jobseeker_id', $jobseeker_id)->where('status', 'applied')->get();

        if ($application->count()>0) {
            return response()->json(['message' => 'You have already applied this job. Wait or apply another mathing job for you'], 500);
        } else {
            $application = new Application();
            $application->jobseeker_id = $jobseeker_id;
            $application->job_id = $job_id;
            $application->status = "applied";
            if ($application->save()) {

                $job = Job::findOrFail($job_id);

                $jobseeker = Jobseeker::findOrFail($jobseeker_id);

                //data for push email or db notification
                $data = [
                    "job_id" => $job->id,
                    "job_title" => $job->title,
                    "jobseeker_name" => $jobseeker->name,
                ];

                $jobseeker->notify(new JobAppliedNotification($data));

                return response()->json(['message' => 'You have applied job Succesfully. You will get notification after you get shortlisted'], 200);

            } else {

                return response()->json(['message' => 'some error occured'], 500);

            }
        }

    }
    public function cancelApplication(Request $request)
    {

        $jobseeker_id = $request->user()->id;

        $application = Application::where('id', $request->application_id)->where('jobseeker_id', $jobseeker_id)->where('status', '=', 'applied')->first();

        if ($application) {
            $application->status = "canceled"; //canceled by user
            if ($application->save()) {
                return response()->json(['message' => 'You have successfully canceled job.'], 200);

            } else {

                return response()->json(['message' => 'some error occured'], 500);

            }

        } else {
            return response()->json(['message' => 'Some error occured while changing status of application'], 500);

        }

    }
    public function acceptApplication(Request $request)
    {

        $employer_id_logg = $request->user()->id;

        // $application = Application::where('id', $request->application_id)->where('employer_id', $employer_id)->where('status', '=', 'applied')->first();

        $application = Application::where('id', $request->application_id)->first();

        $job_id = $application->job_id;
        
        $job_seeker_id = $application->jobseeker_id;

        $jobseeker = Jobseeker::where('id',$job_seeker_id)->first();

        $job = Job::where('id',$job_id)->first();

        $employer_id = $job->employer_id;

        if ($employer_id == $employer_id_logg) {
        
            $application->status = "accepted"; //canceled by user

            if ($application->save()) {

                //data for push email or db notification
                $data = [
                    "job_id" => $job->id,
                    "job_title" => $job->title,
                    "jobseeker_name" => $jobseeker->name,
                ];

                $jobseeker->notify(new ApplicationAcceptedNotification($data));

                return response()->json(['message' => 'You maked this application accepted.'], 200);

            } else {

                return response()->json(['message' => 'some error occured'], 500);

            }

        } else {
            //logged in user dont have this job that is in app so can't update
            return response()->json(['message' => $job_id.' Some error occured while changing status of application'], 500);

        }

    }
    public function rejectApplication(Request $request)
    {

        $employer_id_logg = $request->user()->id;

        $application = Application::where('id', $request->application_id)->first();

        $job_id = $application->job_id;
        
        $job_seeker_id = $application->jobseeker_id;

        $jobseeker = Jobseeker::where('id',$job_seeker_id)->first();

        $job = Job::where('id',$job_id)->first();

        $employer_id = $job->employer_id;

        if ($employer_id == $employer_id_logg) {
        
            $application->status = "rejected"; //canceled by user
        
            if ($application->save()) {
        
                return response()->json(['message' => 'You maked this application rejected.'], 200);

            } else {

                return response()->json(['message' => 'some error occured'], 500);

            }

        } else {
            //logged in user dont have this job that is in app so can't update
            return response()->json(['message' => 'Some error occured while changing status of application'], 500);

        }

    }
    public function interviewCall(Request $request)
    {

        $validated = $request->validate([
            'application_id' => 'required',
            'venue' => 'required',
            'date' => 'required',
            'time' => 'required',
            'note' => 'required',

        ]);
        $employer_id_logg = $request->user()->id;

       $application = Application::where('id', $request->application_id)->first();

       $application_status=$application->status;

        $job_id = $application->job_id;
        
        $job_seeker_id = $application->jobseeker_id;

        $jobseeker = Jobseeker::where('id',$job_seeker_id)->first();

        $job = Job::where('id',$job_id)->first();

        $employer_id = $job->employer_id;

        if ($employer_id == $employer_id_logg) {
        
            if ($application_status === "accepted") {
                //data for push email or db notification
                $data = [
                    "job_id" => $job->id,
                    "job_title" => $job->title,
                    "jobseeker_name" => $jobseeker->name,
                    "employer_name" => $request->user()->name,
                    "venue" => $request->venue,
                    "date" => $request->date,
                    "time" => $request->time,
                    "note" => $request->note,
                ];
              
                $jobseeker->notify(new InterviewNotification($data));
              
                $request->user()->notify(new InterviewNotification($data));
              
                return response()->json(['message' => 'You have called ' . $data["jobseeker_name"] . ' for the interview. Check your inbox for the inerview detail.'], 200);

            } else {

                return response()->json(['message' => 'Please Accept the application first before call for interview'], 500);

            }

        } else {
            //logged in user dont have this job that is in app so can't update
            return response()->json(['message' => 'Some error occured while calling for the inerview'], 500);

        }

    }

}
