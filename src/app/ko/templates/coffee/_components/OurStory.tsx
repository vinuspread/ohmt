"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const OurStory = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-dark)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <motion.img
                src="/templates/OHMT019-coffee/story-roasting.jpg"
                alt="Coffee roasting process"
                className="w-full h-full object-cover"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: easeOut }}
              />
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
              스토리
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-[1.15] mb-8">
              천천히 즐길 가치가 있는 커피.
            </h2>
            <p className="text-base leading-relaxed text-white/70 mb-4">
              에티오피아, 콜롬비아, 과테말라의 소규모 농장에서 직접 원두를 공급받습니다. 모든 배치는 각 산지의 고유한 풍미를 살리기 위해 소량으로 로스팅됩니다.
            </p>
            <p className="text-base leading-relaxed text-white/70 mb-8">
              바리스타는 수개월간의 훈련을 거쳐 자신의 기술을 완성합니다. 그라인딩 조정부터 적절한 마이크로폼의 스팀 밀크까지 모든 디테일이 중요합니다. 좋은 커피는 특별한 관리가 필요하다고 믿습니다.
            </p>

            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-[var(--color-bg-dark)] shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
            >
              <img
                src="/templates/OHMT019-coffee/story-beans.jpg"
                alt="Coffee beans"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <Link
              href="/ko/templates/OHMT019-coffee/about"
              className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              스토리 보기 &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
