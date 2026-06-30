"use client";

import React from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ARTICLES = [
  { id: 1, category: "캠페인", title: "마지막 시즌", date: "2026년 6월 15일", excerpt: "베네치아 석호에서 3일간 촬영한, 끝과 그 조용한 아름다움에 대한 시각적 명상.", image: "/templates/OHMT001-fashion/exclusive-custom.jpg", featured: true },
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
          <section className="relative pt-[120px] md:pt-[160px]">
            <div className="relative aspect-[21/9] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-12 max-w-2xl">
                <span className="text-[11px] uppercase tracking-widest text-white/60">{featured.category}</span>
                <h1 className="font-[family-name:var(--font-bodoni)] text-[32px] md:text-[48px] text-white font-bold tracking-tight mt-2 leading-[1.1]">{featured.title}</h1>
                <p className="text-[12px] text-white/40 mt-3">{featured.date}</p>
              </div>
            </div>
          </section>
        )}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
            {rest.map(article => (
              <article key={article.id} className="group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-700" />
                </div>
                <span className="block text-[11px] uppercase tracking-widest text-black/40 mt-5 mb-2">{article.category}</span>
                <h2 className="font-[family-name:var(--font-bodoni)] text-[20px] md:text-[24px] font-bold tracking-tight leading-[1.2]">{article.title}</h2>
                <p className="text-[12px] text-black/40 mt-1">{article.date}</p>
                <p className="text-[13px] text-black/60 leading-relaxed mt-2 line-clamp-2">{article.excerpt}</p>
              </article>
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
