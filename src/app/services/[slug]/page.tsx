import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceHeroVisual } from "@/components/service/ServiceHeroVisual";
import { ServiceDetail } from "@/components/service/ServiceDetail";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return buildMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const path = `/services/${service.slug}`;

  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }, { name: service.title, path }]}
        eyebrow={service.title}
        title={service.heroHeadline}
        description={service.description}
        aside={<ServiceHeroVisual service={service} />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`/contact?service=${service.slug}`} size="lg" arrow>Get a free {service.shortTitle} audit</ButtonLink>
          <ButtonLink href="#faq-heading" size="lg" variant="outline">Read FAQs</ButtonLink>
        </div>
      </PageHero>
      <ServiceDetail service={service} />
      <FinalCTA
        title={`Let's talk about your ${service.shortTitle}.`}
        description={`Share where you are today. We'll review your current setup and come back with the highest-impact ${service.shortTitle} opportunities — free.`}
        cta={`Request a ${service.shortTitle} audit`}
      />
      <JsonLd data={[serviceSchema({ name: service.title, description: service.metaDescription, path }), faqSchema(service.faqs)]} />
    </>
  );
}
