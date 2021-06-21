<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    public function job()
    {
        return $this->belongsTo('\App\Models\Job', 'job_id', 'id');
    }
    public function jobseeker(){
        return $this->belongsTo('\App\Models\Jobseeker', 'jobseeker_id', 'id');

    }
}
