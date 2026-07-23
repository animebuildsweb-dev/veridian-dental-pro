import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";
import img1 from "@/assets/gallery-1000107760.jpg.asset.json";
import img2 from "@/assets/gallery-1000107743.jpg.asset.json";
import img3 from "@/assets/gallery-1000107753.jpg.asset.json";
import img4 from "@/assets/gallery-1000107748.jpg.asset.json";
import img5 from "@/assets/gallery-1000107781.jpg.asset.json";
import img6 from "@/assets/gallery-1000107755.jpg.asset.json";
import img7 from "@/assets/gallery-team-waving.jpg.asset.json";
import img8 from "@/assets/gallery-doctor-child.jpg.asset.json";
import img9 from "@/assets/gallery-team-thumbs.jpg.asset.json";

const TITLE = `Clinic Gallery | ${CLINIC.name}, Ahmedabad`;
const DESC = `Take a look inside Dr. Varun's Dental Clinic in Ahmedabad — modern chairs, advanced imaging and a spotless, calming environment built for painless care.`;

// Curated spans give a premium editorial rhythm on lg while collapsing to a
// clean 1/2-col stack on smaller screens. Aspect ratios keep every tile
// consistently framed regardless of source dimensions.
const PHOTOS = [
  { src: img7.url, alt: "Dr. Varun and the clinical team welcoming patients", span: "lg:col-span-8", aspect: "aspect-[16/10]" },
  { src: img8.url, alt: "Dr. Varun with a young patient smiling in the treatment chair", span: "lg:col-span-4", aspect: "aspect-[4/5]" },
  { src: img1.url, alt: "Dedicated treatment bay with overhead operatory light", span: "lg:col-span-4", aspect: "aspect-[4/5]" },
  { src: img5.url, alt: "Spacious clinic interior with premium dental chair", span: "lg:col-span-8", aspect: "aspect-[16/10]" },
  { src: img2.url, alt: "Digital smile imaging workstation beside the dental chair", span: "lg:col-span-4", aspect: "aspect-[4/5]" },
  { src: img3.url, alt: "Advanced dental unit with intra-oral X-ray and monitor", span: "lg:col-span-4", aspect: "aspect-[4/5]" },
  { src: img4.url, alt: "Bright operatory with natural light and modern equipment", span: "lg:col-span-4", aspect: "aspect-[4/5]" },
  { src: img9.url, alt: "The Dr. Varun's Dental Clinic team giving a thumbs up", span: "lg:col-span-7", aspect: "aspect-[16/10]" },
  { src: img6.url, alt: "Digital radiography and precision instrumentation", span: "lg:col-span-5", aspect: "aspect-[16/10]" },
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

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-6">

          {PHOTOS.map((p, i) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-xl ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i < 2 ? "eager" : "lazy"}
                className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${p.aspect}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
