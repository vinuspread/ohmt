import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-medium)]">
        <p className="text-xs tracking-[0.25em] text-white/40 mb-6 font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          OHMT의 수련</p>
        <h2 className="text-[length:var(--text-h1)] font-normal text-white leading-[var(--leading-heading)] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}>
          몸을 이해하는<br />
          시간</h2>
        <p className="mt-8 text-base text-white/50 leading-loose max-w-[360px] font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          호흡에 집중하고 천천히 움직이며 몸의 상태를 살핍니다. 무리하지 않고 꾸준히 이어갈 수 있는 수련을 안내합니다.</p>
        <div className="mt-10 pt-8 border-t border-white/10">
          <Link href="/ko/templates/OHMT022-yoga/about"
            className="inline-flex items-center gap-3 text-xs tracking-[0.18em] text-white hover:text-white/70 group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}>
            스튜디오 이야기<span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/OHMT022-yoga/intro.jpg')" }} />
    </section>
  );
}
