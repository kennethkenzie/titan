"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PROJECTS } from "@/lib/data";

export function PortfolioGallery() {
  // Masonry-style aspect variations
  const aspects = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[16/10]", "aspect-[4/5]"];

  return (
    <section id="gallery" className="relative py-32 md:py-40 border-y border-border scroll-mt-24">
      <div className="container">
        <ScrollReveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Portfolio gallery</p>
          <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-4xl">
            Real projects. <span className="gradient-text-red">Real outcomes</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-muted text-lg">
            A selection of recently shipped work — every frame production, every metric verified.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className={`relative overflow-hidden border border-border group ${aspects[i % aspects.length]}`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
              <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                  {p.category} — {p.year}
                </div>
                <h3 className="mt-2 text-lg md:text-xl font-bold uppercase tracking-wide">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
