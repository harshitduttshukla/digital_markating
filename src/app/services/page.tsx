import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Services",
  description: "SEO, Google Ads, performance marketing, local SEO, content marketing and CRO — integrated digital marketing services for growing businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Services"
        title={<>Six disciplines. <span className="text-gradient">One growth plan.</span></>}
        description="Pick a single service or combine several. Either way, every channel is planned together and measured against the same business outcome."
      />
      <section className="pb-8" aria-label="Service list">
        <div className="container-x">
          <ul className="border-t border-line">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={0.04 * i}>
                <li className="group relative border-b border-line">
                  <div className="grid gap-6 py-10 transition-colors lg:grid-cols-12 lg:items-center">
                    <span className="font-mono text-sm text-muted lg:col-span-1">0{i + 1}</span>
                    <div className="flex items-center gap-4 lg:col-span-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-line text-lime transition-colors group-hover:bg-lime group-hover:text-ink">
                        <s.icon aria-hidden className="size-5" />
                      </span>
                      <h2 className="text-2xl font-semibold sm:text-3xl">
                        <Link href={`/services/${s.slug}`} className="after:absolute after:inset-0">{s.title}</Link>
                      </h2>
                    </div>
                    <p className="text-muted lg:col-span-4">{s.description}</p>
                    <div className="flex items-center justify-between gap-4 lg:col-span-3 lg:justify-end">
                      <span className="text-sm text-white/60 lg:hidden">{s.capabilities.slice(0, 3).join(" · ")}</span>
                      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                        <ArrowUpRight aria-hidden className="size-5" />
                      </span>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <FinalCTA title="Not sure where to start?" description="Most businesses don't need every service at once. A free growth audit shows which channel will move the needle first." />
    </>
  );
}
