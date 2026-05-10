"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import { GridOverlay } from "@/components/animations/GridOverlay";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden border-y border-border">
      <GridOverlay />
      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-80" />
      <div className="container relative z-10 text-center">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-8">▍ Let's build something inevitable</p>
          <h2 className="text-display-lg font-bold uppercase leading-[0.88] tracking-[-0.04em] text-white">
            Let's move your
            <br />
            <span className="text-[#E50914]">brand.</span>
          </h2>
          <p className="mt-10 max-w-xl mx-auto text-muted text-lg">
            We partner with a handful of ambitious teams each year. If you're building
            something serious, we'd like to hear about it.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <AnimatedButton href="/contact">Start a project</AnimatedButton>
            <AnimatedButton href="/portfolio" variant="outline">View work</AnimatedButton>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
