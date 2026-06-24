"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Hero = () => {
  return (
    <section className="relative w-full h-[75vh] min-h-[480px] md:h-[calc(100vh-96px)] md:min-h-[552px] flex items-center justify-center overflow-hidden">
      <motion.img
        src="/templates/OHMT017-multi-shop/hero-model.jpeg"
        alt="New Season Collection"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-white/90 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeOut }}
        >
          Collection 2026
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-[1.0] tracking-[-0.02em]"
          style={{ textWrap: "balance" } as React.CSSProperties}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
        >
          Fashion That<br />Speaks Volumes.
        </motion.h1>
        <motion.p
          className="text-base text-white/70 mt-6 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease: easeOut }}
        >
          THE EDIT FOR THOSE WHO DRESS WITH INTENTION.
          BOLD SILHOUETTES, REFINED DETAILS.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: easeOut }}
        >
          <Link
            href="/en/templates/OHMT017-multi-shop-EN/shop"
            className="inline-flex items-center justify-center w-[180px] bg-white text-[var(--color-primary)] py-3.5 border border-transparent text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/90 transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
          >
            Shop Now
          </Link>
          <Link
            href="/en/templates/OHMT017-multi-shop-EN/shop"
            className="inline-flex items-center justify-center w-[180px] border border-white/50 text-white py-3.5 text-xs uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
          >
            New Arrivals
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-white/20" />
      </div>
    </section>
  );
};
