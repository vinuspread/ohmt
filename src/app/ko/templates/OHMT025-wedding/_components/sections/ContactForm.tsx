"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-[480px]">
      <h1
        className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[var(--leading-heading)] mb-4"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        촬영 문의
      </h1>
      <p className="text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed mb-12 font-[family-name:var(--font-body)]">
        예식 날짜와 장소를 남겨주시면 촬영 가능 여부와 안내 사항을 확인해드립니다.
      </p>

      {submitted ? (
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          className="py-12 border-t border-[var(--color-border)]"
        >
          <p className="font-[family-name:var(--font-heading)] text-3xl font-light capitalize text-[var(--color-text)] mb-4">
            문의가 접수되었습니다
          </p>
          <p className="text-sm text-[var(--color-text-muted)] font-[family-name:var(--font-body)]">
            문의해주셔서 감사합니다. 내용을 확인한 뒤 1~2일 이내에 답변드리겠습니다.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid gap-7 sm:grid-cols-2">
            <Field id="name" label="이름" type="text" required />
            <Field id="partner" label="상대방 이름" type="text" required />
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            <Field id="date" label="예식 예정일" type="date" required />
            <Field id="venue" label="예식 장소" type="text" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-[0.18em] font-medium text-[var(--color-text-muted)] mb-2">
              촬영 관련 요청
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors resize-none font-[family-name:var(--font-body)]"
              placeholder="예식 분위기와 촬영 요청 사항을 알려주세요."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--color-text)] text-white hover:bg-[var(--color-primary)] transition-colors duration-300 font-medium uppercase tracking-[0.2em] py-4 text-[0.72rem] font-[family-name:var(--font-body)]"
          >
            촬영 문의 보내기
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ id, label, type, required }: { id: string; label: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.65rem] uppercase tracking-[0.18em] font-medium text-[var(--color-text-muted)] mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:border-[var(--color-text)] focus:outline-none transition-colors font-[family-name:var(--font-body)]"
      />
    </div>
  );
}
