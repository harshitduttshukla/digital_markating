import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/types";
import { CoverArt } from "./CoverArt";
import { DemoBadge } from "./DemoBadge";
import { cn } from "@/lib/utils";

export function CaseStudyCard({ study, large, className }: { study: CaseStudy; large?: boolean; className?: string }) {
  return (
    <article className={cn("group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink-2", className)}>
      <div className={cn("relative overflow-hidden", large ? "aspect-[16/10]" : "aspect-[16/11]")}>
        <CoverArt
          variant={study.art}
          label={`Illustrative artwork for ${study.industry} project`}
          className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-ink/80 px-3 py-1 text-xs text-white backdrop-blur">{study.industry}</span>
          {study.isDemo && <DemoBadge label="Demonstration project" />}
        </div>
        <span
          aria-hidden
          className="absolute bottom-4 right-4 grid size-12 translate-y-3 place-items-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm text-muted">{study.client}</p>
        <h3 className={cn("mt-2 font-semibold text-white", large ? "text-2xl sm:text-3xl" : "text-xl")}>{study.summary}</h3>
        <div className="mt-5 flex flex-wrap gap-2">
          {study.services.map((s) => (
            <span key={s} className="rounded-full border border-line px-3 py-1 text-xs text-white/70">{s}</span>
          ))}
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <dt className="text-xs text-muted">{m.label}</dt>
              <dd className="mt-1 font-mono text-2xl text-lime">{m.value}</dd>
            </div>
          ))}
        </dl>
        <Link href={`/case-studies#${study.slug}`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white after:absolute after:inset-0">
          View case study
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
