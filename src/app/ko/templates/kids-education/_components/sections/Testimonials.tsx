"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const reviews = [
  {
    name: "사라 미첼",
    role: "엠마(7세) 학부모",
    color: "var(--color-primary)",
    text: "미술 스튜디오 수업 덕분에 저희 딸이 완전히 달라졌어요. 매주 수업이 끝나면 생기가 넘치고 신나서 재잘거려요. 선생님들이 참을성 있고 열정적이십니다.",
  },
  {
    name: "박제임스",
    role: "알렉스(10세) 학부모",
    color: "var(--color-secondary)",
    text: "알렉스는 단 4번의 수업 만에 본인의 첫 번째 게임을 직접 빌드했어요! 코딩을 이렇게 재미있고 흥미롭게 가르쳐 주셔서 정말 인상 깊었습니다. 적극 추천합니다.",
  },
  {
    name: "린다 토레스",
    role: "소피아 & 마르코 학부모",
    color: "var(--color-accent)",
    text: "두 아이를 각각 다른 수업에 보냈는데 매주 새로운 모험을 떠나는 것처럼 즐거워해요. 소규모 밀착 지도 방식으로 진행되는 점이 가장 마음에 듭니다.",
  },
  {
    name: "데이비드 첸",
    role: "릴리(8세) 학부모",
    color: "var(--color-red)",
    text: "창의 과학 실험실은 기대 이상이었습니다. 릴리가 저녁 식탁에서 매주 자기가 했던 과학 실험을 신나서 설명해 줘요. 안전하고 긍정적인 교육 환경입니다.",
  },
  {
    name: "마리아 존슨",
    role: "노아(6세) 학부모",
    color: "var(--color-primary)",
    text: "노아는 원래 숫자 공부를 무척 지루해했는데, 이제 퍼즐과 퀴즈 놀이를 정말 좋아해요. 놀이 기반의 다차원 학습법이 어린 연령대에 아주 효과적입니다.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const shouldReduce = useReducedMotion();

  const total = reviews.length;

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent((idx + total) % total);
  };
  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  const visible = [0, 1, 2].map((offset) => reviews[(current + offset) % total]);

  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p
              className="text-2xl sm:text-3xl font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              500명이 넘는 학부모님들이<br />직접 경험을 전해 주셨습니다.
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              참여 학생의 98%가 매 수업 시간에 높은 만족도를 나타냈습니다.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-sm font-bold hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] active:scale-[0.97] transition-all duration-150"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center text-sm font-bold hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] active:scale-[0.97] transition-all duration-150"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: shouldReduce ? 0 : direction * 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: shouldReduce ? 0 : -direction * 32 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {visible.map((review, i) => (
              <div
                key={`${current}-${i}`}
                className={`bg-white rounded-2xl border border-black/8 p-6 flex-col gap-4 ${
                  i === 1 ? "hidden sm:flex" : i === 2 ? "hidden md:flex" : "flex"
                }`}
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="text-[var(--color-primary)] text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-[var(--color-text-main)] leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 pt-2 border-t border-black/6">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">{review.name}</p>
                    <p className="text-[0.68rem] text-[var(--color-text-muted)]">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex gap-1.5 mt-6 justify-center">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === current ? "w-6 bg-[var(--color-primary)]" : "w-1.5 bg-black/15"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
