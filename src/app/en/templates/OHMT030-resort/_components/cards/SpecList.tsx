type Spec = {
  label: string;
  value: string;
};

type SpecListProps = {
  items: Spec[];
};

export function SpecList({ items }: SpecListProps) {
  return (
    <div className="border-t border-white/10">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`flex justify-between py-4 ${
            index < items.length - 1 ? "border-b border-white/10" : ""
          }`}
        >
          <span className="text-sm font-normal uppercase tracking-[0.08em] text-white/45">
            {item.label}
          </span>
          <span className="text-sm font-normal text-white">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
