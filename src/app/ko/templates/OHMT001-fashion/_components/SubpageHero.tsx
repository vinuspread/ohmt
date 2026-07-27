"use client";

type SubpageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  align?: "center" | "left";
};

export function SubpageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  align = "center",
}: SubpageHeroProps) {
  const isLeft = align === "left";

  return (
    <section className="relative flex h-[42vh] min-h-[360px] items-center overflow-hidden pt-14 md:h-[48vh] md:min-h-[460px] md:pt-20">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover brightness-[0.78] contrast-[1.04]"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/34 via-black/6 to-black/38" />
      <div
        className={`relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-6 md:px-12 ${
          isLeft ? "items-start text-left" : "items-center text-center"
        }`}
      >
        <span className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-white/62">
          {eyebrow}
        </span>
        <h1
          className="max-w-full whitespace-nowrap text-4xl font-bold leading-[var(--leading-heading)] tracking-[-0.035em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.25)] break-keep sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-bodoni)" }}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-xl text-sm leading-[var(--leading-body)] text-white/74 break-keep text-pretty md:text-sm">
            {description.split(". ").map((sentence, index, sentences) => (
              <span key={sentence} className="block">
                {sentence}{index < sentences.length - 1 ? "." : ""}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
