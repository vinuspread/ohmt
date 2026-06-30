const steps = [
  {
    number: "01",
    title: "컨설팅",
    desc: "비전, 공간, 목표에 대한 심층 분석을 통해 성공의 기준을 함께 정의합니다.",
  },
  {
    number: "02",
    title: "디자인",
    desc: "레이아웃과 장비부터 프로그램과 브랜드 정렬까지 맞춤형 웰니스 컨셉을 설계합니다.",
  },
  {
    number: "03",
    title: "스태핑",
    desc: "Vitalis Academy를 통해 팀을 채용, 교육 및 인증하여 첫날부터 일관된 품질을 보장합니다.",
  },
  {
    number: "04",
    title: "운영 관리",
    desc: "지속적인 운영 지원, 성과 추적, 개선 — 세부 사항은 저희가 관리합니다.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-[var(--bg)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          프로세스
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <p className="font-['Montserrat'] text-[48px] font-bold text-[var(--accent-soft)] leading-none mb-4">{step.number}</p>
              <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-3">{step.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 text-[var(--border)] text-2xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
