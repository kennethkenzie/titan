import { VideoHero } from "@/components/sections/VideoHero";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { TrustedClients } from "@/components/sections/TrustedClients";
import { PROJECTS } from "@/lib/data";
import { getProjects } from "@/lib/api";

export const revalidate = 0;

export default async function PortfolioPage() {
  let projects = PROJECTS as any;
  try { projects = await getProjects(); } catch {}
  return (
    <>
      <VideoHero
        eyebrow="▍ Portfolio"
        title="Selected work, 2014 — present."
        subtitle="A decade of brand systems, cinematic platforms, and product surfaces shipped with elite teams."
        posterSrc="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=2400"
      />
      <section className="container py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {projects.map((p: any, i: number) => (
            <ScrollReveal key={p.id} delay={i * 0.05} className="bg-background p-1">
              <PortfolioCard {...p} href={`/portfolio/${p.slug}`} />
            </ScrollReveal>
          ))}
        </div>
      </section>
      <TrustedClients
        title={<>Work trusted by ambitious <span className="gradient-text-red">teams.</span></>}
        subtitle="From brand systems to production and launch support, these are some of the clients behind the work showcased here."
      />
      <CTASection />
    </>
  );
}
