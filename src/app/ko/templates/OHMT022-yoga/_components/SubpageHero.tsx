import Image from "next/image";

type SubpageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export default function SubpageHero({ eyebrow, title, description, image, imageAlt, imagePosition = "object-center" }: SubpageHeroProps) {
  return (
    <section className="prana-sub-hero relative overflow-hidden bg-[var(--color-bg-dark)]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className={`object-cover ${imagePosition}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:px-14 md:pb-16 lg:px-20 lg:pb-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[48rem]">
            <p className="prana-sub-label font-medium tracking-[0.2em] text-white/65">{eyebrow}</p>
            <h1 className="prana-sub-display mt-6 max-w-[13ch] text-white">{title}</h1>
            <p className="prana-sub-body mt-6 max-w-xl leading-8 text-white/78">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
