"use client";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Shield, Zap, Users } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

const values = [
  { icon: <Leaf size={28} />, title: "우수한 소재 사용", desc: "사용되는 모든 소재는 엄격한 친환경 인증 기준을 충족합니다. 원자재를 고르는 단계부터 완제품이 출고될 때까지 제작 과정을 투명하게 관리합니다." },
  { icon: <Shield size={28} />, title: "믿을 수 있는 품질", desc: "모든 제품에 6개월 품질 보증을 제공합니다. 유행을 따르기보다 반복해서 신어도 형태와 착용감이 쉽게 무너지지 않는 신발을 만듭니다." },
  { icon: <Zap size={28} />, title: "친환경 제품 생산", desc: "생산 시설에서 사용하는 에너지의 80%를 재생에너지로 충당하고, 나머지는 검증된 탄소 상쇄 프로그램을 통해 관리합니다." },
  { icon: <Users size={28} />, title: "올바른 직원 복지", desc: "협력 공장의 정당한 임금과 쾌적한 근무 환경을 정기적으로 확인합니다. 연 2회 현장 점검을 진행하고 주요 결과를 공개합니다." },
];

const team = [
  { name: "Marco Vinus", role: "창업자·대표", img: "/templates/OHMT005-sneaker/about-founder.png" },
  { name: "Yuna Park", role: "디자인 총괄", img: "/templates/OHMT005-sneaker/team-yuna.png" },
  { name: "Tobias Krenn", role: "소재 총괄", img: "/templates/OHMT005-sneaker/team-tobias-v2.webp" },
  { name: "Sofia Reyes", role: "브랜드 디렉터", img: "/templates/OHMT005-sneaker/team-sofia.png" },
];

function AboutPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Hero */}
        <section className="pt-16 md:pt-32 pb-20 bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/40 block mb-6">브랜드 이야기</span>
            <h1 className="text-[length:var(--text-display)] font-black tracking-[-0.03em] uppercase leading-[var(--leading-heading)] max-w-3xl">
              좋은 소재로<br /><span className="text-red-600">제대로 만든 신발.</span><br />가까운 매장에서 만나보세요.
            </h1>
            <p className="mt-8 text-[1rem] text-white/60 leading-relaxed max-w-[520px]">
              좋은 소재와 믿을 수 있는 품질로 새로운 가치를 제공합니다.
              <br />
              더 가까운 곳에서 고객을 만나기 위해 2019년에 시작했습니다.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 md:py-24 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-5">브랜드의 시작</span>
              <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-[var(--leading-heading)] mb-6">리스본의 작은 작업실에서<br />첫 신발을 만들었습니다.</h2>
              <p className="text-[0.9rem] text-black/60 leading-relaxed mb-4">
                창립자 마르코는 전통 제화 기술을 배우며 소재와 제작 환경을 함께 살폈습니다.
                <br />
                좋은 신발을 만들기 위해 품질과 책임 있는 생산 중 하나를 포기할 필요는 없다고 생각했습니다.
              </p>
              <p className="text-[0.9rem] text-black/60 leading-relaxed mb-8">
                2019년 리스본에 작은 작업실을 열고, 공급 경로를 확인할 수 있는 제혁소와 직접 협업하기 시작했습니다.
                <br />
                지금은 40여 개국에 제품을 보내고 있지만 소재를 고르고 한 켤레씩 마감하는 기준은 처음과 같습니다.
              </p>
              <Link href="/ko/templates/OHMT005-sneaker/shop-all" className="inline-flex items-center gap-3 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/80 transition-colors">
                컬렉션 보기 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-bg-secondary)]">
              <img loading="lazy" src="/templates/OHMT005-sneaker/about-founder.png" alt="작업실에 선 창립자 마르코" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-24 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">우리가 지키는 기준</span>
            <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-[var(--leading-heading)] mb-14">신발을 만드는 네 가지 원칙.</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white p-8 border border-black/5">
                  <span className="text-black/30 block mb-5">{v.icon}</span>
                  <h3 className="text-[1rem] font-black uppercase tracking-[-0.03em] mb-3">{v.title}</h3>
                  <p className="text-[0.82rem] text-black/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-24 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-black/10">
              {[
                { num: "2019", label: "창립" },
                { num: "40+", label: "배송 가능 국가" },
                { num: "98%", label: "구매 만족도" },
                { num: "80%", label: "재생에너지 비율" },
              ].map((s, i) => (
                <div key={i} className="py-10 px-8 text-center">
                  <p className="text-[3rem] font-black tracking-[-0.03em] leading-none mb-2">{s.num}</p>
                  <p className="text-[0.75rem] text-black/50 uppercase tracking-[0.1em] font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-12 md:py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">함께 만드는 사람들</span>
            <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-[var(--leading-heading)] mb-14">스니커즈에 미친 사람들.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <div key={i} className="group">
                  <div className="aspect-square overflow-hidden bg-[var(--color-bg-secondary)] mb-4">
                    <img loading="lazy" src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="text-[0.9rem] font-black uppercase">{m.name}</p>
                  <p className="text-[0.78rem] text-black/50">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </TemplateWrapper>
  );
}


export default function AboutPage() {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent />
    </React.Suspense>
  );
}
