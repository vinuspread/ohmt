import Link from "next/link";
import { games } from "@/app/ko/templates/OHMT023-game/data/data";

const companyLinks = [
  { href: "/ko/templates/OHMT023-game/about", label: "소개" },
  { href: "/ko/templates/OHMT023-game/news", label: "소식" },
  { href: "/ko/templates/OHMT023-game/careers", label: "채용" },
  { href: "/ko/templates/OHMT023-game/games", label: "게임" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/ko/templates/OHMT023-game"
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-xl font-bold text-transparent font-[var(--font-heading)]"
            >
              Oh My Template
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
              영감을 주는 세상을 만들고, 한계를 정의하는 경계를 허물다.
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
                    href={`/ko/templates/OHMT023-game/games/${game.id}`}
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
          <p>&copy; 2026 Oh My Template. Contact: contact@ohmytemplate.com</p>
        </div>
      </div>
    </footer>
  );
}
