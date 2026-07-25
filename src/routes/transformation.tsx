import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";
import img1 from "@/assets/transformation-1.jpg";
import img2 from "@/assets/transformation-2.jpg";
import img3 from "@/assets/transformation-3.jpg";
import img4 from "@/assets/transformation-4.jpg";

const TITLE = `Smile Transformations | ${CLINIC.name}`;
const DESC = `Real before-and-after results from Dr. Varun's Dental Clinic, Ahmedabad — teeth replacement, dental implants, full-mouth rehabilitation and restorative dentistry.`;

const CASES = [
  {
    src: img1,
    title: "Teeth Replacement",
    desc: "Broken and missing front teeth restored with natural-looking, tooth-coloured crowns — full aesthetics rebuilt in just a few visits.",
  },
  {
    src: img2,
    title: "Full-Arch Implant Rehabilitation",
    desc: "Severely worn dentition replaced with implant-supported ceramic crowns — restored bite, speech and confidence.",
  },
  {
    src: img3,
    title: "Full-Mouth Rehabilitation with Implants",
    desc: "Complete upper-arch rehabilitation with dental implants and a fixed prosthesis, giving the patient a brand-new permanent smile.",
  },
  {
    src: img4,
    title: "Deep Cavity Restoration",
    desc: "Extensively decayed molars saved with root canal therapy and tooth-coloured restorations — natural tooth preserved for life.",
  },
];

export const Route = createFileRoute("/transformation")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/transformation" },
      { property: "og:image", content: img3 },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: img3 },
    ],
    links: [{ rel: "canonical", href: "/transformation" }],
  }),
  component: TransformationPage,
});

function TransformationPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Smile transformations
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Real results. Real patients. Real smiles.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A selection of actual before-and-after cases treated at Dr. Varun's Dental Clinic in
            Ahmedabad — from single-tooth restorations to full-mouth implant rehabilitations.
          </p>
        </header>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {CASES.map((c) => (
            <figure
              key={c.title}
              className="overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-surface">
                <img
                  src={c.src}
                  alt={`${c.title} — before and after at Dr. Varun's Dental Clinic, Ahmedabad`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-8">
                <h2 className="text-xl font-bold">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Ready for your own transformation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a free smile assessment with Dr. Varun and see what's possible for your smile.
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

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Results shown are actual patient cases. Individual outcomes may vary based on clinical
          condition. All photos published with patient consent.
        </p>
      </div>
    </section>
  );
}
