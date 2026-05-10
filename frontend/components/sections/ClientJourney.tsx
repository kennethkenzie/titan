"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { JOURNEY } from "@/lib/data";

export function ClientJourney() {
  return (
    <section id="journey" className="relative py-32 md:py-40 bg-surface/30 border-y border-border scroll-mt-24">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ The client journey</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            From discovery to <span className="gradient-text-red">scale</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            A repeatable, six-stage system honed across 140+ engagements. Every step engineered for compounding outcomes.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {JOURNEY.map((j, i) => (
            <motion.div
              key={j.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative bg-background p-8 md:p-10 group hover:bg-surface/60 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-display-sm font-bold gradient-text-red leading-none">{j.step}</span>
                <span className="h-px flex-1 bg-border group-hover:bg-primary transition-colors" />
              </div>
              <h3 className="mt-6 text-2xl font-bold uppercase tracking-wide">{j.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{j.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
