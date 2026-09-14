import { Reveal } from "@/components/ui/Reveal";
import { future } from "@/content/site";

export function Future() {
  return (
    <section className="border-t border-border bg-background py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
            {future.title}
            <br />
            <span className="text-muted">{future.subtitle}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {future.nodes.map((node) => (
              <span
                key={node}
                className="rounded-full border border-border px-4 py-2 font-mono text-xs tracking-wide text-muted"
              >
                {node}
              </span>
            ))}
          </div>
          <div className="mt-6 font-mono text-xs text-accent">↓</div>
          <div className="mt-6 inline-block rounded-full border border-accent/50 px-8 py-3 font-semibold tracking-widest text-accent">
            {future.center}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
