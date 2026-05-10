<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogResource;
use App\Models\Blog;

class BlogController extends Controller
{
    public function index() {
        return BlogResource::collection(Blog::published()->latest('id')->get());
    }
    public function show(string $slug) {
        return new BlogResource(Blog::published()->where('slug', $slug)->firstOrFail());
    }
}
