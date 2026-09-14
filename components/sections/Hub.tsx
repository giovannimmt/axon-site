import { Reveal } from "@/components/ui/Reveal";
import { hub } from "@/content/site";

export function Hub() {
  return (
    <section id="solutions" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{hub.title}</h2>
            <p className="mt-6 max-w-md text-muted">{hub.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background-elevated p-8 text-center font-mono text-sm">
              {hub.diagram.map((line, i) => (
                <div key={line} className="flex flex-col items-center gap-3">
                  {i > 0 && <span className="text-accent">↓</span>}
                  <span
                    className={
                      i === 0
                        ? "text-lg font-semibold tracking-widest text-foreground"
                        : "text-muted"
                    }
                  >
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
