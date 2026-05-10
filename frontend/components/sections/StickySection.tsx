"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const STEPS = [
  { n: "01", title: "Discovery", body: "We embed with your team to extract narrative, ambition, and constraint. The output is a single, sharp positioning thesis." },
  { n: "02", title: "Architecture", body: "Identity systems, design tokens, motion language and product surface — engineered as a single coherent system." },
  { n: "03", title: "Cinema", body: "We art-direct visual worlds, motion, and editorial moments that make the brand feel inevitable." },
  { n: "04", title: "Engineering", body: "Production-grade code: Next.js, Laravel, WebGL, GSAP. Built to ship and built to last." },
];

function Step({ s, i, total, progress }: { s: typeof STEPS[number]; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const end = (i + 1) / total;
  const opacity = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [0, -40]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0">
      <div className="text-[10px] uppercase tracking-[0.4em] text-primary mb-4">Step {s.n}</div>
      <h3 className="text-display-md font-bold leading-[0.9] uppercase">{s.title}</h3>
      <p className="mt-8 max-w-md text-base md:text-lg text-muted leading-relaxed">{s.body}</p>
    </motion.div>
  );
}

export function StickySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const indexT = useTransform(scrollYProgress, (v) => `0${Math.min(STEPS.length, Math.floor(v * STEPS.length) + 1)}`.slice(-2));

  return (
    <section ref={ref} className="relative" style={{ height: `${STEPS.length * 90}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6">▍ The Smari process</p>
            <div className="relative h-[60vh] md:h-[70vh]">
              {STEPS.map((s, i) => (
                <Step key={s.n} s={s} i={i} total={STEPS.length} progress={scrollYProgress} />
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] border border-border overflow-hidden">
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1600"
                alt="Process"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
              <div className="text-[10px] uppercase tracking-[0.4em] text-muted">SMARI / Process</div>
              <div className="text-display-sm font-bold gradient-text-red leading-none">
                <motion.span>{indexT}</motion.span>
                <span className="text-muted">/04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
