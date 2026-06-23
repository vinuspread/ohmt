"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { packages } from "../../data/data";

export default function Pricing() {
  const [openId, setOpenId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="pricing" className="bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] gap-24">
          {/* Left header */}
          <div className="mb-16 lg:mb-0">
            <h2
              className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05]"
              style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}
            >
              Collections
            </h2>
            <p className="mt-6 text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed max-w-[280px] font-[family-name:var(--font-body)]">
              Choose the collection that best fits the size and story of your day.
            </p>
            <a
              href="/en/templates/OHMT049-wedding-en/contact"
              className="inline-flex items-center gap-3 mt-10 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text)] border-b border-[var(--color-text)] pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>

          {/* Accordion list */}
          <div className="divide-y divide-[var(--color-border)]">
            {packages.map((pkg, idx) => {
              const isOpen = openId === pkg.id;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <button
                    className="w-full flex items-center justify-between py-8 text-left group"
                    onClick={() => setOpenId(isOpen ? null : pkg.id)}
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h3
                        className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-none"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
                      >
                        {pkg.title}
                      </h3>
                      <p className="text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-text-muted)] mt-2 font-[family-name:var(--font-body)]">
                        {pkg.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-6 flex-shrink-0 ml-6">
                      <span className="font-[family-name:var(--font-heading)] text-2xl font-light text-[var(--color-primary)]">
                        {pkg.price}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-8 h-8 border border-[var(--color-border)] flex items-center justify-center flex-shrink-0"
                      >
                        <span className="font-light text-[var(--color-text-muted)] text-xl leading-none">+</span>
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 grid sm:grid-cols-2 gap-8">
                          <div className="aspect-[16/10] overflow-hidden">
                            <img
                              src={pkg.image}
                              alt={pkg.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <ul className="space-y-3">
                            {pkg.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)] font-[family-name:var(--font-body)]">
                                <span className="text-[var(--color-primary)] mt-0.5 flex-shrink-0">-</span>
                                {f}
                              </li>
                            ))}
                            <li className="pt-4">
                              <a
                                href="/en/templates/OHMT049-wedding-en/contact"
                                className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[var(--color-text)] border-b border-[var(--color-border)] pb-1 hover:border-[var(--color-text)] transition-colors"
                              >
                                Book This Package
                              </a>
                            </li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
