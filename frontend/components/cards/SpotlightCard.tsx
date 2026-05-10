"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "relative bg-surface border border-border p-8 overflow-hidden group transition-colors",
        "hover:border-primary/40",
        className
      )}
      style={
        {
          backgroundImage:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(229,9,20,0.12), transparent 40%)",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
