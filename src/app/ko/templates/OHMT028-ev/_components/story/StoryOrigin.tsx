"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function StoryOrigin() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll(".reveal") ?? [],
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.14,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section className="bg-[var(--bg)]">
      <div
        ref={ref}
        className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40"
      >
        <div className="reveal mb-16 md:mb-24">
          <span className="font-michroma text-[length:var(--text-display)] text-[var(--text)] leading-none opacity-[0.08] select-none">
            2022
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="reveal">
            <h2 className="font-michroma text-[length:var(--text-h3)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.02em]">
              작은 작업실에서 시작한 생각,<br />도시를 위한 전기차가 되기까지.</h2>
          </div>
          <div className="reveal space-y-5">
            <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
              2022년, 발렌시아의 작은 팀은 도심 이동에 꼭 필요한 것부터 다시 살펴보기 시작했습니다.
              <br className="hidden md:block" />{" "}
              기존 소형차의 기준을 그대로 따르지 않기로 했습니다.</p>
            <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
              기준은 분명했습니다. 주차가 쉬운 크기, 매일 사용할 수 있는 실용성,
              <br className="hidden md:block" />{" "}
              그리고 다시 타고 싶어지는 디자인과 주행감이 필요했습니다.</p>
            <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
              그 기준을 바탕으로 완성한 차가 NUBI입니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
