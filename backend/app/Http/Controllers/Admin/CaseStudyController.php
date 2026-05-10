<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CaseStudy;
use App\Traits\HandlesImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CaseStudyController extends Controller
{
    use HandlesImageUpload;

    public function index()
    {
        return view('admin.case-studies.index', [
            'caseStudies' => CaseStudy::latest()->paginate(20),
        ]);
    }

    public function create()
    {
        return view('admin.case-studies.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate(array_merge([
            'title'     => 'required|string|max:255',
            'slug'      => 'nullable|string|max:255',
            'summary'   => 'nullable|string',
            'challenge' => 'nullable|string',
            'solution'  => 'nullable|string',
            'results'   => 'nullable|string',
            'status'    => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['slug'] = $data['slug'] ?: Str::slug($data['title']);
        $base = $data['slug'];
        for ($i = 1; CaseStudy::where('slug', $data['slug'])->exists(); $i++) {
            $data['slug'] = "{$base}-{$i}";
        }

        $data['image'] = $this->resolveImage($request);
        unset($data['image_file']);

        CaseStudy::create($data);

        return redirect()->route('admin.case-studies.index')->with('success', 'Case study created.');
    }

    public function edit(CaseStudy $caseStudy)
    {
        return view('admin.case-studies.edit', compact('caseStudy'));
    }

    public function update(Request $request, CaseStudy $caseStudy)
    {
        $data = $request->validate(array_merge([
            'title'     => 'required|string|max:255',
            'slug'      => 'required|string|max:255|unique:case_studies,slug,' . $caseStudy->id,
            'summary'   => 'nullable|string',
            'challenge' => 'nullable|string',
            'solution'  => 'nullable|string',
            'results'   => 'nullable|string',
            'status'    => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['image'] = $this->resolveImage($request, $caseStudy->image);
        unset($data['image_file']);

        $caseStudy->update($data);

        return redirect()->route('admin.case-studies.index')->with('success', 'Case study updated.');
    }

    public function destroy(CaseStudy $caseStudy)
    {
        $caseStudy->delete();
        return redirect()->route('admin.case-studies.index')->with('success', 'Case study deleted.');
    }

    public function toggleStatus(CaseStudy $caseStudy)
    {
        $caseStudy->update(['status' => $caseStudy->status === 'published' ? 'draft' : 'published']);
        return back()->with('success', 'Status updated.');
    }
}
