"use client";

import { Suspense } from "react";
import React from "react";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { motion } from "framer-motion";

import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function PortfolioManifestoPageContent() {
    return (
      <TemplateWrapper theme={theme}>
        <main className="antialiased min-h-screen bg-white selection:bg-[var(--color-accent)] selection:text-white pb-16 md:pb-32">
            <Header />
            <div className="pt-48 pb-16 px-6 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-24">
                    <div className="space-y-4 border-b border-black/10 pb-12">
                        <span className="text-xs font-black tracking-tight text-[var(--color-accent)] uppercase block">챕터 01</span>
                        <h1 className="text-7xl font-black tracking-tighter leading-[var(--leading-heading)] uppercase">스튜디오 선언</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-8 space-y-20">
                            <h2 className="text-[4vw] font-black tracking-tighter leading-[var(--leading-heading)] uppercase">
                                필요한 것만 남겨 <span className="text-[var(--color-accent)]">브랜드를</span> <br />
                                분명하게 만드는 <br />
                                <span>시각 언어</span>.
                            </h2>
                            <div className="space-y-8 text-xl font-medium leading-relaxed max-w-2xl text-black/60">
                                <p>
                                    정보와 표현이 넘치는 환경일수록 무엇을 덜어낼지 결정하는 일이 중요합니다. 브랜드의 핵심이 분명하게 보일 때까지 불필요한 요소를 정리합니다.
                                </p>
                                <p>
                                    화면의 모든 요소에는 역할이 있어야 하고, 인터랙션은 사용자가 다음 행동을 자연스럽게 이해하도록 도와야 합니다. 보기 좋은 화면을 넘어 실제로 사용하기 편한 디지털 경험을 설계합니다.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 bg-[var(--color-bg-secondary)] aspect-[3/4] overflow-hidden p-12 flex flex-col justify-between">
                            <span className="text-xs font-black tracking-[0.4em] uppercase opacity-20">HALF LIGHT 스튜디오 // 2025</span>
                            <div className="space-y-4">
                                <div className="w-12 h-[1px] bg-black" />
                                <p className="text-xs font-black tracking-widest uppercase leading-loose">
                                    01. 명확성 <br />
                                    02. 목적 <br />
                                    03. 감정 <br />
                                    04. 지속 가능성
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
      </TemplateWrapper>
);
}


export default function PortfolioManifestoPage() {
  return (
    <React.Suspense fallback={null}>
      <PortfolioManifestoPageContent />
    </React.Suspense>
  );
}
