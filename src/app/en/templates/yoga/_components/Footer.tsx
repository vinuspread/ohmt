import Link from "next/link";
import { NAV_ITEMS, SOCIAL_LINKS, BRAND } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
      {/* Main row */}
      <div className="flex flex-col md:flex-row border-b border-[var(--color-border)]">
        {/* Brand */}
        <div className="flex-1 px-8 md:px-14 lg:px-20 py-12 border-b md:border-b-0 md:border-r border-[var(--color-border)]">
          <Link
            href="/en/templates/OHMT022-yoga"
            className="text-[17px] font-medium text-[var(--color-text)] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {BRAND.name}
          </Link>
          <p className="mt-2 text-[14px] text-[var(--color-text-muted)]"
             style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            {BRAND.tagline}
          </p>
        </div>

        {/* Nav */}
        <div className="flex-1 px-8 md:px-14 lg:px-20 py-12 border-b md:border-b-0 md:border-r border-[var(--color-border)]">
          <p className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-6"
             style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Pages
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="flex-1 px-8 md:px-14 lg:px-20 py-12">
          <p className="text-[12px] tracking-[0.22em] uppercase text-[var(--color-text-muted)] mb-6"
             style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
            Connect
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-8 md:px-14 lg:px-20 py-6">
        <p className="text-[13px] text-[var(--color-text-muted)]"
           style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}>
          &copy; {BRAND.copyright}
        </p>
        <a
          href={`mailto:${BRAND.email}`}
          className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {BRAND.email}
        </a>
      </div>
    </footer>
  );
}
