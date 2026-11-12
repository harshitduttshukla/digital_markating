/**
 * Central brand + contact configuration.
 * Replace every placeholder value here before going live — nothing else in the
 * codebase hard-codes brand name, contact details or social links.
 */
export const siteConfig = {
  name: "Tesoap Lab",
  legalName: "Tesoap Lab Digital", // TODO: replace with registered business name
  tagline: "Your Growth Partner for the Digital World.",
  coreMessage:
    "We don't just generate traffic. We turn digital visibility into measurable business growth.",
  description:
    "Tesoap Lab is a digital growth agency helping ambitious Indian businesses grow through strategic SEO, Google Ads, performance marketing and conversion optimisation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tesoaplab.example",
  locale: "en_IN",
  contact: {
    email: "hello@tesoaplab.example", // placeholder
    phoneDisplay: "+91 00000 00000", // placeholder
    phoneE164: "+910000000000", // placeholder
    whatsappNumber: "910000000000", // digits only, with country code — placeholder
    whatsappMessage: "Hi Tesoap Lab, I'd like to discuss a growth audit for my business.",
    city: "India", // add a full address only once a real office exists
    hours: "Mon – Sat, 10:00 – 19:00 IST",
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
  ],
  /** Verified certifications only. Leave empty until credentials are confirmed. */
  certifications: [] as { name: string; issuer: string; verifyUrl?: string }[],
  /** Real client logos (path to /public file). Empty → placeholders are shown. */
  clientLogos: [] as { name: string; src: string }[],
} as const;

export type SiteConfig = typeof siteConfig;

export const whatsappLink = () =>
  `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage,
  )}`;
