import { TitanHero } from "@/components/sections/TitanHero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { StickySection } from "@/components/sections/StickySection";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ClientJourney } from "@/components/sections/ClientJourney";
import { BrandArchitecture } from "@/components/sections/BrandArchitecture";
import { Certifications } from "@/components/sections/Certifications";
import { ProductionCapacity } from "@/components/sections/ProductionCapacity";
import { SocialProof } from "@/components/sections/SocialProof";
import { SERVICES, PROJECTS, BLOGS } from "@/lib/data";
import { getServices, getProjects, getBlogs } from "@/lib/api";

export const revalidate = 0;

async function safeFetch<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try { return await fn(); } catch { return fallback; }
}

export default async function HomePage() {
  const [services, projects, blogs] = await Promise.all([
    safeFetch(getServices, SERVICES as any),
    safeFetch(getProjects, PROJECTS as any),
    safeFetch(getBlogs, BLOGS as any),
  ]);

  return (
    <>
      <TitanHero />
      <MarqueeSection />
      <BentoGrid services={services} />
      <BrandArchitecture />
      <PortfolioShowcase projects={projects} />
      <PortfolioGallery />
      <AnimatedStats />
      <ClientJourney />
      <TeamSection />
      <ProductionCapacity />
      <StickySection />
      <TestimonialSlider />
      <SocialProof />
      <Certifications />
      <BlogPreview blogs={blogs} />
      <CTASection />
    </>
  );
}
