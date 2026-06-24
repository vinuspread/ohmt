"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <motion.img
        src="/templates/burger/hero-burger.png"
        alt="수제 스매시 버거, 치즈가 녹아내린 브리오슈 번"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-[#3A7D44]/30" />

      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        <motion.p
          className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: easeOut }}
        >
          EST. 2020 &middot; CRAFT BURGER
        </motion.p>
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-[-0.04em]"
          style={{ textWrap: "balance" } as React.CSSProperties}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
        >
          진정성으로 채운
          <br />
          오늘의 수제 버거.
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-white/70 mt-6 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease: easeOut }}
        >
          고온의 그릴에서 갓 눌러 구운 100% 소고기 패티와 고소한 브리오슈 번. 모든 버거는 오직 주문 즉시 진심을 담아 조리합니다.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6, ease: easeOut }}
        >
          <Link
            href="/ko/templates/OHMT018-burger-KO/order"
            className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[var(--color-accent-hover)] transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
          >
            주문하기
          </Link>
          <Link
            href="/ko/templates/OHMT018-burger-KO/locations"
            className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 text-xs uppercase tracking-[0.2em] rounded-full hover:border-white/60 hover:bg-white/10 transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
          >
            매장 찾기
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
