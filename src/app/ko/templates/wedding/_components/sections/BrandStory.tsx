"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";

const phrases = [
  "결혼식은 단순한 사진 촬영이 아닙니다.",
  "평생 단 한 번뿐인 축제입니다.",
];

export default function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress: rawProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scrollYProgress = useSpring(rawProgress, { stiffness: 280, damping: 38, mass: 0.4 });

  const x1 = useTransform(scrollYProgress, [0, 0.5], reduce ? ["0px", "0px"] : ["-40px", "0px"]);
  const x2 = useTransform(scrollYProgress, [0, 0.5], reduce ? ["0px", "0px"] : ["40px", "0px"]);
  const x3 = useTransform(scrollYProgress, [0, 0.6], reduce ? ["0px", "0px"] : ["-30px", "0px"]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const p0 = useTransform(scrollYProgress, [0.1, 0.32, 0.55, 0.7], [0, 1, 1, 0.3]);
  const p1 = useTransform(scrollYProgress, [0.68, 0.85, 1, 1], [0, 1, 1, 1]);

  const phaseOpacities = [p0, p1];

  return (
    <>
      <section
        ref={containerRef}
        className="relative hidden lg:block bg-[var(--color-bg-secondary)]"
        style={{ height: "280vh" }}
      >
        <div className="sticky top-0 min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute left-[14vw] top-[12%] w-[32vw] max-w-[380px] aspect-[3/4] overflow-hidden shadow-2xl pointer-events-none"
            style={{ x: x1, opacity: reduce ? 1 : imgOpacity }}
          >
            <img
              src="/templates/OHMT025-wedding/wedding-story-01.jpg"
              alt="결혼식 디테일"
              className="h-full w-full object-cover contrast-110 saturate-110 ring-1 ring-black/10"
            />
          </motion.div>

          <motion.div
            className="absolute right-[14vw] top-[8%] w-[30vw] max-w-[360px] aspect-[4/5] overflow-hidden shadow-2xl pointer-events-none"
            style={{ x: x2, opacity: reduce ? 1 : imgOpacity }}
          >
            <img
              src="/templates/OHMT025-wedding/wedding-story-02.jpg"
              alt="결혼식 순간"
              className="h-full w-full object-cover contrast-110 saturate-110 ring-1 ring-black/10"
            />
          </motion.div>

          <motion.div
            className="absolute left-[18vw] bottom-[8%] w-[34vw] max-w-[400px] aspect-[16/10] overflow-hidden shadow-2xl pointer-events-none"
            style={{ x: x3, opacity: reduce ? 1 : imgOpacity }}
          >
            <img
              src="/templates/OHMT025-wedding/wedding-story-03.jpg"
              alt="결혼식 예식"
              className="h-full w-full object-cover contrast-110 saturate-110 ring-1 ring-black/10"
            />
          </motion.div>

          <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
            <div
              className="font-[family-name:var(--font-heading)] font-light normal-case text-[var(--color-text)] leading-[1.15] text-balance"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}
            >
              {phrases.map((phrase, idx) => (
                <motion.div
                  key={idx}
                  style={{ opacity: reduce ? 1 : phaseOpacities[idx] }}
                >
                  {phrase}
                </motion.div>
              ))}
            </div>
            <motion.p
              style={{ opacity: reduce ? 1 : p1 }}
              className="mt-8 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md mx-auto font-[family-name:var(--font-body)]"
            >
              다큐멘터리 스토리텔링과 파인아트 구성의 만남. 모든 프레임이 살아 숨쉬듯 자연스럽게.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="lg:hidden bg-[var(--color-bg-secondary)] py-20 px-8">
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-12">
          <img
            src="/templates/OHMT025-wedding/wedding-story-01.jpg"
            alt="결혼식 디테일"
            className="w-full aspect-[3/4] object-cover contrast-110 saturate-110 ring-1 ring-black/10"
          />
          <img
            src="/templates/OHMT025-wedding/wedding-story-02.jpg"
            alt="결혼식 순간"
            className="w-full aspect-[3/4] object-cover contrast-110 saturate-110 ring-1 ring-black/10 mt-10"
          />
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-md mx-auto"
        >
          <p
            className="font-[family-name:var(--font-heading)] font-light normal-case text-[var(--color-text-muted)] leading-[1.2] text-balance"
            style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)" }}
          >
            결혼식은 단순한 사진 촬영이 아닙니다.
          </p>
          <p
            className="mt-2 font-[family-name:var(--font-heading)] font-light normal-case text-[var(--color-text)] leading-[1.2] text-balance"
            style={{ fontSize: "clamp(1.8rem, 7vw, 2.4rem)" }}
          >
            평생 단 한 번뿐인 축제입니다.
          </p>
          <p className="mt-6 text-sm text-[var(--color-text-muted)] leading-relaxed font-[family-name:var(--font-body)]">
            다큐멘터리 스토리텔링과 파인아트 구성의 만남. 모든 프레임이 살아 숨쉬듯 자연스럽게.
          </p>
        </motion.div>

        <img
          src="/templates/OHMT025-wedding/wedding-story-03.jpg"
          alt="결혼식 예식"
          className="w-full max-w-xs mx-auto mt-12 aspect-[16/10] object-cover contrast-110 saturate-110 ring-1 ring-black/10"
        />
      </section>
    </>
  );
}
