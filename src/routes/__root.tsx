import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCTAs } from "@/components/site/StickyCTAs";
import { CLINIC } from "@/lib/clinic";

const SITE_NAME = CLINIC.name;
const DEFAULT_TITLE = `${CLINIC.name} | Painless Modern Dentistry in Ahmedabad`;
const DEFAULT_DESC = `${CLINIC.tagline} — state-of-the-art, painless dental care with 20+ years of expertise in Ahmedabad. 5.0 rating from 199 Google reviews.`;

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  image: "/og-clinic.jpg",
  telephone: CLINIC.phone,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINIC.address.street,
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: CLINIC.address.postalCode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLINIC.geo.lat,
    longitude: CLINIC.geo.lng,
  },
  url: "/",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:30",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:30",
      closes: "13:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: CLINIC.rating,
    reviewCount: CLINIC.reviewCount,
  },
  sameAs: [CLINIC.social.instagram, CLINIC.social.facebook],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-foreground"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:bg-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESC },
      { name: "author", content: SITE_NAME },
      { name: "theme-color", content: "#0d9488" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESC },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ahmedabad" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "A premium dental clinic website for Dr. Varun's Dental Clinic, designed for trust and bookings." },
      { property: "og:description", content: "A premium dental clinic website for Dr. Varun's Dental Clinic, designed for trust and bookings." },
      { name: "twitter:description", content: "A premium dental clinic website for Dr. Varun's Dental Clinic, designed for trust and bookings." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a309bea6-a092-42ce-9811-50419fd6a4af/id-preview-c0b580e8--42604363-a946-430b-81a6-cc1f88f88295.lovable.app-1782795095142.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a309bea6-a092-42ce-9811-50419fd6a4af/id-preview-c0b580e8--42604363-a946-430b-81a6-cc1f88f88295.lovable.app-1782795095142.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/__l5e/assets-v1/fd4a197f-8dd8-421b-b5aa-9180b474bf90/dr-varun-logo.png" },
      { rel: "apple-touch-icon", href: "/__l5e/assets-v1/fd4a197f-8dd8-421b-b5aa-9180b474bf90/dr-varun-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </main>
        <Footer />
        <StickyCTAs />
      </div>
    </QueryClientProvider>
  );
}
