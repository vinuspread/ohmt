'use client';

import Link from 'next/link';
import { designerInfo } from '@/lib/portfolio-data';

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-16 pb-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16 pb-6 border-b border-[var(--color-border)]">
          <Link href="/en/templates/OHMT013-portfolio-en" className="text-[1.2rem] font-black tracking-tighter text-[var(--color-text)] hover:opacity-60 transition-opacity">
            vinus.
          </Link>
          <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--color-text-muted)]">
            <a href="#" className="hover:text-[var(--color-text)] transition-colors">BE</a>
            <span>/</span>
            <a href="#" className="hover:text-[var(--color-text)] transition-colors">DR</a>
            <span>/</span>
            <a href="#" className="hover:text-[var(--color-text)] transition-colors">X</a>
          </div>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Left: CTA */}
          <div className="md:col-span-3">
            <p className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[var(--color-text)] leading-snug mb-6">
              We'd love to hear from you
              <br />
              <span className="text-[var(--color-text-muted)] font-normal">whether you have a project in mind, or just want to say hi.</span>
            </p>
            <Link href={`mailto:${designerInfo.contact.email}`}
              className="inline-block text-[1.3rem] font-bold text-[var(--color-text)] border-b-2 border-[var(--color-primary)] pb-0.5 hover:opacity-60 transition-opacity">
              {designerInfo.contact.email}
            </Link>
          </div>

          {/* Right: Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-[1.6rem] font-bold text-[var(--color-text)] mb-2">Join our newsletter</h3>
            <p className="text-[0.82rem] text-[var(--color-text-muted)] mb-6">Daily dose of design trends by the team.</p>
            <form className="space-y-3" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Name"
                className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-[0.88rem] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors" />
              <input type="email" placeholder="Email"
                className="w-full border-b border-[var(--color-border)] bg-transparent py-3 text-[0.88rem] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-primary)] transition-colors" />
              <button type="submit"
                className="w-full bg-[var(--color-primary)] text-white text-[0.78rem] font-bold uppercase tracking-widest py-4 mt-2 hover:bg-black transition-colors">
                SEND
              </button>
            </form>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--color-border)]">
          <div className="flex flex-wrap gap-6">
            {[...designerInfo.nav.map(n => ({ name: n.name, href: n.href })),
              { name: 'Manifesto', href: '/en/templates/OHMT013-portfolio-en/manifesto' }
            ].map(item => (
              <Link key={item.name} href={item.href}
                className="text-[12px] text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
          <span className="text-[0.75rem] text-[var(--color-text-muted)]">© 2026 Vinuspread.</span>
        </div>
      </div>
    </footer>
  );
}
