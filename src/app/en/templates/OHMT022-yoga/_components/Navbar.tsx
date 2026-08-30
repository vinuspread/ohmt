"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { NAV_ITEMS, BRAND } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const homeHref = "/en/templates/OHMT022-yoga";
  const isHome = pathname === homeHref;
  const isVisible = !isHome || scrolled;
  const isCurrent = (href: string) => pathname === href || (href !== homeHref && pathname.startsWith(`${href}/`));

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 60));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "bg-white border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="px-8 md:px-14 lg:px-20 flex items-center justify-between h-16 md:h-[76px]">
        <Link
          href={homeHref}
          className={`text-sm tracking-[0.12em] uppercase font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 ${
            isVisible ? "text-[var(--color-text)]" : "text-white/90"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          {BRAND.name}
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`text-xs tracking-[0.12em] uppercase transition-colors duration-300 font-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 ${
                  isCurrent(item.href)
                    ? isVisible ? "text-[var(--color-text)]" : "text-white"
                    : isVisible
                    ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                    : "text-white/60 hover:text-white/90"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`grid size-11 place-items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:hidden ${isVisible ? "text-[var(--color-text)]" : "text-white/80"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="prana-mobile-navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {mobileOpen && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.18, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-[var(--color-border)] bg-white md:hidden"
        >
          <ul id="prana-mobile-navigation" className="flex flex-col gap-2 px-8 py-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={`block py-2 text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)] ${isCurrent(item.href) ? "text-[var(--color-text)]" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"}`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
