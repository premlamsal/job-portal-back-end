<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Employer;
use App\Models\Jobseeker;
use App\Notifications\PasswordResetNotification;
use Carbon\Carbon;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function logout(Request $request)
    {

        if ($request->user()->token()->revoke()) {

            return response()->json(['message' => 'User\'s token revoked']);
        }
        return response()->json(['message' => 'Error occured !!! while revoking User token']);
    }
    public function checkToken(Request $request)
    {
        $check = DB::table('password_resets')
            ->where([
                'token' => $request->token,
            ])
            ->first();
        if (!$check) {
            return response()->json(['message' => 'Error occured !!!', 'status' => 'error'], 500);
        }
        return response()->json(['message' => 'Token is okay'],200);

    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $token = Str::random(64);
        $is_user_in_db = false;
        $user = '';
        if (Jobseeker::where('email', $request->email)->first()) {
            $is_user_in_db = true;
            $user = Jobseeker::where('email', $request->email)->first();

        } elseif (Employer::where('email', $request->email)->first()) {
            $is_user_in_db = true;
            $user = Employer::where('email', $request->email)->first();
        }
        if (!$is_user_in_db) {
            //no user available in database
            return response()->json(['message' => 'Sorry!! We couldn\'t find this email in our system'], 500);
        }
        DB::table('password_resets')->insert([
            'email' => $request->email,
            'token' => $token,
            'created_at' => Carbon::now(),
        ]);
        $user->password_reset_token = $token;

        $user->notify(new PasswordResetNotification($user));

        return response()->json(['message' => 'We have sent password reset link to your email. Please check inbox otherwise will expires soon!!'], 200);
    }
    public function newPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required',
        ]);
        $updatePassword = DB::table('password_resets')
            ->where([
                'email' => $request->email,
                'token' => $request->token,
            ])
            ->first();

        if (!$updatePassword) {
            return response()->json(['message' => 'Invalid token'], 500);
        }

        //check if user is jobseeker
        if (Jobseeker::where('email', $request->email)->first()) {
            $user = Jobseeker::where('email', $request->email)
                ->update(['password' => Hash::make($request->password)]);

        } elseif (Employer::where('email', $request->email)->first()) {

            $user = Employer::where('email', $request->email)
                ->update(['password' => Hash::make($request->password)]);
        }

        DB::table('password_resets')->where(['email' => $request->email])->delete();

        return response()->json(['message' => 'Your password has been changed!'], 200);

    }
}
