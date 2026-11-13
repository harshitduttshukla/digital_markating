import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cities, cityCountry, cityNames, isCity, landingPages, landingPath, landingServices, serviceNames } from "@/data/pages";
import { cityHubs } from "@/data/pages/hubs";
import { arabicPath } from "@/data/pages/dubai-ar";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  if (!isCity(city)) return {};
  const h = cityHubs[city];
  return buildMetadata({ title: h.metaTitle, description: h.metaDescription, path: `/${city}` });
}

/** City hub: parent page for a city's four service landing pages. */
export default async function CityHubPage({ params }: Props) {
  const { city } = await params;
  if (!isCity(city)) notFound();
  const h = cityHubs[city];
  const others = cities.filter((c) => c !== city);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg noise-mask absolute inset-0" />
          <div className="animate-drift absolute -left-40 -top-40 size-[640px] rounded-full bg-violet/25 blur-[120px]" />
        </div>
        <div className="container-x relative">
          <Breadcrumbs items={[{ name: cityNames[city], path: `/${city}` }]} />
          <Reveal className="mt-10 max-w-4xl">
            <h1 className="text-[2.6rem] font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
              <span className="mb-5 block font-mono text-xs font-medium uppercase leading-normal tracking-[0.18em] text-lime">{h.kicker}</span>
              {h.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{h.lede}</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label={`Industries we serve in ${cityNames[city]}`}>
              {h.sectors.map((s) => (
                <li key={s} className="rounded-full border border-line bg-white/[0.04] px-4 py-1.5 text-sm text-white/80">{s}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="hub-services">
        <div className="container-x">
          <h2 id="hub-services" className="text-3xl font-semibold sm:text-4xl">Our services in {cityNames[city]}</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {landingServices.map((s, i) => (
              <Reveal as="li" key={s} delay={(i % 2) * 0.06}>
                <Link href={landingPath(city, s)} className="group flex h-full flex-col justify-between gap-10 rounded-[var(--radius-card)] border border-line bg-ink-2 p-7 transition-colors hover:border-lime/50 sm:p-9">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-2xl font-semibold sm:text-3xl">{serviceNames[s]} in {cityNames[city]}</h3>
                    <ArrowUpRight aria-hidden className="size-6 shrink-0 text-lime transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="text-muted">{h.blurbs[s]}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
          {city === "dubai" && (
            <p className="mt-6 text-muted">
              Also in Arabic:{" "}
              {landingServices.map((s, i) => (
                <span key={s}>
                  {i > 0 && " · "}
                  <Link href={arabicPath(s)} lang="ar" hrefLang="ar" className="text-white/80 underline-offset-4 hover:text-lime hover:underline">{serviceNames[s]}</Link>
                </span>
              ))}
            </p>
          )}
          <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted">
              Also serving{" "}
              {others.map((c, i) => (
                <span key={c}>
                  {i > 0 && " and "}
                  <Link href={`/${c}`} className="text-white/85 underline-offset-4 hover:text-lime hover:underline">{cityNames[c]}</Link>
                </span>
              ))}
              .
            </p>
            <ButtonLink href={`/contact?intent=audit&city=${city}`} arrow>Get a free growth audit</ButtonLink>
          </div>
        </div>
      </section>

      <FinalCTA title={`Grow your business in ${cityNames[city]}.`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: h.metaTitle,
          description: h.metaDescription,
          url: absoluteUrl(`/${city}`),
          about: { "@type": "City", name: cityNames[city], containedInPlace: { "@type": "Country", name: cityCountry[city] } },
          publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: landingServices.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: landingPages[city][s].label,
              url: absoluteUrl(landingPath(city, s)),
            })),
          },
        }}
      />
    </>
  );
}
