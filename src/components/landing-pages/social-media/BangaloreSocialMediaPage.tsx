import { Mic, Layers, Share2, Gauge } from "lucide-react";
import { bangaloreSocial as c } from "@/data/pages/bangalore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { SlamWords, LayeredPosts, DragDeck } from "./BangaloreSocial.client";

const href = contactHref("bangalore", "social-media-marketing");
const processIcons = [Mic, Layers, Share2, Gauge];
const spreadBg = ["bg-lime text-ink", "bg-violet text-white", "bg-ink-3 text-white", "bg-violet/60 text-white"];

/**
 * PAGE 7 — Bangalore Social Media Marketing
 * Direction: bold creative agency — full-bleed violet, huge uppercase type, magazine spreads.
 * Order: Hero (violet, slam type + layered posts) → Manifesto (lime) → Magazine "issues" (alternating spreads)
 *        → Draggable content deck → Process → FAQ → Giant-word CTA
 */
export function BangaloreSocialMediaPage() {
  return (
    <>
      {/* HERO — full-bleed violet */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="grid-bg noise-mask absolute inset-0" />
          <div className="absolute -right-40 -top-40 size-[640px] rounded-full bg-violet/35 blur-[140px]" />
          <div className="absolute -left-40 bottom-0 size-[420px] rounded-full bg-violet/20 blur-[120px]" />
        </div>
        <div className="container-x relative">
          <LandingCrumbs city="bangalore" service="social-media-marketing" />
          <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <SlamWords words={c.hero.words} kicker={<H1Kicker className="uppercase tracking-[0.2em] text-lime">Social media marketing agency in Bangalore</H1Kicker>} />
            </div>
            <div>
              <LayeredPosts />
            </div>
          </div>
          <div className="mt-14 grid gap-8 border-t border-line pt-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <p className="max-w-xl text-lg leading-relaxed text-muted">{c.hero.lede}</p>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ButtonLink href={href} size="lg" arrow>Start a content sprint</ButtonLink>
              <ButtonLink href="#bsm-issues" size="lg" variant="outline">What we make</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO — lime */}
      <section className="border-y border-line bg-ink-2 py-16 sm:py-24" aria-labelledby="bsm-man">
        <div className="container-x">
          <h2 id="bsm-man" className="font-mono text-xs uppercase tracking-[0.2em]">House rules</h2>
          <ol className="mt-8">
            {c.manifesto.map((m, i) => (
              <Reveal as="li" key={m} delay={i * 0.07} className="group flex items-baseline gap-4 border-t border-line py-5 last:border-b sm:gap-8">
                <span className="font-mono text-sm text-lime">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-3 sm:text-6xl">{m}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* MAGAZINE ISSUES — alternating spreads */}
      <section id="bsm-issues" className="section-y" aria-labelledby="bsm-is">
        <div className="container-x">
          <h2 id="bsm-is" className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-7xl">The <span className="text-lime">issues</span><br />we publish.</h2>
          <div className="mt-16 space-y-6">
            {c.issues.map((it, i) => (
              <Reveal key={it.no} className={cn("grid overflow-hidden rounded-[32px] md:grid-cols-2", i % 2 && "md:[&>*:first-child]:order-2")}>
                <div className={cn("relative flex min-h-[220px] items-end p-8 sm:min-h-[300px]", spreadBg[i])}>
                  <span className="absolute right-6 top-2 font-display text-[7rem] font-bold leading-none tracking-tighter opacity-20 sm:text-[10rem]">{it.no}</span>
                  <p className="relative font-mono text-xs uppercase tracking-wider">Issue {it.no} · {it.tag}</p>
                </div>
                <div className="flex flex-col justify-center bg-ink-2 p-8 sm:p-12">
                  <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{it.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-muted">{it.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DECK */}
      <section className="relative overflow-hidden py-20 sm:py-28" aria-labelledby="bsm-deck">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[140px]" />
        <div className="container-x mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 id="bsm-deck" className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl">Formats on rotation.</h2>
          <p className="max-w-sm text-muted">Example post angles. Every one starts from something only your team knows.</p>
        </div>
        <DragDeck cards={c.cards} />
      </section>

      {/* PROCESS */}
      <section className="section-y" aria-labelledby="bsm-pr">
        <div className="container-x">
          <h2 id="bsm-pr" className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">One conversation a month. A month of content.</h2>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.map((p, i) => {
              const Icon = processIcons[i];
              return (
                <Reveal as="li" key={p.title} delay={i * 0.08} className="group rounded-[28px] border border-line p-7 transition-colors hover:border-lime/50 hover:bg-ink-2">
                  <Icon aria-hidden className="size-9 text-lime" />
                  <h3 className="mt-10 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.body}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y border-t border-line" aria-labelledby="bsm-faq">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <h2 id="bsm-faq" className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl">Fair<br /><span className="text-lime">questions.</span></h2>
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* CTA — giant word */}
      <section className="relative overflow-hidden border-t border-line py-20 sm:py-28" aria-labelledby="bsm-cta">
        <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/4 size-[520px] rounded-full bg-violet/30 blur-[140px]" />
        <div className="container-x">
          <h2 id="bsm-cta" className="font-display text-[18vw] font-bold uppercase leading-[0.8] tracking-[-0.06em] lg:text-[12rem]">Get<br /><span className="text-lime">loud.</span></h2>
          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-line pt-8 md:flex-row md:items-center">
            <p className="max-w-lg text-lg text-muted">Book a 30-minute session. We’ll leave you with five post ideas from your own story — whether we work together or not.</p>
            <ButtonLink href={href} size="lg" arrow>Book the session</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
