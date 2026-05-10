import { cn } from "@/lib/utils";

export function GridOverlay({ className }: { className?: string }) {
  return <div className={cn("pointer-events-none absolute inset-0 grid-overlay opacity-40", className)} />;
}
