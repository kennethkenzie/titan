<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title', 'Dashboard') — Smari Creative Admin</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="min-h-screen bg-neutral-950 text-white antialiased">
<div class="flex min-h-screen">

    {{-- ── Sidebar ──────────────────────────────────────────────────── --}}
    <aside class="fixed inset-y-0 left-0 z-50 flex w-60 flex-col border-r border-white/[0.07] bg-[#0c0c0c]">

        {{-- Brand --}}
        <div class="flex h-16 shrink-0 items-center border-b border-white/[0.07] px-5">
            <div>
                <p class="text-[9px] font-semibold uppercase tracking-[0.5em] text-red-500">Smari Creative</p>
                <p class="text-[10px] text-white/30">Admin Portal</p>
            </div>
        </div>

        {{-- Navigation --}}
        <nav class="flex-1 overflow-y-auto p-3">
            <p class="mb-2 px-2 text-[9px] font-semibold uppercase tracking-[0.4em] text-white/25">Menu</p>

            @php
                $link = fn(string $route) => request()->routeIs($route)
                    ? 'border border-red-500/20 bg-red-600/10 text-red-400'
                    : 'border border-transparent text-white/55 hover:bg-white/[0.05] hover:text-white';
            @endphp

            <a href="{{ route('admin.dashboard') }}"
               class="mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition {{ $link('admin.dashboard') }}">
                <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/>
                </svg>
                Overview
            </a>

            <a href="{{ route('admin.blogs.index') }}"
               class="mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition {{ $link('admin.blogs.index') }}">
                <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"/>
                </svg>
                Blog Posts
            </a>

            <a href="{{ route('admin.projects.index') }}"
               class="mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition {{ $link('admin.projects.index') }}">
                <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"/>
                </svg>
                Projects
            </a>

            <a href="{{ route('admin.services.index') }}"
               class="mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition {{ $link('admin.services.index') }}">
                <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                Services
            </a>

            <a href="{{ route('admin.case-studies.index') }}"
               class="mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition {{ $link('admin.case-studies.index') }}">
                <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
                </svg>
                Case Studies
            </a>

            <a href="{{ route('admin.contacts.index') }}"
               class="mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition {{ $link('admin.contacts.index') }}">
                <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                </svg>
                Enquiries
            </a>
        </nav>

        {{-- User + sign out --}}
        <div class="shrink-0 border-t border-white/[0.07] p-3">
            <div class="mb-2 rounded-xl bg-white/[0.04] px-3 py-3">
                <p class="text-[9px] uppercase tracking-[0.35em] text-white/25">Signed in as</p>
                <p class="mt-1 truncate text-sm font-semibold">{{ auth()->user()->name }}</p>
                <p class="truncate text-xs text-white/35">{{ auth()->user()->email }}</p>
            </div>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit"
                    class="w-full rounded-xl px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 transition hover:bg-red-600/10 hover:text-red-400">
                    Sign out
                </button>
            </form>
        </div>
    </aside>

    {{-- ── Main area ────────────────────────────────────────────────── --}}
    <div class="ml-60 flex flex-1 flex-col">

        {{-- Topbar --}}
        <header class="sticky top-0 z-40 flex h-14 shrink-0 items-center justify-between border-b border-white/[0.07] bg-neutral-950/90 px-8 backdrop-blur">
            <h1 class="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">@yield('heading', 'Dashboard')</h1>
            <p class="text-[10px] text-white/25">{{ now()->format('l, d M Y') }}</p>
        </header>

        {{-- Page content --}}
        <main class="flex-1 p-8">
            @if (session('success'))
                <div class="mb-6 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                    {{ session('success') }}
                </div>
            @endif
            @if (session('error'))
                <div class="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {{ session('error') }}
                </div>
            @endif
            @yield('content')
        </main>

        {{-- Footer --}}
        <footer class="border-t border-white/[0.07] px-8 py-4">
            <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-[10px] text-white/25">© {{ date('Y') }} TYTAN GROUP / BQ MAGAZINE LIMITED c/o Smari Creative. All rights reserved.</p>
                <div class="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-white/20">
                    <span>Kampala: Eagen Mansions, 1–13 Jinja Road</span>
                    <span>Brussels: 243 Blvd Général Jacques, 1050 Ixelles</span>
                </div>
            </div>
        </footer>
    </div>
</div>
</body>
</html>
