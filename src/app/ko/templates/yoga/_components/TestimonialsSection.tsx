import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--color-border)]">
      <div className="min-h-[50vh] md:min-h-[60vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/OHMT022-yoga/cta-bg.jpg')" }} />

      <div className="flex flex-col justify-between bg-[var(--color-bg-dark)]">
        <div className="px-8 md:px-12 pt-10 pb-6 border-b border-white/20">
          <p className="text-[12px] tracking-[0.25em] text-white/30 font-normal"
             style={{ fontFamily: "var(--font-body)" }}>
            여정을 시작하세요
          </p>
        </div>

        <div className="flex-1 flex items-center px-8 md:px-12 py-12">
          <h2 className="text-[clamp(2rem,3.2vw,3.5rem)] font-normal text-white leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-heading)" }}>
            첫 수업은
            <br />
            무료입니다
          </h2>
        </div>

        <div className="px-8 md:px-12 py-8 border-t border-white/20">
          <p className="text-[14px] text-white/35 leading-[1.9] max-w-[300px] font-normal mb-7"
             style={{ fontFamily: "var(--font-body)" }}>
            마음 챙김 움직임이 주는 변화를 직접 경험해보세요. 첫 수업은 무료입니다.
          </p>
          <Link href="/ko/templates/OHMT022-yoga/schedule"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] text-white hover:text-white/70 group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}>
            무료 클래스 예약
            <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
