import Link from "next/link";

const PANELS = [
  { image: "/templates/OHMT022-yoga/class-vinyasa.jpg", label: "비니아사 플로우", sub: "다이나믹 무브먼트", href: "/ko/templates/OHMT022-yoga/classes/vinyasa-flow" },
  { image: "/templates/OHMT022-yoga/class-hatha.jpg", label: "하타 요가", sub: "고요함과 호흡", href: "/ko/templates/OHMT022-yoga/classes/hatha-yoga" },
  { image: "/templates/OHMT022-yoga/class-meditation.jpg", label: "명상", sub: "내면의 고요", href: "/ko/templates/OHMT022-yoga/classes/meditation" },
  { image: "/templates/OHMT022-yoga/class-pilates.jpg", label: "필라테스", sub: "코어 & 정렬", href: "/ko/templates/OHMT022-yoga/classes/pilates" },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="flex items-end justify-between px-8 md:px-14 lg:px-20 pt-16 pb-10 border-b border-[var(--color-border)]">
        <h2
          className="text-[clamp(2rem,4.5vw,4rem)] font-normal text-[var(--color-text)] leading-[1.05] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          빠른 해결책을
          <br />
          넘어선 요가
        </h2>
        <Link
          href="/ko/templates/OHMT022-yoga/classes"
          className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-[0.15em] text-[var(--color-text)] hover:text-[var(--color-text-muted)] group transition-colors font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          전체 보기
          <span className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:flex md:h-[72vh]">
        {PANELS.map((panel, i) => {
          const isRightCol = i % 2 === 1;
          const isBottomRow = i >= 2;
          return (
          <Link
            key={panel.label}
            href={panel.href}
            className={`group relative h-[44vh] md:h-auto md:flex-1 overflow-hidden border-[var(--color-border)]
              ${!isRightCol ? "border-r" : ""}
              ${!isBottomRow ? "border-b" : ""}
              md:border-b-0 md:border-r ${i === PANELS.length - 1 ? "md:border-r-0" : ""}
            `}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url('${panel.image}')` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-700 ease-out" />
            <div
              className="absolute top-8 md:top-14 lg:top-20 left-8 md:left-14 lg:left-20 text-[11px] tracking-[0.25em] text-white/40"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              0{i + 1}
            </div>
            <div className="absolute inset-x-0 bottom-0 px-8 md:px-14 lg:px-20 pb-8 md:pb-14 lg:pb-20 pt-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
              <p
                className="text-[22px] md:text-[24px] font-medium text-white leading-none tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {panel.label}
              </p>
              <p
                className="text-[15px] text-white/65 mt-2"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {panel.sub}
              </p>
              <div className="mt-5 overflow-hidden transition-all duration-500 ease-out max-h-0 group-hover:max-h-10">
                <span
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-white border-b border-white/50 pb-0.5 font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  클래스 예약 &rarr;
                </span>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </section>
  );
}
