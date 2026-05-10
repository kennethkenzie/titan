<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\CaseStudy;
use App\Models\Contact;
use App\Models\Project;
use App\Models\Service;

class DashboardController extends Controller
{
    public function index()
    {
        return view('admin.dashboard', [
            'blogCount'            => Blog::count(),
            'publishedBlogs'       => Blog::published()->count(),
            'projectCount'         => Project::count(),
            'publishedProjects'    => Project::published()->count(),
            'serviceCount'         => Service::count(),
            'publishedServices'    => Service::published()->count(),
            'caseStudyCount'       => CaseStudy::count(),
            'publishedCaseStudies' => CaseStudy::published()->count(),
            'contactCount'         => Contact::count(),
            'recentContacts'       => Contact::latest()->take(6)->get(),
        ]);
    }
}
