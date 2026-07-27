import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
      <div className="flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
        <div className="flex-1 px-8 md:px-14 lg:px-20 py-16 md:py-20">
          <p
            className="text-xs tracking-[0.25em] text-[var(--color-text-muted)] mb-5 font-normal"
            style={{ fontFamily: "var(--font-body)" }}
          >
            클래스
          </p>
          <h2
            className="text-[length:var(--text-h1)] font-normal text-[var(--color-text)] leading-[var(--leading-heading)] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            나에게 맞는<br />
            클래스를 찾아보세요</h2>
        </div>

        <div className="flex flex-col justify-between px-8 md:px-14 lg:px-20 py-16 md:py-20 md:max-w-[360px]">
          <p
            className="text-sm text-[var(--color-text-muted)] leading-loose font-normal"
            style={{ fontFamily: "var(--font-body)" }}
          >
            빈야사와 하타 요가, 명상, 필라테스.<br />
            처음 시작하는 분부터 꾸준히 수련해 온 분까지.</p>
          <Link
            href="/ko/templates/OHMT022-yoga/classes"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[var(--color-text)] hover:text-[var(--color-text-muted)] group transition-colors font-medium"
            style={{ fontFamily: "var(--font-body)" }}
          >
            전체 클래스 보기
            <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
