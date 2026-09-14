import { Reveal } from "@/components/ui/Reveal";
import { howAxonThinks } from "@/content/site";

export function HowAxonThinks() {
  return (
    <section className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{howAxonThinks.title}</h2>
        </Reveal>
        <div className="relative mt-16 grid gap-10 md:grid-cols-4">
          <div className="absolute top-5 right-0 left-0 hidden h-px bg-border md:block" aria-hidden="true" />
          {howAxonThinks.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-background font-mono text-sm text-accent">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
