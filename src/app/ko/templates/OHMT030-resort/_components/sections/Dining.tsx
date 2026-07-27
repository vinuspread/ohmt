"use client";

import { useState } from "react";
import { ArrowRight, Star } from "@phosphor-icons/react";
import { BodyText, SectionHeading } from "../ui/Typography";
import { TabButton } from "../ui/TabButton";

const tabs = [
  {
    label: "레스토랑",
    heading: "산토리니의 계절을 담은 요리",
    body: "현지 해산물과 섬에서 기른 채소를 중심으로 계절 메뉴를 선보입니다.\n넓은 창과 테라스에서는 에게해를 바라보며 식사할 수 있습니다.",
    image: "/templates/OHMT030-resort/dining.png",
  },
  {
    label: "바",
    heading: "해 질 무렵 시작되는 바",
    body: "현지 허브와 과일을 사용한 칵테일을 선보입니다.\n돌과 목재로 완성한 차분한 공간에서 파도 소리와 저녁 바다를 즐겨보세요.",
    image: "/templates/OHMT030-resort/gallery-4.jpg",
  },
  {
    label: "테라스",
    heading: "바다를 향해 열린 테라스",
    body: "일몰과 밤바다를 바라보며 식사할 수 있는 야외 테라스입니다.\n소규모 모임과 프라이빗 디너도 진행합니다.",
    image: "/templates/OHMT030-resort/gallery-5.jpg",
  },
  {
    label: "비치 카페",
    heading: "바닷바람과 함께하는 아침",
    body: "가벼운 아침 식사와 갓 짠 주스, 커피를 준비합니다.\n바닷바람과 아침 햇살을 느끼며 하루를 천천히 시작해보세요.",
    image: "/templates/OHMT030-resort/gallery-6.jpg",
  },
];

export function Dining() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-16 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionHeading>
              에게해의 계절을 맛보다</SectionHeading>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <Star size={16} color="var(--accent)" weight="fill" />
            <span className="text-white text-sm font-medium">미쉐린 스타 2025</span>
          </div>
        </div>

        {/* Tab row */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {tabs.map((t, i) => (
            <TabButton key={t.label} active={i === active} onClick={() => setActive(i)}>
              {t.label}
            </TabButton>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 md:rounded-3xl md:min-h-[440px]">

          {/* Image */}
          <div className="relative aspect-square overflow-hidden md:aspect-auto md:min-h-[440px]">
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
          <div className="flex flex-col justify-center bg-[var(--bg-dark)] px-6 py-16 md:px-12 md:py-16">
            <h3 className="text-[length:var(--text-h3)] font-semibold text-white leading-[var(--leading-heading)] tracking-[-0.02em] mb-6">
              {tab.heading}
            </h3>
            <BodyText className="mb-12 text-white/65">
              {tab.body}
            </BodyText>
            <a href="#"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--accent)] px-6 py-3 text-[var(--text-dark)] text-sm font-medium hover:opacity-85 transition-opacity">
              <span>레스토랑 예약</span>
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
