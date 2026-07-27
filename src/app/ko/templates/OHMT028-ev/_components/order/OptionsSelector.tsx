"use client";

const options = [
  { id: "autopilot",  name: "주행 보조 패키지",          desc: "도심과 고속도로에서 운전을 돕는 주행 보조 기능",        price: "580만 원" },
  { id: "interior",   name: "프리미엄 실내 패키지", desc: "열선 시트, 프리미엄 오디오, 소프트 터치 소재", price: "260만 원" },
  { id: "wheels",     name: '20인치 에어로 휠',           desc: "경량 단조 합금과 공기역학 디자인",       price: "170만 원" },
] as const;

export type OptionId = (typeof options)[number]["id"];

export function OptionsSelector({
  selected,
  onChange,
}: {
  selected: string[];
  onChange: (ids: string[]) => void;
}) {
  return (
    <section>
      <h2 className="font-michroma text-[length:var(--text-lead)] text-[var(--text)] leading-[var(--leading-heading)] tracking-[-0.02em] mb-6">
        옵션 추가
      </h2>
      <div className="space-y-0">
        {options.map((opt) => {
          const isChecked = selected.includes(opt.id);
          return (
            <label
              key={opt.id}
              className={`flex items-center gap-5 py-5 border-b cursor-pointer transition-colors duration-200 ${
                isChecked ? "border-[var(--accent)]" : "border-[var(--border)] hover:border-[var(--text-muted)]"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  onChange(
                    isChecked
                      ? selected.filter((id) => id !== opt.id)
                      : [...selected, opt.id],
                  );
                }}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                isChecked ? "bg-[var(--accent)] border-[var(--accent)]" : "border-[var(--border)]"
              }`}>
                {isChecked && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L4.5 8.5L10 3" stroke="#0E1210" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter text-sm text-[var(--text)] mb-0.5">{opt.name}</p>
                <p className="font-inter text-sm text-[var(--text-muted)]">{opt.desc}</p>
              </div>
              <span className="font-michroma text-xs text-[var(--text)] flex-shrink-0">+{opt.price}</span>
            </label>
          );
        })}
      </div>
    </section>
  );
}
