"use client";
import React from "react";
import { motion } from "framer-motion";


export const BrandStory = () => {

  return (
    <section className="bg-white py-16 md:py-32 lg:py-48 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-8 md:gap-16 lg:gap-40">
        {/* Left: Interactive Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="relative lg:w-1/2 overflow-hidden group"
        >
          <img
            src="/templates/furniture/banner-lifestyle.png"
            alt="Lifestyle Craftsmanship"
            className="w-full h-auto object-cover transition-transform duration-[4s] group-hover:scale-105"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right: Editorial Narrative */}
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-[13px] md:text-[12px] font-bold text-[var(--color-secondary)] uppercase mb-6 md:mb-10 block"
            >
              {"브랜드 네러티브"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[clamp(1.5rem,4vw,4rem)] font-bold text-[var(--color-text)] leading-[1.05] mb-8 md:mb-12 uppercase"
            >
              {"소재와 공간"} <br /> {"그 너머의 대화."}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{ originX: 0 }}
              className="h-[2px] w-12 md:w-16 bg-black mb-8 md:mb-12 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-[var(--color-text)] font-bold leading-relaxed mb-6 md:mb-10 uppercase"
            >
              {"비움과 정밀함을 철학으로 삼아, Vinuspread는 삶의 가장 본질적인 인테리어를 아카이빙합니다."}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-sm md:text-base lg:text-lg text-[var(--color-secondary)] font-medium leading-relaxed mb-10 md:mb-16 uppercase"
            >
              {"우리가 선보이는 가구는 공간과의 깊은 대화입니다. 자연 그대로의 소재와 고도로 정제된 형태 사이의 긴장을 탐구하며, 바쁜 일상 속 현대적 가정에 고요함과 평온을 선사합니다."}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[14px] font-bold text-[var(--color-text)] border-b-2 border-black pb-2 hover:opacity-50 transition-opacity uppercase"
            >
              {"브랜드 스토리 읽기"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
