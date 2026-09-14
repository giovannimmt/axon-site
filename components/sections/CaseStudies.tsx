import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/content/site";

export function CaseStudies() {
  return (
    <section className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border p-6">
                <h3 className="text-lg font-semibold">{study.title}</h3>
                <p className="mt-4 text-sm text-muted">
                  <span className="text-foreground">Problem — </span>
                  {study.problem}
                </p>
                <p className="mt-3 text-sm text-muted">
                  <span className="text-foreground">Solution — </span>
                  {study.solution}
                </p>
                <div className="mt-auto pt-6">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted uppercase">
                    {study.resultsLabel}
                  </span>
                  <ul className="mt-2 space-y-1">
                    {study.results.map((r) => (
                      <li key={r} className="font-mono text-sm text-accent">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
