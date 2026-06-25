// src/app/templates/car/-components/sections/NewsSection.tsx
"use client";

import React from "react";

const news = [
  {
    tag: "전기차",
    title: "전기차 충전 가이드의 모든 것: 초보 오너를 위한 완벽 지침서",
    date: "2026년 5월 3일",
    img: "/templates/car/car-1.jpg"
  },
  {
    tag: "테크놀로지",
    title: "VINUSPREAD 2026: 역사상 가장 파격적이고 기술적으로 진화한 스마트 모빌리티 라인업",
    date: "2026년 4월 28일",
    img: "/templates/car/car-4.jpg"
  },
  {
    tag: "디자인",
    title: "EV9의 비하인드 스토리: 디자이너들이 제로 베이스에서 럭셔리 SUV를 조각하듯 재창조하기까지",
    date: "2026년 4월 15일",
    img: "/templates/car/car-5.jpg"
  }
];

export const NewsSection = () => {
  return (
    <section className="py-12 md:py-24 border-t border-[var(--theme-border)] bg-black">
      <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)]">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-0.03em] text-white">
            최신 소식 및 뉴스
          </h2>
          <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:translate-x-1.5 transition-all duration-500">
            전체 뉴스 <span className="text-[1.2em]">→</span>
          </button>
        </div>
        
         <div className="grid md:grid-cols-3 gap-[1px] bg-[var(--theme-border)] overflow-hidden">
           {news.map((item) => (
             <div key={item.title} className="bg-black group">
               <div className="h-[220px] overflow-hidden">
                 <img loading="lazy" src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={item.title} />
               </div>
               <div className="p-8">
                 <span className="block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-accent)] mb-3">
                   {item.tag}
                 </span>
                 <h3 className="text-base font-semibold leading-relaxed mb-3 text-white break-keep line-clamp-2 min-h-[3.25rem]">
                   {item.title}
                 </h3>
                 <span className="text-[0.68rem] text-[var(--theme-text-muted)] uppercase tracking-[0.1em]">
                   {item.date}
                 </span>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};
