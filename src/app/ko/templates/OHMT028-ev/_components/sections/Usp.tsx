"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const usps = [
  {
    label: "280km 도심 주행",
    sub: "매일의 이동에 충분한 도시형 주행거리",
    detail: "가벼운 배터리 설계로 민첩한 움직임을 유지하면서, 출퇴근과 주말 이동까지 여유 있게 대응합니다.",
    image: "usp-range.jpg",
  },
  {
    label: "스마트 주차 보조",
    sub: "좁은 골목과 복잡한 주차장에서도 편안하게",
    detail: "저속 조향 보조와 센서 기반 안내로, 협소한 도심 주차 공간에서도 부담을 줄여줍니다.",
    image: "usp-acceleration.jpg",
  },
  {
    label: "30분 급속 충전",
    sub: "커피 한 잔 사이 80%까지 충전",
    detail: "짧은 휴식 시간에도 하루 이동에 필요한 전력을 빠르게 채워, 충전 대기 시간을 줄입니다.",
    image: "usp-charging.jpg",
  },
  {
    label: "7가지 컬러",
    sub: "오늘의 기분과 나의 취향을 담는 색",
    detail: "선명한 옐로우부터 차분한 블루까지, 작은 차체가 거리에서 또렷하게 보이도록 조율했습니다.",
    image: "usp-power.jpg",
  },
  {
    label: "무선 업데이트",
    sub: "잠든 사이 새로워지는 기능",
    detail: "서비스센터 방문 없이 인터페이스 개선, 주행 보조, 배터리 최적화 업데이트를 받을 수 있습니다.",
    image: "usp-software.jpg",
  },
  {
    label: "파노라마 루프",
    sub: "하늘까지 열린 듯한 밝은 실내",
    detail: "전면 글라스 루프가 콤팩트한 실내를 한층 넓게 느껴지게 하고, 도시 풍경을 드라이브 안으로 들입니다.",
    image: "usp-suspension.jpg",
  },
];

export function Usp() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const total = usps.length;

      usps.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `${(i / total) * 100}% top`,
          end: `${((i + 1) / total) * 100}% top`,
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[var(--light-bg)] lg:h-[600vh]">
      <div className="relative lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:flex">
          <div className="w-1/2 bg-[var(--light-bg)]" />
          <div className="relative w-1/2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/templates/OHMT028-ev/${usps[active].image}')` }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 px-5 py-16 sm:px-8 md:px-10 lg:h-full lg:grid-cols-2 lg:px-20 lg:py-0">
          <div className="flex w-full flex-col justify-center">
            <div className="w-full max-w-[580px]">
              {usps.map((usp, i) => {
                const isActive = active === i;

                return (
                  <div
                    key={usp.label}
                    className={`border-b border-[var(--border-light)] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-55 lg:opacity-25 lg:hover:opacity-60"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`usp-panel-${i}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="group flex w-full items-start gap-4 py-5 text-left md:py-6 lg:py-6"
                    >
                      <span
                        className={`mt-[0.55rem] h-2 w-2 flex-shrink-0 rounded-full transition-all duration-300 ${
                          isActive ? "scale-100 bg-[var(--accent)]" : "scale-75 bg-[var(--border-light)]"
                        }`}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block font-michroma text-[length:var(--text-lead)] leading-tight text-[var(--text-on-light)] md:text-[length:var(--text-lead)]">
                          {usp.label}
                        </span>
                        <span className="mt-2 block font-inter text-sm leading-relaxed text-[var(--text-muted-light)] md:text-sm">
                          {usp.sub}
                        </span>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`usp-panel-${i}`}
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-6 md:pl-7 lg:pb-7">
                            <p className="max-w-[440px] font-inter text-sm leading-7 text-[var(--text-on-light)]/72">
                              {usp.detail}
                            </p>
                            <div
                              className="mt-5 aspect-[16/10] w-full overflow-hidden bg-cover bg-center lg:hidden"
                              style={{ backgroundImage: `url('/templates/OHMT028-ev/${usp.image}')` }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 gap-1.5 lg:flex">
          {usps.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[var(--accent)]" : "w-2 bg-[var(--border-light)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
