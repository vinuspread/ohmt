// src/app/templates/magazine/-components/sections/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";

const issueTopics = [
  { tag: "디자인", title: "북유럽 미니멀리즘의 재정의" },
  { tag: "문화", title: "베를린의 숨겨진 예술 현장" },
  { tag: "여행", title: "교토의 비밀스러운 찻집들" },
  { tag: "지속가능성", title: "미래의 농업" }
];

export const Hero = () => {

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="/templates/magazine/mag-hero.jpg"
        alt="매거진 히어로"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/85" />

      {/* 상단 카피 */}
      <div className="absolute left-0 right-0 px-6 md:px-[4rem] max-w-[calc(var(--theme-container)+5rem)] mx-auto w-full" style={{ top: "calc(38% - 220px)" }}>
        <span className="inline-block bg-white text-[var(--theme-accent)] text-[0.75rem] font-bold uppercase tracking-tight px-3 py-1 mb-6 antialiased">
          라이프스타일 & 컬처
        </span>
        <h1 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.3rem,2.1vw,2.1rem)] font-normal leading-[1.2] text-white max-w-[850px] mb-6 tracking-[0.02em]">
          <span className="block font-normal text-white">유행처럼 빠르게 스쳐 가는 트렌드의 범람 속에서도 결코 바래지 않을</span>
          <span className="block font-normal text-white/80 mt-2">시대를 깊이 관통하는 지적인 안목과 가치 있는 생각들의 감각적 큐레이션.</span>
        </h1>
        <p className="text-[0.85rem] text-white/75 max-w-[540px] leading-[1.8] mb-5 font-normal">
                    매일 쏟아지는 자극적인 일회성 가십 대신, 당신의 삶의 궤적에 품격 있게 스며들 깊은 예술적 통찰과 에스테틱 라이프스타일 서사를 엮어냅니다.
        </p>
        <div className="flex flex-col gap-4">
          <div className="text-[0.8rem] text-white/55 font-normal tracking-tight antialiased">
            글 · <strong className="text-white/85 antialiased">Julian Vance</strong> · 사진 · <strong className="text-white/85 antialiased">Elena Rossi</strong>
          </div>
          <Link
            href="/ko/templates/magazine/article/slow-living-digital-world"
            className="text-[0.75rem] font-bold uppercase tracking-tight text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors duration-300 w-fit antialiased"
          >
                        최신 에디션 읽기
          </Link>
        </div>
      </div>

       {/* 이슈 서머리 - 하단에서 96px 위 (배너 높이) */}
       <div className="absolute bottom-[96px] left-0 right-0 hidden md:block">
         <div className="max-w-[calc(var(--theme-container)+5rem)] mx-auto w-full px-6 md:px-[4rem]">
           <div className="border-t border-white/25 py-6 md:py-8 flex items-start gap-8 md:gap-12 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
             <div className="shrink-0 min-w-[90px]">
               <span className="text-[0.7rem] font-bold uppercase tracking-tight text-white/40 block mb-2 antialiased">
                                   이번 호의 주제
               </span>
               <span className="text-[1.1rem] font-bold uppercase tracking-tight text-white antialiased">
                                   #42 여름호
               </span>
             </div>
             <div className="w-px self-stretch bg-white/20 shrink-0" />
             {issueTopics.map((item: any, i: number) => (
               <div key={i} className="shrink-0 group cursor-pointer">
                 <span className="text-[0.7rem] font-bold uppercase tracking-tight text-[var(--theme-accent)] block mb-2 antialiased">
                   {item.tag}
                 </span>
                 <span className="text-[0.95rem] text-white/75 group-hover:text-white transition-colors font-normal leading-snug block max-w-[140px]">
                   {item.title}
                 </span>
               </div>
             ))}
           </div>
         </div>
       </div>


       {/* 하단 에디션 배너 */}
       <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-banner-bg)]">
         <div className="max-w-[calc(var(--theme-container)+5rem)] mx-auto px-6 md:px-[4rem] py-6 md:py-0 h-[120px] flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="flex items-center gap-6 md:gap-10">
             <div>
               <p className="text-[0.65rem] font-bold uppercase tracking-tight text-white/45 mb-0.5 antialiased">
                                   지금 바로 구매 가능
               </p>
                <h2 className="font-[family-name:var(--theme-font-heading)] text-[1rem] md:text-[1.25rem] font-normal text-white leading-[1.4] tracking-[-0.02em] antialiased">
                                     2026 여름 프린트 에디션 출시.
                </h2>
             </div>
           </div>

          <Link
            href="/ko/templates/magazine"
            className="shrink-0 self-start md:self-auto text-[0.72rem] font-bold uppercase tracking-tight text-white border border-white/40 px-6 py-2.5 hover:bg-white hover:text-[var(--color-banner-bg)] transition-colors duration-300 antialiased"
          >
                        소장 판본 구매 →
          </Link>
        </div>
      </div>
    </section>
  );
};
