"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogCard } from "@/components/cards/BlogCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface B { id: number; title: string; excerpt: string; image: string; author: string; slug: string; }

export function BlogPreview({ blogs }: { blogs: B[] }) {
  return (
    <section className="relative py-32 md:py-44 container">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-primary mb-4">▍ Journal</p>
            <h2 className="text-display-md font-bold uppercase leading-[0.92] max-w-3xl">
              Notes from the <span className="gradient-text-red">studio</span>.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-5 py-3 border border-border text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-colors"
          >
            Read journal <ArrowUpRight size={14} />
          </Link>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.slice(0, 3).map((b, i) => (
          <ScrollReveal key={b.id} delay={i * 0.1}>
            <BlogCard {...b} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
