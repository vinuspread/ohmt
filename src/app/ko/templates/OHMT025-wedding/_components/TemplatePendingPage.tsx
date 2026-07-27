import Link from "next/link";

type TemplatePendingPageProps = {
  eyebrow: string;
  title: string;
  description: string[];
  backHref: string;
  backLabel: string;
};

export default function TemplatePendingPage({
  eyebrow,
  title,
  description,
  backHref,
  backLabel,
}: TemplatePendingPageProps) {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] px-6 py-24 text-[var(--color-text)] md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-primary)]">
          {eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-light leading-[var(--leading-heading)] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">
          {description.map((line, index) => (
            <span key={`${index}-${line}`} className="md:block">
              {line}
              {index < description.length - 1 ? " " : null}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex min-h-11 items-center justify-center bg-[var(--color-text)] px-6 text-sm font-bold text-white transition-colors hover:bg-[var(--color-primary)]"
        >
          {backLabel}
        </Link>
      </div>
    </main>
  );
}
