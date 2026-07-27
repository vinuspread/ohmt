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
    <main className="min-h-screen bg-[var(--bg)] px-6 py-24 text-[var(--text)] md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 font-inter text-xs font-medium tracking-[0.15em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-michroma text-4xl leading-[var(--leading-heading)] tracking-[-0.03em] md:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl font-inter text-base leading-7 text-[var(--text-muted)]">
          {description.map((line, index) => (
            <span key={`${index}-${line}`} className="md:block">
              {line}
              {index < description.length - 1 ? " " : null}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-7 font-inter text-sm font-semibold text-[var(--text-on-light)] transition-colors duration-200 hover:bg-[var(--accent-dark)]"
        >
          {backLabel}
        </Link>
      </div>
    </main>
  );
}
