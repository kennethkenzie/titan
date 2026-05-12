@extends('layouts.admin')

@section('title', 'Overview')
@section('heading', 'Overview')

@section('content')

    {{-- Stat cards --}}
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <a href="{{ route('admin.blogs.index') }}"
           class="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/35">Blog Posts</p>
            <p class="mt-3 text-4xl font-bold">{{ $blogCount }}</p>
            <p class="mt-1 text-xs text-white/35">{{ $publishedBlogs }} published</p>
        </a>
        <a href="{{ route('admin.projects.index') }}"
           class="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/35">Projects</p>
            <p class="mt-3 text-4xl font-bold">{{ $projectCount }}</p>
            <p class="mt-1 text-xs text-white/35">{{ $publishedProjects }} published</p>
        </a>
        <a href="{{ route('admin.clients.index') }}"
           class="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/35">Clients</p>
            <p class="mt-3 text-4xl font-bold">{{ $clientCount }}</p>
            <p class="mt-1 text-xs text-white/35">{{ $publishedClients }} published</p>
        </a>
        <a href="{{ route('admin.services.index') }}"
           class="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/35">Services</p>
            <p class="mt-3 text-4xl font-bold">{{ $serviceCount }}</p>
            <p class="mt-1 text-xs text-white/35">{{ $publishedServices }} published</p>
        </a>
        <a href="{{ route('admin.case-studies.index') }}"
           class="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/35">Case Studies</p>
            <p class="mt-3 text-4xl font-bold">{{ $caseStudyCount }}</p>
            <p class="mt-1 text-xs text-white/35">{{ $publishedCaseStudies }} published</p>
        </a>
        <a href="{{ route('admin.contacts.index') }}"
           class="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/35">Enquiries</p>
            <p class="mt-3 text-4xl font-bold">{{ $contactCount }}</p>
            <p class="mt-1 text-xs text-white/35">total received</p>
        </a>
    </div>

    {{-- Recent enquiries --}}
    <div class="mt-8">
        <div class="mb-4 flex items-center justify-between">
            <h2 class="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Recent Enquiries</h2>
            <a href="{{ route('admin.contacts.index') }}"
               class="text-[10px] uppercase tracking-[0.25em] text-red-500 transition hover:text-red-400">View all</a>
        </div>

        @if ($recentContacts->isEmpty())
            <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-12 text-center">
                <p class="text-sm text-white/30">No enquiries received yet.</p>
            </div>
        @else
            <div class="overflow-hidden rounded-2xl border border-white/[0.08]">
                <table class="w-full text-sm">
                    <thead>
                        <tr class="border-b border-white/[0.08] bg-white/[0.03]">
                            <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Name</th>
                            <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Email</th>
                            <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 lg:table-cell">Company</th>
                            <th class="hidden px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35 sm:table-cell">Phone</th>
                            <th class="px-5 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.35em] text-white/35">Date</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/[0.05]">
                        @foreach ($recentContacts as $contact)
                            <tr class="bg-white/[0.01] transition hover:bg-white/[0.04]">
                                <td class="px-5 py-3.5 font-medium">{{ $contact->name }}</td>
                                <td class="px-5 py-3.5 text-white/60">{{ $contact->email }}</td>
                                <td class="hidden px-5 py-3.5 text-white/40 lg:table-cell">{{ $contact->company ?: '—' }}</td>
                                <td class="hidden px-5 py-3.5 text-white/40 sm:table-cell">{{ $contact->phone ?: '—' }}</td>
                                <td class="px-5 py-3.5 text-white/40">{{ $contact->created_at->format('d M Y') }}</td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        @endif
    </div>

    {{-- Studio quick info --}}
    <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-red-500">Kampala HQ</p>
            <p class="mt-3 text-sm leading-6 text-white/55">Eagen Mansions, Victoria Towers<br>1–13 Jinja Road, Kampala</p>
            <p class="mt-3 text-sm font-medium">+256 742 445 504</p>
        </div>
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-red-500">Brussels EU</p>
            <p class="mt-3 text-sm leading-6 text-white/55">243 Boulevard Général Jacques<br>1050 Brussels Ixelles</p>
        </div>
        <div class="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
            <p class="text-[9px] font-semibold uppercase tracking-[0.4em] text-red-500">Studio contact</p>
            <a href="mailto:info@tytangroupbqmagazineltd.com"
               class="mt-3 block break-all text-sm text-white/55 transition hover:text-white">
                info@tytangroupbqmagazineltd.com
            </a>
            <a href="https://www.tytangroupbqmagazineltd.com" target="_blank" rel="noopener"
               class="mt-2 block text-sm text-white/35 transition hover:text-white">
                www.tytangroupbqmagazineltd.com
            </a>
        </div>
    </div>

@endsection
