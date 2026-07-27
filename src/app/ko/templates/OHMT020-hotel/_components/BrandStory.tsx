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
          <img src="/templates/OHMT020-hotel/story-01.jpg" alt="OHMT 리조트 이야기" className="w-full h-auto object-cover transition-transform duration-[4s] hover:scale-105" />
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
              className="text-xs md:text-xs font-medium text-[var(--color-accent)] tracking-tight block mb-6 md:mb-8"
            >
              리조트 이야기</motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[length:var(--text-h2)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[var(--leading-heading)] mb-6 md:mb-8 break-keep [overflow-wrap:normal]"
            >
              바다와 숲 사이,<br />온전히 쉬어가는 곳.</motion.h2>
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
              className="text-base md:text-lg text-[var(--color-text)] font-medium leading-relaxed mb-4 break-keep [text-wrap:pretty]"
            >
              자연을 가리지 않고 주변 풍경과 어울리는 공간을 만들었습니다.<br className="hidden md:block" />
              서두르지 않고 머물며 몸과 마음을 편안하게 쉬어갈 수 있습니다.</motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed break-keep [text-wrap:pretty]"
            >
              객실과 빌라는 바다와 정원의 전망을 충분히 누릴 수 있도록 배치했습니다.<br className="hidden md:block" />
              현지 석재와 식재료, 지역 장인의 작업을 공간과 서비스에 자연스럽게 담았습니다.</motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
