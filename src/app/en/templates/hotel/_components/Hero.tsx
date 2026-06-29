"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const EASE = [0.23, 1, 0.32, 1] as const;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE } },
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-primary)] overflow-hidden">
      <div className="absolute inset-0">
        <img src="/templates/hotel/hero-main.jpg" alt="OHMT" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 via-[var(--color-primary)]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-28 md:pt-36 pb-16 md:pb-24">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span variants={itemVariants} className="text-[11px] md:text-[12px] font-medium text-[var(--color-accent)] uppercase tracking-[0.25em] block mb-6 md:mb-10">
            Silent Luxury, Timeless Sanctuary
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-[clamp(2.5rem,7vw,6rem)] font-[var(--font-heading)] font-bold text-[var(--color-bg)] leading-[1.05] mb-6 md:mb-10" style={{ textWrap: "balance" } as React.CSSProperties}>
            Where Serenity Meets Elegance.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-[var(--color-bg)]/80 font-[var(--font-body)] max-w-xl mb-10 md:mb-14 leading-relaxed">
            Nestled between ancient forests and the cerulean sea, OHMT offers an unparalleled retreat where every moment is crafted for your well-being.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20, filter: "blur(4px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.55, duration: 0.75, ease: EASE }} className="bg-[var(--color-bg)]/10 backdrop-blur-xl border border-[var(--color-bg)]/20 p-6 md:p-8 rounded-sm max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <label className="text-[10px] md:text-[11px] font-medium text-[var(--color-bg)]/60 uppercase tracking-[0.15em] block mb-2">Check-In</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full bg-transparent border border-[var(--color-bg)]/20 px-3 py-2.5 text-sm text-[var(--color-bg)] placeholder:text-[var(--color-bg)]/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
            </div>
            <div>
              <label className="text-[10px] md:text-[11px] font-medium text-[var(--color-bg)]/60 uppercase tracking-[0.15em] block mb-2">Check-Out</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full bg-transparent border border-[var(--color-bg)]/20 px-3 py-2.5 text-sm text-[var(--color-bg)] placeholder:text-[var(--color-bg)]/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
            </div>
            <div>
              <label className="text-[10px] md:text-[11px] font-medium text-[var(--color-bg)]/60 uppercase tracking-[0.15em] block mb-2">Guests</label>
              <select className="w-full bg-transparent border border-[var(--color-bg)]/20 px-3 py-2.5 text-sm text-[var(--color-bg)] focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm appearance-none">
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">1 Adult</option>
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">2 Adults</option>
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">3 Adults</option>
                <option className="bg-[var(--color-primary)] text-[var(--color-bg)]">4 Adults</option>
              </select>
            </div>
            <div>
              <label className="hidden md:block text-[10px] md:text-[11px] font-medium text-transparent mb-2 select-none">_</label>
              <Button variant="secondary" size="md" className="w-full text-[11px] tracking-[0.2em] uppercase rounded-sm">Check Availability</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
