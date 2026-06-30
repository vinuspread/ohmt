"use client";

const trims = [
  { id: "standard",    name: "Standard",    price: 24900 },
  { id: "longrange",   name: "Long Range",  price: 29900 },
  { id: "performance", name: "Performance", price: 35900 },
] as const;

const options = [
  { id: "autopilot", name: "Full Self-Driving",     price: 4900 },
  { id: "interior",  name: "Premium Interior Pack", price: 2200 },
  { id: "wheels",    name: '20" Aero Wheels',       price: 1400 },
] as const;

export function OrderSummary({
  selectedTrim,
  selectedOptions,
}: {
  selectedTrim: string;
  selectedOptions: string[];
}) {
  const trim = trims.find((t) => t.id === selectedTrim)!;
  const optTotal = selectedOptions.reduce(
    (sum, id) => sum + (options.find((o) => o.id === id)?.price ?? 0),
    0
  );
  const vehicleTotal = trim.price + optTotal;
  const deposit = 300;

  return (
    <section className="border-t border-[var(--border)] pt-10">
      <p className="font-michroma text-[16px] text-[var(--text)] mb-8">Order summary</p>

      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-baseline gap-4">
          <span className="font-inter text-[13px] text-[var(--text-muted)]">NUBI {trim.name}</span>
          <span className="font-inter text-[13px] text-[var(--text)]">${trim.price.toLocaleString()}</span>
        </div>
        {selectedOptions.map((id) => {
          const opt = options.find((o) => o.id === id)!;
          return (
            <div key={id} className="flex justify-between items-baseline gap-4">
              <span className="font-inter text-[13px] text-[var(--text-muted)]">{opt.name}</span>
              <span className="font-inter text-[13px] text-[var(--text)]">+${opt.price.toLocaleString()}</span>
            </div>
          );
        })}
      </div>

      <div className="border-t border-[var(--border)] pt-6 space-y-3">
        <div className="flex justify-between items-baseline gap-4">
          <span className="font-inter text-[13px] text-[var(--text-muted)]">Vehicle total</span>
          <span className="font-michroma text-[24px] text-[var(--text)]">
            ${vehicleTotal.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <span className="font-inter text-[13px] text-[var(--text-muted)]">Reservation deposit</span>
          <span className="font-inter text-[13px] text-[var(--accent)]">${deposit}</span>
        </div>
        <p className="font-inter text-[14px] text-[var(--text-muted)] leading-relaxed pt-1">
          Deposit is fully refundable and applied toward the final purchase price.
        </p>
      </div>
    </section>
  );
}
