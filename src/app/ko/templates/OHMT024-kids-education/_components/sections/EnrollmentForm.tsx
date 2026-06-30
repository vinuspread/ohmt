"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function EnrollmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const shouldReduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enroll" className="py-24 bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="text-center"
        >
          <span className="inline-flex items-center justify-center bg-[var(--color-red)] text-white rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider leading-none mb-4">
            수강 신청
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none mt-3" style={{ fontFamily: "var(--font-heading)" }}>
            함께 시작해요
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)] max-w-md mx-auto">
            아래 신청서를 작성해 주시면 아이에게 꼭 맞는 즐거운 배움의 여정을 안내해 드립니다.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.2, delay: 0.05, ease: EASE_OUT }}
          className="mt-12 bg-white rounded-2xl border border-black/8 p-8 sm:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.15, ease: EASE_OUT }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[var(--color-secondary)] rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 text-white">
                ★
              </div>
              <h3 className="text-3xl font-bold tracking-tight leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                신청해 주셔서 감사합니다!
              </h3>
              <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-sm mx-auto">
                수강 신청 및 문의 요청이 정상적으로 접수되었습니다. 24시간 이내에 교육 컨설턴트가 유선 또는 메일로 연락드리겠습니다.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="child-name" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    아이 이름 *
                  </label>
                  <input
                    id="child-name"
                    type="text"
                    required
                    className="w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-150"
                    placeholder="아이 이름을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    나이 *
                  </label>
                  <select
                    id="age"
                    required
                    defaultValue=""
                    className="w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-150 appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23111%22 stroke-width=%222.5%22%3E%3Cpolyline points=%226 9 12 15 18 9%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]"
                  >
                    <option value="" disabled>나이를 선택해 주세요</option>
                    <option value="3-4">3 - 4 세</option>
                    <option value="5-6">5 - 6 세</option>
                    <option value="7-8">7 - 8 세</option>
                    <option value="9-10">9 - 10 세</option>
                    <option value="11-12">11 - 12 세</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parent-name" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    학부모 성함 *
                  </label>
                  <input
                    id="parent-name"
                    type="text"
                    required
                    className="w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-150"
                    placeholder="보호자 성함을 입력하세요"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2">
                    이메일 주소 *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-150"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  관심 있는 클래스 *
                </label>
                <select
                  id="interest"
                  required
                  defaultValue=""
                  className="w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-150 appearance-none pr-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23111%22 stroke-width=%222.5%22%3E%3Cpolyline points=%226 9 12 15 18 9%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center]"
                >
                  <option value="" disabled>클래스를 선택해 주세요</option>
                  <option value="coding">크리에이티브 코딩</option>
                  <option value="art">창작 미술 스튜디오</option>
                  <option value="science">창의 과학 실험실</option>
                  <option value="math">수학 퍼즐 모험</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2">
                  기타 문의 및 요청사항
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full border-2 border-[var(--color-border)] rounded-xl px-4 py-3 text-sm bg-[var(--color-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all duration-150"
                  placeholder="수업과 관련한 특이사항이나 문의 내용을 작성해 주세요..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-[var(--color-text-main)] rounded-xl py-4 text-sm font-bold border-2 border-[var(--color-border)] shadow-[4px_4px_0px_0px_var(--color-border)] hover:brightness-95 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--color-border)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--color-border)] transition-all duration-150"
              >
                수강 신청하기
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
