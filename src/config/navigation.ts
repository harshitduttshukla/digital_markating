import type { NavLink } from "@/types";
import { services } from "@/data/services";

export const serviceLinks: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
  description: s.tagline,
}));

export const mainNav: (NavLink & { children?: NavLink[] })[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", children: serviceLinks },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/blog" },
];

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];
