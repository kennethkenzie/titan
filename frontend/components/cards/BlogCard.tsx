"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  slug: string;
}

export function BlogCard({ title, excerpt, image, author, slug }: Props) {
  return (
    <Link href={`/blog/${slug}`} className="group block bg-surface border border-border hover:border-primary/60 transition-colors">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Article — {author}</p>
        <h3 className="mt-3 text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors text-balance">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">{excerpt}</p>
        <div className="mt-6 text-xs uppercase tracking-[0.3em] text-muted group-hover:text-white transition-colors">
          Read →
        </div>
      </div>
    </Link>
  );
}
