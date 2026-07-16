import { createFileRoute } from "@tanstack/react-router";
import { CLINIC, TESTIMONIALS } from "@/lib/clinic";
import { Quote, Star } from "lucide-react";
import video1 from "@/assets/img_7599.mp4.asset.json";
import video2 from "@/assets/img_7600.mp4.asset.json";
import video3 from "@/assets/img_7601.mp4.asset.json";
import video4 from "@/assets/img_7602.mp4.asset.json";

const VIDEO_TESTIMONIALS = [video1, video2, video3, video4];

const TITLE = `Patient Testimonies | ${CLINIC.name}`;
const DESC = `Read genuine patient testimonies for Dr. Varun's Dental Clinic in Ahmedabad — rated ${CLINIC.rating}★ by ${CLINIC.reviewCount}+ patients for painless, world-class dental care.`;

export const Route = createFileRoute("/testimonies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/testimonies" },
    ],
    links: [{ rel: "canonical", href: "/testimonies" }],
  }),
  component: TestimoniesPage,
});

function TestimoniesPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Patient testimonies
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Trusted by {CLINIC.reviewCount}+ patients across Ahmedabad.
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold">{CLINIC.rating} / 5 average rating</span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">
            Real words from real patients — sharing their experience of gentle, precise and
            genuinely caring dentistry at Dr. Varun's Dental Clinic.
          </p>
        </header>

        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Video testimonies
          </h2>
          <p className="mt-2 text-muted-foreground">
            Watch patients share their experience in their own words.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <div
                key={v.url}
                className="overflow-hidden rounded-3xl border border-border bg-card"
              >
                <video
                  src={v.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/16] w-full bg-black object-cover"
                  aria-label={`Patient video testimony ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-8"
            >
              <Quote className="size-6 text-accent" />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.location}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Share your experience</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Been treated by Dr. Varun? We'd love to hear from you. Your feedback helps others take
            the first step toward better dental health.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background hover:bg-accent"
            >
              Leave a Review
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
