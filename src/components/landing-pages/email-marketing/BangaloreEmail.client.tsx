"use client";

import { Fragment, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Mail, Zap, GitBranch, Clock, UserPlus, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const nodes = [
  { id: "a", x: 8, y: 50, label: "Signup", icon: UserPlus, tone: "lime" },
  { id: "b", x: 30, y: 50, label: "Welcome", icon: Mail, tone: "card" },
  { id: "c", x: 50, y: 50, label: "Set up?", icon: GitBranch, tone: "violet" },
  { id: "d", x: 70, y: 22, label: "Feature tip", icon: Mail, tone: "card" },
  { id: "e", x: 70, y: 78, label: "Wait 2 days", icon: Clock, tone: "card" },
  { id: "f", x: 91, y: 50, label: "Activated", icon: CheckCircle2, tone: "lime" },
];
const edges: [string, string][] = [["a", "b"], ["b", "c"], ["c", "d"], ["c", "e"], ["d", "f"], ["e", "f"]];

/** Hero flowchart: nodes connected by animated, flowing curves. Example journey. */
export function NodeCanvas() {
  const reduce = useReducedMotion();
  const get = (id: string) => nodes.find((n) => n.id === id)!;
  return (
    <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]" role="img" aria-label="Example onboarding email workflow: signup, welcome email, a branch on setup completion, then a feature tip or a wait step, ending in activation">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden>
        {edges.map(([f, t], i) => {
          const a = get(f), b = get(t);
          const mx = (a.x + b.x) / 2;
          const d = `M${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
          return (
            <g key={f + t}>
              <motion.path d={d} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" vectorEffect="non-scaling-stroke"
                initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }} />
              {!reduce && (
                <path d={d} fill="none" stroke="#B7F36B" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="[animation:bem-flow_1.2s_linear_infinite]" />
              )}
            </g>
          );
        })}
      </svg>
      <style>{`@keyframes bem-flow { to { stroke-dashoffset: -12; } }`}</style>
      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease }}
        >
          <div className={cn(
            "flex items-center gap-2 whitespace-nowrap rounded-2xl border px-2.5 py-2 text-[11px] font-medium shadow-xl sm:px-4 sm:py-3 sm:text-sm",
            n.tone === "lime" && "border-lime bg-lime text-ink",
            n.tone === "violet" && "rotate-0 border-violet bg-violet text-white",
            n.tone === "card" && "border-line bg-ink-2 text-white",
          )}>
            <n.icon aria-hidden className="size-3.5 sm:size-4" /> {n.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

type Journey = { name: string; goal: string; nodes: { t: string; d: string; branch?: boolean }[] };

/** Interactive journey builder: pick a lifecycle journey and its steps render as a connected chain. */
export function JourneyBuilder({ journeys }: { journeys: Journey[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const j = journeys[i];
  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <div className="space-y-2" role="tablist" aria-label="Lifecycle journeys">
        {journeys.map((x, idx) => (
          <button key={x.name} type="button" role="tab" aria-selected={idx === i} onClick={() => setI(idx)}
            className={cn("w-full rounded-2xl border p-4 text-left transition-all", idx === i ? "border-lime bg-lime/[0.07]" : "border-line hover:border-white/25")}>
            <span className="flex items-center gap-2 font-medium"><Zap aria-hidden className={cn("size-4", idx === i ? "text-lime" : "text-muted")} />{x.name}</span>
            <span className="mt-1 block pl-6 text-sm text-muted">Goal: {x.goal}</span>
          </button>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-ink-2 p-6 sm:p-10" role="tabpanel">
        <div aria-hidden className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:18px_18px]" />
        <AnimatePresence mode="wait">
          <motion.ol key={j.name} className="relative flex flex-col items-center" initial="h" animate="s" exit="h" variants={{ s: { transition: { staggerChildren: reduce ? 0 : 0.1 } } }}>
            {j.nodes.map((n, k) => (
              <Fragment key={n.t}>
                {k > 0 && <motion.li aria-hidden variants={{ h: { scaleY: 0 }, s: { scaleY: 1 } }} className="h-7 w-px origin-top bg-gradient-to-b from-lime to-violet-soft" />}
                <motion.li variants={{ h: { opacity: 0, y: 10 }, s: { opacity: 1, y: 0 } }} transition={{ duration: 0.35, ease }}
                  className={cn("flex w-full max-w-sm items-center justify-between gap-4 border px-5 py-3",
                    n.branch ? "rounded-full border-violet bg-violet/20" : k === 0 ? "rounded-2xl border-lime bg-lime text-ink" : "rounded-2xl border-line bg-ink")}>
                  <span className="flex items-center gap-2.5 font-medium">
                    {n.branch ? <GitBranch aria-hidden className="size-4 text-violet-soft" /> : k === 0 ? <Zap aria-hidden className="size-4" /> : <Mail aria-hidden className="size-4 text-lime" />}
                    {n.t}
                  </span>
                  <span className={cn("font-mono text-xs", k === 0 ? "text-ink/60" : "text-muted")}>{n.d}</span>
                </motion.li>
              </Fragment>
            ))}
          </motion.ol>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Step-by-step story with a progress rail that fills as you scroll. */
export function ScrollStory({ steps }: { steps: { title: string; body: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-white/10">
        <motion.div className="size-full origin-top bg-lime" style={{ scaleY }} />
      </div>
      <ol className="space-y-16">
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-16">
            <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-lime bg-ink font-mono text-sm text-lime">{i + 1}</span>
            <h3 className="text-2xl font-semibold sm:text-3xl">{s.title}</h3>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
