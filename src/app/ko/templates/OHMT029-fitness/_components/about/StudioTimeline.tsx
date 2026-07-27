const milestones = [
  { year: "2018", title: "창립", desc: "강남에 첫 플래그십\n스튜디오를 열었습니다." },
  { year: "2019", title: "첫 위탁 운영", desc: "종로 5성급 호텔의 웰니스\n시설 운영을 맡았습니다." },
  { year: "2021", title: "5개 지점", desc: "호텔, 레지던스, 기업 캠퍼스로\n운영 범위를 넓혔습니다." },
  { year: "2023", title: "Vitalis Academy", desc: "트레이너 교육과 내부 인증\n과정을 정식화했습니다." },
  { year: "2026", title: "12개 파트너", desc: "연 3,200명 이상의 회원이\n프로그램을 이용합니다." },
];

export function StudioTimeline() {
  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[length:var(--text-h2)] text-[var(--text)] leading-[var(--leading-heading)] tracking-tight mb-16">
          스튜디오 연혁
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute top-[6px] left-0 right-0 h-[1px] bg-[var(--border)]" />
          <div className="hidden md:grid grid-cols-5 gap-4">
            {milestones.map((m) => (
              <div key={m.year} className="relative text-center">
                <div className="w-3 h-3 bg-[var(--accent)] rounded-full mx-auto mb-8 relative z-10" />
                <p className="font-['Montserrat'] font-bold text-4xl text-[var(--accent)] leading-none mb-2">{m.year}</p>
                <p className="font-['Montserrat'] font-semibold text-sm text-[var(--text)] mb-2">{m.title}</p>
                <p className="whitespace-pre-line text-sm text-[var(--text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="md:hidden relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-[var(--border)]">
            {milestones.map((m) => (
              <div key={m.year} className="relative pb-10 last:pb-0">
                <div className="absolute left-[-20px] top-1.5 w-3 h-3 bg-[var(--accent)] rounded-full z-10" />
                <p className="font-['Montserrat'] font-bold text-2xl text-[var(--accent)] leading-none mb-1">{m.year}</p>
                <p className="font-['Montserrat'] font-semibold text-sm text-[var(--text)] mb-1">{m.title}</p>
                <p className="whitespace-pre-line text-sm text-[var(--text-muted)] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
