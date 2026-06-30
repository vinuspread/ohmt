"use client";

const trims = [
  { id: "standard",    name: "Standard Range",  range: "280 km", power: "215 kW", price: "2,890만 원", tag: "" },
  { id: "longrange",   name: "Long Range",       range: "380 km", power: "260 kW", price: "3,350만 원", tag: "가장 많이 선택" },
  { id: "performance", name: "Performance",      range: "340 km", power: "320 kW", price: "4,050만 원", tag: "" },
] as const;

export type TrimId = (typeof trims)[number]["id"];

export function TrimSelector({
  selected,
  onChange,
}: {
  selected: TrimId;
  onChange: (id: TrimId) => void;
}) {
  return (
    <section>
      <h2 className="font-michroma text-[clamp(18px,2vw,28px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em] mb-6">
        트림 선택
      </h2>
      <div className="space-y-0">
        {trims.map((trim) => {
          const isActive = selected === trim.id;
          return (
            <button
              key={trim.id}
              onClick={() => onChange(trim.id)}
              className={`w-full text-left flex items-center justify-between px-0 py-5 border-b transition-colors duration-200 ${
                isActive ? "border-[var(--accent)]" : "border-[var(--border)] hover:border-[var(--text-muted)]"
              }`}
            >
              <div className="flex items-center gap-5">
                <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors ${
                  isActive ? "border-[var(--accent)] bg-[var(--accent)]" : "border-[var(--border)]"
                }`} />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`font-michroma text-[15px] leading-none ${isActive ? "text-[var(--accent)]" : "text-[var(--text)]"}`}>
                      {trim.name}
                    </span>
                    {trim.tag && (
                      <span className="font-inter text-[10px] tracking-[0.06em] text-[var(--accent)] border border-[var(--accent)] rounded-full px-2 py-0.5">
                        {trim.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <span className="font-inter text-[12px] text-[var(--text-muted)]">{trim.range}</span>
                    <span className="font-inter text-[12px] text-[var(--text-muted)]">{trim.power}</span>
                  </div>
                </div>
              </div>
              <span className="font-michroma text-[16px] text-[var(--text)] flex-shrink-0">{trim.price}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
