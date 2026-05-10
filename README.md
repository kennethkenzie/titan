# TITAN — Premium Animated Branding Website

A cinematic, futuristic, motion-driven branding website for **TITAN**, a creative
technology studio. Frontend (Next.js 14 App Router + TypeScript + Tailwind +
Framer Motion + GSAP + Lenis + shadcn/ui) is fully decoupled from a Laravel 11 +
MySQL API backend.

> Design rules: Dark premium UI · Red glow accents · Massive editorial
> typography · **Sharp edges everywhere — no border radius**.

---

## Project structure

```
Titan/
├── frontend/              # Next.js 14 (App Router, TS, Tailwind, FM/GSAP/Lenis)
│   ├── app/               # Routes: /, /about, /services, /portfolio,
│   │                      #         /case-studies, /blog, /contact
│   ├── components/
│   │   ├── ui/            # shadcn primitives (Button)
│   │   ├── animations/    # ScrollReveal, SplitText, MotionHeadline,
│   │   │                  # ScrollProgressBar, NoiseBackground, GridOverlay,
│   │   │                  # AnimatedCursor, PageTransition
│   │   ├── buttons/       # AnimatedButton, MagneticButton
│   │   ├── cards/         # GlowCard, SpotlightCard, HoverRevealCard,
│   │   │                  # PortfolioCard, CaseStudyCard, BlogCard
│   │   ├── layout/        # LenisProvider, TitanFooter
│   │   ├── navigation/    # FloatingNavbar
│   │   └── sections/      # TitanHero, VideoHero, BentoGrid, AnimatedStats,
│   │                      # MarqueeSection, StickySection, TestimonialSlider,
│   │                      # PortfolioShowcase, BlogPreview, CTASection,
│   │                      # ContactForm
│   ├── hooks/             # useMagnetic
│   ├── lib/               # api.ts, data.ts (fallback), utils.ts (cn)
│   └── styles/
└── backend/               # Laravel 11 API
    ├── app/Models/        # Service, Project, CaseStudy, Blog, Contact
    ├── app/Http/
    │   ├── Controllers/Api/
    │   ├── Resources/
    │   └── Requests/
    ├── database/migrations/
    ├── database/seeders/
    └── routes/api.php
```

---

## 1) Frontend — Next.js

### Install
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Visit http://localhost:3000.

### Tech
- **Next.js 14** (App Router, RSC, edge-ready)
- **TypeScript** strict
- **Tailwind CSS** with custom design tokens (red glow, surfaces, display sizes)
- **shadcn/ui** primitives + CVA + tailwind-merge
- **Framer Motion** + **GSAP** for cinematic motion
- **Lenis** smooth scroll
- **Lucide** icons

All radius is forced to `0` globally — sharp edges everywhere.

### Configuration

`tailwind.config.ts` — design tokens:
- `background`, `surface`, `surface-raised`
- `primary` (#E50914), `primary.deep`, `primary.glow`
- `display-sm` / `display-md` / `display-lg` typography sizes
  using `clamp()` for fluid premium type
- Custom keyframes: `marquee`, `glow-pulse`, `fade-up`, `shimmer`

### Pages
| Route | Sections |
|---|---|
| `/` | TitanHero · Marquee · BentoGrid · PortfolioShowcase · AnimatedStats · StickySection · Testimonials · BlogPreview · CTA |
| `/about` | VideoHero · Manifesto + Values · Stats · Marquee · CTA |
| `/services` | VideoHero · BentoGrid · StickySection · CTA |
| `/portfolio` | VideoHero · Project grid · Marquee · CTA |
| `/case-studies` | VideoHero · Case study cards · CTA |
| `/blog` | VideoHero · Blog grid · CTA |
| `/contact` | VideoHero · Studios + Contact form |

### API integration
`lib/api.ts` reads `NEXT_PUBLIC_API_URL` (defaults to
`http://localhost:8000/api`). Each page calls the API but falls back to
the static fixtures in `lib/data.ts` if the backend is offline — so the
site always renders cinematically during local dev.

---

## 2) Backend — Laravel 11

### Install
```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve   # http://localhost:8000
```

> If `php artisan` files (`bootstrap/`, `public/index.php`, etc.) are
> missing, scaffold them once with `composer create-project laravel/laravel .`
> in a temporary folder and copy the framework files alongside the provided
> `app/`, `routes/`, `database/`, `config/cors.php`, `composer.json`.

### Database tables
`services`, `projects`, `case_studies`, `blogs`, `contacts` — see
`database/migrations/`.

### API routes
| Method | Path | Purpose |
|---|---|---|
| GET | `/api/services` | List services |
| GET | `/api/services/{slug}` | Show service |
| GET | `/api/projects` | List projects |
| GET | `/api/projects/{slug}` | Show project |
| GET | `/api/case-studies` | List case studies |
| GET | `/api/case-studies/{slug}` | Show case study |
| GET | `/api/blogs` | List blog posts |
| GET | `/api/blogs/{slug}` | Show blog post |
| POST | `/api/contact` | Submit contact form |

CORS is configured in `config/cors.php` via `CORS_ALLOWED_ORIGINS`.

### Seed data
`php artisan db:seed` populates 6 services, 6 projects, 3 case studies,
and 3 blog posts that match the frontend fallback fixtures.

---

## 3) Animation system

| Tool | Used for |
|---|---|
| Framer Motion | Reveal/stagger, hover, layout, scroll progress, sliders |
| GSAP / ScrollTrigger | Heavy timeline-based scroll choreography (drop-in via `gsap` package) |
| Lenis | Buttery smooth scroll across the whole site |
| Custom hooks | `useMagnetic` for magnetic buttons |

Key reusable animation primitives live in `components/animations/`:
`ScrollReveal`, `SplitTextAnimation`, `MotionHeadline`, `PageTransition`,
`ScrollProgressBar`, `NoiseBackground`, `GridOverlay`, `AnimatedCursor`.

---

## 4) Deployment

**Frontend (Vercel — recommended):**
```bash
cd frontend
vercel
# set NEXT_PUBLIC_API_URL=https://api.titan.studio/api
```

**Backend (Forge / Ploi / any Linux box):**
```bash
cd backend
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan db:seed --class=ServiceSeeder --force
php artisan config:cache && php artisan route:cache
```

Set `CORS_ALLOWED_ORIGINS=https://titan.studio` in production.

---

## 5) Design system rules (do not break)

- **No border radius anywhere** (`* { border-radius: 0 !important; }` in
  `globals.css` plus a Tailwind override).
- **Massive typography** — `clamp(5rem, 10vw, 12rem)` for hero H1.
- **Red glow accents only** — `#E50914`, `rgba(229,9,20,0.35)`.
- **Material-inspired layers** — surface, raised, border, glow.
- **Cinematic motion** — every section reveals on scroll.

Built to feel like Awwwards, Linear, Vercel, and Stripe collided with a
luxury fashion campaign. Move like a Titan.
