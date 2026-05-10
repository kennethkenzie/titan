<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Traits\HandlesImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    use HandlesImageUpload;

    public function index()
    {
        return view('admin.services.index', [
            'services' => Service::latest()->paginate(20),
        ]);
    }

    public function create()
    {
        return view('admin.services.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate(array_merge([
            'title'       => 'required|string|max:255',
            'slug'        => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'icon'        => 'nullable|string|max:255',
            'status'      => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['slug'] = $data['slug'] ?: Str::slug($data['title']);
        $base = $data['slug'];
        for ($i = 1; Service::where('slug', $data['slug'])->exists(); $i++) {
            $data['slug'] = "{$base}-{$i}";
        }

        $data['image'] = $this->resolveImage($request);
        unset($data['image_file']);

        Service::create($data);

        return redirect()->route('admin.services.index')->with('success', 'Service created.');
    }

    public function edit(Service $service)
    {
        return view('admin.services.edit', compact('service'));
    }

    public function update(Request $request, Service $service)
    {
        $data = $request->validate(array_merge([
            'title'       => 'required|string|max:255',
            'slug'        => 'required|string|max:255|unique:services,slug,' . $service->id,
            'description' => 'nullable|string',
            'icon'        => 'nullable|string|max:255',
            'status'      => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['image'] = $this->resolveImage($request, $service->image);
        unset($data['image_file']);

        $service->update($data);

        return redirect()->route('admin.services.index')->with('success', 'Service updated.');
    }

    public function destroy(Service $service)
    {
        $service->delete();
        return redirect()->route('admin.services.index')->with('success', 'Service deleted.');
    }

    public function toggleStatus(Service $service)
    {
        $service->update(['status' => $service->status === 'published' ? 'draft' : 'published']);
        return back()->with('success', 'Status updated.');
    }
}
