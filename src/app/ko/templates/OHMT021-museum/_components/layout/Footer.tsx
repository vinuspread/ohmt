import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-accent)] py-6 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-normal text-white/30">© 2026 CURA.</span>
        <div className="flex gap-6 text-xs uppercase tracking-normal text-white/40">
           <Link href="/ko/templates/OHMT021-museum/curator-note" className="hover:text-white transition-colors">큐레이터 노트</Link>
           <Link href="/ko/templates/OHMT021-museum/collections" className="hover:text-white transition-colors">소장품</Link>
           <Link href="/ko/templates/OHMT021-museum/shop" className="hover:text-white transition-colors">기념품샵</Link>
        </div>
        <span className="text-xs uppercase tracking-normal text-white/30">탁월함을 위한 디자인</span>
      </div>
    </footer>
  );
}
