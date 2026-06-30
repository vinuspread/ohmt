"use client";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text)] py-20">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-12 border-b border-white/10">
          <h2
            className="font-[family-name:var(--font-heading)] font-light capitalize text-white leading-[1.05]"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Oh My<br />Template
          </h2>
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-16 text-sm font-[family-name:var(--font-body)]">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40 mb-3">연락처</p>
              <a
                href="mailto:contact@ohmytemplate.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                contact@ohmytemplate.com
              </a>
              <p className="text-white/40 mt-1 text-sm">오스틴, TX · 전 세계</p>
            </div>
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40 mb-3">팔로우</p>
              <div className="flex flex-col gap-1.5">
                {["Instagram", "Pinterest", "Vimeo"].map((s) => (
                  <span key={s} className="text-white/70 hover:text-white transition-colors cursor-pointer">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/30">
            파인아트 웨딩 포토그래피
          </p>
          <p className="text-[0.65rem] text-white/30">
            © 2026 Oh My Template.
          </p>
        </div>
      </div>
    </footer>
  );
}
