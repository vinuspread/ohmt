'use client';

import Link from 'next/link';
import { designerInfo } from '@/lib/portfolio-data';

export function Footer() {
  return (
    <footer className="bg-[#f3f3f3]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-16 pb-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[#d0d8e4]">
          <Link href="/en/templates/portfolio" className="text-[1.2rem] font-black tracking-tighter text-[#1e1e1e] hover:opacity-60 transition-opacity">
            vinus.
          </Link>
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#8a919b]">
            <a href="#" className="hover:text-[#1e1e1e] transition-colors">BE</a>
            <span>/</span>
            <a href="#" className="hover:text-[#1e1e1e] transition-colors">DR</a>
            <span>/</span>
            <a href="#" className="hover:text-[#1e1e1e] transition-colors">X</a>
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Left: CTA */}
          <div className="md:col-span-3">
            <p className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#1e1e1e] leading-snug mb-6">
              We'd love to hear from you
              <br />
              <span className="text-[#8a919b] font-normal">whether you have a project in mind, or just want to say hi.</span>
            </p>
            <Link href={`mailto:${designerInfo.contact.email}`}
              className="inline-block text-[1.3rem] font-bold text-[#1e1e1e] border-b-2 border-[#1e1e1e] pb-0.5 hover:opacity-60 transition-opacity">
              {designerInfo.contact.email}
            </Link>
          </div>

          {/* Right: Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-[1.6rem] font-bold text-[#1e1e1e] mb-2">Join our newsletter</h3>
            <p className="text-[0.82rem] text-[#8a919b] mb-6">Daily dose of design trends by the team.</p>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Name"
                className="w-full border-b border-[#d0d8e4] bg-transparent py-3 text-[0.88rem] text-[#1e1e1e] placeholder:text-[#8a919b] outline-none focus:border-[#1e1e1e] transition-colors" />
              <input type="email" placeholder="Email"
                className="w-full border-b border-[#d0d8e4] bg-transparent py-3 text-[0.88rem] text-[#1e1e1e] placeholder:text-[#8a919b] outline-none focus:border-[#1e1e1e] transition-colors" />
              <button type="submit"
                className="w-full bg-[#1e1e1e] text-white text-[0.78rem] font-bold uppercase tracking-widest py-4 mt-2 hover:bg-black transition-colors">
                SEND
              </button>
            </form>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#d0d8e4]">
          <div className="flex flex-wrap gap-6">
            {[...designerInfo.nav.map(n => ({ name: n.name, href: n.href })),
              { name: 'Manifesto', href: '/en/templates/portfolio/manifesto' }
            ].map(item => (
              <Link key={item.name} href={item.href}
                className="text-[12px] text-[#5a6271] hover:text-[#1e1e1e] transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <span className="text-[0.75rem] text-[#8a919b]">© 2026 Vinuspread.</span>
        </div>
      </div>
    </footer>
  );
}
