import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const TITLE = `Contact & Location | ${CLINIC.name}, Odhav Ahmedabad`;
const DESC = `Visit Dr. Varun's Dental Clinic at Jayraj Complex, Cross Road, Nr. Odhav Rd, Ahmedabad. Call ${CLINIC.phone} or book on WhatsApp. Now open Sundays.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Contact & location
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Visit us in Odhav, Ahmedabad.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Easy to find on Cross Road, above HDFC Bank. Walk-ins welcome — but booking ahead guarantees
            your preferred time.
          </p>
        </header>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 text-accent">
                <MapPin className="size-5" />
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest">Address</h2>
              </div>
              <p className="mt-4 text-base leading-relaxed">
                {CLINIC.address.street}
                <br />
                {CLINIC.address.locality}
                <br />
                {CLINIC.address.region} {CLINIC.address.postalCode}
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 text-accent">
                <Phone className="size-5" />
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest">Contact</h2>
              </div>
              <a href={CLINIC.phoneHref} className="mt-4 block text-base font-semibold hover:text-accent">
                {CLINIC.phone}
              </a>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <MessageCircle className="size-4" /> WhatsApp booking
              </a>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 text-accent">
                <Clock className="size-5" />
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest">Hours</h2>
              </div>
              <ul className="mt-4 space-y-1 text-sm">
                {CLINIC.hours.map((h) => (
                  <li key={h.day}>
                    <span className="font-semibold">{h.day}:</span>{" "}
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-mono uppercase tracking-widest text-accent">
                Now open Sundays
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <iframe
              title={`Map showing ${CLINIC.name}`}
              src={CLINIC.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
