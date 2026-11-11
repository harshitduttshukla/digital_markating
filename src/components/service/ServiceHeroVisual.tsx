import type { Service } from "@/types";

/** Compact capability panel shown beside each service hero. */
export function ServiceHeroVisual({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <div className="relative rounded-[28px] border border-line bg-gradient-to-br from-ink-3 to-ink-2 p-7 sm:p-9">
      <div className="flex items-center gap-4">
        <span className="grid size-14 place-items-center rounded-2xl bg-lime text-ink">
          <Icon aria-hidden className="size-6" />
        </span>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Service</p>
          <p className="font-display text-xl font-semibold">{service.title}</p>
        </div>
      </div>
      <p className="mt-6 font-display text-2xl leading-snug text-white/90">{service.tagline}</p>
      <ul className="mt-7 space-y-2">
        {service.capabilities.map((c, i) => (
          <li key={c} className="flex items-center justify-between rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm">
            <span>{c}</span>
            <span className="font-mono text-xs text-muted">0{i + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
