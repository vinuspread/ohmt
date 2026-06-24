"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export const Booking = () => {
  return (
    <section id="예약" className="py-20 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[1.2]">
            투숙을 예약하세요
          </h2>
          <p className="text-sm md:text-base text-[var(--color-text-muted)] max-w-xl mx-auto mt-4 leading-relaxed">
            당신의 여정을 지금 시작하세요. 정보를 남겨주시면 완벽한 경험을 준비해 드립니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto bg-[var(--color-bg)] border border-[var(--color-border)] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-2">성함</label>
              <input type="text" placeholder="이름을 입력하세요" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-2">이메일</label>
              <input type="email" placeholder="your@email.com" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-2">체크인</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-2">체크아웃</label>
              <input type="text" placeholder="YYYY / MM / DD" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-2">객실 타입</label>
              <select className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                <option>디럭스 룸</option>
                <option>이그제큐티브 스위트</option>
                <option>풀 빌라</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-2">인원</label>
              <select className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none">
                <option>1명</option>
                <option>2명</option>
                <option>3명</option>
                <option>4명</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-2">특별 요청사항</label>
            <textarea rows={3} placeholder="추가 요청사항이나 선호사항을 알려주세요..." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none" />
          </div>

          <div className="mt-8 text-center">
            <Button variant="primary" size="lg" className="text-[13px] tracking-tight px-12">예약 문의 보내기</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
