// src/app/templates/OHMT012-magazine/-components/sections/Hero.tsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const issueTopics = [
  { tag: "디자인", title: "다시 쓰는 북유럽 미니멀리즘" },
  { tag: "문화", title: "베를린의 숨겨진 예술 현장" },
  { tag: "여행", title: "교토의 숨은 찻집" },
  { tag: "지속가능성", title: "농업의 미래" }
];

export const Hero = () => {

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="/templates/OHMT012-magazine/mag-hero.jpg"
        alt="매거진 히어로"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/85" />

      {/* 상단 카피 */}
      <div className="absolute left-0 right-0 px-6 md:px-[4rem] max-w-[calc(var(--theme-container)+5rem)] mx-auto w-full" style={{ top: "calc(38% - 220px)" }}>
        <span className="inline-block bg-white text-[var(--theme-accent)] text-[0.75rem] font-bold uppercase tracking-tight px-3 py-1 mb-6 antialiased">
          라이프스타일과 문화
        </span>
        <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h1)] font-normal leading-[var(--leading-heading)] text-white max-w-[720px] mb-6 tracking-[0.01em] break-keep">
          <span className="block font-normal text-white">유행보다 오래 남는 감각.</span>
          <span className="block font-normal text-white/80 mt-2">삶을 깊게 보는 이야기.</span>
        </h1>
        <p className="text-[0.85rem] text-white/75 max-w-[540px] leading-loose mb-5 font-normal">
                    빠르게 소비되는 소식 대신, 오래 두고 읽을 디자인과 문화, 삶의 이야기를 전합니다.
        </p>
        <div className="flex flex-col gap-4">
          <div className="text-[0.8rem] text-white/55 font-normal tracking-tight antialiased">
            글 · <strong className="text-white/85 antialiased">Julian Vance</strong> · 사진 · <strong className="text-white/85 antialiased">Elena Rossi</strong>
          </div>
          <Link
            href="/ko/templates/OHMT012-magazine/article/slow-living-digital-world"
            className="text-[0.75rem] font-bold uppercase tracking-tight text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors duration-300 w-fit antialiased"
          >
                        최신호 읽기
          </Link>
        </div>
      </div>

       {/* 이슈 서머리 - 하단 배너 높이만큼 위에 배치 */}
       <div className="absolute bottom-30 left-0 right-0 hidden md:block">
         <div className="max-w-[calc(var(--theme-container)+5rem)] mx-auto w-full px-6 md:px-[4rem]">
           <div className="flex items-start gap-8 overflow-x-auto border-t border-white/25 py-6 md:gap-12 md:py-8" style={{ scrollbarWidth: "none" }}>
             <div className="min-w-[90px] shrink-0">
               <span className="text-[0.7rem] font-bold uppercase tracking-tight text-white/40 block mb-2 antialiased">
                                   이번 호의 주제
               </span>
               <span className="text-[1.1rem] font-bold uppercase tracking-tight text-white antialiased">
                                   제42호 · 여름
               </span>
             </div>
             <div className="w-px self-stretch bg-white/20 shrink-0" />
             {issueTopics.map((item: any, i: number) => (
               <div key={i} className="group shrink-0 cursor-pointer">
                 <span className="text-[0.7rem] font-bold uppercase tracking-tight text-[var(--theme-accent)] block mb-2 antialiased">
                   {item.tag}
                 </span>
                 <span className="block whitespace-nowrap text-[0.95rem] font-normal leading-snug text-white/75 transition-colors group-hover:text-white">
                   {item.title}
                 </span>
               </div>
             ))}
           </div>
         </div>
       </div>


        <div className="absolute bottom-0 left-0 right-0 bg-[var(--color-banner-bg)]">
          <div className="max-w-[calc(var(--theme-container)+5rem)] mx-auto px-6 md:px-[4rem] py-6 md:py-0 min-h-[120px] md:h-[120px] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-6 md:gap-10">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-tight text-white/45 mb-0.5 antialiased">
                  지금 구매 가능
                </p>
                <h2 className="font-[family-name:var(--theme-font-heading)] text-[1rem] md:text-[1.25rem] font-normal text-white leading-[var(--leading-heading)] tracking-[-0.02em] antialiased">
                  2026년 여름호가 발행되었습니다.
                </h2>
              </div>
            </div>

            <Link
              href="/ko/templates/OHMT012-magazine"
              className="inline-flex items-center gap-2 shrink-0 self-start md:self-auto text-[0.72rem] font-bold uppercase tracking-tight text-white border border-white/40 px-6 py-2.5 hover:bg-white hover:text-[var(--color-banner-bg)] transition-colors duration-300 antialiased"
            >
              인쇄본 구매 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
    </section>
  );
};
