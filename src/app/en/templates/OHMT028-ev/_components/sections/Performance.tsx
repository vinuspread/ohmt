"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitHeading } from "../ui/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 280, unit: "km", label: "City Range" },
  { value: 30, unit: "min", label: "Fast Charge 0→80%" },
  { value: 7, unit: "colors", label: "Available Colors" },
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
            text="Built for the city. Made to love."
            className="font-michroma text-[clamp(26px,3vw,44px)] text-[var(--text)] leading-[1.05] tracking-[-0.02em]"
          />
          <p className="font-inter text-[15px] text-[var(--text-muted)] mt-4 max-w-[500px]">
            NUBI fits your life — compact enough to park anywhere, fun enough to make you smile every day.
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
                <span className="stat-value font-michroma text-[clamp(42px,8vw,64px)] text-[var(--text)] leading-none">
                  0
                </span>
                <span className="font-inter text-[16px] font-semibold text-[var(--accent)] md:text-[18px]">
                  {stat.unit}
                </span>
              </div>
              <p className="mt-3 font-inter text-[13px] tracking-[0.03em] text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
