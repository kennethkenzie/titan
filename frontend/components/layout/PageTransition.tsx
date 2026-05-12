"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;

type Direction = "left" | "right" | "top" | "bottom";
const DIRECTIONS: Direction[] = ["left", "right", "top", "bottom"];

function pickDirection(): Direction {
  return DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
}

function originFor(dir: Direction) {
  switch (dir) {
    case "left":
      return "left";
    case "right":
      return "right";
    case "top":
      return "top";
    case "bottom":
      return "bottom";
  }
}

function axisFor(dir: Direction) {
  return dir === "left" || dir === "right" ? "scaleX" : "scaleY";
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // New random direction per navigation
  const direction = useMemo(() => pickDirection(), [pathname]);
  const origin = originFor(direction);
  const axis = axisFor(direction);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} className="relative">
        {/* Red curtain — wipes from a random edge each navigation */}
        <motion.div
          initial={{ [axis]: 1 } as any}
          animate={{ [axis]: 0 } as any}
          exit={{ [axis]: 1 } as any}
          transition={{ duration: 0.2, ease: EASE }}
          style={{ transformOrigin: origin }}
          className="fixed inset-0 z-[100] bg-[#E50914] pointer-events-none"
        />

        {/* Actual page content — gentle slide-in */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
