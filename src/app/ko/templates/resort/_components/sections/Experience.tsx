"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const base = "/ko/templates/resort";

const slides = [
  {
    image: "/templates/resort/gallery-4.jpg",
    label: "명상 & 웰니스",
    location: "절벽 정상 파빌리온",
    time: "오전 7시 – 오전 9시",
  },
  {
    image: "/templates/resort/gallery-5.jpg",
    label: "해안 탐험",
    location: "히든 코브 트레일",
    time: "오전 9시 – 오후 12시",
  },
  {
    image: "/templates/resort/gallery-6.jpg",
    label: "선셋 세일링",
    location: "프라이빗 마리나",
    time: "오후 5시 – 오후 7시 30분",
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  return (
    <section className="py-[130px]">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 max-w-[1440px] mx-auto px-10">

        {/* Left: Text */}
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-[13px] font-medium text-[var(--accent)] tracking-widest uppercase mb-6 block">
              경험
            </span>
            <h2 className="text-[clamp(48px,5.5vw,80px)] font-semibold text-white leading-[0.95] tracking-[-0.04em] mb-10 whitespace-pre-line">
              {`시간이 머무는 곳\n그곳이 기억이\n되는 순간`}
            </h2>
            <Link href={`${base}/#`}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-6 py-3 text-white text-[15px] hover:bg-white/20 transition-all">
              모두 보기 <ArrowRight size={15} />
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-16">
            <button onClick={prev}
              className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ArrowLeft size={17} />
            </button>
            <span className="text-[13px] text-white/50 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <button onClick={next}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[var(--bg-dark)] hover:opacity-85 transition-opacity">
              <ArrowRight size={17} />
            </button>
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
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[13px] font-medium text-white/60 uppercase tracking-widest mb-2">{s.location} · {s.time}</p>
                <p className="text-[22px] font-semibold text-white leading-tight">{s.label}</p>
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
