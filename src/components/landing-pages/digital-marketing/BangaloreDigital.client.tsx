"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** A horizontal rule that draws itself from left to right as it enters view. */
export function Rule({ className, delay = 0 }: { className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={cn("block h-px origin-left bg-text-dark", className)}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
    />
  );
}

/** Headline lines that slide up from a mask, one after another. */
export function MaskedLines({ lines, className, kicker }: { lines: string[]; className?: string; kicker?: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <h1 className={className}>
      {kicker}
      {lines.map((l, i) => (
        <span key={l} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
