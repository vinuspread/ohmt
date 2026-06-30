"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { BRAND } from "../constants";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute will-change-transform hero-bg-image"
        style={{
          backgroundImage: "url('/templates/OHMT022-yoga/hero-bg.jpg')",
          backgroundSize: "cover",
          inset: "-10% 0 0 0",
          height: "120%",
        }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute top-[76px] left-0 right-0 h-[1px] bg-white/20 z-10" />

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/25">
        <div className="flex items-end justify-between px-8 md:px-14 py-10 gap-8">
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase text-white/40 mb-5 font-normal"
               style={{ fontFamily: "var(--font-body)" }}>
              {BRAND.tagline}
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-normal text-white leading-[1.05] tracking-[-0.03em]"
                style={{ fontFamily: "var(--font-heading)" }}>
              Find stillness in
              <br />
              every movement.
            </h1>
          </div>

          <div className="hidden md:flex flex-col items-end gap-4 flex-shrink-0 pb-1">
            <Link href="/en/templates/OHMT022-yoga/classes"
              className="text-[12px] tracking-[0.2em] uppercase text-white hover:text-white/70 transition-colors border-b border-white/40 pb-1 font-medium whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)" }}>
              Explore Classes
            </Link>
            <Link href="/en/templates/OHMT022-yoga/schedule"
              className="text-[12px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors font-medium whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)" }}>
              View Schedule
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
