'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
const koNav = [
  { num: '_01', name: 'Works', href: '/ko/templates/OHMT007-portfolio' },
  { num: '_02', name: 'About', href: '/ko/templates/OHMT007-portfolio/about' },
  { num: '_03', name: 'Journal', href: '/ko/templates/OHMT007-portfolio/journal' },
  { num: '_04', name: 'Contact', href: '/ko/templates/OHMT007-portfolio/contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo mark */}
          <Link href={`/ko/templates/OHMT007-portfolio`} className="text-[1.2rem] font-black tracking-tighter text-[var(--color-text)] hover:opacity-60 transition-opacity">
            OHMT.
          </Link>

          {/* Right: nav + social */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {koNav.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[0.82rem] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="hidden md:flex items-center gap-2 text-[13px] font-medium text-[var(--color-text-muted)]">
              <a href="#" className="hover:text-[var(--color-text)] transition-colors">BE</a>
              <span>/</span>
              <a href="#" className="hover:text-[var(--color-text)] transition-colors">DR</a>
              <span>/</span>
              <a href="#" className="hover:text-[var(--color-text)] transition-colors">X</a>
            </div>
            {/* Mobile only: hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-[var(--color-text)] hover:opacity-60 transition-opacity text-2xl font-normal leading-none"
            >
              {menuOpen ? '��' : '+'}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-10"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-6 text-3xl font-normal text-[var(--color-text)]">��</button>
            <nav className="space-y-2">
              {koNav.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[clamp(2.5rem,8vw,6rem)] font-black tracking-tighter text-[var(--color-text)] leading-none hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="absolute bottom-10 left-10 flex gap-6 text-[13px] text-[var(--color-text-muted)]">
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors font-bold">BE</a>
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors font-bold">DR</a>
              <a href="#" className="hover:text-[var(--color-accent)] transition-colors font-bold">X</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

