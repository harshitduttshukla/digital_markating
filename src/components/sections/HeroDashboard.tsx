"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, MousePointerClick, Target, Users } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

/** Illustrative sample data — not client results. */
const traffic = [22, 28, 26, 34, 38, 36, 45, 52, 50, 61, 68, 76];
const leads = [12, 18, 15, 24, 22, 30, 34];
const campaigns = [
  { name: "Search — Brand", v: 82 },
  { name: "Search — Generic", v: 64 },
  { name: "Remarketing", v: 47 },
];

const toPath = (data: number[], w: number, h: number) => {
  const max = Math.max(...data) * 1.1;
  const step = w / (data.length - 1);
  return data.map((d, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)} ${(h - (d / max) * h).toFixed(1)}`).join(" ");
};

export function HeroDashboard() {
  const reduce = useReducedMotion();
  const W = 420;
  const H = 130;
  const line = toPath(traffic, W, H);

  const enter = (delay: number) =>
    reduce ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <div className="relative mx-auto w-full max-w-[600px]" aria-label="Illustrative marketing analytics dashboard using sample data" role="img">
      {/* Main panel */}
      <motion.div
        {...enter(0.35)}
        className="relative rounded-[28px] border border-line bg-gradient-to-b from-ink-3/90 to-ink-2/90 p-4 shadow-[0_40px_120px_-40px_rgba(112,85,247,0.55)] backdrop-blur-xl sm:p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
            <span className="size-2.5 rounded-full bg-white/15" />
          </div>
          <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200">
            Sample data
          </span>
        </div>

        {/* KPI row */}
        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { icon: Users, label: "Sessions", v: 48.2, s: "k", d: 1 },
            { icon: Target, label: "Conv. rate", v: 4.6, s: "%", d: 1 },
            { icon: MousePointerClick, label: "Leads", v: 312, s: "", d: 0 },
          ].map((k) => (
            <div key={k.label} className="rounded-2xl border border-line bg-white/[0.03] p-3">
              <div className="flex items-center gap-1.5 text-[11px] text-muted">
                <k.icon aria-hidden className="size-3.5" /> {k.label}
              </div>
              <AnimatedCounter value={k.v} suffix={k.s} decimals={k.d} className="mt-1.5 block font-mono text-lg text-white sm:text-2xl" />
            </div>
          ))}
        </div>

        {/* Traffic chart */}
        <div className="mt-3 rounded-2xl border border-line bg-white/[0.02] p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/80">Organic traffic</span>
            <span className="font-mono text-lime">▲ trend</span>
          </div>
          <svg viewBox={`0 -6 ${W} ${H + 12}`} className="mt-3 h-24 w-full sm:h-32" preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B7F36B" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#B7F36B" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((y) => (
              <line key={y} x1="0" x2={W} y1={H * y} y2={H * y} stroke="white" strokeOpacity="0.06" />
            ))}
            <motion.path
              d={`${line} L${W} ${H} L0 ${H}Z`}
              fill="url(#hero-area)"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            />
            <motion.path
              d={line}
              fill="none"
              stroke="#B7F36B"
              strokeWidth="2.5"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 1.6, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Bottom row */}
        <div className="mt-3 grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-2xl border border-line bg-white/[0.02] p-4">
            <p className="text-xs text-white/80">Campaign performance</p>
            <ul className="mt-3 space-y-2.5">
              {campaigns.map((c, i) => (
                <li key={c.name}>
                  <div className="flex justify-between text-[10px] text-muted sm:text-[11px]">
                    <span>{c.name}</span>
                    <span className="font-mono">{c.v}</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet to-violet-soft"
                      initial={reduce ? false : { width: 0 }}
                      animate={{ width: `${c.v}%` }}
                      transition={{ delay: 1 + i * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 rounded-2xl border border-line bg-white/[0.02] p-4">
            <p className="text-xs text-white/80">Leads / wk</p>
            <div className="mt-3 flex h-[72px] items-end gap-1.5">
              {leads.map((l, i) => (
                <motion.div
                  key={i}
                  className={i === leads.length - 1 ? "flex-1 rounded-md bg-lime" : "flex-1 rounded-md bg-violet/50"}
                  initial={reduce ? false : { height: 0 }}
                  animate={{ height: `${(l / 34) * 100}%` }}
                  transition={{ delay: 1.1 + i * 0.07, duration: 0.6, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div {...enter(0.9)} className="absolute -left-3 top-24 hidden sm:block lg:-left-14">
        <div className="animate-float rounded-2xl border border-line bg-ink-2/90 p-3.5 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-lime text-ink"><Search aria-hidden className="size-4" /></span>
            <div>
              <p className="text-[11px] text-muted">SEO visibility</p>
              <p className="font-mono text-sm text-white">Top 3 · 42 kw</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div {...enter(1.1)} className="absolute -bottom-6 -right-2 hidden sm:block lg:-right-10">
        <div className="animate-float rounded-2xl border border-line bg-ink-2/90 p-3.5 shadow-xl backdrop-blur-xl [animation-delay:-3s]">
          <p className="text-[11px] text-muted">Conversion rate</p>
          <div className="mt-1 flex items-center gap-3">
            <svg viewBox="0 0 36 36" className="size-10 -rotate-90" aria-hidden>
              <circle cx="18" cy="18" r="15" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="4" />
              <motion.circle
                cx="18" cy="18" r="15" fill="none" stroke="#7055F7" strokeWidth="4" strokeLinecap="round"
                initial={reduce ? false : { pathLength: 0 }}
                animate={{ pathLength: 0.62 }}
                transition={{ delay: 1.5, duration: 1.2 }}
              />
            </svg>
            <p className="font-mono text-lg text-white">+0.8pt</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
