<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Traits\HandlesImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    use HandlesImageUpload;

    public function index()
    {
        return view('admin.blogs.index', [
            'blogs' => Blog::latest()->paginate(20),
        ]);
    }

    public function create()
    {
        return view('admin.blogs.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate(array_merge([
            'title'   => 'required|string|max:255',
            'slug'    => 'nullable|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'author'  => 'nullable|string|max:255',
            'status'  => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['slug'] = $data['slug'] ?: Str::slug($data['title']);
        $base = $data['slug'];
        for ($i = 1; Blog::where('slug', $data['slug'])->exists(); $i++) {
            $data['slug'] = "{$base}-{$i}";
        }

        $data['image'] = $this->resolveImage($request);
        unset($data['image_file']);

        Blog::create($data);

        return redirect()->route('admin.blogs.index')->with('success', 'Blog post created.');
    }

    public function edit(Blog $blog)
    {
        return view('admin.blogs.edit', compact('blog'));
    }

    public function update(Request $request, Blog $blog)
    {
        $data = $request->validate(array_merge([
            'title'   => 'required|string|max:255',
            'slug'    => 'required|string|max:255|unique:blogs,slug,' . $blog->id,
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'author'  => 'nullable|string|max:255',
            'status'  => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['image'] = $this->resolveImage($request, $blog->image);
        unset($data['image_file']);

        $blog->update($data);

        return redirect()->route('admin.blogs.index')->with('success', 'Blog post updated.');
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return redirect()->route('admin.blogs.index')->with('success', 'Blog post deleted.');
    }

    public function toggleStatus(Blog $blog)
    {
        $blog->update(['status' => $blog->status === 'published' ? 'draft' : 'published']);
        return back()->with('success', 'Status updated.');
    }
}
