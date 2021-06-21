<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory;

    public function employer()
    {
        return $this->belongsTo('\App\Models\Employer', 'employer_id', 'id');
    }
    public function applications()
    {
        return $this->hasMany('\App\Models\Application', 'job_id', 'id');
    }
    public function category()
    {
        return $this->belongsTo('\App\Models\Category', 'category_id', 'id');
    }
}
