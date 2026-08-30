"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ImageEnginePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const navItems = [
    { label: "제품", href: "/ko/templates/OHMT031-luma-camera/shop" },
    { label: "광학 엔진", href: "/ko/templates/OHMT031-luma-camera/image-engine" },
    { label: "촬영 현장", href: "/ko/templates/OHMT031-luma-camera/scenes" },
    { label: "고객 사례", href: "/ko/templates/OHMT031-luma-camera/stories" },
  ];

  const specs = [
    {
      code: "SPEC 01",
      title: "45MP 광역 비구면 센서",
      desc: "인공적인 샤프닝 없이 광학 유리 코팅 본래의 또렷함을 담는 고해상도 풀프레임 센서.",
    },
    {
      code: "SPEC 02",
      title: "듀얼 나노 ISO 노이즈 감쇄",
      desc: "어두운 저조도 환경에서도 색 온도를 수호하며 암부 계조를 정밀 보존합니다.",
    },
    {
      code: "SPEC 03",
      title: "폐회로 오토포커스 루프",
      desc: "초당 120회의 미세 광학 보정 루프로 구동하는 초정밀 실시간 피드백 모듈.",
    },
    {
      code: "SPEC 04",
      title: "광학 검수 및 오차 보증",
      desc: "+300nm 이내의 수직 및 수평 광량 정밀도를 100% 보증하는 하드웨어 캘리브레이션.",
    },
    {
      code: "SPEC 05",
      title: "16-Bit RAW 동적 하이파이 파이프라인",
      desc: "압축 손실 없는 순수 센서 데이터를 16-Bit 깊이의 원본 RAW 파일로 다이렉트 기록.",
    },
    {
      code: "SPEC 06",
      title: "반사 방지 나노 매트릭스",
      desc: "다중 반사 및 역광 하이라이트 번짐을 방지하는 렌즈 나노 증착 코팅 필름.",
    },
    {
      code: "SPEC 07",
      title: "초저전력 실시간 실드 엔진",
      desc: "연속 촬영 중 발생하는 센서 열을 즉각 방출하는 항공 마그네슘 히트싱크 하우징.",
    },
    {
      code: "SPEC 08",
      title: "실시간 메타데이터 센싱 연동",
      desc: "조도, 광량, 색온도, 위치 데이터를 컷마다 밀리초 단위로 자동 기록하는 추적 시스템.",
    },
  ];

  const techComparison = [
    { name: "유효 화소수", val1: "4,500만 화소 (45.7MP)", val2: "표준 2,400만 화소" },
    { name: "동적 범위 (Dynamic Range)", val1: "15.4 Stops 하이파이", val2: "13.2 Stops" },
    { name: "AF 추적 연산 주기", val1: "120Hz 폐회로 캘리브레이션", val2: "60Hz 개방 루프" },
    { name: "색상 기록 비트 깊이", val1: "16-Bit Uncompressed RAW", val2: "14-Bit Compressed RAW" },
    { name: "동작 방열 구조", val1: "항공등급 마그네슘 패시브 실드", val2: "일반 쿨링 팬 구동" },
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
                <span className="badge-text">OPTICAL ARCHITECTURE</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-white mb-6">
                LUMA 광학 이미지 엔진
              </h1>
              <p className="text-lg md:text-xl text-[#888d99] max-w-3xl leading-relaxed">
                빛의 투과율부터 전자 센서의 픽셀 노이즈까지, 왜곡 없는 원음 그대로의 빛을 담기 위해 설계된 LUMA의 차세대 8대 핵심 광학 하드웨어 프로세스입니다.
              </p>
            </motion.div>

            {/* Expanded 8 Spec Cards Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24 w-full">
              {specs.map((spec, idx) => (
                <motion.div
                  key={spec.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: EASE }}
                  className="pt-6 border-t border-white/15 w-full flex flex-col justify-between"
                >
                  <div>
                    <span className="font-sans text-xs font-bold text-white/70 block mb-3">
                      {spec.code}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                    <p className="text-sm text-[#888d99] leading-relaxed">{spec.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* High-res Image Showcase */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="relative aspect-[21/9] w-full overflow-hidden bg-[#07090c] group mb-24"
            >
              <Image
                unoptimized
                src="/templates/OHMT031-luma-camera/engine-texture-close.jpg?v=20260702f"
                alt="LUMA 광학 렌즈 디테일"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-white/90 block mb-2">
                    LENS MICRO COATING PROCESS
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white">나노 레벨 렌즈 반사 방지 코팅 기술</h3>
                </div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link href="/ko/templates/OHMT031-luma-camera/shop" className="button-blue">
                    <span>엔진 탑재 제품 구매</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Detailed Technical Specs Matrix (Content Expansion) */}
            <div className="pt-16 border-t border-white/15">
              <div className="mb-12">
                <div className="dot-title mb-4">
                  <span className="square-dot" />
                  <span className="badge-text">BENCHMARK COMPARISON</span>
                </div>
                <h2 className="text-3xl font-bold md:text-5xl text-white">
                  상세 하드웨어 광학 명세 비교
                </h2>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full text-left font-sans text-sm">
                  <thead>
                    <tr className="border-b border-white/20 text-xs font-semibold uppercase tracking-wider text-[#888d99]">
                      <th className="py-4 pr-6">광학 파라미터 항목</th>
                      <th className="py-4 px-6 text-white font-bold">LUMA X-1 엔진</th>
                      <th className="py-4 pl-6 text-[#888d99]">기존 카테고리 규격</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {techComparison.map((row) => (
                      <tr key={row.name} className="hover:bg-white/5 transition-colors">
                        <td className="py-5 pr-6 font-bold text-white">{row.name}</td>
                        <td className="py-5 px-6 font-semibold text-white bg-white/5">{row.val1}</td>
                        <td className="py-5 pl-6 text-[#888d99]">{row.val2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
