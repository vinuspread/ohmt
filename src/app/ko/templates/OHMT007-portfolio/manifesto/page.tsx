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
                        <span className="text-[13px] font-black tracking-tight text-[var(--color-accent)] uppercase block">챕터 01</span>
                        <h1 className="text-7xl md:text-[10vw] font-black tracking-tighter leading-[1.5] uppercase">매니페스토</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                        <div className="lg:col-span-8 space-y-20">
                            <h2 className="text-[4vw] font-black tracking-tighter leading-[1.5] uppercase">
                                과감한 <span className="text-[var(--color-accent)]">단순화</span> <br /> 
                                시각적 <br /> 
                                <span>진실의 형태</span>.
                            </h2>
                            <div className="space-y-8 text-xl font-medium leading-relaxed max-w-2xl text-black/60">
                                <p>
                                    우리는 무한한 소음의 시대에 가장 강력한 도구는 침묵이라고 믿습니다. 핵심 정체성만 남을 때까지 불필요한 것을 제거하는 것이 우리의 실천입니다.
                                </p>
                                <p>
                                    모든 픽셀은 목적을 가져야 합니다. 모든 인터랙션은 감정을 불러일으켜야 합니다. 우리는 단순히 인터페이스를 구축하는 것이 아니라 숨 쉬는 디지털 환경을 설계합니다.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 bg-[var(--color-bg-secondary)] aspect-[3/4] overflow-hidden p-12 flex flex-col justify-between">
                            <span className="text-[13px] font-black tracking-[0.4em] uppercase opacity-20">OHMT laboratory // 2025</span>
                            <div className="space-y-4">
                                <div className="w-12 h-[1px] bg-black" />
                                <p className="text-[13px] font-black tracking-widest uppercase leading-loose">
                                    01. Clarity <br />
                                    02. Intent <br />
                                    03. Emotion <br />
                                    04. Sustainability
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


export default function PortfolioManifestoPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <PortfolioManifestoPageContent {...props} />
    </React.Suspense>
  );
}
