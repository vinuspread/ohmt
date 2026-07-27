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
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg-dark)] px-6 py-24 text-white md:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/templates/OHMT030-resort/footer-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[var(--leading-heading)] tracking-[-0.03em] md:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-base leading-7 text-white/70 md:text-lg md:leading-8">
          {description.map((line, index) => (
            <span key={`${index}-${line}`} className="md:block">
              {line}
              {index < description.length - 1 ? " " : null}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[var(--text-contrast)] transition-opacity duration-200 hover:opacity-80 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]"
        >
          {backLabel}
        </Link>
      </div>
    </main>
  );
}
