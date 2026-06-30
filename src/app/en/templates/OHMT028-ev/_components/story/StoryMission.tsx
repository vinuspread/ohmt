"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: "Urban first",
    body: "We design for the street you live on, not the highway you rarely use. Every decision starts with the city.",
  },
  {
    title: "Joy of driving",
    body: "Zero emissions doesn't mean zero fun. NUBI is responsive, agile, and genuinely enjoyable every single day.",
  },
  {
    title: "Accessible EV",
    body: "Electric shouldn't be a luxury. NUBI starts under $25K, and we refused to cut corners on quality to get there.",
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
        <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-6">
          What we stand for
        </p>
        <h2 className="font-michroma text-[clamp(28px,3vw,44px)] text-[var(--text-on-light)] leading-[1.0] tracking-[-0.02em] mb-16 md:mb-20">
          Three principles.<br />No compromise.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--border-light)]">
          {values.map((v) => (
            <div key={v.title} className="value-item py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <div className="w-6 h-[2px] bg-[var(--accent)] mb-6" />
              <h3 className="font-michroma text-[17px] text-[var(--text-on-light)] mb-4 leading-snug">
                {v.title}
              </h3>
              <p className="font-inter text-[14px] text-[var(--text-muted-light)] leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
