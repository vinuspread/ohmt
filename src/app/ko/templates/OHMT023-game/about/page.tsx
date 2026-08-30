"use client";

import { motion } from "motion/react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { awards } from "../data/data";
import { Quote } from "lucide-react";

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

const timeline = [
  { year: "2018", event: "텍사스 오스틴에서 5명의 팀으로 시작" },
  { year: "2019", event: "초기 투자를 유치하고 첫 게임 개발 시작" },
  { year: "2020", event: "팀을 40명으로 확장하고 ‘섀도우 렐름’ 공개" },
  { year: "2021", event: "몬트리올에 두 번째 스튜디오 설립" },
  { year: "2022", event: "‘섀도우 렐름’ 얼리 액세스 출시" },
  { year: "2023", event: "세 곳의 스튜디오, 150명 규모로 성장" },
  { year: "2024", event: "‘섀도우 렐름’ 정식 출시, 첫 달 500만 장 판매" },
  { year: "2025", event: "신작 3종 공개, 여러 올해의 게임 후보에 선정" },
  { year: "2026", event: "세 번째 스튜디오 설립, 새로운 장르 개발 시작" },
];

export default function AboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="mb-16 max-w-3xl"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
              소개
            </span>
            <h1 className="mt-2 font-[var(--font-heading)] text-5xl font-bold md:text-6xl">
              OHMT의 시작
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
              오스틴의 작은 작업실에서 시작한 다섯 명의 팀은 현재 세 대륙, 200명 규모의 게임 개발 스튜디오로 성장했습니다. 규모는 달라졌지만, 오래 기억되는 세계와 플레이 경험을 만든다는 목표는 같습니다.
            </p>
          </motion.div>

          <section className="mb-24">
            <h2 className="mb-10 font-[var(--font-heading)] text-3xl font-bold">연혁</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-[var(--color-border)]" />
              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-primary)] bg-[var(--color-bg)]" />
                    <span className="font-[var(--font-heading)] text-lg font-bold text-[var(--color-primary)]">
                      {item.year}
                    </span>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-10 font-[var(--font-heading)] text-3xl font-bold">수상 내역</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {awards.map((award, i) => (
                <motion.div
                  key={`${award.name}-${award.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Quote size={18} />
                  </div>
                  <h3 className="font-[var(--font-heading)] text-sm font-bold">{award.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{award.category}</p>
                  <span className="mt-2 block text-xs text-[var(--color-accent)]">{award.year}년</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
