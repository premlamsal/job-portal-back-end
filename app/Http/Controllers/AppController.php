<?php

namespace App\Http\Controllers;

use App\Models\App;
use App\Models\Application;
use App\Models\Contact;
use App\Models\Employer;
use App\Models\Job;
use App\Models\Jobseeker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class AppController extends Controller
{
    public function frontEndInfo()
    {

    }
    public function appInfoPublic()
    {
        $app = App::where('id', 1)->get();

        // return AppResource::collection($app);

        $jobs_count = Job::all()->count();
        $employers_count = Employer::all()->count();
        $jobseekers_count = Jobseeker::all()->count();
        $applications_count = Application::all()->count();
        $featured_jobs_count = Job::where('isFeatured', 1)->count();
        //we assign more properties to the app variable
        $app[0]->jobs_count = $jobs_count;
        $app[0]->employers_count = $employers_count;
        $app[0]->jobseekers_count = $jobseekers_count;
        $app[0]->applications_count = $applications_count;
        $app[0]->featured_jobs_count = $featured_jobs_count;

        // $dashinfo = array('jobs' => $jobs_count, 'employers' => $employers_count,
        //     'jobseekers' => $jobseekers_count, 'applications' => $applications_count,
        //     'featuredjobs' => $featured_jobs_count,
        // );

        return response()->json(['data' => $app]);

    }
    public function appInfoAdmin()
    {
        $app = App::where('id', 1)->get();

        $app[0]->phones = json_decode($app[0]->phones);

        return response()->json(['data' => $app]);
    }
    public function saveContactQuery(Request $request)
    {

        $validated = $request->validate([
            'message' => 'required',
            'subject' => 'required',
            'name' => 'required',
            'email' => 'required',
        ]);

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->subject = $request->subject;
        $contact->message = $request->message;
        if ($contact->save()) {
            return response()->json(['message' => 'Your query have been submitted. You will get reply soon!', 'status' => 'success']);

        } else {
            return response()->json(['message' => 'Sorry!! Some error occured while submiting your query.', 'status' => 'error']);
        }

    }
    public function updateAppInfo(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email:rfc,dns|max:255',
            'app_name' => 'required',
            'app_slogan' => 'required',
            'app_logo' => 'required|image',
            'app_icon' => 'required',
            'address' => 'required',
            'phone' => 'required',
            'mobile' => 'required',
            'facebook' => 'required',
            'twitter' => 'required',
            'youtube' => 'required',

            'copyright_text' => 'required',
        ]);

        $app = App::findOrFail(1);
        $app->app_name = $request->app_name;
        $app->email = $request->email;
        $app->app_slogan = $request->app_slogan;
        $app->address = $request->address;
        $app->mobile = $request->mobile;
        $app->phone = $request->phone;

        $app->facebook = $request->facebook;
        $app->twitter = $request->twitter;
        $app->youtube = $request->youtube;
        $app->github = $request->github;

        $app->copyright_text = $request->copyright_text;
        //base url for image (picking from .env varibale)
        $baseurl = URL::to('/');
        if ($request->hasFile('app_logo')) {

            $file_name = $request->app_logo->getClientOriginalName();
            $file_ext = $request->app_logo->getClientOriginalExtension;

            $name = md5(uniqid() . $file_name) . '.' . $file_ext;
            $request->app_logo->move(public_path() . '/', $name);

        }
        if ($request->hasFile('app_icon')) {
            $name = "favicon.ico";
            $request->app_icon->move(public_path() . '/', $name);
            $app->app_icon = $baseurl . '/' . $name;
        }

        if ($app->save()) {
            return response()->json(['message' => 'App Info updated']);
        } else {
            return response()->json(['message' => 'App Info update failed'], 500);
        }
    }
}
