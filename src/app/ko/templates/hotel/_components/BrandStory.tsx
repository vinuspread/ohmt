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
          <img src="/templates/hotel/story-01.jpg" alt="Oh My Template Story" className="w-full h-auto object-cover transition-transform duration-[4s] hover:scale-105" />
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
              브랜드 스토리
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[clamp(1.8rem,4vw,3.5rem)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[1.2] mb-6 md:mb-8 break-keep [overflow-wrap:normal]"
            >
              자연이 빚어낸<br />성역
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
              진정한 럭셔리는 자연과의 조화에 있다는 믿음으로, 럭스 헤이븐은 시간이 느리게 흐르고 영혼이 숨쉬는 휴식처를 만들겠다는 비전에서 탄생했습니다.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed"
            >
              모든 스위트와 빌라는 해안선의 자연미를 담아 정성스럽게 배치되었습니다. 건축에 사용된 현지 석재부터 주방의 유기농 식재료까지, 지속 가능성과 장인 정신이 모든 순간을 정의합니다.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
