"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/templates/OHMT029-fitness/hero.jpg",
    headline: "더 나은 하루를 위한<br />프리미엄 웰니스.",
  },
  {
    image: "/templates/OHMT029-fitness/about-hero.jpg",
    headline: "당신의 몸에 맞춘<br />1:1 프로그램.",
  },
  {
    image: "/templates/OHMT029-fitness/program-hero.jpg",
    headline: "스튜디오 밖에서도<br />균형을 이어갑니다.",
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
          className="font-['Montserrat'] font-bold text-[length:var(--text-h1)] text-white leading-[var(--leading-heading)] tracking-tight max-w-[800px] animate-fade-in"
        >
          <span dangerouslySetInnerHTML={{ __html: slides[current].headline }} />
        </h1>
        <p className="text-sm text-white/70 mt-6 max-w-[440px] leading-relaxed">
          신체 분석과 코칭을 바탕으로 일상에 맞는 운동 루틴을 설계합니다.
        </p>
        <div className="flex items-center gap-4 mt-10">
          <a
            href="/ko/templates/OHMT029-fitness/programs"
            className="bg-white text-[var(--accent)] text-xs font-semibold px-7 py-3.5 rounded-lg hover:bg-white/90 transition-colors tracking-wide focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            프로그램 보기 →
          </a>
          <a
            href="/ko/templates/OHMT029-fitness/about#contact"
            className="border border-white/30 text-white text-xs font-semibold px-7 py-3.5 rounded-lg hover:border-white/60 transition-colors tracking-wide focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
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
            aria-label={`슬라이드 ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
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
