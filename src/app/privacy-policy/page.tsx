import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({ title: "Privacy Policy", description: `How ${siteConfig.name} collects, uses, stores and protects personal data shared through our website and contact forms, and the rights you have over it.`, path: "/privacy-policy" });

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      sections={[
        { heading: "Information we collect", body: "When you submit an enquiry we collect the details you provide: your name, email, phone number, company, website, service interest, budget range and message. We may also collect basic technical data such as IP address and browser type to prevent spam." },
        { heading: "How we use it", body: "We use your information only to respond to your enquiry, provide requested services and improve our website. We do not sell your personal data." },
        { heading: "Sharing", body: "We may share data with service providers who help us operate (for example CRM, email or hosting providers), under appropriate confidentiality obligations." },
        { heading: "Your rights", body: `You may request access, correction or deletion of your personal data in line with the Digital Personal Data Protection Act, 2023. Contact us at ${siteConfig.contact.email}.` },
        { heading: "Cookies & analytics", body: "If analytics or advertising cookies are enabled on this site, this section must describe them and how visitors can control them." },
      ]}
    />
  );
}
