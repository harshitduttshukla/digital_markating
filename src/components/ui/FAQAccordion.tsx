"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQ } from "@/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ faqs, tone = "dark" }: { faqs: FAQ[]; tone?: "dark" | "light" }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  const light = tone === "light";
  return (
    <ul className={cn("divide-y border-y", light ? "divide-line-dark border-line-dark" : "divide-line border-line")}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <li key={f.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn("flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium sm:text-xl", light ? "text-text-dark" : "text-white")}
              >
                {f.question}
                <span className={cn("grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300", isOpen ? "rotate-45 border-lime bg-lime text-ink" : light ? "border-line-dark" : "border-line")}>
                  <Plus aria-hidden className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className={cn("max-w-3xl pb-6 leading-relaxed", light ? "text-[#4a4f63]" : "text-muted")}>{f.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
