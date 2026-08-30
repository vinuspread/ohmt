"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const t = {
  "nav": {
    "book": `예약`,
    "experience": `익스피리언스`,
    "destinations": `취항지`,
    "loyalty": `로열티`,
    "login": `로그인`,
    "bookTrip": `여정 예약`
  }
};
const navItems = [
    { name: t.nav.book, slug: "book" },
    { name: t.nav.experience, slug: "experience" },
    { name: t.nav.destinations, slug: "destinations" },
    { name: t.nav.loyalty, slug: "loyalty" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStagger = {
    animate: {
      transition: { staggerChildren: 0.06, delayChildren: 0.3 }
    }
  };

  const navFadeUp = {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const } }
  };

  const mobileItemVariants = {
    initial: { opacity: 0, x: -16 },
    animate: (i: number) => ({
      opacity: 1, x: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.35, ease: [0.23, 1, 0.32, 1] as const }
    }),
    exit: { opacity: 0, x: -8, transition: { duration: 0.15 } }
  };

  return (
    <>
      <nav className={clsx(
        "fixed top-0 left-0 right-0 z-[900] h-[72px] flex items-center transition-[background,backdrop-filter] duration-[var(--transition-base)]",
        isScrolled || mobileOpen
          ? "bg-[var(--color-primary)] backdrop-blur-xl"
          : "bg-transparent"
      )}>
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between w-full">
            <Link href="/ko/templates/OHMT008-airline" className="shrink-0 group">
            <span className="text-sm md:text-base font-bold tracking-[0.15em] uppercase text-white leading-none transition-[opacity] duration-[var(--transition-fast)] group-hover:opacity-70">STRATUS</span>
          </Link>

          {/* Desktop GNB */}
          <motion.div
            variants={navStagger}
            initial="initial"
            animate="animate"
            className="hidden lg:flex gap-10 absolute left-1/2 -translate-x-1/2"
          >
            {navItems.map((item) => (
              <motion.div key={item.slug} variants={navFadeUp}>
                <Link
                  href={`/ko/templates/OHMT008-airline/${item.slug}`}
                  className="text-sm font-semibold uppercase tracking-[-0.02em] text-white/55 hover:text-white transition-[color] duration-[var(--transition-fast)] relative group pb-1"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-[width] duration-[var(--transition-base)] group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hidden lg:block text-[0.7rem] font-medium uppercase tracking-[0.1em] text-white/50 hover:text-white transition-[color] duration-[var(--transition-fast)]">
              {t.nav.login}
            </Link>
            <Button variant="primary" className="hidden lg:block text-sm font-bold uppercase tracking-[-0.02em] px-6 py-2.5 ">
              {t.nav.bookTrip}
            </Button>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <motion.div
                key={mobileOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] as const }}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-[840] bg-black/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <div className={clsx(
        "fixed top-16 left-0 right-0 z-[850] bg-[var(--color-primary)] border-t border-white/10 transition-[max-height,opacity] duration-[var(--transition-base)] lg:hidden overflow-hidden",
        mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="flex flex-col px-6 py-8 gap-1">
          {navItems.map((item, i) => (
            <motion.div
              key={item.slug}
              custom={i}
              variants={mobileItemVariants}
              initial="initial"
              animate={mobileOpen ? "animate" : "initial"}
              exit="exit"
            >
              <Link
                href={`/ko/templates/OHMT008-airline/${item.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-semibold uppercase tracking-[-0.02em] text-white/60 hover:text-white py-4 border-b border-white/10 transition-[color] duration-[var(--transition-fast)]"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            custom={navItems.length}
            variants={mobileItemVariants}
            initial="initial"
            animate={mobileOpen ? "animate" : "initial"}
            exit="exit"
          >
            <Link
              href="/ko/templates/OHMT008-airline/book"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-semibold uppercase tracking-[-0.02em] text-[var(--color-accent)] hover:text-[var(--color-accent-light)] py-4 border-b border-white/10 transition-[color] duration-[var(--transition-fast)]"
            >
              {t.nav.bookTrip}
            </Link>
          </motion.div>
          <motion.div
            custom={navItems.length + 1}
            variants={mobileItemVariants}
            initial="initial"
            animate={mobileOpen ? "animate" : "initial"}
            exit="exit"
          >
            <Link href="#" onClick={() => setMobileOpen(false)} className="block text-[0.85rem] font-medium uppercase tracking-[0.1em] text-white/40 hover:text-white transition-[color] duration-[var(--transition-fast)] py-4">
              {t.nav.login}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );

};
