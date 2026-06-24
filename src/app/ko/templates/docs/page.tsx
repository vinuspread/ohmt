"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Rocket, FileText, Keyboard, Users, Database, LinkIcon, ClipboardCopy, Search, Zap, Package } from "lucide-react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { docPages } from "./data/pages";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, FileText, Keyboard, Users, Database, LinkIcon, ClipboardCopy, Search, Zap, Package,
};

export default function DocsHomePage() {
  const [sidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featured = docPages.filter((p) => !p.parent).slice(0, 4);

  const renderIcon = (name: string) => {
    const Icon = iconMap[name];
    if (Icon) return <Icon size={24} className="text-[var(--color-accent)]" />;
    return null;
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-bg)]" style={{ fontFamily: "var(--font-body)" }}>
      {sidebarOpen && (
        <>
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
          )}
          <div className={`fixed inset-y-0 left-0 z-50 lg:relative lg:z-auto bg-[var(--color-bg)] shadow-xl lg:shadow-none ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
          </div>
        </>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuToggle={() => setMobileMenuOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-8 py-16">
            <div className="mb-12">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-[var(--color-accent)]" />
              </div>
              <h1 className="text-4xl font-bold text-[var(--color-text)] leading-tight mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                문서 워크스페이스
              </h1>
              <p className="text-base text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                팀을 위한 깔끔한 협업 문서 워크스페이스입니다. 한 곳에서 지식을 기록하고, 정리하고, 공유하세요.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {featured.map((page) => (
                <Link
                  key={page.slug}
                  href={`/ko/templates/OHMT014-docs-KO/${page.slug}`}
                  className="group p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center mb-2">
                    {renderIcon(page.icon)}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="border-t border-[var(--color-border)] pt-8">
              <h2 className="text-base font-semibold text-[var(--color-text)] mb-4 uppercase tracking-wider">모든 페이지</h2>
              <div className="space-y-1">
                {docPages.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/ko/templates/OHMT014-docs-KO/${page.slug}`}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                      {renderIcon(page.icon)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-base font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                        {page.title}
                      </span>
                      <p className="text-sm text-[var(--color-text-muted)] truncate">{page.description}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
