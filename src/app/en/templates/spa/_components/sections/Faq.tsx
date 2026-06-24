"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqs } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function Faq() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 items-start">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="hidden lg:block sticky top-28"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/templates/spa/faq.jpg" alt="A client relaxing during a spa treatment" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="mb-12"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                FAQ
              </span>
              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="space-y-2">
              {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                >
                  <span className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className="text-lg transition-transform duration-300 shrink-0"
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
                      <p className="px-6 lg:px-8 pb-8 text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
              })}
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
