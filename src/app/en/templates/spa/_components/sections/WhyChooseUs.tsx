"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const badges = [
  { label: "Certified therapists", description: "Licensed professionals with advanced clinical training and ongoing education.", image: "/templates/spa/promo-01.jpg" },
  { label: "Results guarantee", description: "If you're not satisfied after your first session, we'll make it right.", image: "/templates/spa/promo-02.jpg" },
];

const avatars = [
  "/templates/spa/avatar-01.jpg",
  "/templates/spa/avatar-02.jpg",
  "/templates/spa/avatar-03.jpg",
  "/templates/spa/avatar-04.jpg",
  "/templates/spa/avatar-05.jpg",
];

export default function WhyChooseUs() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="text-center mb-16"
        >
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Why choose us
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
            Trusted by thousands
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4 mb-12">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0, ease: EASE_OUT }}
            className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12"
          >
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">
              10k+
            </div>
            <p className="mt-2 text-sm text-white/50">Treatments performed annually</p>
          </motion.div>
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            className="rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12"
          >
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">
              98%
            </div>
            <p className="mt-2 text-sm text-white/50">Client satisfaction rate</p>
          </motion.div>
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
            className="rounded-2xl bg-white/5 border border-white/10 p-8 lg:p-12"
          >
            <div className="font-[family-name:var(--font-heading)] text-6xl font-bold text-[var(--color-primary)] leading-none">
              15+
            </div>
            <p className="mt-2 text-sm text-white/50">Years of trusted practice</p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-12">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: EASE_OUT }}
              className="group rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="sm:w-40 h-40 sm:h-auto shrink-0 overflow-hidden">
                <img src={badge.image} alt={badge.label} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-start gap-4 p-8">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-[var(--color-primary)] shrink-0" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text-contrast)]">
                    {badge.label}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{badge.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                role="presentation"
                className="w-10 h-10 rounded-full object-cover border-2 border-[var(--color-secondary)]"
                style={{ zIndex: avatars.length - i }}
              />
            ))}
          </div>
          <p className="text-sm text-white/60">
            <span className="font-bold text-white">10k+</span> trusted happy clients
          </p>
        </motion.div>
      </div>
    </section>
  );
}
