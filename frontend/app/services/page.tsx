import { VideoHero } from "@/components/sections/VideoHero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { FullServiceList } from "@/components/sections/FullServiceList";
import { CTASection } from "@/components/sections/CTASection";
import { StickySection } from "@/components/sections/StickySection";
import { SERVICES } from "@/lib/data";
import { getServices } from "@/lib/api";

export const revalidate = 0;

export default async function ServicesPage() {
  let services = SERVICES as any;
  try { services = await getServices(); } catch {}
  return (
    <>
      <VideoHero
        eyebrow="▍ Services"
        title="Capabilities engineered for scale."
        subtitle="A full-service creative, branding, print, web, events, and motion agency operating out of Kampala and Brussels."
        posterSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?w=2400"
      />
      <BentoGrid services={services} />
      <FullServiceList />
      <StickySection />
      <CTASection />
    </>
  );
}
