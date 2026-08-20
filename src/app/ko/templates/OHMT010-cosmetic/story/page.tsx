"use client";

import React from "react";
import Link from "next/link";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function CosmeticStoryPageContent() {
  const principles = [
    {
      title: "필요한 성분만",
      description: "피부에 필요한 기능을 중심으로 설계하고, 불필요한 충전재는 덜어냅니다.",
    },
    {
      title: "효능을 확인하는 과정",
      description: "원료의 순도와 안정성, 피부에 전달되는 효능을 반복해서 검증합니다.",
    },
    {
      title: "자극을 줄인 포뮬러",
      description: "합성 향료와 자극적인 방부제를 배제해 매일 편안하게 사용할 수 있습니다.",
    },
  ];

  const process = [
    { number: "01", title: "원료 선정", description: "산지와 조달 과정을 확인할 수 있는 원료를 고릅니다." },
    { number: "02", title: "포뮬러 개발", description: "자체 연구소에서 피부 효능과 사용감을 함께 설계합니다." },
    { number: "03", title: "안정성 검증", description: "순도와 안정성, 피부 자극 여부를 꼼꼼히 확인합니다." },
    { number: "04", title: "책임 있는 완성", description: "재활용 가능한 패키지에 담아 더 적은 흔적을 남깁니다." },
  ];

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-[var(--color-bg)] text-black selection:bg-black selection:text-white">
        <Header />

        <section className="px-6 pb-16 pt-48 md:px-10 md:pb-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-16 max-w-[1120px]">
              <span className="mb-4 block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-black/40">
                브랜드 스토리
              </span>
              <h1 className="text-balance break-keep text-[length:var(--text-h2)] font-normal leading-[var(--leading-heading)] tracking-tight">
                피부에 필요한 것만,
                <br />
                책임 있게 만듭니다.
              </h1>
            </div>
            <div className="relative overflow-hidden">
              <img
                src="/templates/OHMT010-cosmetic/cosmetic-1.jpg"
                alt="식물의 그림자와 투명한 스킨케어 오일"
                className="h-[58vh] min-h-[460px] w-full object-cover md:h-[70vh]"
              />
              <p className="absolute bottom-0 right-0 max-w-[560px] bg-[var(--color-bg)] px-6 py-7 text-[0.95rem] leading-loose text-[var(--color-text-muted)] md:px-10 md:py-9">
                효과적인 스킨케어와 투명한 기준은 함께할 수 있다고 믿습니다.
                피부가 매일 편안하게 받아들일 수 있는 포뮬러를 만들고,
                그 과정과 선택을 정직하게 설명합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20 lg:gap-32">
            <h2 className="text-balance break-keep text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
              효능과 투명성은
              <br />
              함께할 수 있을까?
            </h2>
            <div className="max-w-[680px] space-y-5 break-keep text-[0.95rem] leading-loose text-[var(--color-text-muted)]">
              <p>
                VELURE는 이 질문에서 출발했습니다. 좋은 스킨케어는 화려한 표현보다 피부가 실제로 느끼는 변화와
                제품이 만들어지는 과정으로 증명되어야 한다고 생각했습니다.
              </p>
              <p>
                모든 포뮬러는 자체 연구소에서 개발합니다. 지속 가능한 방식으로 조달한 원료를 사용하고,
                피부에 필요한 효능과 편안한 사용감 사이의 균형을 반복해서 확인합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-accent-light)] px-6 py-16 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 md:mb-16">
              <h2 className="text-balance break-keep text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
                포뮬러를 만드는
                <br />
                세 가지 원칙
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-24">
              <img
                loading="lazy"
                src="/templates/OHMT010-cosmetic/cosmetic-4.jpg"
                alt="신선한 오렌지 원료"
                className="h-full max-h-[760px] min-h-[480px] w-full object-cover"
              />
              <div className="flex flex-col justify-center">
                {principles.map((principle, index) => (
                  <article
                    key={principle.title}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-black/15 py-8 first:border-t-0 md:py-10"
                  >
                    <span className="pt-1 text-[0.72rem] font-semibold text-black/40">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="mb-3 text-[1.1rem] font-medium tracking-tight">
                        {principle.title}
                      </h3>
                      <p className="max-w-[470px] break-keep text-[0.95rem] leading-loose text-[var(--color-text-muted)]">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <h2 className="mb-12 text-balance break-keep text-[1.6rem] font-normal leading-[var(--leading-heading)] md:mb-16 md:text-[2.8rem]">
              원료에서 제품까지,
              <br />
              기준을 지키는 과정
            </h2>
            <div className="grid border-y border-black/15 md:grid-cols-4">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="border-b border-black/15 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <span className="mb-12 block text-[0.72rem] font-semibold text-black/35 md:mb-20">
                    {item.number}
                  </span>
                  <h3 className="mb-3 text-[1.1rem] font-medium tracking-tight">{item.title}</h3>
                  <p className="break-keep text-[0.95rem] leading-loose text-[var(--color-text-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid bg-black text-white lg:grid-cols-2">
          <img
            loading="lazy"
            src="/templates/OHMT010-cosmetic/cosmetic-face-mask.png"
            alt="식물 성분을 담은 마스크로 피부를 관리하는 모습"
            className="h-[520px] w-full object-cover lg:h-full lg:min-h-[760px]"
          />
          <div className="flex flex-col justify-between px-6 py-16 md:px-12 md:py-24 lg:px-[clamp(3rem,7vw,8rem)]">
            <div>
              <h2 className="mb-8 text-balance break-keep text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
                피부를 위한 선택이
                <br />
                지구에도 부담이 없도록
              </h2>
              <p className="max-w-[560px] break-keep text-[0.95rem] leading-loose text-white/70">
                우리의 책임은 병 안에서 끝나지 않습니다. 재활용 가능한 패키지와 책임 있게 조달한 원료,
                탄소 중립 배송을 통해 제품이 남기는 환경의 흔적을 줄여갑니다.
              </p>
            </div>
            <dl className="mt-16 grid gap-8 border-t border-white/25 pt-8 sm:grid-cols-3 lg:mt-24">
              <div>
                <dt className="mb-2 text-[1.8rem] font-medium">5년+</dt>
                <dd className="text-[0.82rem] leading-[1.5] text-white/60">이어온 포뮬러 연구</dd>
              </div>
              <div>
                <dt className="mb-2 text-[1.8rem] font-medium">50,000명</dt>
                <dd className="text-[0.82rem] leading-[1.5] text-white/60">VELURE를 선택한 고객</dd>
              </div>
              <div>
                <dt className="mb-2 text-[1.8rem] font-medium">100%</dt>
                <dd className="text-[0.82rem] leading-[1.5] text-white/60">동물실험 반대 원칙</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="px-6 py-16 text-center md:px-10 md:py-32">
          <div className="mx-auto max-w-[1000px]">
            <p className="mb-10 text-balance break-keep text-[1.6rem] font-normal leading-[var(--leading-heading)] md:text-[2.8rem]">
              피부에는 효과적인 포뮬러를,
              <br />
              지구에는 더 적은 흔적을 남깁니다.
            </p>
            <Link
              href="/ko/templates/OHMT010-cosmetic/shop"
              className="inline-flex min-h-12 items-center justify-center bg-black px-10 py-4 text-[0.85rem] font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              제품 컬렉션 보기
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function CosmeticStoryPage() {
  return (
    <React.Suspense fallback={null}>
      <CosmeticStoryPageContent />
    </React.Suspense>
  );
}
