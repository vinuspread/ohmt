import Link from "next/link";
import type { DocPage } from "../data/pages";

function ContentBlock({ block }: { block: DocPage["content"][number] }) {
  switch (block.type) {
    case "heading": {
      const Tag = block.variant === "h3" ? "h3" : "h2";
      const sizeClass = block.variant === "h3" ? "text-xl mt-10 mb-3" : "text-2xl mt-12 mb-4";
      return (
        <Tag className={`${sizeClass} font-bold text-[var(--color-text)]`} style={{ fontFamily: "var(--font-heading)" }}>
          {block.value}
        </Tag>
      );
    }
    case "text":
      return (
        <p className="text-base text-[var(--color-text-secondary)] leading-[var(--leading-body)] mb-4">
          {block.value}
        </p>
      );
    case "list":
      return (
        <ul className="mb-4 space-y-2">
          {block.items?.map((item, i) => (
            <li key={i} className="flex gap-2 text-base text-[var(--color-text-secondary)] leading-relaxed">
              <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--color-text-muted)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <pre className="mb-4 overflow-x-auto rounded-lg bg-[var(--color-code-bg)] p-4 text-sm leading-relaxed">
          <code className="font-mono text-[var(--color-text)]">{block.value}</code>
        </pre>
      );
    case "quote":
      return (
        <blockquote className="mb-4 border-l-2 border-[var(--color-quote-border)] pl-4 italic text-base text-[var(--color-text-secondary)]">
          {block.value}
        </blockquote>
      );
    case "callout":
      return (
        <div className="mb-4 rounded-lg border border-[var(--color-callout-border)] bg-[var(--color-callout-bg)] px-4 py-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {block.value}
        </div>
      );
    default:
      return null;
  }
}

export function DocContent({
  page,
  parent,
  prev,
  next,
  base,
}: {
  page: DocPage;
  parent?: DocPage;
  prev?: DocPage;
  next?: DocPage;
  base: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-16">
      {parent && (
        <div className="mb-4 flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
          <Link href={`${base}/${parent.slug}`} className="hover:text-[var(--color-accent)] transition-colors">
            {parent.title}
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text)]">{page.title}</span>
        </div>
      )}
      <h1 className="mb-3 text-3xl font-bold leading-[1.05] text-[var(--color-text)] md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
        {page.title}
      </h1>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)]">
        {page.description}
      </p>

      <article>
        {page.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </article>

      {(prev || next) && (
        <div className="mt-16 grid grid-cols-1 gap-3 border-t border-[var(--color-border)] pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`${base}/${prev.slug}`}
              className="group rounded-xl border border-[var(--color-border)] p-4 transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)]"
            >
              <div className="mb-1 text-xs text-[var(--color-text-muted)]">Previous</div>
              <div className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)]">{prev.title}</div>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`${base}/${next.slug}`}
              className="group rounded-xl border border-[var(--color-border)] p-4 text-right transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)]"
            >
              <div className="mb-1 text-xs text-[var(--color-text-muted)]">Next</div>
              <div className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)]">{next.title}</div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
