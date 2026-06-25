"use client";

import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const models = [
  { slug: "ev9",  name: "EV9", type: "All-Electric SUV",    range: "530km", power: "402hp", img: "/templates/car/hero-1.jpg" },
  { slug: "gt7",  name: "GT7", type: "Performance Sedan",   range: "480km", power: "615hp", img: "/templates/car/hero-2.jpg" },
  { slug: "x5",   name: "X5",  type: "Luxury SUV",          range: "510km", power: "355hp", img: "/templates/car/hero-3.jpg" },
  { slug: "s3",   name: "S3",  type: "Compact Executive",   range: "460km", power: "295hp", img: "/templates/car/car-1.jpg" }
];

function CarModelsPageContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-black text-white selection:bg-[var(--theme-accent)] selection:text-black">
        <Header />
        
        <section className="pt-14 md:pt-28 md:pt-44 pb-16 md:pb-28">
          <div className="max-w-[var(--theme-container)] mx-auto px-5 md:px-[var(--theme-gutter)]">
            <div className="mb-12 md:mb-20">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-accent)] mb-5 block">Our Lineup</span>
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.03em] leading-[1.5] mb-6">
                Every model,<br />a masterpiece.
              </h1>
              <p className="text-[0.9rem] text-[var(--theme-text-muted)] max-w-[600px] font-normal leading-relaxed">
                From all-electric pioneers to high-performance icons - each VINUS is engineered with obsessive attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {models.map((model) => (
                <Link key={model.name} href={`/ko/templates/OHMT009-car-KO/models/${model.slug}`} className="group relative bg-[var(--color-primary)] overflow-hidden block">
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


export default function CarModelsPage(props: any) {
  return (
    <React.Suspense fallback={null}>
      <CarModelsPageContent {...props} />
    </React.Suspense>
  );
}
