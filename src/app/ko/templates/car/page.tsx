// src/app/ko/templates/OHMT009-car-KO/page.tsx
"use client";

import { Suspense } from "react";
import React from "react";
import { Header } from "./_components/layout/Header";
import { Footer } from "./_components/layout/Footer";
import { Hero } from "./_components/sections/Hero";
import { StatsRow } from "./_components/sections/StatsRow";
import { SplitSection, FullBleedSection } from "./_components/sections/FeatureGrid";
import { AppSection } from "./_components/sections/AppSection";
import { Testimonials } from "./_components/sections/Testimonials";
import { NewsSection } from "./_components/sections/NewsSection";
import theme from "./theme.json";
import { TemplateWrapper } from "./_components/TemplateWrapper";

function CarTemplateContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />
        
        <Hero />
        
        <StatsRow />
        
        <SplitSection 
          eyebrow="VINUS 테크놀로지"
          title={"기술과 예술적 디자인의\n경이로운 결합."}
          desc="자체 개발한 독자적 AI 플랫폼이 실시간 도로 상태 분석, 예측형 서스펜션 조절, 적응형 파워트레인을 제어하여, 기계적 공학을 넘어 살아 움직이는 생명체 같은 드라이빙을 선사합니다."
          img="/templates/car/car-5.jpg"
        />
        
        <FullBleedSection 
          eyebrow="배터리 & 주행거리"
          title={"경이로운 효율성과\n타협 없는 주행 능력."}
          desc="111.2 kWh 대용량 배터리 탑재. 1회 충전 시 530km 주행 가능. 단 5분만에 100km 주행 가능."
          img="/templates/car/hero-1.jpg"
        />
        
        <SplitSection 
          eyebrow="고속 충전"
          title={"압도적인 속도로 구현되는\n초고속 충전 시스템."}
          desc="800V 전기 아키텍처는 최대 350kW급의 초고속 충전을 지원합니다. 단 22분 만에 배터리의 10%에서 80%까지 충전이 완료됩니다. 커피 한 잔 기다리는 것보다 빠릅니다."
          img="/templates/car/hero-2.jpg"
          reverse
        />
        
        <AppSection />
        
        <FullBleedSection 
          eyebrow="인테리어"
          title={"완전히 재정의된\n인테리어."}
          desc="30인치 파노라믹 디스플레이 탑재. 운전자의 선호도를 기억하는 반응형 햅틱 컨트롤. 시트 가죽을 대체하는 최고급 친환경 오가닉 소재의 적용."
          img="/templates/car/car-3.jpg"
        />
        
        <Testimonials />
        
        <NewsSection />
        
        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarTemplate(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CarTemplateContent {...props} />
    </React.Suspense>
  );
}
