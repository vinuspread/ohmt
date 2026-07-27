"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { BodyText, SectionEyebrow, SectionHeading } from "../ui/Typography";
import { IconButton } from "../ui/IconButton";

const base = "/ko/templates/OHMT030-resort";

const slides = [
  {
    eyebrow: "건축",
    heading: "절벽의 흐름을 따라\n낮고 조용하게",
    body: "건축의 높이와 동선을 해안선에 맞추고, 현지 석재와 목재를 사용했습니다.\n자연광과 바다 풍경이 객실 안까지 이어집니다.",
    image: "/templates/OHMT030-resort/gallery-1.png",
  },
  {
    eyebrow: "재료",
    heading: "시간이 지날수록\n깊어지는 재료",
    body: "화산석과 노출 콘크리트, 목재처럼 시간이 지나며\n자연스럽게 색과 질감이 깊어지는 재료를 선택했습니다.",
    image: "/templates/OHMT030-resort/gallery-2.png",
  },
  {
    eyebrow: "공간",
    heading: "바다를 가까이 두고\n온전히 쉬는 공간",
    body: "절벽과 바다가 맞닿는 위치를 살려\n객실과 테라스 어디에서든 수평선을 바라볼 수 있도록 설계했습니다.",
    image: "/templates/OHMT030-resort/gallery-3.jpg",
  },
];

export function Concept() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);
  const slide = slides[active];

  return (
    <section className="pb-16 md:pb-32">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden min-h-[520px]">

          {/* Left: Text panel */}
          <div className="flex flex-col justify-between bg-white/8 px-12 py-16">
            <div>
              <SectionEyebrow className="mb-8">
                {slide.eyebrow}
              </SectionEyebrow>
              <SectionHeading size="compact" className="mb-6 whitespace-pre-line">
                {slide.heading}
              </SectionHeading>
              <BodyText className="max-w-[400px]">
                {slide.body}
              </BodyText>
            </div>

            <div className="flex items-center justify-between mt-12">
              <Link
                href={`${base}/#`}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-white text-sm hover:bg-white/10 transition-colors focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]"
              >
                리조트 소개<ArrowRight size={15} />
              </Link>

              <div className="flex items-center gap-3">
                <IconButton
                  onClick={prev}
                  aria-label="이전"
                >
                  <ArrowLeft size={16} />
                </IconButton>
                <span className="text-sm text-white/50 tabular-nums w-12 text-center">
                  {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <IconButton
                  onClick={next}
                  aria-label="다음"
                >
                  <ArrowRight size={16} />
                </IconButton>
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
