"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "../../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref}>
      {isInView ? value : 0}
      {suffix}
    </span>
  );
}

export default function WhoWeAre() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Who we are
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05]">
              Your skin is in expert hands
            </h2>
            <p className="mt-5 text-[0.95rem] text-white/60 leading-relaxed max-w-md">
              We are a team of certified therapists dedicated to personalized, results-driven skincare. No
              one-size-fits-all - every treatment is tailored to you.
            </p>
            <a
              href="/en/templates/OHMT026-spa-EN/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-contrast)] hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              Meet the team
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            className="grid grid-cols-3 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-heading)] text-5xl font-bold text-[var(--color-primary)] leading-none">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
