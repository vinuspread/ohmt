import Link from "next/link";
import { games } from "@/app/en/templates/OHMT023-game/data/data";

const companyLinks = [
  { href: "/en/templates/OHMT023-game/about", label: "About" },
  { href: "/en/templates/OHMT023-game/news", label: "News" },
  { href: "/en/templates/OHMT023-game/careers", label: "Careers" },
  { href: "/en/templates/OHMT023-game/games", label: "Games" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/en/templates/OHMT023-game"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-xl font-bold text-transparent font-[var(--font-heading)]"
            >
              OHMT
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              Building worlds that inspire. Breaking limits that define.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-[0.1em] text-[var(--color-text)] uppercase">
              Games
            </h4>
            <ul className="space-y-3">
              {games.map((game) => (
                <li key={game.id}>
                  <Link
                    href={`/en/templates/OHMT023-game/games/${game.id}`}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                  >
                    {game.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-[0.1em] text-[var(--color-text)] uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-[0.1em] text-[var(--color-text)] uppercase">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">Twitter / X</span>
              </li>
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">Discord</span>
              </li>
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">YouTube</span>
              </li>
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-8 text-center text-sm text-[var(--color-text-muted)]">
          <p>&copy; 2026 OHMT. Contact: contact@ohmt.site</p>
        </div>
      </div>
    </footer>
  );
}

