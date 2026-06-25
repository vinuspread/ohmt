// src/app/ko/templates/newspaper/-components/sections/FrontPage.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const FrontPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8">
      {/* Hero Story */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-0 border-b-2 border-black py-6 md:py-8"
      >
        <div className="md:pr-8 md:border-r border-[var(--color-border)]">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--color-primary)] block mb-2">글로벌 분석</span>
          <img
            src="/templates/newspaper/news-1.jpg"
            className="w-full h-[420px] object-cover mb-5"
            alt="Hero story"
          />
          <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.25rem,1.8vw,1.75rem)] font-bold leading-[1.2] mb-4 group tracking-[-0.01em]">
            <Link href="#" className="group-hover:text-[var(--color-primary)] transition-colors text-black">
              왜곡되지 않은 시대의 차가운 진실을 통찰하며, <br className="hidden md:inline" /> 활자 한 자 한 자에 지식인의 견고한 역사적 책무를 담아 기록합니다.
            </Link>
          </h1>
          <p className="text-[0.92rem] text-[#555] font-sans leading-[1.8] mb-4">
            VINUS TIMES는 표면 아래에 숨겨진 구조적 본질을 정확하게 짚어내고, 타협 없는 사실 관계 증명을 통해 우리 시대를 선명하게 기록하는 신뢰받는 지식 아카이브입니다.
          </p>
          <div className="font-sans text-[0.78rem] text-[#555] font-medium uppercase">
            By <strong className="text-black">데이비드 스털링</strong> · 경제 전문 기자
          </div>
        </div>
        
        <div className="md:pl-8 flex flex-col gap-8">
          <div className="border-b border-[var(--color-border)] pb-6">
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.05rem] font-bold leading-[1.5] mb-2 text-black tracking-[-0.01em]">
              <Link href="#" className="hover:text-[var(--color-primary)]">북극 해류 패턴 변화를 암시하는 새로운 증거 발견.</Link>
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.7]">극지 연구소, 해수 온도 상승에 대한 '경고성' 데이터 분석 결과 발표.</p>
          </div>
          <div className="border-b border-[var(--color-border)] pb-6">
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.05rem] font-bold leading-[1.5] mb-2 text-black tracking-[-0.01em]">
              <Link href="#" className="hover:text-[var(--color-primary)]">동부 선거: 지정학적 분수령에 선 정치적 기로.</Link>
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.7]">급진적 제도 개혁 요구의 물결 속에 투표율 사상 최고치 경신.</p>
          </div>
          <div>
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.05rem] font-bold leading-[1.5] mb-2 text-black tracking-[-0.01em]">
              <Link href="#" className="hover:text-[var(--color-primary)]">빅테크 기업들, 브뤼셀에서 새로운 반독점 규제 직면.</Link>
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.7]">유럽연합 집행위원회, 인공지능(AI) 무단 데이터 수집 관행에 대한 전면 조사 착수.</p>
          </div>
        </div>
        

      </motion.section>
      
      {/* Mid Grid */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6 md:gap-0 border-b-2 border-black py-6 md:py-8"
      >
        {[
          {
            label: "문화",
            title: "스트리밍 범람의 시대, 클래식 고전 영화의 화려한 부활.",
            img: "/templates/newspaper/news-2.jpg",
            desc: "오프라인의 물리적 공간과 감각을 갈망하는 관객들이 다시 독립 예술영화관으로 몰려들고 있다."
          },
          {
            label: "과학",
            title: "핵융합 에너지 상용화 연구의 역사적인 획기적 이정표 달성.",
            img: "/templates/newspaper/news-3.jpg",
            desc: "캘리포니아 연구소, 올해에만 두 번째로 에너지 순이득(Net Energy Gain) 달성."
          },
          {
            label: "사회",
            title: "도심 이주의 거대한 파도: 대도시는 왜 여전히 팽창하는가.",
            img: "/templates/newspaper/news-4.jpg",
            desc: "재택근무의 트렌드 확산 속에서도, 거대 메트로폴리탄 허브는 젊은 청년 인구를 끊임없이 흡수하고 있다."
          }
        ].map((item, i) => (
          <div key={i} className="px-6 border-r border-[var(--color-border)] first:pl-0 last:pr-0 last:border-r-0">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-2">{item.label}</span>
            <img loading="lazy" src={item.img} className="w-full h-48 object-cover mb-4" alt={item.title} />
            <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.15rem] font-bold leading-[1.5] mb-2 text-black tracking-[-0.01em]">
              <Link href="#" className="hover:text-[var(--color-primary)]">{item.title}</Link>
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.7]">{item.desc}</p>
          </div>
        ))}
      </motion.section>
    </div>
  );
};
