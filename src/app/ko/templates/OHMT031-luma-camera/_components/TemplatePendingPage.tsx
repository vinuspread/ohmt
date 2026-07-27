import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
    <main className="flex min-h-[calc(100dvh-64px)] items-center bg-[var(--luma-bg)] px-5 py-20 text-[var(--luma-ink)] md:px-9">
      <section className="mx-auto w-full max-w-[1380px]">
        <p className="luma-label text-[var(--luma-muted)]">{eyebrow}</p>
        <h1 className="luma-h1 mt-5 max-w-4xl">{title}</h1>
        <p className="luma-body mt-7 max-w-2xl">
          {description.map((line, index) => (
            <span key={`${index}-${line}`} className="block">
              {line}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--luma-dark)] px-6 text-sm font-bold text-white transition-colors hover:bg-[var(--luma-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--luma-dark)]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {backLabel}
        </Link>
      </section>
    </main>
  );
}
