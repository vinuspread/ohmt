const solutions = [
  {
    title: "리커버리",
    desc: "과학적으로 검증된 회복 프로토콜로 최적의 컨디셔닝과 부상 예방.",
    image: "/templates/OHMT029-fitness/program-recovery.jpg",
  },
  {
    title: "스트렝스",
    desc: "모든 신체를 위한 정밀한 근력 운동 — 초보자부터 엘리트 선수까지.",
    image: "/templates/OHMT029-fitness/program-strength.jpg",
  },
  {
    title: "밸런스",
    desc: "큐레이션된 무브먼트 시퀀스와 브레스워크를 통한 몸과 마음의 조화.",
    image: "/templates/OHMT029-fitness/program-mobility.jpg",
  },
  {
    title: "릴렉세이션",
    desc: "조용하고 프라이빗한 스튜디오 환경에서의 심층 이완 테크닉.",
    image: "/templates/OHMT029-fitness/cta-bg.jpg",
  },
];

export function Solutions() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          솔루션
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="group bg-[var(--bg)] rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url('${s.image}')` }}
              />
              <div className="p-6">
                <h3 className="font-['Montserrat'] font-semibold text-[18px] text-[var(--text)] mb-2">{s.title}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
