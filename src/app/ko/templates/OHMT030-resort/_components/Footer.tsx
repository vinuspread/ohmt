export function Footer() {
  return (
    <>
      {/* Pre-footer CTA strip */}
      <div className="relative h-[380px] overflow-hidden">
        <img src="/templates/OHMT030-resort/footer-bg.jpg" alt=""
          className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-6">
          <p className="text-[13px] font-medium text-white/70 tracking-widest uppercase">
            吏湲??덉빟?섏꽭??          </p>
          <h2 className="text-[clamp(32px,4vw,56px)] font-semibold text-white leading-[1.1] tracking-[-0.02em]">
            ?뱀떊??肄붿뒪???ㅽ넗由щ? ?쒖옉?섏꽭??          </h2>
          <a href="#"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-[var(--text-dark)] text-[15px] font-medium hover:opacity-85 transition-opacity">
            ?덉빟?섍린
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
                議곗슜????뀛由ш? 源껊뱺 ?대?????좎쿂. ?뱀떊怨?諛붾떎 ?ъ씠??嫄곕━瑜??덈Т??怨듦컙.
              </p>
              <p className="text-[13px] text-white/40 leading-relaxed">
                88 Tidal Walk<br />Byron Bay, Australia
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5">?먯깋</p>
              <div className="flex flex-col gap-3">
                {["?명뀛 ?뚭컻", "鍮뚮씪", "寃쏀뿕", "?ㅼ씠??, "?덉빟"].map((l) => (
                  <a key={l} href="#"
                    className="text-[14px] text-white/60 hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5">?곕씫泥?/p>
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
                  ?????? ?ㅼ쟾 9?????ㅽ썑 8??                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[11px] font-medium text-white/30 tracking-widest uppercase mb-5">?붾줈??/p>
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
            <p>&copy; 2026 OHMT.</p>
            <p>媛쒖씤?뺣낫 泥섎━諛⑹묠 &middot; ?댁슜?쎄?</p>
            <p>Template by OHMT.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
