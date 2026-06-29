export function Consulting({ variant = "home" }: { variant?: "home" | "about" }) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-[var(--accent)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay opacity-20"
        style={{ backgroundImage: "url('/templates/fitness/cta-bg.jpg')" }}
      />
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        {variant === "home" ? (
          <>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-white leading-[1.15] tracking-tight mb-4">
              Transform your space into a premium wellness destination.
            </h2>
            <p className="text-[15px] text-white/70 max-w-[560px] mx-auto mb-10 leading-relaxed">
              From concept to operation — we partner with you at every step to create a <span className="whitespace-nowrap">world-class</span> wellness experience.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-white leading-[1.15] tracking-tight mb-4">
              Ready to write the next chapter of wellness?
            </h2>
            <p className="text-[15px] text-white/70 max-w-[560px] mx-auto mb-10 leading-relaxed">
              Join the partners who trust us to elevate their brand through exceptional wellness experiences.
            </p>
          </>
        )}
        <a
          href="/en/templates/fitness/consignment"
          className="inline-block border-2 border-white text-white text-[13px] font-semibold px-8 py-3.5 rounded-lg hover:bg-white hover:text-[var(--accent)] transition-all tracking-wide"
        >
          Request a consultation →
        </a>
      </div>
    </section>
  );
}
