"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function AnimatedButton({ href, children, variant = "primary", className, onClick, type = "button" }: Props) {
  const cls = cn(
    "group relative inline-flex items-center gap-3 px-7 py-4 text-xs uppercase tracking-[0.3em] font-semibold overflow-hidden border rounded-full",
    variant === "primary" ? "bg-primary text-white border-primary shadow-glow" : "bg-transparent text-white border-border hover:border-primary",
    className
  );
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="relative z-10"
        whileHover={{ x: 4, y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <ArrowUpRight size={16} />
      </motion.span>
      <span className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]" />
      <span className="absolute inset-0 mix-blend-difference flex items-center gap-3 px-7 text-background opacity-0 group-hover:opacity-100 transition-opacity">
        {children}
      </span>
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
