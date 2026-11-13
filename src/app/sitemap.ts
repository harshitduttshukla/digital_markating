import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/data/services";
import { posts } from "@/data/blog";
import { allLandingRoutes, landingServices } from "@/data/pages";
import { arabicPath } from "@/data/pages/dubai-ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["/", "/about", "/services", "/case-studies", "/industries", "/blog", "/contact", "/privacy-policy", "/terms"];
  return [
    ...staticRoutes.map((p) => ({
      url: absoluteUrl(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.7,
    })),
    ...services.map((s) => ({ url: absoluteUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...allLandingRoutes().map((r) => ({
      url: absoluteUrl(r.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      ...(r.city === "dubai" ? { alternates: { languages: { en: absoluteUrl(r.path), ar: absoluteUrl(arabicPath(r.service)) } } } : {}),
    })),
    ...landingServices.map((s) => ({
      url: absoluteUrl(arabicPath(s)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: { en: absoluteUrl(`/dubai/${s}`), ar: absoluteUrl(arabicPath(s)) } },
    })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
