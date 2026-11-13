import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allLandingRoutes,
  cityCountry,
  cityNames,
  isCity,
  isLandingService,
  landingPages,
  landingPath,
  serviceNames,
} from "@/data/pages";
import { arabicPath } from "@/data/pages/dubai-ar";
import { landingComponents } from "@/components/landing-pages/registry";
import { LocalLinks } from "@/components/landing-pages/shared";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata, faqSchema, localServiceSchema } from "@/lib/seo";

type Props = { params: Promise<{ city: string; service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allLandingRoutes().map(({ city, service }) => ({ city, service }));
}

async function resolve(params: Props["params"]) {
  const { city, service } = await params;
  if (!isCity(city) || !isLandingService(service)) return null;
  return { city, service, page: landingPages[city][service] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  const path = landingPath(r.city, r.service);
  const languages = r.city === "dubai" ? { en: path, ar: arabicPath(r.service), "x-default": path } : undefined;
  return buildMetadata({ title: r.page.metaTitle, description: r.page.metaDescription, path, languages });
}

export default async function CityServicePage({ params }: Props) {
  const r = await resolve(params);
  if (!r) notFound();
  const { city, service, page } = r;
  const Page = landingComponents[city][service];

  return (
    <>
      <Page />
      <LocalLinks city={city} service={service} />
      <JsonLd
        data={[
          localServiceSchema({
            name: `${serviceNames[service]} services in ${cityNames[city]}`,
            description: page.metaDescription,
            path: landingPath(city, service),
            city: cityNames[city],
            country: cityCountry[city],
          }),
          faqSchema(page.faqs),
        ]}
      />
    </>
  );
}
