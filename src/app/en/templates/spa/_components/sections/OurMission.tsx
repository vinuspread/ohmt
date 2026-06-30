"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const items = [
  { title: "Diagnose first", body: "We begin with a full skin assessment - understanding your history, concerns, and goals before recommending any treatment." },
  { title: "Treat with precision", body: "Every protocol is selected and calibrated for your unique skin type. We use medical-grade technology for safe, effective results." },
  { title: "Nurture long-term", body: "Results don't end when you leave. We provide aftercare plans, product recommendations, and follow-up schedules to maintain your progress." },
  { title: "Evolve with you", body: "Your skin changes with seasons, stress, and age. We adjust your plan proactively so you always get what you need." },
];

const missionImages = [
  "/templates/OHMT026-spa/mission-01.jpg",
  "/templates/OHMT026-spa/mission-02.jpg",
  "/templates/OHMT026-spa/mission-03.jpg",
];

export default function OurMission() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Our mission
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
              A philosophy of care
            </h2>
            <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md mb-10">
              We believe great skin comes from consistent, personalized care - not quick fixes.
            </p>

            <div className="space-y-2">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={item.title} className="border-b border-[var(--color-border)]">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">
                          {item.title}
                        </span>
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
                          <p className="pb-6 text-sm text-[var(--color-text-muted)] leading-relaxed pl-12">
                            {item.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            className="relative hidden lg:block"
          >
            <div className="sticky top-28 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="overflow-hidden rounded-2xl">
                  <img src={missionImages[0]} alt="" className="w-full h-60 object-cover" />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src={missionImages[2]} alt="" className="w-full h-72 object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] h-40 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-primary)]/20">
                    ✦
                  </span>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img src={missionImages[1]} alt="" className="w-full h-80 object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
