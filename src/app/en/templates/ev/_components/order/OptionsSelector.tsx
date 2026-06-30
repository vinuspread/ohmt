"use client";

const options = [
  { id: "autopilot", name: "Full Self-Driving",     desc: "Advanced autopilot for urban and highway driving",  price: 4900 },
  { id: "interior",  name: "Premium Interior Pack", desc: "Heated seats, premium sound, soft-touch surfaces",  price: 2200 },
  { id: "wheels",    name: '20" Aero Wheels',       desc: "Lightweight forged alloy with enhanced aerodynamics", price: 1400 },
] as const;

export type OptionId = (typeof options)[number]["id"];

export function OptionsSelector({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (ids: string[]) => void;
}) {
  const toggle = (id: string) => {
    onChange(
      selected.includes(id)
        ? selected.filter((s) => s !== id)
        : [...selected, id]
    );
  };

  return (
    <section>
      <h2 className="font-michroma text-[clamp(18px,2vw,28px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em] mb-6">
        Add options
      </h2>
      <div className="space-y-0">
        {options.map((opt) => {
          const isChecked = selected.includes(opt.id);
          return (
            <label
              key={opt.id}
              className={`flex items-center gap-5 py-5 border-b cursor-pointer transition-colors duration-200 ${
                isChecked
                  ? "border-[var(--accent)]"
                  : "border-[var(--border)] hover:border-[var(--text-muted)]"
              }`}
            >
              <div
                className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                  isChecked
                    ? "bg-[var(--accent)] border-[var(--accent)]"
                    : "border-[var(--border)]"
                }`}
              >
                {isChecked && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L4.5 8.5L10 3" stroke="#0E1210" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter text-[14px] text-[var(--text)] mb-0.5">{opt.name}</p>
                <p className="font-inter text-[14px] text-[var(--text-muted)]">{opt.desc}</p>
              </div>
              <span className="font-michroma text-[13px] text-[var(--text)] flex-shrink-0">
                +${opt.price.toLocaleString()}
              </span>
            </label>
          );
        })}
      </div>
    </section>
  );
}
