"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2, ease: [0.2, 0.7, 0.2, 1], onUpdate: (v) => setN(v) });
    return () => c.stop();
  }, [inView, value]);
  return (
    <span ref={ref}>
      {Math.round(n)}
      {suffix}
    </span>
  );
}

export function AnimatedStats() {
  return (
    <section id="stats" className="relative py-32 md:py-40 border-y border-border bg-surface/30 scroll-mt-24">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ By the numbers</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            A decade of <span className="gradient-text-red">cinematic</span> output.
          </h2>
        </ScrollReveal>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              className="bg-background p-8 md:p-10"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-6 text-display-sm font-bold leading-none gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm text-muted uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
