<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Models\Service;

class ServiceController extends Controller
{
    public function index() {
        return ServiceResource::collection(Service::published()->latest('id')->get());
    }
    public function show(string $slug) {
        return new ServiceResource(Service::published()->where('slug', $slug)->firstOrFail());
    }
}
