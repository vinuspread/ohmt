"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { teachers } from "../data/data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const basePath = "/ko/templates/OHMT024-kids-education";

const stats = [
  { value: "8년+", label: "누적 교육 기간" },
  { value: "2,000명+", label: "수료 어린이 수" },
  { value: "50개+", label: "상시 클래스 수" },
  { value: "12:1", label: "학생 대 교사 비율" },
];

const values = [
  {
    emoji: "🌟",
    title: "호기심이 최우선",
    description: "모든 엉뚱한 질문이 새로운 발견으로 이어진다고 믿습니다. 아이가 지닌 자연스러운 호기심을 이끌어 줍니다.",
  },
  {
    emoji: "🤝",
    title: "함께 성장하는 배움",
    description: "배움의 핵심은 즐거운 소통에 있습니다. 또래 친구들과 함께 소통하고 협업하며 배울 때 가장 크게 성장합니다.",
  },
  {
    emoji: "🎪",
    title: "목표를 가진 놀이",
    description: "아카데미의 모든 게임과 학습 액티비티는 아이의 긍정적인 자아 발달과 사회적 자신감을 키우도록 설계되었습니다.",
  },
];

export default function AboutContent() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="pt-[var(--space-giant)]">
      {/* Hero section */}
      <section className="py-[var(--space-section)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              아카데미 소개
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              모든 아이가 스스로의
              <br />
              <span className="text-[var(--color-accent)]">특별한 불꽃을 발견하는 곳</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1, ease: EASE_OUT }}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-4 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                교육 이사회의 미션
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                오마이템플릿 크리에이티브 아카데미는 자라나는 모든 어린이들이 저마다 눈부신 탐구심을 지니고 태어난다고 확신합니다. 놀이 중심의 다양한 교육 경험을 제공하여 예술적 상상력을 자극하고, 자아 존중감을 심어주며, 평생 배움을 사랑하는 아이로 자라도록 이끌어 줍니다.
              </p>
            </motion.div>
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.12, ease: EASE_OUT }}
            >
              <h2 className="text-2xl font-bold tracking-tight mb-4 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                창의적인 교육 환경
              </h2>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                채광이 쏟아지는 아늑한 교육 공간은 과목별 전용 실험실, 동화책 가득한 독서 코너, 자유로운 야외 놀이 시설, 그리고 우리 꼬마 화가들의 기발한 명화를 자랑스럽게 걸어두는 전용 갤러리 벽면으로 이루어져 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-[var(--space-section)] bg-[var(--color-primary)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
                className="text-center"
              >
                <p
                  className="text-4xl sm:text-5xl font-bold leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider opacity-60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-[var(--space-section)] bg-[var(--color-bg-secondary)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-secondary)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              아카데미의 가치
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              우리가 지켜나가는 가치
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
                className="bg-white rounded-2xl border border-black/8 p-6 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl block mb-3">{v.emoji}</span>
                <h3 className="text-lg font-bold tracking-tight leading-none mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher section */}
      <section className="py-[var(--space-section)] bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center justify-center bg-[var(--color-red)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              선생님 소개
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              함께하는 파트너를 소개합니다
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teachers.map((teacher, idx) => (
              <motion.div
                key={teacher.id}
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
                className="text-center"
              >
                <div
                  className="w-[200px] h-[200px] rounded-full mx-auto mb-5 bg-cover bg-center border border-black/8 shadow-sm"
                  style={{ backgroundImage: `url(${teacher.image})`, backgroundColor: teacher.color }}
                />
                <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  {teacher.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mt-1">
                  {teacher.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-[var(--space-section)] bg-[var(--color-secondary)]">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <p className="text-white/80 text-xs font-bold tracking-wider mb-3">Ready to start?</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              배움이 곧 즐거운 놀이가 되는 곳
            </h2>
            <p className="mt-4 text-white/70 text-base max-w-2xl mx-auto leading-relaxed">
              놀이를 통해 아이 스스로 원리를 깨우치는 기쁨을 맛보여 주세요.<br />우리 소중한 아이의 첫걸음에 창의력의 날개를 달아 드립니다.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <Link
                href={`${basePath}/classes`}
                className="bg-[var(--color-text-main)] text-white rounded-full px-8 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
              >
                클래스 살펴보기
              </Link>
              <Link
                href={`${basePath}/contact`}
                className="bg-white text-[var(--color-text-main)] rounded-full px-8 py-3.5 text-sm font-bold hover:brightness-95 active:scale-[0.97] transition-all duration-150"
              >
                수강 상담 문의
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
