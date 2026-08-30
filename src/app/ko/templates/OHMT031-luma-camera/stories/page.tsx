"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function StoriesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "제품", href: "/ko/templates/OHMT031-luma-camera/shop" },
    { label: "광학 엔진", href: "/ko/templates/OHMT031-luma-camera/image-engine" },
    { label: "촬영 현장", href: "/ko/templates/OHMT031-luma-camera/scenes" },
    { label: "고객 사례", href: "/ko/templates/OHMT031-luma-camera/stories" },
  ];

  const stories = [
    {
      company: "베일리 + 클라인 (Bailey + Klein)",
      industry: "제약 및 광학 분석 스튜디오",
      metric: "-82%",
      metricLabel: "리포팅 오버헤드 감축",
      title: "보고 오버헤드를 대폭 줄이면서 엄격한 광학 규정 준수를 성공적으로 유지한 방법.",
      desc: "제약 시설 내 미세 광학 투과율 검사를 자동화하여 분기별 리포팅 시간을 80% 이상 단축하고 품질 편차를 성공적으로 제어했습니다.",
      quote: "“LUMA 도입 이후 오차 범위 보정에 쏟던 시간을 광학 R&D 개발에 집중할 수 있게 되었습니다.”",
      author: "클레어 클라인 — 기술 이사",
      image: "/templates/OHMT031-luma-camera/lab-microscope-optical.png?v=20260703a",
    },
    {
      company: "모란스 정밀 (Morance)",
      industry: "자동차 및 정밀 광학 모듈",
      metric: "99.98%",
      metricLabel: "글로벌 생산 양품률",
      title: "복잡한 공정을 단일 시스템으로 통합하여 3개 글로벌 공장의 품질 질서를 구축한 방법.",
      desc: "LUMA 하드웨어 피드백 모듈을 글로벌 3개 라인에 이식하여 부품 결함 비율을 0.02% 이하로 안정화했습니다.",
      quote: "“생산 라인 구동 시 발생하던 갑작스러운 멈춤 사고가 눈에 띄게 사라졌습니다.”",
      author: "루카스 보이드 — 최고 운영 책임자",
      image: "/templates/OHMT031-luma-camera/app-recipe-view.jpg?v=20260703a",
    },
    {
      company: "볼트 랩스 (Vault Labs)",
      industry: "우주 항공 및 광학 측정",
      metric: "+3.5X",
      metricLabel: "검수 속도 향상",
      title: "극한 환경 렌즈 반사율 센싱 테스트 속도를 3.5배 이상 가속화한 우수 모범 케이스.",
      desc: "극저온 챔버에서 시제품 렌즈 반사율을 초당 120회 수집하는 LUMA 모듈로 연구 개발 주기를 크게 단축했습니다.",
      quote: "“실시간 피드백 데이터 덕분에 시제품 피드백 캘리브레이션 시간이 획기적으로 줄었습니다.”",
      author: "데이비드 체스트넛 — 수석 연구원",
      image: "/templates/OHMT031-luma-camera/aerospace-testing-chamber.png?v=20260703a",
    },
    {
      company: "시네마 웍스 (Cinema Works)",
      industry: "상업 영화 렌즈 렌탈 및 케어",
      metric: "100%",
      metricLabel: "렌즈 정밀도 검증률",
      title: "대형 상업 렌즈의 광학 렌즈 마모 상태를 밀리미터 단위로 정밀 이력 관리한 솔루션.",
      desc: "대여 및 회수 시마다 LUMA 45MP 검수 기기를 통과시켜 렌즈 스크래치와 해상력 저하를 완벽 추적하고 관리합니다.",
      quote: "“감독 및 촬영팀에게 오차 없는 최고 품질의 렌즈를 신뢰감 있게 제공할 수 있게 되었습니다.”",
      author: "마이클 소렌슨 — 테크니컬 마스터",
      image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
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
                <span className="badge-text">CUSTOMER STORIES</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white mb-6">
                고객 사례 및 글로벌 성공 스토리
              </h1>
              <p className="text-lg md:text-xl text-[#888d99] max-w-3xl leading-relaxed">
                글로벌 광학 연구소부터 우주 항공 측정 시설, 시네마 렌즈 케어까지, LUMA 하드웨어 시스템을 도입하여 신뢰도를 높인 4대 분야별 기업들의 이야기입니다.
              </p>
            </motion.div>

            {/* 4 Corporate Case Studies with Contextual Images */}
            <div className="space-y-20">
              {stories.map((story, idx) => (
                <motion.div
                  key={story.company}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  className="grid grid-cols-1 gap-10 md:grid-cols-12 items-center pt-10 border-t border-white/15 group w-full"
                >
                  <div className="md:col-span-6 relative aspect-[16/10] overflow-hidden bg-[#050608]">
                    <Image
                      unoptimized
                      src={story.image}
                      alt={story.company}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-black/85 border border-white/20 px-5 py-3 backdrop-blur-md">
                      <div className="text-3xl font-bold text-white">{story.metric}</div>
                      <div className="font-sans text-[10px] uppercase tracking-wider text-[#888d99] mt-0.5">{story.metricLabel}</div>
                    </div>
                  </div>

                  <div className="md:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4 font-sans text-xs uppercase tracking-wider">
                        <span className="text-white font-bold">{story.company}</span>
                        <span className="text-[#888d99]">{story.industry}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-sm text-[#888d99] leading-relaxed mb-6">
                        {story.desc}
                      </p>
                      <blockquote className="border-l-2 border-white/30 pl-4 py-2 text-sm italic text-white/90 mb-6 bg-white/5 p-4">
                        {story.quote}
                        <footer className="not-italic text-xs font-sans uppercase tracking-wider text-[#888d99] mt-2">— {story.author}</footer>
                      </blockquote>
                    </div>
                    <div>
                      <motion.div whileHover={{ x: 4 }} className="inline-block">
                        <Link href="/ko/templates/OHMT031-luma-camera/shop" className="button-glass">
                          <span>솔루션 적용 문의</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
