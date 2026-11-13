"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  y?: number;
  /** Render as a list item (for use directly inside <ul>/<ol>). */
  as?: "div" | "li";
}

/** Fades + lifts its children into view once. Respects reduced motion. */
export function Reveal({ delay = 0, y = 24, as = "div", children, ...rest }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = (as === "li" ? motion.li : motion.div) as typeof motion.div;
  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
