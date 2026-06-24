"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

export const Hero = () => {
  return (
    <section className="relative w-full h-[68vh] min-h-[480px] flex flex-col items-center justify-center overflow-hidden">
      <motion.img
        src="/templates/OHMT019-coffee/story-brewing.png"
        alt="Coffee being brewed"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
      />
      <div className="absolute inset-0 bg-[var(--color-bg-dark)]/70" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        <motion.h1
          className="font-heading text-[clamp(2.4rem,4.5vw,4.8rem)] font-bold text-white leading-[1.08] tracking-[-0.01em] mb-7 whitespace-nowrap"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.215, 0.61, 0.355, 1] }}
        >
          Coffee Worth<br />Slowing Down For.
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/60 leading-relaxed max-w-[36ch] mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.215, 0.61, 0.355, 1] }}
        >
          Single-origin beans, small-lot roasted daily. Five locations across Seoul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/en/templates/OHMT019-coffee-EN/menu"
            className="inline-flex items-center justify-center border border-white/50 text-white px-10 py-3 text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-white hover:text-[var(--color-primary-dark)] transition-colors duration-300"
          >
            Reservation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
