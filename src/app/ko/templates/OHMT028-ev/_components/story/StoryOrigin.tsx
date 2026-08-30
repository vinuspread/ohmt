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
              작은 차고에서 시작된 집념,<br />마침내 도심의 풍경을 바꾸다.
            </h2>
          </div>
          <div className="reveal space-y-5">
            <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
              2022년, 발렌시아의 작은 팀은 도시 이동 수단을 처음부터 다시 설계하기로 했습니다.
              기존 시스템과 관행을 그대로 따르지 않기로 한 결정이었습니다.
            </p>
            <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
              조건은 분명했습니다. 어디든 주차할 만큼 작고, 매일 탈 만큼 합리적일 것.
              그리고 굳이 타고 싶어질 만큼 매력적일 것.
            </p>
            <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed">
              3년이 지난 지금, 그 차가 NUBI입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
