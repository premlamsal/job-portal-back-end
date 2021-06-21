<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Application;
use App\Models\Job;
use App\Models\Jobseeker;
use App\Notifications\RegistrationNotification;
use App\Notifications\VerificationNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class JobseekerController extends Controller
{
    public function jobseekers()
    {

        $jobseekers = Jobseeker::all();
        return response()->json(['data' => $jobseekers]);
    }
    public function jobseekerPublicProfile($jobseeker_id,$count_views="no")
    {
        $jobseeker = Jobseeker::findOrFail($jobseeker_id);
        if($count_views=="yes"){
            $count_views = $jobseeker->value('views');

            $jobseeker->views = $count_views + 1;
    
            $jobseeker->save();
            if (!$jobseeker) {
                return response()->json(['message' => 'Failed loading jobseeker'], 500);
            }
        }
      
        return response()->json(['data' => $jobseeker]);

    }
    public function info(Request $request)
    {
        $jobseeker = $request->user();
        // the full object of the jobseeker as containted in the able would
        // be available now
        return response()->json(['data' => $jobseeker]);
    }

    public function matchedJob(Request $request)
    {

        $logged_jobseeker = $request->user();
        //getting jobseeker skills on array
        $skills = explode(',', $logged_jobseeker->skills);
        $searchValues = $skills;

        $matchedJobs = Job::where(function ($q) use ($searchValues) {
            foreach ($searchValues as $value) {
                $q->orWhere('skills', 'like', "%{$value}%");
            }
        })->with('employer')->where('status', 'active')->get();

        return response()->json(['data' => $matchedJobs]);
    }
    public function appliedJobs(Request $request)
    {
        $logged_jobseeker = $request->user();

        $appliedJobs = Application::where('jobseeker_id', $logged_jobseeker->id)->with('job.employer')->get();

        return response()->json(['data' => $appliedJobs]);
    }

    public function updateinfo(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|string',
            'title' => 'required|string',
            'website' => 'required|string',
          
            'skills' => 'required|string',
            'cover_letter' => 'required|string',
            'qualification' => 'required|string',
            'facebook' => 'required|string',
            'twitter' => 'required|string',
            'github' => 'required|string',
            'youtube' => 'required|string',

            'gender' => 'required',
        ]);
        if (!isset($request->user()->id)) {
            return response()->json(['message' => 'Some Error Occured. Contact administrator']);
        }
        $logged_jobseeker_id = $request->user()->id;

        $jobseeker = JobSeeker::findOrFail($logged_jobseeker_id);
        $jobseeker->name = $request->name;
        // $jobseeker->email = $request->email;
        $jobseeker->address = $request->address;
        $jobseeker->phone = $request->phone;
        $jobseeker->title = $request->title;
        $jobseeker->website = $request->website;
        $jobseeker->facebook = $request->facebook;
        $jobseeker->twitter = $request->twitter;
        $jobseeker->youtube = $request->youtube;
        $jobseeker->github = $request->github;
        $jobseeker->skills = $request->skills;
        $jobseeker->cover_letter = $request->cover_letter;
        $jobseeker->qualification = $request->qualification;
        $jobseeker->gender = $request->gender;
      
        if ($jobseeker->save()) {
            return response()->json(['message' => 'Successful updated data', 'status' => 'success']);
        } else {
            return response()->json(['message' => 'Failed to update data'], 500);
        }
    }
    public function register(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        $name = $request->input('name');

        $rules = [
            'email' => 'required|email|unique:jobseekers|unique:employers|max:255',
            'name' => 'required|string|max:255',
            'password' => ['required'],
        ];
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(["message" => $validator->errors()->first()], 400);
        }

        $jobseeker = new Jobseeker();
        $jobseeker->name = $name;
        $jobseeker->email = $email;
        //other filed will be updated later when user redirected to dashboard
        //user will be redirected to form to input remaining details
        $jobseeker->password = password_hash($password, PASSWORD_BCRYPT);
        $jobseeker->activation_token = Str::random(60);

        if ($jobseeker->save()) {
            $jobseeker->user_type = "jobseeker";
            $jobseeker->notify(new VerificationNotification($jobseeker));
            $jobseeker->notify(new RegistrationNotification($jobseeker));

            return response()->json(['message' => 'Jobseeker acount created', 'user' => $jobseeker]);
        } else {
            return response()->json(['Some error occured while creating JobSeeker']);
        }
    }
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required',

        ]);

        $email = $request->input('email');
        $password = $request->input('password');
        //when email don;t match
        if (Jobseeker::where('email', $email)->count() <= 0) {
            return response(array("message" => "Credentials does not exist"), 400);
        }

        $jobseeker = Jobseeker::where('email', '=', $email)->firstOrFail();
        $active_status = Jobseeker::where('email', '=', $email)->value('active');
        if (!$active_status) {
            return response(array("message" => "Please verify your email. We have sent you a mail."), 400);
        }

        if (password_verify($password, $jobseeker->password)) {
            $jobseeker->last_login = Carbon::now();
            $jobseeker->save();
            return response(array("message" => "Login In Successful", "data" => [
                "user" => $jobseeker,

                // Below the jobseeker key passed as the second parameter sets the role
                // anyone with the auth token would have only jobseeker access rights
                "token" => $jobseeker->createToken('Personal Access Token', ['jobseeker'])->accessToken,
            ]), 200);
        } else {
            return response(array("message" => "Wrong Credentials."), 400);
        }

    }
    public function allMessages(Request $request)
    {

        $jobseeker_id = $request->user()->id;
        $messages = $request->user()->notifications;

        return response()->json(['data' => $messages]);
    }
    public function dashInfo(Request $request)
    {
        $logged_jobseeker = $request->user();
        //getting jobseeker skills on array
        $skills = explode(',', $logged_jobseeker->skills);
        $searchValues = $skills;

        $matchedJobs = Job::where(function ($q) use ($searchValues) {
            foreach ($searchValues as $value) {
                $q->orWhere('skills', 'like', "%{$value}%");
            }
        })->with('employer')->where('status', 'active')->get();

        $appliedJobs = Application::where('jobseeker_id', $logged_jobseeker->id)->with('job.employer')->get();

        $messages = $logged_jobseeker->notifications;

        return response()->json(['matchedJobs' => $matchedJobs->count(), 'views' => $request->user()->views, 'appliedJobs' => $appliedJobs->count(), 'messages' => $messages->count()]);

    }
    public function resume(Request $request)
    {
        $resume_file = $request->user()->resume_file;

        return response()->json(['data' => $resume_file]);
    }
    public function updateResume(Request $request)
    {

        $validated = $request->validate([
            'resume_file' => 'required|mimetypes:application/pdf|max:2048',
        ]);
        $baseurl = URL::to('/');
        $jobseeker = Jobseeker::findOrFail($request->user()->id);

        if ($request->hasFile('resume_file')) {
            $file_name = $request->file('resume_file')->getClientOriginalName();
            $file_ext = $request->file('resume_file')->getClientOriginalExtension();

            $name = md5(uniqid() . $file_name) . '.' . $file_ext;

            $request->resume_file->move(public_path() . '/jobseeker/files/', $name);
            $jobseeker->resume_file = $baseurl . '/jobseeker/files/' . $name;
        }
        if ($jobseeker->save()) {
            return response()->json(['data' => $jobseeker->resume_file,'message'=>'You have succesfully upload Resume']);

        }
        return response()->json(['message' => "Some error occured while uploading file."], 500);
    }
    public function updateProfileImage(Request $request){
        $validated = $request->validate([
            'profile_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $baseurl = URL::to('/');
        $jobseeker = Jobseeker::findOrFail($request->user()->id);

        if ($request->hasFile('profile_image')) {

            $file_name = $request->file('profile_image')->getClientOriginalName();
            $file_ext = $request->file('profile_image')->getClientOriginalExtension();

            $name = md5(uniqid() . $file_name) . '.' . $file_ext;
            $request->profile_image->move(public_path() . '/jobseeker/img/', $name);
            $jobseeker->profile_image = $baseurl . '/jobseeker/img/' . $name;
        }

        if ($jobseeker->save()) {
            return response()->json(['data' => $jobseeker->profile_image,'message'=>'You have succesfully uploaded Image']);

        }
        return response()->json(['message' => "Some error occured while uploading Image."], 500);
    }
}
