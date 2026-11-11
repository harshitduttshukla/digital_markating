import Link from "next/link";
import { AlertTriangle, Check, ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

/** Body sections for an individual service page. */
export function ServiceDetail({ service }: { service: Service }) {
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  return (
    <>
      {/* Overview */}
      <section className="section-y bg-paper text-text-dark" aria-labelledby="overview-heading">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading tone="light" eyebrow="Overview" title={<span id="overview-heading">What {service.shortTitle} looks like with us.</span>} />
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-[#3c4155] lg:pt-12">
            {service.overview.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      {/* Problems */}
      <section className="section-y" aria-labelledby="problems-heading">
        <div className="container-x">
          <SectionHeading eyebrow="Problems we solve" title={<span id="problems-heading">Sound familiar?</span>} />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2">
            {service.problems.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08} className="bg-ink p-7 sm:p-9">
                <AlertTriangle aria-hidden className="size-5 text-amber-300" />
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-y bg-ink-2" aria-labelledby="approach-heading">
        <div className="container-x">
          <SectionHeading eyebrow="Our approach" title={<span id="approach-heading">How we tackle it.</span>} />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <li className="relative h-full rounded-[var(--radius-card)] border border-line bg-ink p-7">
                  <span className="font-mono text-4xl text-violet-soft/60">0{i + 1}</span>
                  <h3 className="mt-6 text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{a.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits + Deliverables */}
      <section className="section-y" aria-label="Benefits and deliverables">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[var(--radius-card)] bg-gradient-to-br from-violet to-[#5a3fe0] p-8 sm:p-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">Benefits</h2>
            <ul className="mt-8 space-y-4">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-lg">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-lime text-ink"><Check aria-hidden className="size-3.5" /></span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[var(--radius-card)] border border-line bg-ink-2 p-8 sm:p-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">What you get</h2>
            <ul className="mt-8 divide-y divide-line">
              {service.deliverables.map((d, i) => (
                <li key={d} className="flex items-center gap-4 py-3.5">
                  <span className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-white/90">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-y bg-paper text-text-dark" aria-labelledby="faq-heading">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading tone="light" eyebrow="FAQs" title={<span id="faq-heading">Questions, answered.</span>} description={<>Still unsure? <Link href="/contact" className="font-medium text-violet underline-offset-4 hover:underline">Ask us directly</Link>.</>} />
          <FAQAccordion faqs={service.faqs} tone="light" />
        </div>
      </section>

      {/* Related */}
      <section className="pt-20 sm:pt-24" aria-labelledby="related-heading">
        <div className="container-x">
          <h2 id="related-heading" className="text-2xl font-semibold sm:text-3xl">Pairs well with</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}`} className="group flex items-center justify-between rounded-2xl border border-line bg-ink-2 p-5 transition-colors hover:border-violet/50">
                  <span className="flex items-center gap-3">
                    <r.icon aria-hidden className="size-5 text-lime" />
                    {r.title}
                  </span>
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
