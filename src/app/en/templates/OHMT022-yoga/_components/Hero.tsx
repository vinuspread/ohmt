"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { BRAND } from "../constants";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 64]);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <motion.div
        className="absolute will-change-transform hero-bg-image"
        style={{
          y: reduceMotion ? 0 : parallaxY,
          backgroundImage: "url('/templates/OHMT022-yoga/hero-bg.jpg')",
          backgroundSize: "cover",
          inset: "-10% 0 0 0",
          height: "120%",
        }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute top-20 left-0 right-0 h-[1px] bg-white/20 z-10" />

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="flex flex-col items-start gap-8 px-8 py-10 md:flex-row md:items-end md:justify-between md:px-14">
          <div>
            <p className="mb-5 text-xs font-normal tracking-[0.3em] text-white/65"
               style={{ fontFamily: "var(--font-body)" }}>
              {BRAND.tagline}
            </p>
            <h1 className="text-[length:var(--text-display)] font-normal text-white leading-[var(--leading-heading)] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-heading)" }}>
              Find stillness in
              <br />
              every movement.
            </h1>
          </div>

          <div className="flex flex-shrink-0 flex-col items-start gap-4 pb-1 md:items-end">
            <Link href="/en/templates/OHMT022-yoga/classes"
              className="hidden whitespace-nowrap border-b border-white/40 pb-1 text-xs font-medium tracking-[0.2em] uppercase text-white transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:inline-flex"
              style={{ fontFamily: "var(--font-body)" }}>
              Explore Classes
            </Link>
            <Link href="/en/templates/OHMT022-yoga/schedule"
              className="inline-flex whitespace-nowrap border-b border-white/60 pb-1 text-sm font-medium text-white transition-colors hover:text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:border-b-0 md:pb-0 md:text-xs md:tracking-[0.2em] md:uppercase md:text-white/70 md:hover:text-white"
              style={{ fontFamily: "var(--font-body)" }}>
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
