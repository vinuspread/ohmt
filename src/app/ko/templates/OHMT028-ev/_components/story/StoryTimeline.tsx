"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2022", title: "도심형 전기차의 시작",  body: "세 명의 엔지니어가 작은 차체와 실용성, 주행의 즐거움을 함께 담는 방법을 고민하기 시작했습니다." },
  { year: "2023", title: "첫 번째 NUBI", body: "12개월의 개발 끝에 첫 번째 주행 가능한 프로토타입을 완성했습니다." },
  { year: "2024", title: "디자인 확정",  body: "원형 헤드램프와 파노라마 루프, 일곱 가지 컬러를 적용해 NUBI의 디자인을 완성했습니다." },
  { year: "2025", title: "생산 시작",    body: "발렌시아 공장에서 생산이 시작됐습니다. 사전 예약 고객을 위한 첫 1,000대입니다." },
  { year: "2026", title: "첫 출고",      body: "사전 예약 순서에 따라 첫 차량을 순차적으로 인도합니다." },
];

export function StoryTimeline() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        }
      );
    });
  }, []);

  return (
    <section className="bg-[var(--bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <p className="font-inter text-xs tracking-[0.15em] text-[var(--accent)] uppercase mb-6">
          연혁
        </p>
        <h2 className="font-michroma text-[length:var(--text-h3)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.02em] mb-16 md:mb-20">
          NUBI의 개발 과정</h2>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12 border-t border-[var(--border)] py-8 md:py-10"
            >
              <span className="font-michroma text-[length:var(--text-lead)] text-[var(--accent)] leading-none pt-1">
                {m.year}
              </span>
              <div>
                <h3 className="font-michroma text-base text-[var(--text)] mb-3">
                  {m.title}
                </h3>
                <p className="font-inter text-sm text-[var(--text-muted)] leading-relaxed max-w-[560px]">
                  {m.body}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </div>
      </div>
    </section>
  );
}
