"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { BodyText, SectionEyebrow, SectionHeading } from "../ui/Typography";
import { IconButton } from "../ui/IconButton";

const base = "/ko/templates/OHMT030-resort";

const slides = [
  {
    eyebrow: "컨셉",
    heading: "차분한 아름다움과\n깊은 고요함을 제공합니다",
    body: "모든 공간은 해안선과 자연스럽게 이어지도록 설계했습니다. 현지 석재와 목재, 자연광과 파도 소리가 어우러져 공간에 깊이를 더합니다.",
    image: "/templates/OHMT030-resort/gallery-1.png",
  },
  {
    eyebrow: "철학",
    heading: "세련된 디자인과\n바다의 조화로운 공존",
    body: "진정한 휴식은 화려함이 아닌 멈춤에서 시작됩니다. 조수 간만의 차를 견디며 시간과 함께 자연스럽게 깊이를 더해가는 소재를 골랐습니다.",
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
                더 알아보기 <ArrowRight size={15} />
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
