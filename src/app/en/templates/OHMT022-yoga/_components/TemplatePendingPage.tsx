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
    <main className="min-h-screen bg-white px-6 py-24 text-neutral-950 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-black tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600">
          {description.map((line, index) => (
            <span key={`${index}-${line}`}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
        <Link
          href={backHref}
          className="mt-10 inline-flex min-h-11 items-center justify-center bg-neutral-950 px-6 text-sm font-bold text-white transition-colors hover:bg-neutral-700"
        >
          {backLabel}
        </Link>
      </div>
    </main>
  );
}
