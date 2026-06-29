const milestones = [
  { year: "2018", title: "창립", desc: "강남에 플래그십 스튜디오를 열고 부티크 웰니스의 비전을 제시하다." },
  { year: "2019", title: "첫 위탁 운영", desc: "첫 호텔 파트너십 체결\u00A0— 종로 5성급 호텔 웰니스 시설 운영 시작." },
  { year: "2021", title: "5개 지점", desc: "서울 전역 5개 파트너 지점으로 확장, 럭셔리 레지던스 및 기업 캠퍼스 포함." },
  { year: "2023", title: "Vitalis Academy", desc: "사내 트레이닝 아카데미를 설립하여 트레이너의 Vitalis 고유 방법론 인증." },
  { year: "2026", title: "12개 파트너", desc: "12개 프리미어 호스피탈리티 파트너, 연 3,200+ 회원, 98% 만족도." },
];

export function StudioTimeline() {
  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          스튜디오 연혁
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-[var(--border)]" />
          <div className="hidden md:grid grid-cols-5 gap-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative text-center">
                <div className="w-3 h-3 bg-[var(--accent)] rounded-full mx-auto mb-8 relative z-10" />
                <p className="font-['Montserrat'] font-bold text-[32px] text-[var(--accent)] leading-none mb-2">{m.year}</p>
                <p className="font-['Montserrat'] font-semibold text-[14px] text-[var(--text)] mb-2">{m.title}</p>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--border)]">
            {milestones.map((m) => (
              <div key={m.year} className="relative pb-10 last:pb-0">
                <div className="absolute left-[-20px] top-1.5 w-3 h-3 bg-[var(--accent)] rounded-full z-10" />
                <p className="font-['Montserrat'] font-bold text-[24px] text-[var(--accent)] leading-none mb-1">{m.year}</p>
                <p className="font-['Montserrat'] font-semibold text-[14px] text-[var(--text)] mb-1">{m.title}</p>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
