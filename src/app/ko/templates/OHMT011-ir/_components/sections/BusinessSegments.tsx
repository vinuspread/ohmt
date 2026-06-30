// src/app/templates/OHMT011-ir/-components/sections/BusinessSegments.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
const segments = [
  {
    num: "01",
    icon: "기술",
    image: "/templates/OHMT011-ir/ir-tech.jpg",
    title: "기술 및 소프트웨어",
    desc: "차세대 디지털 인프라를 구동하는 확장 가능한 클라우드 솔루션과 AI 기반 플랫폼",
    stat: "매출 기여도",
    val: "42%"
  },
  {
    num: "02",
    icon: "에너지",
    image: "/templates/OHMT011-ir/ir-energy.jpg",
    title: "지속가능 에너지",
    desc: "재생 에너지 자원과 그리드 현대화에 투자하여 글로벌 에너지 전환 주도",
    stat: "전년 대비 성장률",
    val: "+28%"
  },
  {
    num: "03",
    icon: "인프라",
    image: "/templates/OHMT011-ir/ir-build.jpg",
    title: "글로벌 인프라",
    desc: "지역사회와 상업을 연결하는 핵심 물리적 자산 개발 및 관리",
    stat: "영업 이익률",
    val: "21%"
  }
];

export const BusinessSegments = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="py-16 md:py-24 lg:py-28 bg-[var(--color-light-bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-8">
          <div>
            <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-3 md:mb-5">
              전략적 포트폴리오
            </span>
            <h2 className="text-[clamp(1.9rem,3.2vw,2.8rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.5] max-w-[560px] break-keep">
              핵심 분야의 다각화된 성장
            </h2>
          </div>
          <p className="text-[0.9rem] text-[#6B6B6B] leading-[1.78] max-w-[440px] font-normal break-keep">
            디지털 전환, 지속가능성, 글로벌 연결성이라는 장기 테마를 기반으로 구축된 포트폴리오입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[1px] bg-transparent md:bg-[var(--color-border)]">
          {segments.map((s, i) => (
            <div key={i} className="bg-[var(--color-light-bg)] overflow-hidden group/card border border-[var(--color-border)] md:border-none">
              <div className="h-[220px] sm:h-[260px] md:h-[180px] lg:h-[220px] overflow-hidden">
                <img loading="lazy" src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6 sm:p-8 md:p-6 lg:p-8 xl:p-10">
                <span className="text-[0.7rem] font-bold tracking-[0.25em] text-[var(--color-border)] block mb-2 md:mb-4">{s.num}</span>
                <span className="text-[0.85rem] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-2 md:mb-4 block">{s.icon}</span>
                <h3 className="text-[1.25rem] font-bold text-[var(--color-dark-bg)] mb-2 md:mb-3 leading-snug">{s.title}</h3>
                <p className="text-[0.93rem] text-[#6B6B6B] leading-[1.72] mb-6 md:mb-8 break-keep">{s.desc}</p>
                <div className="pt-4 md:pt-5 border-t border-[var(--color-border)] flex flex-col gap-1">
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[#6B6B6B]">{s.stat}</span>
                  <strong className="text-2xl font-bold text-[var(--color-dark-bg)] tracking-tight">{s.val}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
