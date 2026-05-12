@extends('layouts.admin')

@section('title', 'Edit Client')
@section('heading', 'Edit Client')

@section('content')

    <div class="mb-6">
        <a href="{{ route('admin.clients.index') }}"
           class="text-[10px] uppercase tracking-[0.3em] text-white/35 transition hover:text-white">
            ← Back to clients
        </a>
    </div>

    <div class="max-w-3xl">
        <form method="POST" action="{{ route('admin.clients.update', $client) }}" enctype="multipart/form-data" class="space-y-6">
            @csrf
            @method('PUT')

            @include('admin.clients._form')

            <div class="flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <button type="submit"
                    class="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-red-500">
                    Save changes
                </button>
                <a href="{{ route('admin.clients.index') }}"
                   class="text-xs text-white/35 transition hover:text-white">Cancel</a>
            </div>
        </form>

        <div class="mt-6 flex justify-end border-t border-white/[0.06] pt-5">
            <form method="POST" action="{{ route('admin.clients.destroy', $client) }}"
                  onsubmit="return confirm('Delete this client? This cannot be undone.')">
                @csrf
                @method('DELETE')
                <button type="submit" class="text-xs text-red-500/60 transition hover:text-red-400">
                    Delete client
                </button>
            </form>
        </div>
    </div>

@endsection
