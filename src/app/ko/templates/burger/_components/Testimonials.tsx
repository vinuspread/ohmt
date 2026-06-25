"use client";
import React from "react";
import { motion } from "motion/react";
import { testimonials } from "../data/data";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Testimonials = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">怨좉컼 ?꾧린</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">怨좉컼???뚮━</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="bg-[var(--color-bg-secondary)] p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: easeOut }}
            >
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
