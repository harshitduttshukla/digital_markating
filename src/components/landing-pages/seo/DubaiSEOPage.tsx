import { dubaiSeo as c } from "@/data/pages/dubai";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LandingCrumbs, contactHref, H1Kicker } from "../shared";
import { ArchSearch } from "./DubaiSEO.client";

const href = contactHref("dubai", "seo");
const roman = ["I", "II", "III", "IV", "V", "VI"];

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-lime/90">{children}</p>;
}

/**
 * PAGE 9 — Dubai SEO
 * Direction: luxury editorial + premium business — centred, airy, light weights, hairlines, arch motif.
 * Order: Hero (centred type + arch) → Principles I–III → Sectors (hairline index) → Statement band
 *        → Services (arched cards) → Method (roman sequence) → FAQ (centred) → Quiet CTA
 */
export function DubaiSEOPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet/20 blur-[160px]" />
        </div>
        <div className="container-x relative">
          <div className="flex justify-center"><LandingCrumbs city="dubai" service="seo" /></div>
          <Reveal className="mx-auto mt-14 max-w-4xl text-center">
            <h1 className="mt-8 text-[3rem] font-light leading-[1] tracking-[-0.035em] sm:text-7xl lg:text-[6.5rem]">
              <H1Kicker className="mb-8 text-[11px] uppercase tracking-[0.35em] text-lime/90">SEO agency in Dubai · English & Arabic</H1Kicker>
              Visibility,<br /><span className="font-medium italic text-gradient">considered.</span>
            </h1>
            <span aria-hidden className="mx-auto mt-10 block h-16 w-px bg-gradient-to-b from-white/40 to-transparent" />
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/70 sm:text-xl">{c.hero.lede}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={href} size="lg" arrow>Request a private consultation</ButtonLink>
              <ButtonLink href="#dseo-principles" size="lg" variant="ghost">Our approach</ButtonLink>
            </div>
          </Reveal>
          <div className="mt-20"><ArchSearch /></div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="dseo-principles" className="border-y border-white/10 py-24 sm:py-36" aria-labelledby="dseo-p">
        <div className="container-x">
          <div className="text-center">
            <Kicker>Principles</Kicker>
            <h2 id="dseo-p" className="mx-auto mt-6 max-w-3xl text-4xl font-light leading-[1.1] tracking-[-0.02em] sm:text-6xl">Three convictions behind every Dubai strategy.</h2>
          </div>
          <div className="mt-20 grid gap-16 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
            {c.principles.map((p, i) => (
              <Reveal key={p.numeral} delay={i * 0.1} className="text-center md:px-10">
                <p className="font-display text-5xl font-light text-lime/80">{p.numeral}</p>
                <h3 className="mt-6 text-2xl font-normal">{p.title}</h3>
                <p className="mx-auto mt-4 max-w-xs font-light leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS — hairline index */}
      <section className="py-24 sm:py-36" aria-labelledby="dseo-s">
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Kicker>Sectors</Kicker>
            <h2 id="dseo-s" className="mt-6 text-4xl font-light leading-[1.1] tracking-[-0.02em] sm:text-5xl">For the industries that define the city.</h2>
          </div>
          <ul>
            {c.sectors.map((s) => (
              <li key={s.name} className="group grid gap-2 border-t border-white/10 py-8 last:border-b sm:grid-cols-[1fr_1.3fr] sm:gap-8">
                <h3 className="text-2xl font-light tracking-tight transition-all duration-700 group-hover:pl-3 group-hover:text-lime sm:text-3xl">{s.name}</h3>
                <p className="font-light leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STATEMENT BAND */}
      <section className="relative overflow-hidden bg-ink-2 py-24 sm:py-36" aria-label="Our standard">
        <div aria-hidden className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div aria-hidden className="absolute left-1/2 top-1/2 size-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />
        <Reveal className="container-x relative text-center">
          <p className="mx-auto max-w-4xl text-3xl font-light italic leading-[1.3] tracking-[-0.01em] text-white/90 sm:text-5xl">
            “Premium audiences notice the details. So does Google. We hold every page to the standard your brand already sets offline.”
          </p>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.35em] text-muted">— The Tesoap Lab standard</p>
        </Reveal>
      </section>

      {/* SERVICES — arched cards */}
      <section className="py-24 sm:py-36" aria-labelledby="dseo-sv">
        <div className="container-x">
          <div className="text-center">
            <Kicker>Services</Kicker>
            <h2 id="dseo-sv" className="mt-6 text-4xl font-light tracking-[-0.02em] sm:text-6xl">The craft, in four parts.</h2>
          </div>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} className="group flex flex-col items-center rounded-t-full border border-white/10 px-6 pb-10 pt-20 text-center transition-colors duration-700 hover:border-lime/40 hover:bg-white/[0.02]">
                <span className="font-display text-sm font-light text-lime">{roman[i]}</span>
                <h3 className="mt-8 text-xl font-normal">{s.title}</h3>
                <p className="mt-4 font-light leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="border-t border-white/10 py-24 sm:py-32" aria-labelledby="dseo-m">
        <div className="container-x text-center">
          <Kicker>Method</Kicker>
          <h2 id="dseo-m" className="mt-6 text-4xl font-light tracking-[-0.02em] sm:text-5xl">Six movements, unhurried and exact.</h2>
          <ol className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {c.method.map((m, i) => (
              <li key={m} className="relative">
                <p className="font-display text-3xl font-light text-white/30">{roman[i]}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em]">{m}</p>
                {i < c.method.length - 1 && <span aria-hidden className="absolute right-0 top-5 hidden h-px w-6 translate-x-1/2 bg-white/20 lg:block" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-2 py-24 sm:py-36" aria-labelledby="dseo-f">
        <div className="container-x max-w-3xl">
          <div className="text-center">
            <Kicker>Enquiries</Kicker>
            <h2 id="dseo-f" className="mt-6 text-4xl font-light tracking-[-0.02em] sm:text-5xl">Questions, answered plainly.</h2>
          </div>
          <div className="mt-14"><FAQAccordion faqs={c.faqs} /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 sm:py-40" aria-labelledby="dseo-cta">
        <Reveal className="container-x text-center">
          <span aria-hidden className="mx-auto block h-20 w-px bg-gradient-to-b from-transparent to-lime" />
          <h2 id="dseo-cta" className="mx-auto mt-10 max-w-3xl text-4xl font-light leading-[1.1] tracking-[-0.02em] sm:text-6xl">Begin with a conversation.</h2>
          <p className="mx-auto mt-6 max-w-lg font-light text-muted">A confidential review of your search presence in English and Arabic, with a considered plan to follow.</p>
          <ButtonLink href={href} size="lg" className="mt-10" arrow>Arrange a consultation</ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
