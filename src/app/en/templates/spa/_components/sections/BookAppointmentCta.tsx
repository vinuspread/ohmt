"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function BookAppointmentCta() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <img
        src="/templates/spa/cta-bg.jpg"
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/85 to-[var(--color-secondary)]/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <h2 className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
            Ready to begin your journey?
          </h2>
          <p className="mt-5 text-[0.95rem] text-white/60 leading-relaxed max-w-lg mx-auto">
            Book your first appointment today and experience the difference personalized care makes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/en/templates/OHMT026-spa-EN/contact"
              className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
            >
              Book appointment
            </a>
            <a
              href="/en/templates/OHMT026-spa-EN/service#pricing"
              className="inline-flex items-center rounded-full border border-white/20 text-[var(--color-text-contrast)] px-8 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all duration-150"
            >
              View pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
