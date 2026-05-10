import { VideoHero } from "@/components/sections/VideoHero";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { CASE_STUDIES } from "@/lib/data";
import { getCaseStudies } from "@/lib/api";

export const revalidate = 0;

export default async function CaseStudiesPage() {
  let cases = CASE_STUDIES as any;
  try { cases = await getCaseStudies(); } catch {}
  return (
    <>
      <VideoHero
        eyebrow="▍ Case Studies"
        title="Stories of compounding."
        subtitle="Deep dives into how brand, platform, and motion compound into market-defining outcomes."
        posterSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=2400"
      />
      <section className="container py-24 md:py-32 space-y-12">
        {cases.map((c: any, i: number) => (
          <ScrollReveal key={c.id} delay={i * 0.08}>
            <CaseStudyCard {...c} />
          </ScrollReveal>
        ))}
      </section>
      <CTASection />
    </>
  );
}
