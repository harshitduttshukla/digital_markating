"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export const processSteps = [
  { n: "01", title: "Discover", text: "Understand the business, target audience, competitors, and objectives." },
  { n: "02", title: "Strategize", text: "Build a customized SEO and performance marketing roadmap." },
  { n: "03", title: "Execute", text: "Implement campaigns, optimize websites, and launch marketing initiatives." },
  { n: "04", title: "Measure", text: "Monitor traffic, leads, conversions, and revenue performance." },
  { n: "05", title: "Scale", text: "Improve campaigns and scale successful growth channels." },
];

export function ProcessSection() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="section-y relative" aria-labelledby="process-heading">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="How we work"
            title={<span id="process-heading">From Strategy to Sustainable Growth.</span>}
            description="A clear, repeatable process — so you always know what's happening, what's next, and why."
          />
        </div>

        <ol ref={ref} className="relative">
          {/* Track + animated progress line */}
          <span aria-hidden className="absolute bottom-6 left-[27px] top-6 w-px bg-line" />
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : scaleY }}
            className="absolute bottom-6 left-[27px] top-6 w-px origin-top bg-gradient-to-b from-lime via-violet to-violet"
          />
          {processSteps.map((s, i) => (
            <motion.li
              key={s.n}
              className="relative flex gap-6 pb-12 last:pb-0"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className={cn(
                  "relative z-10 grid size-14 shrink-0 place-items-center rounded-full border font-mono text-sm",
                  i === processSteps.length - 1 ? "border-lime bg-lime text-ink" : "border-line bg-ink-2 text-lime",
                )}
              >
                {s.n}
              </span>
              <div className="min-w-0 flex-1 rounded-[var(--radius-card)] border border-line bg-ink-2 p-6 transition-colors hover:border-violet/40 sm:p-7">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
