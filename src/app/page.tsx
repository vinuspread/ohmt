"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Minimal Template configuration
export const templates = [
  { id: 'fashion',    name: 'Fashion',      url: '/fashion',    desc: 'Minimalist luxury boutique.' },
  { id: 'jewelry',   name: 'Jewelry',       url: '/jewelry',    desc: 'High-end jewelry showcase.' },
  { id: 'exhibition',name: 'Exhibition',     url: '/exhibition', desc: 'Museum digital platform.' },
  { id: 'furniture', name: 'Furniture',     url: '/furniture',  desc: 'Modern interior marketplace.' },
  { id: 'sneaker',   name: 'Sneakers',      url: '/sneaker',    desc: 'Urban street-style releases.' },
  { id: 'studio',    name: 'Studio',        url: '/studio',     desc: 'Creative agency portfolio.' },
  { id: 'portfolio', name: 'Portfolio',     url: '/portfolio',  desc: 'Personal branding platform.' },
  { id: 'airline',   name: 'Airline',       url: '/airline',    desc: 'Premium airline booking UX.' },
];

export default function HubPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-white selection:text-black p-6 md:p-12 lg:p-24 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-4 border-b border-white/5 pb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter lowercase mb-2">vinuspread</h1>
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold italic">Archive v2.1.0 / Production Hub</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">Standardized Ecosystem</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#ED008C] font-black">Aesthetic Standards Only.</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {templates.map((p, index) => (
            <Link 
              key={p.id} 
              href={p.url}
              className="group relative block h-40 bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden rounded-[2px]"
            >
              {/* Tile Background / Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-white/60 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-serif tracking-tight leading-none group-hover:italic transition-all duration-500">
                    {p.name}
                  </h2>
                  <p className="text-[10px] text-white/40 tracking-widest uppercase font-medium leading-relaxed max-w-[200px]">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Hover Overlay / Glassmorphism */}
              <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-700" />
            </Link>
          ))}
        </section>

        <footer className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">
          <p>&copy; 2026 vinuspread. Built for Excellence.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors duration-300">Architecture</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Manifesto</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
