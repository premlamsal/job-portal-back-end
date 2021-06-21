<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\ApplicationController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\EmployerController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\JobseekerController;
use App\Http\Controllers\Api\VerificationController;
use App\Http\Controllers\AppController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::group(['prefix' => 'v1'], function () {

    Route::post('save-contact-query', [Appcontroller::class, 'saveContactQuery']);

    Route::get('email/verify/{id}', 'VerificationController@verify')->name('verification.verify');

    Route::get('email/resend/{id}', 'VerificationController@resend')->name('verification.resend');

    //general unauthenticated routes here
    Route::get('categories', [CategoryController::class, 'index']);

    Route::get('front-end-info', [Appcontroller::class, 'frontEndInfo']);

    Route::get('job/{id}/{count_views?}', [JobController::class, 'show']);

    Route::get('featured-jobs', [JobController::class, 'featuredJobs']);

    Route::get('recent-jobs', [JobController::class, 'recentJobs']);

    Route::get('jobs', [JobController::class, 'jobs']);

    Route::get('employers', [EmployerController::class, 'employers']);

    Route::get('jobseekers', [JobseekerController::class, 'jobseekers']);

    //will get application information for the public user or frontend application.
    Route::get('appinfo', [AppController::class, 'appInfoPublic']);

    //verify user i.e both jobseeker and employer
    Route::get('verify-user/{user_type}/{token}', [VerificationController::class, 'verifyUser']);

    //reset password ...this will send link to user email
    Route::post('reset-password', [AuthController::class, 'resetPassword']);

    //new password ...this will accept the token email and new password
    Route::post('new-password', [AuthController::class, 'newPassword']);

    //check token
    Route::get('check-token/{token}', [AuthController::class, 'checkToken']);
    //pages
    Route::get('page/{slug}', [PageController::class, 'show']);

    Route::get('query-jobs', [JobController::class, 'queryJobs']);

    //get jobseekers for public
    Route::get('all-jobseekers', [EmployerController::class, 'allJobseekers']);

    //get employers for public

    Route::get('all-employers', [EmployerController::class, 'allEmployers']);


    Route::get('employer-public-profile/{id}/{count_views?}', [EmployerController::class, 'employerPublicProfile']);

    Route::get('jobseeker-public-profile/{id}/{count_views?}', [JobseekerController::class, 'jobseekerPublicProfile']);

    Route::group(['prefix' => 'admin'], function () {

        //admin routes
        Route::post('login', [AdminController::class, 'login']);

        Route::group(['middleware' => ['auth:admin', 'scope:admin', 'cors']], function () {
            //only authenticated admin only

            Route::post('logout', [AuthController::class, 'logout']);

            Route::get('dash-info', [AdminController::class, 'dashInfo']);

            Route::get('applications', [AdminController::class, 'applications']);

            Route::post('cancel-application', [AdminController::class, 'cancelApplication']);

            Route::get('appinfoadmin', [AppController::class, 'appInfoAdmin']);

            Route::post('updateappinfo', [AppController::class, 'updateAppInfo']);

            Route::post('create-job', [AdminController::class, 'createJob']);

            Route::post('update-job', [AdminController::class, 'updateJob']);

            Route::post('close-job', [AdminController::class, 'closeJob']);

            Route::post('active-job', [AdminController::class, 'activeJob']);

            Route::post('delete-job', [AdminController::class, 'destroyJob']);

            Route::get('jobseeker/{id}', [AdminController::class, 'showJobseeker']);

            Route::post('create-jobseeker', [AdminController::class, 'createJobseeker']);

            Route::post('update-jobseeker', [AdminController::class, 'updateJobseeker']);

            Route::post('delete-jobseeker', [AdminController::class, 'destroyJobseeker']);

            Route::get('employer/{id}', [AdminController::class, 'showEmployer']);

            Route::post('create-employer', [AdminController::class, 'createEmployer']);

            Route::post('update-employer', [AdminController::class, 'updateEmployer']);

            Route::post('delete-employer', [AdminController::class, 'destroyEmployer']);

            //only authenticated admin only
        });

    });
    //admin routes

    Route::group(['prefix' => 'jobseeker'], function () {

        Route::post('register', [JobseekerController::class, 'register']);

        Route::post('login', [JobseekerController::class, 'login']);

        //unauthenticated routes for jobseeker here

        Route::group(['middleware' => ['auth:jobseeker', 'scope:jobseeker', 'cors']], function () {
            // authenticated jobseeker routes here
            Route::post('info', [JobseekerController::class, 'info']);

            Route::post('updateinfo', [JobseekerController::class, 'updateinfo']);

            Route::post('apply-job', [ApplicationController::class, 'applyJob']);

            Route::get('dash-info', [JobseekerController::class, 'dashInfo']);

            Route::get('resume', [JobseekerController::class, 'resume']);

            Route::post('update-resume', [JobseekerController::class, 'updateResume']);

            Route::post('update-profile-image', [JobseekerController::class, 'updateProfileImage']);

            Route::get('messages', [JobseekerController::class, 'allMessages']);

            Route::get('applied-jobs', [JobseekerController::class, 'appliedJobs']);

            Route::get('matched-jobs', [JobseekerController::class, 'matchedJob']);

            Route::post('cancel-application', [ApplicationController::class, 'cancelApplication']);

            Route::post('logout', [AuthController::class, 'logout']);
        });
    });

    Route::group(['prefix' => 'employer'], function () {

        Route::post('register', [EmployerController::class, 'register']);

        Route::post('login', [EmployerController::class, 'login']);

        //unauthenticated routes for employer here

        Route::group(['middleware' => ['auth:employer', 'scope:employer']], function () {
            // authenticated Employer routes here
            // authenticated jobseeker routes here
            Route::post('info', [EmployerController::class, 'info']);
            
            Route::post('updateinfo', [EmployerController::class, 'updateinfo']);
            
            Route::get('jobs', [EmployerController::class, 'jobs']);
            
            Route::post('create-job', [JobController::class, 'create']);
            
            Route::post('update-job', [JobController::class, 'update']);
            
            Route::post('close-job', [JobController::class, 'closeJob']);

            Route::get('dash-info', [EmployerController::class, 'dashInfo']);
            
            Route::post('update-profile-image', [EmployerController::class, 'updateProfileImage']);

            Route::get('messages', [EmployerController::class, 'allMessages']);

            Route::post('active-job', [JobController::class, 'activeJob']);
            
            Route::post('delete-job', [JobController::class, 'destroyJob']);

            Route::post('logout', [AuthController::class, 'logout']);

            Route::get('jobs-applications', [EmployerController::class, 'jobsApplications']);

            Route::post('accept-application', [ApplicationController::class, 'acceptApplication']);

            Route::post('reject-application', [ApplicationController::class, 'rejectApplication']);

            Route::post('interview-call', [ApplicationController::class, 'interviewCall']);

        });
    });

});
