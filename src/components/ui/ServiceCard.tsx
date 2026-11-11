import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, index, featured }: { service: Service; index: number; featured?: boolean }) {
  const Icon = service.icon;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink-2 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-violet/50 sm:p-8",
        featured && "bg-gradient-to-br from-violet/25 via-ink-2 to-ink-2",
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-violet/0 blur-3xl transition-colors duration-700 group-hover:bg-violet/25"
      />
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-2xl border border-line bg-white/[0.04] text-lime transition-colors duration-500 group-hover:bg-lime group-hover:text-ink">
          <Icon aria-hidden className="size-5" />
        </span>
        <span className="font-mono text-xs text-muted">0{index + 1}</span>
      </div>
      <h3 className="mt-8 text-2xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {service.capabilities.map((c) => (
          <li key={c} className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-white/75">
            <Check aria-hidden className="size-3 text-lime" />
            {c}
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${service.slug}`}
        className="mt-auto flex items-center gap-2 pt-8 text-sm font-medium text-white after:absolute after:inset-0"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn more
        <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
