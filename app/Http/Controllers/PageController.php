<?php

namespace App\Http\Controllers;

use App\Models\Page;

class PageController extends Controller
{
    public function show($slug)
    {
        $page = Page::where('slug', $slug)->get();
        if ($page->first()) {
            return response()->json(['data' => $page]);
        }
        return response()->json(['message' => 'Couln\'nt find page you requested'],404);
    }

}
