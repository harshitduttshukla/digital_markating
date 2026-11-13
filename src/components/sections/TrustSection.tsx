import Image from "next/image";
import { ShieldCheck, KeyRound, FileBarChart, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const commitments = [
  { icon: KeyRound, title: "You own your accounts", text: "Ad accounts, analytics and data always stay in your name." },
  { icon: FileBarChart, title: "Reporting you can audit", text: "Every metric links back to its source — no vanity dashboards." },
  { icon: ShieldCheck, title: "No black-hat shortcuts", text: "No fake reviews, link farms or ranking guarantees. Ever." },
];

export function TrustSection() {
  const logos = siteConfig.clientLogos;
  const certs = siteConfig.certifications;

  return (
    <section className="section-y bg-paper text-text-dark" aria-labelledby="trust-heading">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <SectionHeading tone="light" eyebrow="Who we work with" title={<span id="trust-heading">Built for Businesses That Think Bigger.</span>} />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-[#4a4f63] lg:pb-2">
              From founder-led startups to established regional brands, we partner with teams who see marketing as an investment that should pay back — and want a partner who measures it that way.
            </p>
          </Reveal>
        </div>

        {/* Client logos — placeholders until real, permission-granted logos are added in config/site.ts */}
        <Reveal delay={0.1} className="mt-14">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label="Client logos">
            {logos.length > 0
              ? logos.map((l) => (
                  <li key={l.name} className="grid h-20 place-items-center rounded-2xl border border-line-dark bg-white px-6">
                    <Image src={l.src} alt={`${l.name} logo`} width={120} height={40} className="max-h-8 w-auto object-contain opacity-70 grayscale" />
                  </li>
                ))
              : Array.from({ length: 6 }).map((_, i) => (
                  <li
                    key={i}
                    className="grid h-20 place-items-center rounded-2xl border border-dashed border-[#c9ccd8] text-xs font-medium uppercase tracking-wider text-[#9a9eb0]"
                  >
                    Client logo
                  </li>
                ))}
          </ul>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Industries */}
          <Reveal className="rounded-[var(--radius-card)] bg-ink p-7 text-white sm:p-9 lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-lime">Industries we serve</p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {industries.map((ind) => (
                <li key={ind.slug} className="flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-2 text-sm">
                  <ind.icon aria-hidden className="size-4 text-lime" />
                  {ind.name}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">Plus startups, D2C brands and service businesses of every size.</p>
          </Reveal>

          {/* Commitments + certifications */}
          <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {commitments.map((c) => (
              <div key={c.title} className="rounded-[var(--radius-card)] border border-line-dark bg-white p-6">
                <c.icon aria-hidden className="size-6 text-violet" />
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a4f63]">{c.text}</p>
              </div>
            ))}
            {certs.length > 0 && (
              <div className="rounded-[var(--radius-card)] border border-line-dark bg-white p-6 sm:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet">Verified certifications</p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {certs.map((c) => (
                    <li key={c.name} className="flex items-center gap-2 rounded-full border border-line-dark px-4 py-2 text-sm">
                      <BadgeCheck aria-hidden className="size-4 text-violet" />
                      {c.verifyUrl ? <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">{c.name}</a> : c.name}
                      <span className="text-[#6b7086]">· {c.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
