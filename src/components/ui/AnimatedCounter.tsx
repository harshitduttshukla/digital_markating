"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/** Counts up to `value` once in view. Use for illustrative/demo figures only unless verified. */
export function AnimatedCounter({ value, suffix = "", prefix = "", decimals = 0, className }: { value: number; suffix?: string; prefix?: string; decimals?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    const fmt = (v: number) => `${prefix}${v.toFixed(decimals)}${suffix}`;
    if (reduce) {
      node.textContent = fmt(value);
      return;
    }
    const controls = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => (node.textContent = fmt(v)) });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, decimals, reduce]);

  return <span ref={ref} className={className}>{`${prefix}${(0).toFixed(decimals)}${suffix}`}</span>;
}
