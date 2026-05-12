import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { PROJECTS, CASE_STUDIES } from "@/lib/data";
import { getProjects, getCaseStudies } from "@/lib/api";

export const revalidate = 60;

const DELIVERABLES: Record<string, string[]> = {
  Finance: ["Brand identity system", "Investor-facing website", "Pitch & presentation design", "Performance campaign support"],
  Aerospace: ["Launch campaign direction", "Editorial product storytelling", "3D/motion art direction", "Media-ready digital experience"],
  SaaS: ["Category positioning", "Product surface design", "Documentation & UX systems", "Growth landing pages"],
  Automotive: ["Luxury brand world", "Configurator interface direction", "Campaign visuals", "Retail & showroom assets"],
  Hardware: ["Industrial brand identity", "Motion-first storytelling", "Launch content systems", "Conversion-led product pages"],
  Media: ["Editorial platform design", "Content design system", "Audience growth surfaces", "Brand publishing toolkit"],
};

const DEFAULT_CHALLENGE: Record<string, string> = {
  Finance: "Translate a complex financial offering into a premium, credible, conversion-ready digital brand.",
  Aerospace: "Make deeply technical innovation feel immediate, ambitious, and understandable to investors and media.",
  SaaS: "Clarify an emerging product category while giving the brand a distinct, high-trust visual language.",
  Automotive: "Create a premium experience that balances performance storytelling with product desirability.",
  Hardware: "Position a technical product as category-defining without losing clarity or commercial focus.",
  Media: "Build an editorial world that feels premium, scalable, and unmistakably ownable.",
};

const DEFAULT_SOLUTION: Record<string, string> = {
  Finance: "We engineered a disciplined identity system, sharpened the positioning, and built a conversion-led digital experience tailored to investor trust.",
  Aerospace: "We combined cinematic visuals, editorial pacing, and a launch-ready digital system to turn technical depth into momentum.",
  SaaS: "We unified brand, interface, and messaging into one coherent product narrative built for category leadership.",
  Automotive: "We designed a premium digital brand experience with strong visual hierarchy, motion, and product-first storytelling.",
  Hardware: "We developed a high-clarity launch surface with industrial-grade storytelling and a motion-led narrative system.",
  Media: "We built a flexible editorial platform and visual system that supports scale, consistency, and audience growth.",
};

function fallbackResults(project: { year: number; client: string; category: string }) {
  return [
    `${project.client} launched a sharper ${project.category.toLowerCase()} presence in ${project.year}.`,
    "A clearer digital narrative improved how the offer was perceived across audiences.",
    "The final system created a stronger foundation for future campaigns, launches, and growth." ,
  ];
}

async function loadData(slug: string) {
  let projects = PROJECTS as any[];
  let caseStudies = CASE_STUDIES as any[];

  try {
    projects = await getProjects();
  } catch {}

  try {
    caseStudies = await getCaseStudies();
  } catch {}

  const project = projects.find((item) => item.slug === slug) ?? PROJECTS.find((item) => item.slug === slug);
  const caseStudy = caseStudies.find((item) => item.slug === slug) ?? CASE_STUDIES.find((item) => item.slug === slug);
  const related = (projects.length ? projects : PROJECTS)
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return { project, caseStudy, related };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { project } = await loadData(params.slug);

  if (!project) {
    return { title: "Project not found — Smari Creative" };
  }

  return {
    title: `${project.title} — Smari Creative`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Smari Creative`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { project, caseStudy, related } = await loadData(params.slug);

  if (!project) {
    notFound();
  }

  const deliverables = DELIVERABLES[project.category] ?? [
    "Brand system design",
    "Digital experience design",
    "Launch content direction",
    "Campaign support",
  ];

  const challenge = caseStudy?.challenge ?? DEFAULT_CHALLENGE[project.category] ?? "Position the client clearly and create a stronger market-facing experience.";
  const solution = caseStudy?.solution ?? DEFAULT_SOLUTION[project.category] ?? "We aligned strategy, design, and execution into one cohesive launch-ready system.";
  const results = caseStudy?.results
    ? caseStudy.results.split(", ")
    : fallbackResults(project);

  return (
    <>
      <section className="relative min-h-[90svh] overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="container relative z-10 flex min-h-[90svh] items-end py-20 md:py-24">
          <div className="max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.45em] text-primary">
              ▍ {project.client} · {project.category} · {project.year}
            </p>
            <h1 className="mt-6 text-display-lg font-bold uppercase leading-[0.9] max-w-5xl">
              {project.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              {caseStudy?.summary ?? project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em]">
              <Link href="/contact" className="rounded-full bg-primary px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-background">
                Start a project
              </Link>
              <Link href="/portfolio" className="rounded-full border border-white/15 px-6 py-4 font-semibold text-white transition hover:border-primary hover:text-primary">
                Back to work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Project overview</p>
              <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
                Built for <span className="gradient-text-red">clarity</span>, momentum, and long-term brand equity.
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
                Every engagement combines strategy, design, and execution into one integrated delivery system. This project is part of that approach.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-border h-fit">
            {[
              ["Client", project.client],
              ["Category", project.category],
              ["Year", String(project.year)],
              ["Deliverables", `${deliverables.length} areas`],
            ].map(([label, value]) => (
              <div key={label} className="bg-background p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{label}</p>
                <p className="mt-4 text-xl md:text-2xl font-bold uppercase leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 py-24 md:py-32">
        <div className="container grid gap-px bg-border lg:grid-cols-3">
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">01 Challenge</p>
            <p className="mt-6 text-muted leading-relaxed">{challenge}</p>
          </div>
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">02 Solution</p>
            <p className="mt-6 text-muted leading-relaxed">{solution}</p>
          </div>
          <div className="bg-background p-8 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">03 Results</p>
            <ul className="mt-6 space-y-3 text-muted leading-relaxed">
              {results.map((result: string) => (
                <li key={result} className="flex items-start gap-3">
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Scope of work</p>
              <h2 className="text-display-md font-bold uppercase leading-[0.92]">
                Delivery across every <span className="gradient-text-red">surface</span>.
              </h2>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
                We build project systems that travel across digital, print, launch, and brand operations — not isolated visuals.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid gap-px bg-border sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.06} className="bg-background p-8 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 text-2xl font-bold uppercase leading-tight">{item}</h3>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border py-24 md:py-32">
          <div className="container">
            <ScrollReveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ More work</p>
              <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
                Explore related <span className="gradient-text-red">projects</span>.
              </h2>
            </ScrollReveal>

            <div className="mt-16 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
              {related.map((item, index) => (
                <ScrollReveal key={item.slug} delay={index * 0.06} className="bg-background p-1">
                  <PortfolioCard {...item} href={`/portfolio/${item.slug}`} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
