import { ArrowRight } from "lucide-react";
import { bangaloreDigital as c } from "@/data/pages/bangalore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { Rule, MaskedLines } from "./BangaloreDigital.client";

const href = contactHref("bangalore", "digital-marketing-agency");

/** Visible 12-column grid overlay — the Swiss signature of this page. */
function GridLines({ dark = false }: { dark?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="container-x grid h-full grid-cols-4 lg:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`border-l ${dark ? "border-white/[0.05]" : "border-text-dark/[0.06]"} ${i >= 4 ? "hidden lg:block" : ""} ${i === 11 ? "border-r" : ""}`} />
        ))}
      </div>
    </div>
  );
}

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-baseline gap-3 text-sm font-medium">
      <span className="font-mono text-violet">{n}</span>
      <span className="uppercase tracking-[0.14em]">{children}</span>
    </p>
  );
}

/**
 * PAGE 6 — Bangalore Digital Marketing Agency
 * Direction: modern Swiss grid + corporate premium — paper sheet, visible columns, strict type scale.
 * Order: Hero sheet → Contents index → Problem statement → Services matrix A–D
 *        → Who we serve (dark band) → Engagement model → FAQ → Typographic CTA
 */
export function BangaloreDigitalMarketingPage() {
  return (
    <div className="px-2 pb-2 pt-20 sm:px-3 sm:pb-3">
      <div className="overflow-hidden rounded-[28px] bg-paper text-text-dark sm:rounded-[36px]">
        {/* HERO */}
        <section className="relative pb-16 pt-10 sm:pb-24 sm:pt-14">
          <GridLines />
          <div className="container-x relative">
            <LandingCrumbs city="bangalore" service="digital-marketing-agency" tone="light" />
            <div className="mt-14 grid gap-y-10 lg:grid-cols-12">
              <div className="lg:col-span-12">
                <MaskedLines
                  kicker={<H1Kicker className="mb-6 uppercase tracking-[0.2em] text-violet">Digital marketing agency in Bangalore / Bengaluru</H1Kicker>}
                  lines={["Marketing that", "reports to", "revenue."]}
                  className="text-[3.2rem] font-bold leading-[0.9] tracking-[-0.045em] sm:text-[6rem] lg:text-[9rem]"
                />
              </div>
              <Reveal delay={0.4} className="lg:col-span-5 lg:col-start-1">
                <Rule className="mb-6" />
                <p className="text-lg leading-relaxed text-[#3c4155]">{c.hero.lede}</p>
              </Reveal>
              <Reveal delay={0.5} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:col-start-8 lg:items-end lg:justify-end">
                <ButtonLink href={href} size="lg" variant="dark" arrow>Book a pipeline review</ButtonLink>
                <ButtonLink href="#bd-services" size="lg" className="border border-text-dark/15 bg-transparent text-text-dark hover:bg-text-dark/5">Services</ButtonLink>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTENTS INDEX */}
        <nav aria-label="On this page" className="relative border-y border-text-dark/10">
          <div className="container-x grid grid-cols-2 lg:grid-cols-4">
            {[["01", "Problem", "#bd-problem"], ["02", "Services", "#bd-services"], ["03", "Clients", "#bd-who"], ["04", "Model", "#bd-model"]].map(([n, l, h]) => (
              <a key={n} href={h} className="group flex items-center justify-between border-text-dark/10 px-4 py-5 text-sm font-medium transition-colors hover:text-violet odd:border-r [&:nth-child(-n+2)]:border-b lg:border-r lg:last:border-r-0 lg:[&:nth-child(-n+2)]:border-b-0">
                <span><span className="mr-3 font-mono text-violet">{n}</span>{l}</span>
                <ArrowRight aria-hidden className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </nav>

        {/* PROBLEM */}
        <section id="bd-problem" className="relative py-20 sm:py-32" aria-labelledby="bd-p">
          <GridLines />
          <div className="container-x relative grid gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-3"><Label n="01">The problem</Label></div>
            <h2 id="bd-p" className="text-4xl font-bold leading-[1] tracking-[-0.03em] sm:text-6xl lg:col-span-9">
              B2B growth in Bangalore breaks in three predictable places.
            </h2>
            <div className="grid gap-10 sm:grid-cols-3 lg:col-span-9 lg:col-start-4">
              {c.problems.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.08}>
                  <Rule delay={i * 0.1} />
                  <p className="mt-5 font-mono text-sm text-violet">{p.n}</p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#4a4f63]">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES MATRIX */}
        <section id="bd-services" className="relative bg-white py-20 sm:py-32" aria-labelledby="bd-s">
          <div className="container-x">
            <div className="grid gap-y-8 lg:grid-cols-12">
              <div className="lg:col-span-3"><Label n="02">Services</Label></div>
              <h2 id="bd-s" className="text-4xl font-bold leading-[1] tracking-[-0.03em] sm:text-6xl lg:col-span-9">Four disciplines, one funnel.</h2>
            </div>
            <div className="mt-16">
              {c.services.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05} className="group grid gap-4 border-t border-text-dark/15 py-8 last:border-b lg:grid-cols-12 lg:items-baseline">
                  <span className="font-display text-5xl font-bold text-violet lg:col-span-1">{s.n}</span>
                  <h3 className="text-2xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl lg:col-span-4">{s.name}</h3>
                  <ul className="flex flex-wrap gap-2 lg:col-span-7 lg:justify-end">
                    {s.items.map((it) => (
                      <li key={it} className="rounded-full border border-text-dark/15 px-4 py-1.5 text-sm text-[#3c4155] transition-colors group-hover:border-violet/40">{it}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE SERVE — dark band */}
        <section id="bd-who" className="relative bg-ink py-20 text-white sm:py-32" aria-labelledby="bd-w">
          <GridLines dark />
          <div className="container-x relative">
            <div className="grid gap-y-8 lg:grid-cols-12">
              <p className="flex items-baseline gap-3 text-sm font-medium lg:col-span-3"><span className="font-mono text-lime">03</span><span className="uppercase tracking-[0.14em]">Who we serve</span></p>
              <h2 id="bd-w" className="text-4xl font-bold leading-[1] tracking-[-0.03em] sm:text-6xl lg:col-span-9">Three stages of Bangalore company. Three different playbooks.</h2>
            </div>
            <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
              {c.segments.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.08} className="bg-ink p-0 md:p-8 md:first:pl-0">
                  <p className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">{s.name}</h3>
                  <p className="mt-3 pb-8 leading-relaxed text-muted md:pb-0">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ENGAGEMENT MODEL */}
        <section id="bd-model" className="relative py-20 sm:py-32" aria-labelledby="bd-m">
          <GridLines />
          <div className="container-x relative grid gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-3"><Label n="04">Engagement model</Label></div>
            <h2 id="bd-m" className="text-4xl font-bold leading-[1] tracking-[-0.03em] sm:text-6xl lg:col-span-9">Diagnose. Prove. Compound.</h2>
            <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-9 lg:col-start-4">
              {c.model.map((m, i) => (
                <Reveal as="li" key={m.title} delay={i * 0.1}>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#8a8fa3]">{m.label}</p>
                  <div className="mt-4 h-2 bg-text-dark/10"><div className="h-full bg-violet" style={{ width: `${(i + 1) * 33.33}%` }} /></div>
                  <h3 className="mt-6 text-3xl font-bold tracking-tight">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#4a4f63]">{m.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-t border-text-dark/10 py-20 sm:py-32" aria-labelledby="bd-f">
          <div className="container-x grid gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-3"><Label n="05">Questions</Label></div>
            <div className="lg:col-span-9">
              <h2 id="bd-f" className="mb-10 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Frequently asked.</h2>
              <FAQAccordion faqs={c.faqs} tone="light" />
            </div>
          </div>
        </section>

        {/* CTA — typographic */}
        <section className="relative bg-violet py-20 text-white sm:py-28" aria-labelledby="bd-cta">
          <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 id="bd-cta" className="text-5xl font-bold leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:col-span-9 lg:text-[7rem]">How much pipeline is your marketing making?</h2>
            <div className="lg:col-span-3">
              <p className="text-white/80">Free 45-minute review of your funnel, tracking and channel mix.</p>
              <ButtonLink href={href} size="lg" className="mt-6" arrow>Find out</ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
