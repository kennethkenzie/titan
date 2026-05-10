@extends('layouts.admin')

@section('title', 'Case Studies')
@section('heading', 'Case Studies')

@section('content')

    <div class="mb-5 flex items-center justify-between">
        <p class="text-sm text-white/40">{{ $caseStudies->total() }} {{ Str::plural('case study', $caseStudies->total()) }} total</p>
        <a href="{{ route('admin.case-studies.create') }}"
           class="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-500">
            + New case study
        </a>
    </div>

    @if ($caseStudies->isEmpty())
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-16 text-center">
            <p class="text-sm text-white/30">No case studies yet.</p>
        </div>
    @else
        <div class="overflow-hidden rounded-2xl border border-white/[0.08]">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-white/[0.08] bg-white/[0.03]">
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Title</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 sm:table-cell">Summary</th>
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Status</th>
                        <th class="px-5 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/[0.05]">
                    @foreach ($caseStudies as $study)
                        <tr class="bg-white/[0.01] transition hover:bg-white/[0.04]">
                            <td class="px-5 py-3.5">
                                <p class="font-medium">{{ $study->title }}</p>
                                <p class="mt-0.5 text-xs text-white/30">{{ $study->slug }}</p>
                            </td>
                            <td class="hidden px-5 py-3.5 text-white/45 sm:table-cell">
                                <p class="max-w-xs truncate">{{ $study->summary ?: '—' }}</p>
                            </td>
                            <td class="px-5 py-3.5">
                                <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em]
                                    {{ $study->status === 'published' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400' }}">
                                    {{ $study->status }}
                                </span>
                            </td>
                            <td class="px-5 py-3.5">
                                <div class="flex items-center justify-end gap-2">
                                    <a href="{{ route('admin.case-studies.edit', $study) }}"
                                       class="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition hover:border-white/25 hover:text-white">
                                        Edit
                                    </a>
                                    <form method="POST" action="{{ route('admin.case-studies.status', $study) }}">
                                        @csrf @method('PATCH')
                                        <button type="submit"
                                            class="rounded-lg border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition
                                                {{ $study->status === 'published'
                                                    ? 'border-yellow-500/20 text-yellow-500/70 hover:border-yellow-500/40 hover:text-yellow-400'
                                                    : 'border-green-500/20 text-green-500/70 hover:border-green-500/40 hover:text-green-400' }}">
                                            {{ $study->status === 'published' ? 'Unpublish' : 'Publish' }}
                                        </button>
                                    </form>
                                    <form method="POST" action="{{ route('admin.case-studies.destroy', $study) }}"
                                          onsubmit="return confirm('Delete this case study?')">
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
        <div class="mt-5">{{ $caseStudies->links() }}</div>
    @endif

@endsection
