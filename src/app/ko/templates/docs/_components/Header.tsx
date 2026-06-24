"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header({ onMenuToggle }: { onMenuToggle?: () => void }) {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-[var(--color-border)] bg-[var(--color-bg)] flex-shrink-0">
      <div className="flex items-center gap-2">
        <button onClick={onMenuToggle} className="lg:hidden p-1 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors" aria-label="메뉴 열기">
          <Menu size={16} />
        </button>
        <Link href="/ko/templates/OHMT014-docs-KO" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="13" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M3.5 4.5H10.5M3.5 7H10.5M3.5 9.5H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          문서
        </Link>
        <span className="text-[var(--color-text-muted)] text-xs">/</span>
        <span className="text-xs text-[var(--color-text-muted)]">워크스페이스</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-2.5 py-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-hover)] rounded-md transition-colors">
          공유
        </button>
        <button className="px-2.5 py-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-hover)] rounded-md transition-colors">
          업데이트
        </button>
      </div>
    </header>
  );
}
