"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";

const queries = [
  { q: "waterfront apartments for investors in Dubai", lang: "en", dir: "ltr" },
  { q: "شقق فاخرة للاستثمار في دبي", lang: "ar", dir: "rtl" },
  { q: "boutique hotel near Dubai Marina", lang: "en", dir: "ltr" },
  { q: "تأسيس شركة في دبي", lang: "ar", dir: "rtl" },
] as const;

/** Arch-framed bilingual search line that alternates English and Arabic queries. */
export function ArchSearch() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % queries.length), 3400);
    return () => clearInterval(id);
  }, [reduce]);
  const q = queries[i];
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[3/4] overflow-hidden rounded-t-full border border-white/15 bg-gradient-to-b from-violet/25 via-ink-2 to-ink"
      >
        <div aria-hidden className="absolute inset-3 rounded-t-full border border-white/[0.07]" />
        <div aria-hidden className="absolute left-1/2 top-[18%] size-40 -translate-x-1/2 rounded-full bg-lime/15 blur-3xl" />
        {/* Skyline hairlines */}
        <svg aria-hidden viewBox="0 0 300 120" className="absolute inset-x-0 bottom-0 w-full text-white/15" preserveAspectRatio="none">
          <path d="M0 120 V92 H30 V70 H44 V92 H70 V58 H82 V40 L88 8 L94 40 V58 H106 V92 H130 V76 H150 V60 H162 V92 H190 V66 H210 V50 H222 V92 H250 V80 H270 V92 H300 V120Z" fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth=".6" />
        </svg>
        <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 sm:inset-x-10">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Search · بحث</p>
          <div className="mt-4 flex min-h-14 items-center gap-3 rounded-full border border-white/20 bg-ink/70 px-5 py-3 backdrop-blur" aria-live="polite">
            <Search aria-hidden className="size-4 shrink-0 text-lime" />
            <AnimatePresence mode="wait">
              <motion.span
                key={q.q}
                lang={q.lang}
                dir={q.dir}
                initial={reduce ? false : { opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.5 }}
                className="flex-1 text-sm font-light text-white/90"
              >
                {q.q}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="mt-5 flex justify-center gap-2" aria-hidden>
            {queries.map((_, k) => <span key={k} className={`h-px transition-all duration-700 ${k === i ? "w-8 bg-lime" : "w-3 bg-white/25"}`} />)}
          </div>
        </div>
      </motion.div>
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Example queries</p>
    </div>
  );
}
