"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  summary: string;
  image: string;
  slug: string;
}

export function CaseStudyCard({ title, summary, image, slug }: Props) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group relative grid md:grid-cols-2 gap-0 border border-border bg-surface hover:border-primary/60 transition-colors overflow-hidden"
    >
      <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
      </div>
      <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-4">Case Study</p>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight text-balance">{title}</h3>
          <p className="mt-5 text-muted leading-relaxed">{summary}</p>
        </div>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
          <span>Read story</span>
          <span className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
