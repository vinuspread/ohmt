// src/app/ko/templates/OHMT027-architecture/_components/sections/About.tsx
"use client";
import React from "react";
import { ScrollReveal } from "../ui/ScrollReveal";

export function About() {
  const stats = [
    { value: "15+", label: "년 이상 설계" },
    { value: "120+", label: "완료한 프로젝트" },
    { value: "24", label: "수상" },
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
                  <span className="font-heading font-normal text-6xl lg:text-8xl leading-none text-[var(--color-text)]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs font-medium tracking-[0.15em] text-[var(--color-text-secondary)] mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Brand Philosophy — col 5–12 */}
            <div className="col-span-12 lg:col-span-8 space-y-8 lg:pt-4">
              <h2 className="font-heading font-normal text-3xl md:text-4xl lg:text-4xl leading-[var(--leading-heading)] text-[var(--color-text)]">
                <span className="md:block">공간은 사람의 일상과 관계를 바꿀 수 있습니다.</span>{" "}
                <span className="md:block">OHMT는 구조와 재료, 동선을 세심하게 다듬어 오래 사용할 수 있는 공간을 설계합니다.</span>
              </h2>
              <p className="font-sans text-base leading-loose text-[var(--color-text-secondary)] max-w-xl">
                <span className="md:block">서울을 기반으로 주거, 상업, 공공 건축과 인테리어 프로젝트를 진행합니다.</span>{" "}
                <span className="md:block">대지와 사용자의 요구를 살피고, 구조와 재료가 자연스럽게 드러나는 공간을 만듭니다.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand Logos Strip */}
        <div className="border-t border-[var(--color-border)] mt-20 pt-10">
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 opacity-40 hover:opacity-60 transition-opacity duration-300">
              <span className="font-sans text-xs tracking-[0.1em] text-[var(--color-text-secondary)] uppercase">
                주요 소개 매체</span>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
                {brandLogos.map((logo, index) => (
                  <span
                    key={index}
                    className="font-heading text-xl md:text-2xl text-[var(--color-text)] tracking-wide"
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
