<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class App extends JsonResource
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
            'app_name' => $this->app_name,
            'app_slogan' => $this->app_slogan,
            'app_logo' => $this->app_logo,
            'app_icon' => $this->app_icon,
            'address' => $this->address,
            'phones' => json_decode($this->phones,true), //json
            'email' => $this->email,
            'socail_url' => $this->socail_url,
            'copyright_text' => $this->copyright_text,

        ];
    }
}
