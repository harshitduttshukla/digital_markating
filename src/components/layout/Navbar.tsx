"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { mainNav, serviceLinks } from "@/config/navigation";
import { services } from "@/data/services";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
    setDropdown(false);
  }

  useEffect(() => {
    if (!dropdown) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdown(false);
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdown(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [dropdown]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const openDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(true);
  };
  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropdown(false), 120);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <nav aria-label="Primary" className={cn("container-x flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20")}>
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <li key={item.href} ref={dropdownRef} className="relative" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={cn("rounded-full py-2 pl-4 pr-1 text-sm transition-colors", isActive(item.href) ? "text-white" : "text-white/70 hover:text-white")}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    aria-expanded={dropdown}
                    aria-controls="services-menu"
                    aria-label="Show services"
                    onClick={() => setDropdown((d) => !d)}
                    className="rounded-full p-2 text-white/70 hover:text-white"
                  >
                    <ChevronDown aria-hidden className={cn("size-4 transition-transform duration-300", dropdown && "rotate-180")} />
                  </button>
                </div>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div
                      id="services-menu"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-3xl border border-line bg-ink-2/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        {serviceLinks.map((s, i) => {
                          const Icon = services[i].icon;
                          return (
                            <Link key={s.href} href={s.href} className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-white/5 focus-visible:bg-white/5">
                              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-violet/15 text-violet-soft transition-colors group-hover:bg-lime group-hover:text-ink">
                                <Icon aria-hidden className="size-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-medium text-white">{s.label}</span>
                                <span className="mt-0.5 block text-xs leading-snug text-muted">{s.description}</span>
                              </span>
                            </Link>
                          );
                        })}
                        <Link href="/services" className="col-span-2 mt-1 rounded-2xl border border-line px-4 py-3 text-center text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white">
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn("rounded-full px-4 py-2 text-sm transition-colors", isActive(item.href) ? "text-white" : "text-white/70 hover:text-white")}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" size="sm" arrow className="hidden sm:inline-flex">
            Let&apos;s Talk
          </ButtonLink>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu aria-hidden className="size-5" />
          </button>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} isActive={isActive} />
    </header>
  );
}
