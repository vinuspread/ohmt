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
      <div className="mx-auto max-w-3xl px-6">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="text-center mb-16">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">FAQ</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">자주 묻는 질문</h2>
        </motion.div>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] overflow-hidden">
                <button onClick={() => setOpenIndex(isOpen ? -1 : i)} className="w-full flex items-center justify-between p-6 lg:p-8 text-left">
                  <span className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[var(--color-text)] pr-4">{faq.question}</span>
                  <span className="text-lg transition-transform duration-300 shrink-0" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (<motion.div key="content" initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE_OUT }} className="overflow-hidden"><p className="px-6 lg:px-8 pb-8 text-sm text-[var(--color-text-muted)] leading-relaxed">{faq.answer}</p></motion.div>)}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map((faq) => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
      </div>
    </section>
  );
}
