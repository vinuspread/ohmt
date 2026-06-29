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
          <span className="font-michroma text-[clamp(72px,12vw,160px)] text-[var(--text)] leading-none opacity-[0.08] select-none">
            2022
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="reveal">
            <h2 className="font-michroma text-[clamp(24px,3vw,40px)] text-[var(--text)] leading-[1.05] tracking-[-0.02em]">
              차고에서 시작해,<br />도시를 바꾼다.
            </h2>
          </div>
          <div className="reveal space-y-5">
            <p className="font-inter text-[15px] text-[var(--text-muted)] leading-relaxed">
              2022년, 발렌시아의 작은 팀이 결심했습니다. 기존 시스템도, 관행도, 타협도 없이 도시 이동 수단을 처음부터 다시 설계하기로.
            </p>
            <p className="font-inter text-[15px] text-[var(--text-muted)] leading-relaxed">
              조건은 단 하나였습니다. 어디든 주차할 수 있을 만큼 작고, 누구나 탈 수 있을 만큼 합리적이며, 굳이 타고 싶어질 만큼 매력적인 차.
            </p>
            <p className="font-inter text-[15px] text-[var(--text-muted)] leading-relaxed">
              3년이 지난 지금, 그 차가 NUBI입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
