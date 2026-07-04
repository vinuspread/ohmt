"use client";

import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const testimonials = [
  { name: "이 가족", role: "빌라 솔라야 투숙객", quote: "빌라에서 바로 보이는 바다와 조용한 동선이 좋았습니다. 아이와 함께 지내기에도 편안했어요.", rating: "9.3" },
  { name: "아멜리아 & 제임스 파커", role: "빌라 미라이아 투숙객", quote: "파도 소리로 아침을 시작했습니다. 일정 없이 머무는 시간이 가장 좋았어요.", rating: "9.1" },
  { name: "제임스 윌리엄스", role: "솔로 여행자", quote: "객실, 음식, 서비스가 모두 차분했습니다. 혼자 쉬러 오기에 좋은 곳입니다.", rating: "9.4" },
  { name: "니나 데이비스", role: "빌라 아자리 투숙객", quote: "공간이 넓고 조용해서 오래 쉬었습니다. 다시 돌아오고 싶은 리조트예요.", rating: "9.0" },
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
