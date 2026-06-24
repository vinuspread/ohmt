import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-medium)]">
        <p className="text-[12px] tracking-[0.25em] text-white/40 mb-6 font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          우리의 철학
        </p>
        <h2 className="text-[clamp(2.4rem,3.8vw,4.2rem)] font-normal text-white leading-[1.08] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}>
          움직임의
          <br />
          본질
        </h2>
        <p className="mt-8 text-[16px] text-white/50 leading-[1.9] max-w-[360px] font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          진정한 웰니스는 내면에서 시작됩니다. 움직임은 최고의 명약이며, 매일의 수련은 균형을 회복하고 자신을 다시 연결하도록 이끌어 줍니다.
        </p>
        <div className="mt-10 pt-8 border-t border-white/10">
          <Link href="/ko/templates/OHMT022-yoga-KO/about"
            className="inline-flex items-center gap-3 text-[13px] tracking-[0.18em] text-white hover:text-white/70 group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}>
            스토리 보기
            <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/yoga/intro.jpg')" }} />
    </section>
  );
}
