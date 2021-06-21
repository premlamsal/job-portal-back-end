<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('slug')->nullable();
            $table->text('description')->nullable();
            $table->string('salary')->nullable();
            $table->date('deadline')->nullable();
            $table->string('open_position')->nullable();
            $table->string('location');
            $table->string('views')->default('0');
            $table->text('skills');
            $table->string('experience')->nullable();//disable this in production
            $table->enum('type',['full_time','remote','part_time','project_basis','freelance']);
            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
            $table->unsignedBigInteger('employer_id')->nullable();
            $table->foreign('employer_id')->references('id')->on('employers');
            $table->boolean('isFeatured')->default('0');
            $table->string('status')->nullable();
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
        Schema::dropIfExists('jobs');
    }
}
