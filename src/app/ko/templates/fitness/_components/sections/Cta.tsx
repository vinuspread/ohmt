export function Cta() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-4">
              Vitalis 경험하기
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-8 max-w-[420px]">
              플래그십 스튜디오에서 무료 체험 세션을 예약하고 프리미엄 웰니스를 직접 경험해보세요.
            </p>
            <a
              href="/ko/templates/fitness/programs"
              className="inline-block bg-[var(--accent)] text-white text-[13px] font-semibold px-8 py-4 rounded-lg hover:bg-[var(--accent-light)] transition-colors tracking-wide"
            >
              체험 예약하기 →
            </a>
          </div>
          <div
            className="aspect-[4/3] rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/templates/fitness/cta-bg.jpg')" }}
          />
        </div>
      </div>
    </section>
  );
}
