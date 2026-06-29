const basePath = "/en/templates/kids-education";

const links = {
  explore: [
    { label: "All Classes", href: `${basePath}/classes` },
    { label: "About Us", href: `${basePath}/about` },
    { label: "Testimonials", href: `${basePath}/contact` },
  ],
  forFamilies: [
    { label: "Class Schedule", href: `${basePath}/classes` },
    { label: "Enroll Now", href: `${basePath}/contact` },
    { label: "Pricing", href: `${basePath}/contact` },
    { label: "FAQ", href: `${basePath}/contact` },
  ],
  helpful: [
    { label: "Meet Our Teachers", href: `${basePath}/about` },
    { label: "Learning Philosophy", href: `${basePath}/about` },
    { label: "Contact Us", href: `${basePath}/contact` },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)]">

      {/* Top CTA strip */}
      <div className="border-b border-white/10 bg-[var(--color-cta-bg)]">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">Ready to start?</p>
            <p className="text-2xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-heading)" }}>
              Join Kids Academy Today
            </p>
          </div>
          <a
            href={`${basePath}/contact`}
            className="shrink-0 inline-block bg-[var(--color-primary)] rounded-full px-7 py-3.5 text-sm font-bold hover:brightness-110 active:scale-[0.97] transition-all duration-150"
          >
            Start Learning →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a href={basePath}>
              <h3
                className="text-3xl font-bold text-white leading-none mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                OHMT
              </h3>
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Where learning meets play. Inspiring the next generation of creators, thinkers, and explorers through joyful, creative education.
            </p>
            <div className="flex gap-3 mt-6">
              {["IG", "YT", "TK"].map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[0.6rem] font-bold text-white/40 cursor-pointer [@media(hover:hover)]:hover:border-[var(--color-primary)] [@media(hover:hover)]:hover:text-[var(--color-primary)] transition-colors duration-150"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-4">Explore</h4>
            <ul className="space-y-3">
              {links.explore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 [@media(hover:hover)]:hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Families */}
          <div>
            <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-4">For Families</h4>
            <ul className="space-y-3">
              {links.forFamilies.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 [@media(hover:hover)]:hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Info */}
          <div>
            <h4 className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-4">Helpful Info</h4>
            <ul className="space-y-3">
              {links.helpful.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/60 [@media(hover:hover)]:hover:text-white transition-colors duration-150">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-white/40">
              <p>hello@ohmytemplate.com</p>
              <p className="mt-1">Seoul, South Korea</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.65rem] font-bold uppercase tracking-wider text-white/30">
          <p>© 2026 Oh My Template.</p>
          <div className="flex gap-6">
            <a href="#" className="[@media(hover:hover)]:hover:text-white transition-colors duration-150">Licensing</a>
            <a href="#" className="[@media(hover:hover)]:hover:text-white transition-colors duration-150">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
