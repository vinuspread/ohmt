"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function StoryHero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.children ?? [],
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.15 }
    );
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[var(--bg)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/OHMT028-ev/story-pg-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/45 to-[var(--bg)]/5" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 min-h-[85vh] flex items-end pb-16 md:pb-28">
        <div ref={ref}>
          <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-michroma text-[clamp(44px,6vw,88px)] text-[var(--text)] leading-[0.93] tracking-[-0.03em] mb-6">
            Small car.<br />Big idea.
          </h1>
          <p className="font-inter text-[15px] text-[var(--text-muted)] max-w-[400px] leading-relaxed">
            NUBI started with a simple question: why should small mean boring?
          </p>
        </div>
      </div>
    </section>
  );
}
