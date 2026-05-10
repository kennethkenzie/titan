"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative bg-surface border border-border p-8 overflow-hidden group",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/0 before:via-primary/0 before:to-primary/0",
        "hover:before:from-primary/20 hover:before:to-transparent before:transition-all before:duration-500",
        "hover:border-primary/60 hover:shadow-glow",
        className
      )}
    >
      <span className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
