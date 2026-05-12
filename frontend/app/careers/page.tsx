import Link from "next/link";
import { VideoHero } from "@/components/sections/VideoHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowUpRight, BriefcaseBusiness, Globe2, Sparkles, TimerReset } from "lucide-react";

const BENEFITS = [
  {
    title: "Meaningful work",
    description: "Work across branding, digital, print, events, and production — not just one narrow lane.",
    icon: Sparkles,
  },
  {
    title: "Regional reach",
    description: "Contribute to projects delivered from Kampala to Brussels for ambitious brands and organisations.",
    icon: Globe2,
  },
  {
    title: "Fast-moving team",
    description: "We value initiative, quality, and dependable execution over layers of unnecessary process.",
    icon: TimerReset,
  },
];

const ROLES = [
  {
    title: "Graphic Designer",
    type: "Full-time",
    location: "Kampala",
    description: "Brand systems, campaign visuals, print collateral, and day-to-day creative production.",
  },
  {
    title: "Digital Marketing Strategist",
    type: "Full-time",
    location: "Kampala / Hybrid",
    description: "Campaign planning across social, radio, TV, online, and reporting for client growth programs.",
  },
  {
    title: "Videographer & Editor",
    type: "Contract / Project-based",
    location: "Kampala",
    description: "Shoot, edit, and package motion content, explainers, documentaries, and event coverage.",
  },
];

const PROCESS = [
  "Apply with your CV, portfolio, or reel.",
  "Shortlisted candidates are contacted for an intro conversation.",
  "Role-specific review or practical assessment where needed.",
  "Final interview and offer discussion.",
];

export default function CareersPage() {
  return (
    <>
      <VideoHero
        eyebrow="▍ Careers"
        title="Join the studio behind the work."
        subtitle="We’re always interested in thoughtful operators, designers, strategists, and makers who care deeply about craft and delivery."
        posterSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2400"
      />

      <section className="container py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Why Smari Creative</p>
              <h2 className="text-display-md font-bold uppercase leading-[0.92]">
                Build work that <span className="gradient-text-red">moves</span> brands.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
                We’re building a team that blends design judgment, production discipline, and marketing instinct.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid gap-px bg-border sm:grid-cols-3">
            {BENEFITS.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={index * 0.06} className="bg-background p-8 md:p-10">
                  <div className="w-12 h-12 border border-border flex items-center justify-center text-primary rounded-md">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold uppercase leading-tight">{item.title}</h3>
                  <p className="mt-4 text-muted leading-relaxed">{item.description}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <div className="container">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Open roles</p>
            <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
              Current <span className="gradient-text-red">opportunities</span>.
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {ROLES.map((role, index) => (
              <ScrollReveal key={role.title} delay={index * 0.06}>
                <article className="h-full border border-border bg-background p-8 md:p-10 rounded-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 border border-border flex items-center justify-center text-primary rounded-md">
                      <BriefcaseBusiness size={20} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted">{role.type}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold uppercase leading-tight">{role.title}</h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-primary">{role.location}</p>
                  <p className="mt-5 text-muted leading-relaxed">{role.description}</p>
                  <a
                    href={`mailto:info@tytangroupbqmagazineltd.com?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                    className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white hover:text-primary transition-colors"
                  >
                    Apply for this role <ArrowUpRight size={14} />
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32 grid gap-16 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Hiring process</p>
            <h2 className="text-display-md font-bold uppercase leading-[0.92]">
              Clear, direct, and <span className="gradient-text-red">fast-moving</span>.
            </h2>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 grid gap-px bg-border sm:grid-cols-2">
          {PROCESS.map((step, index) => (
            <ScrollReveal key={step} delay={index * 0.05} className="bg-background p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Step {String(index + 1).padStart(2, "0")}</p>
              <p className="mt-6 text-lg text-muted leading-relaxed">{step}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="rounded-[2rem] border border-border bg-surface/30 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Don’t see your role?</p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase leading-[0.95] max-w-3xl">
              Send your portfolio anyway.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:info@tytangroupbqmagazineltd.com?subject=General%20Application%20%E2%80%94%20Smari%20Creative"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 text-xs uppercase tracking-[0.3em] font-semibold text-white hover:bg-white hover:text-background transition-colors"
            >
              Apply now <ArrowUpRight size={14} />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-4 text-xs uppercase tracking-[0.3em] font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
