"use client";

const colors = [
  { id: "midnight-black",  name: "미드나이트 블랙",  hex: "#1A1A1A", image: "color-black.jpg"  },
  { id: "arctic-white",    name: "아틱 화이트",      hex: "#F0EFEA", image: "color-white.jpg"  },
  { id: "storm-grey",      name: "스톰 그레이",      hex: "#6B7280", image: "color-grey.jpg"   },
  { id: "volt-green",      name: "볼트 그린",        hex: "#C8F135", image: "color-green.jpg"  },
  { id: "crimson-red",     name: "크림슨 레드",      hex: "#DC2626", image: "color-red.jpg"    },
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
      <h2 className="font-michroma font-bold text-[20px] text-[var(--text)] mb-6">
        2. 색상 선택
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex flex-wrap gap-3 mb-6">
            {colors.map((color) => {
              const isActive = selected === color.id;
              return (
                <button
                  key={color.id}
                  onClick={() => onChange(color.id)}
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                    isActive
                      ? "border-[var(--accent)] scale-110"
                      : "border-transparent hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              );
            })}
          </div>
          <p className="font-michroma font-bold text-[18px] text-[var(--text)]">
            {activeColor.name}
          </p>
        </div>

        <div className="h-[240px] rounded-2xl overflow-hidden bg-[var(--bg-alt)]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/templates/ev/${activeColor.image}')` }}
          />
        </div>
      </div>
    </section>
  );
}
