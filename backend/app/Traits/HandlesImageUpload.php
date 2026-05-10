<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

trait HandlesImageUpload
{
    protected function resolveImage(Request $request, ?string $fallback = null): ?string
    {
        if ($request->hasFile('image_file')) {
            $path = $request->file('image_file')->store('uploads', 'public');
            return Storage::url($path);
        }

        if ($request->filled('image')) {
            return $request->input('image');
        }

        return $fallback;
    }

    protected function imageValidationRules(): array
    {
        return [
            'image_file' => 'nullable|file|mimes:jpg,jpeg,png,gif,webp,svg,mp4,mov,webm|max:51200',
            'image'      => 'nullable|string|max:500',
        ];
    }
}
