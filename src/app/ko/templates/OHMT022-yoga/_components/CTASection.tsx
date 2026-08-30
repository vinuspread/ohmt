import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-secondary)] text-white">
      <div className="grid gap-12 px-8 py-16 md:grid-cols-[minmax(0,7fr)_minmax(18rem,5fr)] md:items-end md:px-14 md:py-24 lg:px-20">
        <div>
          <p
            className="mb-5 text-sm font-medium tracking-normal text-white/75"
            style={{ fontFamily: "var(--font-body)" }}
          >
            처음 오신다면
          </p>
          <h2
            className="text-[length:var(--text-h1)] font-medium leading-[var(--leading-heading)] tracking-normal text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            하타 요가로
            <br />
            천천히 시작하세요.
          </h2>
        </div>

        <div>
          <p
            className="max-w-md text-base font-normal leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            기본 자세를 서두르지 않고 익히는 수업입니다. 도구는 스튜디오에 준비되어 있고, 불편한 곳은 시작 전에 강사와 함께 확인합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ko/templates/OHMT022-yoga/classes/hatha-yoga"
              className="inline-flex min-h-12 items-center bg-[var(--color-accent)] px-6 text-sm font-semibold tracking-normal text-[var(--color-text)] transition-colors hover:bg-[#D2A57D]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              하타 요가 자세히 보기
            </Link>
            <Link
              href="/ko/templates/OHMT022-yoga/schedule"
              className="inline-flex min-h-12 items-center border border-white/35 px-6 text-sm font-semibold tracking-normal text-white transition-colors hover:border-white/70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              이번 주 일정 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
