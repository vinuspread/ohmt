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
    <main className="min-h-screen bg-white px-6 py-24 text-[#1A1A1A] md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 font-sans text-xs font-medium tracking-[0.15em] text-[#888888]">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-heading text-5xl font-normal leading-[var(--leading-heading)] md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl font-sans text-base leading-7 text-[#6F6F6F]">
          {description.map((line, index) => (
            <span key={`${index}-${line}`} className="md:block">
              {line}
              {index < description.length - 1 ? " " : null}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex min-h-11 items-center justify-center bg-[#1A1A1A] px-7 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-[#B07D4F]"
        >
          {backLabel}
        </Link>
      </div>
    </main>
  );
}
