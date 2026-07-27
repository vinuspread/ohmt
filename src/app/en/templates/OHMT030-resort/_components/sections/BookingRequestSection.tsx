import { PillLink } from "../ui/PillLink";

type BookingRequestSectionProps = {
  backHref: string;
  title?: string;
  description?: string;
  emailPlaceholder?: string;
  datePlaceholder?: string;
  buttonLabel?: string;
  backLabel?: string;
  locale?: string;
};

export function BookingRequestSection({
  backHref,
  title = "Request Your Stay.",
  description = "Availability confirmed within 24 hours.",
  emailPlaceholder = "Your email",
  datePlaceholder = "Check in",
  buttonLabel = "Submit Request",
  backLabel = "Back to Villas",
  locale = "en",
}: BookingRequestSectionProps) {
  return (
    <section
      className="py-16 text-center md:py-32"
      style={{ backgroundColor: "var(--bg-dark)" }}
    >
      <h2 className="resort-heading mb-3 text-4xl font-normal tracking-[-0.02em] text-white">
        {title}
      </h2>
      <p className="mb-12 text-sm text-white/40">{description}</p>
      <div className="mx-auto max-w-[600px] px-6 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder={emailPlaceholder}
            className="flex-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base text-white outline-none transition-all placeholder-white/40 focus:border-white/60"
          />
          <input
            type="date"
            lang={locale}
            placeholder={datePlaceholder}
            className="flex-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-base text-white outline-none transition-all focus:border-white/60"
          />
        </div>
        <button className="mt-6 rounded-full bg-[var(--accent)] px-9 py-3 text-base font-medium text-[var(--text-contrast)] transition-all hover:bg-[var(--accent-hover)]">
          {buttonLabel}
        </button>
      </div>
      <PillLink href={backHref} direction="left" tone="muted" className="mt-12">
        {backLabel}
      </PillLink>
    </section>
  );
}
