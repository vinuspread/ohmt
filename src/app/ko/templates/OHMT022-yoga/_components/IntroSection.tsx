import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-medium)]">
        <p className="text-[12px] tracking-[0.25em] text-white/40 mb-6 font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          우리의 철학
        </p>
        <h2 className="text-[clamp(2.4rem,3.8vw,4.2rem)] font-normal text-white leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}>
          움직임의
          <br />
          본질
        </h2>
        <p className="mt-8 text-[16px] text-white/50 leading-[1.9] max-w-[360px] font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          웰니스는 거창한 결심보다 매일의 호흡에서 시작됩니다. 천천히 움직이며 몸의 균형을 다시 느껴보세요.
        </p>
        <div className="mt-10 pt-8 border-t border-white/10">
          <Link href="/ko/templates/OHMT022-yoga/about"
            className="inline-flex items-center gap-3 text-[13px] tracking-[0.18em] text-white hover:text-white/70 group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}>
            스토리 보기
            <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/OHMT022-yoga/intro.jpg')" }} />
    </section>
  );
}
