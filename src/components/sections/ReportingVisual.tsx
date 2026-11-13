/** Static illustration of a monthly report — sample data only. */
const channels = [
  { name: "Organic search", share: 38, color: "#B7F36B" },
  { name: "Google Ads", share: 31, color: "#7055F7" },
  { name: "Meta Ads", share: 19, color: "#8F7BFF" },
  { name: "Direct / referral", share: 12, color: "#4b5068" },
];

const log = [
  { d: "Mon", t: "Paused 14 low-intent search terms" },
  { d: "Wed", t: "Launched landing page variant B" },
  { d: "Fri", t: "Shifted 10% budget to top campaign" },
];

export function ReportingVisual() {
  return (
    <figure className="relative rounded-[28px] border border-line bg-ink p-5 sm:p-7" aria-label="Illustrative monthly growth report with sample data">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted">Monthly growth report</p>
          <p className="mt-1 font-display text-2xl font-semibold">Pipeline by channel</p>
        </div>
        <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200">
          Sample
        </span>
      </div>

      <div className="mt-7 flex h-4 overflow-hidden rounded-full">
        {channels.map((c) => (
          <span key={c.name} style={{ width: `${c.share}%`, background: c.color }} className="h-full first:rounded-l-full last:rounded-r-full" />
        ))}
      </div>
      <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        {channels.map((c) => (
            <li key={c.name} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 text-white/80">
                <span className="size-2.5 rounded-full" style={{ background: c.color }} />
                {c.name}
              </span>
              <span className="font-mono text-muted">{c.share}%</span>
            </li>
        ))}
      </ul>

      <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-6">
        {[
          { l: "Cost / lead", v: "—" },
          { l: "Qualified %", v: "—%" },
          { l: "ROAS", v: "—×" },
        ].map((k) => (
          <div key={k.l}>
            <p className="text-xs text-muted">{k.l}</p>
            <p className="mt-1 font-mono text-xl text-white">{k.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-white/[0.02] p-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-lime">Change log</p>
        <ul className="mt-3 space-y-2.5 text-sm">
          {log.map((l) => (
            <li key={l.t} className="flex gap-3">
              <span className="w-8 shrink-0 font-mono text-muted">{l.d}</span>
              <span className="text-white/85">{l.t}</span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="sr-only">Example of the kind of reporting clients receive. Figures are placeholders.</figcaption>
    </figure>
  );
}
