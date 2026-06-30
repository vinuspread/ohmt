"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_IOS = [0.32, 0.72, 0, 1] as const;
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const basePath = "/ko/templates/OHMT024-kids-education";

const navLinks = [
  { href: basePath, label: "홈" },
  { href: `${basePath}/classes`, label: "클래스" },
  { href: `${basePath}/about`, label: "소개" },
  { href: `${basePath}/contact`, label: "문의" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-black/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={basePath} className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            OHMT
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`${basePath}/contact`}
              className="bg-[var(--color-primary)] rounded-full px-6 py-2.5 text-sm font-bold hover:brightness-95 active:scale-[0.97] transition-all duration-150"
            >
              배움 시작하기
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 active:scale-[0.97] transition-transform duration-100"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: EASE_IOS }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)] pt-24"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15, delay: idx * 0.05, ease: EASE_OUT }}
                  className="text-3xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`${basePath}/contact`}
                onClick={() => setIsOpen(false)}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15, delay: navLinks.length * 0.05, ease: EASE_OUT }}
                className="mt-4 bg-[var(--color-primary)] rounded-full px-8 py-3.5 text-base font-bold active:scale-[0.97] transition-transform duration-100"
              >
                배움 시작하기
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
