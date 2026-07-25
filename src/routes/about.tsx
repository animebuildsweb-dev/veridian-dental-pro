import { createFileRoute } from "@tanstack/react-router";
import drVarun from "@/assets/dr-varun-portrait.jpg";
import { CLINIC } from "@/lib/clinic";
import { Check } from "lucide-react";

const TITLE = `About Dr. Varun | 20+ Years of Painless Dentistry in Ahmedabad`;
const DESC = `Meet Dr. Varun — founder of Dr. Varun's Dental Clinic, Ahmedabad. 20+ years of experience in painless, modern dentistry across endodontics, implants, orthodontics and cosmetic care.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            About the clinic
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Two decades of painless precision dentistry.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {CLINIC.name} was built on a simple belief — that exceptional dental care should feel calm,
            unhurried and completely painless. Today it’s one of Ahmedabad’s most-recommended clinics, with
            5.0★ from {CLINIC.reviewCount} Google reviews.
          </p>
        </header>

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:items-center">
          <img
            src={drVarun}
            alt="Dr. Varun, principal dentist with over 20 years of experience"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover"
          />
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Dr. Varun</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">
              Founder & Principal Dentist
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              With over 20 years in clinical practice, Dr. Varun has built a reputation for combining
              technical excellence with a genuinely warm chairside manner. From single-visit root canals to
              complex full-mouth rehabilitations, every treatment plan is tailored, transparent and
              comfortable.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Advanced training in implantology, endodontics & orthodontics",
                "15,000+ successful procedures completed",
                "Patient-first, anxiety-free chairside approach",
                "Continuous education in modern dental technology",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full border border-accent/20 bg-accent-soft">
                    <Check className="size-3 text-accent" />
                  </span>
                  <p className="text-sm">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mt-24 rounded-3xl border border-border bg-surface p-10 md:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Our Philosophy</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Painless first",
                d: "We design every treatment around your comfort — modern anesthesia, gentle techniques and the time to do it right.",
              },
              {
                t: "Honest dentistry",
                d: "We only recommend what you genuinely need. Clear options, transparent pricing, no upsells.",
              },
              {
                t: "Hygiene without compromise",
                d: "International sterilisation protocols, single-use instruments where required, immaculate operatories.",
              },
            ].map((b) => (
              <div key={b.t}>
                <h3 className="text-lg font-bold">{b.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground hover:bg-foreground"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </article>
  );
}
