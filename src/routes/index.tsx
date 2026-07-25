import { createFileRoute, Link } from "@tanstack/react-router";
import clinicInterior from "@/assets/clinic-interior.jpg";
import drVarunPortrait from "@/assets/dr-varun-portrait.jpg";
import smileGallery from "@/assets/dr-varun-child-patient-dental-care-ahmedabad.jpg";
import { CLINIC, SERVICES, TESTIMONIALS, FAQS } from "@/lib/clinic";
import { ArrowUpRight, Check, MapPin, Phone, Clock, Star } from "lucide-react";

const HOME_TITLE = `${CLINIC.name} | Painless Dentist in Odhav, Ahmedabad`;
const HOME_DESC = `${CLINIC.tagline}. Painless root canals, clear aligners, implants & cosmetic dentistry by Dr. Varun in Ahmedabad. 5.0★ from 199 Google reviews. Now open Sundays.`;

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-clinic.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqLd) }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-12 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent-soft px-3 py-1">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                {CLINIC.rating} Rating
              </span>
              <div className="h-3 w-px bg-accent/20" />
              <span className="font-mono text-xs text-accent">{CLINIC.reviewCount} Google Reviews</span>
            </div>
            <h1 className="mb-8 text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Exceptional Care for a <span className="italic text-accent">Healthier</span> Smile.
            </h1>
            <p className="mb-10 max-w-[54ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
              Advanced painless dentistry meets 20+ years of clinical expertise. Experience state-of-the-art
              care in the heart of Ahmedabad — now open Sundays.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent"
              >
                Book Your Consultation
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-4 text-sm font-semibold transition-all hover:bg-surface"
              >
                <Phone className="size-4" /> {CLINIC.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" /> Same-day slots
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" /> Now open Sundays
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" /> 100% sterilised
              </span>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <img
              src={clinicInterior}
              alt="Modern, minimalist interior of Dr. Varun's Dental Clinic in Ahmedabad with high-end dental chair and natural light"
              width={896}
              height={1120}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-border bg-card p-6 shadow-xl">
              <div className="mb-2 flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm italic text-muted-foreground">
                “The most painless RCT experience I’ve ever had. Dr. Varun and his staff are incredibly gentle.”
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-tighter">— Rahul S., Ahmedabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                What we do
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Specialized Treatments
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive dental solutions tailored to your unique smile goals, delivered with painless precision.
              </p>
            </div>
            <span className="hidden font-mono text-xs uppercase tracking-widest text-accent md:block">
              Now Open Sundays
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl"
              >
                <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-accent-soft font-mono text-lg font-medium text-accent transition-transform group-hover:scale-110">
                  {s.number}
                </div>
                <h3 className="mb-2 text-lg font-bold">{s.shortTitle}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowUpRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:bg-accent"
            >
              Get a Free Smile Assessment <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <img
            src={drVarunPortrait}
            alt="Dr. Varun, founder and principal dentist at Dr. Varun's Dental Clinic Ahmedabad"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover outline outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Meet the expert
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight">Legacy of Excellence</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dr. Varun brings over{" "}
              <span className="font-bold text-foreground">20 years of clinical experience</span> to Ahmedabad.
              His philosophy centres on <em>Painless Precision</em> — leveraging the latest dental
              technologies to ensure patient comfort at every step.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Advanced training in modern implantology & clear aligners",
                "Committed to a 100% sterilised, hygienic environment",
                "Thousands of successful treatments across Ahmedabad",
                "Calm, child-friendly chairside manner",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 place-items-center rounded-full border border-accent/20 bg-accent-soft">
                    <Check className="size-3 text-accent" />
                  </span>
                  <p className="text-sm">{t}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
              <h3 className="font-bold">Now open Sundays</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We understand your busy schedule. We are now open on Sundays for your convenience.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              More about the clinic <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              Why choose us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              The modern dental standard, in Ahmedabad
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Painless Approach", d: "Modern anaesthetic protocols ensure your comfort during every procedure." },
              { t: "Hygienic Excellence", d: "International sterilisation standards for complete safety and peace of mind." },
              { t: "Modern Diagnostics", d: "Digital X-rays and intra-oral scanners for accurate, non-invasive planning." },
              { t: "Sunday Availability", d: "Flexible scheduling — because dental health doesn’t take the weekend off." },
            ].map((b, i) => (
              <div key={b.t} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">0{i + 1}</div>
                <h3 className="mt-4 text-lg font-bold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Smile gallery
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Smiles we’re proud of.
              </h2>
              <p className="mt-4 text-muted-foreground">
                From subtle whitening to complete smile makeovers, see how patients across Ahmedabad have
                transformed their confidence at Dr. Varun’s.
              </p>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:bg-accent"
              >
                Start Your Smile Transformation
              </a>
            </div>
            <img
              src={smileGallery}
              alt="Dr. Varun with a happy child patient in the dental chair at Dr. Varun's Dental Clinic, Ahmedabad"
              width={1280}
              height={800}
              loading="lazy"
              className="aspect-[16/10] w-full rounded-[2rem] object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Patient stories
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                Trusted across Ahmedabad
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-card px-6 py-4 text-sm shadow-sm">
              <span className="text-2xl font-extrabold text-amber-500">★ {CLINIC.rating}</span>
              <span className="mx-3 text-muted-foreground/40">|</span>
              <span className="font-semibold">{CLINIC.reviewCount} Google Reviews</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="flex-1 italic text-muted-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm font-bold">
                  {t.name} <span className="text-muted-foreground">· {t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Common questions, clearly answered.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Can’t find what you’re looking for? Message us on WhatsApp and we’ll reply within minutes.
            </p>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-surface"
            >
              Ask on WhatsApp <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="divide-y divide-border">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section id="location" className="bg-foreground py-24 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold">Visit our clinic</h2>
              <p className="mt-4 text-sm text-background/60">
                Easy to find on Cross Road, above HDFC Bank near Odhav Road. We hold a few same-day
                appointments every day.
              </p>
              <div className="mt-10 space-y-8 text-sm">
                <div>
                  <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    <MapPin className="mr-2 inline size-3.5" /> Address
                  </h3>
                  <p className="text-background/80">
                    {CLINIC.address.street}
                    <br />
                    {CLINIC.address.locality}
                    <br />
                    {CLINIC.address.region} {CLINIC.address.postalCode}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    <Phone className="mr-2 inline size-3.5" /> Contact
                  </h3>
                  <a href={CLINIC.phoneHref} className="block text-background/80 hover:text-accent">
                    {CLINIC.phone}
                  </a>
                  <a
                    href={CLINIC.whatsapp}
                    target="_blank"
                    rel="noopener"
                    className="block text-background/80 hover:text-accent"
                  >
                    WhatsApp booking
                  </a>
                </div>
                <div>
                  <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                    <Clock className="mr-2 inline size-3.5" /> Hours
                  </h3>
                  {CLINIC.hours.map((h) => (
                    <p key={h.day} className="text-background/80">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <iframe
                  title={`Map showing ${CLINIC.name}`}
                  src={CLINIC.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[500px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
