"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TEAM, OFFICE_PHOTOS } from "@/lib/data";

export function TeamSection() {
  return (
    <section id="team" className="relative py-32 md:py-40 border-y border-border scroll-mt-24">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ The studio</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Operators, engineers, and <span className="gradient-text-red">artists</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            A senior-only team of strategists, designers, and engineers shipping out of our New York and Lisbon studios.
          </p>
        </ScrollReveal>

        {/* Office photography */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-2">
          {OFFICE_PHOTOS.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative aspect-[4/5] overflow-hidden border border-border group"
            >
              <Image
                src={src}
                alt="Studio"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-60" />
            </motion.div>
          ))}
        </div>

        {/* Team grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative bg-background group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-semibold uppercase tracking-widest">{m.name}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
