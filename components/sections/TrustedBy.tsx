import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ConceptualLogo } from "@/components/ui/ConceptualLogo";
import { Marquee } from "@/components/ui/Marquee";
import { trustedBy } from "@/content/site";

export function TrustedBy() {
  return (
    <section className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <SectionLabel>{trustedBy.eyebrow}</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            {trustedBy.title}
          </h2>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <Marquee duration={32} className="mt-16">
          {trustedBy.organizations.map((org) => (
            <ConceptualLogo key={org.name} name={org.name} />
          ))}
        </Marquee>
      </Reveal>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="mt-12 font-mono text-xs text-muted italic">{trustedBy.note}</p>
      </div>
    </section>
  );
}
