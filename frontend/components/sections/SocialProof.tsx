"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PRESS, SOCIAL_METRICS } from "@/lib/data";

export function SocialProof() {
  return (
    <section id="social-proof" className="relative py-32 md:py-40 bg-surface/30 border-y border-border scroll-mt-24">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Social proof</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Trusted by leaders. <span className="gradient-text-red">Covered</span> by the press.
          </h2>
        </ScrollReveal>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {SOCIAL_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="bg-background p-8 md:p-10"
            >
              <div className="text-display-sm font-bold leading-none gradient-text">{m.value}</div>
              <div className="mt-4 text-sm text-muted uppercase tracking-widest">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Press logos */}
        <div className="mt-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted mb-6">As featured in</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {PRESS.map((p) => (
              <div key={p} className="bg-background py-8 px-4 flex items-center justify-center">
                <span className="text-sm md:text-base font-bold tracking-[0.25em] text-muted/80 hover:text-white transition-colors">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
