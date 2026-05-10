"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CERTIFICATIONS } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 md:py-40 bg-surface/30 border-y border-border scroll-mt-24">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Certifications & honors</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Audited. Awarded. <span className="gradient-text-red">Accountable</span>.
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="bg-background p-6 md:p-8 flex items-center gap-4 group hover:bg-surface/60 transition-colors"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                <ShieldCheck size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold uppercase tracking-widest truncate">{c.name}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted">{c.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
