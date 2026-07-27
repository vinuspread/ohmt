"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const cards = [
  { label: "트러블과 흔적", desc: "피부 상태에 따라 각질·모공·흔적을 위한 관리 방법을 제안합니다." },
  { label: "탄력과 잔주름", desc: "피부 컨디션에 맞춘 관리로 탄력과 피부결을 세심하게 돌봅니다." },
  { label: "색소 침착", desc: "칙칙함과 고르지 않은 피부 톤을 위한 맞춤 관리를 제안합니다." },
  { label: "민감성 피부", desc: "민감도와 붉은기를 고려해 자극을 줄인 진정·보습 관리를 진행합니다." },
  { label: "모공과 피부결", desc: "피부 상태에 맞춰 각질과 모공, 거친 피부결을 관리합니다." },
  { label: "스트레스와 피로", desc: "부드러운 마사지와 아로마 케어로 몸의 긴장을 풀고 편안한 휴식을 돕습니다." },
];

export default function WhatWeSolve() {
  const reduce = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canMovePrevious, setCanMovePrevious] = useState(false);
  const [canMoveNext, setCanMoveNext] = useState(true);

  const updateControls = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    setCanMovePrevious(carousel.scrollLeft > 2);
    setCanMoveNext(carousel.scrollLeft < maxScrollLeft - 2);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(carousel);

    return () => resizeObserver.disconnect();
  }, [updateControls]);

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.querySelector<HTMLElement>("[data-care-card]");
    if (!carousel || !firstCard) return;

    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    carousel.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between gap-8 px-6 lg:mb-16">
        <motion.div initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: EASE_OUT }} className="max-w-2xl">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">피부 고민</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">상태별 맞춤 케어</h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-[var(--color-text-muted)]">현재 피부 상태를 먼저 살펴보고 필요한 관리 방향을 안내합니다.</p>
        </motion.div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex" aria-label="맞춤 케어 슬라이드 제어">
          <button
            type="button"
            onClick={() => moveCarousel(-1)}
            disabled={!canMovePrevious}
            aria-label="이전 맞춤 케어 보기"
            className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-secondary)]/70 text-white backdrop-blur-sm transition-[background-color,opacity,transform] duration-200 hover:bg-[var(--color-secondary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => moveCarousel(1)}
            disabled={!canMoveNext}
            aria-label="다음 맞춤 케어 보기"
            className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-secondary)]/70 text-white backdrop-blur-sm transition-[background-color,opacity,transform] duration-200 hover:bg-[var(--color-secondary)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        onScroll={updateControls}
        role="region"
        aria-label="상태별 맞춤 케어"
        className="flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto scroll-smooth px-6 pb-2"
      >
        {cards.map((card, i) => (
          <div
            key={card.label}
            data-care-card
            className="w-[min(300px,calc(100vw-3rem))] shrink-0 snap-start rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-8"
          >
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight text-[var(--color-text)] leading-[var(--leading-heading)]">{card.label}</h3>
            <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 px-6 sm:hidden" aria-label="맞춤 케어 슬라이드 제어">
        <button
          type="button"
          onClick={() => moveCarousel(-1)}
          disabled={!canMovePrevious}
          aria-label="이전 맞춤 케어 보기"
          className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-secondary)]/70 text-white backdrop-blur-sm transition-[background-color,opacity,transform] duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m15 18-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => moveCarousel(1)}
          disabled={!canMoveNext}
          aria-label="다음 맞춤 케어 보기"
          className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-secondary)]/70 text-white backdrop-blur-sm transition-[background-color,opacity,transform] duration-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-25"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
