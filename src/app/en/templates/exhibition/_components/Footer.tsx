import Link from 'next/link';

const navLinks = [
  { href: '/en/templates/OHMT005-exhibition-en/about', label: 'About' },
  { href: '/en/templates/OHMT005-exhibition-en/exhibitions', label: 'Exhibitions' },
  { href: '/en/templates/OHMT005-exhibition-en/events', label: 'Events' },
  { href: '/en/templates/OHMT005-exhibition-en/contact', label: 'Contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] pt-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <nav className="flex gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] font-body font-semibold uppercase tracking-[0.12em] text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/15 mt-12" />

        <div className="flex justify-between items-center mt-8">
          <p className="text-[11px] text-white/40">&copy; 2026 Oh My Template.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4l6 8-6 8h3l5-6 5 6h4l-6-8 6-8h-3l-5 6-5-6H4z" />
              </svg>
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pb-12" />
      </div>
    </footer>
  );
};
