import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-xs tracking-[0.2em] uppercase text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
