"use client";

import { motion } from "motion/react";

const stats = [
  { value: "5", label: "출시 게임" },
  { value: "340만+", label: "전 세계 플레이어" },
  { value: "18", label: "수상" },
  { value: "2018", label: "설립 연도" },
];

export default function AboutStudio() {
  return (
    <section className="relative overflow-hidden py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
              스튜디오 소개</span>
            <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
              OHMT 스튜디오</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
              <span className="sm:block">OHMT는 2018년 오스틴에서 다섯 명의 개발자로 시작했습니다.</span>{" "}
              <span className="sm:block">현재는 세 대륙에서 200명 이상의 구성원이 함께 일하며,</span>{" "}
              <span className="sm:block">플레이어가 오래 기억할 세계와 이야기를 만들고 있습니다.</span>
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
              <span className="sm:block">다크 판타지부터 사이버펑크까지, 장르가 달라도</span>{" "}
              <span className="sm:block">세계의 디테일과 플레이의 완성도는 놓치지 않습니다.</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-8 sm:flex-nowrap">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="shrink-0 text-center"
                >
                  <div className="whitespace-nowrap font-[var(--font-heading)] text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <img
              src="/templates/OHMT023-game/studio-team.jpg"
              alt="OHMT 팀"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-[var(--color-border)] rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
