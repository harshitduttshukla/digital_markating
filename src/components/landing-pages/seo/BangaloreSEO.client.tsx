"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const log = [
  { t: "GET /", s: "200", c: "text-lime" },
  { t: "GET /pricing", s: "200", c: "text-lime" },
  { t: "GET /docs/v1/auth", s: "301 → /docs/auth", c: "text-amber-300" },
  { t: "render /integrations", s: "content after hydration", c: "text-amber-300" },
  { t: "GET /blog?page=14", s: "canonical missing", c: "text-[#ff7a8a]" },
  { t: "GET /customers", s: "200", c: "text-lime" },
  { t: "CWV mobile LCP", s: "3.1s", c: "text-amber-300" },
  { t: "schema SoftwareApplication", s: "valid", c: "text-lime" },
];

/** Hero console: a looping crawl log plus four score dials. Illustrative output. */
export function CrawlConsole() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? log.length : 0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setN((v) => (v >= log.length + 3 ? 0 : v + 1)), 650);
    return () => clearInterval(id);
  }, [reduce]);

  const scores = [
    { l: "Rendering", v: 62 },
    { l: "Indexation", v: 71 },
    { l: "Performance", v: 58 },
    { l: "Schema", v: 84 },
  ];

  return (
    <div className="relative" role="img" aria-label="Illustrative technical SEO crawl console with score dials">
      <div className="overflow-hidden rounded-2xl border border-line bg-[#0a0c13] font-mono text-[12px] shadow-[0_40px_120px_-40px_rgba(112,85,247,0.55)]">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5 text-[11px] text-muted">
          <span>crawl — saas-site.example</span>
          <span className="rounded border border-amber-300/30 px-1.5 text-amber-200">illustrative</span>
        </div>
        <div className="h-[230px] space-y-1.5 p-4 sm:h-[250px]">
          <p className="text-violet-soft">$ tesoap crawl --render --cwv --market=global</p>
          {log.slice(0, Math.min(n, log.length)).map((l) => (
            <motion.p key={l.t} initial={reduce ? false : { opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex justify-between gap-4">
              <span className="truncate text-white/70">{l.t}</span>
              <span className={cn("shrink-0", l.c)}>{l.s}</span>
            </motion.p>
          ))}
          {n < log.length && <span className="inline-block h-3.5 w-2 animate-pulse bg-lime align-middle" />}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
        {scores.map((s, i) => (
          <div key={s.l} className="rounded-2xl border border-line bg-ink-2 p-2.5 text-center sm:p-3">
            <svg viewBox="0 0 36 36" className="mx-auto size-12 -rotate-90 sm:size-14" aria-hidden>
              <circle cx="18" cy="18" r="15" fill="none" stroke="white" strokeOpacity=".08" strokeWidth="3.5" />
              <motion.circle cx="18" cy="18" r="15" fill="none" stroke={s.v >= 80 ? "#B7F36B" : s.v >= 65 ? "#8F7BFF" : "#fcd34d"} strokeWidth="3.5" strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: s.v / 100 }} transition={{ delay: 0.4 + i * 0.12, duration: 1.2, ease }} />
            </svg>
            <p className="mt-1 font-mono text-sm text-white">{s.v}</p>
            <p className="text-[10px] text-muted sm:text-[11px]">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type Check = { name: string; status: string };
type Area = { area: string; checks: Check[] };

const meta = {
  pass: { icon: CheckCircle2, c: "text-lime", label: "Pass" },
  warn: { icon: AlertTriangle, c: "text-amber-300", label: "Warning" },
  fail: { icon: XCircle, c: "text-[#ff7a8a]", label: "Fail" },
} as const;

/** Interactive audit presentation — the kind of checklist we run, shown with example statuses. */
export function AuditExplorer({ audit }: { audit: Area[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const a = audit[i];
  const score = Math.round((a.checks.reduce((s, c) => s + (c.status === "pass" ? 1 : c.status === "warn" ? 0.5 : 0), 0) / a.checks.length) * 100);
  return (
    <div className="overflow-hidden rounded-[24px] border border-line bg-ink-2">
      <div className="flex overflow-x-auto border-b border-line" role="tablist" aria-label="Audit areas">
        {audit.map((x, idx) => (
          <button key={x.area} type="button" role="tab" aria-selected={idx === i} onClick={() => setI(idx)}
            className={cn("relative shrink-0 px-5 py-4 font-mono text-sm transition-colors sm:px-7", idx === i ? "text-white" : "text-muted hover:text-white")}>
            {x.area}
            {idx === i && <motion.span layoutId="bs-tab" className="absolute inset-x-0 bottom-0 h-0.5 bg-lime" />}
          </button>
        ))}
      </div>
      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[180px_1fr]" role="tabpanel">
        <div className="flex items-center gap-4 md:flex-col md:items-start">
          <p className="font-display text-6xl font-semibold tabular-nums">{score}</p>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">area health<br />(example)</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.ul key={a.area} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="divide-y divide-line">
            {a.checks.map((c) => {
              const m = meta[c.status as keyof typeof meta];
              return (
                <li key={c.name} className="flex items-center justify-between gap-4 py-3.5">
                  <span className="flex items-center gap-3 text-white/85"><m.icon aria-hidden className={cn("size-4 shrink-0", m.c)} />{c.name}</span>
                  <span className={cn("font-mono text-xs uppercase", m.c)}>{m.label}</span>
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
