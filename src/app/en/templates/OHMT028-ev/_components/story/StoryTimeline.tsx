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
        <p className="font-inter text-xs tracking-[0.15em] text-[var(--accent)] uppercase mb-6">
          The journey
        </p>
        <h2 className="font-michroma text-[length:var(--text-h3)] text-[var(--text)] leading-[var(--leading-display)] tracking-[-0.02em] mb-16 md:mb-20">
          How we got here.
        </h2>

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
