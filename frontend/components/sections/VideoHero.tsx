"use client";

import { motion } from "framer-motion";
import { GridOverlay } from "@/components/animations/GridOverlay";
import { SplitTextAnimation } from "@/components/animations/SplitTextAnimation";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export function VideoHero({ eyebrow, title, subtitle, videoSrc, posterSrc, className }: Props) {
  return (
    <section className={cn("relative min-h-[80svh] flex items-end overflow-hidden pt-40 pb-16", className)}>
      <div className="absolute inset-0 -z-10">
        {videoSrc ? (
          <video autoPlay muted loop playsInline poster={posterSrc} className="w-full h-full object-cover opacity-40">
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center opacity-50"
            style={{ backgroundImage: posterSrc ? `url(${posterSrc})` : undefined }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>
      <GridOverlay />

      <div className="container relative z-10">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] uppercase tracking-[0.4em] text-primary mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <h1 className="text-display font-bold leading-[0.9] uppercase tracking-[-0.035em] text-display-lg max-w-[1400px]">
          <SplitTextAnimation as="span" text={title} />
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
