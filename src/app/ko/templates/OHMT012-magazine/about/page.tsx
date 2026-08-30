// src/app/ko/templates/OHMT012-magazine/about/page.tsx
"use client";

import React from "react";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

const pillars = [
  { title: "장인정신", desc: "모든 기사는 인쇄판과 동일한 정성으로 편집, 팩트체크, 디자인됩니다." },
  { title: "호기심", desc: "알고리즘이 아니라 아이디어가 이끄는 방향으로, 디자인과 문화와 지속가능성을 가로질러 따라갑니다." },
  { title: "솔직함", desc: "협찬을 에디토리얼로 포장하지 않습니다. 다루는 이유는 오직 중요하다고 판단했기 때문입니다." },
];

export default function AboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-[var(--theme-text)] selection:bg-[var(--theme-accent)] selection:text-white">
        <Header />

        <section className="relative h-[56vh] min-h-[380px] max-h-[560px] overflow-hidden">
          <img src="/templates/OHMT012-magazine/mag-workspace.jpg" alt="OHMT 스튜디오 내부" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] pb-10 md:pb-14">
              <span className="inline-block bg-white text-[var(--theme-accent)] text-[0.75rem] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-5">
                2015년부터
              </span>
              <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] text-white max-w-3xl break-keep">
                디자인, 문화, 지속가능성이 실제로 어떻게 교차하는지 계절마다 기록합니다.
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <p className="text-[1.05rem] text-[var(--theme-text-muted)] max-w-2xl leading-[var(--leading-body)] break-keep">
              FOLIO는 건축학과 학생들 사이에서 복사기로 돌려 보던 자체 제작 잡지에서 시작해, 지금은 계간 인쇄판과
              매일 업데이트되는 온라인판으로 성장했습니다. 커피 테이블 위에 놓일 자격이 있는 기사만 쓴다는
              원칙은 그대로입니다.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--theme-border)]">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
                  <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.6rem] font-normal mb-3">
                    {pillar.title}
                  </h2>
                  <p className="text-[0.95rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] break-keep">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[var(--theme-container)] mx-auto px-6 md:px-[var(--theme-gutter)] grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.8rem] font-normal mb-4">
                인사 나눠요.
              </h2>
              <p className="text-[0.95rem] text-[var(--theme-text-muted)] leading-[var(--leading-body)] mb-6 max-w-md break-keep">
                기고 제안, 정정 요청, 그리고 가끔은 세리프 폰트에 대한 논쟁까지 언제든 환영합니다.
              </p>
              <a
                href="mailto:editors@folio.site"
                className="text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[var(--theme-text)] hover:text-[var(--theme-accent)] transition-colors underline underline-offset-4"
              >
                editors@folio.site
              </a>
            </div>
            <div>
              <h2 className="font-[family-name:var(--theme-font-heading)] text-[1.8rem] font-normal mb-4">
                마스트헤드.
              </h2>
              <ul className="space-y-2 text-[0.95rem] text-[var(--theme-text-muted)]">
                <li><strong className="text-[var(--theme-text)]">Julian Vance</strong> - 편집장</li>
                <li><strong className="text-[var(--theme-text)]">Anders Holm</strong> - 디자인 에디터</li>
                <li><strong className="text-[var(--theme-text)]">Marta Weber</strong> - 컬처 에디터</li>
                <li><strong className="text-[var(--theme-text)]">Sarah Chen</strong> - 지속가능성 에디터</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}
