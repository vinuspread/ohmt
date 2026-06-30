"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// rotate / rough position matching Figma design
const leftPhotos = [
  { src: "/templates/OHMT024-kids-education/photo-01.jpg", style: { top: "8%",  left: "22%", width: "210px", zIndex: 2 } },
  { src: "/templates/OHMT024-kids-education/photo-03.jpg", style: { top: "38%", left: "29%", width: "180px", zIndex: 3 } },
  { src: "/templates/OHMT024-kids-education/photo-05.jpg", style: { top: "62%", left: "21%", width: "195px", zIndex: 2 } },
];
const rightPhotos = [
  { src: "/templates/OHMT024-kids-education/photo-02.jpg", style: { top: "6%",  right: "22%", width: "185px", zIndex: 2 } },
  { src: "/templates/OHMT024-kids-education/photo-04.jpg", style: { top: "36%", right: "27%", width: "210px", zIndex: 3 } },
  { src: "/templates/OHMT024-kids-education/photo-06.jpg", style: { top: "62%", right: "21%", width: "190px", zIndex: 2 } },
];

export default function PhotoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const shouldReduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-bg)]">

      {/* Left photos */}
      {!shouldReduce && leftPhotos.map((photo, idx) => (
        <motion.div
          key={`l${idx}`}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: idx * 0.1, ease: EASE_OUT }}
          className="absolute hidden lg:block aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          style={photo.style}
        >
          <img src={photo.src} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Right photos */}
      {!shouldReduce && rightPhotos.map((photo, idx) => (
        <motion.div
          key={`r${idx}`}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: idx * 0.1, ease: EASE_OUT }}
          className="absolute hidden lg:block aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          style={photo.style}
        >
          <img src={photo.src} alt="" className="w-full h-full object-cover" />
        </motion.div>
      ))}

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        >
          <span className="inline-flex items-center justify-center bg-[var(--color-accent)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-6">
            소식 구독하기
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-none"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            아카데미와 함께하며<br />신규 클래스 소식을 받아보세요
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            새로운 클래스 개설 정보, 특별 시즌 캠프, 이벤트 안내를<br />이메일 편지함으로 직접 배달해 드립니다.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, delay: 0.08, ease: EASE_OUT }}
          className="mt-8"
        >
          {submitted ? (
            <div className="bg-[var(--color-primary)] rounded-2xl px-8 py-6 text-[var(--color-text-main)]">
              <p className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>등록 완료!</p>
              <p className="text-sm mt-1">키즈 아카데미의 신나는 소식들을 이메일로 전해 드릴게요.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center gap-1.5 bg-white rounded-full shadow-lg p-1.5 border border-black/8 w-full max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="youremail@example.com"
                className="flex-1 min-w-0 px-4 py-2 text-sm bg-transparent focus:outline-none text-left"
              />
              <button
                type="submit"
                className="bg-[var(--color-primary)] text-[var(--color-text-main)] rounded-full px-5 py-2 text-sm font-bold active:scale-[0.97] transition-transform duration-100 whitespace-nowrap shrink-0"
              >
                구독하기
              </button>
            </form>
          )}

          <a
            href="/ko/templates/OHMT024-kids-education/contact"
            className="inline-block mt-5 text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors duration-150"
          >
            바로 수강 신청하기 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
