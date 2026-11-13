"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCheck, Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const copy = {
  en: { dir: "ltr", kicker: "The Community Letter · Issue 12", title: "A quieter season by the water", body: "Construction milestones, a new park opening and three homes newly available to members — curated for you.", cta: "Read the letter", lang: "en" },
  ar: { dir: "rtl", kicker: "رسالة المجتمع · العدد ١٢", title: "موسم أهدأ على الواجهة المائية", body: "مراحل الإنشاء، افتتاح حديقة جديدة، وثلاثة منازل متاحة حديثاً للأعضاء — مختارة لك.", cta: "اقرأ الرسالة", lang: "ar" },
} as const;

/** Hero newsletter preview with an English / Arabic toggle. Example content. */
export function NewsletterHero() {
  const [l, setL] = useState<"en" | "ar">("en");
  const reduce = useReducedMotion();
  const c = copy[l];
  return (
    <div className="relative">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease }}
        className="relative overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-b from-ink-3 to-ink-2 p-3 shadow-[0_60px_140px_-50px_rgba(112,85,247,0.7)]"
      >
        <div className="flex items-center justify-between px-3 py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Preview · example</span>
          <div className="flex rounded-full border border-line p-0.5 text-xs" role="group" aria-label="Preview language">
            {(["en", "ar"] as const).map((k) => (
              <button key={k} type="button" aria-pressed={l === k} onClick={() => setL(k)}
                className={cn("rounded-full px-3 py-1 transition-colors", l === k ? "bg-lime text-ink" : "text-white/70 hover:text-white")}>
                {k === "en" ? "English" : "العربية"}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[20px] bg-paper p-6 text-text-dark sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={l} dir={c.dir} lang={c.lang} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold tracking-tight">Your brand</span>
                <span className="h-px w-16 bg-text-dark/20" />
              </div>
              <div className="mt-6 aspect-[16/8] rounded-2xl bg-gradient-to-br from-violet via-violet-soft to-lime/60" />
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-violet">{c.kicker}</p>
              <p className="mt-2 font-display text-2xl font-medium leading-tight sm:text-3xl">{c.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#4a4f63]">{c.body}</p>
              <span className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-xs font-medium text-white">{c.cta}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div initial={reduce ? false : { opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8, ease }}
        className="absolute -left-4 bottom-16 hidden sm:block lg:-left-12">
        <div className="animate-float flex items-center gap-3 rounded-2xl border border-line bg-ink-2/95 px-4 py-3 shadow-2xl backdrop-blur">
          <CheckCheck aria-hidden className="size-5 text-lime" />
          <div><p className="text-xs text-muted">Delivered in</p><p className="text-sm">Recipient’s preferred language</p></div>
        </div>
      </motion.div>
      <motion.div initial={reduce ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8, ease }}
        className="absolute -right-3 -top-5 hidden sm:block">
        <div className="animate-float grid size-12 place-items-center rounded-2xl bg-lime text-ink shadow-xl [animation-delay:-3s]"><Languages aria-hidden className="size-5" /></div>
      </motion.div>
    </div>
  );
}

/** Horizontal automation pipeline with a pulse that travels across the stages. */
export function Pipeline({ steps }: { steps: { step: string; detail: string }[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <div aria-hidden className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-white/15 md:block">
        {!reduce && (
          <motion.span className="absolute -top-1 size-2.5 rounded-full bg-lime shadow-[0_0_16px_4px_rgba(183,243,107,0.6)]"
            animate={{ left: ["0%", "100%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }} />
        )}
      </div>
      <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
        {steps.map((s, i) => (
          <li key={s.step} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
            <span className="relative grid size-14 shrink-0 place-items-center rounded-full border border-white/20 bg-ink-2 font-display text-lg">{i + 1}</span>
            <div>
              <h3 className="text-xl font-medium md:mt-5">{s.step}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
