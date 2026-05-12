import Link from "next/link";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { TrustedClients } from "@/components/sections/TrustedClients";
import { PROJECTS } from "@/lib/data";
import { getProjects } from "@/lib/api";

export const revalidate = 0;

export default async function PortfolioPage() {
  let projects = PROJECTS as any;
  try {
    projects = await getProjects();
  } catch {}

  return (
    <div className="relative bg-background lg:flex lg:items-stretch">
      {/* Sticky red left sidebar — stops before the footer */}
      <aside
        aria-hidden="true"
        className="hidden lg:flex sticky top-0 self-start h-screen w-28 xl:w-36 bg-[#E50914] z-40 flex-col items-center shrink-0"
      >
        {/* Logo mark at top */}
        <Link href="/" className="mt-6 grid place-items-center w-16 h-16 xl:w-20 xl:h-20 bg-white">
          <span className="text-[#E50914] font-bold text-3xl xl:text-4xl tracking-tighter leading-none">
            S
          </span>
        </Link>

        {/* Rotated label floating in the middle */}
        <div className="flex-1 flex items-center justify-center">
          <Link
            href="/about"
            className="text-white text-sm tracking-[0.3em] uppercase font-medium hover:opacity-80 transition-opacity"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            About
          </Link>
        </div>
      </aside>

      {/* Main content sits next to the sidebar on lg+ */}
      <main className="flex-1 min-w-0">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(229,9,20,0.35), transparent 55%), radial-gradient(circle at 70% 70%, rgba(20,20,20,0.9), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative px-6 md:px-12 pt-32 md:pt-40 pb-28 md:pb-36 max-w-6xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-white max-w-4xl">
              Creativity with the power to transform.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
              See how the work we have done for our clients and partners across
              industries, regions, and markets has shaped their future and set them up
              for long-term sustainable success.
            </p>
          </div>
        </section>

        {/* Our Work */}
        <section className="bg-white text-neutral-900">
          <div className="px-6 md:px-12 pt-16 md:pt-24 pb-6 md:pb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Work</h2>
          </div>

          <div className="px-6 md:px-12 pb-24 md:pb-32">
            <div className="grid md:grid-cols-2 gap-px bg-neutral-200">
              {projects.map((p: any, i: number) => (
                <ScrollReveal key={p.id} delay={i * 0.05} className="bg-white p-1">
                  <PortfolioCard {...p} href={`/portfolio/${p.slug}`} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <TrustedClients
          title={
            <>
              Work trusted by ambitious <span className="gradient-text-red">teams.</span>
            </>
          }
          subtitle="From brand systems to production and launch support, these are some of the clients behind the work showcased here."
        />
        <CTASection />
      </main>
    </div>
  );
}
