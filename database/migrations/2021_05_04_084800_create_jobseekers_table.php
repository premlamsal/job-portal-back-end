<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobseekersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobseekers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->text('profile_image')->nullable();
            $table->text('resume_file')->nullable();
            $table->text('cover_letter')->nullable();
            $table->string('gender')->nullable();
            $table->text('skills')->nullable();
            $table->text('qualification')->nullable();
            $table->string('title')->nullable();
            $table->text('address')->nullable();
            $table->text('phone')->nullable();
            $table->text('website')->nullable();
            $table->string('status')->nullable();
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('youtube')->nullable();
            $table->string('github')->nullable();
            $table->string('views')->default('0');
            $table->string('isFeatured')->nullable();
            $table->string('last_login')->nullable();
            $table->boolean('active')->default(false);
            $table->string('activation_token');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobseekers');
    }
}
