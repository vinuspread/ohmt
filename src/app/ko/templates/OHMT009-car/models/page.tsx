"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const models = [
  { slug: "ev9",  name: "EV9", type: "순수 전기 SUV",    range: "530km", power: "402hp", img: "/templates/OHMT009-car/ev9-model.png" },
  { slug: "gt7",  name: "GT7", type: "퍼포먼스 세단",   range: "480km", power: "615hp", img: "/templates/OHMT009-car/hero-2.jpg" },
  { slug: "x5",   name: "X5",  type: "럭셔리 SUV",          range: "510km", power: "355hp", img: "/templates/OHMT009-car/hero-3.jpg" },
  { slug: "s3",   name: "S3",  type: "컴팩트 비즈니스 세단",   range: "460km", power: "295hp", img: "/templates/OHMT009-car/car-2.jpg" }
];

function CarModelsPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />
        
        <section className="pt-24 md:pt-36 pb-20 md:pb-28">
          <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)]">
            <div className="mb-10">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-4 block">우리의 라인업</span>
              <h1 className="font-[family-name:var(--theme-font-heading)] text-[length:var(--text-display)] font-bold tracking-[-0.03em] leading-[var(--leading-heading)] mb-8">
                한 대 한 대,<br />기준을 새로 씁니다.
              </h1>
              <p className="text-[1.15rem] md:text-[1.25rem] text-white/70 font-normal leading-[var(--leading-body)] max-w-[700px] break-keep">
                순수 전기차의 선구자부터 고성능 아이콘에 이르기까지, 모든 OHMT 모델은 디테일을 향한 집착으로 완성됩니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {models.map((model) => (
                <Link key={model.name} href={`/ko/templates/OHMT009-car/models/${model.slug}`} className="group relative bg-[var(--color-primary)] overflow-hidden block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img loading="lazy" src={model.img} alt={model.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex justify-between items-end">
                      <div>
                        <h2 className="font-[family-name:var(--theme-font-heading)] text-[2rem] tracking-tight mb-1">{model.name}</h2>
                        <p className="text-[0.75rem] text-[var(--theme-text-muted)] uppercase tracking-[0.15em]">{model.type}</p>
                      </div>
                      <div className="text-right text-[0.7rem] text-[var(--theme-text-muted)]">
                        <div className="text-white font-bold">{model.range}</div>
                        <div className="tracking-wider">{model.power}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CarModelsPage() {
  return (
    <React.Suspense fallback={null}>
      <CarModelsPageContent />
    </React.Suspense>
  );
}
