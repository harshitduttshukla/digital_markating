import { Check, Zap, Mail, ArrowDown } from "lucide-react";
import { mumbaiEmail as c } from "@/data/pages/mumbai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { InboxHero } from "./MumbaiEmail.client";

const href = contactHref("mumbai", "email-marketing");

/**
 * PAGE 4 — Mumbai Email Marketing
 * Direction: minimalist SaaS — restrained, light surfaces, product-UI hero.
 * Order: Hero (interactive inbox) → Automation flow (vertical triggers) → Anatomy of an email (annotated)
 *        → Campaign services (checklist grid) → Process (pill stepper) → Analytics (metric rows) → FAQ (Q/A grid) → Inline CTA bar
 */
export function MumbaiEmailMarketingPage() {
  return (
    <>
      {/* HERO — calm, centred copy above a product UI */}
      <section className="relative overflow-hidden pb-0 pt-28 sm:pt-36">
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-[45%] bg-paper" />
        <div className="container-x relative">
          <LandingCrumbs city="mumbai" service="email-marketing" />
          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <h1 className="mt-6 text-[2.5rem] font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              <H1Kicker className="mx-auto inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-sans tracking-normal text-white/70"><Mail aria-hidden className="size-3.5 text-lime" /> Email marketing services in Mumbai</H1Kicker><br />{c.hero.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">{c.hero.lede}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={href} size="md" arrow>Audit my email programme</ButtonLink>
              <ButtonLink href="#mem-flow" size="md" variant="ghost">How automation works <ArrowDown aria-hidden className="ml-1 inline size-4" /></ButtonLink>
            </div>
          </Reveal>
          <div className="mx-auto mt-14 max-w-5xl"><InboxHero inbox={c.inbox} /></div>
        </div>
      </section>

      <div className="bg-paper text-text-dark">
        {/* AUTOMATION — vertical trigger → action list */}
        <section id="mem-flow" className="section-y" aria-labelledby="mem-auto">
          <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet">Automation</p>
              <h2 id="mem-auto" className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">Four flows that run while you run the business.</h2>
              <p className="mt-5 max-w-md leading-relaxed text-[#4a4f63]">Most email revenue for repeat-purchase brands comes from automated flows, not one-off blasts. We build these first.</p>
            </div>
            <ol className="relative space-y-3">
              {c.automations.map((a, i) => (
                <Reveal as="li" key={a.action} delay={i * 0.07} className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-line-dark bg-white p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-violet/10 text-violet"><Zap aria-hidden className="size-4" /></span>
                  <div>
                    <p className="text-sm text-[#5b6075]">When a customer <span className="font-medium text-text-dark">{a.trigger.toLowerCase()}</span></p>
                    <h3 className="mt-1 text-lg font-semibold">→ {a.action}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-[#4a4f63]">{a.detail}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ANATOMY — annotated email mockup */}
        <section className="section-y border-t border-line-dark" aria-labelledby="mem-anat">
          <div className="container-x">
            <h2 id="mem-anat" className="mx-auto max-w-2xl text-center text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Anatomy of an email that earns the click.</h2>
            <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
              <ul className="space-y-8 lg:text-right">
                <Note n="1" t="Subject + preview" d="Read together in the inbox. Specific beats clever." />
                <Note n="2" t="One headline" d="If it is skimmed in two seconds, what is the point?" />
              </ul>
              <Reveal className="mx-auto w-full max-w-[340px] rounded-[28px] border border-line-dark bg-white p-4 shadow-[0_30px_80px_-40px_rgba(23,25,35,0.4)]">
                <div className="rounded-xl bg-paper p-3 text-xs"><span className="font-semibold">Your store</span> · Ships today in Mumbai<br /><span className="text-[#8a8fa3]">Your picks are saved — order by 2 pm…</span></div>
                <div className="mt-3 rounded-2xl bg-ink p-5 text-white">
                  <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-violet to-lime/60" />
                  <p className="mt-4 font-display text-lg font-semibold">Still thinking it over?</p>
                  <p className="mt-1 text-xs text-white/60">Two lines of reassurance, not a wall of text.</p>
                  <span className="mt-4 block rounded-full bg-lime py-2 text-center text-xs font-semibold text-ink">Return to cart</span>
                </div>
                <p className="mt-3 text-center text-[10px] text-[#8a8fa3]">Unsubscribe · Preferences</p>
              </Reveal>
              <ul className="space-y-8">
                <Note n="3" t="One action" d="A single, thumb-sized button. Everything else supports it." />
                <Note n="4" t="Easy exit" d="Visible preferences and unsubscribe protect deliverability." />
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES — checklist grid */}
        <section className="section-y bg-white" aria-labelledby="mem-svc">
          <div className="container-x">
            <h2 id="mem-svc" className="max-w-xl text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Everything an email programme needs.</h2>
            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.05} className="border-t border-line-dark pt-6">
                  <Check aria-hidden className="size-5 text-violet" />
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-[#4a4f63]">{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS — pill stepper */}
        <section className="section-y" aria-labelledby="mem-proc">
          <div className="container-x text-center">
            <h2 id="mem-proc" className="text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Six steps. No mystery.</h2>
            <ol className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2 sm:gap-3">
              {c.process.map((s, i) => (
                <li key={s} className="flex items-center gap-2 sm:gap-3">
                  <span className={`rounded-full border px-5 py-3 text-sm font-medium sm:text-base ${i === c.process.length - 1 ? "border-violet bg-violet text-white" : "border-line-dark bg-white"}`}>
                    <span className="mr-2 font-mono text-xs text-[#8a8fa3]">{i + 1}</span>{s}
                  </span>
                  {i < c.process.length - 1 && <span aria-hidden className="hidden h-px w-6 bg-line-dark sm:block" />}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ANALYTICS — metric rows */}
        <section className="section-y border-t border-line-dark" aria-labelledby="mem-ana">
          <div className="container-x grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet">Reporting</p>
              <h2 id="mem-ana" className="mt-4 text-4xl font-medium tracking-[-0.02em] sm:text-5xl">We report revenue, not just open rates.</h2>
              <p className="mt-5 max-w-md leading-relaxed text-[#4a4f63]">Since Apple Mail Privacy Protection, open rates are unreliable. These are the numbers we use to make decisions.</p>
            </div>
            <dl className="divide-y divide-line-dark rounded-[var(--radius-card)] border border-line-dark bg-white">
              {c.analytics.map((a) => (
                <div key={a.label} className="flex items-center justify-between gap-6 p-5 sm:p-6">
                  <dt className="font-semibold">{a.label}</dt>
                  <dd className="text-right text-sm text-[#5b6075]">{a.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* FAQ — flat Q/A grid */}
        <section className="section-y bg-white" aria-labelledby="mem-faq">
          <div className="container-x">
            <h2 id="mem-faq" className="text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Frequently asked.</h2>
            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {c.faqs.map((f) => (
                <div key={f.question}>
                  <h3 className="text-lg font-semibold">{f.question}</h3>
                  <p className="mt-2 leading-relaxed text-[#4a4f63]">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — inline bar */}
        <section className="pb-20 pt-4 sm:pb-28" aria-labelledby="mem-cta">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] bg-ink p-8 text-white sm:p-10 md:flex-row md:items-center">
              <div>
                <h2 id="mem-cta" className="text-3xl font-medium tracking-[-0.02em] sm:text-4xl">Find the revenue sitting in your list.</h2>
                <p className="mt-2 text-muted">Free audit of your flows, templates and deliverability.</p>
              </div>
              <ButtonLink href={href} size="lg" arrow className="shrink-0">Request an email audit</ButtonLink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Note({ n, t, d }: { n: string; t: string; d: string }) {
  return (
    <li>
      <span className="inline-grid size-7 place-items-center rounded-full bg-violet font-mono text-xs text-white">{n}</span>
      <h3 className="mt-3 text-lg font-semibold">{t}</h3>
      <p className="mt-1 text-[#4a4f63]">{d}</p>
    </li>
  );
}
