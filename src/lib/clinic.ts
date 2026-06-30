export const CLINIC = {
  name: "Dr. Varun's Dental Clinic",
  shortName: "Dr. Varun's",
  tagline: "Exceptional Care for a Healthier Smile",
  phone: "095580 44955",
  phoneHref: "tel:09558044955",
  whatsapp: "https://wa.link/4dq74s",
  email: "appointments@drvarundental.com",
  rating: "5.0",
  reviewCount: 199,
  address: {
    street: "Cross Road, 8-9/A, Jayraj Complex, Above HDFC Bank",
    locality: "Soni Ni Chal, Nr. Odhav Rd",
    region: "Ahmedabad, Gujarat",
    postalCode: "382415",
    country: "IN",
  },
  hours: [
    { day: "Monday – Saturday", time: "10:30 AM – 8:30 PM" },
    { day: "Sunday", time: "10:30 AM – 1:30 PM" },
  ],
  social: {
    instagram: "https://instagram.com/drvarundentalclinic",
    facebook: "https://facebook.com/drvarundentalclinic",
  },
  geo: { lat: 23.0345, lng: 72.6663 },
  mapEmbed:
    "https://www.google.com/maps?q=Dr.+Varun's+Dental+Clinic+Odhav+Ahmedabad&output=embed",
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  blurb: string;
  description: string;
  highlights: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "root-canal-treatment",
    number: "01",
    title: "Root Canal Treatment",
    shortTitle: "Root Canal",
    blurb: "Painless endodontic therapy using micro-instrumentation.",
    description:
      "Single-sitting root canal treatment using rotary endodontics and apex locators. We save your natural tooth with precision and zero discomfort.",
    highlights: [
      "Single-sitting RCT",
      "Rotary endodontic instruments",
      "Tooth-coloured post-treatment crowns",
      "Most patients return to work the same day",
    ],
  },
  {
    slug: "clear-aligners",
    number: "02",
    title: "Clear Aligners & Braces",
    shortTitle: "Clear Aligners",
    blurb: "Invisibly straighten your teeth with custom 3D aligners.",
    description:
      "Discreet orthodontics with custom-printed clear aligners, plus modern ceramic and metal braces. We plan every smile in 3D before treatment begins.",
    highlights: [
      "3D digital smile preview",
      "Custom-fit removable aligners",
      "Ceramic & metal brace options",
      "Suitable for teens and adults",
    ],
  },
  {
    slug: "dental-implants",
    number: "03",
    title: "Dental Implants",
    shortTitle: "Dental Implants",
    blurb: "Permanent, natural-looking replacement for missing teeth.",
    description:
      "Single-tooth, multiple, and full-arch implant solutions using internationally certified implant systems. Restore bite, speech, and confidence for life.",
    highlights: [
      "Single & full-mouth implants",
      "Globally certified implant brands",
      "Painless surgical protocol",
      "Lifetime functional restoration",
    ],
  },
  {
    slug: "cosmetic-veneers",
    number: "04",
    title: "Cosmetic Veneers",
    shortTitle: "Cosmetic Veneers",
    blurb: "Hollywood smiles designed with precision porcelain.",
    description:
      "Custom porcelain and composite veneers to correct chips, gaps, stains and alignment — designed shade-by-shade to look natural on you.",
    highlights: [
      "Digital smile design",
      "Minimal tooth preparation",
      "Stain-resistant porcelain",
      "Results in 2–3 visits",
    ],
  },
  {
    slug: "pediatric-dental-care",
    number: "05",
    title: "Pediatric Dental Care",
    shortTitle: "Pediatric Care",
    blurb: "Gentle dentistry for the youngest members of your family.",
    description:
      "Child-friendly preventive and restorative care in a calm, reassuring environment. Sealants, fluoride, fillings and early-orthodontic guidance.",
    highlights: [
      "Friendly, anxiety-free visits",
      "Preventive sealants & fluoride",
      "Early orthodontic screening",
      "Parents stay alongside kids",
    ],
  },
  {
    slug: "oral-surgery",
    number: "06",
    title: "Tooth Extraction & Oral Surgery",
    shortTitle: "Oral Surgery",
    blurb: "Safe and painless extractions by expert surgeons.",
    description:
      "From simple extractions to surgical removal of impacted wisdom teeth, performed with modern anesthesia protocols and rapid-healing techniques.",
    highlights: [
      "Wisdom-tooth surgery",
      "Atraumatic extractions",
      "Bone preservation for implants",
      "Same-day discharge",
    ],
  },
  {
    slug: "bridges-prosthodontics",
    number: "07",
    title: "Bridges & Prosthodontics",
    shortTitle: "Bridges",
    blurb: "Restoring function and aesthetics with durable bridges.",
    description:
      "Fixed bridges, crowns and full-mouth rehabilitation using zirconia and high-grade ceramics for natural translucency and decade-plus longevity.",
    highlights: [
      "Zirconia & E.max crowns",
      "Fixed & implant-supported bridges",
      "Full-mouth rehabilitation",
      "Natural translucent finish",
    ],
  },
  {
    slug: "fillings-sealants",
    number: "08",
    title: "Fillings & Sealants",
    shortTitle: "Conservative",
    blurb: "High-quality tooth-coloured fillings and sealants.",
    description:
      "Composite fillings matched precisely to your tooth shade and protective sealants for long-term cavity prevention — conservative dentistry at its best.",
    highlights: [
      "Mercury-free composite fillings",
      "Shade-matched aesthetics",
      "Protective sealants",
      "Single-visit treatment",
    ],
  },
];

export const FAQS = [
  {
    q: "Is treatment at Dr. Varun's Dental Clinic painless?",
    a: "Yes. We use modern anesthetic techniques, rotary instrumentation and a calm chair-side approach so that the vast majority of procedures — including root canals — are completely painless.",
  },
  {
    q: "Are you open on Sundays?",
    a: "Yes, we are now open on Sundays from 10:30 AM to 1:30 PM to fit your weekly schedule.",
  },
  {
    q: "Do you offer same-day appointments?",
    a: "We hold a few same-day slots every day. Call 095580 44955 or message us on WhatsApp for the next available time.",
  },
  {
    q: "Where is the clinic located?",
    a: "We are at Jayraj Complex, Above HDFC Bank, Cross Road, Nr. Odhav Rd, Soni Ni Chal, Ahmedabad 382415 — easy to reach by car or auto.",
  },
  {
    q: "How experienced is Dr. Varun?",
    a: "Dr. Varun brings over 20 years of clinical experience across endodontics, implantology, orthodontics and cosmetic dentistry, with thousands of successful treatments in Ahmedabad.",
  },
  {
    q: "How do I book an appointment?",
    a: "Tap any 'Book Appointment' button to message us on WhatsApp, or call 095580 44955. We confirm your slot within minutes.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rahul S.",
    location: "Ahmedabad",
    quote:
      "The most painless RCT experience I’ve ever had. Dr. Varun and his staff are incredibly gentle and the clinic is spotless.",
  },
  {
    name: "Priya P.",
    location: "Odhav",
    quote:
      "I highly recommend this clinic for clear aligners. Very modern equipment, friendly service, and my smile transformation has been amazing.",
  },
  {
    name: "Meera D.",
    location: "Naroda",
    quote:
      "Excellent pediatric care. My daughter was scared but Dr. Varun was so gentle with her. The staff is genuinely helpful and friendly.",
  },
];
