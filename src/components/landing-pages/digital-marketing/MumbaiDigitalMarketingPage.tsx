import { Briefcase, Search, Megaphone, Globe2, MousePointerClick, LineChart, LayoutGrid, ClipboardList, Unlock } from "lucide-react";
import { mumbaiDigital as c } from "@/data/pages/mumbai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { GrowthDashboard, SectorExplorer, BlueprintShowcase } from "./MumbaiDigital.client";

const href = contactHref("mumbai", "digital-marketing-agency");
const channelIcons = [Globe2, Search, Megaphone, Briefcase, MousePointerClick, LineChart];
const commitIcons = [LayoutGrid, ClipboardList, Unlock];

/**
 * PAGE 2 — Mumbai Digital Marketing Agency
 * Direction: modern growth dashboard — centred headline over a wide layered product-style dashboard.
 * Order: Hero + dashboard → Sector opportunities (interactive) → Channels → 90-day strategy band
 *        → Campaign blueprints (interactive) → Commitments → FAQ → Dashboard-panel CTA
 */
export function MumbaiDigitalMarketingPage() {
  return (
    <>
      {/* HERO — centred stack, dashboard below the fold line */}
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
          <div className="absolute left-1/2 top-[40%] h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-violet/30 blur-[160px]" />
        </div>
        <div className="container-x relative">
          <div className="flex justify-center"><LandingCrumbs city="mumbai" service="digital-marketing-agency" /></div>
          <Reveal className="mx-auto mt-10 max-w-4xl text-center">
            <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              <H1Kicker className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-1.5 tracking-normal text-white/70"><span aria-hidden className="relative flex size-2"><span className="absolute inset-0 animate-ping rounded-full bg-lime opacity-60" /><span className="relative size-2 rounded-full bg-lime" /></span>Digital marketing agency in Mumbai</H1Kicker><br />{c.hero.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">{c.hero.lede}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={href} size="lg" arrow>Get a free growth audit</ButtonLink>
              <ButtonLink href="#mdm-sectors" size="lg" variant="outline">Explore by industry</ButtonLink>
            </div>
          </Reveal>
          <div className="mt-20"><GrowthDashboard /></div>
        </div>
      </section>

      {/* OPPORTUNITIES — interactive sector explorer */}
      <section id="mdm-sectors" className="section-y border-t border-line" aria-labelledby="mdm-op">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <SectionHeading eyebrow="Business opportunities" title={<span id="mdm-op">Every Mumbai industry needs a different mix.</span>} />
            <p className="text-muted lg:pb-2">A property launch and a festive retail push should never share a media plan. Pick your sector to see where we usually start the conversation.</p>
          </div>
          <Reveal className="mt-12"><SectorExplorer sectors={c.sectors} /></Reveal>
        </div>
      </section>

      {/* CHANNELS — metric-tile grid */}
      <section className="section-y bg-ink-2" aria-labelledby="mdm-ch">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Marketing channels" title={<span id="mdm-ch">Six channels. One plan. One report.</span>} />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {c.channels.map((ch, i) => {
              const Icon = channelIcons[i];
              return (
                <Reveal key={ch.name} delay={(i % 3) * 0.06} className="group bg-ink-2 p-8 transition-colors hover:bg-ink-3">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-lime transition-colors group-hover:bg-lime group-hover:text-ink"><Icon aria-hidden className="size-5" /></span>
                    <span className="font-mono text-[11px] text-muted">CH-{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold">{ch.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{ch.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* STRATEGY — full-width lime band */}
      <section className="bg-lime py-20 text-ink sm:py-28" aria-labelledby="mdm-strat">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 id="mdm-strat" className="max-w-2xl text-4xl font-semibold leading-[1.02] sm:text-6xl">The first 90 days, in the open.</h2>
            <p className="max-w-md text-ink/70">No six-month “discovery”. Measurable progress at every checkpoint, and nothing scaled until it is proven.</p>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-4">
            {c.strategy.map((s, i) => (
              <Reveal as="li" key={s.phase} delay={i * 0.08} className="rounded-[var(--radius-card)] bg-ink p-6 text-white">
                <p className="font-mono text-xs text-lime">{s.phase}</p>
                <div className="mt-6 flex h-1.5 gap-1">{[0, 1, 2, 3].map((d) => <span key={d} className={`flex-1 rounded-full ${d <= i ? "bg-lime" : "bg-white/10"}`} />)}</div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CAMPAIGN SHOWCASE */}
      <section className="section-y" aria-labelledby="mdm-bp">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Campaign blueprints" title={<span id="mdm-bp">How a Mumbai campaign fits together.</span>} />
            <p className="max-w-sm text-sm text-muted">Sample blueprints showing how channels connect — not past client campaigns.</p>
          </div>
          <Reveal className="mt-12"><BlueprintShowcase blueprints={c.blueprints} /></Reveal>
        </div>
      </section>

      {/* COMMITMENTS (in place of testimonials — we only publish verified reviews) */}
      <section className="pb-20 sm:pb-28" aria-labelledby="mdm-commit">
        <div className="container-x">
          <h2 id="mdm-commit" className="sr-only">How we work with you</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {c.commitments.map((m, i) => {
              const Icon = commitIcons[i];
              return (
                <Reveal key={m.title} delay={i * 0.06} className="flex gap-4 rounded-[var(--radius-card)] border border-line p-6">
                  <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-violet-soft" />
                  <div><h3 className="font-semibold">{m.title}</h3><p className="mt-1 text-sm text-muted">{m.body}</p></div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ink-2" aria-labelledby="mdm-faq">
        <div className="container-x max-w-4xl">
          <SectionHeading align="center" eyebrow="FAQ" title={<span id="mdm-faq">Before you brief us.</span>} />
          <div className="mt-12"><FAQAccordion faqs={c.faqs} /></div>
        </div>
      </section>

      {/* CTA — dashboard panel */}
      <section className="py-20 sm:py-28" aria-labelledby="mdm-cta">
        <div className="container-x">
          <Reveal className="grid overflow-hidden rounded-[32px] border border-line bg-ink-2 lg:grid-cols-[1.2fr_1fr]">
            <div className="p-8 sm:p-14">
              <Eyebrow>Next step</Eyebrow>
              <h2 id="mdm-cta" className="mt-5 text-4xl font-semibold leading-[1.03] sm:text-5xl">See your own numbers on this dashboard.</h2>
              <p className="mt-5 max-w-md text-muted">We review your current channels, tracking and spend, then show you where the next lakh is best invested.</p>
              <ButtonLink href={href} size="lg" className="mt-8" arrow>Book a growth audit</ButtonLink>
            </div>
            <div aria-hidden className="relative hidden min-h-[320px] border-l border-line bg-ink-3/60 p-8 lg:block">
              <div className="grid-bg absolute inset-0 opacity-60" />
              <div className="relative grid h-full grid-cols-6 items-end gap-3">
                {[30, 42, 38, 55, 64, 82].map((h, i) => (
                  <div key={i} className={`rounded-t-xl ${i === 5 ? "bg-lime" : "bg-violet/50"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
