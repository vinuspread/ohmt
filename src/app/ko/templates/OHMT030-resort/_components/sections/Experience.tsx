"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { IconButton } from "../ui/IconButton";
import { SectionEyebrow, SectionHeading } from "../ui/Typography";

const base = "/ko/templates/OHMT030-resort";

const slides = [
  {
    image: "/templates/OHMT030-resort/gallery-4.jpg",
    label: "명상과 웰니스",
    location: "절벽 위 파빌리온",
    time: "오전 7시 – 오전 9시",
  },
  {
    image: "/templates/OHMT030-resort/gallery-5.jpg",
    label: "해안 트레킹",
    location: "히든 코브 산책로",
    time: "오전 9시 – 오후 12시",
  },
  {
    image: "/templates/OHMT030-resort/gallery-6.jpg",
    label: "선셋 세일링 투어",
    location: "전용 선착장",
    time: "오후 5시 – 오후 7시 30분",
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  return (
    <section className="py-16 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Left: Text */}
        <div className="flex flex-col justify-between">
          <div>
            <SectionEyebrow>
              액티비티</SectionEyebrow>
            <SectionHeading size="large" className="mb-12 whitespace-pre-line">
              {`머무는 시간이
여행의 기억이 됩니다`}
            </SectionHeading>
            <Link href={`${base}/#`}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 text-white text-base hover:bg-white/20 transition-all focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
              전체 프로그램 보기<ArrowRight size={15} />
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-16">
            <IconButton onClick={prev} aria-label="이전">
              <ArrowLeft size={17} />
            </IconButton>
            <span className="text-sm text-white/50 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <IconButton onClick={next} tone="solid" aria-label="다음">
              <ArrowRight size={17} />
            </IconButton>
          </div>
        </div>

        {/* Right: Slider */}
        <div className="relative overflow-hidden rounded-2xl">
          {slides.map((s, i) => (
            <div key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
              <img src={s.image} alt={s.label}
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-9 left-9 right-9">
                <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-2">{s.location} · {s.time}</p>
                <p className="text-2xl font-semibold text-white leading-tight">{s.label}</p>
              </div>
            </div>
          ))}
          {/* Static sizing div */}
          <div className="relative w-full aspect-[4/3] invisible" />
        </div>

      </div>
    </section>
  );
}
