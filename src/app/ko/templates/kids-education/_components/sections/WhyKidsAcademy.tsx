"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function WhyKidsAcademy() {
  const shouldReduce = useReducedMotion();

  const highlights = [
    { icon: "★", title: "소수정예 클래스", desc: "선생님의 세심한 지도를 위해 클래스당 최대 정원 8명으로 제한합니다.", color: "var(--color-primary)" },
    { icon: "●", title: "전문 강사진", desc: "아동 발달 분야에서 풍부한 경험을 쌓은 열정적인 교육자들이 지도합니다.", color: "var(--color-secondary)" },
    { icon: "◆", title: "놀이 중심 학습", desc: "모든 수업은 공부가 아닌 즐거운 놀이처럼 느껴지도록 설계되었습니다.", color: "var(--color-accent)" },
    { icon: "▲", title: "안전한 환경", desc: "보안 시스템과 전문 인력, CCTV 모니터링으로 철저히 안전을 보장합니다.", color: "var(--color-red)" },
  ];

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="text-center"
        >
          <span className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
            키즈 아카데미를 선택해야 하는 이유
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none mt-3" style={{ fontFamily: "var(--font-heading)" }}>
            성장하는 아이들을 위한 특별함
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
            >
              <div className="bg-white rounded-2xl border border-black/8 p-6 h-full text-center hover:border-black/15 hover:shadow-md transition-all duration-200">
                <div
                  className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-white text-2xl mb-5"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
