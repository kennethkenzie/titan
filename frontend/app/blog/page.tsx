import { VideoHero } from "@/components/sections/VideoHero";
import { BlogCard } from "@/components/cards/BlogCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTASection } from "@/components/sections/CTASection";
import { BLOGS } from "@/lib/data";
import { getBlogs } from "@/lib/api";

export const revalidate = 0;

export default async function BlogPage() {
  let blogs = BLOGS as any;
  try { blogs = await getBlogs(); } catch {}
  return (
    <>
      <VideoHero
        eyebrow="▍ Journal"
        title="Field notes from the studio."
        subtitle="Essays on brand engineering, motion as product, and the future of cinematic web."
        posterSrc="https://images.unsplash.com/photo-1551503766-ac63dfa6401c?w=2400"
      />
      <section className="container py-24 md:py-32 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b: any, i: number) => (
          <ScrollReveal key={b.id} delay={i * 0.08}>
            <BlogCard {...b} />
          </ScrollReveal>
        ))}
      </section>
      <CTASection />
    </>
  );
}
