const SHAPES: Record<string, () => React.ReactNode> = {
  DATA: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <ellipse cx="9" cy="4" rx="6" ry="2" />
      <path d="M3 4V14C3 15.1 5.7 16 9 16C12.3 16 15 15.1 15 14V4" />
      <path d="M3 9C3 10.1 5.7 11 9 11C12.3 11 15 10.1 15 9" />
    </g>
  ),
  MODELS: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <circle cx="9" cy="4" r="2" />
      <circle cx="4" cy="14" r="2" />
      <circle cx="14" cy="14" r="2" />
      <path d="M9 6L5.5 12.3M9 6L12.5 12.3" />
    </g>
  ),
  AGENTS: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <rect x="4" y="4" width="10" height="10" rx="3" />
      <circle cx="7" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11" cy="9" r="0.9" fill="currentColor" stroke="none" />
    </g>
  ),
  AUTOMATION: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <path d="M3 9C3 5.7 5.7 3 9 3C11.4 3 13.5 4.4 14.5 6.5" />
      <path d="M15 9C15 12.3 12.3 15 9 15C6.6 15 4.5 13.6 3.5 11.5" />
      <path d="M12 4.5L14.5 6.5L15.5 3.5" />
      <path d="M6 13.5L3.5 11.5L2.5 14.5" />
    </g>
  ),
  PRODUCTS: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round">
      <path d="M9 2.5L15.5 6V12L9 15.5L2.5 12V6L9 2.5Z" />
      <path d="M2.5 6L9 9.5L15.5 6M9 9.5V15.5" />
    </g>
  ),
  PEOPLE: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <circle cx="6.5" cy="6" r="2.3" />
      <circle cx="12" cy="7.5" r="1.8" />
      <path d="M2.5 15C2.5 11.7 4.3 10 6.5 10C8.2 10 9.6 10.9 10.2 12.5" />
      <path d="M10.5 15C10.5 12.3 11.8 10.8 14 10.8C15.7 10.8 15.5 12.3 15.5 15" />
    </g>
  ),
  OUTCOMES: () => (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <circle cx="9" cy="9" r="6.5" />
      <path d="M6 9.3L8 11.3L12.3 6.7" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
};

export function LayerIcon({ name }: { name: string }) {
  const shape = SHAPES[name];
  return (
    <svg viewBox="0 0 18 18" className="h-[18px] w-[18px]" aria-hidden="true">
      {shape?.()}
    </svg>
  );
}
