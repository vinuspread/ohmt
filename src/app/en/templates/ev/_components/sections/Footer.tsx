"use client";

const sitemap = [
  { label: "Overview", href: "/en/templates/ev" },
  { label: "Specs",    href: "/en/templates/ev/specs" },
  { label: "Colors",   href: "/en/templates/ev/specs#colors" },
  { label: "Our Story",href: "/en/templates/ev/story" },
  { label: "Reserve",  href: "/en/templates/ev/order" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "TikTok", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-6 pb-10 md:pt-12 md:pb-16">

        {/* 뉴스레터 */}
        <div className="border border-[var(--border)] rounded-2xl p-6 md:p-12 mb-10 md:mb-16 text-center">
          <p className="font-michroma text-[clamp(17px,2vw,26px)] text-[var(--text)] mb-2 md:mb-3">
            Stay in the loop
          </p>
          <p className="font-inter text-[15px] text-[var(--text-muted)] mb-5 max-w-[560px] mx-auto">
            Be the first to know about NUBI deliveries, events, and exclusive updates.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 max-w-[440px] mx-auto w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-full px-5 py-3 font-inter text-[13px] text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
            />
            <button className="bg-[var(--accent)] text-[var(--text-on-light)] px-6 py-3 rounded-full text-[12px] font-inter font-medium tracking-[0.03em] hover:bg-[var(--accent-dark)] transition-colors flex-shrink-0 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        {/* 링크 그리드 */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-8 md:mb-12">
          {/* 브랜드 */}
          <div className="md:w-1/3">
            <p className="font-michroma text-xl text-[var(--text)] mb-2">OHMT</p>
            <p className="font-inter text-[15px] text-[var(--text-muted)] mb-5 leading-relaxed">
              Small car. Big city fun. Zero emissions, all character.
            </p>
            <button className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--text-on-light)] px-5 py-2.5 rounded-full text-[12px] font-inter font-medium tracking-[0.04em] hover:bg-[var(--accent-dark)] transition-colors">
              Reserve now →
            </button>
          </div>

          {/* 모바일: 2열 통합 메뉴 / 데스크탑: Explore + Follow 분리 */}
          <div className="md:hidden grid grid-cols-2 gap-x-6 gap-y-3">
            {[...sitemap, ...socials].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-inter text-[13px] text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block md:w-1/3">
            <p className="font-inter text-[11px] font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase mb-4">Explore</p>
            <ul className="space-y-3">
              {sitemap.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-inter text-[13px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block md:w-1/3">
            <p className="font-inter text-[11px] font-medium tracking-[0.08em] text-[var(--text-muted)] uppercase mb-4">Follow</p>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="font-inter text-[13px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="flex flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
          <p className="font-inter text-[14px] text-[var(--text-muted)]">
            © 2026 Oh My Template.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-inter text-[11px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Privacy</a>
            <a href="#" className="font-inter text-[11px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
