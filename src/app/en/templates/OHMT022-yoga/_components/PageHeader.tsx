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
            className={`text-xs tracking-[0.25em] uppercase mb-8 ${image ? "text-white/40" : "text-[var(--color-text-muted)]"}`}
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            OHMT
          </p>
          <h1
            className={`text-[length:var(--text-display)] font-normal leading-[var(--leading-heading)] tracking-[-0.03em] ${image ? "text-white" : "text-[var(--color-text)]"}`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-8 max-w-[720px] whitespace-pre-line text-base leading-loose ${image ? "text-white/60" : "text-[var(--color-text-muted)]"}`}
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
