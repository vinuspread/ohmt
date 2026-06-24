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
  { icon: <Leaf size={28} />, title: "지속 가능성 우선", desc: "모든 소재는 엄격한 친환경 인증 기준을 충족합니다. 원자재부터 완제품까지 투명한 공급망을 운영합니다." },
  { icon: <Shield size={28} />, title: "오래가는 품질", desc: "모든 제품에 6개월 구조 보증을 제공합니다. 트렌드를 넘어 오래 신을 수 있는 신발을 만듭니다." },
  { icon: <Zap size={28} />, title: "최소한의 낭비", desc: "당사 공장은 80% 재생에너지를 사용하며, 나머지 20%는 검증된 탄소 상쇄 프로그램으로 보충합니다." },
  { icon: <Users size={28} />, title: "공정한 노동", desc: "공급망의 모든 근로자는 생활 임금을 받습니다. 연 2회 공장 감사를 실시하고 결과를 공개합니다." },
];

const team = [
  { name: "Marco Vinus", role: "창립자 & CEO", img: "/templates/OHMT005-sneaker/blog-1.jpg" },
  { name: "Yuna Park", role: "디자인 총괄", img: "/templates/OHMT005-sneaker/blog-2.jpg" },
  { name: "Tobias Krenn", role: "소재 총괄", img: "/templates/OHMT005-sneaker/blog-3.jpg" },
  { name: "Sofia Reyes", role: "브랜드 디렉터", img: "/templates/OHMT005-sneaker/blog-4.jpg" },
];

function AboutPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Hero */}
        <section className="pt-16 md:pt-32 pb-20 bg-black text-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-white/40 block mb-6">스토리</span>
            <h1 className="text-[clamp(3rem,7vw,6rem)] font-black tracking-[-0.03em] uppercase leading-[1.5] max-w-3xl">
              프리미엄<br /><span className="text-red-600">신발.</span><br />진정한 가치.
            </h1>
            <p className="mt-8 text-[1rem] text-white/60 leading-relaxed max-w-[520px]">
              비누스는 프리미엄 신발과 윤리적 생산이 양립할 수 없다는 통념을 깨기 위해 2019년 설립되었습니다.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-12 md:py-24 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-5">시작</span>
              <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-tight mb-6">작은 작업실에서<br />시작되었습니다.</h2>
              <p className="text-[0.9rem] text-black/60 leading-relaxed mb-4">
                창립자 마르코는 전통 제화 기술을 익히며 3년을 보낸 후, 이 업계의 근본적인 문제를 깨달았습니다 - 품질과 윤리는 항상 맞바꿔야 하는 것처럼 여겨졌습니다.
              </p>
              <p className="text-[0.9rem] text-black/60 leading-relaxed mb-8">
                2019년 리스본에 작은 작업실을 열고, 책임 있는 소싱에 동참하는 제혁소와 직접 협력하기 시작했습니다. 오늘날 비누스는 40여 개국으로 배송되지만, 모든 신발에 쏟는 정성은 그대로입니다.
              </p>
              <Link href="/ko/templates/OHMT005-sneaker-KO/shop-all" className="inline-flex items-center gap-3 bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] px-8 py-4 hover:bg-black/80 transition-colors">
                컬렉션 쇼핑하기 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-bg-secondary)]">
              <img loading="lazy" src="/templates/OHMT005-sneaker/hero-main.jpg" alt="Vinus workshop" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-24 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">우리의 신념</span>
            <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-tight mb-14">핵심 가치.</h2>
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
                { num: "40+", label: "배송 국가" },
                { num: "98%", label: "고객 만족도" },
                { num: "80%", label: "재생에너지 사용" },
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
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black/40 block mb-4">구성원</span>
            <h2 className="text-[2rem] font-black uppercase tracking-[-0.03em] leading-tight mb-14">팀 소개.</h2>
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


export default function AboutPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <AboutPageContent {...props} />
    </React.Suspense>
  );
}
