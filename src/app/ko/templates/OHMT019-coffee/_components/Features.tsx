"use client";
import React from "react";
import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

const badges = [
  { top: "스페셜티", bottom: "등급", sub: "SCA 인증" },
  { top: "직접", bottom: "거래", sub: "농장 파트너" },
  { top: "수상", bottom: "경력", sub: "Korea 2024" },
];

export const Features = () => {
  return (
    <section className="bg-[var(--color-bg-secondary)] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-semibold border-b border-[var(--color-text-muted)]/30 pb-2 inline-block mb-6">
              우리는 누구인가
            </p>
            <p className="font-heading text-[var(--color-text)] text-2xl md:text-[1.85rem] font-bold leading-[var(--leading-heading)] mb-5 max-w-[22ch]">
              모든 손님은 올 때보다<br className="hidden md:block" /> 나은 채로 떠날 자격이 있다.
            </p>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-12 max-w-[40ch]">
              신선한 메뉴, 따뜻한 공간, 정성껏 내린 커피. 우리가 매일 그 자리로 돌아오는 이유입니다.
            </p>

            <div className="flex flex-nowrap gap-2 sm:gap-3 md:gap-6">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  className="w-[92px] h-[92px] sm:w-[110px] sm:h-[110px] md:w-[148px] md:h-[148px] shrink-0 rounded-full border-2 border-[var(--color-text-muted)]/35 flex flex-col items-center justify-center text-center gap-1 md:gap-1.5 px-1.5 sm:px-2 md:px-3 cursor-pointer"
                  whileHover={{ scale: 1.06, borderColor: "rgba(17,17,24,0.7)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span className="text-xs md:text-xs font-bold text-[var(--color-text)] uppercase leading-tight">
                    {b.top}<br />{b.bottom}
                  </span>
                  <span className="text-xs md:text-xs text-[var(--color-text-muted)] leading-tight">{b.sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: photo + overlap card */}
          <motion.div
            className="relative pb-16 group cursor-pointer"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="/templates/OHMT019-coffee/alt-detail.jpg"
                alt="커피숍 디테일"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-[var(--color-bg-dark)] text-white p-6 w-[200px]">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-2">우리의 미션</p>
              <p className="text-sm leading-relaxed text-white/75">
                거래가 아닌 경험으로서의 커피를 제공합니다.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
