"use client";

import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    const r = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(r);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="hidden md:block fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 border border-primary/60 rounded-full z-[55] pointer-events-none mix-blend-difference"
      />
      <div
        ref={dot}
        className="hidden md:block fixed top-0 left-0 w-1.5 h-1.5 -ml-0.5 -mt-0.5 bg-primary rounded-full z-[55] pointer-events-none"
      />
    </>
  );
}
