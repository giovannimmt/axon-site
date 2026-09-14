import { Reveal } from "@/components/ui/Reveal";
import { customTech } from "@/content/site";

export function CustomTechnology() {
  return (
    <section className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{customTech.title}</h2>
          <p className="mt-4 text-muted">{customTech.body}</p>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {customTech.areas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border p-6">
                <span className="font-mono text-xs tracking-[0.15em] text-accent">{area.title}</span>
                <p className="mt-3 text-sm text-muted">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-12">
          <a href="#contact" className="text-sm font-medium text-accent hover:underline">
            {customTech.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
