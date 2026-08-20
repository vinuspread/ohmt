"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { TemplateWrapper } from "./TemplateWrapper";

const navItems = [
  { label: "Image", href: "/en/templates/OHMT031-luma-camera/image-engine" },
  { label: "Scenes", href: "/en/templates/OHMT031-luma-camera/scenes" },
  { label: "Stories", href: "/en/templates/OHMT031-luma-camera/stories" },
  { label: "Shop", href: "/en/templates/OHMT031-luma-camera/shop" },
];

export function LumaChrome({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <TemplateWrapper>
      <header className="fixed left-0 right-0 top-0 z-40 bg-[var(--luma-dark)] px-4 md:px-9">
        <nav className="mx-auto flex h-16 max-w-[1380px] items-center justify-between text-white">
          <Link href="/en/templates/OHMT031-luma-camera" className="inline-flex min-h-12 items-center text-sm font-black tracking-[0.14em] text-white">LUMA</Link>
          <div className="hidden items-center gap-3 text-xs font-semibold text-white/70 md:flex lg:gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-12 min-w-12 items-center justify-center px-2 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/en/templates/OHMT031-luma-camera/shop" className="hidden min-h-12 items-center justify-center bg-white/10 px-4 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[var(--luma-dark)] md:inline-flex">
            Reserve
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center border border-white/20 text-white md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="mx-auto max-w-[1380px] border-t border-white/10 py-4 md:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-1 py-3 text-sm font-semibold text-white/80"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/en/templates/OHMT031-luma-camera/shop"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex min-h-12 items-center justify-center bg-white text-xs font-bold text-[var(--luma-dark)]"
              >
                Reserve
              </Link>
            </div>
          </div>
        )}
      </header>
      {children}
      <footer className="px-4 py-12 md:px-9">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 text-sm text-[var(--luma-muted)] md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-[var(--luma-ink)]">LUMA by LUMA</p>
          <p>© 2026 LUMA. Compact camera concept.</p>
        </div>
      </footer>
    </TemplateWrapper>
  );
}
