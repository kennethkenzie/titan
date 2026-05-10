"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BRAND_PILLARS } from "@/lib/data";

export function BrandArchitecture() {
  return (
    <section id="brand-architecture" className="relative py-32 md:py-40 border-y border-border scroll-mt-24">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Brand architecture</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Four pillars. One <span className="gradient-text-red">monolithic</span> system.
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            We engineer brand systems the way great architects engineer buildings — every detail load-bearing, every layer integrated.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {BRAND_PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative bg-background p-8 md:p-10 flex flex-col"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted">
                Pillar {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-3xl md:text-4xl font-bold uppercase leading-[1.05] tracking-tight gradient-text break-words">{p.title}</h3>
              <p className="mt-4 text-muted leading-relaxed">{p.description}</p>
              <ul className="mt-8 space-y-2">
                {p.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm uppercase tracking-widest">
                    <span className="block w-1.5 h-1.5 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
