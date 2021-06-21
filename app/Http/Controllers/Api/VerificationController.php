<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employer;
use App\Models\Jobseeker;
use App\Notifications\RegistrationNotification;
use Illuminate\Http\Request;

class VerificationController extends Controller
{
    public function verifyUser(Request $request)
    {
        if ($request->user_type == "jobseeker") {
            $user = Jobseeker::where('activation_token', $request->token)->first();

        } elseif ($request->user_type == "employer") {
            $user = Employer::where('activation_token', $request->token)->first();
        }
        if (!$user) {
            return response()->json([
                'title' => 'This activation token is invalid.',
                'description' => 'Please contact JobMalai Technical team for help.',

            ], 404);
        }
        $user->active = true;
        $user->activation_token = '';

        if ($user->save()) {
            $user->notify(new RegistrationNotification($user));

            return response()->json([
                'title' => 'Succefully verified',
                'description' => 'Dear ' . $user->name . ' Please login to your profile and complete it.!',
            ], 200);
        }

    }

}
