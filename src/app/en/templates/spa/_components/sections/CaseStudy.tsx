"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { caseStudies } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const caseImages: Record<string, string> = {
  "acne-recovery": "/templates/spa/case-acne-recovery.jpg",
  "anti-aging": "/templates/spa/case-anti-aging.jpg",
  "hyperpigmentation": "/templates/spa/case-hyperpigmentation.jpg",
};

export default function CaseStudy() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Case studies
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
            Real results, real stories
          </h2>
        </div>

        <div className="space-y-3">
          {caseStudies.map((cs, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={cs.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: EASE_OUT }}
                className="rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                >
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div className="hidden sm:block w-20 h-16 rounded-lg overflow-hidden shrink-0">
                      <img src={caseImages[cs.id]} alt={cs.title} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">
                        {cs.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{cs.summary}</p>
                    </div>
                  </div>
                  <span
                    className="text-lg transition-transform duration-300 shrink-0 ml-4"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-8 space-y-4">
                        <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{cs.detail}</p>
                        <div className="rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 p-4">
                          <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                            Result
                          </span>
                          <p className="mt-1 text-sm text-[var(--color-text)] leading-relaxed">{cs.result}</p>
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
