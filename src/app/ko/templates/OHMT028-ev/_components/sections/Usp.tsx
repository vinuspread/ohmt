"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const usps = [
  { label: "280km 실주행", sub: "실제 도심 환경 기준으로, 어디든 충분히 닿습니다", image: "usp-range.jpg" },
  { label: "스마트 주차", sub: "좁은 골목도 복잡한 주차장도, 알아서 해결해 드립니다", image: "usp-acceleration.jpg" },
  { label: "30분 급속 충전", sub: "커피 한 잔 마시는 사이, 80%까지 채워집니다", image: "usp-charging.jpg" },
  { label: "7가지 컬러", sub: "오늘의 기분이 곧 나의 색깔이 됩니다", image: "usp-power.jpg" },
  { label: "무선 업데이트", sub: "잠든 사이 새로운 기능이 도착해 있습니다", image: "usp-software.jpg" },
  { label: "파노라마 루프", sub: "하늘까지 열린 공간에서 도시를 내려다보세요", image: "usp-suspension.jpg" },
];

export function Usp() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    usps.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: itemRefs.current[i],
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });
  }, []);

  return (
    <section className="relative w-full bg-[var(--light-bg)] min-h-screen overflow-hidden">
      <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none z-0">
        <div className="w-full md:w-1/2 bg-[var(--light-bg)]" />
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('/templates/OHMT028-ev/${usps[active].image}')` }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 min-h-screen grid grid-cols-1 md:grid-cols-2 pointer-events-none">
        <div className="w-full flex flex-col justify-center py-20 md:py-32 pointer-events-auto">
          <div className="max-w-[540px] w-full">
          {usps.map((usp, i) => (
            <div
              key={usp.label}
              ref={(el) => { itemRefs.current[i] = el; }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`py-6 md:py-8 border-b border-[var(--border-light)] cursor-pointer transition-all duration-300 ${
                active === i ? "opacity-100" : "opacity-25 hover:opacity-60"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`mt-2 w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                  active === i ? "bg-[var(--accent)] scale-110" : "bg-transparent scale-50"
                }`} />
                <div>
                  <p className="font-michroma text-[clamp(17px,2vw,24px)] text-[var(--text-on-light)] leading-tight">
                    {usp.label}
                  </p>
                  <p className="font-inter text-[15px] text-[var(--text-muted-light)] mt-2">
                    {usp.sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className="w-full md:block hidden" />
      </div>
    </section>
  );
}
