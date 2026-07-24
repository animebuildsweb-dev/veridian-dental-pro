import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { CLINIC } from "@/lib/clinic";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/dr-varun-logo.png.asset.json";


const nav = [
  { to: "/services", label: "Treatments" },
  { to: "/transformation", label: "Transformation" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonies", label: "Testimonies" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Location" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt={`${CLINIC.name} logo`}
            width={40}
            height={40}
            className="size-10 rounded-full object-contain"
          />
          <span className="text-xl font-extrabold uppercase tracking-tight">
            {CLINIC.shortName}
            <span className="text-accent">.</span>
          </span>
        </Link>


        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Book Appointment
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-border md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-surface"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
