import Link from 'next/link';

const navLinks = [
  { href: '/ko/templates/OHMT003-exhibition/about', label: '소개' },
  { href: '/ko/templates/OHMT003-exhibition/exhibitions', label: '전시' },
  { href: '/ko/templates/OHMT003-exhibition/events', label: '이벤트' },
  { href: '/ko/templates/OHMT003-exhibition/contact', label: '문의' },
];

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] pt-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <nav className="flex gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[12px] font-body font-semibold text-white/60 hover:text-white transition-colors duration-200 tracking-tight">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/15 mt-12" />

        <div className="flex justify-between items-center mt-8">
          <p className="text-[14px] text-white/40">&copy; 2026 OHMT.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4l6 8-6 8h3l5-6 5 6h4l-6-8 6-8h-3l-5 6-5-6H4z" /></svg>
            </a>
          </div>
        </div>
        <div className="pb-12" />
      </div>
    </footer>
  );
};
