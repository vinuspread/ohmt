"use client";

const colors = [
  { id: "midnight-black", name: "Midnight Black", hex: "#1A1A1A", image: "color-black.jpg"  },
  { id: "arctic-white",   name: "Arctic White",   hex: "#F0EFEA", image: "color-white.jpg"  },
  { id: "storm-grey",     name: "Storm Grey",     hex: "#6B7280", image: "color-grey.jpg"   },
  { id: "volt-green",     name: "Volt Green",     hex: "#C8F135", image: "color-green.jpg"  },
  { id: "crimson-red",    name: "Crimson Red",    hex: "#DC2626", image: "color-red.jpg"    },
] as const;

export type ColorId = (typeof colors)[number]["id"];

export function ColorSelector({
  selected,
  onChange,
}: {
  selected: ColorId;
  onChange: (id: ColorId) => void;
}) {
  const activeColor = colors.find((c) => c.id === selected)!;

  return (
    <section>
      <p className="font-inter text-[11px] tracking-[0.12em] text-[var(--text-muted)] uppercase mb-2">Step 02</p>
      <h2 className="font-michroma text-[clamp(20px,2.5vw,32px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em] mb-8">
        Pick your color
      </h2>

      <div className="aspect-[16/7] rounded-xl overflow-hidden bg-[var(--bg-alt)] mb-6">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url('/templates/ev/${activeColor.image}')` }}
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-3 flex-wrap flex-1">
          {colors.map((color) => {
            const isActive = selected === color.id;
            return (
              <button
                key={color.id}
                onClick={() => onChange(color.id)}
                title={color.name}
                className={`w-9 h-9 rounded-full border-2 transition-all duration-200 ${
                  isActive
                    ? "border-[var(--accent)] scale-110"
                    : "border-transparent hover:scale-105"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            );
          })}
        </div>
        <p className="font-michroma text-[14px] text-[var(--text)] whitespace-nowrap">
          {activeColor.name}
        </p>
      </div>
    </section>
  );
}
