import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, CLINIC } from "@/lib/clinic";
import { ArrowUpRight } from "lucide-react";

const TITLE = `Dental Treatments in Ahmedabad | ${CLINIC.name}`;
const DESC = `Explore the complete range of dental treatments at Dr. Varun's Dental Clinic, Ahmedabad — root canals, clear aligners, implants, veneers, pediatric care, oral surgery and more.`;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Our treatments
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            World-class dental care, calmly delivered.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Eight specialised services covering every stage of dental care — from gentle preventive
            dentistry to advanced cosmetic and surgical work, all delivered with painless precision.
          </p>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
            >
              <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-accent-soft font-mono text-lg font-medium text-accent">
                {s.number}
              </div>
              <h2 className="text-xl font-bold">{s.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Learn more <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Not sure where to start?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Get a free smile assessment with Dr. Varun. We’ll examine your concerns and walk you through your
            options — no pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:bg-accent"
            >
              Book Free Assessment
            </a>
            <a
              href={CLINIC.phoneHref}
              className="rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold hover:bg-card"
            >
              Call {CLINIC.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
