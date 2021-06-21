<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employer;
use App\Models\Job;
use App\Notifications\RegistrationNotification;
use App\Notifications\VerificationNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class EmployerController extends Controller
{
    public function employers()
    {
        $employers = Employer::all();
        return response()->json(['data' => $employers]);

    }
    public function employerPublicProfile($emp_id, $count_views = "no")
    {

        $employer = Employer::findOrFail($emp_id);
        if ($count_views=="yes") {
            $count_views = $employer->value('views');

            $employer->views = $count_views + 1;

            $employer->save();
            if (!$employer) {
                return response()->json(['message' => 'Failed loading employer'], 500);
            }

        }

        return response()->json(['data' => $employer]);

    }
    public function info(Request $request)
    {
        $employer = $request->user();
        // the full object of the employer as containted in the able would
        // be available now
        return response()->json(['data' => $employer]);
    }
    public function jobs(Request $request)
    {

        $employer_id = $request->user()->id;

        $jobs = Job::where('employer_id', $employer_id)->with('employer')->where('status', '!=', 'deleted')->get();

        return response()->json(['data' => $jobs]);
    }

    public function jobsApplications(Request $request)
    {
        $logged_employer = $request->user();

        // $applications = Application::where('empl', $logged_jobseeker->id)->with('job.employer')->get();

        //we get all jobs of employer
        $jobs_applications = Job::where('employer_id', $logged_employer->id)
            ->where('status', 'active')->with(['applications.job', 'applications.jobseeker'])->get()->toArray();
        // $jobs_applications=  $logged_employer->jobs->first()->applications;

        $jobs_applications = array_column($jobs_applications, 'applications');

        $array_one_direction_application_only = $this->array_2d_to_1d($jobs_applications);

        return response()->json(['data' => $array_one_direction_application_only]);
    }
    public function array_2d_to_1d($input_array)
    {
        $output_array = array();

        for ($i = 0; $i < count($input_array); $i++) {
            for ($j = 0; $j < count($input_array[$i]); $j++) {
                $output_array[] = $input_array[$i][$j];
            }
        }

        return $output_array;
    }

    public function updateinfo(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'phone' => 'required|string',
            'website' => 'required|string',
            'description' => 'required|string',
            'slogan' => 'required|string',
            'technologies_using' => 'required|string',
            'facebook' => 'required|string',
            'twitter' => 'required|string',
            'github' => 'required|string',
            'youtube' => 'required|string',
            'company_type' => 'required',
        ]);
        if (!isset($request->user()->id)) {
            return response()->json(['message' => 'Some Error Occured. Contact administrator']);
        }
        $logged_employer_id = $request->user()->id;
        $employer = Employer::findOrFail($logged_employer_id);
        $employer->name = $request->name;
        // $employer->email = $request->email;
        $employer->address = $request->address;
        $employer->phone = $request->phone;
        $employer->website = $request->website;
        $employer->description = $request->description;
        $employer->slogan = $request->slogan;

        $employer->facebook = $request->facebook;
        $employer->twitter = $request->twitter;
        $employer->youtube = $request->youtube;
        $employer->github = $request->github;

        $employer->technologies_using = $request->technologies_using;
        $employer->company_type = $request->company_type;

        if ($employer->save()) {
            return response()->json(['message' => 'Successful updated data', 'status' => 'success']);
        } else {
            return response()->json(['message' => 'Failed to update data'], 500);
        }
    }
    // public function forgetPassword(Request $request){

    //     $email=$request->email;
    //     $jobseeker=Jobseeker::where('email',$email)->first();
    //     if(!$jobseeker){
    //         return response()->json(['message' => 'Some error occured !!'], 500);
    //     }

    // }
    public function register(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');
        $name = $request->input('name');

        $rules = [
            'email' => 'required|email|unique:employers|unique:employers|max:255',
            'name' => 'required|max:255',
            'password' => ['required'],
        ];
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {return response()->json(["message" => $validator->errors()->first()], 400);}

        $employer = new Employer();
        $employer->name = $name;
        $employer->email = $email;
        //other filed will be updated later when user redirected to dashboard
        //user will be redirected to form to input remaining details
        $employer->password = password_hash($password, PASSWORD_BCRYPT);
        $employer->activation_token = Str::random(60);

        if ($employer->save()) {
            $employer->user_type = "employer";

            $employer->notify(new VerificationNotification($employer));
            
            $employer->notify(new RegistrationNotification($employer));

            return response()->json(['message' => 'Employer acount created', 'user' => $employer]);
        } else {
            return response()->json(['Some error occured while creating Employer']);
        }

    }
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        // $rules = [
        //     'email' => 'required|email:rfc,dns|max:255',
        //     'password' => ['required'],
        // ];

        // $validator = Validator::make($request->all(), $rules);

        // if ($validator->fails()) {return  response()->json(["message" => $validator->errors()->first()],400);}

        // if(Employer::where('email',$email)->count() <= 0 ) return response( array( "message" => "Email address does not exist"  ), 400 );

        $validated = $request->validate([
            'email' => 'required|email|max:255',
            'password' => 'required',
            // 'password' => ['required'],

        ]);

        if (Employer::where('email', $email)->count() <= 0) {
            return response(array("message" => "Credentials does not exist"), 400);
        }

        $employer = Employer::where('email', $email)->first();

        $active_status = Employer::where('email', '=', $email)->value('active');
        if (!$active_status) {
            return response(array("message" => "Please verify your email. We have sent you a mail."), 400);
        }

        if (password_verify($password, $employer->password)) {
            $employer->last_login = Carbon::now();
            $employer->save();
            return response(array("message" => "Login In Successful", "data" => [
                "user" => $employer,

                // Below the employer key passed as the second parameter sets the role
                // anyone with the auth token would have only employer access rights
                "token" => $employer->createToken('Personal Access Token', ['employer'])->accessToken,
            ]), 200);
        } else {
            return response(array("message" => "Wrong Credentials."), 400);
        }
    }
    public function allMessages(Request $request)
    {

        $employer_id = $request->user()->id;
        $messages = $request->user()->notifications;

        return response()->json(['data' => $messages]);
    }
    public function dashInfo(Request $request)
    {
        $logged_employer = $request->user();
        //getting jobseeker skills on array
        //application
        $application = 0;

        //we get all jobs of employer
        $jobs_applications = Job::where('employer_id', $logged_employer->id)
            ->where('status', 'active')->with(['applications.job', 'applications.jobseeker'])->get()->toArray();

        $jobs_applications = array_column($jobs_applications, 'applications');

        $array_one_direction_application_only = $this->array_2d_to_1d($jobs_applications);
        //couting applications
        $application = count($array_one_direction_application_only);

        //jobs
        $jobs = 0;
        $jobs = Job::where('employer_id', $logged_employer->id)->get()->count();

        //views
        $views = 0;
        $views = $logged_employer->views;
        //inbox

        $messages = $request->user()->notifications;
        if ($messages != null) {
            $messages = $messages->count();
        } else {
            $messages = 0;
        }

        return response()->json(
            [
                'jobs' => $jobs, 'applications' => $application,
                'views' => $views, 'messages' => $messages,

            ]
            , 200);

    }
    public function updateProfileImage(Request $request)
    {
        $validated = $request->validate([
            'profile_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $baseurl = URL::to('/');
        $employer = Employer::findOrFail($request->user()->id);

        if ($request->hasFile('profile_image')) {

            $file_name = $request->file('profile_image')->getClientOriginalName();
            $file_ext = $request->file('profile_image')->getClientOriginalExtension();

            $name = md5(uniqid() . $file_name) . '.' . $file_ext;
            $request->profile_image->move(public_path() . '/employer/img/', $name);
            $employer->profile_image = $baseurl . '/employer/img/' . $name;
        }

        if ($employer->save()) {
            return response()->json(['data' => $employer->profile_image, 'message' => 'You have succesfully uploaded Image']);

        }
        return response()->json(['message' => "Some error occured while uploading Image."], 500);
    }
}
