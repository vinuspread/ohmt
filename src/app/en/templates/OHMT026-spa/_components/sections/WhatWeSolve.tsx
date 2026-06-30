"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const cards = [
  { label: "Acne & scarring", desc: "Advanced laser and microneedling protocols to restore smooth skin." },
  { label: "Aging concerns", desc: "Non-surgical peels and collagen induction for a youthful glow." },
  { label: "Hyperpigmentation", desc: "Targeted brightening treatments for melasma and sun damage." },
  { label: "Sensitive skin", desc: "Gentle barrier-repair therapies for redness and irritation." },
  { label: "Texture issues", desc: "Resurfacing treatments to refine pore size and skin smoothness." },
  { label: "Stress & fatigue", desc: "Relaxation rituals that restore energy and facial radiance." },
];

export default function WhatWeSolve() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            What we solve
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
            Skin concerns we treat
          </h2>
          <p className="mt-5 text-[0.95rem] text-[var(--color-text-muted)] leading-relaxed max-w-md">
            Every condition has a protocol. We diagnose first, treat second - with science-backed solutions.
          </p>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <div className="animate-marquee-left flex gap-6 w-max" style={{ animationDuration: "40s" }}>
          {[...cards, ...cards].map((card, i) => (
            <div
              key={i}
              className="w-[300px] shrink-0 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] p-8"
            >
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                {String(i % cards.length + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text)] leading-snug">
                {card.label}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
