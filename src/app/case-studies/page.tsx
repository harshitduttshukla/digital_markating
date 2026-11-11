import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CoverArt } from "@/components/ui/CoverArt";
import { DemoBadge } from "@/components/ui/DemoBadge";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies",
  description: "How we approach SEO, Google Ads, performance marketing and CRO engagements — from business challenge to strategy and measurable outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const hasDemo = caseStudies.some((s) => s.isDemo);
  return (
    <>
      <PageHero
        crumbs={[{ name: "Case Studies", path: "/case-studies" }]}
        eyebrow="Case studies"
        title={<>Real strategies. <span className="text-gradient">Measurable outcomes.</span></>}
        description="Each engagement starts with a business problem, not a channel. Here's how we structure the work."
      >
        {hasDemo && (
          <p className="max-w-2xl rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] p-4 text-sm leading-relaxed text-amber-100">
            <strong className="font-semibold">Note:</strong> The projects below are <strong>demonstration scenarios</strong> that show how our case studies are structured. Client names are fictional and metrics are intentionally left blank. Verified client case studies will be published here with permission.
          </p>
        )}
      </PageHero>

      <section className="pb-12" aria-label="Case study list">
        <div className="container-x space-y-6">
          {caseStudies.map((s, i) => (
            <Reveal key={s.slug}>
              <article id={s.slug} className="grid overflow-hidden rounded-[28px] border border-line bg-ink-2 lg:grid-cols-2">
                <div className={cn("group relative min-h-[280px] overflow-hidden", i % 2 === 1 && "lg:order-2")}>
                  <CoverArt variant={s.art} label={`Illustrative artwork for ${s.industry} project`} className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-ink/80 px-3 py-1 text-xs backdrop-blur">{s.industry}</span>
                    {s.isDemo && <DemoBadge label="Demonstration project" />}
                  </div>
                </div>
                <div className="p-7 sm:p-10">
                  <p className="text-sm text-muted">{s.client}</p>
                  <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{s.summary}</h2>
                  <dl className="mt-8 space-y-5">
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-[0.16em] text-lime">Challenge</dt>
                      <dd className="mt-1.5 leading-relaxed text-white/80">{s.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-[0.16em] text-lime">Strategy</dt>
                      <dd className="mt-1.5 leading-relaxed text-white/80">{s.strategy}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-[0.16em] text-lime">Services</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {s.services.map((x) => <span key={x} className="rounded-full border border-line px-3 py-1 text-xs">{x}</span>)}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6">
                    {s.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-xs text-muted">{m.label}</p>
                        <p className="mt-1 font-mono text-3xl text-lime">{m.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA title="Could your business be the next case study?" />
    </>
  );
}
