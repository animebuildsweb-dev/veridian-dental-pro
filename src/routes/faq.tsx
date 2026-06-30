import { createFileRoute } from "@tanstack/react-router";
import { FAQS, CLINIC } from "@/lib/clinic";

const TITLE = `FAQ | ${CLINIC.name}, Ahmedabad`;
const DESC = `Answers to common questions about treatments, appointments, hours and pricing at Dr. Varun's Dental Clinic in Odhav, Ahmedabad.`;

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqLd) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <header>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Frequently asked
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Questions, answered.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Still wondering about something? Message us on WhatsApp — we reply within minutes.
          </p>
        </header>

        <div className="mt-16 divide-y divide-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-surface p-10 text-center">
          <h2 className="text-2xl font-extrabold">Ready to book?</h2>
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground hover:bg-foreground"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
