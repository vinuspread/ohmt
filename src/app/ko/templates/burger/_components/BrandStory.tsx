"use client";
import React from "react";
import { motion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const BrandStory = () => {
  return (
    <section className="bg-[var(--color-bg-dark)] text-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">브랜드 스토리</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              우리가 늘 꿈꾸던<br />본질적인 버거.
            </h2>
          </motion.div>
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <p className="text-base leading-relaxed text-white/70">
              훌륭한 버거에는 화려한 장식이 필요치 않다는 단순한 믿음에서 출발했습니다. 
              최고의 프리미엄 소고기 패티, 완벽하게 토스트된 번, 그리고 만드는 이의 숙련된 정성이면 충분합니다.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              엄선된 친환경 목장의 소고기, 매일 아침 매장에서 갓 구워내는 향긋한 브리오슈 번, 
              그리고 천연 원재료로 직접 끓여 만드는 시그니처 소스까지. 
              기성 냉동 제품이나 사전 조리 방식은 일절 배제하며, 모든 버거는 오직 고객 한 분을 위해 오더 메이드 수제로 조리됩니다.
            </p>
            <p className="text-base leading-relaxed text-white/70 font-semibold text-[var(--color-accent)]">
              양보다 품질, 타협 없는 고집.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
