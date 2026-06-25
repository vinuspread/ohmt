"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Rocket, FileText, Keyboard, Users, Database, LinkIcon, ClipboardCopy, Search, Zap, Package, Lightbulb, Copy, Check } from "lucide-react";
import Sidebar from "../_components/Sidebar";
import Header from "../_components/Header";
import { docPages, DocPage } from "../data/pages";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, FileText, Keyboard, Users, Database, LinkIcon, ClipboardCopy, Search, Zap, Package,
};

function CodeBlockRenderer({ block }: { block: { value: string; language?: string } }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(block.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group bg-[var(--color-code-bg)] border border-[var(--color-border)] rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-1.5 border-b border-[var(--color-border)]">
        {block.language ? (
          <span className="text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-wider">{block.language}</span>
        ) : (
          <span />
        )}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          {copied ? (
            <><Check size={12} className="text-green-500" /><span className="text-green-500">복사됨</span></>
          ) : (
            <><Copy size={12} /><span>복사</span></>
          )}
        </button>
      </div>
      <pre className="p-4 max-w-full">
        <code className="text-sm leading-relaxed text-[var(--color-text)] break-words whitespace-pre-wrap" style={{ fontFamily: "var(--font-body)" }}>
          {block.value}
        </code>
      </pre>
    </div>
  );
}

function ContentRenderer({ page }: { page: DocPage }) {
  return (
    <article className="space-y-4 animate-in">
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } } .animate-in { animation: fadeIn 0.35s ease-out both; }`}</style>
      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center mb-2">
        {(() => {
          const Icon = iconMap[page.icon];
          return Icon ? <Icon size={24} className="text-[var(--color-accent)]" /> : null;
        })()}
      </div>
      <h1 className="text-3xl font-bold text-[var(--color-text)] leading-tight mb-1" style={{ fontFamily: "var(--font-heading)" }}>
        {page.title}
      </h1>
      <p className="text-base text-[var(--color-text-muted)] mb-6 pb-6 border-b border-[var(--color-border)]">
        {page.description}
      </p>

      {page.content.map((block, idx) => {
        switch (block.type) {
          case "heading":
            if (block.variant === "h3") {
              return (
                <h3 key={idx} className="text-lg font-semibold text-[var(--color-text)] pt-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {block.value}
                </h3>
              );
            }
            return (
              <h2 key={idx} className="text-xl font-bold text-[var(--color-text)] pt-4" style={{ fontFamily: "var(--font-heading)" }}>
                {block.value}
              </h2>
            );

          case "text":
            return (
              <p key={idx} className="text-[15px] text-[var(--color-text)] leading-relaxed">
                {block.value}
              </p>
            );

          case "list":
            return (
              <ul key={idx} className="space-y-1.5 pl-5">
                {block.items?.map((item, i) => (
                  <li key={i} className="text-[15px] text-[var(--color-text)] leading-relaxed list-disc marker:text-[var(--color-text-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "code":
            return <CodeBlockRenderer key={idx} block={block} />;

          case "quote":
            return (
              <blockquote key={idx} className="pl-4 border-l-[3px] border-[var(--color-quote-border)] py-2">
                <p className="text-[15px] text-[var(--color-text)] leading-relaxed">
                  {block.value}
                </p>
              </blockquote>
            );

          case "callout":
            return (
              <div key={idx} className="flex gap-3 p-4 bg-[var(--color-callout-bg)] border border-[var(--color-callout-border)] rounded-lg">
                <Lightbulb size={18} className="mt-0.5 text-[var(--color-accent)] flex-shrink-0" />
                <p className="text-[15px] text-[var(--color-text)] leading-relaxed">
                  {block.value}
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}

export default function DocDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const page = useMemo(() => docPages.find((p) => p.slug === slug), [slug]);

  const siblings = useMemo(() => {
    if (!page) return [];
    return docPages
      .filter((p) => p.parent === page.parent && p.slug !== slug)
      .sort((a, b) => a.order - b.order);
  }, [page, slug]);

  if (!page) {
    return (
      <div className="flex h-screen overflow-hidden bg-[var(--color-bg)]" style={{ fontFamily: "var(--font-body)" }}>
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
        )}
        <div className={`fixed inset-y-0 left-0 z-50 lg:relative lg:z-auto bg-[var(--color-bg)] shadow-xl lg:shadow-none ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
        </div>
        <div className="flex-1 flex flex-col min-w-0">
          <Header onMenuToggle={() => setMobileMenuOpen((prev) => !prev)} />
          <main className="flex-1 overflow-y-auto flex items-center justify-center px-6">
            <div className="text-center space-y-5 max-w-sm">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-light)] flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-text-muted)]">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--color-text)] mb-1">페이지를 찾을 수 없습니다</h1>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  요청하신 페이지가 존재하지 않거나 이동되었습니다. 사이드바에서 다른 페이지를 찾아보세요.
                </p>
              </div>
              <Link
                href="/ko/templates/docsKO"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] hover:opacity-90 rounded-lg transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                문서 홈으로 이동
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-bg)]" style={{ fontFamily: "var(--font-body)" }}>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className={`fixed inset-y-0 left-0 z-50 lg:relative lg:z-auto bg-[var(--color-bg)] shadow-xl lg:shadow-none ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <Sidebar onNavigate={() => setMobileMenuOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuToggle={() => setMobileMenuOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-8 py-16">
            <ContentRenderer page={page} />

            {siblings.length > 0 && (
              <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <h3 className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                  관련 페이지
                </h3>
                <div className="flex flex-wrap gap-2">
                  {siblings.map((sibling) => (
                    <Link
                      key={sibling.slug}
                      href={`/ko/templates/docsKO/${sibling.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-[var(--color-text)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-hover)] rounded-md transition-colors"
                    >
                      {(() => {
                        const Icon = iconMap[sibling.icon];
                        return Icon ? <Icon size={14} className="text-[var(--color-accent)]" /> : null;
                      })()}
                      <span>{sibling.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[var(--color-border)]">
              <Link
                href="/ko/templates/docsKO"
                className="inline-flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                문서 홈으로 돌아가기
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
