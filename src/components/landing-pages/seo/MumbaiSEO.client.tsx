"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, MapPin, TrendingUp, Star } from "lucide-react";
import { Illustrative } from "../shared";

const ease = [0.22, 1, 0.36, 1] as const;

/** Hero visual: a stacked SERP card with floating ranking chips. Illustrative only. */
export function SerpStack() {
  const reduce = useReducedMotion();
  const pop = (d: number) => (reduce ? {} : { initial: { opacity: 0, y: 20, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { delay: d, duration: 0.8, ease } });
  return (
    <div className="relative" role="img" aria-label="Illustration of a search results page with a Mumbai business climbing to the top position">
      <motion.div {...pop(0.3)} className="relative rotate-[-2deg] rounded-[28px] border border-line bg-ink-2 p-5 shadow-[0_40px_120px_-40px_rgba(112,85,247,0.6)] sm:p-6">
        <div className="flex items-center gap-3 rounded-full border border-line bg-white/[0.04] px-4 py-3">
          <Search aria-hidden className="size-4 text-muted" />
          <span className="truncate text-sm text-white/85">2 bhk ready possession powai</span>
        </div>
        <ul className="mt-5 space-y-3">
          {[
            { t: "Your project — Powai", u: "yourbrand.in › powai", you: true },
            { t: "Property portal listing", u: "portal.com › mumbai" },
            { t: "Another developer", u: "developer.in › projects" },
          ].map((r, i) => (
            <li key={r.t} className={`rounded-2xl p-3.5 ${r.you ? "border border-lime/40 bg-lime/[0.07]" : "border border-transparent"}`}>
              <p className="font-mono text-[11px] text-muted">{r.u}</p>
              <p className={`mt-1 text-[15px] font-medium ${r.you ? "text-lime" : "text-white/70"}`}>{r.t}</p>
              <div className="mt-2 space-y-1.5">
                <span className="block h-1.5 w-[88%] rounded-full bg-white/[0.07]" />
                <span className={`block h-1.5 rounded-full bg-white/[0.07] ${i === 0 ? "w-[64%]" : "w-[52%]"}`} />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end"><Illustrative /></div>
      </motion.div>

      <motion.div {...pop(0.8)} className="absolute -left-4 -top-6 sm:-left-10">
        <div className="animate-float flex items-center gap-2 rounded-full bg-lime px-4 py-2 font-mono text-sm font-medium text-ink shadow-xl">
          <TrendingUp aria-hidden className="size-4" /> #1 position
        </div>
      </motion.div>
      <motion.div {...pop(1)} className="absolute -bottom-6 right-2 sm:-right-6">
        <div className="animate-float flex items-center gap-2.5 rounded-2xl border border-line bg-ink-3/95 px-4 py-3 shadow-xl backdrop-blur [animation-delay:-2s]">
          <MapPin aria-hidden className="size-4 text-violet-soft" />
          <div>
            <p className="text-[11px] text-muted">Local pack</p>
            <p className="flex items-center gap-1 font-mono text-sm text-white">4.8 <Star aria-hidden className="size-3 fill-lime text-lime" /> · Powai</p>
          </div>
        </div>
      </motion.div>
      <motion.div {...pop(1.2)} className="absolute -right-3 top-10 hidden lg:block">
        <div className="animate-float rounded-full border border-violet/40 bg-violet/20 px-3.5 py-1.5 font-mono text-xs text-violet-soft backdrop-blur [animation-delay:-4s]">
          + locality intent
        </div>
      </motion.div>
    </div>
  );
}

/** Section visual: rotates through real-world Mumbai query patterns and shows where a well-built page can land. */
export function QueryTheatre({ queries }: { queries: { q: string; sector: string }[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % queries.length), 3200);
    return () => clearInterval(id);
  }, [queries.length, reduce]);
  const current = queries[i];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
      <div>
        <div className="flex items-center gap-4 border-b-2 border-text-dark pb-4">
          <Search aria-hidden className="size-7 shrink-0 text-violet sm:size-9" />
          <AnimatePresence mode="wait">
            <motion.p
              key={current.q}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease }}
              className="font-display text-2xl font-medium tracking-tight text-text-dark sm:text-4xl lg:text-5xl"
              aria-live="polite"
            >
              {current.q}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Example searches">
          {queries.map((q, idx) => (
            <button
              key={q.q}
              type="button"
              role="tab"
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${idx === i ? "border-text-dark bg-text-dark text-white" : "border-line-dark text-[#4a4f63] hover:border-text-dark/40"}`}
            >
              {q.sector}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-[var(--radius-card)] border border-line-dark bg-white p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-violet">What the searcher wants</p>
          <span className="rounded-full bg-paper px-2.5 py-0.5 font-mono text-[10px] uppercase text-[#5b6075]">Example</span>
        </div>
        <ul className="mt-5 space-y-3 text-[15px] text-[#3c4155]">
          <li className="flex gap-3"><span className="font-mono text-violet">01</span> A specific place, not just “Mumbai”</li>
          <li className="flex gap-3"><span className="font-mono text-violet">02</span> Proof they can trust you — reviews, credentials</li>
          <li className="flex gap-3"><span className="font-mono text-violet">03</span> A clear next step: call, visit, book</li>
        </ul>
      </div>
    </div>
  );
}
