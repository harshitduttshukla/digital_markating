/**
 * Central brand + contact configuration.
 * Replace every placeholder value here before going live — nothing else in the
 * codebase hard-codes brand name, contact details or social links.
 */
export const siteConfig = {
  name: "Tesoap Lab",
  legalName: "Tesoap Lab Pvt Ltd",
  tagline: "Your Growth Partner for the Digital World.",
  coreMessage:
    "We don't just generate traffic. We turn digital visibility into measurable business growth.",
  description:
    "Tesoap Lab is a digital growth agency helping ambitious Indian businesses grow through strategic SEO, Google Ads, performance marketing and conversion optimisation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://digitalmarkating.vercel.app",
  locale: "en_IN",
  contact: {
    email: "reach@tesoap.com",
    phoneDisplay: "+91 730667586", // TODO: verify — Indian mobiles have 10 digits after +91
    phoneE164: "+91730667586",
    whatsappNumber: "91730667586", // digits only, with country code
    whatsappMessage: "Hi Tesoap Lab, I'd like to discuss a growth audit for my business.",
    city: "Mumbai, India", // street address intentionally not published yet
    hours: "Mon – Sat, 10:00 – 19:00 IST",
  },
  /**
   * Real profile URLs only — e.g. { label: "LinkedIn", href: "https://www.linkedin.com/company/tesoap-lab" }.
   * Supported labels: LinkedIn, Instagram, X, YouTube. Empty → icons and schema sameAs are hidden.
   */
  social: [] as { label: string; href: string }[],
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
