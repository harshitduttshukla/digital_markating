import { dubaiDigital as c } from "@/data/pages/dubai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { MarketArcs, LayeredDashboard } from "./DubaiDigital.client";

const href = contactHref("dubai", "digital-marketing-agency");

/**
 * PAGE 10 — Dubai Digital Marketing Agency
 * Direction: premium international growth — cinematic full-viewport hero, global network arcs, depth.
 * Order: Cinematic hero (arcs) → Markets (interactive map + notes) → Layered dashboard
 *        → Chapters (full-width storytelling) → Services (horizontal rail) → FAQ → Cinematic CTA
 */
export function DubaiDigitalMarketingPage() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0b0d15]">
        <div aria-hidden className="absolute inset-0 opacity-90">
          <MarketArcs markets={c.markets} />
        </div>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,transparent_20%,#0b0d15_75%)]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b0d15] to-transparent" />
        <div className="container-x relative pt-28 sm:pt-32">
          <LandingCrumbs city="dubai" service="digital-marketing-agency" />
        </div>
        <div className="container-x relative mt-auto pb-16 sm:pb-24">
          <Reveal>
            <h1 className="mt-6 max-w-5xl text-[3rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:text-[7rem]">
              <H1Kicker className="uppercase tracking-[0.3em] text-lime">Digital marketing agency in Dubai → the world</H1Kicker>
              Grow from Dubai.<br /><span className="text-white/45">Sell to the world.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">{c.hero.lede}</p>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href={href} size="lg" arrow>Plan my markets</ButtonLink>
              <ButtonLink href="#dd-markets" size="lg" variant="outline">See the map</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARKETS — interactive map */}
      <section id="dd-markets" className="section-y" aria-labelledby="dd-mk">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Your audiences</Eyebrow>
              <h2 id="dd-mk" className="mt-4 text-4xl font-semibold leading-[1.03] sm:text-6xl">One city. Many markets.</h2>
            </div>
            <p className="text-muted">Each market searches, scrolls and buys differently — in different languages and seasons. We plan budgets and creative per market, then report on them side by side.</p>
          </div>
          <Reveal className="mt-12 overflow-hidden rounded-[32px] border border-line bg-[#0b0d15]">
            <div className="aspect-[4/5] sm:aspect-[16/9]"><MarketArcs markets={c.markets} interactive /></div>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {c.markets.map((m) => (
              <li key={m.name} className="rounded-2xl border border-line p-4">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LAYERED DASHBOARD */}
      <section className="section-y overflow-hidden bg-ink-2" aria-labelledby="dd-db">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">Measurement</Eyebrow>
            <h2 id="dd-db" className="mt-4 text-4xl font-semibold leading-[1.03] sm:text-6xl">Every market, one source of truth.</h2>
          </div>
          <div className="mt-16"><LayeredDashboard /></div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section aria-labelledby="dd-ch">
        <h2 id="dd-ch" className="sr-only">Our approach</h2>
        {c.chapters.map((ch, i) => (
          <div key={ch.title} className={`relative overflow-hidden border-t border-line py-24 sm:py-36 ${i === 1 ? "bg-violet" : ""}`}>
            <span aria-hidden className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display text-[40vw] font-bold leading-none text-white/[0.04] lg:text-[28rem]">{i + 1}</span>
            <Reveal className="container-x relative grid gap-8 lg:grid-cols-12">
              <p className={`font-mono text-xs uppercase tracking-[0.3em] lg:col-span-3 ${i === 1 ? "text-lime" : "text-muted"}`}>{ch.kicker}</p>
              <div className="lg:col-span-8">
                <h3 className="text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">{ch.title}</h3>
                <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${i === 1 ? "text-white/85" : "text-muted"}`}>{ch.body}</p>
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      {/* SERVICES — horizontal rail */}
      <section className="section-y border-t border-line" aria-labelledby="dd-sv">
        <div className="container-x flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="dd-sv" className="text-4xl font-semibold leading-[1.03] sm:text-6xl">Services</h2>
          <p className="max-w-sm text-sm text-muted">Swipe or scroll →</p>
        </div>
        <ul className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(2rem,calc((100vw-1240px)/2+2rem))] [scrollbar-width:thin]">
          {c.services.map((s, i) => (
            <li key={s.title} className="group flex h-[340px] w-[280px] shrink-0 snap-start flex-col justify-between rounded-[28px] border border-line bg-gradient-to-br from-ink-3 to-ink p-7 transition-colors hover:border-lime/50 sm:w-[340px]">
              <span className="font-mono text-sm text-lime">0{i + 1}</span>
              <div>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ink-2" aria-labelledby="dd-faq">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="dd-faq" className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">Working across borders.</h2>
          </div>
          <div className="lg:col-span-8"><FAQAccordion faqs={c.faqs} /></div>
        </div>
      </section>

      {/* CINEMATIC CTA */}
      <section className="relative overflow-hidden py-28 sm:py-40" aria-labelledby="dd-cta">
        <div aria-hidden className="absolute inset-0 opacity-50"><MarketArcs markets={c.markets} /></div>
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,19,29,0.6),#10131d_70%)]" />
        <Reveal className="container-x relative text-center">
          <h2 id="dd-cta" className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-7xl">Which market is next?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">Tell us where you sell today and where you want to grow. We’ll come back with a market-by-market plan.</p>
          <ButtonLink href={href} size="lg" className="mt-10" arrow>Start the conversation</ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
