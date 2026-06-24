import { TESTIMONIALS } from "../constants";

export default function InstructorsSection() {
  return (
    <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="flex items-end justify-between px-8 md:px-14 lg:px-20 pt-16 pb-12 border-b border-[var(--color-border)]">
        <p className="text-[13px] tracking-[0.2em] text-[var(--color-text-muted)] font-normal"
           style={{ fontFamily: "var(--font-body)" }}>
          커뮤니티
        </p>
        <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-normal text-[var(--color-text)] leading-[1.05] tracking-[-0.02em] text-right"
            style={{ fontFamily: "var(--font-heading)" }}>
          한 번에<br />하나씩 완성
        </h2>
      </div>

      <div className="flex border-b border-[var(--color-border)]">
        {[
          { value: "500+", label: "수강생" },
          { value: "12+", label: "주간 클래스" },
          { value: "3", label: "전문 강사진" },
        ].map((stat) => (
          <div key={stat.label}
               className="flex-1 px-4 md:px-14 lg:px-20 py-8 md:py-10 border-r border-[var(--color-border)] last:border-r-0 min-w-0">
            <p className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-normal text-[var(--color-text)] tracking-[-0.02em]"
               style={{ fontFamily: "var(--font-heading)" }}>
              {stat.value}
            </p>
            <p className="text-[11px] md:text-[13px] tracking-[0.08em] md:tracking-[0.15em] text-[var(--color-text-muted)] mt-2 break-words font-normal"
               style={{ fontFamily: "var(--font-body)" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
        {TESTIMONIALS.slice(0, 3).map((t) => (
          <div key={t.id} className="flex-1 px-8 md:px-14 lg:px-20 py-12">
            <p className="text-[16px] text-[var(--color-text)] leading-[1.85] font-normal"
               style={{ fontFamily: "var(--font-body)" }}>
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="mt-7 text-[13px] tracking-[0.18em] text-[var(--color-text-muted)] font-normal"
               style={{ fontFamily: "var(--font-body)" }}>
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
