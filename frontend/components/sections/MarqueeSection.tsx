"use client";

import { CLIENTS } from "@/lib/data";

export function MarqueeSection({ items = CLIENTS }: { items?: string[] }) {
  const doubled = [...items, ...items];
  return (
    <section className="relative py-16 border-y border-border overflow-hidden mask-fade-x">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {doubled.map((c, i) => (
          <div key={i} className="flex items-center gap-16 text-2xl md:text-4xl font-bold tracking-[0.2em] text-muted/60 hover:text-primary transition-colors">
            <span>{c}</span>
            <span className="w-2 h-2 bg-primary" />
          </div>
        ))}
      </div>
    </section>
  );
}
