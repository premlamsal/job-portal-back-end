<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Application;
use App\Models\Employer;
use App\Models\Job;
use App\Models\Jobseeker;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class AdminController extends Controller
{
    public function cancelApplication(Request $request)
    {
        $jobseeker_id = $request->jobseeker_id;

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
    public function applications()
    {

        $applications = Application::with('job.employer')->with('jobseeker')->get();

        return response()->json(['data' => $applications]);

    }
    public function dashInfo()
    {

        $jobs_count = Job::all()->count();
        $employers_count = Employer::all()->count();
        $jobseekers_count = Jobseeker::all()->count();
        $applications_count = Application::all()->count();
        $featured_jobs_count = Job::where('isFeatured', 1)->count();

        $data = array('jobs' => $jobs_count, 'employers' => $employers_count,
            'jobseekers' => $jobseekers_count, 'applications' => $applications_count,
            'featuredjobs' => $featured_jobs_count,
        );
        // $data['jobs'] = $jobs_count;
        // $data['employers'] = $employers_count;
        // $data['jobseekers'] = $jobseekers_count;
        // $data['applications'] = $applications_count;
        // $data['featuredJobs'] = $featured_jobs_count;
        // $data=json_encode($data);

        return response()->json(['data' => $data]);

    }
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $validated = $request->validate([
            'email' => 'required|email:rfc,dns|max:255',
            'password' => 'required',
        ]);

        if (Admin::where('email', $email)->count() <= 0) {
            return response(array("message" => "Credentials does not exist"), 400);
        }

        $admin = Admin::where('email', $email)->first();

        if (password_verify($password, $admin->password)) {
            $admin->last_login = Carbon::now();
            $admin->save();
            return response(array("message" => "Login In Successful", "data" => [
                "user" => $admin,
                // Below the admin key passed as the second parameter sets the role
                // anyone with the auth token would have only admin access rights
                "token" => $admin->createToken('Personal Access Token', ['admin'])->accessToken,
            ]), 200);
        } else {
            return response(array("message" => "Wrong Credentials."), 400);
        }
    }
    public function showJobseeker($id)
    {
        $jobseeker = Jobseeker::where('id', $id)->get();
        return response()->json(['data' => $jobseeker]);
    }
    public function createJob(Request $request)
    {

        $validated = $request->validate([
            'title' => 'required| max:255',
            'category_id' => 'required | numeric',
            'description' => 'required',
            'skills' => 'required',
            'salary' => 'required',
            'deadline' => 'required',
            'open_positions' => 'required',
            'location' => 'required',
            'type' => 'required',
            'employer_id' => 'required',
            'experinece' => 'required',
        ]);

        $job = new Job();
        $job->title = $request->title;
        $job->category_id = $request->category_id;
        $job->description = $request->description;
        $job->skills = $request->skills;
        $job->salary = $request->salary;
        $job->deadline = $request->deadline;
        $job->open_positions = $request->open_positions;
        $job->location = $request->location;
        $job->employer_id = $request->employer_id;
        $job->experience = $request->experience;
        $job->type = $request->type;
        $job->status = 'Active';

        if ($job->save()) {

            return response()->json(['data' => $job, 'message' => 'You have added new job.']);
        } else {
            return response()->json(['message' => 'Failed to create new job.'], 500);

        }
    }

    public function updateJob(Request $request)
    {
        $employer_id = $request->employer_id;

        $validated = $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'description' => 'required',
            'skills' => 'required',
            'salary' => 'required',
            'deadline' => 'required',
            'open_position' => 'required',
            'location' => 'required',
            'type' => 'required',
            'job_id' => 'required',
            'employer_id' => 'required',
            'experience' => 'required',
        ]);

        $job = Job::where('id', $request->job_id)->where('employer_id', $employer_id)->first();

        $job->title = $request->title;
        $job->category_id = $request->category_id;
        $job->description = $request->description;
        $job->skills = $request->skills;
        $job->salary = $request->salary;
        $job->deadline = $request->deadline;
        $job->open_position = $request->open_position;
        $job->location = $request->location;
        $job->employer_id = $request->employer_id;
        $job->experience = $request->experience;
        $job->type = $request->type;

        if ($job->save()) {

            return response()->json(['data' => $job, 'message' => 'You have updated job data.']);
        } else {
            return response()->json(['message' => 'Failed to update job.'], 500);

        }
    }
    public function destroyJob(Request $request)
    {
        $employer_id = $request->employer_id;
        // $admin_id = $request->user()->id;
        $job = Job::where('id', $request->job_id)->where('employer_id', $employer_id)->first();

        $job->status = 'deleted';
        if ($job->save()) {

            return response()->json(['data' => $job, 'message' => 'You have deleted job.']);
        } else {
            return response()->json(['message' => 'Failed to delete job.'], 500);

        }
    }
    public function closeJob(Request $request)
    {
        $employer_id = $request->employer_id;
        // $admin_id = $request->user()->id;
        $job = Job::where('id', $request->job_id)->where('employer_id', $employer_id)->first();

        $job->status = 'closed';
        if ($job->save()) {

            return response()->json(['data' => $job, 'message' => 'You have updated job.']);
        } else {
            return response()->json(['message' => 'Failed to delete job.'], 500);

        }

    }
    public function activeJob(Request $request)
    {
        $employer_id = $request->employer_id;
        // $admin_id = $request->user()->id;
        $job = Job::where('id', $request->job_id)->where('employer_id', $employer_id)->first();

        $job->status = 'active';
        if ($job->save()) {

            return response()->json(['data' => $job, 'message' => 'You have updated job.']);
        } else {
            return response()->json(['message' => 'Failed to delete job.'], 500);

        }
    }
    public function destroyEmployer(Request $request)
    {
        $employer_id = $request->employer_id;
        // $admin_id = $request->user()->id;
        $employer = Employer::where('employer_id', $employer_id)->first();

        $employer->status = 0;
        if ($employer->save()) {

            return response()->json(['data' => $employer, 'message' => 'You have deleted Employer.']);
        } else {
            return response()->json(['message' => 'Failed to delete Employer.'], 500);

        }
    }
    public function destroyJobseeker(Request $request)
    {
        $jobseeker_id = $request->jobseeker_id;
        // $admin_id = $request->user()->id;
        $jobseeker = Jobseeker::where('employer_id', $jobseeker_id)->first();

        $jobseeker->status = 0;
        if ($jobseeker->save()) {

            return response()->json(['data' => $jobseeker, 'message' => 'You have deleted Jobseeker.']);
        } else {
            return response()->json(['message' => 'Failed to delete Jobseeker.'], 500);

        }
    }
    public function showEmployer($id)
    {
        $employer = Employer::where('id', $id)->get();
        return response()->json(['data' => $employer]);
    }
    public function createJobseeker(Request $request)
    {
        $jobseeker = new Jobseeker();
        $jobseeker->name = $request->name;
        $jobseeker->email = $request->email;
        $jobseeker->password = password_hash($request->password, PASSWORD_BCRYPT);
        $jobseeker->address = $request->address;
        $jobseeker->phone = $request->phone;
        $jobseeker->title = $request->title;
        $jobseeker->website = $request->website;
        $jobseeker->socail_urls = $request->socail_urls;
        $jobseeker->skills = $request->skills;
        $jobseeker->cover_letter = $request->cover_letter;
        $jobseeker->qualification = $request->qualification;
        $jobseeker->gender = $request->gender;

        //base url for image (picking from .env varibale)
        $baseurl = URL::to('/');

        if ($request->hasFile('resume_file')) {

            $name = time() . '.' . $request->resume_file->getClientOriginalName();
            $request->resume_file->move(public_path() . '/jobseeker/files/', $name);
            $jobseeker->resume_file = $baseurl . '/jobseeker/files/' . $name;
        }

        if ($request->hasFile('profile_image')) {

            $name = time() . '.' . $request->profile_image->getClientOriginalName();
            $request->profile_image->move(public_path() . '/jobseeker/img/', $name);
            $jobseeker->profile_image = $baseurl . '/jobseeker/img/' . $name;
        }

        if ($jobseeker->save()) {
            return response()->json(['message' => 'Successful created Jobseeker', 'status' => 'success']);
        } else {
            return response()->json(['message' => 'Failed to created Jobseeker'], 500);
        }
    }
    public function updateJobseeker(Request $request)
    {
        $logged_jobseeker_id = $request->jobseeker_id;

        $jobseeker = JobSeeker::findOrFail($logged_jobseeker_id);
        $jobseeker->name = $request->name;
        $jobseeker->email = $request->email;
        if ($request->password) {
            $jobseeker->password = password_hash($request->password, PASSWORD_BCRYPT);

        }
        $jobseeker->address = $request->address;
        $jobseeker->phone = $request->phone;
        $jobseeker->title = $request->title;
        $jobseeker->website = $request->website;
        $jobseeker->socail_urls = $request->socail_urls;
        $jobseeker->skills = $request->skills;
        $jobseeker->cover_letter = $request->cover_letter;
        $jobseeker->qualification = $request->qualification;
        $jobseeker->gender = $request->gender;

        //base url for image (picking from .env varibale)
        $baseurl = URL::to('/');

        if ($request->hasFile('resume_file')) {

            $name = time() . '.' . $request->resume_file->getClientOriginalName();
            $request->resume_file->move(public_path() . '/jobseeker/files/', $name);
            $jobseeker->resume_file = $baseurl . '/jobseeker/files/' . $name;
        }

        if ($request->hasFile('profile_image')) {

            $name = time() . '.' . $request->profile_image->getClientOriginalName();
            $request->profile_image->move(public_path() . '/jobseeker/img/', $name);
            $jobseeker->profile_image = $baseurl . '/jobseeker/img/' . $name;
        }

        if ($jobseeker->save()) {
            return response()->json(['message' => 'Successful updated data', 'status' => 'success']);
        } else {
            return response()->json(['message' => 'Failed to update data'], 500);
        }
    }
    public function createEmployer(Request $request)
    {

        $employer = new Employer();
        $employer->name = $request->name;
        $employer->email = $request->email;
        $employer->password = password_hash($request->password, PASSWORD_BCRYPT);
        $employer->address = $request->address;
        $employer->phone = $request->phone;
        $employer->website = $request->website;
        $employer->socail_urls = $request->socail_urls;
        $employer->description = $request->description;
        $employer->slogan = $request->slogan;
        $employer->technologies_using = $request->technologies_using;
        $employer->company_type = $request->company_type;

        //base url for image (picking from .env varibale)
        $baseurl = URL::to('/');

        if ($request->hasFile('profile_image')) {

            $name = time() . '.' . $request->profile_image->getClientOriginalName();
            $request->profile_image->move(public_path() . '/employer/img/', $name);
            $employer->profile_image = $baseurl . '/employer/img/' . $name;
        }

        if ($employer->save()) {
            return response()->json(['message' => 'Successful created Employer', 'status' => 'success']);
        } else {
            return response()->json(['message' => 'Failed to create Employer'], 500);
        }
    }
    public function updateEmployer(Request $request)
    {

        //will get employer id from the request
        $logged_employer_id = $request->employer_id;
        $employer = Employer::findOrFail($logged_employer_id);
        $employer->name = $request->name;
        $employer->email = $request->email;
        if ($request->password) {
            $employer->password = password_hash($request->password, PASSWORD_BCRYPT);
        }
        $employer->address = $request->address;
        $employer->phone = $request->phone;
        $employer->website = $request->website;
        $employer->socail_urls = $request->socail_urls;
        $employer->description = $request->description;
        $employer->slogan = $request->slogan;
        $employer->technologies_using = $request->technologies_using;
        $employer->company_type = $request->company_type;

        //base url for image (picking from .env varibale)
        $baseurl = URL::to('/');

        if ($request->hasFile('profile_image')) {

            $name = time() . '.' . $request->profile_image->getClientOriginalName();
            $request->profile_image->move(public_path() . '/employer/img/', $name);
            $employer->profile_image = $baseurl . '/employer/img/' . $name;
        }

        if ($employer->save()) {
            return response()->json(['message' => 'Successful updated data', 'status' => 'success']);
        } else {
            return response()->json(['message' => 'Failed to update data'], 500);
        }
    }

}
