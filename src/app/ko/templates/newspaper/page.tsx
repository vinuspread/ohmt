// src/app/ko/templates/newspaper/page.tsx
"use client";

import { Suspense } from "react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { FrontPage } from "./_components/sections/FrontPage";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function NewspaperTemplateContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-secondary)] selection:bg-[var(--color-primary)] selection:text-white">
        <Header />
        
        <FrontPage />
        
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12"
        >
          <div className="grid md:grid-cols-[1fr_280px] gap-6 md:gap-12">
            <div>
              <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
                <h2 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold tracking-[-0.03em]">최신 심층 분석</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map(n => (
                  <div key={n} className="flex gap-4 pb-6 border-b border-[#DDD] last:border-0 md:[&:nth-last-child(-n+2)]:border-0">
                    <img loading="lazy" src={`/templates/newspaper/news-${n}.jpg`} className="w-24 h-20 object-cover" alt="Latest" />
                    <div>
                      <h4 className="font-[family-name:var(--theme-font-heading)] text-[0.95rem] font-bold leading-tight mb-1 tracking-[-0.03em]">
                        <Link href="#" className="hover:text-[var(--color-primary)]">신규 무역 협정이 국내 제조업 생태계에 미치는 파장.</Link>
                      </h4>
                      <div className="font-sans text-[0.72rem] text-[#555] font-medium uppercase">5분 전</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <aside>
              <div className="border-b-2 border-black pb-2 mb-6">
                <h2 className="font-[family-name:var(--theme-font-heading)] text-2xl font-bold tracking-[-0.03em]">오피니언 & 칼럼</h2>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { author: "사라 젠킨스", title: "현재의 도시 계획 모델이 미래 세대의 삶을 파괴하는 이유." },
                  { author: "마커스 손", title: "오픈소스 인공지능(AI)이 지닌 시대적 도덕적 책무." },
                  { author: "엘레나 밴스", title: "클래식 음악은 종말을 맞이하는 것이 아니라, 유튜브로 이동하고 있을 뿐이다." }
                ].map((item, i) => (
                  <div key={i} className="pb-6 border-b border-[#DDD] last:border-0">
                    <div className="font-sans text-[0.72rem] font-bold uppercase tracking-wider text-[#555] mb-1">{item.author}</div>
                    <h4 className="font-[family-name:var(--theme-font-heading)] font-serif text-base leading-snug tracking-[-0.03em]">
                      <Link href="#" className="hover:text-[var(--color-primary)]">"{item.title}"</Link>
                    </h4>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </motion.section>
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function NewspaperTemplate(props: any) {
  return (
    <React.Suspense fallback={null}>
      <NewspaperTemplateContent {...props} />
    </React.Suspense>
  );
}
