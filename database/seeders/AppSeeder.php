<?php

namespace Database\Seeders;

use App\Models\App;
use Illuminate\Database\Seeder;

class AppSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App::create([
            
        	'app_name' => 'JobMalai',
        	'app_slogan' => 'get your dream Job',
        	'app_icon' => 'http:://jobmalai.test/logo.ico',
        	'app_logo' => 'http:://jobmalai.test/logo.png',
        	'address' => 'Ghorahi Dang, BP chowk',
        	'phone' => '+9779868616747',
        	'mobile' => ' +977 9876545436',
        	'email' => 'premlamsal2@gmail.com',
        	'facebook' => 'https://www.facebook.com/prmlamsal/',
        	'github' => 'https://www.facebook.com/prmlamsal/',
        	'youtube' => 'https://www.facebook.com/prmlamsal/',
        	'copyright_text' => 'Copyright © 2021 All rights reserved',
        ]);
    }
}
