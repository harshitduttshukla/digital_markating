import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({ title: "Terms & Conditions", description: `The terms and conditions governing use of the ${siteConfig.name} website, our content and our digital marketing services, including liability and IP.`, path: "/terms" });

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms"
      sections={[
        { heading: "Use of this website", body: `By using this website you agree to these terms. Content is provided for general information and does not constitute professional advice.` },
        { heading: "No guarantees", body: "Search rankings and advertising performance depend on factors outside any agency's control. Examples and demonstration content on this site are illustrative and are not promises of specific results." },
        { heading: "Intellectual property", body: `All content, design and code on this site belong to ${siteConfig.legalName} unless stated otherwise.` },
        { heading: "Service engagements", body: "Client engagements are governed by a separate written agreement, which takes precedence over these website terms." },
        { heading: "Governing law", body: "These terms are governed by the laws of India. Specify the jurisdiction once business registration details are confirmed." },
      ]}
    />
  );
}
