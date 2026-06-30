"use client";

import { useState } from "react";
import { Star } from "@phosphor-icons/react";

const tabs = [
  {
    label: "레스토랑",
    heading: "해안을 담은 다이닝",
    body: "미쉐린 스타를 획득한 레스토랑으로, 고대 건축 양식과 해안의 자연광이 조화를 이룹니다. 탁 트인 통창 너머로 바다가 보이며, 요리 하나하나에 주변 풍경을 담았습니다.",
    image: "/templates/OHMT030-resort/dining.png",
  },
  {
    label: "바",
    heading: "밤이 되면 바가 해변으로 이어집니다",
    body: "시그니처 칵테일과 함께 파도 소리를 즐겨보세요. 돌과 목재로 이루어져 바다의 저녁을 차분하게 보낼 수 있는 아늑한 공간입니다.",
    image: "/templates/OHMT030-resort/gallery-4.jpg",
  },
  {
    label: "테라스",
    heading: "하늘과 지평선이 열린 공간",
    body: "쏟아지는 별빛 아래에서 바다를 마주하며 식사할 수 있습니다. 일몰을 감상하며 저녁 식사를 하거나 프라이빗한 파티를 열기에 가장 자연적인 공간입니다.",
    image: "/templates/OHMT030-resort/gallery-5.jpg",
  },
  {
    label: "비치 카페",
    heading: "수면 위로 떠오르는 아침 햇살",
    body: "맨발로 즐기는 가벼운 아침 식사, 착즙 주스, 그리고 여유로운 아침. 비치 카페는 바닷바람과 따뜻한 첫 햇살 속에서 기분 좋은 하루를 시작하는 곳입니다.",
    image: "/templates/OHMT030-resort/gallery-6.jpg",
  },
];

export function Dining() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-[130px]">
      <div className="max-w-[1440px] mx-auto px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[13px] font-medium text-[var(--accent)] tracking-widest uppercase mb-3 block">
              다이닝
            </span>
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-semibold text-white leading-[1.1] tracking-[-0.04em]">
              해안의 맛을 느끼다
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <Star size={16} color="#FFC392" weight="fill" />
            <span className="text-white text-[14px] font-medium">미쉐린 스타 2025</span>
          </div>
        </div>

        {/* Tab row */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {tabs.map((t, i) => (
            <button key={t.label} onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-[14px] transition-all duration-200 ${
                i === active
                  ? "bg-[var(--bg-dark)] text-white"
                  : "border border-white/40 text-white/70 hover:text-white hover:border-white/70"
              }`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden min-h-[440px]">

          {/* Image */}
          <div className="relative overflow-hidden">
            {tabs.map((t, i) => (
              <img key={i} src={t.image} alt={t.label}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center bg-[var(--bg-dark)] px-12 py-14">
            <h3 className="text-[clamp(24px,2.4vw,36px)] font-semibold text-white leading-[1.2] tracking-[-0.04em] mb-5">
              {tab.heading}
            </h3>
            <p className="text-[15px] text-white/65 leading-relaxed mb-10">
              {tab.body}
            </p>
            <a href="#"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--accent)] px-6 py-3 text-[var(--text-dark)] text-[14px] font-medium hover:opacity-85 transition-opacity">
              테이블 예약 &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
