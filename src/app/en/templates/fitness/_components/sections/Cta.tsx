export function Cta() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-4">
              Experience Vitalis
            </h2>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-8 max-w-[420px]">
              Book a complimentary trial session at our flagship studio and discover what premium wellness feels like.
            </p>
            <a
              href="/en/templates/fitness/programs"
              className="inline-block bg-[var(--accent)] text-white text-[13px] font-semibold px-8 py-4 rounded-lg hover:bg-[var(--accent-light)] transition-colors tracking-wide"
            >
              Book a trial →
            </a>
          </div>
          <div
            className="aspect-[4/3] rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/templates/fitness/cta-bg.jpg')" }}
          />
        </div>
      </div>
    </section>
  );
}
