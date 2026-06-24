"use client";
import React from "react";
import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

export const Reserve = () => {
  return (
    <section className="relative bg-[var(--color-bg-dark)] overflow-hidden h-[280px] md:h-[320px] flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/templates/coffee/cta-bg.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-bg-dark)]/93" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="shrink-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/40 mb-3">
              Join Our Newsletter
            </p>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-white leading-snug">
              Good coffee starts with good news.
            </h2>
          </div>

          <div className="flex gap-0 w-full md:max-w-[480px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/8 border border-white/15 text-white placeholder-white/30 px-5 py-3 text-[13px] focus:outline-none focus:border-white/40 min-w-0"
            />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <button className="bg-white text-[var(--color-primary-dark)] px-6 py-3 text-[10px] uppercase tracking-[0.18em] font-bold whitespace-nowrap hover:bg-white/90 transition-colors duration-200 h-full">
                Subscribe
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
