"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ScenesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "제품", href: "/ko/templates/OHMT031-luma-camera/shop" },
    { label: "광학 엔진", href: "/ko/templates/OHMT031-luma-camera/image-engine" },
    { label: "촬영 현장", href: "/ko/templates/OHMT031-luma-camera/scenes" },
    { label: "고객 사례", href: "/ko/templates/OHMT031-luma-camera/stories" },
  ];

  const scenes = [
    {
      title: "워크숍 정밀 광학 모듈",
      category: "연구 및 시제품 스튜디오",
      lens: "35mm f/1.4 Master",
      exposure: "1/500s · ISO 100",
      desc: "수직 반사판과 측정 기기가 통합된 하드웨어 테스트 벤치 환경.",
      image: "/templates/OHMT031-luma-camera/scene-workshop.jpg?v=20260702e",
      aspect: "aspect-[4/5]",
    },
    {
      title: "키친 카운터 자연광 정물",
      category: "생활 및 인테리어 라이팅",
      lens: "50mm f/1.2 Macro",
      exposure: "1/250s · ISO 200",
      desc: "오후 3시 정면에서 들어오는 직사광 아래 스티치와 대리석 질감을 표현.",
      image: "/templates/OHMT031-luma-camera/scene-kitchen-counter.jpg?v=20260702e",
      aspect: "aspect-[3/4]",
    },
    {
      title: "트래블 모닝 스냅",
      category: "아웃도어 다이내믹 포토",
      lens: "28mm f/2.0 Wide",
      exposure: "1/1000s · ISO 100",
      desc: "이슬 맺힌 아침 거리의 차가운 수분감과 햇살의 골드 톤 밸런스.",
      image: "/templates/OHMT031-luma-camera/scene-travel-morning.jpg?v=20260702e",
      aspect: "aspect-[16/10]",
    },
    {
      title: "다이닝 저조도 무드",
      category: "저조도 안락 조명",
      lens: "35mm f/1.4 Master",
      exposure: "1/60s · ISO 1600",
      desc: "어두운 분위기의 촛불 조명 아래 인물 암부를 검게 뭉개지 않고 표현.",
      image: "/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e",
      aspect: "aspect-[4/5]",
    },
    {
      title: "창가 자연광 피부톤",
      category: "인물 광학 프로필",
      lens: "85mm f/1.2 Portrait",
      exposure: "1/400s · ISO 100",
      desc: "피부 결을 과도하게 보정하지 않고 부드러운 직사광 음영을 선명히 표현.",
      image: "/templates/OHMT031-luma-camera/sample-portrait.png?v=20260703a",
      aspect: "aspect-[4/5]",
    },
    {
      title: "도심 야경 블루아워 원경",
      category: "풍경 및 도시 건축",
      lens: "24mm f/1.8 Prime",
      exposure: "1/4s · ISO 400",
      desc: "해 질 녘 하늘의 푸른 수평 레이어와 인공 조명의 반사를 명확히 분리.",
      image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
      aspect: "aspect-[16/10]",
    },
    {
      title: "세라믹 정물 컬러 밸런스",
      category: "제품 스틸 컷",
      lens: "50mm f/1.4 Classic",
      exposure: "1/160s · ISO 100",
      desc: "세라믹과 과일 원물 본래의 색감을 과장 없이 순수하게 정밀 표현.",
      image: "/templates/OHMT031-luma-camera/sample-color.jpg?v=20260702e",
      aspect: "aspect-[3/4]",
    },
    {
      title: "마그네슘 하우징 디테일",
      category: "하드웨어 매크로",
      lens: "90mm f/2.8 Macro",
      exposure: "1/200s · ISO 100",
      desc: "다이얼 표면 금속 널링 패턴의 초미세 질감을 매크로 촬영으로 기록.",
      image: "/templates/OHMT031-luma-camera/body-detail.jpg?v=20260702e",
      aspect: "aspect-[4/5]",
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
                <span className="badge-text">SHOOTING SCENES</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-white mb-6">
                촬영 현장 및 8대 씬 연출 갤러리
              </h1>
              <p className="text-lg text-[#888d99] max-w-2xl leading-relaxed">
                스튜디오 정밀 관찰부터 광활한 야외 풍경까지, LUMA 하드웨어가 다양한 환경에서 기록한 세부 EXIF 광학 촬영 데이터와 샘플입니다.
              </p>
            </motion.div>

            {/* Expanded 8 Scenes Film Strip Grid */}
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
              {scenes.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: EASE }}
                  className="group pt-6 border-t border-white/15 w-full"
                >
                  <div className={`relative ${s.aspect} w-full overflow-hidden mb-6 bg-[#050608]`}>
                    <Image
                      unoptimized
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#888d99]">
                      {s.category}
                    </span>
                    <span className="font-sans text-xs font-mono text-white/70 bg-white/5 px-2.5 py-1">
                      {s.lens} · {s.exposure}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-[#888d99] leading-relaxed">{s.desc}</p>
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
