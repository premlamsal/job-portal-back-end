<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Job as JobResource;
use App\Models\Category;
use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function show($id, $count_views="no")
    {
        $job = Job::findOrFail($id);
        if ($count_views=="yes") {
            $count_views = $job->value('views');

            $job->views = $count_views + 1;

            $job->save();
            if (!$job) {
                return response()->json(['message' => 'Failed loading jobs'], 500);
            }

        }

        return response()->json(['data' => $job->with('employer')->where('id', $id)->get()]);
    }
    public function jobs()
    {
        $jobs = Job::where('status', 'active')->with('employer')->where('status', 'active');
        return JobResource::collection($jobs->paginate(8));
        // return response()->json(['data' => $jobs]);
    }
    public function featuredJobs()
    {
        $jobs = Job::where('status', 'active')->where('isFeatured', '1')->with('employer')->where('status', 'active')->limit(10)->get();
        return response()->json(['data' => $jobs]);
    }
    public function recentJobs()
    {
        $jobs = Job::where('status', 'active')->with('employer')->where('status', 'active')->orderBy('id', 'DESC')->limit(10)->get();
        return response()->json(['data' => $jobs]);
    }
    public function queryJobs(Request $request)
    {
        $jobcategory_slug = array();
        $jobtype = array();
        $jobexperience = array();
        $job_location = "";
        $job_isFeatured = "";
        $search_key = "";

        if ($request->category) {
            $jobcategory_slug = explode(',', $request->category);
        }
        if ($request->search) {
            $search_key = $request->search;
        }

        if ($request->jobtype) {
            $jobtype = explode(',', $request->jobtype);

        }
        if ($request->experience) {
            $jobexperience = explode(',', $request->experience);
        }
        if ($request->location) {
            //future function later project we will pass here array so prototype for that
            $job_location = $request->location;
        }

        $job_category_id = array();

        foreach ($jobcategory_slug as $slug) {

            $job_category_id[] = Category::where('slug', $slug)->value('id');
        }

        $jobs = Job::where(function ($q) use ($job_category_id) {
            foreach ($job_category_id as $value) {
                $q->orWhere('category_id', $value);
            }
        })->where(function ($q) use ($jobtype) {
            foreach ($jobtype as $value) {
                $q->orWhere('type', $value);
            }
        })
            ->where(function ($q) use ($jobexperience) {
                foreach ($jobexperience as $value) {
                    $q->orWhere('experience', $value);
                }
            })
            ->where('location', 'like', '%' . $job_location . '%')

            ->where('title', 'like', '%' . $search_key . '%')

        // ->where('skill', 'like', '%' . $search_key . '%')

            ->with('employer')->where('status', 'active');

        if ($request->isFeatured) {
            //future function later project we will pass here array so prototype for that
            $job_isFeatured = '1';
            $jobs = $jobs->where('isFeatured', '1');
        }

        return response()->json(['data' => $jobs->get()]);
    }

    public function create(Request $request)
    {
        $employer_id = $request->user()->id;

        $validated = $request->validate([
            'title' => 'required| max:255',
            'category_id' => 'required | numeric',
            'description' => 'required',
            'skills' => 'required',
            'salary' => 'required',
            'deadline' => 'required',
            'open_position' => 'required',
            'location' => 'required',
            'type' => 'required',
            'experience' => 'required',
        ]);

        $job = new Job();
        $job->title = $request->title;
        $job->category_id = $request->category_id;
        $job->description = $request->description;
        $job->skills = $request->skills;
        $job->salary = $request->salary;
        $job->deadline = $request->deadline;
        $job->open_position = $request->open_position;
        $job->location = $request->location;

        $job->employer_id = $employer_id;
        $job->experience = $request->experience;
        $job->type = $request->type;
        $job->status = 'Active';

        if ($job->save()) {

            return response()->json(['data' => $job, 'message' => 'You have added new job.']);
        } else {
            return response()->json(['message' => 'Failed to create new job.'], 500);

        }
    }

    public function update(Request $request)
    {
        $employer_id = $request->user()->id;

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
            'experience' => 'required',
        ]);
        $employer_id = $request->user()->id;

        $job = Job::where('id', $request->job_id)->where('employer_id', $employer_id)->first();

        $job->title = $request->title;
        $job->category_id = $request->category_id;
        $job->description = $request->description;
        $job->skills = $request->skills;
        $job->salary = $request->salary;
        $job->deadline = $request->deadline;
        $job->open_position = $request->open_position;
        $job->location = $request->location;

        $job->employer_id = $employer_id;
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
        $employer_id = $request->user()->id;
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
        $employer_id = $request->user()->id;
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
        $employer_id = $request->user()->id;
        $job = Job::where('id', $request->job_id)->where('employer_id', $employer_id)->first();

        $job->status = 'active';
        if ($job->save()) {

            return response()->json(['data' => $job, 'message' => 'You have updated job.']);
        } else {
            return response()->json(['message' => 'Failed to delete job.'], 500);

        }
    }
    public function shortList(Request $request)
    {

    }

}
