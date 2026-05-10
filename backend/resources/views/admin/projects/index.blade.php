@extends('layouts.admin')

@section('title', 'Projects')
@section('heading', 'Projects')

@section('content')

    <div class="mb-5 flex items-center justify-between">
        <p class="text-sm text-white/40">{{ $projects->total() }} {{ Str::plural('project', $projects->total()) }} total</p>
        <a href="{{ route('admin.projects.create') }}"
           class="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-500">
            + New project
        </a>
    </div>

    @if ($projects->isEmpty())
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-16 text-center">
            <p class="text-sm text-white/30">No projects yet.</p>
        </div>
    @else
        <div class="overflow-hidden rounded-2xl border border-white/[0.08]">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-white/[0.08] bg-white/[0.03]">
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Title</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 sm:table-cell">Category</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 lg:table-cell">Client</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 lg:table-cell">Year</th>
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Status</th>
                        <th class="px-5 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/[0.05]">
                    @foreach ($projects as $project)
                        <tr class="bg-white/[0.01] transition hover:bg-white/[0.04]">
                            <td class="px-5 py-3.5">
                                <p class="font-medium">{{ $project->title }}</p>
                                <p class="mt-0.5 text-xs text-white/30">{{ $project->slug }}</p>
                            </td>
                            <td class="hidden px-5 py-3.5 text-white/55 sm:table-cell">{{ $project->category ?: '—' }}</td>
                            <td class="hidden px-5 py-3.5 text-white/55 lg:table-cell">{{ $project->client ?: '—' }}</td>
                            <td class="hidden px-5 py-3.5 text-white/35 lg:table-cell">{{ $project->year ?: '—' }}</td>
                            <td class="px-5 py-3.5">
                                <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em]
                                    {{ $project->status === 'published' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400' }}">
                                    {{ $project->status }}
                                </span>
                            </td>
                            <td class="px-5 py-3.5">
                                <div class="flex items-center justify-end gap-2">
                                    <a href="{{ route('admin.projects.edit', $project) }}"
                                       class="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition hover:border-white/25 hover:text-white">
                                        Edit
                                    </a>
                                    <form method="POST" action="{{ route('admin.projects.status', $project) }}">
                                        @csrf @method('PATCH')
                                        <button type="submit"
                                            class="rounded-lg border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition
                                                {{ $project->status === 'published'
                                                    ? 'border-yellow-500/20 text-yellow-500/70 hover:border-yellow-500/40 hover:text-yellow-400'
                                                    : 'border-green-500/20 text-green-500/70 hover:border-green-500/40 hover:text-green-400' }}">
                                            {{ $project->status === 'published' ? 'Unpublish' : 'Publish' }}
                                        </button>
                                    </form>
                                    <form method="POST" action="{{ route('admin.projects.destroy', $project) }}"
                                          onsubmit="return confirm('Delete this project?')">
                                        @csrf @method('DELETE')
                                        <button type="submit"
                                            class="rounded-lg border border-red-500/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-red-500/50 transition hover:border-red-500/40 hover:text-red-400">
                                            Delete
                                        </button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="mt-5">{{ $projects->links() }}</div>
    @endif

@endsection
