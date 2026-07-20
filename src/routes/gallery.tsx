import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";
import img1 from "@/assets/gallery-1000107760.jpg.asset.json";
import img2 from "@/assets/gallery-1000107743.jpg.asset.json";
import img3 from "@/assets/gallery-1000107753.jpg.asset.json";
import img4 from "@/assets/gallery-1000107748.jpg.asset.json";
import img5 from "@/assets/gallery-1000107781.jpg.asset.json";
import img6 from "@/assets/gallery-1000107755.jpg.asset.json";

const TITLE = `Clinic Gallery | ${CLINIC.name}, Ahmedabad`;
const DESC = `Take a look inside Dr. Varun's Dental Clinic in Ahmedabad — modern chairs, advanced imaging and a spotless, calming environment built for painless care.`;

const PHOTOS = [
  { src: img1.url, alt: "Dedicated treatment bay with overhead operatory light" },
  { src: img2.url, alt: "Digital smile imaging workstation beside the dental chair" },
  { src: img3.url, alt: "Advanced dental unit with intra-oral X-ray and monitor" },
  { src: img4.url, alt: "Bright operatory with natural light and modern equipment" },
  { src: img5.url, alt: "Spacious clinic interior with premium dental chair" },
  { src: img6.url, alt: "Digital radiography and precision instrumentation" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: img2.url },
      { name: "twitter:image", content: img2.url },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-gold">
            Inside the clinic
          </span>
          <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            A calm, modern space built for painless dentistry.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every corner of Dr. Varun's Dental Clinic is designed for your comfort — from
            advanced imaging and precision instrumentation to spotless operatories and warm,
            welcoming interiors in the heart of Odhav, Ahmedabad.
          </p>
        </header>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <figure
              key={p.src}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i < 2 ? "eager" : "lazy"}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight">See it for yourself</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Visit us in Odhav or book a consultation on WhatsApp — we'd love to welcome you in.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:bg-foreground"
            >
              Book on WhatsApp
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
