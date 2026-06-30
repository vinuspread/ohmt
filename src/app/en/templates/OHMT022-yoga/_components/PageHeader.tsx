interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="border-b border-[var(--color-border)]">
      <div className={`grid grid-cols-1 ${image ? "md:grid-cols-2" : ""}`}>
        {/* Text side */}
        <div className={`px-8 md:px-14 lg:px-20 pt-36 md:pt-44 pb-16 md:pb-20 flex flex-col justify-end ${image ? "bg-[var(--color-bg-dark)]" : "bg-[var(--color-bg)]"}`}>
          <p
            className={`text-[12px] tracking-[0.25em] uppercase mb-8 ${image ? "text-white/40" : "text-[var(--color-text-muted)]"}`}
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            OHMT
          </p>
          <h1
            className={`text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.05] tracking-[-0.03em] ${image ? "text-white" : "text-[var(--color-text)]"}`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-8 text-[16px] leading-[1.9] max-w-[460px] ${image ? "text-white/60" : "text-[var(--color-text-muted)]"}`}
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Image side */}
        {image && (
          <div
            className="relative min-h-[50vh] md:min-h-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        )}
      </div>
    </section>
  );
}
