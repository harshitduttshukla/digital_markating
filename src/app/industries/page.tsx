import type { Metadata } from "next";
import { Check } from "lucide-react";
import { industries } from "@/data/industries";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CoverArt } from "@/components/ui/CoverArt";
import { ButtonLink } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description: "Digital marketing strategies for e-commerce, real estate, healthcare, education, hospitality and SaaS businesses in India.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Industries", path: "/industries" }]}
        eyebrow="Industries"
        title={<>Growth strategies built around <span className="text-gradient">your industry.</span></>}
        description="Buying cycles, regulations, seasonality and margins vary by industry. Our playbooks are built around them."
      >
        <nav aria-label="Jump to industry">
          <ul className="flex flex-wrap gap-2">
            {industries.map((i) => (
              <li key={i.slug}>
                <a href={`#${i.slug}`} className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-white/80 transition-colors hover:border-lime hover:text-white">
                  <i.icon aria-hidden className="size-4 text-lime" /> {i.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>
      <section className="pb-12">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 2) * 0.08}>
              <article id={ind.slug} className="group h-full overflow-hidden rounded-[28px] border border-line bg-ink-2">
                <div className="relative aspect-[16/8] overflow-hidden">
                  <CoverArt variant={ind.art} label={`Abstract illustration for ${ind.name}`} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-5 left-5 grid size-12 place-items-center rounded-2xl bg-lime text-ink">
                    <ind.icon aria-hidden className="size-5" />
                  </span>
                </div>
                <div className="p-7 sm:p-9">
                  <h2 className="text-3xl font-semibold">{ind.name}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{ind.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {ind.focus.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-white/85">
                        <Check aria-hidden className="size-4 text-lime" /> {f}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={`/contact?industry=${ind.slug}`} variant="outline" size="sm" arrow className="mt-8">
                    Discuss your {ind.name.toLowerCase()} goals
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
