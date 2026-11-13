"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ThumbsUp, Repeat2, MessageSquare, Hand } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Hero: stacked headline words with a staggered slam-in. */
export function SlamWords({ words, kicker }: { words: string[]; kicker?: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <h1 className="font-display text-[4.2rem] font-bold uppercase leading-[0.82] tracking-[-0.05em] sm:text-[8rem] lg:text-[11rem]">
      {kicker}
      {words.map((w, i) => (
        <motion.span
          key={w}
          className={`block ${i % 2 ? "text-lime" : "text-white"} ${i === 1 ? "sm:pl-[12%]" : i === 3 ? "sm:pl-[6%]" : ""}`}
          initial={reduce ? false : { opacity: 0, y: 80, rotate: i % 2 ? 3 : -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease }}
        >
          {w}
        </motion.span>
      ))}
    </h1>
  );
}

/** Layered LinkedIn-style post cards that drift apart on scroll. Illustrative. */
export function LayeredPosts() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  return (
    <div ref={ref} className="relative h-[380px] w-full sm:h-[440px]" role="img" aria-label="Illustrative stack of founder and product social posts">
      <motion.div style={{ y: y1 }} className="absolute left-0 top-0 w-[78%] -rotate-6">
        <Post accent="bg-lime" title="Why we said no to our biggest deal" kind="Founder post" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-0 right-0 w-[78%] rotate-[5deg]">
        <Post accent="bg-ink" title="Now live: the integration you asked for" kind="Launch" light />
      </motion.div>
      <span className="absolute left-[44%] top-[44%] z-10 rotate-12 rounded-full bg-white px-4 py-2 font-display text-sm font-bold uppercase text-violet shadow-xl">Sample</span>
    </div>
  );
}

function Post({ accent, title, kind, light }: { accent: string; title: string; kind: string; light?: boolean }) {
  return (
    <div className={`rounded-3xl p-5 shadow-2xl ${light ? "bg-lime text-ink" : "bg-white text-ink"}`}>
      <div className="flex items-center gap-3">
        <span className={`size-10 rounded-full ${accent}`} />
        <div className="flex-1">
          <span className="block h-2.5 w-24 rounded bg-ink/80" />
          <span className="mt-1.5 block h-2 w-16 rounded bg-ink/25" />
        </div>
        <span className="rounded-full bg-ink/10 px-2.5 py-1 font-mono text-[10px] uppercase">{kind}</span>
      </div>
      <p className="mt-4 font-display text-xl font-bold leading-tight sm:text-2xl">{title}</p>
      <div className="mt-4 aspect-[16/8] rounded-2xl bg-gradient-to-br from-violet to-violet-soft" />
      <div className="mt-4 flex gap-5 text-ink/60"><ThumbsUp aria-hidden className="size-4" /><MessageSquare aria-hidden className="size-4" /><Repeat2 aria-hidden className="size-4" /></div>
    </div>
  );
}

const deckStyles = ["bg-lime text-ink", "bg-ink-3 text-white border border-white/10", "bg-violet text-white", "bg-ink-2 text-white border border-white/10", "bg-violet/70 text-white", "bg-ink-3 text-white border border-lime/30"];

/** Draggable deck of content-format cards. */
export function DragDeck({ cards }: { cards: { kind: string; line: string }[] }) {
  const wrap = useRef<HTMLDivElement>(null);
  return (
    <div ref={wrap} className="overflow-hidden">
      <p className="container-x mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted"><Hand aria-hidden className="size-4" /> Drag to browse</p>
      <motion.ul drag="x" dragConstraints={wrap} dragElastic={0.12} className="flex w-max cursor-grab gap-5 px-4 active:cursor-grabbing sm:px-[max(1.5rem,calc((100vw-1240px)/2+2rem))]">
        {cards.map((c, i) => (
          <motion.li
            key={c.line}
            whileHover={{ y: -10, rotate: i % 2 ? 2 : -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex h-[340px] w-[260px] shrink-0 select-none flex-col justify-between rounded-[28px] p-7 sm:h-[380px] sm:w-[300px] ${deckStyles[i % deckStyles.length]}`}
          >
            <span className="font-mono text-xs uppercase tracking-wider opacity-70">{String(i + 1).padStart(2, "0")} / {c.kind}</span>
            <p className="font-display text-3xl font-bold leading-[1.02] tracking-tight">{c.line}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
