export function NoiseBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div className="noise" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-radial-glow blur-3xl" />
    </div>
  );
}
