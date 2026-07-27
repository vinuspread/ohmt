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
              브랜드 이야기</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-[var(--leading-heading)] mb-8">
              좋은 원두로 정직하게 내린 커피.</h2>
            <p className="text-base leading-relaxed text-white/70 mb-4">
              에티오피아와 콜롬비아, 과테말라의 생산자와 협력해 원두를 고릅니다. 산지마다 다른 향과 맛이 잘 드러나도록 필요한 만큼 나누어 로스팅합니다.</p>
            <p className="text-base leading-relaxed text-white/70 mb-8">
              원두에 맞는 분쇄도와 추출 시간, 우유의 온도와 질감을 세심하게 조절합니다. 한 잔의 균형을 위해 작은 차이도 놓치지 않습니다.</p>

            <motion.div
              className="absolute -bottom-6 right-0 md:-right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-[var(--color-bg-dark)] shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
            >
              <img
                src="/templates/OHMT019-coffee/story-beans.jpg"
                alt="로스팅한 커피 원두"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <Link
              href="/ko/templates/OHMT019-coffee/about"
              className="inline-flex items-center text-sm font-semibold text-white/80 hover:text-white transition-colors"
            >
              브랜드 이야기 &rarr;</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
