"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const CTABanner = () => {
  return (
    <section className="relative bg-[var(--color-bg-dark)] py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/templates/OHMT018-burger/cta-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          Find a Location<br />Near You.
        </motion.h2>
        <motion.p
          className="text-base text-white/60 mt-6 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: easeOut }}
        >
          We are growing fast. Check if we are in your city yet.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeOut }}
        >
          <Link
            href="/en/templates/OHMT018-burger-EN/locations"
            className="inline-block bg-[var(--color-accent)] text-white px-10 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[var(--color-accent-hover)] transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
          >
            View All Locations
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
