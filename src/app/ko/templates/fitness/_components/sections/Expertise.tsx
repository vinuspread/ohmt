const base = "/ko/templates/fitness";

const expertiseBlocks = [
  {
    title: "Vitalis Academy",
    desc: "모든 트레이너가 플로어에 서기 전에 엄격한 기준을 충족하도록 보장하는 사내 인증 프로그램.",
    href: `${base}/about`,
  },
  {
    title: "품질 관리",
    desc: "정기적인 감사, 회원 피드백 루프, 지속적인 개선 프로토콜을 통한 일관된 서비스 제공.",
    href: `${base}/consignment`,
  },
  {
    title: "맞춤 프로그램",
    desc: "호텔, 기업, 레지던스 맞춤형 웰니스 솔루션 — 브랜드와 고객에 맞게 설계됩니다.",
    href: `${base}/programs`,
  },
];

export function Expertise() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          전문성
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden">
          {expertiseBlocks.map((block) => (
            <div
              key={block.title}
              className="bg-white p-10 flex flex-col hover:bg-[var(--bg-alt)] transition-colors"
            >
              <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-3">{block.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed flex-1">{block.desc}</p>
              <a
                href={block.href}
                className="inline-block mt-6 text-[13px] font-medium text-[var(--accent)] hover:underline tracking-wide"
              >
                자세히 보기 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
