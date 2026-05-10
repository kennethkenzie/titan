"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative py-32 md:py-44 border-y border-border bg-surface/40 overflow-hidden scroll-mt-24">
      <div className="container">
        <div className="flex items-center justify-between mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary">▍ Testimonials</p>
          <div className="flex gap-2">
            <button
              aria-label="Previous"
              onClick={() => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next"
              onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
              className="w-12 h-12 border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="max-w-5xl"
            >
              <Quote size={48} className="text-primary mb-8" />
              <p className="text-3xl md:text-5xl font-bold leading-[1.1] text-balance">
                “{t.quote}”
              </p>
              <div className="mt-10 flex items-center gap-4">
                <span className="w-2 h-12 bg-primary" />
                <div>
                  <p className="font-semibold uppercase tracking-widest">{t.name}</p>
                  <p className="text-sm text-muted uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to ${k + 1}`}
              className={`h-px flex-1 max-w-24 transition-colors ${k === i ? "bg-primary h-0.5" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
