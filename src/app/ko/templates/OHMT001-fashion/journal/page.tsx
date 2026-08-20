"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const ARTICLES = [
  { id: 1, category: "캠페인", title: "베네치아에서 기록한 마지막 여름", date: "2026년 6월 15일", excerpt: "베네치아 석호의 빛과 바람 속에서 촬영한 봄·여름 컬렉션의 마지막 장면.", image: "/templates/OHMT001-fashion/journal-hero-v2.png", featured: true },
  { id: 2, category: "소재", title: "셀비지 데님은 어떻게 달라지는가", date: "2026년 5월 28일", excerpt: "오카야마의 셔틀 직기와 인디고 염색, 오래 입을수록 달라지는 데님의 특징을 살펴봅니다.", image: "/templates/OHMT001-fashion/hero-custom.jpg" },
  { id: 3, category: "컬렉션", title: "울 오버코트 안쪽의 설계", date: "2026년 5월 10일", excerpt: "겉으로는 보이지 않는 심지와 봉제, 보강 작업을 통해 한 벌의 코트가 완성되는 과정을 소개합니다.", image: "/templates/OHMT001-fashion/exclusive-lifestyle.png" },
  { id: 4, category: "스타일", title: "적은 옷으로 계절을 보내는 법", date: "2026년 4월 22일", excerpt: "자주 입는 옷을 중심으로 활용도 높은 옷장을 구성하는 방법을 정리했습니다.", image: "/templates/OHMT001-fashion/branding-custom.jpg" },
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
              description={`${featured.date} · 소재와 제작 과정, 오래 입는 방법을 소개하는 SILO 저널.`}
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
                <span className="block text-xs uppercase tracking-[-0.03em] text-[var(--color-text-muted)] mt-5 mb-2">{article.category}</span>
                <h2 className="font-[family-name:var(--font-bodoni)] text-xl md:text-2xl font-normal tracking-[-0.04em] leading-[var(--leading-heading)]">{article.title}</h2>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{article.date}</p>
                <p className="text-sm text-black/60 leading-relaxed mt-2 line-clamp-2 break-keep tracking-[-0.025em]">{article.excerpt}</p>
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
