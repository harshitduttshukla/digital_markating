import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogSection } from "@/components/sections/BlogSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "SEO, Google Ads & Performance Marketing Agency in India",
    description: siteConfig.description,
    path: "/",
  }),
  title: { absolute: `${siteConfig.name} — SEO, Google Ads & Performance Marketing Agency in India` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUs />
      <CaseStudies />
      <IndustriesSection />
      <ProcessSection />
      <Testimonials />
      <BlogSection />
      <FinalCTA />
    </>
  );
}
