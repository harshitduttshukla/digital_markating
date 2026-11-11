"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig, whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose, isActive }: { open: boolean; onClose: () => void; isActive: (href: string) => boolean }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const els = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          ref={panelRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden"
        >
          <div className="container-x flex h-20 items-center justify-between">
            <span className="font-display text-lg font-bold tracking-[0.04em]">{siteConfig.name}</span>
            <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-10 place-items-center rounded-full border border-line">
              <X aria-hidden className="size-5" />
            </button>
          </div>
          <motion.ul
            className="container-x flex-1 overflow-y-auto pt-4"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
          >
            {mainNav.map((item) => (
              <motion.li
                key={item.href}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="border-b border-line"
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      className="flex w-full items-center justify-between py-5 font-display text-3xl font-semibold"
                    >
                      {item.label}
                      <ChevronDown aria-hidden className={cn("size-6 transition-transform", servicesOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.ul initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                          {[{ label: "All services", href: item.href }, ...item.children].map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} onClick={onClose} className="block py-2.5 pl-1 text-white/70 hover:text-white">
                                {c.label}
                              </Link>
                            </li>
                          ))}
                          <li className="h-4" />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn("block py-5 font-display text-3xl font-semibold", isActive(item.href) ? "text-lime" : "text-white")}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
          <div className="container-x grid gap-3 pb-8 pt-6">
            <ButtonLink href="/contact" size="lg" arrow onClick={onClose}>
              Let&apos;s Talk
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="outline" size="lg">
              Chat on WhatsApp
            </ButtonLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
