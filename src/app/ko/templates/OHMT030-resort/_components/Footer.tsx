import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react/ssr";
import Link from "next/link";

const socialLinks = [
  { label: "Facebook", Icon: FacebookLogo },
  { label: "Instagram", Icon: InstagramLogo },
  { label: "X", Icon: XLogo },
];

export function Footer() {
  return (
    <>
      {/* Pre-footer CTA strip */}
      <div className="relative h-[380px] overflow-hidden">
        <img src="/templates/OHMT030-resort/footer-bg.jpg" alt=""
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <h2 className="text-3xl font-semibold leading-[var(--leading-heading)] tracking-[-0.02em] text-white md:text-[length:var(--text-h2)]">
              에게해에서의 머무름을 시작하세요</h2>
          <a href="#"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-medium leading-[var(--leading-heading)] text-[var(--text-contrast)] transition-opacity hover:opacity-85 focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)] md:px-9 md:text-base">
            객실 예약</a>
        </div>
      </div>

      {/* Main footer */}
      <footer className="bg-[var(--bg-dark)]">
        <div className="resort-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="md:col-span-1">
              <p className="text-white text-xl font-semibold tracking-widest mb-4">OHMT</p>
              <p className="resort-body text-sm text-white/50 mb-6 break-keep">
                에게해의 절벽과 바다 사이에 자리한 작은 리조트입니다. 조용한 객실과 다이닝, 웰니스 프로그램을 만나보세요.</p>
              <p className="resort-body text-sm text-white/40">
                산토리니 칼데라 로드 88<br />산토리니, 그리스</p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs font-medium text-white/30 tracking-widest uppercase mb-5">탐색</p>
              <div className="flex flex-col gap-3">
                {["리조트 소개", "객실", "액티비티", "다이닝", "예약"].map((l) => (
                  <a key={l} href="#"
                    className="text-sm text-white/60 hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-medium text-white/30 tracking-widest uppercase mb-5">연락처</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+18001234567"
                  className="text-sm text-white/60 hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
                <a href="mailto:hello@ohmt.site"
                  className="text-sm text-white/60 hover:text-white transition-colors break-all">
                  contact@ohmt.site</a>
                <p className="text-sm text-white/60">
                  매일 오전 9시–오후 8시</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-medium text-white/30 tracking-widest uppercase mb-5">팔로우</p>
              <div className="flex gap-3">
                {socialLinks.map(({ label, Icon }) => (
                  <a key={label} href="#"
                    aria-label={label}
                    className="flex size-12 items-center justify-center rounded-full border border-white/30 text-white/70 transition-all hover:border-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-[var(--focus-ring)] focus-visible:outline-offset-[var(--focus-ring-offset)]">
                    <Icon size={16} weight="bold" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="resort-container border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-white/25">
            <p>© 2026 OHMT.</p>
            <p className="flex flex-wrap gap-x-2">
              <Link
                href="/ko/templates/OHMT030-resort/info/privacy"
                className="transition-colors hover:text-white/60"
              >
                개인정보처리방침
              </Link>
              <span aria-hidden="true">·</span>
              <Link
                href="/ko/templates/OHMT030-resort/info/terms"
                className="transition-colors hover:text-white/60"
              >
                이용약관
              </Link>
            </p>
            <p>OHMT 리조트</p>
          </div>
        </div>
      </footer>
    </>
  );
}
