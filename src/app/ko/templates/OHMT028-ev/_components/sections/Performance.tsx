"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitHeading } from "../ui/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 280, unit: "km", label: "도시 주행거리" },
  { value: 30, unit: "분", label: "급속 충전 0→80%" },
  { value: 7, unit: "색상", label: "선택 가능 컬러" },
];

export function Performance() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    stats.forEach((stat, i) => {
      const el = statRefs.current[i]?.querySelector(".stat-value") as HTMLElement | null;
      if (!el) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: stat.value,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statRefs.current[i],
          start: "top 75%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = stat.value % 1 === 0
            ? Math.round(obj.val).toString()
            : obj.val.toFixed(1);
        },
      });
    });
  }, []);

  useGSAP(() => {
    if (!pathRef.current) return;
    gsap.fromTo(
      pathRef.current,
      { strokeDashoffset: 4000 },
      {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--bg)] py-32 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <path
          ref={pathRef}
          className="route-path"
          d="M0,200 C200,100 400,300 600,200 S900,100 1200,200 S1500,300 1800,200 S2200,100 2600,200 S3000,300 3500,200"
          stroke="var(--accent)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4000"
          strokeDashoffset="4000"
        />
      </svg>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="mb-16">
          <SplitHeading
            text="도시에서 태어나, 도시를 사랑하게 됩니다"
            className="font-michroma text-[length:var(--text-h3)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.02em]"
          />
          <p className="font-inter text-sm text-[var(--text-muted)] mt-4 max-w-[500px]">
            좁은 골목도, 까다로운 주차도 NUBI에겐 일상입니다.<br />
            도시 어디든 자연스럽게 어울리고, 한 번 타면 매일 기다려지는 차가 됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-[var(--border)] border-y border-[var(--border)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => { statRefs.current[i] = el; }}
              className="py-7 md:px-8 md:py-8"
            >
              <div className="flex items-baseline gap-2">
                <span className="stat-value font-michroma text-[length:var(--text-h1)] text-[var(--text)] leading-none">
                  0
                </span>
                <span className="font-inter text-base font-semibold text-[var(--accent)] md:text-lg">
                  {stat.unit}
                </span>
              </div>
              <p className="mt-3 font-inter text-xs tracking-[0.03em] text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
