"use client";

import * as Icons from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SpotlightCard } from "@/components/cards/SpotlightCard";
import { cn } from "@/lib/utils";

interface Service { id: number; title: string; description: string; icon: string; }

const PATTERN = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

export function BentoGrid({ services }: { services: Service[] }) {
  return (
    <section className="relative py-32 md:py-44 container">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Capabilities</p>
            <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-3xl">
              Engineered services for <span className="gradient-text-red">elite</span> brands.
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Six interlocking practices designed to compound brand equity, product velocity,
            and cultural relevance.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[260px] gap-px bg-border">
        {services.map((s, i) => {
          const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[s.icon] || Icons.Sparkles;
          return (
            <ScrollReveal key={s.id} delay={i * 0.07} className={cn(PATTERN[i % PATTERN.length])}>
              <SpotlightCard className="h-full flex flex-col justify-between min-h-[260px]">
                <div className="flex items-start justify-between">
                  <Icon size={28} className="text-primary" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                    {String(i + 1).padStart(2, "0")} / 06
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">{s.description}</p>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
