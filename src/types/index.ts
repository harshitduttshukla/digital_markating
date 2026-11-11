import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ServiceSlug =
  | "seo"
  | "google-ads"
  | "performance-marketing"
  | "local-seo"
  | "content-marketing"
  | "conversion-optimization";

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  capabilities: string[];
  heroHeadline: string;
  overview: string[];
  problems: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  benefits: string[];
  deliverables: string[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  /** true until real, client-approved case studies replace demo content */
  isDemo: boolean;
  summary: string;
  challenge: string;
  strategy: string;
  services: string[];
  metrics: CaseStudyMetric[];
  art: ArtVariant;
}

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  focus: string[];
  art: ArtVariant;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  photo?: string;
  /** true for placeholder copy that must not be presented as a real review */
  isSample: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingMinutes: number;
  author: string;
  art: ArtVariant;
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
}

export type ArtVariant = "orbit" | "bars" | "waves" | "grid" | "rings" | "steps";
