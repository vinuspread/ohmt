"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const avatars = [
  "/templates/OHMT026-spa/avatar-01.jpg",
  "/templates/OHMT026-spa/avatar-02.jpg",
  "/templates/OHMT026-spa/avatar-03.jpg",
];

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="text-center mb-16"
        >
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Testimonials
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
            What our clients say
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
              className="rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-8"
            >
              <p className="text-[0.95rem] text-[var(--color-text)] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={avatars[i % avatars.length]}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-[var(--color-text)]">{t.name}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
