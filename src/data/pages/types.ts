import type { FAQ } from "@/types";

export const cities = ["mumbai", "bangalore", "dubai"] as const;
export type CityKey = (typeof cities)[number];

export const landingServices = ["seo", "digital-marketing-agency", "social-media-marketing", "email-marketing"] as const;
export type LandingServiceKey = (typeof landingServices)[number];

export const cityNames: Record<CityKey, string> = {
  mumbai: "Mumbai",
  bangalore: "Bangalore",
  dubai: "Dubai",
};

export const cityCountry: Record<CityKey, string> = {
  mumbai: "India",
  bangalore: "India",
  dubai: "United Arab Emirates",
};

export const serviceNames: Record<LandingServiceKey, string> = {
  seo: "SEO",
  "digital-marketing-agency": "Digital Marketing",
  "social-media-marketing": "Social Media Marketing",
  "email-marketing": "Email Marketing",
};

/** The site-wide service page each landing page links back to (internal linking). */
export const coreServicePath: Record<LandingServiceKey, { label: string; href: string }> = {
  seo: { label: "Search Engine Optimization", href: "/services/seo" },
  "digital-marketing-agency": { label: "Performance Marketing", href: "/services/performance-marketing" },
  "social-media-marketing": { label: "Content Marketing", href: "/services/content-marketing" },
  "email-marketing": { label: "Conversion Optimisation", href: "/services/conversion-optimization" },
};

/** Fields every landing page must provide. Each page adds its own bespoke content on top. */
export interface LandingBase {
  metaTitle: string;
  metaDescription: string;
  /** Short label used in breadcrumbs and internal links, e.g. "SEO in Mumbai" */
  label: string;
  faqs: FAQ[];
}

export const landingPath = (city: CityKey, service: LandingServiceKey) => `/${city}/${service}`;
