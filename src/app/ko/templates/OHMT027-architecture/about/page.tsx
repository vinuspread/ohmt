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
  title: "소개 | OHMT 건축 스튜디오",
  description: "OHMT의 설계 철학과 스튜디오의 시작, 프로젝트를 함께 만드는 사람들을 소개합니다.",
  openGraph: {
    title: "소개 | OHMT 건축 스튜디오",
    description: "OHMT의 설계 철학과 스튜디오의 시작, 프로젝트를 함께 만드는 사람들을 소개합니다.",
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
    { year: "2012", title: "스튜디오 설립", desc: "서울에서 주거 공간 설계로 시작했습니다." },
    { year: "2016", title: "공공 프로젝트로 확장", desc: "종로 시빅 파빌리온 설계 공모에 당선되었습니다." },
    { year: "2020", title: "수상과 해외 소개", desc: "하이랜드 빌라로 공간건축 그랑프리를 수상했습니다." },
    { year: "2024", title: "지속가능한 설계", desc: "재료 선택과 시공 방식에 지속가능성을 반영합니다." },
  ];

  const team = [
    {
      name: "제시카 포인트",
      role: "대표 건축가",
      image: "/templates/OHMT027-architecture/project-1.jpg",
    },
    {
      name: "라이언 베이서",
      role: "수석 인테리어 디자이너",
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
                <span className="font-sans text-xs font-medium tracking-[0.15em] text-[#888888] uppercase block">
                  스튜디오
                </span>
                <h1 className="font-heading font-normal text-5xl md:text-6xl lg:text-7xl leading-[var(--leading-heading)] text-[#1A1A1A]">
                  OHMT 소개
                </h1>
                <p className="font-heading font-normal text-2xl md:text-3xl leading-[var(--leading-body)] text-[#888888] pt-4">
                  공간은 사람의 일상과 관계를 바꿀 수 있습니다. OHMT는 구조와 재료, 동선을 세심하게 다듬어 오래 사용할 수 있는 공간을 설계합니다.
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
                  <h2 className="font-heading font-normal text-3xl md:text-4xl text-[#1A1A1A]">
                    오래 머무는 공간
                  </h2>
                </div>
                <div className="lg:col-span-8 font-sans text-base leading-loose text-[#888888] space-y-6">
                  <p>
                    전체 공간의 흐름부터 손이 닿는 작은 디테일까지 함께 설계합니다. 재료의 질감과 빛, 비어 있는 여백이 자연스럽게 이어지도록 조율합니다.
                  </p>
                  <p>
                    건축과 인테리어, 브랜드 경험을 하나의 공간 안에서 연결합니다. 재료를 과장하지 않고 본래의 성질을 살리며, 사용 목적에 맞게 공간을 명확하게 구성합니다.
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
                  <h2 className="font-heading font-normal text-3xl md:text-4xl text-[#1A1A1A]">
                    스튜디오의 시작
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {timeline.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="space-y-4">
                      <span className="font-heading font-normal text-5xl text-[#B07D4F] leading-none block">
                        {item.year}
                      </span>
                      <h3 className="font-sans font-medium text-base text-[#1A1A1A]">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-[#888888] leading-relaxed">
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
                <h2 className="font-heading font-normal text-3xl md:text-4xl text-[#1A1A1A]">
                  함께하는 사람들
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
                      <h3 className="font-sans font-medium text-base text-[#1A1A1A]">
                        {member.name}
                      </h3>
                      <p className="font-sans text-xs font-medium tracking-wider text-[#888888]">
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
