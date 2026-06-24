"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";

const easeOut = [0.23, 1, 0.32, 1] as const;

export const AboutBrand = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            className="order-2 lg:order-1 h-[400px] md:h-[540px] overflow-hidden"
            initial={shouldReduce ? {} : { opacity: 0, x: -30 }}
            whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <img
              src="/templates/OHMT017-multi-shop/about-brand.jpg"
              alt="브랜드 이미지"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={shouldReduce ? {} : { opacity: 0, x: 30 }}
            whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">
              브랜드 스토리
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]"
              style={{ textWrap: "balance" } as React.CSSProperties}
            >
              의도를 담은 패션
            </h2>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-6">
              저희는 트렌드를 따르지 않습니다. 본능을 따릅니다. 모든 제품은 단순한 질문에서 시작됩니다.
              '내가 정말 이것을 입을까?' 즉시 '예'라는 답이 나오지 않는다면,
              그 제품은 만들어지지 않습니다.
            </p>
            <p className="text-base leading-relaxed text-[var(--color-text-muted)] mt-4">
              그래서 저희 컬렉션은 반복적이지 않으면서도 조화롭습니다. 깔끔한 실루엣,
              피부에 닿는 감촉을 고려해 선택한 원단, 그리고 목적을 가진 모든 디테일.
              장식을 위해 더해지는 것은 없습니다.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[var(--color-border)]">
              {[
                { value: "200+", label: "제품" },
                { value: "50K+", label: "고객" },
                { value: "4.9", label: "평균 평점" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/ko/templates/OHMT017-multi-shop-KO/about"
              className="inline-block mt-10 bg-[var(--color-primary)] text-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black/80 transition-[transform,colors] duration-160 ease-out active:scale-[0.97]"
            >
              더 알아보기
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

