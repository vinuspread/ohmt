"use client";

const trims = [
  { id: "standard",    name: "Standard Range",  price: 52000 },
  { id: "longrange",   name: "Long Range",       price: 67000 },
  { id: "performance", name: "Performance",      price: 84000 },
] as const;

const options = [
  { id: "autopilot",  name: "완전 자율주행",         price: 8000  },
  { id: "interior",   name: "프리미엄 인테리어 패키지", price: 3500  },
  { id: "wheels",     name: '20" 에어로 휠',          price: 2200  },
] as const;

export function OrderSummary({
  selectedTrim,
  selectedOptions,
}: {
  selectedTrim: string;
  selectedOptions: string[];
}) {
  const trim = trims.find((t) => t.id === selectedTrim)!;
  const total = trim.price + selectedOptions.reduce(
    (sum, id) => sum + (options.find((o) => o.id === id)?.price ?? 0),
    0
  );
  const deposit = 500;

  return (
    <section>
      <h2 className="font-michroma font-bold text-[20px] text-[var(--text)] mb-6">
        주문 요약
      </h2>
      <div className="bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl p-6 md:p-8">
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-inter text-[13px] text-[var(--text-muted)]">트림</span>
            <span className="font-inter text-[13px] text-[var(--text)]">{trim.name}</span>
          </div>
          {selectedOptions.map((id) => {
            const opt = options.find((o) => o.id === id)!;
            return (
              <div key={id} className="flex justify-between items-center">
                <span className="font-inter text-[13px] text-[var(--text-muted)]">{opt.name}</span>
                <span className="font-inter text-[13px] text-[var(--text)]">+${opt.price.toLocaleString()}</span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-[var(--border)] pt-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-inter text-[13px] text-[var(--text-muted)]">차량 합계</span>
            <span className="font-michroma font-bold text-[22px] text-[var(--text)]">
              ${total.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-inter text-[13px] text-[var(--text-muted)]">예약금</span>
            <span className="font-inter text-[13px] text-[var(--text)]">${deposit.toLocaleString()}</span>
          </div>
          <p className="font-inter text-[14px] text-[var(--text-muted)] mt-2">
            예약금은 최종 구매 가격에서 차감됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
