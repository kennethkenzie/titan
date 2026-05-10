<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Login — Smari Creative</title>
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body class="min-h-screen bg-neutral-950 text-white antialiased">
        <div class="grid min-h-screen lg:grid-cols-2">
            <div class="relative hidden overflow-hidden lg:block">
                <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
                    alt="Smari Creative studio"
                    class="absolute inset-0 h-full w-full object-cover"
                >
                <div class="absolute inset-0 bg-black/60"></div>
                <div class="relative z-10 flex h-full flex-col justify-between p-12">
                    <div>
                        <p class="text-xs uppercase tracking-[0.45em] text-red-500">Smari Creative</p>
                        <h1 class="mt-6 max-w-xl text-5xl font-bold uppercase leading-[0.92]">
                            Staff <span class="text-red-500">portal.</span>
                        </h1>
                        <p class="mt-6 max-w-lg text-sm leading-7 text-white/70">
                            Restricted to authorised Smari Creative staff. If you are a client,
                            please contact your account manager for assistance.
                        </p>
                    </div>

                    <div class="grid max-w-xl grid-cols-2 gap-4 text-sm text-white/80">
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                            <p class="text-[10px] uppercase tracking-[0.3em] text-red-500">Kampala HQ</p>
                            <p class="mt-3 leading-6">Eagen Mansions, Victoria Towers<br>1–13 Jinja Road, Kampala</p>
                        </div>
                        <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                            <p class="text-[10px] uppercase tracking-[0.3em] text-red-500">Brussels EU</p>
                            <p class="mt-3 leading-6">243 Boulevard Général Jacques<br>1050 Brussels Ixelles</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-16">
                <div class="w-full max-w-md">
                    <p class="text-xs uppercase tracking-[0.4em] text-red-500">Admin access only</p>
                    <h2 class="mt-4 text-4xl font-bold uppercase leading-none">Sign in</h2>
                    <p class="mt-4 text-sm leading-6 text-white/60">
                        This portal is restricted to Smari Creative staff. Clients should contact their account manager directly.
                    </p>

                    @if ($errors->any())
                        <div class="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                            {{ $errors->first() }}
                        </div>
                    @endif

                    <form method="POST" action="{{ route('login.attempt') }}" class="mt-8 space-y-5">
                        @csrf
                        <div>
                            <label for="email" class="mb-2 block text-xs font-medium uppercase tracking-[0.25em] text-white/70">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value="{{ old('email') }}"
                                required
                                autofocus
                                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-red-500 focus:bg-white/10"
                                placeholder="you@example.com"
                            >
                        </div>

                        <div>
                            <label for="password" class="mb-2 block text-xs font-medium uppercase tracking-[0.25em] text-white/70">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                class="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-red-500 focus:bg-white/10"
                                placeholder="••••••••"
                            >
                        </div>

                        <label class="flex items-center gap-3 text-sm text-white/65">
                            <input type="checkbox" name="remember" class="h-4 w-4 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500">
                            Remember me
                        </label>

                        <button
                            type="submit"
                            class="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-red-500"
                        >
                            Sign in
                        </button>
                    </form>

                    <div class="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-white/45">
                        <p>Need access? Contact <a href="mailto:info@tytangroupbqmagazineltd.com" class="text-white transition hover:text-red-500">info@tytangroupbqmagazineltd.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
