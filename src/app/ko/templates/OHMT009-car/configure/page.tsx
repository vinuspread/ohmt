"use client";

import React, { useState } from "react";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const wheels = [
  { name: '20" 에어로 (Aero)',        desc: "주행 거리 및 효율성 극대화", price: 0 },
  { name: '21" 스포츠 (Sport)',       desc: "넓은 휠베이스, 민첩한 코너링",  price: 2400000 },
  { name: '22" 퍼포먼스 (Performance)', desc: "트랙 성능 튜닝, 타협 없는 주행",     price: 4800000 },
];

const interiors = [
  { name: "차콜 스웨이드 (Charcoal Suede)", desc: "모던하고 절제된 인테리어", price: 0 },
  { name: "아이보리 가죽 (Ivory Leather)",  desc: "클래식하고 고급스러운 마감", price: 1600000 },
  { name: "새들 브라운 (Saddle Brown)",   desc: "따뜻하고 중후한 풍미",  price: 1600000 },
];

const views = ["외관", "측면", "후면"];
const viewImgs = [
  "/templates/OHMT009-car/configure-gt7-front.jpg",
  "/templates/OHMT009-car/hero-2.jpg",
  "/templates/OHMT009-car/configure-gt7-rear.jpg",
];

const BASE_PRICE = 89400000;
function fmt(n: number) {
  return n === 0 ? "기본 포함" : `+${(n / 10000).toLocaleString("ko-KR")}만 원`;
}

function CarConfigurePageContent() {
  const [wheel,    setWheel]    = useState(0);
  const [interior, setInterior] = useState(0);
  const [view,     setView]     = useState(0);

  const total = BASE_PRICE + wheels[wheel].price + interiors[interior].price;

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black min-h-screen">
        <Header />

        <div className="flex flex-col lg:flex-row" style={{ minHeight: "calc(100vh - 68px)" }}>

          {/* ── Left: interactive preview ── */}
          <div className="lg:flex-1 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] flex flex-col bg-[var(--color-primary)] pt-16">

            {/* View tabs */}
            <div className="flex gap-1 px-8 pt-6 pb-4">
              {views.map((v, i) => (
                <button
                  key={v}
                  onClick={() => setView(i)}
                  className={`px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest transition-all border ${
                    i === view
                      ? "border-[var(--theme-accent)] text-[var(--theme-accent)]"
                      : "border-transparent text-[var(--theme-text-muted)] hover:text-white"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>

            {/* Car render area */}
            <div className="flex-1 relative overflow-hidden">
              {viewImgs.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    i === view ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-[var(--color-primary)]/20 pointer-events-none" />
            </div>
          </div>

          {/* ── Right: config panel ── */}
          <div className="lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col bg-[var(--color-primary)] overflow-y-auto pt-16">

            <div className="px-8 py-8 border-b border-white/5">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-2">옵션 설정</p>
              <h1 className="text-[1.6rem] font-bold tracking-[-0.03em] leading-[var(--leading-heading)]">OHMT GT7</h1>
              <p className="text-[0.78rem] text-[var(--theme-text-muted)] mt-1">퍼포먼스 세단 · 8,940만 원부터</p>
            </div>

            {/* Wheels */}
            <div className="px-8 py-8 border-b border-white/5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] mb-4">휠 선택</p>
              <div className="space-y-2">
                {wheels.map((w, i) => (
                  <button
                    key={w.name}
                    onClick={() => setWheel(i)}
                    className={`w-full flex items-center gap-3 p-3.5 border transition-all text-left ${
                      i === wheel
                        ? "border-[var(--theme-accent)]/60 bg-white/4"
                        : "border-white/8 hover:border-white/20"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-colors ${
                      i === wheel ? "border-[var(--theme-accent)] bg-[var(--theme-accent)]" : "border-white/30"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.82rem] font-medium">{w.name}</p>
                      <p className="text-[0.7rem] text-[var(--theme-text-muted)]">{w.desc}</p>
                    </div>
                    <span className="text-[0.72rem] text-[var(--theme-text-muted)] shrink-0">{fmt(w.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interior */}
            <div className="px-8 py-8 border-b border-white/5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--theme-text-muted)] mb-4">인테리어 선택</p>
              <div className="space-y-2">
                {interiors.map((item, i) => (
                  <button
                    key={item.name}
                    onClick={() => setInterior(i)}
                    className={`w-full flex items-center gap-3 p-3.5 border transition-all text-left ${
                      i === interior
                        ? "border-[var(--theme-accent)]/60 bg-white/4"
                        : "border-white/8 hover:border-white/20"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full border-2 shrink-0 transition-colors ${
                      i === interior ? "border-[var(--theme-accent)] bg-[var(--theme-accent)]" : "border-white/30"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.82rem] font-medium">{item.name}</p>
                      <p className="text-[0.7rem] text-[var(--theme-text-muted)]">{item.desc}</p>
                    </div>
                    <span className="text-[0.72rem] text-[var(--theme-text-muted)] shrink-0">{fmt(item.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price summary */}
            <div className="px-8 py-8 mt-auto">
              <div className="space-y-2.5 mb-6">
                {[
                  { k: "차량 기본 가격", v: `${(BASE_PRICE / 10000).toLocaleString("ko-KR")}만 원` },
                  { k: wheels[wheel].name, v: fmt(wheels[wheel].price) },
                  { k: interiors[interior].name, v: fmt(interiors[interior].price) },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between text-[0.78rem]">
                    <span className="text-[var(--theme-text-muted)]">{k}</span>
                    <span className="text-white/80">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center border-t border-white/10 pt-5 mb-6">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-widest text-[var(--theme-text-muted)]">예상 총 가격</p>
                  <p className="text-[1.8rem] font-bold tracking-tight">{(total / 10000).toLocaleString("ko-KR")}만 원</p>
                </div>
                <span className="text-[0.65rem] text-[var(--theme-text-muted)] text-right leading-relaxed max-w-[120px]">
                  세금 및 탁송료 제외
                </span>
              </div>

              <button className="w-full py-4 bg-[var(--theme-accent)] text-black font-bold text-[0.7rem] uppercase tracking-[0.18em] hover:brightness-110 transition-all mb-3">
                설정 내역 저장
              </button>
              <button className="w-full py-3.5 border border-white/15 text-white/70 text-[0.7rem] uppercase tracking-[0.15em] font-medium hover:border-white/40 hover:text-white transition-all">
                시승 예약하기
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarConfigurePage() {
  return (
    <React.Suspense fallback={null}>
      <CarConfigurePageContent />
    </React.Suspense>
  );
}
