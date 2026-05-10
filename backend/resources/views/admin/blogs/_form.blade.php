@php $m = $blog ?? null; @endphp

<div class="space-y-5">
    <div class="grid gap-5 sm:grid-cols-2">
        <div class="sm:col-span-2">
            <label class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Title</label>
            <input id="title" type="text" name="title" value="{{ old('title', $m?->title) }}"
                class="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-red-500/50 focus:bg-white/[0.07]"
                placeholder="Post title" required>
            @error('title') <p class="mt-1 text-xs text-red-400">{{ $message }}</p> @enderror
        </div>

        <div>
            <label class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Slug</label>
            <input id="slug" type="text" name="slug" value="{{ old('slug', $m?->slug) }}"
                class="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-red-500/50 focus:bg-white/[0.07]"
                placeholder="auto-generated-from-title">
            @error('slug') <p class="mt-1 text-xs text-red-400">{{ $message }}</p> @enderror
        </div>

        <div>
            <label class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Author</label>
            <input type="text" name="author" value="{{ old('author', $m?->author) }}"
                class="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-red-500/50 focus:bg-white/[0.07]"
                placeholder="Author name">
            @error('author') <p class="mt-1 text-xs text-red-400">{{ $message }}</p> @enderror
        </div>

        <div>
            <label class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Status</label>
            <select name="status"
                class="w-full rounded-xl border border-white/[0.1] bg-neutral-900 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500/50">
                <option value="draft" @selected(old('status', $m?->status ?? 'draft') === 'draft')>Draft</option>
                <option value="published" @selected(old('status', $m?->status) === 'published')>Published</option>
            </select>
        </div>

        <div class="sm:col-span-2">
            <label class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Image / Video</label>
            @include('admin.partials._image_upload', ['fieldName' => 'image', 'currentUrl' => old('image', $m?->image)])
            @error('image_file') <p class="mt-1 text-xs text-red-400">{{ $message }}</p> @enderror
            @error('image') <p class="mt-1 text-xs text-red-400">{{ $message }}</p> @enderror
        </div>
    </div>

    <div>
        <label class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Excerpt</label>
        <textarea name="excerpt" rows="3"
            class="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-red-500/50 focus:bg-white/[0.07]"
            placeholder="Short summary">{{ old('excerpt', $m?->excerpt) }}</textarea>
        @error('excerpt') <p class="mt-1 text-xs text-red-400">{{ $message }}</p> @enderror
    </div>

    <div>
        <label class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">Content</label>
        <textarea name="content" rows="14"
            class="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-red-500/50 focus:bg-white/[0.07]"
            placeholder="Full article content…">{{ old('content', $m?->content) }}</textarea>
        @error('content') <p class="mt-1 text-xs text-red-400">{{ $message }}</p> @enderror
    </div>
</div>
