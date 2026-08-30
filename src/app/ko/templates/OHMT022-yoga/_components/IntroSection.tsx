import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-end px-8 md:px-14 lg:px-20 py-16 md:py-24 bg-[var(--color-bg-medium)]">
        <p className="mb-6 text-sm font-medium tracking-normal text-white/65"
           style={{ fontFamily: "var(--font-body)" }}>
          수련 방식
        </p>
        <h2 className="ohmt-display-leading text-[length:var(--text-h1)] font-medium tracking-normal text-white"
            style={{ fontFamily: "var(--font-heading)" }}>
          몸을 이해하는
          <br />
          시간
        </h2>
        <p className="mt-8 max-w-[360px] text-base font-normal leading-relaxed text-white/70"
           style={{ fontFamily: "var(--font-body)" }}>
          호흡에 집중하고 천천히 움직이며 몸의 상태를 살핍니다. 무리하지 않고 꾸준히 이어갈 수 있는 수련을 안내합니다.
        </p>
        <div className="mt-10 pt-8">
          <Link href="/ko/templates/OHMT022-yoga/about"
            className="inline-flex border-b border-white/45 pb-1 text-sm font-medium tracking-normal text-white transition-colors hover:text-white/70"
            style={{ fontFamily: "var(--font-body)" }}>
            수업 방식 알아보기
          </Link>
        </div>
      </div>
      <div className="min-h-[60vh] md:min-h-[80vh] bg-cover bg-center"
           style={{ backgroundImage: "url('/templates/OHMT022-yoga/intro.jpg')" }} />
    </section>
  );
}
