@extends('layouts.admin')

@section('title', 'Blog Posts')
@section('heading', 'Blog Posts')

@section('content')

    <div class="mb-5 flex items-center justify-between">
        <p class="text-sm text-white/40">{{ $blogs->total() }} {{ Str::plural('post', $blogs->total()) }} total</p>
        <a href="{{ route('admin.blogs.create') }}"
           class="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-500">
            + New post
        </a>
    </div>

    @if ($blogs->isEmpty())
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-16 text-center">
            <p class="text-sm text-white/30">No blog posts yet.</p>
        </div>
    @else
        <div class="overflow-hidden rounded-2xl border border-white/[0.08]">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-white/[0.08] bg-white/[0.03]">
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Title</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 sm:table-cell">Author</th>
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Status</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 lg:table-cell">Date</th>
                        <th class="px-5 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/[0.05]">
                    @foreach ($blogs as $blog)
                        <tr class="bg-white/[0.01] transition hover:bg-white/[0.04]">
                            <td class="px-5 py-3.5">
                                <p class="font-medium">{{ $blog->title }}</p>
                                <p class="mt-0.5 text-xs text-white/30">{{ $blog->slug }}</p>
                            </td>
                            <td class="hidden px-5 py-3.5 text-white/55 sm:table-cell">{{ $blog->author ?: '—' }}</td>
                            <td class="px-5 py-3.5">
                                <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em]
                                    {{ $blog->status === 'published' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400' }}">
                                    {{ $blog->status }}
                                </span>
                            </td>
                            <td class="hidden px-5 py-3.5 text-white/35 lg:table-cell">{{ $blog->created_at->format('d M Y') }}</td>
                            <td class="px-5 py-3.5">
                                <div class="flex items-center justify-end gap-2">
                                    <a href="{{ route('admin.blogs.edit', $blog) }}"
                                       class="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition hover:border-white/25 hover:text-white">
                                        Edit
                                    </a>
                                    <form method="POST" action="{{ route('admin.blogs.status', $blog) }}">
                                        @csrf @method('PATCH')
                                        <button type="submit"
                                            class="rounded-lg border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition
                                                {{ $blog->status === 'published'
                                                    ? 'border-yellow-500/20 text-yellow-500/70 hover:border-yellow-500/40 hover:text-yellow-400'
                                                    : 'border-green-500/20 text-green-500/70 hover:border-green-500/40 hover:text-green-400' }}">
                                            {{ $blog->status === 'published' ? 'Unpublish' : 'Publish' }}
                                        </button>
                                    </form>
                                    <form method="POST" action="{{ route('admin.blogs.destroy', $blog) }}"
                                          onsubmit="return confirm('Delete this post?')">
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
        <div class="mt-5">{{ $blogs->links() }}</div>
    @endif

@endsection
