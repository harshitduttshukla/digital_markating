import { Sparkles } from "lucide-react";
import { mumbaiSocial as c } from "@/data/pages/mumbai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";
import { PhoneFeed, PlatformSwitcher } from "./MumbaiSocial.client";

const href = contactHref("mumbai", "social-media-marketing");
const conceptBg = ["from-violet to-violet-soft", "from-lime to-[#e3ffb8]", "from-ink-3 to-violet/70", "from-violet-soft to-lime/60", "from-[#262b40] to-ink-3", "from-lime/80 to-violet/60"];
const conceptH = ["aspect-[4/5]", "aspect-square", "aspect-[9/14]", "aspect-[4/3]", "aspect-[4/5]", "aspect-square"];
const pillarStyle = ["bg-lime text-ink", "bg-violet text-white", "bg-paper text-text-dark", "bg-ink-3 text-white border border-line"];

/**
 * PAGE 3 — Mumbai Social Media Marketing
 * Direction: creative social studio — phone + floating posts, masonry, sticker energy.
 * Order: Hero → Format marquee → Concept board (masonry) → Creative services (masonry columns)
 *        → Platforms (big-type switcher) → Content pillars (colour quadrants) → FAQ as chat → Sticker CTA
 */
export function MumbaiSocialMediaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-20 size-[420px] rounded-full bg-lime/10 blur-[120px]" />
          <div className="absolute right-0 top-40 size-[520px] rounded-full bg-violet/35 blur-[140px]" />
        </div>
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <LandingCrumbs city="mumbai" service="social-media-marketing" />
            <Reveal className="mt-10">
              <h1 className="mt-6 text-[3rem] font-semibold leading-[0.98] sm:text-7xl lg:text-[5.2rem]">
                <H1Kicker className="inline-block -rotate-3 rounded-xl bg-lime px-3 py-1 font-semibold uppercase tracking-wider text-ink">Social media marketing agency · Mumbai</H1Kicker><br />
                Content{" "}
                <span className="relative inline-block">
                  Mumbai
                  <svg aria-hidden viewBox="0 0 200 20" className="absolute -bottom-2 left-0 w-full text-lime" preserveAspectRatio="none"><path d="M2 14 C 50 2, 150 2, 198 12" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" /></svg>
                </span>{" "}
                stops scrolling for.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted">{c.hero.lede}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow>Plan my content</ButtonLink>
                <ButtonLink href="#mss-concepts" size="lg" variant="outline">See concepts</ButtonLink>
              </div>
            </Reveal>
          </div>
          <PhoneFeed />
        </div>
      </section>

      {/* FORMAT MARQUEE */}
      <div className="overflow-hidden py-3"><div className="relative -rotate-1 overflow-hidden border-y border-line bg-violet py-5" aria-label="Formats we produce">
        <ul className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl font-semibold sm:text-5xl">
          {[...c.formats, ...c.formats].map((f, i) => (
            <li key={i} className="flex items-center gap-10" aria-hidden={i >= c.formats.length}>
              {f}<Sparkles aria-hidden className="size-7 text-lime" />
            </li>
          ))}
        </ul>
      </div></div>

      {/* CONCEPT BOARD — masonry */}
      <section id="mss-concepts" className="section-y" aria-labelledby="mss-cb">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Concept board</Eyebrow>
              <h2 id="mss-cb" className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.03] sm:text-6xl">Ideas with a Mumbai accent.</h2>
            </div>
            <Illustrative label="Sample concepts — not client work" />
          </div>
          <div className="mt-12 columns-2 gap-4 lg:columns-3">
            {c.concepts.map((k, i) => (
              <Reveal key={k.title} delay={(i % 3) * 0.07} className="mb-4 break-inside-avoid">
                <article className={cn("group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br p-5 sm:p-6", conceptBg[i], conceptH[i])}>
                  <span className={cn("self-start rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur", i === 1 || i === 5 ? "bg-ink/10 text-ink" : "bg-white/15 text-white")}>{k.format}</span>
                  <div className={i === 1 || i === 5 ? "text-ink" : "text-white"}>
                    <p className="font-mono text-[11px] uppercase opacity-70">{k.sector}</p>
                    <h3 className="mt-1 text-xl font-semibold leading-tight transition-transform duration-500 group-hover:-translate-y-1 sm:text-2xl">{k.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE SERVICES — masonry text cards */}
      <section className="section-y bg-ink-2" aria-labelledby="mss-svc">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Creative services</Eyebrow>
            <h2 id="mss-svc" className="mt-4 text-4xl font-semibold leading-[1.03] sm:text-5xl">A full studio, from first idea to final reply.</h2>
          </div>
          <div className="columns-1 gap-4 sm:columns-2">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.07} className={cn("mb-4 break-inside-avoid rounded-[var(--radius-card)] border border-line bg-ink p-7", s.tall && "sm:pb-20")}>
                <span className="font-display text-5xl font-bold text-violet-soft/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="section-y" aria-labelledby="mss-pf">
        <div className="container-x">
          <Eyebrow>Platforms</Eyebrow>
          <h2 id="mss-pf" className="mb-12 mt-4 max-w-2xl text-4xl font-semibold leading-[1.03] sm:text-5xl">Each platform gets its own job.</h2>
          <PlatformSwitcher platforms={c.platforms} />
        </div>
      </section>

      {/* CONTENT PILLARS — colour quadrants */}
      <section className="pb-20 sm:pb-28" aria-labelledby="mss-pl">
        <div className="container-x">
          <h2 id="mss-pl" className="text-center text-4xl font-semibold sm:text-5xl">Four content pillars.</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">Every post we plan belongs to one of them — so your feed has rhythm, not randomness.</p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {c.pillars.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06} className={cn("flex min-h-[220px] flex-col justify-between rounded-[32px] p-8 transition-transform duration-500 hover:-rotate-1", pillarStyle[i])}>
                <h3 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">{p.name}</h3>
                <p className="max-w-sm text-lg opacity-80">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — chat thread */}
      <section className="section-y bg-ink-2" aria-labelledby="mss-faq">
        <div className="container-x max-w-3xl">
          <h2 id="mss-faq" className="text-center text-4xl font-semibold sm:text-5xl">Your questions, answered in the DMs.</h2>
          <div className="mt-14 space-y-8">
            {c.faqs.map((f, i) => (
              <Reveal key={f.question} delay={0.05 * i} className="space-y-3">
                <div className="flex items-end gap-2.5">
                  <span aria-hidden className="size-8 shrink-0 rounded-full bg-gradient-to-br from-white/30 to-white/5" />
                  <h3 className="max-w-[85%] rounded-3xl rounded-bl-md bg-ink-3 px-5 py-3.5 text-base font-medium">{f.question}</h3>
                </div>
                <div className="flex items-end justify-end gap-2.5">
                  <p className="max-w-[85%] rounded-3xl rounded-br-md bg-violet px-5 py-3.5 leading-relaxed text-white">{f.answer}</p>
                  <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full bg-lime font-display text-xs font-bold text-ink">TL</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — sticker style */}
      <section className="py-24 sm:py-32" aria-labelledby="mss-cta">
        <div className="container-x text-center">
          <Reveal>
            <h2 id="mss-cta" className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-7xl">
              Your next post could be the one they{" "}
              <span className="inline-block rotate-2 rounded-2xl bg-lime px-4 text-ink">share.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg text-muted">Get a free review of your profiles and a month of content ideas built for your Mumbai audience.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={href} size="lg" arrow>Get my content review</ButtonLink>
              <ButtonLink href="/services/content-marketing" size="lg" variant="outline">Content marketing</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
