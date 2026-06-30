const values = [
  {
    title: "인증 트레이너",
    desc: "모든 트레이너는 첫 세션을 진행하기 전에 Vitalis Academy의 엄격한 인증 프로그램을 이수합니다.",
  },
  {
    title: "큐레이션된 경험",
    desc: "1:1 코칭부터 소그룹 세션까지 — 모든 프로그램은 개인의 목표와 선호도에 맞게 설계됩니다.",
  },
  {
    title: "검증된 탁월함",
    desc: "모든 파트너 지점에서 98% 회원 만족도와 업계 최고 수준의 유지율을 기록하고 있습니다.",
  },
];

export function Values() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          차별성
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-lg p-8 border border-[var(--border)] hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-3">{v.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
