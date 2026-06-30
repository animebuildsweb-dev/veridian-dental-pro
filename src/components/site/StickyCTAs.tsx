import { CLINIC } from "@/lib/clinic";
import { MessageCircle, Phone } from "lucide-react";

export function StickyCTAs() {
  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={CLINIC.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="Book via WhatsApp"
        className="fixed bottom-8 right-8 z-[60] hidden items-center gap-2 rounded-full px-5 py-4 text-sm font-semibold text-white shadow-2xl transition-transform hover:-translate-y-0.5 active:scale-95 md:flex"
        style={{ backgroundColor: "var(--whatsapp)" }}
      >
        <MessageCircle className="size-4" />
        WhatsApp Booking
      </a>

      {/* Mobile bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
        <a
          href={CLINIC.phoneHref}
          className="flex items-center justify-center gap-2 rounded-xl bg-foreground py-4 text-sm font-bold uppercase tracking-wide text-background"
        >
          <Phone className="size-4" /> Call Now
        </a>
        <a
          href={CLINIC.whatsapp}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 rounded-xl bg-accent py-4 text-sm font-bold uppercase tracking-wide text-accent-foreground"
        >
          <MessageCircle className="size-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
