import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-accent)] py-6 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[13px] uppercase tracking-normal text-white/30">© 2026 Oh My Template Exhibition.</span>
        <div className="flex gap-6 text-[13px] uppercase tracking-normal text-white/40">
           <Link href="/en/templates/OHMT021-museum/curator-note" className="hover:text-white transition-colors">Curator's Note</Link>
           <Link href="/en/templates/OHMT021-museum/collections" className="hover:text-white transition-colors">Archives</Link>
        </div>
        <span className="text-[13px] uppercase tracking-normal text-white/30">Designed for Excellence</span>
      </div>
    </footer>
  );
}


