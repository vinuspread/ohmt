const specCategories = [
  { category: "Performance", specs: [
    { label: "Motor Type", value: "Permanent Magnet AC" },
    { label: "Peak Power", value: "120 kW (Urban+)" },
    { label: "Top Speed", value: "160 km/h" },
    { label: "0-100 km/h", value: "7.9 s" },
  ]},
  { category: "Range & Charging", specs: [
    { label: "City Range", value: "280 km (WLTP)" },
    { label: "Fast Charge (DC)", value: "0→80% in 30 min" },
    { label: "Home Charge (AC)", value: "0→100% in 6 hrs" },
    { label: "Charge Port", value: "CCS2 + Type 2" },
  ]},
  { category: "Dimensions", specs: [
    { label: "Length", value: "3,610 mm" },
    { label: "Width", value: "1,680 mm" },
    { label: "Height", value: "1,530 mm" },
    { label: "Wheelbase", value: "2,340 mm" },
    { label: "Cargo Volume", value: "185 L" },
  ]},
  { category: "Technology", specs: [
    { label: "Display", value: "10.25\" Touchscreen" },
    { label: "OTA Updates", value: "Wireless, automatic" },
    { label: "Smart Parking", value: "Included (Urban+, Sport)" },
    { label: "Driver Assist", value: "Level 2 (all trims)" },
  ]},
];

export function TechSpecs() {
  return (
    <section className="bg-[var(--light-bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <h2 className="font-michroma text-[clamp(28px,3vw,48px)] text-[var(--text-on-light)] leading-[0.93] tracking-[-0.03em] mb-16">
          Detailed Specs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {specCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-inter text-[11px] font-medium tracking-[0.08em] text-[var(--text-muted-light)] uppercase mb-6">
                {cat.category}
              </h3>
              <div>
                {cat.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b border-[var(--border-light)] py-3.5">
                    <span className="font-inter text-[13px] text-[var(--text-muted-light)]">{spec.label}</span>
                    <span className="font-inter font-medium text-[13px] text-[var(--text-on-light)]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
