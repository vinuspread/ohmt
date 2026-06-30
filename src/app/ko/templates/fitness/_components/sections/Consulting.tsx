export function Consulting({ variant = "home" }: { variant?: "home" | "about" }) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-[var(--accent)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay opacity-20"
        style={{ backgroundImage: "url('/templates/fitness/cta-bg.jpg')" }}
      />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        {variant === "home" ? (
          <>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-white leading-[1.15] tracking-tight mb-4">
              공간을 프리미엄 웰니스 공간으로 전환하세요.
            </h2>
            <p className="text-[15px] text-white/70 max-w-[560px] mx-auto mb-10 leading-relaxed">
              컨셉부터 운영까지 — 모든 단계에서 함께하여&nbsp;<span className="whitespace-nowrap">월드클래스</span>&nbsp;웰니스 경험을 만들어갑니다.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-white leading-[1.15] tracking-tight mb-4">
              웰니스의 새로운 장을 준비하셨나요?
            </h2>
            <p className="text-[15px] text-white/70 max-w-[560px] mx-auto mb-10 leading-relaxed">
              탁월한 웰니스 경험을 통해 브랜드를 한 단계 높이고자 하는 파트너와 함께합니다.
            </p>
          </>
        )}
        <a
          href="/ko/templates/fitness/consignment"
          className="inline-block border-2 border-white text-white text-[13px] font-semibold px-8 py-3.5 rounded-lg hover:bg-white hover:text-[var(--accent)] transition-all tracking-wide"
        >
          상담 신청하기 →
        </a>
      </div>
    </section>
  );
}
