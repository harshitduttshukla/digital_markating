import { ShieldCheck, Workflow } from "lucide-react";
import { bangaloreEmail as c } from "@/data/pages/bangalore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { NodeCanvas, JourneyBuilder, ScrollStory } from "./BangaloreEmail.client";

const href = contactHref("bangalore", "email-marketing");

const metrics = [
  { k: "Activation rate", d: "Share of signups that reach the key product action.", w: 64 },
  { k: "Trial → paid", d: "Conversions attributable to lifecycle touchpoints.", w: 38 },
  { k: "Time to value", d: "Days from signup to first meaningful outcome.", w: 52 },
  { k: "Expansion revenue", d: "Upgrades and seats influenced by email.", w: 28 },
];

/**
 * PAGE 8 — Bangalore Email Marketing
 * Direction: automation + workflow — node graphs, connectors, step-by-step storytelling.
 * Order: Hero (flowchart canvas) → Journey builder (interactive) → Scroll story (how we build)
 *        → Stack & deliverability → Lifecycle analytics cards → FAQ → End-node CTA
 */
export function BangaloreEmailMarketingPage() {
  return (
    <>
      {/* HERO — headline over a full-width flow canvas */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-70" />
          <div className="absolute bottom-0 left-1/3 size-[520px] rounded-full bg-violet/25 blur-[140px]" />
        </div>
        <div className="container-x relative">
          <LandingCrumbs city="bangalore" service="email-marketing" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <Reveal>
              <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.03] sm:text-6xl lg:text-[4.2rem]">
                <H1Kicker className="uppercase text-lime">Email marketing & automation in Bangalore</H1Kicker>{c.hero.title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-muted">{c.hero.lede}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow>Map my lifecycle</ButtonLink>
                <ButtonLink href="#bem-journeys" size="lg" variant="outline">Explore journeys</ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="relative mt-14 rounded-[32px] border border-line bg-ink-2/60 p-4 backdrop-blur sm:p-8">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] text-muted">
              <span className="flex items-center gap-2"><Workflow aria-hidden className="size-3.5 text-lime" /> onboarding.flow</span>
              <span>example workflow</span>
            </div>
            <NodeCanvas />
          </div>
        </div>
      </section>

      {/* JOURNEYS */}
      <section id="bem-journeys" className="section-y" aria-labelledby="bem-j">
        <div className="container-x">
          <SectionHeading eyebrow="Automation journeys" title={<span id="bem-j">Four journeys most SaaS products are missing.</span>} description="Select a journey to see a typical structure. Timings and branches are tuned to your product data." />
          <Reveal className="mt-12"><JourneyBuilder journeys={c.journeys} /></Reveal>
        </div>
      </section>

      {/* SCROLL STORY */}
      <section className="section-y bg-ink-2" aria-labelledby="bem-st">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>How we build it</Eyebrow>
            <h2 id="bem-st" className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">From product events to emails that feel timely.</h2>
          </div>
          <ScrollStory steps={c.story} />
        </div>
      </section>

      {/* STACK + DELIVERABILITY */}
      <section className="section-y" aria-labelledby="bem-dl">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <h2 id="bem-dl" className="text-4xl font-semibold leading-[1.05] sm:text-5xl">Wired into your stack. Trusted by inboxes.</h2>
            <p className="mt-5 text-muted">We work with the tools your product and growth teams already use, and set up authentication properly before the first send.</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Platforms we work with">
              {c.stack.map((s) => <li key={s} className="rounded-full border border-line bg-white/[0.03] px-4 py-2 font-mono text-sm text-white/80">{s}</li>)}
            </ul>
          </div>
          <dl className="grid gap-3 sm:grid-cols-2">
            {c.deliverability.map((d, i) => (
              <Reveal key={d.k} delay={i * 0.06} className="rounded-2xl border border-line bg-ink-2 p-6">
                <dt className="flex items-center gap-2 font-mono text-lg text-lime"><ShieldCheck aria-hidden className="size-5" />{d.k}</dt>
                <dd className="mt-3 text-muted">{d.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ANALYTICS CARDS */}
      <section className="section-y border-t border-line" aria-labelledby="bem-an">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Lifecycle analytics" title={<span id="bem-an">Metrics that map to the business.</span>} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.k} delay={i * 0.06} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-gradient-to-b from-ink-3 to-ink-2 p-6">
                <div className="flex h-24 items-end gap-1" aria-hidden>
                  {Array.from({ length: 10 }).map((_, b) => (
                    <span key={b} className={b === 9 ? "flex-1 rounded-sm bg-lime" : "flex-1 rounded-sm bg-violet/40"} style={{ height: `${20 + ((b * 37 + m.w) % 60) + (b === 9 ? 20 : 0)}%` }} />
                  ))}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{m.k}</h3>
                <p className="mt-1.5 text-sm text-muted">{m.d}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center font-mono text-xs text-muted">Bar shapes are decorative, not results.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ink-2" aria-labelledby="bem-faq">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="FAQ" title={<span id="bem-faq">Lifecycle email, explained.</span>} />
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* CTA — final node */}
      <section className="py-20 sm:py-28" aria-labelledby="bem-cta">
        <div className="container-x flex flex-col items-center text-center">
          <div aria-hidden className="flex flex-col items-center">
            <span className="rounded-2xl border border-line bg-ink-2 px-4 py-2 font-mono text-xs text-muted">You read this page</span>
            <span className="h-10 w-px bg-gradient-to-b from-white/20 to-lime" />
          </div>
          <Reveal className="w-full max-w-3xl rounded-[32px] border border-lime/50 bg-lime/[0.06] p-8 sm:p-14">
            <h2 id="bem-cta" className="text-4xl font-semibold leading-[1.05] sm:text-5xl">Next step: a lifecycle map for your product.</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">In one working session we map your events, gaps and the first three journeys to build.</p>
            <ButtonLink href={href} size="lg" className="mt-8" arrow>Book the session</ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
