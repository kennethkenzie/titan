"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  category?: string;
  image: string;
  href?: string;
  className?: string;
}

export function HoverRevealCard({ title, category, image, href = "#", className }: Props) {
  return (
    <Link href={href} className={cn("group relative block overflow-hidden border border-border bg-surface", className)}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
        <motion.div className="absolute inset-x-0 bottom-0 p-6">
          {category && (
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-2">{category}</p>
          )}
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-balance">{title}</h3>
            <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </motion.div>
      </div>
    </Link>
  );
}
