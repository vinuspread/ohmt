"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { HardwareBanner } from "./_components/HardwareBanner";
import { CircuitFeatures } from "./_components/CircuitFeatures";

const EASE = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export default function LumaCameraPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "제품", href: "/ko/templates/OHMT031-luma-camera/shop" },
    { label: "광학 엔진", href: "/ko/templates/OHMT031-luma-camera/image-engine" },
    { label: "촬영 현장", href: "/ko/templates/OHMT031-luma-camera/scenes" },
    { label: "고객 사례", href: "/ko/templates/OHMT031-luma-camera/stories" },
  ];

  const customers = [
    {
      company: "베일리 + 클라인 (Bailey + Klein)",
      industry: "제약 및 광학 분석",
      title: "보고 오버헤드를 대폭 줄이면서 엄격한 광학 규정 준수를 성공적으로 유지한 방법.",
      image: "/templates/OHMT031-luma-camera/lab-microscope-optical.png?v=20260703a",
    },
    {
      company: "모란스 정밀 (Morance)",
      industry: "자동차 및 정밀 광학",
      title: "복잡한 공정을 단일 시스템으로 통합하여 3개 글로벌 공장의 품질 질서를 구축한 방법.",
      image: "/templates/OHMT031-luma-camera/app-recipe-view.jpg?v=20260703a",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: "LUMA 하드웨어 광학",
    description: "대담한 Framer Motion 3D 틸트 및 줌 인터랙션의 하드웨어 카메라 템플릿.",
    url: "https://ohmytemplate.com/ko/templates/OHMT031-luma-camera",
  };

  return (
    <TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="luma-camera-template min-h-screen bg-[#050608] text-white">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050608]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
            <Link href="/ko/templates/OHMT031-luma-camera" className="text-xl font-bold tracking-tighter text-white">
              LUMA
            </Link>

            <nav className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <motion.div key={item.label} whileHover={{ y: -2, scale: 1.05 }}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="/ko/templates/OHMT031-luma-camera/shop" className="button-glass hover:border-white">
                  <span>구매하기</span>
                </Link>
              </motion.div>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-sm font-bold text-white md:hidden uppercase tracking-wider"
              aria-label="메뉴 열기"
            >
              {mobileOpen ? "CLOSE" : "MENU"}
            </button>
          </div>

          {mobileOpen && (
            <div className="border-t border-white/10 bg-[#050608] px-6 py-6 md:hidden">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-white/90"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/ko/templates/OHMT031-luma-camera/shop"
                  onClick={() => setMobileOpen(false)}
                  className="button-blue mt-4 w-full justify-center"
                >
                  구매하기
                </Link>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* Section 1: Hero Section */}
          <section className="relative min-h-[75vh] overflow-hidden bg-[#050608] flex items-center w-full">
            <div className="absolute inset-0 z-0">
              <motion.div
                initial={{ scale: 1.15, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 1.4, ease: EASE }}
                className="relative w-full h-full"
              >
                <Image
                  unoptimized
                  src="/templates/OHMT031-luma-camera/luma-x1-model-front-hero.png?v=20260703c"
                  alt="LUMA X-1 카메라 동일 기종 정면 컷"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#050608] via-[#050608]/75 to-transparent w-full md:w-3/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 py-16">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="dot-title mb-6"
                >
                  <span className="square-dot" />
                  <span className="badge-text">하드웨어 광학 솔루션</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
                >
                  전체 촬영 공급망을 아우르는 정밀 추적성.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                  className="text-[#888d99] text-sm md:text-base mb-8 leading-relaxed max-w-xl"
                >
                  렌즈 사양과 센서 캘리브레이션을 정밀 제어하여 어떤 조도 환경에서도 오차 없는 선명도와 본래의 자연스러운 톤을 보증합니다.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="button-glass">
                      <span>자세히 보기</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/ko/templates/OHMT031-luma-camera/scenes" className="button-blue">
                      <span>소개 영상</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 2: Metric & Dual Visuals */}
          <section className="px-6 py-20 md:px-12 md:py-28 border-t border-white/10 bg-[#050608]">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center w-full">
                <div className="lg:col-span-6">
                  <Reveal>
                    <p className="text-lg md:text-2xl font-medium leading-snug text-white mb-10">
                      설계 사양을 처음부터 명확하게 다듬습니다.{" "}
                      <span className="text-[#888d99]">
                        LUMA는 본격적인 제품 개발이 시작되기 전 치수, 오차 범위, 광학 소재를 확실히 정하여 렌즈와 센서의 불확실성을 완전히 제거합니다.
                      </span>
                    </p>

                    <div className="mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05, x: 4 }}
                        className="metric-text-large mb-2 text-4xl md:text-5xl font-bold inline-block text-white"
                      >
                        +300nm
                      </motion.div>
                      <div className="font-sans text-xs uppercase tracking-wider text-[#888d99]">
                        외부 자기 및 광량 정밀도
                      </div>
                    </div>

                    <div>
                      <motion.div whileHover={{ scale: 1.06, y: -2 }} className="inline-block">
                        <Link href="/ko/templates/OHMT031-luma-camera/image-engine" className="button-glass">
                          <span>사양 탐색</span>
                        </Link>
                      </motion.div>
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="grid grid-cols-12 gap-6 items-end w-full">
                    <motion.div
                      whileHover={{ scale: 1.04, y: -6 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="col-span-7 relative aspect-[3/4] overflow-hidden group bg-[#07090c]"
                    >
                      <Image
                        unoptimized
                        src="/templates/OHMT031-luma-camera/scene-kitchen-counter.jpg?v=20260702e"
                        alt="인테리어 라이팅 스틸 비주얼"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-115"
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.06, y: -8 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="col-span-5 relative aspect-[3/4] overflow-hidden group -ml-6 mb-6 z-10 bg-[#07090c]"
                    >
                      <Image
                        unoptimized
                        src="/templates/OHMT031-luma-camera/morning-street.jpg?v=20260702f"
                        alt="도심 모닝 라이트 비주얼"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-115"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Prototyping & Process */}
          <section className="px-6 py-20 md:px-12 md:py-28 border-t border-white/10 bg-[#050608]">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center w-full">
                {/* Left Image */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <Reveal delay={0.1}>
                    <motion.div
                      whileHover={{ scale: 1.04, rotate: -0.5 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="relative aspect-square w-full overflow-hidden group bg-[#07090c]"
                    >
                      <Image
                        unoptimized
                        src="/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e"
                        alt="저조도 다이닝 감성 광학 샷"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-115"
                      />
                      <div className="absolute bottom-6 right-6 monospace-badge-block">
                        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white">
                          ■ 첫날부터 작동하는<br />차세대 실시간 피드백<br />메커니즘
                        </span>
                      </div>
                    </motion.div>
                  </Reveal>
                </div>

                {/* Right Text */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <Reveal>
                    <p className="text-lg md:text-2xl font-bold leading-snug text-white mb-8">
                      시제품 제작은 추측이 아닌 검증의 과정입니다.{" "}<br className="hidden md:block" />
                      <span className="text-[#888d99] font-normal">
                        LUMA는 정의된 하드웨어 벤치마크 기준에 맞춰 초기 버전 모듈을 직접 제작하고 정밀 테스트합니다.
                      </span>
                    </p>

                    <div className="mb-10 space-y-5">
                      <motion.div whileHover={{ x: 6 }} className="pt-4 border-t border-white/15">
                        <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-wider text-[#888d99]">
                          <span>01</span>
                          <span className="text-white font-semibold">실시간 광학 I/O 신호</span>
                        </div>
                      </motion.div>

                      <motion.div whileHover={{ x: 6 }} className="pt-4 border-t border-white/15">
                        <div className="flex items-center gap-4 font-sans text-xs uppercase tracking-wider text-[#888d99]">
                          <span>02</span>
                          <span className="text-white font-semibold">수요 및 해상도 신호 분석</span>
                        </div>
                      </motion.div>
                    </div>

                    <div>
                      <motion.div whileHover={{ scale: 1.06, y: -2 }} className="inline-block">
                        <Link href="/ko/templates/OHMT031-luma-camera/scenes" className="button-glass">
                          <span>기술 사양 보기</span>
                        </Link>
                      </motion.div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Hardware Banner */}
          <HardwareBanner />

          {/* Section 5: Real Photo 1-Row Carousel Slider */}
          <CircuitFeatures />

          {/* Section 6: Editorial Quote Section */}
          <section className="px-6 py-20 md:px-12 md:py-28 border-t border-b border-white/10 bg-[#07090c] w-full">
            <div className="mx-auto max-w-[1440px]">
              <Reveal>
                <div className="dot-title mb-6">
                  <span className="square-dot" />
                  <span className="badge-text">INDUSTRIAL TESTIMONIAL</span>
                </div>
                <blockquote className="text-xl md:text-3xl lg:text-4xl font-normal text-white leading-relaxed mb-8 w-full">
                  “우리 생산 시설에서 정밀도는 곧 가동률을 의미합니다.<br />
                  LUMA 덕분에 라인이 멈추는 사고가 발생하기 전 미세한 광학 편차를 미리 발견할 수 있었습니다.<br />
                  <span className="text-[#888d99]">
                    단순합니다: 놀람은 줄고, 생산은 더욱 일관되어졌습니다.
                  </span>”
                </blockquote>
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99] flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#0052ff]" />
                  <span>루카스 보이드 (Lucas Boyd) — Morance Inc. 설립자</span>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Section 7: Customers Grid */}
          <section className="px-6 py-20 md:px-12 md:py-28 bg-[#050608]">
            <div className="mx-auto max-w-[1440px]">
              <div className="mb-10">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
                  고객 사례
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 w-full">
                {customers.map((c, idx) => (
                  <Reveal key={c.company} delay={idx * 0.08}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.4, ease: EASE }}
                      className="group pt-6 border-t border-white/15 w-full bg-[#050608]"
                    >
                      <div className="flex items-center justify-between mb-4 font-sans text-xs uppercase tracking-wider">
                        <span className="text-white font-bold">{c.company}</span>
                        <span className="text-[#888d99]">{c.industry}</span>
                      </div>

                      <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-[#050608]">
                        <Image
                          unoptimized
                          src={c.image}
                          alt={c.company}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      <h3 className="text-lg font-bold text-white leading-snug mb-5">
                        {c.title}
                      </h3>

                      <Link href="/ko/templates/OHMT031-luma-camera/stories" className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-white underline underline-offset-8 transition-opacity hover:opacity-80">
                        사례 분석 읽기
                      </Link>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#020304] px-6 py-16 md:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-center md:justify-between font-sans text-xs text-[#888d99]">
            <div className="flex items-center gap-2 text-white font-bold">
              <span className="square-dot" />
              <span>LUMA — 하드웨어 광학 아키텍처</span>
            </div>
            <div>
              © 2026 OHMT. Webflow Hardware Technology Consulting 기반 한국어 하드웨어 카메라 템플릿.
            </div>
          </div>
        </footer>
      </div>
    </TemplateWrapper>
  );
}
