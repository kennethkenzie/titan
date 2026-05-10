"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PortfolioCard } from "@/components/cards/PortfolioCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface P { id: number; title: string; client: string; category: string; year: number; image: string; slug: string; }

export function PortfolioShowcase({ projects }: { projects: P[] }) {
  return (
    <section className="relative py-32 md:py-44">
      <div className="container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Selected work</p>
              <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-3xl">
                Brands we <span className="gradient-text-red">engineered</span>.
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-5 py-3 border border-border text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors"
            >
              All projects <ArrowUpRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {projects.slice(0, 4).map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08} className="bg-background p-1">
              <PortfolioCard {...p} href={`/portfolio/${p.slug}`} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
