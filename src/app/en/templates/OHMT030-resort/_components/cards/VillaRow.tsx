import { PillLink } from "../ui/PillLink";

type VillaRowProps = {
  name: string;
  description: string;
  href: string;
};

export function VillaRow({ name, description, href }: VillaRowProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 border-t border-white/20 py-6 md:flex-row md:items-center">
      <div className="min-w-0 flex-1 pr-4">
        <h3 className="mb-2 text-xl font-medium leading-[var(--leading-body)] text-white">
          {name}
        </h3>
        <p className="text-base leading-[var(--leading-body)] text-white/60">
          {description}
        </p>
      </div>
      <div className="shrink-0">
        <PillLink href={href} tone="muted" className="px-0 py-0 text-base">
          See More
        </PillLink>
      </div>
    </div>
  );
}
