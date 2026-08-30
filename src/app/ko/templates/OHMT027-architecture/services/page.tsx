// src/app/ko/templates/OHMT027-architecture/services/page.tsx
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import { ScrollReveal } from "../_components/ui/ScrollReveal";
import { CustomCursor } from "../_components/ui/CustomCursor";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "서비스 | OHMT 건축 스튜디오",
  description: "주거 설계부터 상업·공공 건축, 인테리어 설계와 시공 감리까지 제공합니다.",
  openGraph: {
    title: "서비스 | OHMT 건축 스튜디오",
    description: "주거 설계부터 상업·공공 건축, 인테리어 설계와 시공 감리까지 제공합니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT027-architecture/services",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg" }],
  },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT027-architecture/services",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT027-architecture/services",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT027-architecture/services",
    },
  },
};

export default function ServicesPage() {
  const baseRoute = "/ko/templates/OHMT027-architecture";

  const processes = [
    { step: "01", name: "상담", desc: "공간의 용도와 규모, 생활 방식, 예산과 일정을 함께 확인합니다." },
    { step: "02", name: "개념 설계", desc: "대지와 요구사항을 바탕으로 배치, 동선, 형태와 재료의 방향을 제안합니다." },
    { step: "03", name: "상세 설계", desc: "구조와 마감, 조명, 가구, 시공 도면을 구체적으로 설계합니다." },
    { step: "04", name: "시공 단계", desc: "시공 현장을 확인하며 설계 의도가 정확하게 구현되도록 조율합니다." },
  ];

  return (
    <TemplateWrapper>
      <div className="relative min-h-screen bg-white text-[#1A1A1A] font-sans antialiased overflow-hidden selection:bg-[#1A1A1A] selection:text-white">
        <Header />

        <main className="pt-32 pb-24">
          {/* Header */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
            <ScrollReveal>
              <div className="space-y-6 max-w-4xl">
                <span className="font-sans text-xs font-medium tracking-[0.15em] text-[#888888] uppercase block">
                  설계 분야
                </span>
                <h1 className="font-heading font-normal text-5xl md:text-6xl lg:text-7xl leading-[var(--leading-heading)] text-[#1A1A1A]">
                  서비스
                </h1>
                <p className="font-heading font-normal text-2xl md:text-3xl leading-[var(--leading-body)] text-[#888888] pt-4">
                  대지 분석과 기획부터 실시 설계, 인허가 협의와 시공 감리까지 건축 전 과정을 함께합니다.
                </p>
              </div>
            </ScrollReveal>
          </section>

          {/* Services Detailed List */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 mb-24 lg:mb-32">
            <div className="space-y-24">
              {services.map((service, idx) => (
                <ScrollReveal key={service.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-[#E0E0E0] pb-16 last:border-0 last:pb-0">
                    {/* Left: Image (col 5) */}
                    <div className="lg:col-span-5 relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    {/* Right: Copy & Features (col 7) */}
                    <div className="lg:col-span-7 space-y-6 lg:pl-8">
                      <span className="font-sans text-xs font-medium tracking-[0.15em] text-[#B07D4F] uppercase block">
                        {service.label}
                      </span>
                      <h2 className="font-heading font-normal text-4xl md:text-4xl text-[#1A1A1A] leading-[var(--leading-heading)]">
                        {service.name}
                      </h2>
                      <p className="font-sans text-base leading-[var(--leading-body)] text-[#888888]">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="pt-4">
                        <h4 className="font-sans text-xs font-semibold text-[#1A1A1A] tracking-wider uppercase mb-4">
                          업무 범위
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#888888] font-sans">
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[#B07D4F] rounded-full" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="bg-[#F5F5F5] py-20 lg:py-28 mb-24 lg:mb-32">
            <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
              <ScrollReveal>
                <div className="border-b border-[#E0E0E0] pb-8 mb-16">
                  <h2 className="font-heading font-normal text-3xl md:text-4xl text-[#1A1A1A]">
                    진행 과정
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {processes.map((p, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="space-y-4 bg-white p-8 border border-black/5 shadow-sm">
                      <span className="font-heading font-normal text-4xl text-[#B07D4F] leading-none block">
                        {p.step}
                      </span>
                      <h3 className="font-sans font-medium text-base text-[#1A1A1A]">
                        {p.name}
                      </h3>
                      <p className="font-sans text-sm text-[#888888] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 text-center">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="font-heading font-normal text-4xl md:text-4xl text-[#1A1A1A] leading-[var(--leading-heading)]">
                  새로운 공간을 준비하고 계신가요?
                </h2>
                <p className="font-sans text-sm text-[#888888] leading-relaxed max-w-md mx-auto">
                  프로젝트의 위치와 용도, 규모와 일정에 대해 이야기해주세요.
                </p>
                <div className="pt-4">
                  <Link
                    href={`${baseRoute}/contact`}
                    className="inline-block bg-[#0A0A0A] text-white px-8 py-3.5 text-sm font-sans tracking-[0.08em] hover:bg-zinc-800 transition-colors"
                  >
                    프로젝트 문의
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </main>

        <Footer />
        <CustomCursor />
      </div>
    </TemplateWrapper>
  );
}
