import type { ReactNode } from "react";

type SubpageHeroProps = {
  title: string;
  image: string;
  alt: string;
  children: ReactNode;
  eyebrow?: string;
  price?: string;
  detail?: boolean;
  overlay?: string;
};

export function SubpageHero({
  title,
  image,
  alt,
  children,
  eyebrow,
  price,
  detail = false,
  overlay = "bg-gradient-to-b from-black/70 via-black/30 to-transparent",
}: SubpageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        detail
          ? "h-[var(--subpage-detail-hero-height-mobile)] md:h-[var(--subpage-detail-hero-height-desktop)]"
          : "h-[var(--subpage-hero-height)]"
      }`}
    >
      <img
        src={`/templates/OHMT030-resort/${image}`}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="resort-container absolute inset-x-0 bottom-12 z-10">
        <div className={detail ? "flex max-w-[700px] flex-col gap-3 md:gap-6" : "flex max-w-[700px] flex-col gap-4 md:gap-6"}>
          {eyebrow ? (
            <p className="text-xs font-medium leading-[var(--leading-heading)] text-white">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`font-semibold text-white !tracking-normal md:tracking-[-0.02em] ${
              detail
                ? "!text-6xl !leading-[var(--subpage-hero-heading-leading-mobile)] md:!text-9xl md:!leading-[var(--subpage-hero-heading-leading-desktop)]"
                : "!text-6xl !leading-[var(--subpage-hero-heading-leading-mobile)] md:!text-9xl md:!leading-[var(--subpage-hero-heading-leading-desktop)]"
            }`}
          >
            {title.split("\n").map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </h1>
          {price ? (
            <p className="text-base leading-[var(--leading-heading)] text-white md:text-2xl">
              {price}
            </p>
          ) : (
            <p className="resort-body max-w-[700px] text-xl font-normal text-white/70 md:text-2xl">
              {children}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
