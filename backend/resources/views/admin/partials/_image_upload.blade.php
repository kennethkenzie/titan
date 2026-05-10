{{--
  Variables:
    $fieldName   — HTML field name prefix (default: 'image')
    $currentUrl  — existing URL to preview
--}}
@php
    $fieldName  = $fieldName  ?? 'image';
    $currentUrl = $currentUrl ?? null;
    $uid        = 'upload_' . $fieldName . '_' . Str::random(6);
@endphp

<div id="{{ $uid }}">

    {{-- Current media preview --}}
    <div id="{{ $uid }}_preview"
         class="mb-3 overflow-hidden rounded-xl border border-white/[0.08] {{ $currentUrl ? '' : 'hidden' }}">
        @if ($currentUrl)
            @if (preg_match('/\.(mp4|mov|webm|avi)(\?|$)/i', $currentUrl))
                <video src="{{ $currentUrl }}" class="h-52 w-full object-cover" controls></video>
            @else
                <img src="{{ $currentUrl }}" class="h-52 w-full object-cover" alt="Current media">
            @endif
        @endif
    </div>

    {{-- Drop zone --}}
    <label for="{{ $uid }}_file"
           id="{{ $uid }}_dropzone"
           class="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-white/[0.12] bg-white/[0.02] px-6 py-10 text-center transition hover:border-red-500/40 hover:bg-white/[0.04]">
        <svg class="h-8 w-8 text-white/25" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"/>
        </svg>
        <div>
            <p class="text-sm font-medium text-white/55">
                Drop here, or <span class="text-red-400">browse files</span>
            </p>
            <p class="mt-1 text-xs text-white/25">JPG · PNG · WebP · GIF · SVG · MP4 · MOV · WebM — max 50 MB</p>
        </div>
        <input type="file"
               id="{{ $uid }}_file"
               name="{{ $fieldName }}_file"
               accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,video/mp4,video/quicktime,video/webm"
               class="sr-only">
    </label>

    {{-- URL fallback --}}
    <div class="mt-3">
        <label for="{{ $uid }}_url"
               class="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.4em] text-white/25">
            Or paste a URL
        </label>
        <input type="text"
               id="{{ $uid }}_url"
               name="{{ $fieldName }}"
               value="{{ old($fieldName, $currentUrl) }}"
               class="w-full rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-red-500/50 focus:bg-white/[0.07]"
               placeholder="https://...">
    </div>
</div>

<script>
(function () {
    const uid      = '{{ $uid }}';
    const fileInput = document.getElementById(uid + '_file');
    const preview   = document.getElementById(uid + '_preview');
    const dropzone  = document.getElementById(uid + '_dropzone');

    function showPreview(file) {
        const url     = URL.createObjectURL(file);
        const isVideo = file.type.startsWith('video/');
        preview.classList.remove('hidden');
        preview.innerHTML = isVideo
            ? `<video src="${url}" class="h-52 w-full object-cover" controls></video>`
            : `<img src="${url}" class="h-52 w-full object-cover" alt="Preview">`;
    }

    fileInput.addEventListener('change', e => {
        if (e.target.files[0]) showPreview(e.target.files[0]);
    });

    ['dragover', 'dragenter'].forEach(evt => {
        dropzone.addEventListener(evt, e => {
            e.preventDefault();
            dropzone.classList.add('border-red-500/50', 'bg-white/[0.05]');
        });
    });

    ['dragleave', 'dragend'].forEach(evt => {
        dropzone.addEventListener(evt, () => {
            dropzone.classList.remove('border-red-500/50', 'bg-white/[0.05]');
        });
    });

    dropzone.addEventListener('drop', e => {
        e.preventDefault();
        dropzone.classList.remove('border-red-500/50', 'bg-white/[0.05]');
        const file = e.dataTransfer?.files[0];
        if (file) {
            const dt   = new DataTransfer();
            dt.items.add(file);
            fileInput.files = dt.files;
            showPreview(file);
        }
    });
})();
</script>
