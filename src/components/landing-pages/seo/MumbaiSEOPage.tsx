import { ArrowUpRight } from "lucide-react";
import { mumbaiSeo as c } from "@/data/pages/mumbai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { SerpStack, QueryTheatre } from "./MumbaiSEO.client";

const href = contactHref("mumbai", "seo");

/**
 * PAGE 1 — Mumbai SEO
 * Direction: premium editorial, oversized type, asymmetric composition.
 * Order: Hero → Query theatre → Challenges (editorial columns) → Services (asymmetric bento)
 *        → Industries (index list) → Process (ruled timeline) → FAQ (sticky split) → Editorial CTA
 */
export function MumbaiSEOPage() {
  return (
    <>
      {/* HERO — asymmetric, oversized headline bleeding past the grid */}
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[20%] top-[10%] size-[50vw] max-w-[700px] rounded-full bg-violet/25 blur-[140px]" />
          <p className="absolute -bottom-[0.18em] -left-[0.04em] select-none font-display text-[34vw] font-bold leading-none tracking-tighter text-white/[0.025] lg:text-[26rem]">SEO</p>
        </div>
        <div className="container-x relative">
          <LandingCrumbs city="mumbai" service="seo" />
          <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-8">
              <h1 className="mt-6 text-[3.1rem] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-[5.5rem] lg:text-[7.4rem]">
                <H1Kicker className="uppercase text-lime">SEO agency in Mumbai — search engine optimisation</H1Kicker>
                Be the answer{" "}
                <span className="block italic text-transparent [-webkit-text-stroke:1.5px_var(--color-lime)] sm:[-webkit-text-stroke:2px_var(--color-lime)]">Mumbai</span>
                searches for.
              </h1>
            </Reveal>
            <Reveal delay={0.15} className="flex flex-col justify-end lg:col-span-4 lg:pb-4">
              <p className="border-l-2 border-lime pl-5 text-lg leading-relaxed text-white/75">{c.hero.lede}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href={href} size="lg" arrow>Get a Mumbai SEO audit</ButtonLink>
                <ButtonLink href="#mumbai-seo-services" size="lg" variant="outline">See services</ButtonLink>
              </div>
            </Reveal>
          </div>
          <div className="mt-20 grid lg:grid-cols-12">
            <div className="hidden lg:col-span-5 lg:flex lg:items-end lg:pb-10">
              <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-muted">
                Finance · Real estate · Hospitality · Retail · E-commerce
              </p>
            </div>
            <div className="mx-auto w-full max-w-[520px] lg:col-span-6 lg:col-start-7">
              <SerpStack />
            </div>
          </div>
        </div>
      </section>

      {/* QUERY THEATRE — light editorial spread */}
      <section className="section-y bg-paper text-text-dark" aria-labelledby="ms-queries">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-12">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet lg:col-span-3">§ How Mumbai searches</p>
            <h2 id="ms-queries" className="text-4xl font-semibold leading-[1.02] sm:text-6xl lg:col-span-9">
              Nobody types “business in Mumbai”. <span className="text-[#8a8fa3]">They type a street, a budget and a deadline.</span>
            </h2>
          </div>
          <Reveal className="mt-16">
            <QueryTheatre queries={c.queries} />
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES — editorial columns with oversized numerals */}
      <section className="section-y" aria-labelledby="ms-challenges">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 lg:flex-row lg:items-end">
            <h2 id="ms-challenges" className="max-w-2xl text-4xl font-semibold leading-[1.02] sm:text-6xl">Why Mumbai SEO is its own discipline.</h2>
            <p className="max-w-sm text-muted">Four conditions that shape every strategy we write for this city.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {c.challenges.map((ch, i) => (
              <Reveal key={ch.title} delay={i * 0.06} className={cn("border-line py-10 sm:px-6", i > 0 && "border-t sm:border-t-0", i % 2 === 1 && "sm:border-l", i >= 2 && "sm:border-t lg:border-t-0", i > 0 && "lg:border-l")}>
                <p className="font-display text-7xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]">0{i + 1}</p>
                <h3 className="mt-8 text-xl font-semibold">{ch.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{ch.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — asymmetric bento */}
      <section id="mumbai-seo-services" className="section-y pt-0" aria-labelledby="ms-services">
        <div className="container-x">
          <h2 id="ms-services" className="text-4xl font-semibold leading-[1.02] sm:text-6xl">
            What we do<span className="text-lime">.</span>
          </h2>
          <div className="mt-12 grid auto-rows-[minmax(190px,auto)] gap-4 md:grid-cols-6">
            {c.services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.06}
                className={cn(
                  "group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border p-7 transition-colors",
                  s.size === "lg" && "border-lime/30 bg-lime text-ink md:col-span-4 md:row-span-2",
                  s.size === "md" && "border-line bg-ink-2 md:col-span-2",
                  s.size === "sm" && "border-line bg-transparent hover:bg-ink-2 md:col-span-2",
                  i === 2 && "md:col-start-5",
                )}
              >
                <span className={cn("font-mono text-xs", s.size === "lg" ? "text-ink/60" : "text-muted")}>/{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={cn("font-semibold", s.size === "lg" ? "text-4xl sm:text-5xl" : "text-xl")}>{s.title}</h3>
                  <p className={cn("mt-3 max-w-md leading-relaxed", s.size === "lg" ? "text-lg text-ink/75" : "text-muted")}>{s.body}</p>
                </div>
                {s.size === "lg" && (
                  <ArrowUpRight aria-hidden className="absolute right-7 top-7 size-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES — index list */}
      <section className="section-y bg-ink-2" aria-labelledby="ms-industries">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Sectors</Eyebrow>
            <h2 id="ms-industries" className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">Built for Mumbai’s economy.</h2>
          </div>
          <ol className="lg:col-span-8">
            {c.industries.map((ind, i) => (
              <li key={ind.name} className="group grid gap-2 border-t border-line py-7 last:border-b sm:grid-cols-[4rem_1fr_1.4fr] sm:items-baseline">
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-3xl font-semibold transition-colors group-hover:text-lime sm:text-4xl">{ind.name}</h3>
                <p className="text-muted">{ind.angle}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROCESS — ruled horizontal timeline */}
      <section className="section-y" aria-labelledby="ms-process">
        <div className="container-x">
          <h2 id="ms-process" className="max-w-3xl text-4xl font-semibold leading-[1.02] sm:text-6xl">
            Five verbs. <span className="text-muted">One method.</span>
          </h2>
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
            <span aria-hidden className="absolute left-[7px] top-2 h-full w-px bg-line md:left-0 md:top-[7px] md:h-px md:w-full" />
            {c.process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 0.08} className="relative pl-10 md:pl-0 md:pt-12">
                <span aria-hidden className="absolute left-0 top-1 size-[15px] rounded-full border-2 border-lime bg-ink md:top-0" />
                <h3 className="font-display text-3xl font-semibold italic">{p.step}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — sticky split on light */}
      <section className="section-y bg-paper text-text-dark" aria-labelledby="ms-faq">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow tone="light">FAQ</Eyebrow>
              <h2 id="ms-faq" className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">Questions Mumbai teams ask us.</h2>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion faqs={c.faqs} tone="light" />
          </div>
        </div>
      </section>

      {/* CTA — editorial, no box */}
      <section className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="ms-cta">
        <div aria-hidden className="absolute -left-40 bottom-0 size-[500px] rounded-full bg-violet/30 blur-[140px]" />
        <div className="container-x relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 id="ms-cta" className="text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl lg:col-span-8 lg:text-8xl">
            Let’s make your name the <span className="text-gradient">first result.</span>
          </h2>
          <div className="lg:col-span-4">
            <p className="text-lg text-white/70">A free audit of your site, your top competitors and the Mumbai searches you are missing.</p>
            <ButtonLink href={href} size="lg" className="mt-6" arrow>Request the audit</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
