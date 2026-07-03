"use client";

import React from "react";
import { motion } from "framer-motion";

export const BrandStory = () => {
  return (
    <section className="py-20 md:py-32 lg:py-40 bg-[var(--color-bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="lg:w-1/2 overflow-hidden"
        >
          <img src="/templates/OHMT020-hotel/story-01.jpg" alt="OHMT Story" className="w-full h-auto object-cover transition-transform duration-[4s] hover:scale-105" />
        </motion.div>

        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-[12px] md:text-[13px] font-medium text-[var(--color-accent)] tracking-tight block mb-6 md:mb-8"
            >
              BRAND PHILOSOPHY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[clamp(1.8rem,4vw,3.5rem)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[1.2] mb-6 md:mb-8 break-keep [overflow-wrap:normal]"
            >
              자연이 정성껏 빚어낸<br />영혼의 안식처
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{ originX: 0 }}
              className="h-[2px] w-12 md:w-16 bg-[var(--color-accent)] mb-6 md:mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg text-[var(--color-text)] font-medium leading-relaxed mb-4"
            >
              진정한 럭셔리는 자연과 무리 없이 공존하는 감각에서 시작됩니다.
              시간이 느리게 흐르고, 몸과 마음이 다시 숨을 고르는 공간을 만들었습니다.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed"
            >
              모든 스위트와 빌라는 해안선의 자연미를 따라 배치했습니다.
              현지 석재, 유기농 식재료, 장인의 손길이 머무는 동안의 리듬을 차분하게 완성합니다.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
