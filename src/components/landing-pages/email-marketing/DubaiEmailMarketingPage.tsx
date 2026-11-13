import { BedDouble, Building2, Crown, Briefcase, Mail } from "lucide-react";
import { dubaiEmail as c } from "@/data/pages/dubai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";
import { NewsletterHero, Pipeline } from "./DubaiEmail.client";

const href = contactHref("dubai", "email-marketing");
const audienceIcons = [BedDouble, Building2, Crown, Briefcase];
const fan = ["md:-rotate-6 md:translate-y-6", "md:z-10 md:-translate-y-2", "md:rotate-6 md:translate-y-6"];
const fanBg = ["from-violet to-violet-soft", "from-lime to-[#e9ffc9]", "from-ink-3 to-violet/60"];

/**
 * PAGE 12 — Dubai Email Marketing
 * Direction: modern premium communication platform — refined newsletter preview, bilingual toggle, platform UI.
 * Order: Hero (newsletter + EN/AR toggle) → Audiences → Automation pipeline → Newsletter previews (fanned)
 *        → Platform dashboard → Services → FAQ → Letter-style CTA
 */
export function DubaiEmailMarketingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-0 size-[620px] rounded-full bg-violet/30 blur-[150px]" />
          <div className="absolute -left-20 bottom-0 size-[360px] rounded-full bg-lime/10 blur-[120px]" />
        </div>
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          <div>
            <LandingCrumbs city="dubai" service="email-marketing" />
            <Reveal className="mt-10">
              <h1 className="mt-6 text-[2.8rem] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.4rem]">
                <H1Kicker className="uppercase text-lime">Email marketing agency in Dubai</H1Kicker>
                Correspondence worthy of <span className="italic text-lime">your brand.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{c.hero.lede}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow>Elevate my emails</ButtonLink>
                <ButtonLink href="#dem-flow" size="lg" variant="outline">See the journey</ButtonLink>
              </div>
            </Reveal>
          </div>
          <NewsletterHero />
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="border-y border-line py-16 sm:py-20" aria-labelledby="dem-au">
        <div className="container-x">
          <h2 id="dem-au" className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Who you write to</h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.audiences.map((a, i) => {
              const Icon = audienceIcons[i];
              return (
                <Reveal as="li" key={a.name} delay={i * 0.06} className="bg-ink p-7">
                  <Icon aria-hidden className="size-6 text-lime" />
                  <h3 className="mt-6 text-2xl font-medium">{a.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* AUTOMATION PIPELINE */}
      <section id="dem-flow" className="section-y" aria-labelledby="dem-fl">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Automation</Eyebrow>
            <h2 id="dem-fl" className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">From first enquiry to lasting loyalty.</h2>
          </div>
          <div className="mt-16"><Pipeline steps={c.automation} /></div>
        </div>
      </section>

      {/* NEWSLETTER PREVIEWS — fanned */}
      <section className="section-y overflow-hidden bg-ink-2" aria-labelledby="dem-nl">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="dem-nl" className="text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">Newsletters people look forward to.</h2>
            <Illustrative label="Example formats" />
          </div>
          <div className="group mt-16 grid gap-6 md:grid-cols-3 md:gap-0">
            {c.newsletters.map((n, i) => (
              <Reveal key={n.name} delay={i * 0.08} className={cn("transition-transform duration-700 ease-out md:group-hover:rotate-0 md:group-hover:translate-y-0 md:px-3", fan[i])}>
                <article className="rounded-[24px] bg-paper p-4 text-text-dark shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${fanBg[i]}`} />
                  <div className="p-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet">{n.cadence}</p>
                    <h3 className="mt-2 font-display text-2xl font-medium">{n.name}</h3>
                    <p className="mt-1 text-sm text-[#5b6075]">For {n.audience.toLowerCase()}</p>
                    <div className="mt-4 space-y-1.5" aria-hidden><span className="block h-1.5 w-full rounded bg-text-dark/10" /><span className="block h-1.5 w-4/5 rounded bg-text-dark/10" /></div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM DASHBOARD */}
      <section className="section-y" aria-labelledby="dem-db">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Insight</Eyebrow>
            <h2 id="dem-db" className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">See every audience, in every language.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">Reporting split by language, segment and journey stage — so you know which conversations create bookings, viewings and renewals.</p>
          </div>
          <Reveal className="rounded-[28px] border border-line bg-ink-2 p-6 sm:p-8" role="img" aria-label="Illustrative email performance dashboard with sample data">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/80">Audience overview</p>
              <Illustrative label="Sample data" />
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <svg viewBox="0 0 42 42" className="mx-auto size-40 -rotate-90" aria-hidden>
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="5" />
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#B7F36B" strokeWidth="5" strokeDasharray="58 42" />
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#7055F7" strokeWidth="5" strokeDasharray="34 66" strokeDashoffset="-58" />
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#8F7BFF" strokeWidth="5" strokeDasharray="8 92" strokeDashoffset="-92" />
              </svg>
              <ul className="space-y-3 text-sm">
                {[["English", "58%", "bg-lime"], ["Arabic", "34%", "bg-violet"], ["Other", "8%", "bg-violet-soft"]].map(([l, v, c2]) => (
                  <li key={l} className="flex items-center gap-3"><span className={`size-2.5 rounded-full ${c2}`} />{l}<span className="ml-auto font-mono text-muted">{v}</span></li>
                ))}
              </ul>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6">
              {[["Journeys live", "6"], ["Segments", "14"], ["Avg. send / wk", "2"]].map(([k, v]) => (
                <div key={k}><p className="font-display text-3xl">{v}</p><p className="mt-1 text-xs text-muted">{k}</p></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y border-t border-line" aria-labelledby="dem-sv">
        <div className="container-x">
          <h2 id="dem-sv" className="text-center text-4xl font-medium tracking-[-0.02em] sm:text-5xl">What we take care of.</h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06} className="flex gap-5 rounded-[var(--radius-card)] border border-line p-7 transition-colors hover:bg-ink-2">
                <span className="font-display text-sm text-lime">0{i + 1}</span>
                <div><h3 className="text-xl font-medium">{s.title}</h3><p className="mt-2 text-muted">{s.body}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-ink-2" aria-labelledby="dem-faq">
        <div className="container-x max-w-4xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 id="dem-faq" className="mb-10 mt-4 text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Before we begin.</h2>
          <FAQAccordion faqs={c.faqs} />
        </div>
      </section>

      {/* LETTER CTA */}
      <section className="py-20 sm:py-28" aria-labelledby="dem-cta">
        <div className="container-x">
          <Reveal className="relative mx-auto max-w-4xl rounded-[28px] bg-paper p-8 text-text-dark shadow-[0_50px_120px_-50px_rgba(112,85,247,0.7)] sm:p-14">
            <div aria-hidden className="absolute inset-x-0 top-0 h-2 rounded-t-[28px] bg-[repeating-linear-gradient(135deg,var(--color-violet)_0_14px,transparent_14px_28px,var(--color-lime)_28px_42px,transparent_42px_56px)]" />
            <div className="flex items-start justify-between gap-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet">To: Tesoap Lab</p>
              <Mail aria-hidden className="size-6 text-violet" />
            </div>
            <h2 id="dem-cta" className="mt-8 font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">Let’s write your next chapter together.</h2>
            <p className="mt-5 max-w-xl text-lg text-[#4a4f63]">Share your audience and goals. We’ll reply with a review of your current emails and a plan for the journeys worth building first.</p>
            <ButtonLink href={href} size="lg" variant="dark" className="mt-8" arrow>Write to us</ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
