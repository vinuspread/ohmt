// src/app/templates/OHMT012-magazine/-components/sections/FeaturedGrid.tsx
"use client";

import React from "react";
import Link from "next/link";

const featuredItems = [
  { tag: "디자인", title: "북유럽 미니멀 건축의 진화", desc: "코펜하겐에서 스톡홀름까지, 기능과 자연 소재가 도시 풍경을 바꾸는 방식." },
  { tag: "문화", title: "베를린 동부의 숨은 갤러리", desc: "도시 곳곳의 독창적인 미술 공간을 찾아가는 여정." },
  { tag: "라이프스타일", title: "사막에서 지속가능하게 살아가기", desc: "자급자족 공동체가 만들어가는 새로운 생활 방식." }
];

const subItems = [
  { slug: "hidden-galleries-berlin-east-side", img: "/templates/OHMT012-magazine/mag-article-berlin-gallery-v2.jpg", author: "Marta Weber", index: 1 },
  { slug: "regenerative-agriculture-future", img: "/templates/OHMT012-magazine/mag-desert-living-v2.jpg", author: "Sarah Chen", index: 2 }
];

export const FeaturedGrid = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="text-[1.1rem] font-bold uppercase tracking-tight text-[var(--theme-text-muted)] mb-10">
          추천 기사
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* 메인 피처 */}
          <div className="group">
            <div className="overflow-hidden h-[480px] mb-8">
              <img
                src="/templates/OHMT012-magazine/mag-article-nordic-architecture-v2.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="메인 스토리"
              />
            </div>
            <span className="text-[0.875rem] font-bold uppercase tracking-tight text-[var(--theme-accent)] mb-3 block">
              {featuredItems[0].tag}
            </span>
            <h2 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-lead)] font-normal leading-[var(--leading-heading)] mb-3 tracking-[-0.02em]">
              <Link href="/ko/templates/OHMT012-magazine/article/minimalist-architecture-nordic-cities" className="hover:text-[var(--theme-accent)] transition-colors">
                {featuredItems[0].title}
              </Link>
            </h2>
            <p className="text-[0.85rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-4 font-normal">
              {featuredItems[0].desc}
            </p>
            <div className="text-[0.875rem] text-[var(--theme-text-muted)] font-medium">
              글 <strong className="text-[var(--theme-text)]">Anders Holm</strong>
            </div>
          </div>

           {/* 서브 피처 2개 */}
           <div className="flex flex-col gap-8 md:gap-10">
             {subItems.map((item, i) => (
               <div key={i} className="group">
                 <div className="overflow-hidden h-[190px] mb-5">
                   <img
                     src={item.img}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     alt={featuredItems[item.index].title}
                   />
                 </div>
                 <span className="text-[0.875rem] font-bold uppercase tracking-tight text-[var(--theme-accent)] mb-2 block">
                   {featuredItems[item.index].tag}
                 </span>
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.2rem] font-normal leading-[var(--leading-heading)] mb-2 tracking-[-0.02em]">
                   <Link href={`/ko/templates/OHMT012-magazine/article/${item.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                     {featuredItems[item.index].title}
                   </Link>
                 </h3>

                <div className="text-[0.875rem] text-[var(--theme-text-muted)] font-medium">
                  글 <strong className="text-[var(--theme-text)]">{item.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
