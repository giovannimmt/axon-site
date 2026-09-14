import { Reveal } from "@/components/ui/Reveal";
import { ConceptualLogo } from "@/components/ui/ConceptualLogo";
import { trustedBy } from "@/content/site";

export function TrustedBy() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{trustedBy.title}</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6">
            {trustedBy.organizations.map((org) => (
              <ConceptualLogo key={org.name} name={org.name} />
            ))}
          </div>
        </Reveal>
        <p className="mt-8 font-mono text-xs text-muted italic">{trustedBy.note}</p>
      </div>
    </section>
  );
}
