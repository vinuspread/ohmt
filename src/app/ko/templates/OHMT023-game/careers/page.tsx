"use client";

import { motion } from "motion/react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Button from "../_components/ui/Button";
import { careers } from "../data/data";
import { ArrowRight } from "lucide-react";

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

const departments = Array.from(new Set(careers.map((c) => c.department)));

export default function CareersPage() {
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
              채용
            </span>
            <h1 className="mt-2 font-[var(--font-heading)] text-5xl font-bold md:text-6xl">
              함께할 동료를 찾습니다
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
              좋은 게임을 함께 만들 개발자와 디자이너, 아티스트를 찾고 있습니다.
              현재 모집 중인 포지션과 팀별 업무를 확인해 보세요.
            </p>
          </motion.div>

          <div className="space-y-16">
            {departments.map((dept) => (
              <section key={dept}>
                <h2 className="mb-6 font-[var(--font-heading)] text-2xl font-bold text-[var(--color-primary)]">
                  {dept}
                </h2>
                <div className="space-y-4">
                  {careers
                    .filter((c) => c.department === dept)
                    .map((job, i) => (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                        className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 transition-all hover:border-[var(--color-border-bright)] sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div>
                          <h3 className="font-[var(--font-heading)] text-lg font-bold">
                            {job.title}
                          </h3>
                          <div className="mt-2 flex flex-wrap gap-3 text-sm text-[var(--color-text-muted)]">
                            <span>{job.department}</span>
                            <span>{job.type}</span>
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <Button className="shrink-0 text-xs px-5 py-2">
                          지원하기
                          <ArrowRight size={14} />
                        </Button>
                      </motion.div>
                    ))}
                </div>
              </section>
            ))}
          </div>

          {careers.length === 0 && (
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-12 text-center">
              <h3 className="font-[var(--font-heading)] text-2xl font-bold">현재 모집 중인 포지션이 없습니다</h3>
              <p className="mt-2 text-[var(--color-text-muted)]">
                현재 채용 공고는 없지만 지원서는 언제든 검토합니다.
                contact@ohmt.site로 이력서를 보내주세요.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
