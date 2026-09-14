import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <circle cx="6" cy="9" r="1.6" fill="currentColor" opacity="0.55" />
      <circle cx="26" cy="9" r="1.6" fill="currentColor" opacity="0.55" />
      <circle cx="6" cy="23" r="1.6" fill="currentColor" opacity="0.55" />
      <circle cx="26" cy="23" r="1.6" fill="currentColor" opacity="0.55" />
      <path
        d="M16 16L6 9M16 16L26 9M16 16L6 23M16 16L26 23"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <LogoMark className="text-accent" />
      AXON
    </span>
  );
}
