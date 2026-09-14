const SHAPES: Record<string, () => React.ReactNode> = {
  NOVA: () => <path d="M4 20L10 4L16 20" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  VERTEX: () => (
    <path d="M2 16L10 4L18 16" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
  ),
  NORTH: () => <path d="M10 2V18M4 8L10 2L16 8" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  ORBIT: () => <ellipse cx="10" cy="10" rx="9" ry="4" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  "FURACÃO FC": () => (
    <g stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3H16V9.5C16 13.5 13 16.5 10 18C7 16.5 4 13.5 4 9.5V3Z" />
      <path d="M8 6.5H12.5M8 6.5V14M8 10H11.5" />
    </g>
  ),
  LUMEN: () => <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4" fill="none" />,
  MOTION: () => (
    <path d="M2 14L7 6L11 12L18 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
  ),
  QUANTA: () => (
    <g stroke="currentColor" strokeWidth="1.4">
      <line x1="3" y1="16" x2="3" y2="9" />
      <line x1="10" y1="16" x2="10" y2="4" />
      <line x1="17" y1="16" x2="17" y2="12" />
    </g>
  ),
  ECHO: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <circle cx="10" cy="10" r="2" />
      <circle cx="10" cy="10" r="5.5" opacity="0.6" />
      <circle cx="10" cy="10" r="9" opacity="0.3" />
    </g>
  ),
  CRUX: () => <path d="M10 3V17M3 10H17" stroke="currentColor" strokeWidth="1.4" />,
};

export function ConceptualLogo({ name }: { name: string }) {
  const shape = SHAPES[name];
  return (
    <span className="inline-flex items-center gap-2.5 text-muted grayscale opacity-70 transition hover:opacity-100 hover:text-foreground hover:grayscale-0">
      <svg viewBox="0 0 20 20" className="h-7 w-7 md:h-8 md:w-8" aria-hidden="true">
        {shape?.()}
      </svg>
      <span className="font-mono text-base tracking-wide md:text-lg">{name}</span>
    </span>
  );
}
