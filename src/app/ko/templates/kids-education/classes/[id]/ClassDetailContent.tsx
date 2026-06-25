"use client";

import { useParams } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { classes, teachers } from "../../data/data";
import { useMemo } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function ClassDetailContent() {
  const params = useParams();
  const basePath = "/ko/templates/kids-education";
  const shouldReduce = useReducedMotion();

  const classItem = useMemo(
    () => classes.find((c) => c.id === params.id),
    [params.id]
  );

  const teacher = useMemo(
    () => teachers.find((t) => t.id === classItem?.teacherId),
    [classItem?.teacherId]
  );

  const relatedClasses = useMemo(
    () =>
      classItem
        ? classes.filter((c) => c.category === classItem.category && c.id !== classItem.id)
        : [],
    [classItem]
  );

  if (!classItem) {
    return (
      <div className="pt-32 text-center px-6">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>클래스를 찾을 수 없습니다</h1>
        <Link href={`${basePath}/classes`} className="mt-6 inline-block bg-[var(--color-text-main)] text-white rounded-full px-7 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150">
          전체 클래스 보기
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <Link
              href={`${basePath}/classes`}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider mb-8 hover:text-[var(--color-primary)] transition-colors duration-150"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              클래스 목록
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="h-full">
              <motion.div
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1, ease: EASE_OUT }}
                className="h-full"
              >
                <div
                  className="h-full min-h-[320px] rounded-2xl overflow-hidden border border-black/8"
                  style={{ backgroundColor: "#E8E3D9" }}
                >
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.12, ease: EASE_OUT }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center bg-white border border-[var(--color-category)] text-[var(--color-category)] rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider">
                    {classItem.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {classItem.age}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                  {classItem.title}
                </h1>

                <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
                  {classItem.description}
                </p>

                <div className="mt-6 p-5 bg-white rounded-2xl border border-black/8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">수강료</span>
                    <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                      {classItem.price}
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-black/8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">수업 일정</span>
                    <p className="mt-1 text-sm font-semibold">{classItem.schedule}</p>
                  </div>
                </div>

                <Link
                  href={`${basePath}/contact`}
                  className="mt-6 inline-flex items-center justify-center w-full bg-[var(--color-primary)] rounded-full px-7 py-4 text-sm font-bold hover:brightness-95 active:scale-[0.97] transition-all duration-150"
                >
                  클래스 신청하기
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights section */}
      {classItem.highlights && classItem.highlights.length > 0 && (
        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
                클래스 소개
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                이 클래스의 특별한 점
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {classItem.highlights.map((h, idx) => (
                <motion.div
                  key={h.title}
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: idx * 0.05, ease: EASE_OUT }}
                  className="bg-white rounded-2xl border border-black/8 p-6 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200"
                >
                  <span className="text-3xl block mb-3">{h.emoji}</span>
                  <h3 className="text-lg font-bold tracking-tight leading-none mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {h.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{h.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instructor + Curriculum + Materials */}
      <section className="py-24 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Instructor card */}
            {teacher && (
              <motion.div
                initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl border border-black/8 p-6 text-center">
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${teacher.image})`, backgroundColor: teacher.color }}
                  />
                  <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mt-1">
                    {teacher.role}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-4 leading-relaxed">
                    아이들의 상상력과 호기심을 자극해 줄 풍부한 경험의 전문 선생님과 함께합니다.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Curriculum + Materials */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                >
                  <h2 className="text-2xl font-bold tracking-tight mb-6 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                    커리큘럼
                  </h2>
                  <ul className="space-y-3">
                    {classItem.curriculum?.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full w-6 h-6 text-xs font-bold leading-none shrink-0">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: 0.05, ease: EASE_OUT }}
                >
                  <h2 className="text-2xl font-bold tracking-tight mb-6 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                    준비물
                  </h2>
                  <ul className="space-y-3">
                    {classItem.materials?.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="inline-flex items-center justify-center bg-[var(--color-bg-secondary)] rounded-full w-6 h-6 text-xs shrink-0">
                          ●
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Classes */}
      {relatedClasses.length > 0 && (
        <section className="py-24 bg-[var(--color-bg-secondary)]">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="mb-10"
            >
              <span className="inline-flex items-center justify-center bg-[var(--color-secondary)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
                추천 클래스
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                {classItem.category} 클래스 더 보기
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedClasses.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2, delay: idx * 0.04, ease: EASE_OUT }}
                >
                  <Link
                    href={`${basePath}/classes/${item.id}`}
                    className="group block bg-white rounded-2xl border border-black/8 hover:bg-white hover:border-black/15 hover:shadow-md transition-all duration-200 overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${item.image})`, backgroundColor: "#E8E3D9" }}
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-wider leading-none">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-150" style={{ fontFamily: "var(--font-heading)" }}>
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/8">
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">{item.age}</span>
                        <span className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>{item.price}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to bottom */}
      <section className="py-12 bg-[var(--color-bg)] border-t border-black/8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Link
            href={`${basePath}/classes`}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors duration-150"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            전체 클래스 목록 보기
          </Link>
        </div>
      </section>
    </div>
  );
}
