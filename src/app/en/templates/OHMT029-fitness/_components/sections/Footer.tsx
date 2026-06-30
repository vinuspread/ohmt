const base = "/en/templates/OHMT029-fitness";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <p className="font-['Montserrat'] font-bold text-xl text-[var(--accent)] mb-3">OHMT</p>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
              Your wellness. Our craft.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium text-[var(--text-muted)] tracking-[0.1em] uppercase mb-5">Quick links</p>
            <ul className="space-y-3">
              <li><a href={`${base}/programs`} className="text-[13px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">Programs</a></li>
              <li><a href={`${base}/consignment`} className="text-[13px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">Consignment</a></li>
              <li><a href={`${base}/about`} className="text-[13px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">About</a></li>
              <li><a href={`${base}/about#contact`} className="text-[13px] text-[var(--text)] hover:text-[var(--accent)] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium text-[var(--text-muted)] tracking-[0.1em] uppercase mb-5">Contact</p>
            <ul className="space-y-3">
              <li className="text-[13px] text-[var(--text)]">+82 2-456-7890</li>
              <li className="text-[13px] text-[var(--text-muted)]">hello@vitaliswellness.com</li>
              <li className="text-[13px] text-[var(--text-muted)]">45 Dosan-daero, Gangnam-gu<br />Seoul, South Korea</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium text-[var(--text-muted)] tracking-[0.1em] uppercase mb-5">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white border border-[var(--border)] rounded-lg px-4 py-2.5 text-[13px] text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button className="bg-[var(--accent)] text-white text-[12px] font-semibold px-4 py-2.5 rounded-lg hover:bg-[var(--accent-light)] transition-colors tracking-wide">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-12 mt-12 border-t border-[var(--border)]">
          <p className="text-[14px] text-[var(--text-muted)]">© 2026 Oh My Template. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
