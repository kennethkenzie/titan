@extends('layouts.admin')

@section('title', 'New Client')
@section('heading', 'New Client')

@section('content')

    <div class="mb-6">
        <a href="{{ route('admin.clients.index') }}"
           class="text-[10px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white">
            ← Back to clients
        </a>
    </div>

    <div class="max-w-3xl">
        <form method="POST" action="{{ route('admin.clients.store') }}" enctype="multipart/form-data" class="space-y-6">
            @csrf

            @include('admin.clients._form')

            <div class="flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <button type="submit"
                    class="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-red-500">
                    Create client
                </button>
                <a href="{{ route('admin.clients.index') }}"
                   class="text-xs text-white/35 transition hover:text-white">Cancel</a>
            </div>
        </form>
    </div>

    <script>
        const name = document.getElementById('name');
        const slug = document.getElementById('slug');
        let touched = slug.value !== '';
        name.addEventListener('input', () => {
            if (!touched) {
                slug.value = name.value.toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-').replace(/-+/g,'-');
            }
        });
        slug.addEventListener('input', () => { touched = slug.value !== ''; });
    </script>

@endsection
