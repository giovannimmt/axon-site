import { Logo } from "@/components/ui/Logo";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted">{footer.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-6">
          {footer.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-6">
          {footer.social.map((s) => (
            <span key={s} className="text-sm text-muted">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-6">
        <p className="font-mono text-xs text-muted">
          {footer.legal} · {footer.concept}
        </p>
      </div>
    </footer>
  );
}
