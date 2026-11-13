import type { Metadata } from "next";
import { Target, Eye, Handshake, Scale } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `${siteConfig.name} is a data-driven digital growth agency for ambitious businesses. Learn about our principles, approach and what it's like to work with us.`,
  path: "/about",
});

const values = [
  { icon: Target, title: "Outcomes over outputs", text: "We measure success in leads, customers and revenue — not in reports delivered or posts published." },
  { icon: Eye, title: "Radical transparency", text: "You see what we see: live dashboards, every change logged, every dollar of spend accounted for." },
  { icon: Handshake, title: "Partners, not vendors", text: "We learn your business, challenge assumptions and say no to work that won't pay back." },
  { icon: Scale, title: "Ethical by default", text: "No fake reviews, no ranking guarantees, no grey-hat tactics that put your brand at risk." },
];

const notList = [
  "Lock-in contracts that hold your ad accounts hostage",
  "Vanity metrics dressed up as results",
  "One-size-fits-all monthly packages",
  "Junior teams hidden behind a senior pitch",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About Tesoap Lab"
        title={<>Your growth partner for the <span className="text-gradient">digital world.</span></>}
        description={siteConfig.coreMessage}
      />

      {/* Story — editorial layout */}
      <section className="section-y bg-paper text-text-dark">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
              Ambitious businesses deserve marketing partners who think like owners.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-[#3c4155] lg:col-span-6 lg:col-start-7">
            {/* TODO: replace with the agency's real founding story, team size and location. */}
            <p>
              Too many growing companies spend on marketing without knowing what it returns. Reports show impressions and clicks. Meanwhile the questions that matter go unanswered: <em>which channel actually brings customers, and what does each one cost?</em>
            </p>
            <p>
              {siteConfig.name} exists to answer those questions. We combine SEO, paid media and conversion optimisation under one strategy. All of it is measured against the numbers your leadership team cares about.
            </p>
            <p>
              We work with startups, SMEs and established brands across e-commerce, real estate, healthcare, education, hospitality and SaaS.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-y" aria-labelledby="values-heading">
        <div className="container-x">
          <SectionHeading eyebrow="What we stand for" title={<span id="values-heading">Principles we don&apos;t compromise on.</span>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.08} className="flex gap-5 rounded-[var(--radius-card)] border border-line bg-ink-2 p-7 sm:p-9">
                <v.icon aria-hidden className="size-7 shrink-0 text-lime" />
                <div>
                  <h3 className="text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we're not */}
      <section className="pb-8">
        <div className="container-x">
          <Reveal className="grid gap-10 rounded-[32px] bg-violet p-8 sm:p-12 lg:grid-cols-2">
            <h2 className="text-4xl leading-tight font-semibold sm:text-5xl">What you won&apos;t get from us.</h2>
            <ul className="space-y-4">
              {notList.map((n) => (
                <li key={n} className="flex gap-3 text-lg">
                  <span aria-hidden className="font-mono text-lime">✕</span> {n}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ProcessSection />

      {/* Team placeholder */}
      <section className="section-y bg-ink-2" aria-labelledby="team-heading">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The team"
            title={<span id="team-heading">Specialists, not generalists.</span>}
            description="Strategists, search specialists, paid media managers, analysts and writers, each focused on their own discipline and working to one shared plan."
          />
          {/* TODO: add real team members (photo, name, role) once available. */}
          <Reveal delay={0.1} className="flex flex-wrap gap-3 lg:justify-end">
            <ButtonLink href="/contact" arrow>Work with us</ButtonLink>
            <ButtonLink href="/case-studies" variant="outline">See our approach</ButtonLink>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
