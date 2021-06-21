<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
class Job extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'title' => $this->title,
            'employer' => $this->employer,
            'location' => $this->location,
            'slug' => $this->slug,
            'type' => $this->type,
            'open_positions' => $this->open_positions,
            'experience' => $this->experience,
            'isFeatured' => $this->isFeatured,
            'description' => $this->description,
            'salary' => $this->salary,
            'deadline' => $this->deadline,
            'status' => $this->status,
            //creating carbon object from the string 'deadline' to find that if it is expired or not from now
            //isPast() will return true if the date is from past or not i.e date is expired or not
            'isExpired' => (Carbon::parse($this->deadline))->isPast(),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
