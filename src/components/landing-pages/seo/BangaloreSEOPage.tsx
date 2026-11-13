import { Terminal, GitCommitHorizontal } from "lucide-react";
import { bangaloreSeo as c } from "@/data/pages/bangalore";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { LandingCrumbs, Illustrative, contactHref, H1Kicker } from "../shared";
import { CrawlConsole, AuditExplorer } from "./BangaloreSEO.client";

const href = contactHref("bangalore", "seo");

/**
 * PAGE 5 — Bangalore SEO
 * Direction: technology + data visualisation — mono type, blueprint grid, console UI.
 * Order: Hero (console) → Error-code challenges → Interactive audit → Keyword landscape (data viz)
 *        → Services spec table → Changelog process → Terminal FAQ → Command-line CTA
 */
export function BangaloreSEOPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-20 pt-28 sm:pt-36">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
          <div className="absolute right-[-10%] top-0 size-[520px] rounded-full bg-violet/25 blur-[140px]" />
        </div>
        <div className="container-x relative">
          <LandingCrumbs city="bangalore" service="seo" />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.02] sm:text-6xl lg:text-[4.3rem]">
                <H1Kicker className="text-sm tracking-normal text-lime">~/bangalore/seo <span className="text-muted">— SEO agency in Bangalore for SaaS & B2B</span></H1Kicker>
                SEO engineered<br />like your <span className="font-mono font-medium text-lime">&lt;product/&gt;</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{c.hero.lede}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={href} size="lg" arrow>Run a technical audit</ButtonLink>
                <ButtonLink href="#bs-audit" size="lg" variant="outline">See what we check</ButtonLink>
              </div>
              <dl className="mt-10 grid max-w-md grid-cols-3 border-t border-line pt-6 font-mono text-xs">
                {[["stack", "Next · React · Vue"], ["focus", "Signups"], ["markets", "IN · US · EU"]].map(([k, v]) => (
                  <div key={k}><dt className="text-muted">{k}</dt><dd className="mt-1 text-white/85">{v}</dd></div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.15}><CrawlConsole /></Reveal>
          </div>
        </div>
      </section>

      {/* CHALLENGES — error codes */}
      <section className="section-y border-t border-line" aria-labelledby="bs-ch">
        <div className="container-x">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{"// known issues"}</p>
          <h2 id="bs-ch" className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl">The bugs we find in most Bangalore tech sites.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {c.challenges.map((e, i) => (
              <Reveal key={e.code} delay={(i % 2) * 0.06} className="group relative overflow-hidden rounded-2xl border border-line bg-ink-2 p-6 font-mono transition-colors hover:border-[#ff7a8a]/40 sm:p-7">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded bg-[#ff7a8a]/15 px-2 py-0.5 text-[#ff9aa6]">{e.code}</span>
                  <span className="text-muted">severity: high</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{e.title}</h3>
                <p className="mt-2 font-sans leading-relaxed text-muted">{e.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE AUDIT */}
      <section id="bs-audit" className="section-y bg-ink-2/50" aria-labelledby="bs-au">
        <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start [&>*]:min-w-0">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-lime">audit.run()</p>
            <h2 id="bs-au" className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">60+ checks, written up as engineering tickets.</h2>
            <p className="mt-5 leading-relaxed text-muted">Click through four of the areas we test. Statuses here are examples; your audit shows your real results, with severity, effort and the exact fix.</p>
          </div>
          <Reveal><AuditExplorer audit={c.audit} /></Reveal>
        </div>
      </section>

      {/* KEYWORD LANDSCAPE — data viz */}
      <section className="section-y" aria-labelledby="bs-kw">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 id="bs-kw" className="max-w-2xl text-4xl font-semibold leading-[1.05] sm:text-5xl">Where SaaS demand actually sits.</h2>
            <Illustrative label="Example distribution for a B2B SaaS category" />
          </div>
          <div className="mt-12 flex h-16 overflow-hidden rounded-2xl" aria-hidden>
            {c.funnel.map((f, i) => (
              <div key={f.stage} style={{ width: `${f.share}%` }} className={["bg-violet/40", "bg-violet", "bg-violet-soft", "bg-lime"][i]} />
            ))}
          </div>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.funnel.map((f, i) => (
              <Reveal key={f.stage} delay={i * 0.06} className="border-l-2 pl-4" style={{ borderColor: ["rgba(112,85,247,.4)", "#7055f7", "#8f7bff", "#b7f36b"][i] }}>
                <dt className="flex items-baseline justify-between gap-2"><span className="font-semibold">{f.stage}</span><span className="font-mono text-sm text-muted">{f.share}%</span></dt>
                <dd className="mt-2 font-mono text-xs leading-relaxed text-muted">{f.examples}</dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-10 max-w-2xl text-muted">Volume lives at the top. Revenue lives at the bottom. We build from the bottom up — comparison and integration pages first, then problem-aware content that links into them.</p>
        </div>
      </section>

      {/* SERVICES — spec table */}
      <section className="section-y border-t border-line" aria-labelledby="bs-svc">
        <div className="container-x">
          <h2 id="bs-svc" className="text-4xl font-semibold sm:text-5xl">Service spec.</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-line">
            <table className="w-full text-left">
              <thead className="hidden bg-ink-2 font-mono text-xs uppercase tracking-wider text-muted sm:table-header-group">
                <tr><th scope="col" className="w-16 px-6 py-4">#</th><th scope="col" className="px-6 py-4">Module</th><th scope="col" className="px-6 py-4">Scope</th></tr>
              </thead>
              <tbody className="divide-y divide-line">
                {c.services.map((s, i) => (
                  <tr key={s.name} className="block transition-colors hover:bg-white/[0.02] sm:table-row">
                    <td className="block px-6 pt-5 font-mono text-sm text-lime sm:table-cell sm:py-5">{String(i + 1).padStart(2, "0")}</td>
                    <th scope="row" className="block px-6 pt-1 font-display text-lg font-semibold sm:table-cell sm:py-5">{s.name}</th>
                    <td className="block px-6 pb-5 pt-1 text-muted sm:table-cell sm:py-5">{s.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS — changelog */}
      <section className="section-y bg-ink-2/50" aria-labelledby="bs-log">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">CHANGELOG.md</p>
            <h2 id="bs-log" className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl">How an engagement ships.</h2>
          </div>
          <ol className="relative border-l border-line pl-8">
            {c.changelog.map((l, i) => (
              <Reveal as="li" key={l.tag} delay={i * 0.08} className="relative pb-10 last:pb-0">
                <GitCommitHorizontal aria-hidden className="absolute -left-[45px] top-0 size-6 rounded-full bg-ink p-0.5 text-lime" />
                <span className="rounded-md border border-line bg-ink px-2 py-0.5 font-mono text-xs text-violet-soft">{l.tag}</span>
                <h3 className="mt-3 text-xl font-semibold">{l.title}</h3>
                <p className="mt-1.5 text-muted">{l.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — terminal details */}
      <section className="section-y" aria-labelledby="bs-faq">
        <div className="container-x max-w-4xl">
          <h2 id="bs-faq" className="font-mono text-3xl font-medium sm:text-4xl"><span className="text-lime">$</span> man tesoap-seo</h2>
          <div className="mt-10 space-y-3">
            {c.faqs.map((f, i) => (
              <details key={f.question} className="group rounded-2xl border border-line bg-ink-2 open:border-lime/40" {...(i === 0 ? { open: true } : {})}>
                <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-sm text-lime">Q{i + 1}</span>
                  <h3 className="flex-1 font-medium">{f.question}</h3>
                  <span aria-hidden className="font-mono text-muted transition-transform group-open:rotate-90">›</span>
                </summary>
                <p className="px-5 pb-6 pl-14 leading-relaxed text-muted sm:px-6 sm:pl-[3.75rem]">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — command line */}
      <section className="pb-20 sm:pb-28" aria-labelledby="bs-cta">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-[28px] border border-line bg-[#0a0c13] p-8 sm:p-14">
            <div aria-hidden className="grid-bg absolute inset-0 opacity-70" />
            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <Terminal aria-hidden className="size-8 text-lime" />
                <h2 id="bs-cta" className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl">Ship an SEO roadmap your engineers will actually merge.</h2>
              </div>
              <div className="rounded-2xl border border-line bg-ink-2 p-5 font-mono text-sm">
                <p className="text-muted"># free, 30-minute review</p>
                <p className="mt-1 text-white"><span className="text-lime">$</span> tesoap audit --site=yours</p>
                <ButtonLink href={href} size="md" className="mt-5 w-full" arrow>Book the audit</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
