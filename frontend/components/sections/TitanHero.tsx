"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { SplitTextAnimation } from "@/components/animations/SplitTextAnimation";
import { GridOverlay } from "@/components/animations/GridOverlay";
import { AnimatedButton } from "@/components/buttons/AnimatedButton";
import { cn } from "@/lib/utils";

type Slide =
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "video"; src: string; poster: string; caption: string };

const SLIDES: Slide[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1800",
    alt: "Cinematic brand systems",
    caption: "Cinematic brand systems",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800",
    alt: "Motion-led product surfaces",
    caption: "Motion-led product surfaces",
  },
  {
    type: "video",
    src: "https://cdn.coverr.co/videos/coverr-an-abstract-3d-rendering-of-a-network-2606/1080p.mp4",
    poster: "https://images.unsplash.com/photo-1620207418302-439b387441b0?w=1800",
    caption: "Engineered digital platforms",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800",
    alt: "Worlds for ambitious brands",
    caption: "Worlds for ambitious brands",
  },
];

export function TitanHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const slide = SLIDES[index];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <GridOverlay />

      {/* RIGHT — full-bleed carousel covering entire right half (and full width on mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute inset-0 lg:left-1/2 lg:right-0 lg:inset-y-0 z-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute inset-0"
          >
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={slide.poster}
                className="w-full h-full object-cover"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
            {/* Mobile-only dark overlay so headline stays legible. Desktop: image is clean. */}
            <div className="absolute inset-0 bg-background/70 lg:bg-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption (desktop only, on the image) */}
        <div className="hidden lg:block absolute left-8 bottom-28 z-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </div>
          <div className="mt-2 text-sm font-bold uppercase tracking-widest">{slide.caption}</div>
        </div>
      </motion.div>

      {/* LEFT — copy */}
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[100svh] pt-28 lg:pt-0 pb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[11px] md:text-xs uppercase tracking-[0.4em] text-primary mb-6"
          >
            ▍ Smari Creative — Kampala · Brussels
          </motion.p>

          <h1 className="text-display font-bold leading-[0.95] tracking-[-0.03em] uppercase">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <SplitTextAnimation as="span" text="Let's move" />
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <SplitTextAnimation as="span" text="your" delay={0.2} />{" "}
              <span className="text-[#E50914]">
                <SplitTextAnimation as="span" text="brand." delay={0.45} />
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed"
          >
            We are a creative, marketing, branding, events management and promotional
            services agency — specialising in corporate identity, pixel-perfect
            printing, web solutions, audio/visual and motion graphics for ambitious
            organisations across East Africa and Europe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <AnimatedButton href="/contact">Start a project</AnimatedButton>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-5 py-4 border border-border rounded-full text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors"
            >
              <Play size={14} className="fill-current" /> Watch reel
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-14 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted"
          >
            <ArrowDown size={14} className="animate-bounce text-primary" />
            Scroll to explore
          </motion.div>
        </div>
      </div>

      {/* Dots — pinned to bottom, centered over right half on desktop, full width on mobile */}
      <div className="absolute bottom-8 left-0 right-0 lg:left-1/2 lg:right-0 z-20 flex items-center justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-2.5 flex items-center"
          >
            <span
              className={cn(
                "block h-[2px] transition-all duration-500",
                i === index ? "w-10 bg-primary" : "w-6 bg-border group-hover:bg-muted"
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
