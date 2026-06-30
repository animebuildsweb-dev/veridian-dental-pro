import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, CLINIC } from "@/lib/clinic";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    const title = s
      ? `${s.title} in Ahmedabad | ${CLINIC.name}`
      : "Treatment | Dr. Varun's Dental Clinic";
    const desc = s
      ? `${s.description} Book your ${s.shortTitle.toLowerCase()} appointment with Dr. Varun in Ahmedabad — painless, modern, trusted.`
      : "Dental treatments at Dr. Varun's Dental Clinic, Ahmedabad.";
    const path = `/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: path },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalProcedure",
                name: s.title,
                description: s.description,
                howPerformed: s.highlights.join(". "),
                bodyLocation: "Mouth",
                provider: {
                  "@type": "Dentist",
                  name: CLINIC.name,
                  telephone: CLINIC.phone,
                },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                  { "@type": "ListItem", position: 2, name: "Treatments", item: "/services" },
                  { "@type": "ListItem", position: 3, name: s.title, item: path },
                ],
              }),
            },
          ]
        : [],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-3xl font-bold">Treatment not found</h1>
      <Link to="/services" className="mt-6 inline-block text-accent hover:underline">
        ← Back to all treatments
      </Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <article className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-accent">Home</Link>
          <ChevronRight className="size-3" />
          <Link to="/services" className="hover:text-accent">Treatments</Link>
          <ChevronRight className="size-3" />
          <span className="text-accent">{service.shortTitle}</span>
        </nav>

        <header>
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Treatment {service.number}
          </div>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{service.description}</p>
        </header>

        <section className="mt-16 grid gap-10 rounded-3xl border border-border bg-surface p-10 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-xl font-bold">What’s included</h2>
            <ul className="mt-6 space-y-4">
              {service.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full border border-accent/20 bg-accent-soft">
                    <Check className="size-3 text-accent" />
                  </span>
                  <p className="text-sm">{h}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-lg font-bold">Book your {service.shortTitle.toLowerCase()} appointment</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Limited slots this week — including Sundays. Confirm your visit in under a minute.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-foreground"
              >
                Book on WhatsApp <ArrowUpRight className="size-4" />
              </a>
              <a
                href={CLINIC.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-surface"
              >
                Call {CLINIC.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-extrabold tracking-tight">Other treatments</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
              >
                <div className="font-mono text-xs text-accent">{s.number}</div>
                <h3 className="mt-3 font-bold">{s.shortTitle}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
