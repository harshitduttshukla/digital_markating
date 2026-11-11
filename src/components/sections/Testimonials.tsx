"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoBadge } from "@/components/ui/DemoBadge";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const t = testimonials[index];
  const total = testimonials.length;

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setIndex((i) => (i + d + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go, paused, reduce]);

  const initials = t.name.split(" ").map((p) => p[0]).join("").slice(0, 2);

  return (
    <section className="section-y relative overflow-hidden bg-ink-2" aria-labelledby="testimonials-heading">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Testimonials" title={<span id="testimonials-heading">What Our Partners Say.</span>} />
          {t.isSample && <DemoBadge label="Sample content — not real reviews" />}
        </div>

        <div
          className="relative mt-14 rounded-[28px] border border-line bg-ink p-7 sm:p-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Quote aria-hidden className="size-10 text-violet" />
          <div className="relative mt-6 min-h-[260px] sm:min-h-[220px]" aria-live="polite">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={t.id}
                custom={dir}
                initial={reduce ? false : { opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
              >
                <blockquote className="font-display text-xl leading-snug font-medium text-white sm:text-3xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  {t.photo ? (
                    <Image src={t.photo} alt={`Photo of ${t.name}`} width={56} height={56} className="size-14 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-violet to-violet-soft font-display text-lg font-semibold">
                      {initials}
                    </span>
                  )}
                  <span>
                    <span className="block font-semibold text-white">{t.name}</span>
                    <span className="block text-sm text-muted">{t.designation}, {t.company}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
            <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((x, i) => (
                <button
                  key={x.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  className="grid h-6 place-items-center"
                >
                  <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-lime" : "w-3 bg-white/20"}`} />
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-white/40 hover:bg-white/5">
                <ArrowLeft aria-hidden className="size-4" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="grid size-11 place-items-center rounded-full bg-lime text-ink transition-transform hover:scale-105">
                <ArrowRight aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
