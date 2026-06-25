"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BookConsultation() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Free consultation
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05] max-w-2xl">
            Not sure where to start?
          </h2>
          <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-lg">
            Book a complimentary consultation with one of our therapists. We&apos;ll assess your skin, answer your
            questions, and build a plan that fits your goals.
          </p>
          <a
            href="/en/templates/spa/contact"
            className="mt-10 inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
          >
            Book your free consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
