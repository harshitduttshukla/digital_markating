import type { CityKey, LandingServiceKey } from "./types";

/** City hub pages (/mumbai, /bangalore, /dubai): the parent of each city's four service pages. */
export interface CityHub {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  lede: string;
  sectors: string[];
  /** One line per service, written for this city */
  blurbs: Record<LandingServiceKey, string>;
}

export const cityHubs: Record<CityKey, CityHub> = {
  mumbai: {
    metaTitle: "Marketing Services in Mumbai: SEO, Social, Ads",
    metaDescription:
      "Tesoap Lab helps Mumbai brands in finance, real estate, hospitality, retail and e-commerce grow with SEO, social media, email and full-funnel digital marketing.",
    kicker: "Marketing services · Mumbai",
    title: "Digital growth for Mumbai’s busiest markets.",
    lede: "From Powai property launches to Lower Parel restaurants and Andheri advisory firms, Mumbai buyers search, scroll and compare fast. Pick the service you need, or let us plan them together.",
    sectors: ["Finance", "Real estate", "Hospitality", "Retail", "E-commerce"],
    blurbs: {
      seo: "Locality-led SEO that competes with portals on the searches that convert.",
      "digital-marketing-agency": "Search, Meta, SEO and CRO planned as one system with one report.",
      "social-media-marketing": "Reels, creators and paid social built for a two-second city.",
      "email-marketing": "Automated flows and campaigns that bring Mumbai customers back.",
    },
  },
  bangalore: {
    metaTitle: "Marketing Services in Bangalore: SEO & Social",
    metaDescription:
      "Tesoap Lab helps Bangalore SaaS, startups, IT services and B2B companies build pipeline with technical SEO, LinkedIn-led social, lifecycle email and paid media.",
    kicker: "Marketing services · Bangalore",
    title: "Pipeline-first marketing for Bangalore’s tech companies.",
    lede: "Bangalore’s startups and SaaS teams need marketing that engineers respect and finance can measure. Explore each service, built for B2B buyers and long sales cycles.",
    sectors: ["SaaS", "Startups", "IT services", "B2B", "Technology"],
    blurbs: {
      seo: "Technical SEO for JavaScript sites, docs and comparison pages.",
      "digital-marketing-agency": "Demand capture, demand creation and attribution tied to revenue.",
      "social-media-marketing": "Founder-led LinkedIn and product storytelling that drives demos.",
      "email-marketing": "Lifecycle journeys that move trial users to activation and expansion.",
    },
  },
  dubai: {
    metaTitle: "Marketing Services in Dubai: SEO, Social, Email",
    metaDescription:
      "Tesoap Lab helps Dubai real estate, hospitality, tourism, retail and professional services brands grow across the UAE, GCC and international markets.",
    kicker: "Marketing services · Dubai",
    title: "Bilingual, international growth from Dubai.",
    lede: "Residents, GCC neighbours, tourists and overseas investors all find Dubai brands differently, in English and in Arabic. Explore the services we run for each of them.",
    sectors: ["Real estate", "Hospitality", "Tourism", "Retail", "Professional services"],
    blurbs: {
      seo: "English and Arabic SEO for premium brands and international buyers.",
      "digital-marketing-agency": "Market-by-market planning across the UAE, GCC and beyond.",
      "social-media-marketing": "High-end bilingual campaigns for Instagram, TikTok and Snapchat.",
      "email-marketing": "Elegant newsletters and bilingual automated journeys.",
    },
  },
};

/** Which core /services/[slug] pages link out to which city service pages. */
export const coreToLanding: Record<string, LandingServiceKey> = {
  seo: "seo",
  "local-seo": "seo",
  "performance-marketing": "digital-marketing-agency",
  "google-ads": "digital-marketing-agency",
  "content-marketing": "social-media-marketing",
  "conversion-optimization": "email-marketing",
};
