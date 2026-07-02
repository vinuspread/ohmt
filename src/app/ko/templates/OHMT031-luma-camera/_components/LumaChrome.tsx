import Link from "next/link";
import { TemplateWrapper } from "./TemplateWrapper";

const navItems = [
  { label: "이미지", href: "/ko/templates/luma-camera/image-engine" },
  { label: "장면", href: "/ko/templates/luma-camera/scenes" },
  { label: "스토리", href: "/ko/templates/luma-camera/stories" },
  { label: "구매", href: "/ko/templates/luma-camera/shop" },
];

export function LumaChrome({ children }: { children: React.ReactNode }) {
  return (
    <TemplateWrapper>
      <header className="fixed left-0 right-0 top-0 z-40 bg-[#222222] px-4 md:px-8">
        <nav className="mx-auto flex h-16 max-w-[1380px] items-center justify-between text-white">
          <Link href="/ko/templates/OHMT031-luma-camera" className="inline-flex min-h-11 items-center text-sm font-black tracking-[0.14em] text-white">
            OHMT
          </Link>
          <div className="hidden items-center gap-3 text-xs font-semibold text-white/70 md:flex lg:gap-7">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="inline-flex min-h-11 min-w-11 items-center justify-center px-2 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/ko/templates/OHMT031-luma-camera/shop" className="inline-flex min-h-11 items-center justify-center bg-white/10 px-4 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#222222]">
            예약하기
          </Link>
        </nav>
      </header>
      {children}
      <footer className="px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-4 text-sm text-[var(--luma-muted)] md:flex-row md:items-center md:justify-between">
          <p className="font-bold text-[var(--luma-ink)]">LUMA by OHMT</p>
          <p>© 2026 OHMT. 카메라 커머스 템플릿.</p>
        </div>
      </footer>
    </TemplateWrapper>
  );
}
