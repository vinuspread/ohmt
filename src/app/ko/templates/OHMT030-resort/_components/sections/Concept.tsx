"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const base = "/ko/templates/OHMT030-resort";

const slides = [
  {
    eyebrow: "컨셉",
    heading: "차분한 아름다움과\n깊은 고요함을 제공합니다",
    body: "모든 공간은 해안선과 자연스럽게 연결되도록 구성되었습니다. 현지에서 구한 석재와 목재, 자연광, 파도 소리가 어우러져 공간의 가치를 더합니다.",
    image: "/templates/OHMT030-resort/gallery-1.png",
  },
  {
    eyebrow: "철학",
    heading: "세련된 디자인과\n바다의 조화로운 공존",
    body: "진정한 휴식은 화려함이 아닌 멈춤에서 시작됩니다. 조수 간만의 차를 견디며 시간과 함께 자연스럽게 나이 들어가는 소재를 골랐습니다.",
    image: "/templates/OHMT030-resort/gallery-2.png",
  },
  {
    eyebrow: "공간",
    heading: "세상과 단절된\n고요하고 아늑한 안식처",
    body: "육지와 바다가 맞닿은 경계에 세워진 공간입니다. 어디서나 눈앞에 펼쳐지는 수평선을 바라볼 수 있습니다.",
    image: "/templates/OHMT030-resort/gallery-3.jpg",
  },
];

export function Concept() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);
  const slide = slides[active];

  return (
    <section className="pb-[130px]">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[520px]">

          {/* Left: Text panel */}
          <div className="flex flex-col justify-between bg-white/8 px-12 py-14">
            <div>
              <span className="text-[13px] font-medium text-[var(--accent)] tracking-widest uppercase mb-8 block">
                {slide.eyebrow}
              </span>
              <h2 className="text-[clamp(20px,3vw,42px)] font-semibold text-white leading-[1.1] tracking-[-0.04em] mb-6 whitespace-pre-line">
                {slide.heading}
              </h2>
              <p className="text-[15px] text-white/70 leading-relaxed max-w-[400px]">
                {slide.body}
              </p>
            </div>

            <div className="flex items-center justify-between mt-12">
              <Link
                href={`${base}/#`}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-white text-[14px] hover:bg-white/10 transition-colors"
              >
                더 알아보기 <ArrowRight size={15} />
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
                  aria-label="이전"
                >
                  <ArrowLeft size={16} />
                </button>
                <span className="text-[13px] text-white/50 tabular-nums w-12 text-center">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
                  aria-label="다음"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt=""
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "bg-white w-6" : "bg-white/40 w-1.5"
                  }`}
                  aria-label={`슬라이드 ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
