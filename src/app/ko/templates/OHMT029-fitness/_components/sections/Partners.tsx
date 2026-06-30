"use client";

const stats = [
  { value: "12", label: "호텔 & 리조트 파트너" },
  { value: "3,200+", label: "연간 회원 수" },
  { value: "98%", label: "파트너 만족도" },
];

export function Partners() {
  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <p className="text-[11px] font-medium text-[var(--text-muted)] tracking-[0.15em] uppercase mb-2 text-center">파트너</p>
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-4 text-center">
          최고의 호스피탈리티 파트너가 신뢰하는
        </h2>
        <p className="text-[14px] text-[var(--text-muted)] text-center max-w-[460px] mx-auto mb-16 leading-relaxed">
          프리미엄 호텔 및 리조트와 협력하여&nbsp;<span className="whitespace-nowrap">월드클래스</span>&nbsp;웰니스 경험을 제공합니다.
        </p>

        <div className="overflow-hidden mb-20">
          <div className="flex gap-16 items-center marquee-track">
            {[
              "Grand Hyatt Seoul", "Conrad Seoul", "Lotte Hotel", "Josun Palace",
              "Park Hyatt", "Signiel", "JW Marriott", "Four Seasons",
              "Grand Hyatt Seoul", "Conrad Seoul", "Lotte Hotel", "Josun Palace",
              "Park Hyatt", "Signiel", "JW Marriott", "Four Seasons",
            ].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-2 border border-[var(--border)] rounded text-[12px] text-[var(--text-muted)] font-medium tracking-wide whitespace-nowrap"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-['Montserrat'] font-bold text-[clamp(40px,5vw,64px)] text-[var(--accent)] leading-none tracking-tight">
                {s.value}
              </p>
              <p className="text-[14px] text-[var(--text-muted)] mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
