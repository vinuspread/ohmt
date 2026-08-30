import Link from "next/link";
import { NAV_ITEMS, BRAND } from "../constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="grid gap-12 px-8 py-14 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16 md:px-14 md:py-16 lg:px-20">
        <div>
          <Link
            href="/ko/templates/OHMT022-yoga"
            className="inline-flex text-lg font-medium tracking-[-0.01em] text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-secondary)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {BRAND.name}
          </Link>
          <p className="mt-3 max-w-sm text-sm font-normal leading-6 text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
            {BRAND.tagline}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-[minmax(0,2fr)_minmax(12rem,1fr)] sm:gap-12">
          <nav aria-label="하단 메뉴">
            <h2 className="text-sm font-medium text-[var(--color-text)]" style={{ fontFamily: "var(--font-body)" }}>메뉴</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-normal text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-secondary)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium text-[var(--color-text)]" style={{ fontFamily: "var(--font-body)" }}>문의</h2>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-5 inline-flex text-sm font-normal text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg-secondary)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] px-8 py-5 md:px-14 lg:px-20">
        <p className="text-xs font-normal text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
          &copy; {BRAND.copyright}
        </p>
      </div>
    </footer>
  );
}
