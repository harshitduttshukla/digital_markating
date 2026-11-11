import { ShoppingBag, Building2, HeartPulse, GraduationCap, Hotel, Cpu } from "lucide-react";
import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: ShoppingBag,
    description: "Profitable Shopping campaigns, product-led SEO and checkout CRO for D2C and marketplace brands.",
    focus: ["Shopping & Performance Max", "Category page SEO", "Checkout optimisation"],
    art: "bars",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Building2,
    description: "High-intent lead generation for developers and brokers, optimised for site visits — not form fills.",
    focus: ["Project launch campaigns", "CRM-linked tracking", "Locality SEO"],
    art: "grid",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Compliant, trust-first visibility for hospitals, clinics and diagnostic centres.",
    focus: ["Local SEO per branch", "Doctor & treatment pages", "Appointment funnels"],
    art: "rings",
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Admissions-season campaigns and evergreen SEO for institutes, ed-tech and coaching brands.",
    focus: ["Course-level campaigns", "Counselling lead quality", "Program page SEO"],
    art: "steps",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "More direct bookings and fewer OTA commissions for hotels, resorts and restaurants.",
    focus: ["Hotel & metasearch ads", "Google Business Profile", "Direct booking CRO"],
    art: "waves",
  },
  {
    slug: "saas",
    name: "SaaS & Technology",
    icon: Cpu,
    description: "Pipeline-focused SEO and paid acquisition for B2B and B2C software companies.",
    focus: ["Bottom-funnel content", "LinkedIn & Search ads", "Trial-to-paid CRO"],
    art: "orbit",
  },
];
