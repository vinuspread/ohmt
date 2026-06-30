"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const basePath = "/ko/templates/OHMT024-kids-education";

const upcoming = [
  { id: 1, title: "꼬마 과학자의 날", date: "6월 22일", time: "오전 10:00", price: "18,000원", category: "과학", color: "var(--color-secondary)" },
  { id: 2, title: "가족 미술의 밤", date: "6월 27일", time: "오후 5:30", price: "16,000원", category: "창의 미술", color: "var(--color-accent)" },
  { id: 3, title: "코딩 축제", date: "7월 8일", time: "오후 2:00", price: "22,000원", category: "테크", color: "var(--color-primary)" },
  { id: 4, title: "수학 모험 캠프", date: "7월 15일", time: "오전 9:00", price: "28,000원", category: "수학", color: "var(--color-red)" },
  { id: 5, title: "여름 미술 스튜디오", date: "7월 24일", time: "오후 3:00", price: "20,000원", category: "창의 미술", color: "var(--color-accent)" },
  { id: 6, title: "로봇 공학 워크숍", date: "8월 3일", time: "오전 11:00", price: "35,000원", category: "테크", color: "var(--color-secondary)" },
];

export default function Schedule() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-flex items-center justify-center bg-[var(--color-primary)] rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
              예정된 클래스 & 이벤트
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              이번 달 진행 프로그램
            </h2>
          </div>
          <Link
            href={`${basePath}/classes`}
            className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors duration-150 shrink-0"
          >
            전체 일정 보기 →
          </Link>
        </motion.div>

        {/* Event list */}
        <div className="border-t border-black/10">
          {upcoming.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.18, delay: idx * 0.04, ease: EASE_OUT }}
            >
              <Link
                href={`${basePath}/classes`}
                className="group flex flex-wrap sm:flex-nowrap items-center gap-4 border-b border-black/10 py-5 rounded-lg px-4 -mx-4 [@media(hover:hover)]:hover:bg-white transition-colors duration-150"
              >
                {/* Category dot + label */}
                <div className="flex items-center gap-2 w-full sm:w-36 shrink-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: event.color }}
                  />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {event.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="flex-1 text-lg font-bold tracking-tight [@media(hover:hover)]:group-hover:text-[var(--color-primary)] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.title}
                </h3>

                {/* Date / Time */}
                <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)] font-semibold font-sans">
                  <span>{event.date}</span>
                  <span>{event.time}</span>
                </div>

                {/* Price */}
                <span
                  className="text-xl font-bold w-24 text-right"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {event.price}
                </span>

                {/* Arrow */}
                <span className="text-[var(--color-text-muted)] [@media(hover:hover)]:group-hover:text-[var(--color-primary)] [@media(hover:hover)]:group-hover:translate-x-1 transition-all duration-150">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
