"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "메뉴", href: "/ko/templates/OHMT019-coffee/menu" },
    { name: "소개", href: "/ko/templates/OHMT019-coffee/about" },
    { name: "매장", href: "/ko/templates/OHMT019-coffee/locations" },
  ];

  const isHome = pathname === "/ko/templates/OHMT019-coffee";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300"
      style={{
        backgroundColor: transparent ? "transparent" : "var(--color-bg)",
        borderBottom: transparent ? "none" : "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        <Link
          href="/ko/templates/OHMT019-coffee"
          className="text-xl font-heading font-semibold"
          style={{ color: "var(--color-text)" }}
        >
          OHMT
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-80 transition-opacity duration-200 active:scale-[0.97]"
              style={{ color: "var(--color-text)" }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/ko/templates/OHMT019-coffee/menu"
            className={`px-6 py-2 text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-[transform,colors] duration-160 ease-out active:scale-[0.97] ${
              transparent
                ? "bg-[var(--color-primary)] text-white"
                : "bg-white text-[var(--color-primary)]"
            }`}
          >
            주문하기
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 active:scale-[0.95] transition-transform duration-160 ease-out"
          style={{ color: "var(--color-text)" }}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)] overflow-hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="px-6 py-4 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -10 }
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[var(--color-text)] text-base font-medium hover:opacity-80 transition-opacity py-2 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href="/ko/templates/OHMT019-coffee/menu"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[var(--color-primary)] text-white text-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-none block"
                >
                  주문하기
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
