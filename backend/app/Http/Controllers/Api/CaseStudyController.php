<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CaseStudyResource;
use App\Models\CaseStudy;

class CaseStudyController extends Controller
{
    public function index() {
        return CaseStudyResource::collection(CaseStudy::published()->latest('id')->get());
    }
    public function show(string $slug) {
        return new CaseStudyResource(CaseStudy::published()->where('slug', $slug)->firstOrFail());
    }
}
