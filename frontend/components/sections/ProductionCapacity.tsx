"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CAPACITY } from "@/lib/data";

export function ProductionCapacity() {
  return (
    <section id="capacity" className="relative py-32 md:py-40 border-y border-border scroll-mt-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Production capacity</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92]">
            Built to ship at <span className="gradient-text-red">scale</span>.
          </h2>
          <p className="mt-6 max-w-xl text-muted text-lg">
            A senior, in-house team purpose-built for ambitious timelines. No outsourcing, no juniors on the pencil — just operators delivering on aggressive deadlines.
          </p>
          <ul className="mt-8 space-y-3 text-muted">
            <li className="flex items-start gap-3"><span className="mt-2 block w-1.5 h-1.5 bg-primary" />Two production studios (NYC + Lisbon) running 18-hour coverage.</li>
            <li className="flex items-start gap-3"><span className="mt-2 block w-1.5 h-1.5 bg-primary" />Dedicated motion, engineering, and 3D pods per engagement.</li>
            <li className="flex items-start gap-3"><span className="mt-2 block w-1.5 h-1.5 bg-primary" />Senior-only staffing with 12+ years average experience.</li>
          </ul>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-px bg-border">
          {CAPACITY.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="bg-background p-8"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-6 text-display-sm font-bold leading-none gradient-text">
                {c.value}
                {c.suffix}
              </div>
              <div className="mt-4 text-sm text-muted uppercase tracking-widest">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
