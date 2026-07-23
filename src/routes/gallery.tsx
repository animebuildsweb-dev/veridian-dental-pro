import { createFileRoute } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";
import imgChair from "@/assets/premium-dental-treatment-chair-ahmedabad.jpg.asset.json";
import imgWorkstation from "@/assets/dental-operatory-workstation-monitor-ahmedabad.jpg.asset.json";
import imgUnit from "@/assets/advanced-dental-unit-xray-ahmedabad.jpg.asset.json";
import imgOperatory from "@/assets/modern-dental-clinic-operatory-odhav-ahmedabad.jpg.asset.json";
import imgInterior from "@/assets/spacious-dental-clinic-interior-ahmedabad.jpg.asset.json";
import imgRadiography from "@/assets/digital-radiography-precision-instruments-ahmedabad.jpg.asset.json";
import imgTeamWave from "@/assets/dr-varun-dental-team-welcoming-patients-ahmedabad.jpg.asset.json";
import imgChild from "@/assets/dr-varun-pediatric-dental-care-ahmedabad.jpg.asset.json";
import imgTeam from "@/assets/dr-varun-dental-clinic-team-ahmedabad.jpg.asset.json";

const SITE = "https://veridian-dental-pro.lovable.app";
const TITLE = `Clinic Gallery | ${CLINIC.name}, Odhav Ahmedabad`;
const DESC = `Step inside Dr. Varun's Dental Clinic in Odhav, Ahmedabad — modern operatories, advanced digital imaging and a spotless, calming space designed for painless dentistry.`;

// Curated spans give a premium editorial rhythm on lg while collapsing to a
// clean 1/2-col stack on smaller screens. Aspect ratios keep every tile
// consistently framed regardless of source dimensions.
const PHOTOS = [
  {
    src: imgTeamWave.url,
    alt: `Dr. Varun and the clinical team welcoming patients at ${CLINIC.name} in Odhav, Ahmedabad`,
    caption: "Our team welcoming you to the clinic",
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    src: imgChild.url,
    alt: `Dr. Varun providing gentle pediatric dental care to a young patient in Ahmedabad`,
    caption: "Gentle pediatric dental care",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: imgChair.url,
    alt: `Premium dental treatment chair and overhead operatory light at Dr. Varun's Dental Clinic, Ahmedabad`,
    caption: "Premium dental treatment chair",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: imgInterior.url,
    alt: `Spacious, modern dental clinic interior with premium dental chair in Odhav, Ahmedabad`,
    caption: "Spacious modern operatory",
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    src: imgWorkstation.url,
    alt: `Digital smile imaging workstation beside the dental chair at Dr. Varun's Dental Clinic, Ahmedabad`,
    caption: "Digital smile imaging workstation",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: imgUnit.url,
    alt: `Advanced dental unit with intra-oral X-ray and chair-side monitor in Ahmedabad`,
    caption: "Advanced dental unit with intra-oral X-ray",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: imgOperatory.url,
    alt: `Bright, modern dental operatory with natural light at Dr. Varun's Dental Clinic, Odhav Ahmedabad`,
    caption: "Bright, modern dental operatory",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: imgTeam.url,
    alt: `The full Dr. Varun's Dental Clinic team celebrating together in Ahmedabad`,
    caption: "Our full clinical team",
    span: "lg:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    src: imgRadiography.url,
    alt: `Digital radiography and precision dental instrumentation used at Dr. Varun's Dental Clinic, Ahmedabad`,
    caption: "Digital radiography and precision instruments",
    span: "lg:col-span-5",
    aspect: "aspect-[16/10]",
  },
];

const IMAGE_GALLERY_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `Clinic Gallery — ${CLINIC.name}`,
  description: DESC,
  url: `${SITE}/gallery`,
  about: {
    "@type": "Dentist",
    name: CLINIC.name,
    telephone: CLINIC.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CLINIC.address.street}, ${CLINIC.address.locality}`,
      addressLocality: CLINIC.address.region.split(",")[0].trim(),
      addressRegion: "Gujarat",
      postalCode: CLINIC.address.postalCode,
      addressCountry: CLINIC.address.country,
    },
  },
  image: PHOTOS.map((p) => ({
    "@type": "ImageObject",
    contentUrl: p.src.startsWith("http") ? p.src : `${SITE}${p.src}`,
    url: p.src.startsWith("http") ? p.src : `${SITE}${p.src}`,
    caption: p.caption,
    description: p.alt,
  })),
};

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/gallery` },
      { property: "og:image", content: `${SITE}${imgInterior.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}${imgInterior.url}` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/gallery` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(IMAGE_GALLERY_JSONLD),
      },
    ],
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
                title={p.caption}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${p.aspect}`}
              />
              <figcaption className="sr-only">{p.caption}</figcaption>
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
