export function Consulting({ variant = "home" }: { variant?: "home" | "about" }) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-[var(--accent)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay opacity-20"
        style={{ backgroundImage: "url('/templates/OHMT029-fitness/cta-bg.jpg')" }}
      />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        {variant === "home" ? (
          <>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-white leading-[1.15] tracking-tight mb-4">
              당신의 공간에 맞는 웰니스 운영을 설계합니다.
            </h2>
            <p className="text-[15px] text-white/70 max-w-[560px] mx-auto mb-10 leading-relaxed">
              컨셉, 동선, 인력, 프로그램까지 운영에 필요한 과정을 함께 정리합니다.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-white leading-[1.15] tracking-tight mb-4">
              웰니스 운영을 함께 준비할까요?
            </h2>
            <p className="text-[15px] text-white/70 max-w-[560px] mx-auto mb-10 leading-relaxed">
              호텔, 레지던스, 기업 공간에 맞는 프로그램과 운영 방식을 제안합니다.
            </p>
          </>
        )}
        <a
          href="/ko/templates/OHMT029-fitness/consignment"
          className="inline-block border-2 border-white text-white text-[13px] font-semibold px-8 py-3.5 rounded-lg hover:bg-white hover:text-[var(--accent)] transition-all tracking-wide"
        >
          상담 신청하기 →
        </a>
      </div>
    </section>
  );
}
