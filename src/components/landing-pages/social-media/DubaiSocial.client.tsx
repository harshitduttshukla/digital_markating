"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SocialIcon } from "@/components/layout/SocialIcon";

const known = new Set(["Instagram", "YouTube", "LinkedIn", "X"]);

/** Platforms orbiting a central campaign core. Counter-rotates labels so they stay upright. */
export function PlatformOrbit({ platforms }: { platforms: string[] }) {
  const reduce = useReducedMotion();
  const spin = reduce ? {} : { animate: { rotate: 360 }, transition: { duration: 48, repeat: Infinity, ease: "linear" as const } };
  const counter = reduce ? {} : { animate: { rotate: -360 }, transition: { duration: 48, repeat: Infinity, ease: "linear" as const } };
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" role="img" aria-label={`Platforms we run campaigns on: ${platforms.join(", ")}`}>
      <div aria-hidden className="absolute inset-[8%] rounded-full border border-white/10" />
      <div aria-hidden className="absolute inset-[22%] rounded-full border border-dashed border-white/15" />
      <div className="absolute inset-[35%] grid place-items-center rounded-full bg-gradient-to-br from-lime to-violet-soft text-center shadow-[0_0_80px_-10px_rgba(183,243,107,0.5)]">
        <span className="font-display text-sm font-bold uppercase leading-tight text-ink sm:text-base">One<br />campaign</span>
      </div>
      <motion.div className="absolute inset-0" {...spin}>
        {platforms.map((p, i) => {
          const a = (i / platforms.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div key={p} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${50 + Math.cos(a) * 42}%`, top: `${50 + Math.sin(a) * 42}%` }}>
              <motion.div {...counter} className="flex items-center gap-2 rounded-full border border-white/15 bg-ink-2/95 px-3.5 py-2 text-sm shadow-xl backdrop-blur">
                {known.has(p) ? <SocialIcon name={p} className="size-4 text-lime" /> : <span aria-hidden className="size-2 rounded-full bg-lime" />}
                {p}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
