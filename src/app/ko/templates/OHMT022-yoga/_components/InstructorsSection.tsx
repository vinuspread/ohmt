import { TESTIMONIALS } from "../constants";

export default function InstructorsSection() {
  return (
    <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="flex items-end justify-between px-8 md:px-14 lg:px-20 pt-16 pb-12 border-b border-[var(--color-border)]">
        <p className="text-xs tracking-[0.2em] text-[var(--color-text-muted)] font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          OHMT 스튜디오</p>
        <h2 className="text-[length:var(--text-h1)] font-normal text-[var(--color-text)] leading-[var(--leading-heading)] tracking-[-0.02em] text-right"
            style={{ fontFamily: "var(--font-heading)" }}>
          각자의 속도로<br />함께 수련합니다</h2>
      </div>

      <div className="flex border-b border-[var(--color-border)]">
        {[
          { value: "500+", label: "수강생" },
          { value: "12+", label: "주간 수업" },
          { value: "4", label: "강사진" },
        ].map((stat) => (
          <div key={stat.label}
               className="flex-1 px-4 md:px-14 lg:px-20 py-8 md:py-10 border-r border-[var(--color-border)] last:border-r-0 min-w-0">
            <p className="text-[length:var(--text-h2)] font-normal text-[var(--color-text)] tracking-[-0.02em]"
               style={{ fontFamily: "var(--font-heading)" }}>
              {stat.value}
            </p>
            <p className="text-xs md:text-xs tracking-[0.08em] md:tracking-[0.15em] text-[var(--color-text-muted)] mt-2 break-words font-normal"
               style={{ fontFamily: "var(--font-body)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
        {TESTIMONIALS.slice(0, 3).map((t) => (
          <div key={t.id} className="flex-1 px-8 md:px-14 lg:px-20 py-12">
            <p className="text-base text-[var(--color-text)] leading-loose font-normal"
               style={{ fontFamily: "var(--font-body)" }}>
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-7 text-xs tracking-[0.18em] text-[var(--color-text-muted)] font-normal"
               style={{ fontFamily: "var(--font-body)" }}>
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
