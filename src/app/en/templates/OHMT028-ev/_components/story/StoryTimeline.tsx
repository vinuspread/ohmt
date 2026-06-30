"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2022", title: "The question",       body: "Three engineers. One whiteboard. One question: what if a city car could be something you actually love?" },
  { year: "2023", title: "First prototype",    body: "12 months of late nights. The first NUBI rolls out of the workshop — rough, but it drives." },
  { year: "2024", title: "The look is locked", body: "Round headlights. Panoramic roof. Seven colors. The NUBI identity is set." },
  { year: "2025", title: "Production begins",  body: "Our factory in Valencia starts building the first 1,000 units for early reservation holders." },
  { year: "2026", title: "On the streets",     body: "NUBI reaches its first drivers. Q1 deliveries begin for all who reserved early." },
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
          The journey
        </p>
        <h2 className="font-michroma text-[clamp(28px,3vw,44px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em] mb-16 md:mb-20">
          How we got here.
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
