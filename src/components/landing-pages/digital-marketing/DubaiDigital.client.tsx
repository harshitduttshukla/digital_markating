"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type Market = { name: string; x: number; y: number; note: string };
const ease = [0.22, 1, 0.36, 1] as const;
const HUB = { x: 60, y: 50 };

/** Abstract dot-matrix "landmass", computed once at module load. */
const dots: { x: number; y: number }[] = [];
for (let y = 6; y < 96; y += 4) for (let x = 2; x < 100; x += 2.4) {
  const d = Math.hypot((x - 55) / 1.5, y - 50);
  if (d < 34 + Math.sin(x * 0.7) * 4 + Math.cos(y * 0.5) * 3) dots.push({ x, y });
}

/** Cinematic network map: Dubai hub with arcs to the markets it sells into. Abstract, not geographic. */
export function MarketArcs({ markets, interactive = false }: { markets: Market[]; interactive?: boolean }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="relative size-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="size-full" aria-hidden>
        {dots.map((d, i) => <circle key={i} cx={d.x} cy={d.y} r=".28" fill="white" fillOpacity=".12" />)}
        {markets.map((m, i) => {
          const mx = (HUB.x + m.x) / 2;
          const my = Math.min(HUB.y, m.y) - 14;
          const d = `M${HUB.x} ${HUB.y} Q ${mx} ${my} ${m.x} ${m.y}`;
          return (
            <motion.path key={m.name} d={d} fill="none" stroke={active === i ? "#B7F36B" : "#8F7BFF"} strokeOpacity={active === null || active === i ? 0.9 : 0.25} strokeWidth=".35"
              initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 + i * 0.2, duration: 1.4, ease }} />
          );
        })}
        <circle cx={HUB.x} cy={HUB.y} r="1.1" fill="#B7F36B" />
        {!reduce && <circle cx={HUB.x} cy={HUB.y} r="1.1" fill="none" stroke="#B7F36B" strokeWidth=".3" className="origin-center [animation:dd-pulse_2.4s_ease-out_infinite] [transform-box:fill-box]" />}
      </svg>
      <style>{`@keyframes dd-pulse { from { transform: scale(1); opacity: .9 } to { transform: scale(5); opacity: 0 } }`}</style>
      {markets.map((m, i) => (
        <button
          key={m.name}
          type="button"
          tabIndex={interactive ? 0 : -1}
          aria-hidden={!interactive}
          onMouseEnter={() => interactive && setActive(i)}
          onMouseLeave={() => interactive && setActive(null)}
          onFocus={() => interactive && setActive(i)}
          onBlur={() => interactive && setActive(null)}
          className={cn("absolute -translate-x-1/2 -translate-y-1/2", !interactive && "pointer-events-none")}
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
        >
          <span className={cn("block size-2 rounded-full ring-4 transition-colors", active === i ? "bg-lime ring-lime/25" : "bg-violet-soft ring-violet/20")} />
          <span className={cn("absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-[10px] transition-colors sm:text-[11px]", active === i ? "bg-lime text-ink" : "bg-ink/70 text-white/80 backdrop-blur")}>{m.name}</span>
        </button>
      ))}
      {interactive && (
        <p className="pointer-events-none absolute bottom-3 left-1/2 w-[90%] max-w-md -translate-x-1/2 text-center text-sm text-white/80" aria-live="polite">
          {active !== null ? markets[active].note : "Hover or tab through a market"}
        </p>
      )}
    </div>
  );
}

/** Layered dashboard panels that separate in depth as you scroll. Sample data. */
export function LayeredDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const back = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);
  const front = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 80]);
  const split = [
    { m: "UAE", v: 42, c: "bg-lime" },
    { m: "GCC", v: 23, c: "bg-violet" },
    { m: "India", v: 17, c: "bg-violet-soft" },
    { m: "UK & EU", v: 12, c: "bg-white/50" },
    { m: "Other", v: 6, c: "bg-white/20" },
  ];
  return (
    <div ref={ref} className="relative mx-auto h-[460px] max-w-4xl sm:h-[520px]" role="img" aria-label="Illustrative multi-market dashboard with sample data">
      <motion.div style={{ y: back }} className="absolute left-0 top-0 w-[78%] rounded-[28px] border border-line bg-ink-3/70 p-6 backdrop-blur sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-white/80">Spend by market</p>
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-0.5 font-mono text-[10px] uppercase text-amber-200">Sample data</span>
        </div>
        <div className="mt-6 flex h-4 overflow-hidden rounded-full">{split.map((s) => <span key={s.m} className={s.c} style={{ width: `${s.v}%` }} />)}</div>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {split.map((s) => (
            <li key={s.m} className="flex items-center gap-2 text-sm"><span className={`size-2.5 rounded-full ${s.c}`} />{s.m}<span className="ml-auto font-mono text-muted">{s.v}%</span></li>
          ))}
        </ul>
        <div className="mt-8 flex h-28 items-end gap-2">
          {[34, 48, 40, 62, 58, 74, 70, 86, 80, 92].map((h, i) => <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-violet/30 to-violet-soft/70" style={{ height: `${h}%` }} />)}
        </div>
      </motion.div>
      <motion.div style={{ y: front }} className="absolute bottom-0 right-0 w-[62%] rounded-[28px] border border-white/15 bg-ink-2/95 p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] backdrop-blur sm:p-8">
        <p className="text-sm text-white/80">Cost per qualified lead · by language</p>
        {[{ l: "Arabic", v: 70 }, { l: "English", v: 54 }, { l: "Hindi", v: 38 }, { l: "Russian", v: 46 }].map((r) => (
          <div key={r.l} className="mt-4">
            <div className="flex justify-between text-xs text-muted"><span>{r.l}</span><span className="font-mono">idx {r.v}</span></div>
            <div className="mt-1.5 h-2 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-lime" style={{ width: `${r.v}%` }} /></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
