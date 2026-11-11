import type { CaseStudy } from "@/types";

/**
 * DEMONSTRATION CONTENT ONLY.
 * These are illustrative project scenarios showing how a case study is presented.
 * Client names are fictional and metrics are hypothetical. Replace with real,
 * client-approved case studies (and set isDemo: false) before launch.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "d2c-skincare-search-growth",
    client: "Demo Project — D2C Skincare Brand",
    industry: "E-commerce",
    isDemo: true,
    summary: "Rebuilding Shopping and Search campaigns around product margin instead of revenue.",
    challenge: "Rising acquisition costs on Meta and a Google Shopping account optimised for revenue, not profit.",
    strategy: "Segmented Shopping campaigns by margin tier, rebuilt the product feed and aligned landing pages with top search queries.",
    services: ["Google Ads", "Shopping Feed", "CRO"],
    metrics: [
      { label: "ROAS (illustrative)", value: "+—%" },
      { label: "Cost per order (illustrative)", value: "−—%" },
    ],
    art: "bars",
  },
  {
    slug: "realty-lead-quality",
    client: "Demo Project — Residential Developer",
    industry: "Real Estate",
    isDemo: true,
    summary: "Shifting optimisation from cheap leads to site-visit bookings.",
    challenge: "High lead volume from paid campaigns but very few qualified site visits.",
    strategy: "Offline conversion imports from CRM, project-specific landing pages and intent-based audience segmentation.",
    services: ["Performance Marketing", "Conversion Tracking", "Landing Pages"],
    metrics: [
      { label: "Qualified leads (illustrative)", value: "—×" },
      { label: "Cost per site visit (illustrative)", value: "−—%" },
    ],
    art: "orbit",
  },
  {
    slug: "multi-clinic-local-seo",
    client: "Demo Project — Multi-city Clinic Chain",
    industry: "Healthcare",
    isDemo: true,
    summary: "Local SEO programme across multiple clinic locations.",
    challenge: "Inconsistent listings and thin location pages across branches.",
    strategy: "Google Business Profile optimisation per branch, citation clean-up, location pages and a review request flow.",
    services: ["Local SEO", "Content", "Reviews"],
    metrics: [
      { label: "Map pack visibility (illustrative)", value: "+—%" },
      { label: "Calls from GBP (illustrative)", value: "+—%" },
    ],
    art: "rings",
  },
  {
    slug: "saas-organic-pipeline",
    client: "Demo Project — B2B SaaS Platform",
    industry: "SaaS & Technology",
    isDemo: true,
    summary: "Topic-cluster content strategy aimed at demo requests, not pageviews.",
    challenge: "Blog traffic was growing but contributed almost nothing to pipeline.",
    strategy: "Bottom-of-funnel comparison and use-case pages, technical SEO fixes and in-content CTAs tested via CRO.",
    services: ["SEO", "Content Marketing", "CRO"],
    metrics: [
      { label: "Organic demo requests (illustrative)", value: "+—%" },
      { label: "Non-brand clicks (illustrative)", value: "+—%" },
    ],
    art: "waves",
  },
];
