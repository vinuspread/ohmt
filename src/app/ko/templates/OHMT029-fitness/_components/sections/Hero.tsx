"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/templates/OHMT029-fitness/hero.jpg",
    headline: "더 나은 삶을 위한,<br />프리미엄 웰니스.",
  },
  {
    image: "/templates/OHMT029-fitness/about-hero.jpg",
    headline: "오직 당신만을 위해 설계된<br />맞춤형 프로그램.",
  },
  {
    image: "/templates/OHMT029-fitness/program-hero.jpg",
    headline: "스튜디오의 한계를 넘어<br />일상의 균형을 찾다.",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 h-full flex flex-col items-center justify-center text-center">
        <h1
          key={current}
          className="font-['Montserrat'] font-bold text-[clamp(40px,6vw,80px)] text-white leading-[1.1] tracking-tight max-w-[800px] animate-fade-in"
        >
          <span dangerouslySetInnerHTML={{ __html: slides[current].headline }} />
        </h1>
        <p className="text-[15px] text-white/70 mt-6 max-w-[440px] leading-relaxed">
          더 나은 삶을 기대하는 당신을 위한 프리미엄 웰니스.
        </p>
        <div className="flex items-center gap-4 mt-10">
          <a
            href="/ko/templates/OHMT029-fitness/programs"
            className="bg-white text-[var(--accent)] text-[13px] font-semibold px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors tracking-wide"
          >
            프로그램 살펴보기 →
          </a>
          <a
            href="/ko/templates/OHMT029-fitness/about#contact"
            className="border border-white/30 text-white text-[13px] font-semibold px-7 py-3.5 rounded-lg hover:border-white/60 transition-colors tracking-wide"
          >
            문의하기
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </section>
  );
}
