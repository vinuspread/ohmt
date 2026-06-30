"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const testimonials = [
  { name: "이 가족", role: "빌라 솔라야 투숙객", quote: "OHMT에서의 시간은 완전히 다른 세계에 온 듯했습니다. 각 빌라는 저마다의 이야기를 가지고 있고, 바다가 보이는 위치는 숨이 멎을 듯 아름다웠습니다.", rating: "9.3" },
  { name: "아멜리아 & 제임스 파커", role: "빌라 미라이아 투숙객", quote: "파도 소리와 함께 잠에서 깨고, 눈앞에 펼쳐진 바다와 하늘만 있는 경험은 평생 간직할 것입니다.", rating: "9.1" },
  { name: "제임스 윌리엄스", role: "솔로 여행자", quote: "건축, 고요함, 직원, 음식. 모든 것이 의도적으로 정교하게 만들어졌습니다. OHMT는 단순한 리조트가 아니라 하나의 철학입니다.", rating: "9.4" },
  { name: "니나 데이비스", role: "빌라 아자리 투숙객", quote: "빌라를 보러 왔다가 영혼을 얻어 갔습니다. OHMT는 숨 쉴 공간과 고요함, 그리고 진정한 휴식이 무엇인지 기억하게 해주었습니다.", rating: "9.0" },
];

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const visible = 4;
  const max = testimonials.length - visible;

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(max, o + 1));

  return (
    <section className="pb-[130px]">
      <div className="max-w-[1440px] mx-auto px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[13px] font-medium text-[var(--accent)] tracking-widest uppercase mb-3 block">
              투숙객 후기
            </span>
            <h2 className="text-[clamp(26px,3vw,42px)] font-semibold text-white leading-[1.1] tracking-[-0.04em]">
              투숙객의 진솔한 이야기
            </h2>
          </div>
          <div className="hidden">
            <button onClick={prev} disabled={offset === 0} aria-label="prev">
              <ArrowLeft size={17} />
            </button>
            <button onClick={next} disabled={offset >= max} aria-label="next">
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Cards track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div key={i}
              className="rounded-2xl bg-white p-7 flex flex-col justify-between min-h-[220px]">
              <div>
                <p className="text-[14px] text-[var(--text-dark)] leading-[1.6]">{t.quote}</p>
              </div>
              <div className="flex items-end justify-between mt-6 pt-5 border-t border-black/10">
                <div>
                  <p className="text-[13px] font-semibold text-[var(--text-dark)]">{t.name}</p>
                  <p className="text-[12px] text-[var(--text-dark)]/60 mt-0.5">{t.role}</p>
                </div>
                <p className="text-[22px] font-semibold text-[var(--text-dark)] leading-none">
                  {t.rating}<span className="text-[12px] font-normal text-[var(--text-dark)]/50">/10</span>
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
