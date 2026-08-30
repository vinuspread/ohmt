import { PillLink } from "../ui/PillLink";

type SuiteCardProps = {
  href: string;
  name: string;
  price: string;
  image: string;
  actionLabel?: string;
};

export function SuiteCard({
  href,
  name,
  price,
  image,
  actionLabel = "스위트 둘러보기",
}: SuiteCardProps) {
  return (
    <article className="group">
      <div className="aspect-[3/4] overflow-hidden rounded-2xl">
        <img
          src={`/templates/OHMT030-resort/${image}`}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h2 className="mt-4 text-4xl font-normal leading-[var(--leading-heading)] text-white md:text-xl md:leading-[var(--leading-body)]">
        {name}
      </h2>
      <p className="mt-1 text-sm text-white/60">{price} / 1박</p>
      <PillLink href={href} className="mt-3">
        {actionLabel}
      </PillLink>
    </article>
  );
}
