"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2022", title: "첫 번째 질문",  body: "세 명의 엔지니어, 하나의 화이트보드, 단 하나의 질문. 도시형 차가 진심으로 사랑받는 존재가 될 수 있을까?" },
  { year: "2023", title: "첫 번째 NUBI", body: "12개월의 밤샘 작업 끝에 첫 번째 NUBI가 작업장을 나섰습니다. 완벽하지는 않았지만, 달렸습니다." },
  { year: "2024", title: "NUBI의 얼굴",  body: "둥근 헤드라이트, 파노라마 루프, 일곱 가지 컬러. NUBI만의 표정이 비로소 완성되었습니다." },
  { year: "2025", title: "생산 시작",    body: "발렌시아 공장에서 생산이 시작됐습니다. 사전 예약 고객을 위한 첫 1,000대입니다." },
  { year: "2026", title: "첫 출고",      body: "NUBI가 처음으로 도심 거리에 모습을 드러냅니다. 얼리 리저버 전원 대상으로 1분기 순차 출고됩니다." },
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
        <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-6">
          연혁
        </p>
        <h2 className="font-michroma text-[clamp(28px,3vw,44px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em] mb-16 md:mb-20">
          이렇게 만들어졌습니다.
        </h2>
        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[160px_1fr] gap-6 md:gap-12 border-t border-[var(--border)] py-8 md:py-10"
            >
              <span className="font-michroma text-[clamp(22px,2.5vw,32px)] text-[var(--accent)] leading-none pt-1">
                {m.year}
              </span>
              <div>
                <h3 className="font-michroma text-[16px] text-[var(--text)] mb-3">
                  {m.title}
                </h3>
                <p className="font-inter text-[14px] text-[var(--text-muted)] leading-relaxed max-w-[560px]">
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
