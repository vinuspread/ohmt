"use client";

import { motion, useReducedMotion } from "framer-motion";
import { advantages } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const iconMap: Record<string, string> = {
  "Certified therapists": "🛡",
  "Personalized plans": "✦",
  "Premium products": "○",
  "Calm environment": "◇",
  "Flexible booking": "◈",
  "Results guaranteed": "☆",
};

export default function CareAdvantages() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-accent)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16 items-start">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-8">
              <img src="/templates/OHMT026-spa/care-advantages.jpg" alt="Advanced spa equipment used in our treatments" className="h-full w-full object-cover" />
            </div>
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Care advantages
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
              Why our clients stay with us
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {advantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_OUT }}
                className="rounded-2xl bg-white/5 border border-white/10 p-8"
              >
                <span className="text-2xl text-white/30">{iconMap[item.title] || "✦"}</span>
                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text-contrast)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
