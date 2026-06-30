"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function SpecsHero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.children ?? [],
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.15 }
    );
  }, []);

  return (
    <section className="relative min-h-[70vh] overflow-hidden flex items-end bg-[var(--bg)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/OHMT028-ev/specs-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-[var(--bg)]/10" />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div ref={ref}>
          <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-4">
            Technical Specifications
          </p>
          <h1 className="font-michroma text-[clamp(36px,4.5vw,64px)] text-[var(--text)] leading-[0.93] tracking-[-0.03em] mb-4">
            Built to spec.<br />Designed to last.
          </h1>
          <p className="font-inter text-[15px] text-[var(--text-muted)] max-w-[440px] leading-relaxed">
            Every number has a story. Here are all of them.
          </p>
        </div>
      </div>
    </section>
  );
}
