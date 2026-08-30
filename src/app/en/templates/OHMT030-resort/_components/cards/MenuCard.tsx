type MenuCardProps = {
  category: string;
  name: string;
  desc: string;
  price: string;
  image: string;
};

export function MenuCard({
  category,
  name,
  desc,
  price,
  image,
}: MenuCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.08]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={`/templates/OHMT030-resort/${image}`}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-white/40">
            {category}
          </span>
          <span className="ml-auto text-sm font-semibold text-[var(--accent)]">
            {price}
          </span>
        </div>
        <h3 className="mb-1 text-base font-medium leading-[1.05] text-white">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-white/50">{desc}</p>
      </div>
    </div>
  );
}
