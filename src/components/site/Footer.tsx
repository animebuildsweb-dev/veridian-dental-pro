import { Link } from "@tanstack/react-router";
import { CLINIC, SERVICES } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-accent" aria-hidden />
              <span className="font-extrabold uppercase tracking-tight">
                {CLINIC.shortName}
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {CLINIC.tagline}. Painless, modern dentistry in Ahmedabad — backed by 20+ years of clinical care.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Treatments
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Visit
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              {CLINIC.address.street}
              <br />
              {CLINIC.address.locality}
              <br />
              {CLINIC.address.region} {CLINIC.address.postalCode}
            </p>
            <a
              href={CLINIC.phoneHref}
              className="mt-3 inline-block text-sm font-semibold text-foreground hover:text-accent"
            >
              {CLINIC.phone}
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Hours
            </h3>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              {CLINIC.hours.map((h) => (
                <li key={h.day}>
                  <span className="text-foreground">{h.day}:</span> {h.time}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 text-xs font-semibold uppercase tracking-widest">
              <a href={CLINIC.social.instagram} className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener">
                Instagram
              </a>
              <a href={CLINIC.social.facebook} className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Painless precision in Ahmedabad / Odhav.</p>
        </div>
      </div>
    </footer>
  );
}
