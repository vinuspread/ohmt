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
    { name: "Menu", href: "/en/templates/OHMT019-coffee/menu" },
    { name: "About", href: "/en/templates/OHMT019-coffee/about" },
    { name: "Locations", href: "/en/templates/OHMT019-coffee/locations" },
  ];

  const isHome = pathname === "/en/templates/OHMT019-coffee";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-300"
      style={{
        backgroundColor: transparent ? "transparent" : "var(--color-primary-dark)",
        borderBottom: transparent ? "none" : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        <Link
          href="/en/templates/OHMT019-coffee"
          className="text-xl font-heading font-semibold text-white/90 hover:text-white transition-colors"
        >
          Oh My Template
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/en/templates/OHMT019-coffee/menu"
            className="border border-white/40 text-white/80 px-6 py-2 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-[var(--color-primary-dark)] transition-colors duration-200"
          >
            Order Now
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white/80 active:scale-[0.95] transition-transform duration-160 ease-out"
          aria-label="Toggle menu"
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
                  href="/en/templates/OHMT019-coffee/menu"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[var(--color-primary)] text-white text-center px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-none block"
                >
                  Order Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
