"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full min-h-screen flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-[55%] pt-24 lg:pt-0 order-2 lg:order-1">
            <motion.p
              className="text-xs tracking-[0.3em] text-[var(--color-text-muted)] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: easeOut }}
            >
              시즌 스페셜
            </motion.p>
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
            >
              새로운
              <br />
              <span className="text-[var(--color-primary)]">여름</span> 커피.
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-[var(--color-text-muted)] mt-6 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45, ease: easeOut }}
            >
              콜드브루, 아이스 라떼, 시즌 스페셜까지. 매일 아침 신선하게 만듭니다.
            </motion.p>
            <motion.div
              className="flex items-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: easeOut }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/ko/templates/OHMT019-coffee-KO/menu"
                  className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-none transition-[transform,colors] duration-160 ease-out active:scale-[0.97] w-full"
                >
                  메뉴 보기
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/ko/templates/OHMT019-coffee-KO/about"
                  className="inline-flex items-center justify-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3 text-xs uppercase tracking-[0.2em] font-semibold rounded-none transition-[transform,colors] duration-160 ease-out active:scale-[0.97] w-full"
                >
                  스토리
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="hidden lg:flex w-[45%] items-start justify-end order-1 lg:order-2 relative mt-12">
            <motion.img
              src="/templates/OHMT019-coffee/hero-drink.png"
              alt="Summer coffee drink"
              className="w-full h-auto object-contain -mr-6 md:-mr-12"
              initial={{ opacity: 0, x: 40, scale: 1.08 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
