"use client";

import { motion } from "motion/react";

const stats = [
  { value: "5", label: "출시 게임" },
  { value: "1200만+", label: "전 세계 플레이어" },
  { value: "18", label: "업계 수상" },
  { value: "2018", label: "설립 연도" },
];

export default function AboutStudio() {
  return (
    <section className="relative py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
              About Us
            </span>
            <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
              스튜디오
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
              2018년, Oh My Template는 오스틴의 작은 사무실에서 다섯 명의 열정적인 개발자로
              시작했습니다. 오늘날 우리는 세 대륙에 걸쳐 200명 이상의 크리에이터로 구성된
              가족으로, 단 하나의 사명으로 뭉쳐 있습니다: 영감을 주는 세상을 만들고
              인터랙티브 스토리텔링의 한계를 허무는 것입니다.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
              다크 판타지 영역부터 네온으로 물든 사이버펑크 도시까지, 우리가 출시하는 모든
              프로젝트는 타협 없는 디테일, 기술적 우수성, 그리고 게임 예술에 대한 깊은
              존경심으로 제작됩니다.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
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
              alt="Oh My Template 팀"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 border border-[var(--color-border)] rounded-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
