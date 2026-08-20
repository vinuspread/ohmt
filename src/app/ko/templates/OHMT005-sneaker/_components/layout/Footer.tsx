"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-[1.4rem] font-black tracking-[-0.04em] uppercase block mb-4">VINUS</span>
            <p className="text-[0.8rem] text-white/50 leading-relaxed max-w-[200px]">
              좋은 소재와 편안한 착용감, 책임 있는 생산을 함께 생각합니다.
            </p>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/40 mb-5">제품</h4>
            <ul className="space-y-3">
              {[
                { label: "전체 상품", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "신상품", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "베스트셀러", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "할인 상품", href: "/ko/templates/OHMT005-sneaker/shop-all" },
              ].map(l => (
                <li key={l.label}><Link href={l.href} className="text-[0.85rem] text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/40 mb-5">카테고리</h4>
            <ul className="space-y-3">
              {[
                { label: "스니커즈", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "러닝", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "포멀", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "부츠", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "로퍼", href: "/ko/templates/OHMT005-sneaker/shop-all" },
              ].map(l => (
                <li key={l.label}><Link href={l.href} className="text-[0.85rem] text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/40 mb-5">고객지원</h4>
            <ul className="space-y-3">
              {[
                { label: "사이즈 가이드", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "배송 안내", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "교환·반품", href: "/ko/templates/OHMT005-sneaker/shop-all" },
                { label: "문의하기", href: "/ko/templates/OHMT005-sneaker/contact" },
              ].map(l => (
                <li key={l.label}><Link href={l.href} className="text-[0.85rem] text-white/70 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.75rem] text-white/30">© 2026 VINUS.</p>
          <div className="flex gap-6">
            {[
              { label: "개인정보처리방침", href: "#" },
              { label: "이용약관", href: "#" },
              { label: "쿠키 설정", href: "#" },
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-[0.75rem] text-white/30 hover:text-white/60 transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
