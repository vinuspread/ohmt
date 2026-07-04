// src/app/ko/templates/OHMT027-architecture/_components/sections/About.tsx
"use client";
import React from "react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function About() {
  const stats = [
    { value: "15+", label: "년의 설계 경험" },
    { value: "120+", label: "완료 프로젝트" },
    { value: "24", label: "국제 수상" },
  ];

  const brandLogos = [
    "Architectural Record",
    "Dezeen",
    "Wallpaper*",
    "Frame Magazine",
  ];

  return (
    <section className="bg-white py-24 lg:py-32 border-b border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left: Stats — col 1–4 */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col border-b border-[var(--color-border)] pb-6 last:border-b-0 last:pb-0">
                  <span className="font-heading font-normal text-[64px] lg:text-[80px] leading-none text-[var(--color-text)]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[var(--color-text-secondary)] mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Brand Philosophy — col 5–12 */}
            <div className="col-span-12 lg:col-span-8 space-y-8 lg:pt-4">
              <h2 className="font-heading font-normal text-[26px] md:text-[32px] lg:text-[36px] leading-[1.1] text-[var(--color-text)]">
                공간은 사람들이 살아가는 방식을 바꿀 수 있다고 믿습니다. 우리의 작업은 정밀한 장인정신과 유기적인 공간의 대화를 하나로 엮습니다.
              </h2>
              <p className="font-sans text-[16px] leading-[1.8] text-[var(--color-text-secondary)] max-w-xl">
                서울에서 출발한 우리의 스튜디오는 주거, 상업 공간, 공공 건축을 세계 곳곳에서 설계합니다. 모든 프로젝트는 재료의 정직함과 구조적 우아함을 조용하지만 분명하게 드러냅니다.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand Logos Strip */}
        <div className="border-t border-[var(--color-border)] mt-20 pt-10">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
              <span className="font-sans text-[12px] tracking-[0.1em] text-[var(--color-text-secondary)] uppercase">
                소개 매체
              </span>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                {brandLogos.map((logo, index) => (
                  <span
                    key={index}
                    className="font-heading text-[20px] md:text-[24px] text-[var(--color-text)] tracking-wide"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
