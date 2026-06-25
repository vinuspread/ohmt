"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "/ko/templates/wedding/about", label: "소개" },
  { href: "/ko/templates/wedding/gallery", label: "갤러리" },
  { href: "/ko/templates/wedding/pricing", label: "가격" },
  { href: "/ko/templates/wedding/contact", label: "문의" },
];

export default function Navbar({ solid }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid ?? false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    if (!solid) setScrolled(v > 60);
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8 lg:px-16">
          <a
            href="/ko/templates/wedding"
            className={`font-[family-name:var(--font-heading)] text-xl font-light tracking-[0.15em] uppercase transition-colors duration-500 ${
              scrolled ? "text-[var(--color-text)]" : "text-white"
            }`}
          >
            Oh My Template
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[0.72rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  scrolled
                    ? "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/ko/templates/wedding/contact"
              className={`hidden sm:inline-flex items-center border px-6 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                scrolled
                  ? "border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[var(--color-text)]"
              }`}
            >
              예약 문의
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-1"
              aria-label="메뉴 열기"
            >
              <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[var(--color-text)]" : "bg-white"} ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[var(--color-text)]" : "bg-white"} ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 transition-all duration-300 ${scrolled ? "bg-[var(--color-text)]" : "bg-white"} ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-white"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-[family-name:var(--font-heading)] text-5xl font-light uppercase tracking-[0.06em] text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                href="/ko/templates/wedding/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block bg-[var(--color-text)] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white"
              >
                예약 문의
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
