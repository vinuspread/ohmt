"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const tags = ["헤어 리스토어링", "페이셜 테라피", "바디 트리트먼트"];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[var(--color-secondary)]">
      <motion.img
        src="/templates/spa/hero-bg.jpg"
        alt="차분한 스파 트리트먼트 룸을 준비하는 테라피스트"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        initial={reduce ? { scale: 1 } : { scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: EASE_OUT }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)] via-[var(--color-secondary)]/30 to-transparent" />

      <div className="relative z-10 flex h-full min-h-[100dvh] flex-col justify-end px-6 lg:px-16 pb-16 lg:pb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
            className="max-w-xl"
          >
            <h1
              className="font-[family-name:var(--font-heading)] font-bold tracking-tight text-[var(--color-text-contrast)] leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              프리미엄 스파 트리트먼트
            </h1>
            <p className="text-[0.95rem] text-white/70 leading-relaxed max-w-md mb-8">
              공인 테라피스트가 제공하는 맞춤형 피부·바디 케어. 차분하고 프리미엄한 공간에서 경험하세요.
            </p>
            <a
              href="/ko/templates/OHMT026-spa-KO/contact"
              className="inline-flex items-center rounded-full bg-[var(--color-primary)] text-[var(--color-text-contrast)] px-7 py-3.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
            >
              무료 상담 예약하기
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT }}
            className="flex flex-wrap gap-3"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 px-4 py-2 text-xs font-medium text-white/80"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
