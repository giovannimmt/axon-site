const SHAPES: Record<string, (accent: boolean) => React.ReactNode> = {
  NOVA: () => <path d="M4 20L10 4L16 20" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  VERTEX: () => (
    <path d="M2 16L10 4L18 16" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
  ),
  NORTH: () => <path d="M10 2V18M4 8L10 2L16 8" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  ORBIT: () => <ellipse cx="10" cy="10" rx="9" ry="4" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  LUMEN: () => <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  MOTION: () => (
    <path d="M2 14L7 6L11 12L18 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  ),
};

export function ConceptualLogo({ name }: { name: string }) {
  const shape = SHAPES[name];
  return (
    <span className="inline-flex items-center gap-2 text-muted grayscale opacity-70 transition hover:opacity-100 hover:text-foreground hover:grayscale-0">
      <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
        {shape?.(false)}
      </svg>
      <span className="font-mono text-sm tracking-wide">{name}</span>
    </span>
  );
}
