"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, Play } from "lucide-react";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const tiles = [
  { bg: "from-violet to-violet-soft", label: "Monsoon menu", reel: true },
  { bg: "from-lime to-[#d9ff9e]", label: "Festive drop", dark: true },
  { bg: "from-ink-3 to-violet/60", label: "Site visit", reel: true },
  { bg: "from-[#2a2f45] to-ink-3", label: "Behind the pass" },
  { bg: "from-violet-soft to-lime/70", label: "Customer day", dark: true },
  { bg: "from-violet/80 to-ink-3", label: "Founder note", reel: true },
];

/** Hero: phone with a profile grid, surrounded by floating post cards. Illustrative layout, no real accounts. */
export function PhoneFeed() {
  const reduce = useReducedMotion();
  const enter = (d: number, r = 0) => (reduce ? { style: { rotate: r } } : { initial: { opacity: 0, y: 30, rotate: 0 }, animate: { opacity: 1, y: 0, rotate: r }, transition: { delay: d, duration: 0.9, ease } });
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[600px]" role="img" aria-label="Illustration of a social media profile grid with reels and posts">
      {/* Phone */}
      <motion.div {...enter(0.2)} className="absolute left-1/2 top-0 z-10 w-[250px] -translate-x-1/2 rounded-[40px] border-[6px] border-ink-3 bg-ink-2 p-3 shadow-[0_50px_120px_-30px_rgba(112,85,247,0.7)] sm:w-[280px]">
        <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-ink-3" />
        <div className="flex items-center gap-3 px-1">
          <span className="size-12 rounded-full bg-gradient-to-br from-lime to-violet p-[2px]"><span className="block size-full rounded-full bg-ink-2" /></span>
          <div className="grid flex-1 grid-cols-3 text-center">
            {["Posts", "Reach", "Saves"].map((l) => (
              <div key={l}><span className="block h-2.5 w-6 mx-auto rounded bg-white/25" /><span className="mt-1 block text-[9px] text-muted">{l}</span></div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex gap-1.5 px-1">
          {[0, 1, 2, 3].map((i) => <span key={i} className="size-9 rounded-full border border-line bg-white/[0.04]" />)}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-[3px] overflow-hidden rounded-xl">
          {tiles.concat(tiles.slice(0, 3)).map((t, i) => (
            <div key={i} className={`relative aspect-[4/5] bg-gradient-to-br ${t.bg}`}>
              {t.reel && <Play aria-hidden className="absolute right-1 top-1 size-2.5 fill-white text-white" />}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating posts */}
      <motion.div {...enter(0.7, -8)} className="absolute left-0 top-16 w-40 sm:w-48">
        <PostCard t={tiles[1]} />
      </motion.div>
      <motion.div {...enter(0.9, 7)} className="absolute right-0 top-40 z-20 w-36 sm:w-44">
        <PostCard t={tiles[0]} reel />
      </motion.div>
      <motion.div {...enter(1.1, 4)} className="absolute bottom-6 left-4 z-20 sm:left-8">
        <div className="animate-float flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-xl">
          <Heart aria-hidden className="size-4 fill-[#ff4d6d] text-[#ff4d6d]" /> Saved by your audience
        </div>
      </motion.div>
      <motion.div {...enter(1.25, -5)} className="absolute bottom-24 right-2 z-20">
        <div className="animate-float rounded-2xl bg-lime px-3.5 py-2 font-mono text-xs font-semibold text-ink shadow-xl [animation-delay:-3s]">#reelsthatsell</div>
      </motion.div>
    </div>
  );
}

function PostCard({ t, reel }: { t: (typeof tiles)[number]; reel?: boolean }) {
  return (
    <div className="animate-float overflow-hidden rounded-2xl border border-line bg-ink-2 shadow-2xl">
      <div className={`relative flex aspect-[4/5] items-end bg-gradient-to-br p-3 ${t.bg}`}>
        {reel && <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/25 backdrop-blur"><Play aria-hidden className="size-4 fill-white text-white" /></span>}
        <span className={cn("font-display text-sm font-semibold", t.dark ? "text-ink" : "text-white")}>{t.label}</span>
      </div>
      <div className="flex items-center gap-2.5 px-3 py-2 text-white/70">
        <Heart aria-hidden className="size-3.5" /><MessageCircle aria-hidden className="size-3.5" /><Send aria-hidden className="size-3.5" />
        <Bookmark aria-hidden className="ml-auto size-3.5" />
      </div>
    </div>
  );
}

type Platform = { name: string; role: string; body: string; cadence: string };
const iconName: Record<string, string> = { Instagram: "Instagram", YouTube: "YouTube", LinkedIn: "LinkedIn" };

/** Platform switcher: large tabs with a role statement and cadence. */
export function PlatformSwitcher({ platforms }: { platforms: Platform[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const p = platforms[i];
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <ul className="space-y-1" role="tablist" aria-label="Platforms">
        {platforms.map((x, idx) => (
          <li key={x.name}>
            <button type="button" role="tab" aria-selected={idx === i} onClick={() => setI(idx)} onMouseEnter={() => setI(idx)}
              className={cn("flex w-full items-baseline justify-between gap-4 border-b py-4 text-left font-display text-4xl font-semibold tracking-tight transition-colors sm:text-6xl", idx === i ? "border-lime text-white" : "border-line text-white/25 hover:text-white/60")}>
              {x.name}
              <span className={cn("font-mono text-xs font-normal tracking-normal", idx === i ? "text-lime" : "text-transparent")}>{x.role}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="relative min-h-[300px] overflow-hidden rounded-[32px] bg-gradient-to-br from-violet via-violet/80 to-ink-3 p-8 sm:p-10" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div key={p.name} initial={reduce ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4, ease }}>
            <span className="grid size-14 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
              {iconName[p.name] ? <SocialIcon name={iconName[p.name]} className="size-6" /> : <span className="font-mono text-sm">Ads</span>}
            </span>
            <p className="mt-8 text-2xl font-medium leading-snug text-white">{p.body}</p>
            <p className="mt-8 inline-flex rounded-full bg-ink/40 px-4 py-2 font-mono text-xs text-lime">{p.cadence}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
