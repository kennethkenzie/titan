<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dashboard — Smari Creative</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="min-h-screen bg-neutral-950 text-white antialiased">
        <div class="relative isolate overflow-hidden">
            <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.22),transparent_32%),linear-gradient(to_bottom,#0a0a0a,#050505)]"></div>
            <div class="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]"></div>

            <div class="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
                <header class="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div class="max-w-3xl">
                        <p class="text-xs uppercase tracking-[0.45em] text-red-500">Smari Creative admin</p>
                        <h1 class="mt-4 text-4xl font-bold uppercase leading-[0.92] sm:text-5xl">Welcome, {{ auth()->user()->name }}</h1>
                        <p class="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                            Manage the Laravel workspace for TYTAN GROUP / BQ MAGAZINE LIMITED c/o Smari Creative.
                            This space is now set up as the authenticated landing experience for the backend.
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center gap-3">
                        <a href="mailto:info@tytangroupbqmagazineltd.com" class="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-red-500 hover:text-red-400">
                            Contact studio
                        </a>
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf
                            <button type="submit" class="inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-red-500">
                                Logout
                            </button>
                        </form>
                    </div>
                </header>

                <main class="flex-1 py-10">
                    <section class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <p class="text-[10px] uppercase tracking-[0.35em] text-red-500">Studio overview</p>
                            <h2 class="mt-5 text-3xl font-bold uppercase leading-tight">Let’s move your brand.</h2>
                            <p class="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                                Smari Creative is a corporate identity, branding, creative marketing, print, digital,
                                events, and motion studio operating out of Kampala and Brussels.
                            </p>

                            <div class="mt-8 grid gap-4 sm:grid-cols-3">
                                <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
                                    <p class="text-[10px] uppercase tracking-[0.3em] text-red-500">Admin email</p>
                                    <p class="mt-3 text-lg font-bold break-all">{{ auth()->user()->email }}</p>
                                </div>
                                <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
                                    <p class="text-[10px] uppercase tracking-[0.3em] text-red-500">Kampala HQ</p>
                                    <p class="mt-3 text-sm leading-6 text-white/75">Eagen Mansions, Victoria Towers<br>1–13 Jinja Road, Kampala</p>
                                </div>
                                <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
                                    <p class="text-[10px] uppercase tracking-[0.3em] text-red-500">Brussels EU</p>
                                    <p class="mt-3 text-sm leading-6 text-white/75">243 Boulevard Général Jacques<br>1050 Brussels Ixelles</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <p class="text-[10px] uppercase tracking-[0.35em] text-red-500">Quick facts</p>
                            <div class="mt-6 space-y-4">
                                <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
                                    <p class="text-xs uppercase tracking-[0.3em] text-white/50">Phone</p>
                                    <p class="mt-2 text-2xl font-bold">+256 742 445 504</p>
                                </div>
                                <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
                                    <p class="text-xs uppercase tracking-[0.3em] text-white/50">Email</p>
                                    <p class="mt-2 text-lg font-bold break-all">info@tytangroupbqmagazineltd.com</p>
                                </div>
                                <div class="rounded-3xl border border-white/10 bg-black/20 p-5">
                                    <p class="text-xs uppercase tracking-[0.3em] text-white/50">Website</p>
                                    <a href="https://www.tytangroupbqmagazineltd.com" target="_blank" rel="noopener" class="mt-2 block text-lg font-bold transition hover:text-red-400">www.tytangroupbqmagazineltd.com</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="mt-6 grid gap-6 lg:grid-cols-3">
                        <article class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <p class="text-[10px] uppercase tracking-[0.35em] text-red-500">Core services</p>
                            <ul class="mt-5 space-y-3 text-sm leading-6 text-white/75">
                                <li>• Corporate identity & branding</li>
                                <li>• Creative marketing services</li>
                                <li>• Pixel-perfect printing</li>
                                <li>• Creative online web solutions</li>
                                <li>• Events & support</li>
                                <li>• Audio/visual & motion graphics</li>
                            </ul>
                        </article>

                        <article class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <p class="text-[10px] uppercase tracking-[0.35em] text-red-500">Why choose us</p>
                            <ul class="mt-5 space-y-3 text-sm leading-6 text-white/75">
                                <li>• High-quality printing and durable materials</li>
                                <li>• Affordable and competitive pricing</li>
                                <li>• Fast turnaround times</li>
                                <li>• Professional design support</li>
                                <li>• Custom solutions tailored to your brand</li>
                            </ul>
                        </article>

                        <article class="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                            <p class="text-[10px] uppercase tracking-[0.35em] text-red-500">Vision & mission</p>
                            <p class="mt-5 text-sm leading-7 text-white/75">
                                To become a trusted leader in the corporate branding space by delivering creativity,
                                quality, and exceptional customer service.
                            </p>
                        </article>
                    </section>
                </main>
            </div>
        </div>
    </body>
</html>
