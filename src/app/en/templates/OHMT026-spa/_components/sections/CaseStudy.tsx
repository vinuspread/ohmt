"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { caseStudies } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const caseImages: Record<string, string> = {
  "acne-recovery": "/templates/OHMT026-spa/case-acne-recovery.jpg",
  "anti-aging": "/templates/OHMT026-spa/case-anti-aging.jpg",
  "hyperpigmentation": "/templates/OHMT026-spa/case-hyperpigmentation.jpg",
};

export default function CaseStudy() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">Real results, real stories</h2>
        </div>
        <div className="space-y-3 max-w-4xl mx-auto">
          {caseStudies.map((cs, i) => {
            const isOpen = openIndex === i;
            const image = caseImages[cs.id];
            return (
              <motion.div key={cs.id} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4, delay: i * 0.1, ease: EASE_OUT }} className="rounded-sm bg-[var(--color-bg)] border border-[var(--color-border)] overflow-hidden">
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-4 lg:p-6 text-left gap-4">
                  <div className="flex items-center gap-5 min-w-0">
                    <img src={image} alt={cs.title} className="w-16 h-16 lg:w-20 lg:h-20 rounded-sm object-cover shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">{cs.title}</h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)] truncate">{cs.summary}</p>
                    </div>
                  </div>
                  <span className="text-lg transition-transform duration-300 shrink-0" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="content" initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE_OUT }} className="overflow-hidden">
                      <div className="px-4 lg:px-6 pb-6 grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start">
                        <img src={image} alt="" aria-hidden="true" className="w-full h-56 md:h-full rounded-sm object-cover" />
                        <div className="space-y-4">
                          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{cs.detail}</p>
                          <div className="rounded-sm bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 p-4">
                            <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">Result</span>
                            <p className="mt-1 text-sm text-[var(--color-text)] leading-relaxed">{cs.result}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
