export function Footer() {
  return (
    <>
      {/* Pre-footer CTA strip */}
      <div className="relative h-[380px] overflow-hidden">
        <img src="/templates/resort/footer-bg.jpg" alt=""
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-6">
          <p className="text-[13px] font-medium text-white/70 tracking-widest uppercase">
            지금 예약하세요
          </p>
          <h2 className="text-[clamp(32px,4vw,56px)] font-semibold text-white leading-[1.1] tracking-[-0.02em]">
            당신의 코스탈 스토리를 시작하세요
          </h2>
          <a href="#"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-[var(--text-dark)] text-[15px] font-medium hover:opacity-85 transition-opacity">
            예약하기
          </a>
        </div>
      </div>

      {/* Main footer */}
      <footer className="bg-[var(--bg-dark)]">
        <div className="max-w-[1440px] mx-auto px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="md:col-span-1">
              <p className="text-white text-xl font-semibold tracking-widest mb-4">OHMT</p>
              <p className="text-[14px] text-white/50 leading-relaxed mb-6 break-keep">
                조용한 럭셔리가 깃든 해변의 은신처. 당신과 바다 사이의 거리를 허무는 공간.
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed">
                88 Tidal Walk<br />Byron Bay, Australia
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5">탐색</p>
              <div className="flex flex-col gap-3">
                {["호텔 소개", "빌라", "경험", "다이닝", "예약"].map((l) => (
                  <a key={l} href="#"
                    className="text-[14px] text-white/60 hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5">연락처</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+18001234567"
                  className="text-[14px] text-white/60 hover:text-white transition-colors">
                  +1 (800) 123-4567
                </a>
                <a href="mailto:hello@ohmytemplate.com"
                  className="text-[14px] text-white/60 hover:text-white transition-colors break-all">
                  hello@ohmytemplate.com
                </a>
                <p className="text-[14px] text-white/60">
                  월 – 일, 오전 9시 – 오후 8시
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5">팔로우</p>
              <div className="flex flex-col gap-3">
                {["Facebook", "Instagram", "Pinterest"].map((l) => (
                  <a key={l} href="#"
                    className="text-[14px] text-white/60 hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 max-w-[1440px] mx-auto px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between gap-3 text-[12px] text-white/25">
            <p>&copy; 2026 Oh My Template.</p>
            <p>개인정보 처리방침 &middot; 이용약관</p>
            <p>Template by OHMT.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
