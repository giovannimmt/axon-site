import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { finalCta } from "@/content/site";

export function FinalCta() {
  return (
    <section id="contact" className="border-t border-border py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{finalCta.title}</h2>
          <p className="mt-4 text-muted">{finalCta.body}</p>
        </Reveal>
        <Reveal delay={0.15} className="mt-12">
          <ContactForm />
        </Reveal>
        <Reveal delay={0.25}>
          <a href="#top" className="mt-8 inline-block text-sm text-muted hover:text-accent">
            {finalCta.ctaSecondary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
