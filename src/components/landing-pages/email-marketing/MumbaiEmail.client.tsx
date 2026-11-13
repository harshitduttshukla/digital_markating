"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Inbox, Star, Send, FileText, Archive, Search, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";

type Mail = { from: string; subject: string; tag: string; unread: boolean };
const ease = [0.22, 1, 0.36, 1] as const;

const previews: Record<string, { headline: string; body: string; cta: string }> = {
  "Cart recovery": { headline: "Still thinking it over?", body: "Your picks are saved. Order before 2 pm for same-day delivery across Mumbai.", cta: "Return to cart" },
  "Pre-stay": { headline: "Your stay begins Friday", body: "Monsoon tips, airport transfer options and a table reserved at our rooftop — just reply to confirm.", cta: "Plan my arrival" },
  Nurture: { headline: "This quarter, simply explained", body: "A two-minute read on what moved your portfolio and what we are watching next. Not investment advice.", cta: "Read the note" },
  Campaign: { headline: "Members see it first", body: "Our Diwali collection opens to members 48 hours early. Visit the showroom or shop online.", cta: "Get early access" },
};

/** Interactive inbox — click a message to preview it. Example emails only. */
export function InboxHero({ inbox }: { inbox: Mail[] }) {
  const [sel, setSel] = useState(0);
  const reduce = useReducedMotion();
  const m = inbox[sel];
  const p = previews[m.tag];
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.9, ease }}
      className="overflow-hidden rounded-[24px] border border-line-dark bg-white text-text-dark shadow-[0_50px_120px_-40px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center gap-3 border-b border-line-dark bg-paper px-4 py-3">
        <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-[#d9dbe4]" /><span className="size-2.5 rounded-full bg-[#d9dbe4]" /><span className="size-2.5 rounded-full bg-[#d9dbe4]" /></div>
        <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs text-[#8a8fa3]"><Search aria-hidden className="size-3.5" /> Search mail</div>
        <span className="hidden font-mono text-[10px] uppercase text-[#8a8fa3] sm:block">Example</span>
      </div>
      <div className="grid md:grid-cols-[150px_1fr_1.15fr]">
        <nav aria-hidden className="hidden border-r border-line-dark p-3 md:block">
          {[{ i: Inbox, l: "Inbox", a: true }, { i: Star, l: "Starred" }, { i: Send, l: "Sent" }, { i: FileText, l: "Drafts" }, { i: Archive, l: "Archive" }].map((n) => (
            <div key={n.l} className={cn("mb-0.5 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px]", n.a ? "bg-violet/10 font-medium text-violet" : "text-[#5b6075]")}><n.i className="size-3.5" />{n.l}</div>
          ))}
        </nav>
        <ul className="border-b border-line-dark md:border-b-0 md:border-r" aria-label="Example inbox">
          {inbox.map((x, i) => (
            <li key={x.subject}>
              <button type="button" onClick={() => setSel(i)} aria-pressed={i === sel}
                className={cn("block w-full border-b border-line-dark px-4 py-3.5 text-left transition-colors last:border-0", i === sel ? "bg-violet/[0.06]" : "hover:bg-paper")}>
                <div className="flex items-center justify-between gap-2">
                  <span className={cn("text-[13px]", x.unread ? "font-semibold" : "text-[#5b6075]")}>{x.from}</span>
                  <span className="rounded-full bg-paper px-2 py-0.5 font-mono text-[9px] uppercase text-[#5b6075]">{x.tag}</span>
                </div>
                <p className={cn("mt-1 line-clamp-1 text-[13px]", x.unread ? "text-text-dark" : "text-[#5b6075]")}>{x.subject}</p>
              </button>
            </li>
          ))}
        </ul>
        <div className="p-5 sm:p-6" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={m.subject} initial={reduce ? false : { opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.3, ease }}>
              <p className="text-[13px] font-medium">{m.subject}</p>
              <div className="mt-4 rounded-2xl bg-ink p-5 text-white">
                <span className="block h-1.5 w-10 rounded-full bg-lime" />
                <p className="mt-4 font-display text-xl font-semibold">{p.headline}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.body}</p>
                <span className="mt-5 inline-flex rounded-full bg-lime px-4 py-2 text-xs font-semibold text-ink">{p.cta}</span>
              </div>
              <p className="mt-4 flex items-center gap-1.5 text-[11px] text-[#8a8fa3]"><Paperclip aria-hidden className="size-3" /> Unsubscribe · Manage preferences</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
