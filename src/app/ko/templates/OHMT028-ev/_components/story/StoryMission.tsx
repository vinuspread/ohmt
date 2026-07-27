"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "도시의 일상부터",
    body: "좁은 골목과 짧은 이동, 복잡한 주차 환경을 먼저 살펴보고 차의 크기와 기능을 결정했습니다.",
  },
  {
    title: "달리는 즐거움",
    body: "전기차의 조용함과 빠른 반응을 살려 도심에서도 가볍고 민첩한 주행감을 제공합니다.",
  },
  {
    title: "부담을 낮춘 전기차",
    body: "필요한 기능과 개성을 유지하면서도 2,890만 원부터 시작하는 가격으로 접근성을 높였습니다.",
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
        <p className="font-inter text-xs tracking-[0.15em] text-[var(--accent)] uppercase mb-6">
          NUBI의 기준</p>
        <h2 className="font-michroma text-[length:var(--text-h3)] text-[var(--text-on-light)] leading-[var(--leading-heading)] tracking-[-0.02em] mb-16 md:mb-20">
          NUBI를 설계할 때 지킨<br />세 가지 기준.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--border-light)]">
          {values.map((v) => (
            <div key={v.title} className="value-item py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="w-6 h-[2px] bg-[var(--accent)] mb-6" />
              <h3 className="font-michroma text-base text-[var(--text-on-light)] mb-4 leading-[var(--leading-heading)]">
                {v.title}
              </h3>
              <p className="font-inter text-sm text-[var(--text-muted-light)] leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
