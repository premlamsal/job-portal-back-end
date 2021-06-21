<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    //will get all categories
    public function index()
    {
        $category = Category::all();
        return response()->json(['data' => $category]);
    }
}
