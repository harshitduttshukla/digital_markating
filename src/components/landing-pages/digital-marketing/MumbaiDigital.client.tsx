"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LayoutDashboard, Search, Megaphone, Globe2, BarChart3, Wallet, Target, Users2, ArrowRight } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";
import { Illustrative } from "../shared";

const ease = [0.22, 1, 0.36, 1] as const;
const series = [18, 22, 21, 27, 30, 29, 36, 41, 39, 47, 53, 58];
const spend = [30, 32, 31, 33, 34, 33, 35, 36, 35, 36, 37, 37];

const toPath = (d: number[], w: number, h: number, max: number) =>
  d.map((v, i) => `${i ? "L" : "M"}${((i * w) / (d.length - 1)).toFixed(1)} ${(h - (v / max) * h).toFixed(1)}`).join(" ");

/** Wide hero dashboard with a sidebar, KPI row, dual-line chart and layered floating cards. Sample data. */
export function GrowthDashboard() {
  const reduce = useReducedMotion();
  const W = 640, H = 180;
  const rev = toPath(series, W, H, 64);
  const sp = toPath(spend, W, H, 64);
  const rise = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.9, ease } });

  return (
    <div className="relative mx-auto max-w-[1080px]" role="img" aria-label="Illustrative full-funnel marketing dashboard using sample data">
      <motion.div {...rise(0.4)} className="overflow-hidden rounded-[28px] border border-line bg-ink-2/90 shadow-[0_60px_160px_-50px_rgba(112,85,247,0.7)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-white/15" /><span className="size-2.5 rounded-full bg-white/15" /><span className="size-2.5 rounded-full bg-white/15" /></div>
          <span className="font-mono text-[11px] text-muted">growth.tesoaplab / mumbai</span>
          <Illustrative label="Sample data" />
        </div>
        <div className="grid md:grid-cols-[200px_1fr]">
          <aside className="hidden border-r border-line p-4 md:block">
            {[
              { i: LayoutDashboard, l: "Overview", a: true },
              { i: Search, l: "Search" },
              { i: Megaphone, l: "Paid social" },
              { i: Globe2, l: "SEO" },
              { i: BarChart3, l: "Attribution" },
            ].map((n) => (
              <div key={n.l} className={cn("mb-1 flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm", n.a ? "bg-white/[0.06] text-white" : "text-muted")}>
                <n.i aria-hidden className="size-4" /> {n.l}
              </div>
            ))}
          </aside>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                { i: Users2, l: "Qualified leads", v: 486, s: "", d: 0 },
                { i: Target, l: "Cost / lead", v: 742, s: "", p: "₹", d: 0 },
                { i: Wallet, l: "Pipeline", v: 1.8, s: " cr", p: "₹", d: 1 },
                { i: BarChart3, l: "Blended ROAS", v: 4.2, s: "x", d: 1 },
              ].map((k) => (
                <div key={k.l} className="rounded-2xl border border-line bg-white/[0.03] p-3.5">
                  <p className="flex items-center gap-1.5 text-[11px] text-muted"><k.i aria-hidden className="size-3.5" /> {k.l}</p>
                  <AnimatedCounter value={k.v} prefix={k.p ?? ""} suffix={k.s} decimals={k.d} className="mt-1.5 block font-mono text-xl text-white sm:text-2xl" />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl border border-line bg-white/[0.02] p-4">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="text-white/80">Revenue vs spend · 12 weeks</span>
                <span className="flex items-center gap-1.5 text-muted"><span className="h-0.5 w-4 rounded bg-lime" /> Revenue</span>
                <span className="flex items-center gap-1.5 text-muted"><span className="h-0.5 w-4 rounded bg-violet-soft" /> Spend</span>
              </div>
              <svg viewBox={`0 -8 ${W} ${H + 16}`} className="mt-3 h-36 w-full sm:h-48" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="mdm-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#B7F36B" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#B7F36B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0.25, 0.5, 0.75].map((y) => <line key={y} x1="0" x2={W} y1={H * y} y2={H * y} stroke="white" strokeOpacity=".06" />)}
                <motion.path d={`${rev} L${W} ${H} L0 ${H}Z`} fill="url(#mdm-area)" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.8 }} />
                <motion.path d={sp} fill="none" stroke="#8F7BFF" strokeWidth="2" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.4 }} />
                <motion.path d={rev} fill="none" stroke="#B7F36B" strokeWidth="2.5" vectorEffect="non-scaling-stroke" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 1.6, ease: "easeInOut" }} />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Layered floating cards */}
      <motion.div {...rise(1.1)} className="absolute -left-6 top-1/3 hidden lg:block xl:-left-16">
        <div className="animate-float w-56 rounded-2xl border border-line bg-ink-3/95 p-4 shadow-2xl backdrop-blur">
          <p className="text-[11px] text-muted">Channel mix</p>
          <div className="mt-3 flex h-2.5 overflow-hidden rounded-full">
            <span className="w-[38%] bg-lime" /><span className="w-[27%] bg-violet" /><span className="w-[20%] bg-violet-soft" /><span className="w-[15%] bg-white/30" />
          </div>
          <p className="mt-2.5 font-mono text-[11px] text-white/70">Search · Meta · SEO · Email</p>
        </div>
      </motion.div>
      <motion.div {...rise(1.3)} className="absolute -right-4 -top-8 hidden md:block xl:-right-12">
        <div className="animate-float rounded-2xl bg-lime px-4 py-3 text-ink shadow-2xl [animation-delay:-3s]">
          <p className="text-[11px] font-medium opacity-70">Wasted spend found</p>
          <p className="font-mono text-xl font-semibold">−18% CPL</p>
        </div>
      </motion.div>
    </div>
  );
}

type Sector = { name: string; insight: string; mix: { channel: string; v: number }[]; focus: string };

/** Interactive sector switcher: shows a suggested starting channel mix per Mumbai industry. */
export function SectorExplorer({ sectors }: { sectors: Sector[] }) {
  const [active, setActive] = useState(0);
  const s = sectors[active];
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist" aria-label="Industries">
        {sectors.map((x, i) => (
          <button
            key={x.name}
            role="tab"
            type="button"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={cn(
              "flex shrink-0 items-center justify-between gap-4 rounded-2xl border px-5 py-4 text-left transition-all",
              i === active ? "border-lime/50 bg-lime/[0.08] text-white" : "border-line text-muted hover:border-white/25 hover:text-white",
            )}
          >
            <span className="font-medium">{x.name}</span>
            <ArrowRight aria-hidden className={cn("hidden size-4 transition-transform lg:block", i === active && "translate-x-1 text-lime")} />
          </button>
        ))}
      </div>
      <div className="rounded-[28px] border border-line bg-ink-2 p-6 sm:p-8" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div key={s.name} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold">{s.name}</h3>
              <Illustrative label="Starting mix — varies by brief" />
            </div>
            <p className="mt-3 max-w-2xl text-muted">{s.insight}</p>
            <ul className="mt-8 space-y-5">
              {s.mix.map((m, i) => (
                <li key={m.channel}>
                  <div className="flex justify-between text-sm"><span className="text-white/85">{m.channel}</span><span className="font-mono text-muted">{m.v}%</span></div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/[0.05]">
                    <motion.div
                      className={cn("h-full rounded-full", i === 0 ? "bg-lime" : "bg-gradient-to-r from-violet to-violet-soft")}
                      initial={reduce ? false : { width: 0 }}
                      animate={{ width: `${m.v * 2.2}%` }}
                      transition={{ delay: i * 0.08, duration: 0.8, ease }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-line pt-5 text-sm text-muted">North-star metric: <span className="text-lime">{s.focus}</span></p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

type Blueprint = { name: string; sector: string; steps: string[]; kpi: string };

/** Campaign showcase: pick a blueprint and watch the funnel steps light up. */
export function BlueprintShowcase({ blueprints }: { blueprints: Blueprint[] }) {
  const [active, setActive] = useState(0);
  const b = blueprints[active];
  const reduce = useReducedMotion();
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Campaign blueprints">
        {blueprints.map((x, i) => (
          <button key={x.name} type="button" role="tab" aria-selected={i === active} onClick={() => setActive(i)}
            className={cn("rounded-full px-5 py-2.5 text-sm font-medium transition-colors", i === active ? "bg-white text-ink" : "border border-line text-white/70 hover:text-white")}>
            {x.name} <span className="ml-1 opacity-60">· {x.sector}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ol key={b.name} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" initial="h" animate="s" exit="h" variants={{ s: { transition: { staggerChildren: reduce ? 0 : 0.09 } } }}>
          {b.steps.map((st, i) => (
            <motion.li key={st} variants={{ h: { opacity: 0, y: 16 }, s: { opacity: 1, y: 0 } }} transition={{ duration: 0.45, ease }}
              className="relative rounded-2xl border border-line bg-gradient-to-b from-ink-3 to-ink-2 p-5">
              <span className="font-mono text-xs text-lime">Step {i + 1}</span>
              <p className="mt-6 font-medium">{st}</p>
              <div className="mt-4 h-1 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-violet" style={{ width: `${100 - i * 16}%` }} /></div>
            </motion.li>
          ))}
        </motion.ol>
      </AnimatePresence>
      <p className="mt-6 font-mono text-sm text-muted">Optimised for → <span className="text-white">{b.kpi}</span></p>
    </div>
  );
}
