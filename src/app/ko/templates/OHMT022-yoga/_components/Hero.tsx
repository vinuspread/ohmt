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
            <p className="mb-5 text-sm font-normal tracking-normal text-white/75"
               style={{ fontFamily: "var(--font-body)" }}>
              {BRAND.tagline}
            </p>
            <h1 className="text-[length:var(--text-display)] font-medium text-white leading-[var(--leading-heading)] tracking-normal"
                style={{ fontFamily: "var(--font-heading)" }}>
              호흡을 따라
              <br />
              몸을 움직입니다.
            </h1>
          </div>

          <div className="flex flex-shrink-0 flex-col items-start gap-4 pb-1 md:items-end">
            <Link href="/ko/templates/OHMT022-yoga/classes"
              className="hidden whitespace-nowrap border-b border-white/40 pb-1 text-sm font-medium tracking-normal text-white transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:inline-flex"
              style={{ fontFamily: "var(--font-body)" }}>
              클래스 보기
            </Link>
            <Link href="/ko/templates/OHMT022-yoga/schedule"
              className="inline-flex whitespace-nowrap border-b border-white/60 pb-1 text-sm font-medium tracking-normal text-white transition-colors hover:text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:border-b-0 md:pb-0 md:text-white/75 md:hover:text-white"
              style={{ fontFamily: "var(--font-body)" }}>
              주간 일정
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
