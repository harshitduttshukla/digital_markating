import { Play, Check } from "lucide-react";
import { dubaiSocial as c } from "@/data/pages/dubai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";
import { PlatformOrbit } from "./DubaiSocial.client";

const href = contactHref("dubai", "social-media-marketing");

const frameStyle = [
  "from-violet via-violet-soft to-lime/70",
  "from-ink-3 to-violet/70",
  "from-lime to-[#e9ffc9]",
  "from-violet-soft/80 to-ink-3",
  "from-[#262b40] via-violet/50 to-lime/40",
];
// Asymmetric placement for the 5 hero frames on a 6-column grid
const frameGrid = [
  "col-span-6 row-span-2 sm:col-span-4 sm:row-span-3",
  "col-span-3 row-span-2 sm:col-span-2 sm:row-span-2",
  "col-span-3 row-span-2 sm:col-span-2 sm:row-span-1",
  "col-span-3 row-span-1 sm:col-span-3 sm:row-span-1",
  "col-span-3 row-span-1 sm:col-span-3 sm:row-span-1",
];

/**
 * PAGE 11 — Dubai Social Media Marketing
 * Direction: high-end creative campaign studio — asymmetric campaign frames, orbiting platforms, bilingual craft.
 * Order: Hero (asymmetric frame grid) → Platform orbit → Bilingual creative split → Seasonal calendar
 *        → Portfolio concepts (asymmetric) → Services list → FAQ cards → Split conversion CTA
 */
export function DubaiSocialMediaPage() {
  return (
    <>
      {/* HERO — headline + asymmetric campaign frames */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-32">
        <div className="container-x relative">
          <LandingCrumbs city="dubai" service="social-media-marketing" />
          <div className="mt-8 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5 lg:pt-10">
              <h1 className="mt-6 text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-[4.6rem]">
                <H1Kicker className="uppercase text-lime">Social media marketing agency in Dubai</H1Kicker>
                Campaigns made for the city that <span className="text-gradient">sets the bar.</span>
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{c.hero.lede}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow>Brief a campaign</ButtonLink>
                <ButtonLink href="#dsm-portfolio" size="lg" variant="outline">View concepts</ButtonLink>
              </div>
            </Reveal>
            <div className="grid auto-rows-[110px] grid-cols-6 gap-3 sm:auto-rows-[130px] lg:col-span-7">
              {c.frames.map((f, i) => (
                <Reveal key={f.title} delay={0.1 + i * 0.08} className={cn("group relative overflow-hidden rounded-[22px] bg-gradient-to-br", frameStyle[i], frameGrid[i])}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.25),transparent_50%)] transition-transform duration-700 group-hover:scale-110" />
                  {i === 0 && <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur transition-transform duration-500 group-hover:scale-110"><Play aria-hidden className="size-6 fill-white text-white" /></span>}
                  <div className={cn("absolute inset-x-4 bottom-3", i === 2 ? "text-ink" : "text-white")}>
                    <p className="font-mono text-[10px] uppercase opacity-70">{f.sector}</p>
                    <p className={cn("font-display font-semibold leading-tight", i === 0 ? "text-2xl" : "text-sm sm:text-base")}>{f.title}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-end"><Illustrative label="Concept frames — not client work" /></div>
        </div>
      </section>

      {/* PLATFORM ORBIT */}
      <section className="section-y overflow-hidden border-t border-line" aria-labelledby="dsm-pl">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <PlatformOrbit platforms={c.platforms} />
          <div>
            <Eyebrow>Platforms</Eyebrow>
            <h2 id="dsm-pl" className="mt-4 text-4xl font-semibold leading-[1.03] sm:text-5xl">One idea, shaped for every feed.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">A Dubai campaign rarely lives on one platform. We build a single creative idea, then cut it for Instagram’s polish, TikTok’s pace, Snapchat’s immediacy and LinkedIn’s credibility.</p>
          </div>
        </div>
      </section>

      {/* BILINGUAL SPLIT */}
      <section className="section-y bg-ink-2" aria-labelledby="dsm-bi">
        <div className="container-x">
          <h2 id="dsm-bi" className="mx-auto max-w-3xl text-center text-4xl font-semibold leading-[1.03] sm:text-5xl">Written twice. Never translated.</h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-muted">Arabic and English captions are crafted separately by native writers, so each lands with its own rhythm and nuance.</p>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[28px] border border-line bg-ink p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-lime">English</p>
              <p className="mt-6 font-display text-3xl font-semibold leading-tight">Golden hour, reserved for you.</p>
              <p className="mt-3 text-muted">Sunset seats on the terrace this weekend. Book direct for a welcome drink.</p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[28px] border border-line bg-ink p-8 text-right" lang="ar" dir="rtl">
              <p className="font-mono text-xs uppercase tracking-wider text-lime">العربية</p>
              <p className="mt-6 text-3xl font-semibold leading-tight">ساعة الغروب، محجوزة لك.</p>
              <p className="mt-3 text-muted">مقاعد على التراس عند الغروب هذا الأسبوع. احجز مباشرة واستمتع بمشروب ترحيبي.</p>
            </Reveal>
          </div>
          <p className="mt-4 text-center font-mono text-xs text-muted">Example captions</p>
        </div>
      </section>

      {/* SEASONAL CALENDAR */}
      <section className="section-y" aria-labelledby="dsm-cal">
        <div className="container-x">
          <Eyebrow>Campaign calendar</Eyebrow>
          <h2 id="dsm-cal" className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.03] sm:text-5xl">Dubai runs on seasons. So do we.</h2>
          <div className="relative mt-14">
            <span aria-hidden className="absolute left-0 right-0 top-[11px] hidden h-px bg-gradient-to-r from-lime via-violet-soft to-lime md:block" />
            <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
              {c.calendar.map((m, i) => (
                <Reveal as="li" key={m.moment} delay={i * 0.08} className="relative">
                  <span aria-hidden className="relative block size-6 rounded-full border-4 border-ink bg-lime" />
                  <h3 className="mt-6 text-xl font-semibold">{m.moment}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{m.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PORTFOLIO CONCEPTS — offset asymmetric */}
      <section id="dsm-portfolio" className="section-y bg-ink-2" aria-labelledby="dsm-pf">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="dsm-pf" className="text-4xl font-semibold leading-[1.03] sm:text-6xl">Concept showcase</h2>
            <Illustrative label="Sample creative directions" />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-12">
            {c.frames.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.06}
                className={cn("group relative overflow-hidden rounded-[28px] bg-gradient-to-br", frameStyle[(i + 2) % 5],
                  ["md:col-span-7 aspect-[16/10]", "md:col-span-5 aspect-[4/5] md:mt-16", "md:col-span-4 aspect-square", "md:col-span-4 aspect-square md:-mt-10", "md:col-span-4 aspect-square"][i])}>
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
                <div className={cn("absolute inset-x-6 bottom-6 transition-transform duration-500 group-hover:-translate-y-2", (i + 2) % 5 === 2 ? "text-ink" : "text-white")}>
                  <p className="font-mono text-xs uppercase opacity-70">{f.sector}</p>
                  <h3 className="mt-1 text-2xl font-semibold">{f.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y" aria-labelledby="dsm-sv">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <h2 id="dsm-sv" className="text-4xl font-semibold leading-[1.03] sm:text-5xl">From concept to amplification.</h2>
          <ol>
            {c.services.map((s, i) => (
              <li key={s.title} className="group flex gap-6 border-t border-line py-7 last:border-b">
                <span className="font-display text-4xl font-semibold text-white/20 transition-colors group-hover:text-lime">0{i + 1}</span>
                <div><h3 className="text-2xl font-semibold">{s.title}</h3><p className="mt-2 text-muted">{s.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — cards */}
      <section className="section-y border-t border-line" aria-labelledby="dsm-faq">
        <div className="container-x">
          <h2 id="dsm-faq" className="text-center text-4xl font-semibold sm:text-5xl">Good to know.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {c.faqs.map((f, i) => (
              <Reveal key={f.question} delay={(i % 2) * 0.06} className="rounded-[var(--radius-card)] border border-line bg-ink-2 p-7">
                <h3 className="text-lg font-semibold">{f.question}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.answer}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT CTA */}
      <section className="pb-20 sm:pb-28" aria-labelledby="dsm-cta">
        <div className="container-x grid overflow-hidden rounded-[32px] md:grid-cols-[1.3fr_1fr]">
          <div className="bg-lime p-8 text-ink sm:p-14">
            <h2 id="dsm-cta" className="text-4xl font-semibold leading-[1.02] tracking-[-0.02em] sm:text-6xl">Your next campaign starts with a brief.</h2>
            <ButtonLink href={href} size="lg" variant="dark" className="mt-10" arrow>Send us your brief</ButtonLink>
          </div>
          <div className="bg-ink-3 p-8 sm:p-14">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">A campaign brief gets you</p>
            <ul className="mt-6 space-y-4">
              {["Two creative routes", "Platform & format plan", "Bilingual caption samples", "Production estimate"].map((x) => (
                <li key={x} className="flex items-center gap-3"><Check aria-hidden className="size-5 text-lime" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
