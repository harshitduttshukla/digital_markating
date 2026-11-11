"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { HeroDashboard } from "./HeroDashboard";

const words = ["Turn", "Your", "Digital", "Presence", "Into", "a"];

export function Hero() {
  const reduce = useReducedMotion();
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: "0.4em" },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg noise-mask absolute inset-0" />
        <div className="animate-drift absolute -left-[10%] -top-[20%] size-[60vw] max-w-[820px] rounded-full bg-violet/30 blur-[120px]" />
        <div className="animate-drift absolute -right-[10%] top-[30%] size-[40vw] max-w-[520px] rounded-full bg-lime/10 blur-[120px] [animation-delay:-9s]" />
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <Eyebrow>Digital growth partner for ambitious businesses</Eyebrow>
          </motion.div>

          <motion.h1
            className="mt-6 text-[2.75rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.4rem]"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
          >
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span className="inline-block" variants={item}>{w}&nbsp;</motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span className="text-gradient inline-block" variants={item}>Growth Engine.</motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            We help ambitious Indian businesses grow through strategic SEO, performance marketing, and data-driven digital experiences.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <ButtonLink href="/contact?intent=audit" size="lg" arrow>Get a Free Growth Audit</ButtonLink>
            <ButtonLink href="/case-studies" size="lg" variant="outline">Explore Our Work</ButtonLink>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-white/55"
            aria-label="Core services"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {["SEO", "Google Ads", "Performance Marketing", "CRO"].map((s, i) => (
              <li key={s} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden className="h-3 w-px bg-white/20" />}
                {s}
              </li>
            ))}
          </motion.ul>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
