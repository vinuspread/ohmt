"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "도시가 먼저",
    body: "고속도로보다 골목길을 먼저 생각합니다. NUBI의 모든 결정은 당신이 실제로 살고 있는 도시의 거리에서 출발합니다.",
  },
  {
    title: "달리는 즐거움",
    body: "제로 에미션이 드라이빙의 즐거움을 앗아가지는 않습니다. NUBI는 민첩하고 반응이 빠르며, 매일 타도 질리지 않습니다.",
  },
  {
    title: "모두를 위한 EV",
    body: "전기차가 특권층의 전유물일 이유는 없습니다. NUBI는 개성과 품질을 지키면서도 2,890만 원부터 시작합니다.",
  },
];

export function StoryMission() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll(".value-item") ?? [],
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 65%" },
      }
    );
  }, []);

  return (
    <section ref={ref} className="bg-[var(--light-bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-6">
          우리가 믿는 것
        </p>
        <h2 className="font-michroma text-[clamp(28px,3vw,44px)] text-[var(--text-on-light)] leading-[1.0] tracking-[-0.02em] mb-16 md:mb-20">
          세 가지 원칙.<br />타협은 없습니다.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--border-light)]">
          {values.map((v) => (
            <div key={v.title} className="value-item py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="w-6 h-[2px] bg-[var(--accent)] mb-6" />
              <h3 className="font-michroma text-[17px] text-[var(--text-on-light)] mb-4 leading-snug">
                {v.title}
              </h3>
              <p className="font-inter text-[14px] text-[var(--text-muted-light)] leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
