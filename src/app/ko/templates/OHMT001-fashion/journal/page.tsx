"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ARTICLES = [
  { id: 1, category: "캠페인", title: "마지막 시즌", date: "2026년 6월 15일", excerpt: "베네치아 석호에서 3일간 촬영한, 끝과 그 조용한 아름다움에 대한 시각적 명상.", image: "/templates/OHMT001-fashion/journal-hero-v2.png", featured: true },
  { id: 2, category: "소재", title: "일본 데님에 대하여", date: "2026년 5월 28일", excerpt: "셀비지, 무게, 그리고 완벽한 색바램에 대한 집착. 오카야마의 한 공장으로 거슬러 올라갑니다.", image: "/templates/OHMT001-fashion/hero-custom.jpg" },
  { id: 3, category: "컬렉션", title: "조용한 장인정신", date: "2026년 5월 10일", excerpt: "지금까지 가장 기술적으로 까다로운 의복, 구조적 울 오버코트의 솔기 뒤 이야기.", image: "/templates/OHMT001-fashion/exclusive-lifestyle.png" },
  { id: 4, category: "스타일", title: "계절을 위한 옷차림", date: "2026년 4월 22일", excerpt: "당신과 함께 나이 들어가는 캡슐 워드로브를 만들기 위한 실용적인 안내.", image: "/templates/OHMT001-fashion/branding-custom.jpg" },
];

function JournalContent() {
  const featured = ARTICLES.find(a => a.featured);
  const rest = ARTICLES.filter(a => !a.featured);

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-white">
        <Navbar />
        {featured && (
          <Link href={`/ko/templates/OHMT001-fashion/journal/${featured.id}`} className="block">
            <SubpageHero
              eyebrow={featured.category}
              title={featured.title}
              description={`${featured.date} · 끝과 소재의 기억, 그리고 조용히 사라지는 아름다움에 대한 에디토리얼 노트.`}
              image={featured.image}
              imageAlt={featured.title}
            />
          </Link>
        )}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
            {rest.map(article => (
              <Link href={`/ko/templates/OHMT001-fashion/journal/${article.id}`} key={article.id} className="group block">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-700" />
                </div>
                <span className="block text-[11px] uppercase tracking-[-0.03em] text-[var(--color-text-muted)] mt-5 mb-2">{article.category}</span>
                <h2 className="font-[family-name:var(--font-bodoni)] text-[20px] md:text-[24px] font-normal tracking-[-0.04em] leading-[1.1]">{article.title}</h2>
                <p className="text-[12px] text-[var(--color-text-muted)] mt-1">{article.date}</p>
                <p className="text-[14px] text-black/60 leading-relaxed mt-2 line-clamp-2 break-keep tracking-[-0.025em]">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function JournalPage() {
  return (
    <React.Suspense fallback={null}>
      <JournalContent />
    </React.Suspense>
  );
}
