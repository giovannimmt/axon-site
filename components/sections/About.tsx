import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { about } from "@/content/site";

export function About() {
  return (
    <section id="company" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{about.title}</h2>
            <div className="mt-6 space-y-4 text-muted">
              {about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-8">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-3xl text-accent md:text-4xl">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <div className="mt-1 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 font-mono text-xs text-muted italic">Conceptual figures for this project.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
