'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuLinks = [
  { href: '/en/templates/exhibition/about', label: 'About' },
  { href: '/en/templates/exhibition/exhibitions', label: 'Exhibitions' },
  { href: '/en/templates/exhibition/events', label: 'Events' },
  { href: '/en/templates/exhibition/contact', label: 'Contact' },
];

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 pointer-events-none"
        style={{ mixBlendMode: menuOpen ? 'normal' : 'difference' }}
      >
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between pointer-events-auto">
          <Link
            href="/en/templates/exhibition"
            className="text-[1rem] font-heading font-semibold uppercase tracking-[0.15em] text-white"
          >
            OHMT
          </Link>

          <div className="flex items-center gap-6">
            <span className="hidden md:block text-[10px] font-body font-semibold uppercase tracking-[0.08em] text-white/70">
              123 West 25th St, New York · Tue-Sun 10am-6pm
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 bg-black flex items-center justify-center relative"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative">
                <motion.span
                  className="absolute left-0 top-0 w-full h-[1.5px] bg-white block origin-center"
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-white block"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white block origin-center"
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col justify-between"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <div className="flex-1 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-6">
                {menuLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: easeOut }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-heading font-semibold uppercase text-white hover:translate-x-1 transition-transform duration-200"
                      style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block absolute bottom-12 right-12 text-right">
              <p className="text-[12px] font-body text-white/60 uppercase tracking-[0.08em] mb-2">
                123 West 25th Street<br />New York, NY 10001
              </p>
              <p className="text-[12px] font-body text-white/60 uppercase tracking-[0.08em] mb-4">
                info@formagallery.com<br />+1 (212) 555-0147
              </p>
              <Link
                href="/en/templates/exhibition/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block px-6 py-3 bg-white/60 text-black text-[11px] font-body font-semibold uppercase tracking-[0.12em] hover:bg-white transition-colors duration-200"
              >
                Get Tickets
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
