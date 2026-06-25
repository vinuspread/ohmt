const basePath = "/ko/templates/OHMT024-kids-education";

const links = {
  explore: [
    { label: "전체 클래스", href: `${basePath}/classes` },
    { label: "소개", href: `${basePath}/about` },
    { label: "리뷰 및 문의", href: `${basePath}/contact` },
  ],
  forFamilies: [
    { label: "클래스 스케줄", href: `${basePath}/classes` },
    { label: "수강 신청", href: `${basePath}/contact` },
    { label: "요금 안내", href: `${basePath}/contact` },
    { label: "자주 묻는 질문", href: `${basePath}/contact` },
  ],
  helpful: [
    { label: "선생님 소개", href: `${basePath}/about` },
    { label: "교육 철학", href: `${basePath}/about` },
    { label: "고객 문의", href: `${basePath}/contact` },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)]">

      {/* Top CTA strip */}
      <div className="border-b border-white/10 bg-[var(--color-cta-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-xs font-bold tracking-wider mb-1">시작할 준비가 되셨나요?</p>
            <p className="text-2xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              지금 키즈 아카데미와 함께하세요
            </p>
          </div>
          <a
            href={`${basePath}/contact`}
            className="shrink-0 inline-block bg-[var(--color-primary)] text-[var(--color-text-main)] rounded-full px-7 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
          >
            배움 시작하기
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a href={basePath}>
              <h3
                className="text-3xl font-bold text-white leading-none mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Oh My Template
              </h3>
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              놀이가 곧 배움이 되는 곳. 즐겁고 창의적인 교육을 통해 다음 세대의 크리에이터, 사상가, 탐험가들에게 영감을 불어넣습니다.
            </p>
            <div className="flex gap-3 mt-6">
              {["IG", "YT", "TK"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[0.6rem] font-bold text-white/40 cursor-pointer [@media(hover:hover)]:hover:border-[var(--color-primary)] [@media(hover:hover)]:hover:text-[var(--color-primary)] transition-colors duration-150"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-4">탐색하기</h4>
            <ul className="space-y-3">
              {links.explore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 [@media(hover:hover)]:hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Families */}
          <div>
            <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-4">학부모 가이드</h4>
            <ul className="space-y-3">
              {links.forFamilies.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 [@media(hover:hover)]:hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Info */}
          <div>
            <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-4">고객 센터</h4>
            <ul className="space-y-3">
              {links.helpful.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 [@media(hover:hover)]:hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-white/40">
              <p>hello@ohmytemplate.com</p>
              <p className="mt-1">Seoul, South Korea</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.65rem] font-bold uppercase tracking-wider text-white/30">
          <p>© 2026 Oh My Template. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="[@media(hover:hover)]:hover:text-white transition-colors duration-150">라이선스</a>
            <a href="#" className="[@media(hover:hover)]:hover:text-white transition-colors duration-150">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
