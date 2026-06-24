// src/app/templates/OHMT012-magazine/-components/sections/FeaturedGrid.tsx
"use client";

import React from "react";
import Link from "next/link";

const featuredItems = [
  { tag: "디자인", title: "북유럽 도시의 미니멀 건축 진화.", desc: "코펜하겐부터 스톡홀름까지, 기능주의와 자연 소재가 도시 풍경을 재정의하다." },
  { tag: "문화", title: "베를린 동쪽 지역의 숨겨진 갤러리.", desc: "도시의 가장 독창적인 미술 공간들을 찾아다니는 큐레이션 여행." },
  { tag: "생활방식", title: "사막에서의 친환경적 삶.", desc: "자급자족 커뮤니티가 만드는 지속 가능한 라이프스타일의 새로운 패러다임." }
];

const subItems = [
  { slug: "hidden-galleries-berlin-east-side", img: "/templates/OHMT012-magazine/mag-3.jpg", author: "Marta Weber", index: 1 },
  { slug: "regenerative-agriculture-future", img: "/templates/OHMT012-magazine/mag-4.jpg", author: "Sarah Chen", index: 2 }
];

export const FeaturedGrid = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
        <div className="text-[1.1rem] font-bold uppercase tracking-tight text-[var(--theme-text-muted)] mb-10">
          추천 스토리
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10">
          {/* 메인 피처 */}
          <div className="group">
            <div className="overflow-hidden h-[480px] mb-8">
              <img
                src="/templates/OHMT012-magazine/mag-2.jpg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="메인 스토리"
              />
            </div>
            <span className="text-[0.875rem] font-bold uppercase tracking-tight text-[var(--theme-accent)] mb-3 block">
              {featuredItems[0].tag}
            </span>
            <h2 className="font-[family-name:var(--theme-font-heading)] text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-[1.3] mb-3 tracking-[-0.02em]">
              <Link href="/ko/templates/OHMT012-magazine-KO/article/minimalist-architecture-nordic-cities" className="hover:text-[var(--theme-accent)] transition-colors">
                {featuredItems[0].title}
              </Link>
            </h2>
            <p className="text-[0.85rem] text-[var(--theme-text-muted)] leading-[1.7] mb-4 font-normal">
              {featuredItems[0].desc}
            </p>
            <div className="text-[0.875rem] text-[var(--theme-text-muted)] font-medium">
              By <strong className="text-[var(--theme-text)]">Anders Holm</strong>
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
                  <h3 className="font-[family-name:var(--theme-font-heading)] text-[1.2rem] font-normal leading-[1.3] mb-2 tracking-[-0.02em]">
                   <Link href={`/ko/templates/OHMT012-magazine-KO/article/${item.slug}`} className="hover:text-[var(--theme-accent)] transition-colors">
                     {featuredItems[item.index].title}
                   </Link>
                 </h3>

                <div className="text-[0.875rem] text-[var(--theme-text-muted)] font-medium">
                  By <strong className="text-[var(--theme-text)]">{item.author}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
