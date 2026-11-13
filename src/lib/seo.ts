import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
}

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

/** Builds per-route metadata with canonical, Open Graph and Twitter tags. */
export function buildMetadata({ title, description, path, type = "website", publishedTime }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(`/og?title=${encodeURIComponent(title)}`);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  };
}

/* ---------- Structured data (only facts we actually know) ---------- */

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  sameAs: siteConfig.social.map((s) => s.href),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const serviceSchema = (s: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  url: absoluteUrl(s.path),
  areaServed: { "@type": "Country", name: "India" },
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
});

/** Service offered to a specific city (city landing pages). */
export const localServiceSchema = (s: { name: string; description: string; path: string; city: string; country: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  serviceType: s.name,
  description: s.description,
  url: absoluteUrl(s.path),
  areaServed: { "@type": "City", name: s.city, containedInPlace: { "@type": "Country", name: s.country } },
  provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
});

export const faqSchema =(faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const articleSchema = (a: { title: string; description: string; path: string; date: string; author: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.title,
  description: a.description,
  datePublished: a.date,
  author: { "@type": "Organization", name: a.author },
  publisher: { "@type": "Organization", name: siteConfig.name },
  mainEntityOfPage: absoluteUrl(a.path),
});
