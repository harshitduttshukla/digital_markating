import { caseStudies } from "@/data/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { DemoBadge } from "@/components/ui/DemoBadge";

export function CaseStudies() {
  const [a, b, c] = caseStudies;
  const hasDemo = caseStudies.some((s) => s.isDemo);
  return (
    <section id="work" className="section-y" aria-labelledby="work-heading">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={<span id="work-heading">Real Strategies. Measurable Outcomes.</span>}
            description="How we approach growth problems, from diagnosis to measurable change."
          />
          <Reveal delay={0.1} className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
            {hasDemo && <DemoBadge label="Demonstration projects — real case studies coming soon" />}
            <ButtonLink href="/case-studies" variant="outline" arrow>All case studies</ButtonLink>
          </Reveal>
        </div>

        {/* Asymmetric layout: one large feature + two stacked */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <CaseStudyCard study={a} large className="h-full" />
          </Reveal>
          <div className="grid gap-5 lg:col-span-5">
            <Reveal delay={0.1}><CaseStudyCard study={b} /></Reveal>
            <Reveal delay={0.2} className="lg:hidden xl:block"><CaseStudyCard study={c} /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
