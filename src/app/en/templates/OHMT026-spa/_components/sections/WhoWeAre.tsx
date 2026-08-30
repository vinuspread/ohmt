"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
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
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="max-w-2xl"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Who we are
            </span>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text-contrast)] leading-[var(--leading-heading)]">
              Your skin is in expert hands
            </h2>
            <p className="mt-6 max-w-lg text-[0.95rem] text-white/60 leading-relaxed">
              We are a team of certified therapists dedicated to personalized, results-driven skincare. No
              one-size-fits-all - every treatment is tailored to you.
            </p>
            <a
              href="/en/templates/OHMT026-spa/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-contrast)] hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              Meet the team →
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
            className="relative overflow-hidden rounded-sm"
          >
            <img src="/templates/OHMT026-spa/who-we-are.jpg" alt="Therapists welcoming a client in the consultation room" className="w-full h-[26rem] object-cover" />
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 bg-black/40 backdrop-blur-sm border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/10 first:border-l-0 px-4 py-5 text-left">
                  <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-primary)] leading-none">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1.5 text-[0.7rem] text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
