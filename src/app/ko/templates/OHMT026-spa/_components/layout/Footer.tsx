const basePath = "/ko/templates/OHMT026-spa";

const exploreLinks = [
  { label: "홈", href: basePath },
  { label: "소개", href: `${basePath}/about` },
  { label: "서비스", href: `${basePath}/service` },
  { label: "가격", href: `${basePath}/pricing` },
];

const supportLinks = [
  { label: "테라피스트", href: `${basePath}/therapists` },
  { label: "블로그", href: `${basePath}/blog` },
  { label: "문의", href: `${basePath}/contact` },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-[var(--color-text-contrast)]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <a href={basePath} className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight">SERENITY</a>
          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">진단부터 사후 관리까지, 한 흐름으로 설계하는 프리미엄 스킨케어 클리닉입니다.</p>
          <div className="mt-6 flex gap-3">
            {["FB", "LI", "IG"].map((s) => (
              <span key={s} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[0.6rem] font-bold text-white/50 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-150">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">둘러보기</h4>
          <ul className="space-y-3">
            {exploreLinks.map((l) => (
              <li key={l.label}><a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors duration-150">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">고객지원</h4>
          <ul className="space-y-3">
            {supportLinks.map((l) => (
              <li key={l.label}><a href={l.href} className="text-sm text-white/70 hover:text-white transition-colors duration-150">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="md:border-l md:border-white/10 md:pl-12">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">소식 받기</h4>
          <p className="text-sm text-white/60 mb-4">계절별 스킨케어 팁과 회원 전용 혜택을 받아보세요.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="이메일 주소" className="flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-sm placeholder:text-white/40 outline-none focus:border-[var(--color-primary)]" />
            <button type="submit" className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold hover:brightness-110 active:scale-[0.97] transition-all duration-150">구독</button>
          </form>
          <div className="mt-6 space-y-1">
            <p className="text-sm text-white/70">+1 (555) 010-2030</p>
            <p className="text-sm text-white/70">hello@ohmytemplate.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-6 py-5 text-xs text-white/40 text-center">© 2026 SERENITY.</div>
      </div>
    </footer>
  );
}
