import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { isLandingService, landingServices } from "@/data/pages";
import { arabicPath, dubaiArabic } from "@/data/pages/dubai-ar";
import { DubaiArabicPage } from "@/components/landing-pages/arabic/DubaiArabicPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata, faqSchema, localServiceSchema } from "@/lib/seo";

// Brand fonts (Space Grotesk / Inter) have no Arabic glyphs, so Arabic pages use IBM Plex Sans Arabic.
const arabicFont = IBM_Plex_Sans_Arabic({ subsets: ["arabic"], weight: ["300", "400", "500", "600", "700"], variable: "--font-plex-arabic", display: "swap" });

type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return landingServices.map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  if (!isLandingService(service)) return {};
  const c = dubaiArabic[service];
  const path = arabicPath(service);
  const en = `/dubai/${service}`;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path,
    locale: "ar_AE",
    languages: { en, ar: path, "x-default": en },
  });
}

export default async function ArabicDubaiPage({ params }: Props) {
  const { service } = await params;
  if (!isLandingService(service)) notFound();
  const c = dubaiArabic[service];
  return (
    <div className={arabicFont.variable}>
      <DubaiArabicPage service={service} c={c} />
      <JsonLd
        data={[
          localServiceSchema({ name: c.label, description: c.metaDescription, path: arabicPath(service), city: "دبي", country: "الإمارات العربية المتحدة", inLanguage: "ar" }),
          faqSchema(c.faqs),
        ]}
      />
    </div>
  );
}
