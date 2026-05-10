"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  client: string;
  category: string;
  year: number;
  image: string;
  href?: string;
}

export function PortfolioCard({ title, client, category, year, image, href = "#" }: Props) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-md border border-border text-[10px] uppercase tracking-widest">
          {category}
        </div>
      </div>
      <div className="mt-5 flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted">{client} — {year}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <span className="text-xs uppercase tracking-[0.25em] text-muted group-hover:text-primary transition-colors">
          View →
        </span>
      </div>
    </Link>
  );
}
