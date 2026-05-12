@extends('layouts.admin')

@section('title', 'Clients')
@section('heading', 'Clients')

@section('content')

    <div class="mb-5 flex items-center justify-between">
        <p class="text-sm text-white/40">{{ $clients->total() }} {{ Str::plural('client', $clients->total()) }} total</p>
        <a href="{{ route('admin.clients.create') }}"
           class="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-500">
            + New client
        </a>
    </div>

    @if ($clients->isEmpty())
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-16 text-center">
            <p class="text-sm text-white/30">No clients yet.</p>
        </div>
    @else
        <div class="overflow-hidden rounded-2xl border border-white/[0.08]">
            <table class="w-full text-sm">
                <thead>
                    <tr class="border-b border-white/[0.08] bg-white/[0.03]">
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Client</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 sm:table-cell">Industry</th>
                        <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 lg:table-cell">Website</th>
                        <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Status</th>
                        <th class="px-5 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/[0.05]">
                    @foreach ($clients as $client)
                        <tr class="bg-white/[0.01] transition hover:bg-white/[0.04]">
                            <td class="px-5 py-3.5">
                                <div class="flex items-center gap-3">
                                    <div class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04]">
                                        @if ($client->logo)
                                            <img src="{{ $client->logo }}" alt="{{ $client->name }}" class="h-full w-full object-cover">
                                        @else
                                            <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">{{ Str::substr($client->name, 0, 2) }}</span>
                                        @endif
                                    </div>
                                    <div>
                                        <p class="font-medium">{{ $client->name }}</p>
                                        <p class="mt-0.5 text-xs text-white/30">{{ $client->slug }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="hidden px-5 py-3.5 text-white/55 sm:table-cell">{{ $client->industry ?: '—' }}</td>
                            <td class="hidden px-5 py-3.5 text-white/55 lg:table-cell">
                                @if ($client->website)
                                    <a href="{{ $client->website }}" target="_blank" rel="noopener" class="transition hover:text-white">{{ $client->website }}</a>
                                @else
                                    —
                                @endif
                            </td>
                            <td class="px-5 py-3.5">
                                <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em]
                                    {{ $client->status === 'published' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400' }}">
                                    {{ $client->status }}
                                </span>
                            </td>
                            <td class="px-5 py-3.5">
                                <div class="flex items-center justify-end gap-2">
                                    <a href="{{ route('admin.clients.edit', $client) }}"
                                       class="rounded-lg border border-white/[0.1] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition hover:border-white/25 hover:text-white">
                                        Edit
                                    </a>
                                    <form method="POST" action="{{ route('admin.clients.status', $client) }}">
                                        @csrf @method('PATCH')
                                        <button type="submit"
                                            class="rounded-lg border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] transition
                                                {{ $client->status === 'published'
                                                    ? 'border-yellow-500/20 text-yellow-500/70 hover:border-yellow-500/40 hover:text-yellow-400'
                                                    : 'border-green-500/20 text-green-500/70 hover:border-green-500/40 hover:text-green-400' }}">
                                            {{ $client->status === 'published' ? 'Unpublish' : 'Publish' }}
                                        </button>
                                    </form>
                                    <form method="POST" action="{{ route('admin.clients.destroy', $client) }}"
                                          onsubmit="return confirm('Delete this client?')">
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
        <div class="mt-5">{{ $clients->links() }}</div>
    @endif

@endsection
