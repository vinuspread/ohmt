"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const images = [
  "/templates/spa/difference-01.jpg",
  "/templates/spa/difference-02.jpg",
  "/templates/spa/difference-03.jpg",
];

export default function OurDifference() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Our difference
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
              Science meets serenity
            </h2>
            <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md">
              We combine clinical-grade technology with a calm, welcoming environment. Every treatment is backed by
              research and delivered with care.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "MD-developed treatment protocols",
                "Medical-grade products only",
                "Personalized skin journey mapping",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={images[0]}
                  alt="Spa treatment room with natural light"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={images[2]}
                  alt="Skin therapy products arranged on marble"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={images[1]}
                  alt="Therapist preparing a facial treatment"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-[var(--color-secondary)] h-48 flex items-center justify-center">
                <span className="font-[family-name:var(--font-heading)] text-6xl font-bold text-white/20">✦</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
