@extends('layouts.admin')

@section('title', 'New Case Study')
@section('heading', 'New Case Study')

@section('content')

    <div class="mb-6">
        <a href="{{ route('admin.case-studies.index') }}"
           class="text-[10px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white">
            ← Back to case studies
        </a>
    </div>

    <div class="max-w-3xl">
        <form method="POST" action="{{ route('admin.case-studies.store') }}" enctype="multipart/form-data" class="space-y-6">
            @csrf

            @include('admin.case-studies._form')

            <div class="flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <button type="submit"
                    class="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-red-500">
                    Create case study
                </button>
                <a href="{{ route('admin.case-studies.index') }}"
                   class="text-xs text-white/35 transition hover:text-white">Cancel</a>
            </div>
        </form>
    </div>

    <script>
        const title = document.getElementById('title');
        const slug = document.getElementById('slug');
        let touched = slug.value !== '';
        title.addEventListener('input', () => {
            if (!touched) {
                slug.value = title.value.toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').replace(/-+/g,'-');
            }
        });
        slug.addEventListener('input', () => { touched = slug.value !== ''; });
    </script>

@endsection
