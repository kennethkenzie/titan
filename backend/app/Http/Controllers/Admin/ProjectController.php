<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Traits\HandlesImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    use HandlesImageUpload;

    public function index()
    {
        return view('admin.projects.index', [
            'projects' => Project::latest()->paginate(20),
        ]);
    }

    public function create()
    {
        return view('admin.projects.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate(array_merge([
            'title'       => 'required|string|max:255',
            'slug'        => 'nullable|string|max:255',
            'category'    => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'client'      => 'nullable|string|max:255',
            'year'        => 'nullable|integer|between:1900,2100',
            'status'      => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['slug'] = $data['slug'] ?: Str::slug($data['title']);
        $base = $data['slug'];
        for ($i = 1; Project::where('slug', $data['slug'])->exists(); $i++) {
            $data['slug'] = "{$base}-{$i}";
        }

        $data['image'] = $this->resolveImage($request);
        unset($data['image_file']);

        Project::create($data);

        return redirect()->route('admin.projects.index')->with('success', 'Project created.');
    }

    public function edit(Project $project)
    {
        return view('admin.projects.edit', compact('project'));
    }

    public function update(Request $request, Project $project)
    {
        $data = $request->validate(array_merge([
            'title'       => 'required|string|max:255',
            'slug'        => 'required|string|max:255|unique:projects,slug,' . $project->id,
            'category'    => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'client'      => 'nullable|string|max:255',
            'year'        => 'nullable|integer|between:1900,2100',
            'status'      => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['image'] = $this->resolveImage($request, $project->image);
        unset($data['image_file']);

        $project->update($data);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated.');
    }

    public function destroy(Project $project)
    {
        $project->delete();
        return redirect()->route('admin.projects.index')->with('success', 'Project deleted.');
    }

    public function toggleStatus(Project $project)
    {
        $project->update(['status' => $project->status === 'published' ? 'draft' : 'published']);
        return back()->with('success', 'Status updated.');
    }
}
