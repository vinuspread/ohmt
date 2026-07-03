"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(labelRef.current, { opacity: 0, y: 16, duration: 0.7 })
      .from(headingRef.current, { opacity: 0, y: 32, duration: 0.9 }, "-=0.3")
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.4");
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] bg-[var(--bg)] overflow-hidden">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/templates/OHMT028-ev/hero-static.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-[var(--bg)]/20 to-transparent" />

      {/* Main content layer */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full h-full flex flex-col justify-end pb-16 z-10 pointer-events-none">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-12 pointer-events-auto">
          {/* Left text area */}
          <div className="w-full max-w-[560px] lg:max-w-[760px]">
            <span ref={labelRef} className="font-inter font-medium text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase block mb-4">
              Introducing NUBI, Urban Electric Vehicle
            </span>
            <h1 ref={headingRef} className="font-michroma text-[clamp(42px,11vw,56px)] leading-[1.08] tracking-[-0.02em] text-[var(--text)] mb-8 md:text-[clamp(60px,7vw,88px)] lg:text-[clamp(56px,6vw,88px)]">
              Small car,<br />big city fun.
            </h1>
            <div ref={ctaRef} className="flex flex-row items-center gap-3 sm:gap-4">
              <button className="inline-flex h-12 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-[var(--accent)] px-4 text-[12px] font-inter font-medium tracking-[0.01em] text-[var(--text-on-light)] transition-colors duration-300 hover:bg-[var(--accent-dark)] sm:h-auto sm:w-auto sm:flex-none sm:px-7 sm:py-3.5 sm:text-[13px] sm:tracking-[0.03em]">
                Reserve now
              </button>
              <button className="inline-flex h-12 flex-1 items-center justify-center whitespace-nowrap rounded-full border border-[var(--text)]/40 px-4 text-[12px] font-inter font-medium tracking-[0.01em] text-[var(--text)] transition-colors duration-300 hover:border-[var(--text)] sm:h-auto sm:w-auto sm:flex-none sm:px-7 sm:py-3.5 sm:text-[13px] sm:tracking-[0.03em]">
                Explore NUBI
              </button>
            </div>
          </div>

          {/* Right PiP video thumbnail */}
          <div className="flex items-center gap-4 cursor-pointer group flex-shrink-0">
            <div className="w-[160px] h-[90px] rounded-lg overflow-hidden border border-[var(--border)] relative transition-transform duration-300 group-hover:scale-105">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/templates/OHMT028-ev/video-thumb.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <span className="text-[12px] text-black ml-0.5">▶</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-inter text-[15px] font-semibold text-[var(--text)] leading-tight mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">Watch the reveal</p>
              <p className="font-inter text-[14px] text-[var(--text-muted)]">01:48</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right vertical line decoration */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none z-10 hidden md:block">
        <div className="w-[1px] h-[80px] bg-gradient-to-b from-transparent via-[var(--text-muted)] to-transparent" />
      </div>
    </section>
  );
}
