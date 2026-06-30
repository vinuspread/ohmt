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
        {/* Year display */}
        <div className="reveal mb-16 md:mb-24">
          <span className="font-michroma text-[clamp(72px,12vw,160px)] text-[var(--text)] leading-none opacity-[0.08] select-none">
            2022
          </span>
        </div>

        {/* Two-col text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div className="reveal">
            <h2 className="font-michroma text-[clamp(24px,3vw,40px)] text-[var(--text)] leading-[1.05] tracking-[-0.02em]">
              Born in a garage.<br />Built for everyone.
            </h2>
          </div>
          <div className="reveal space-y-5">
            <p className="font-inter text-[15px] text-[var(--text-muted)] leading-relaxed">
              In 2022, three engineers in Valencia decided to rethink what a city car could be. No legacy systems, no corporate mandates, no excuses.
            </p>
            <p className="font-inter text-[15px] text-[var(--text-muted)] leading-relaxed">
              The brief was radical: make an electric car compact enough to park anywhere, affordable enough for anyone, and interesting enough that you actually want to drive it.
            </p>
            <p className="font-inter text-[15px] text-[var(--text-muted)] leading-relaxed">
              Three years later, that car is NUBI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
