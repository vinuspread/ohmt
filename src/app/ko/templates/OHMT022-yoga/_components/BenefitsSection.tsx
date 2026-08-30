import Link from "next/link";

const PANELS = [
  { image: "/templates/OHMT022-yoga/home-vinyasa.webp", label: "빈야사 플로우", sub: "호흡과 이어지는 움직임", href: "/ko/templates/OHMT022-yoga/classes/vinyasa-flow" },
  { image: "/templates/OHMT022-yoga/home-hatha.webp", label: "하타 요가", sub: "기본 자세와 호흡", href: "/ko/templates/OHMT022-yoga/classes/hatha-yoga" },
  { image: "/templates/OHMT022-yoga/home-meditation.webp", label: "명상", sub: "호흡과 집중", href: "/ko/templates/OHMT022-yoga/classes/meditation" },
  { image: "/templates/OHMT022-yoga/home-pilates.webp", label: "필라테스", sub: "코어와 정렬", href: "/ko/templates/OHMT022-yoga/classes/pilates" },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[var(--color-bg)]">
      <div className="flex items-end justify-between px-8 pb-10 pt-16 md:px-14 lg:px-20">
        <h2
          className="text-[length:var(--text-h1)] font-medium text-[var(--color-text)] leading-[var(--leading-heading)] tracking-normal"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          무리하지 않고
          <br />
          꾸준히 이어가는 수련
        </h2>
        <Link
          href="/ko/templates/OHMT022-yoga/classes"
          className="hidden border-b border-[var(--color-text)] pb-1 text-sm font-medium tracking-normal text-[var(--color-text)] transition-colors hover:text-[var(--color-text-muted)] md:inline-flex"
          style={{ fontFamily: "var(--font-body)" }}
        >
          전체 클래스 비교
        </Link>
      </div>

      <div className="grid grid-cols-2 md:flex md:h-[72vh]">
        {PANELS.map((panel, i) => (
          <Link
            key={panel.label}
            href={panel.href}
            className="group relative h-[44vh] overflow-hidden md:h-auto md:flex-1"
          >
            <div
              className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-[260ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              style={{ backgroundImage: `url('${panel.image}')` }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-700 ease-out" />
            <div
              className="absolute top-7 left-6 text-xs tracking-normal text-white/65 md:top-14 md:left-14 lg:top-20 lg:left-20"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              0{i + 1}
            </div>
            <div className="absolute inset-x-0 bottom-0 min-w-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent px-6 pb-7 pt-20 md:px-14 md:pb-14 lg:px-20 lg:pb-20">
              <h3
                className="whitespace-nowrap text-xl font-medium leading-[1.2] tracking-normal text-white md:text-2xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {panel.label}
              </h3>
              <p
                className="mt-2 whitespace-nowrap text-[13px] leading-[1.6] tracking-normal text-white/80 md:text-sm"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                {panel.sub}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
