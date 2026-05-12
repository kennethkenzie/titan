<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Traits\HandlesImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ClientController extends Controller
{
    use HandlesImageUpload;

    public function index()
    {
        return view('admin.clients.index', [
            'clients' => Client::latest()->paginate(20),
        ]);
    }

    public function create()
    {
        return view('admin.clients.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate(array_merge([
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255',
            'industry' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'website' => 'nullable|url|max:255',
            'status' => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['slug'] = $data['slug'] ?: Str::slug($data['name']);
        $base = $data['slug'];
        for ($i = 1; Client::where('slug', $data['slug'])->exists(); $i++) {
            $data['slug'] = "{$base}-{$i}";
        }

        $data['logo'] = $this->resolveImage($request);
        unset($data['image'], $data['image_file']);

        Client::create($data);

        return redirect()->route('admin.clients.index')->with('success', 'Client created.');
    }

    public function edit(Client $client)
    {
        return view('admin.clients.edit', compact('client'));
    }

    public function update(Request $request, Client $client)
    {
        $data = $request->validate(array_merge([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:clients,slug,' . $client->id,
            'industry' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'website' => 'nullable|url|max:255',
            'status' => 'required|in:draft,published',
        ], $this->imageValidationRules()));

        $data['logo'] = $this->resolveImage($request, $client->logo);
        unset($data['image'], $data['image_file']);

        $client->update($data);

        return redirect()->route('admin.clients.index')->with('success', 'Client updated.');
    }

    public function destroy(Client $client)
    {
        $client->delete();

        return redirect()->route('admin.clients.index')->with('success', 'Client deleted.');
    }

    public function toggleStatus(Client $client)
    {
        $client->update(['status' => $client->status === 'published' ? 'draft' : 'published']);

        return back()->with('success', 'Client status updated.');
    }
}
