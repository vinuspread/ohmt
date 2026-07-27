const values = [
  {
    title: "인증 트레이너",
    desc: "모든 트레이너는 첫 세션 전 Vitalis Academy 인증 과정을 마칩니다.",
  },
  {
    title: "큐레이션된 경험",
    desc: "1:1 코칭부터 소그룹 세션까지, 목표와 몸 상태에 맞춰 설계합니다.",
  },
  {
    title: "검증된 운영",
    desc: "파트너 지점마다 만족도와 재방문율을 꾸준히 추적합니다.",
  },
];

export function Values() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[length:var(--text-h2)] text-[var(--text)] leading-[var(--leading-heading)] tracking-tight mb-16">
          차별성
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white rounded-lg p-8 border border-[var(--border)] hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <h3 className="font-['Montserrat'] font-semibold text-lg text-[var(--text)] mb-3">{v.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
