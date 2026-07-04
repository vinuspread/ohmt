// src/app/ko/templates/OHMT027-architecture/about/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { ScrollReveal } from "../_components/ui/ScrollReveal";
import { CustomCursor } from "../_components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "소개 - 건축 포트폴리오 - OHMT",
  description: "OHMT의 건축 철학, 스튜디오의 역사, 그리고 프로젝트를 이끄는 팀을 소개합니다.",
  openGraph: {
    title: "소개 - 건축 포트폴리오 - OHMT",
    description: "OHMT의 건축 철학, 스튜디오의 역사, 그리고 프로젝트를 이끄는 팀을 소개합니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT027-architecture/about",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT027-architecture/about",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT027-architecture/about",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT027-architecture/about",
    },
  },
};

export default function AboutPage() {
  const timeline = [
    { year: "2012", title: "스튜디오 설립", desc: "서울을 기반으로 하이엔드 주거 설계에 집중하며 시작했습니다." },
    { year: "2016", title: "공공 공간으로 확장", desc: "종로 시빅 파빌리온 설계 공모에서 당선되었습니다." },
    { year: "2020", title: "국제적 인정", desc: "하이랜드 빌라로 공간건축 그랑프리를 수상했습니다." },
    { year: "2024", title: "탄소중립 실천", desc: "지속 가능한 시공 방식과 재료 전략을 전 프로젝트에 적용합니다." },
  ];

  const team = [
    {
      name: "제시카 포인트",
      role: "대표 건축가",
      image: "/templates/OHMT027-architecture/project-1.jpg",
    },
    {
      name: "라이언 베이서",
      role: "리드 인테리어 디자이너",
      image: "/templates/OHMT027-architecture/project-5.jpg",
    },
    {
      name: "캐리 바스",
      role: "구조 엔지니어",
      image: "/templates/OHMT027-architecture/project-6.jpg",
    },
  ];

  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[#1A1A1A] font-sans antialiased overflow-hidden selection:bg-[#1A1A1A] selection:text-white">
        <Header />
        
        <main className="pt-32 pb-24">
          {/* Hero Section */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
            <ScrollReveal>
              <div className="space-y-6 max-w-4xl">
                <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[#888888] uppercase block">
                  우리의 맥락
                </span>
                <h1 className="font-heading font-normal text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] text-[#1A1A1A]">
                  스튜디오 소개.
                </h1>
                <p className="font-heading font-normal text-[24px] md:text-[28px] leading-[1.5] text-[#888888] pt-4">
                  공간은 사람들이 살아가는 방식을 바꿀 수 있다고 믿습니다. 우리의 설계는 정밀한 장인정신과 유기적인 공간의 대화를 하나로 엮습니다.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Full-Bleed Image Section */}
          <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[350px] mb-24">
            <Image
              src="/templates/OHMT027-architecture/about.jpg"
              alt="건축 스튜디오 작업 공간"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </section>

          {/* Detailed Philosophy */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 mb-24 lg:mb-32">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                  <h2 className="font-heading font-normal text-[30px] md:text-[36px] text-[#1A1A1A]">
                    조용한 존재감.
                  </h2>
                </div>
                <div className="lg:col-span-8 font-sans text-[16px] leading-[1.8] text-[#888888] space-y-6">
                  <p>
                    우리가 다루는 모든 모서리, 표면, 비어 있는 공간은 깊은 감각적 울림을 만들기 위해 계산됩니다. 큰 공간의 흐름 안에서도 작은 디테일과 재료의 완성도를 놓치지 않습니다.
                  </p>
                  <p>
                    우리는 건축, 공간 브랜드 경험, 촉각적 상호작용이 만나는 지점에서 일합니다. 침묵을 만들고, 재료의 정직함을 드러내며, 물리적 공간을 엄격하게 조직하는 시스템을 설계합니다.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Timeline Section */}
          <section className="bg-[#F5F5F5] py-20 lg:py-28 mb-24 lg:mb-32">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
              <ScrollReveal>
                <div className="border-b border-[#E0E0E0] pb-8 mb-16">
                  <h2 className="font-heading font-normal text-[30px] md:text-[36px] text-[#1A1A1A]">
                    우리의 역사.
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {timeline.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="space-y-4">
                      <span className="font-heading font-normal text-[48px] text-[#B07D4F] leading-none block">
                        {item.year}
                      </span>
                      <h3 className="font-sans font-medium text-[16px] text-[#1A1A1A]">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[14px] text-[#888888] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
            <ScrollReveal>
              <div className="border-b border-[#E0E0E0] pb-8 mb-16">
                <h2 className="font-heading font-normal text-[30px] md:text-[36px] text-[#1A1A1A]">
                  팀.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="group space-y-4">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-sans font-medium text-[16px] text-[#1A1A1A]">
                        {member.name}
                      </h3>
                      <p className="font-sans text-[12px] font-medium tracking-wider text-[#888888]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </main>

        <Footer />
        <CustomCursor />
      </div>
    </TemplateWrapper>
  );
}
