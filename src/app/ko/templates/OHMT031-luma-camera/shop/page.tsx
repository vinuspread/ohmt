"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ShopPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "제품", href: "/ko/templates/OHMT031-luma-camera/shop" },
    { label: "광학 엔진", href: "/ko/templates/OHMT031-luma-camera/image-engine" },
    { label: "촬영 현장", href: "/ko/templates/OHMT031-luma-camera/scenes" },
    { label: "고객 사례", href: "/ko/templates/OHMT031-luma-camera/stories" },
  ];

  const products = [
    {
      name: "LUMA One 에센셜 키트",
      price: "₩3,850,000",
      tag: "컴팩트 스튜디오 모듈",
      image: "/templates/OHMT031-luma-camera/shop-one-kit.jpg?v=20260702e",
      features: [
        "45MP 광역 비구면 센서 탑재",
        "기본 35mm f/1.8 광학 프리미엄 렌즈",
        "실시간 I/O 광학 모니터링 앱 연동",
        "마그네슘 합금 경량 방적 바디",
        "1년 하드웨어 무상 보증 및 검수 지원",
      ],
    },
    {
      name: "LUMA Pro 마스터 파워 키트",
      price: "₩5,900,000",
      tag: "전문가 및 기업용 라인",
      image: "/templates/OHMT031-luma-camera/shop-pro-kit.jpg?v=20260702e",
      features: [
        "45MP 듀얼 나노 ISO 노이즈 감쇄 센서",
        "35mm f/1.4 + 85mm f/1.2 마스터 렌즈 세트",
        "폐회로 초당 120회 오토포커스 루프 모듈",
        "세라믹 샌드블라스팅 프리미엄 하우징",
        "3년 하드웨어 전담 엔지니어 워런티",
      ],
    },
    {
      name: "LUMA Cinema 스튜디오 패키지",
      price: "₩9,400,000",
      tag: "상업 영화 및 프로덕션",
      image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
      features: [
        "16-Bit RAW 동적 하이파이 파이프라인 센서",
        "24mm / 35mm / 85mm 프로 시네마 렌즈 3종",
        "실시간 4K HDMI I/O 하드웨어 모니터링 수신기",
        "항공 마그네슘 하드케이스 & 듀얼 배터리 팩",
        "글로벌 24시간 실시간 광학 파트너 케어",
      ],
    },
    {
      name: "LUMA Lab R&D 검수 모듈",
      price: "₩12,800,000",
      tag: "연구소 및 광학 제조 시설",
      image: "/templates/OHMT031-luma-camera/lab-microscope-optical.png?v=20260703a",
      features: [
        "+300nm 정밀도 자동 캘리브레이션 벤치",
        "실시간 파장 투과율 분석 모듈 및 SDK",
        "자동 광량 편차 경고 센싱 하드웨어",
        "커스텀 렌즈 증착 캘리브레이터 연동",
        "전담 기술 엔지니어 온사이트 맞춤 설치 지원",
      ],
    },
  ];

  const faqs = [
    {
      q: "LUMA 하드웨어 주문 후 배송 및 설치 기간은 얼마나 걸리나요?",
      a: "기본 에센셜 및 프로 키트는 주문 승인 후 영업일 기준 3~5일 이내 전용 안전 하드케이스 패키지로 직배송됩니다. Lab 모듈의 경우 전담 엔지니어의 현장 검수 및 맞춤 캘리브레이션 일정이 포함되어 약 7~10일 소요됩니다.",
    },
    {
      q: "기존 상업용 렌즈 및 광학 악세서리와 호환되나요?",
      a: "네, LUMA 광학 바디는 전용 시네마 렌즈 마운트 어댑터를 기본 제공하여 기존 35mm 풀프레임 범용 마운트 렌즈 및 스튜디오 광학 장비와 100% 호환됩니다.",
    },
    {
      q: "하드웨어 검수 및 무상 보증 서비스 범위는 어떻게 되나요?",
      a: "모든 제품은 출고 전 48시간 초정밀 광학 캘리브레이션 검수를 거치며, 제품 키트에 따라 최소 1년에서 최대 3년간 무상 부품 교체 및 정기 점검 서비스를 제공합니다.",
    },
  ];

  return (
    <TemplateWrapper>
      <div className="luma-camera-template min-h-screen bg-[#050608] text-white">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050608]/90 backdrop-blur-md">
          <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
            <Link href="/ko/templates/OHMT031-luma-camera" className="text-2xl font-bold tracking-tighter text-white">
              LUMA
            </Link>

            <nav className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <Link href="/ko/templates/OHMT031-luma-camera/shop" className="button-glass hover:border-white">
                <span>구매하기</span>
              </Link>
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

        <main className="py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-8"
            >
              <Link href="/ko/templates/OHMT031-luma-camera" className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99] hover:text-white transition-colors">
                ← 메인으로 돌아가기
              </Link>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-16"
            >
              <div className="dot-title mb-6">
                <span className="square-dot" />
                <span className="badge-text">HARDWARE SHOP</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white mb-6">
                LUMA 하드웨어 라인업 및 주문
              </h1>
              <p className="text-lg md:text-xl text-[#888d99] max-w-3xl leading-relaxed">
                전문가 스튜디오, 상업 시네마 현장, 글로벌 광학 제조 시설을 위한 최첨단 4대 하드웨어 키트 라인업을 선택하세요.
              </p>
            </motion.div>

            {/* 4 Hardware Product Lineup Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mb-28">
              {products.map((p, idx) => (
                <motion.div
                  key={p.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  className="group pt-6 border-t border-white/15 w-full flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden mb-8 bg-[#050608]">
                      <Image
                        unoptimized
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99]">
                        {p.tag}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-white">{p.price}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">{p.name}</h3>

                    <ul className="space-y-3 mb-8">
                      {p.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-[#888d99]">
                          <span className="font-sans text-xs font-bold text-white/60">—</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="button-blue w-full justify-center py-4 text-sm font-bold"
                    >
                      <span>제품 주문 예약하기</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Accordion Section (Rich Content Addition) */}
            <div className="pt-16 border-t border-white/15">
              <div className="mb-12">
                <div className="dot-title mb-4">
                  <span className="square-dot" />
                  <span className="badge-text">FREQUENTLY ASKED QUESTIONS</span>
                </div>
                <h2 className="text-3xl font-bold md:text-5xl text-white">
                  자주 묻는 질문 (FAQ)
                </h2>
              </div>

              <div className="space-y-4 max-w-4xl">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="border border-white/15 bg-[#07090c] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-white text-base md:text-lg"
                    >
                      <span>{faq.q}</span>
                      <span className="font-mono text-sm text-[#888d99] ml-4">
                        {activeFaq === index ? "[ - ]" : "[ + ]"}
                      </span>
                    </button>
                    {activeFaq === index && (
                      <div className="px-6 pb-6 text-sm text-[#888d99] leading-relaxed border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#020304] px-6 py-16 md:px-12 mt-20">
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
