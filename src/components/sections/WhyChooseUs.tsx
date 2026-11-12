import { BarChart3, FileSearch, Compass, RefreshCcw } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ReportingVisual } from "./ReportingVisual";

const points = [
  { icon: BarChart3, title: "Data-Driven Decisions", text: "Budgets, bids and content priorities are set by evidence from your analytics and CRM — not gut feel." },
  { icon: FileSearch, title: "Transparent Reporting", text: "Plain-language monthly reports, a live dashboard and a change log of everything we did and why." },
  { icon: Compass, title: "Customized Growth Strategies", text: "No templated packages. Your roadmap reflects your margins, market, sales cycle and team." },
  { icon: RefreshCcw, title: "Continuous Optimization", text: "Weekly optimisation sprints and monthly reviews keep campaigns improving after launch." },
];

export function WhyChooseUs() {
  return (
    <section className="section-y relative overflow-hidden bg-ink-2" aria-labelledby="why-heading">
      <div aria-hidden className="absolute -right-40 top-20 size-[500px] rounded-full bg-violet/15 blur-[120px]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why Tesoap Lab"
            title={<span id="why-heading">Marketing That Makes Business Sense.</span>}
            description="We judge our work the way your CFO would: by what it costs, what it returns, and how predictably it scales."
          />
          <ol className="mt-12 space-y-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <li className="group flex gap-5 rounded-2xl border border-transparent p-4 transition-colors hover:border-line hover:bg-white/[0.03] sm:p-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-violet/15 text-violet-soft transition-colors group-hover:bg-violet group-hover:text-white">
                    <p.icon aria-hidden className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{p.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal delay={0.15} className="lg:sticky lg:top-28 lg:self-start">
          <ReportingVisual />
        </Reveal>
      </div>
    </section>
  );
}
