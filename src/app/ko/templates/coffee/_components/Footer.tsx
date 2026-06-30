"use client";
import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/ko/templates/OHMT019-coffee" className="text-xl font-heading font-semibold text-white">
              OHMT
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-[220px]">
              ?쒖슱?먯꽌 ?앷컖?섍퀬 ?꾩꽑???ㅽ럹?쒗떚 而ㅽ뵾.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">Menu</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/OHMT019-coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">而ㅽ뵾</Link>
              <Link href="/ko/templates/OHMT019-coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">?쇱빱??/Link>
              <Link href="/ko/templates/OHMT019-coffee/menu" className="text-sm text-white/60 hover:text-white transition-colors">?몃뱶</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">留ㅼ옣 ?덈궡</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/ko/templates/OHMT019-coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">?깆닔</Link>
              <Link href="/ko/templates/OHMT019-coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">?댄깭??/Link>
              <Link href="/ko/templates/OHMT019-coffee/locations" className="text-sm text-white/60 hover:text-white transition-colors">媛뺣궓</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-white/40 mb-4">臾몄쓽</h4>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <a href="mailto:contact@ohmt.site" className="hover:text-white transition-colors">contact@ohmt.site</a>
              <p>02-1234-5678</p>
            </div>
            <div className="flex gap-4 mt-5">
              <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[0.1em]">?몄뒪?洹몃옩</Link>
              <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[0.1em]">?몄쐞??/Link>
              <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors uppercase tracking-[0.1em]">?섏씠?ㅻ턿</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; 2026 OHMT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

