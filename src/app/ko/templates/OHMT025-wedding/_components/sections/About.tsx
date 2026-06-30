"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="relative py-32 bg-[var(--color-bg)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden filter grayscale contrast-125 rounded-sm"
          >
            <img
              src="/templates/OHMT025-wedding/about-clara.jpg"
              alt="클라라, 웨딩 포토그래퍼"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-[var(--color-border)] pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-primary)] font-semibold">
              포토그래퍼 소개
            </span>
            <h2 className="mt-4 font-[var(--font-heading)] text-5xl font-light uppercase tracking-[0.05em] text-[var(--color-text)]">
              안녕하세요, 클라라입니다
            </h2>
            <div className="mt-6 space-y-6 text-base text-[var(--color-text-muted)] leading-relaxed">
              <p>
                8년이 넘는 시간 동안, 저는 웃음과 온기, 그리고 영원한 아름다움이 가득한 결혼식을 기록해 왔습니다. 제 목표는 여러분의 기억처럼 따뜻하고, 진실되며, 영원히 남을 이미지를 만드는 것입니다.
              </p>
              <p>
                결혼식은 여러분이 가장 아끼는 이들과 깊은 약속, 그리고 미래를 정의할 고요한 순간들이 만나는 드문 교차점입니다. 저는 가식 없는 다큐멘터리 스토리텔링과 잡지 화보 같은 세련미를 결합하여, 여러분이 그 순간에 온전히 머물 수 있도록 집중합니다.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="/ko/templates/OHMT025-wedding/contact"
                className="inline-flex items-center justify-center border-b border-[var(--color-primary)] pb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)] hover:opacity-80 transition-opacity"
              >
                당신의 특별한 날을 계획해 보세요 →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
