const specCategories = [
  { category: "성능", specs: [
    { label: "모터 타입", value: "Permanent Magnet AC" },
    { label: "최대 출력", value: "120 kW (Urban+)" },
    { label: "최고 속도", value: "160 km/h" },
    { label: "0-100 km/h", value: "7.9초" },
  ]},
  { category: "주행 및 충전", specs: [
    { label: "도시 주행거리", value: "280 km (WLTP)" },
    { label: "급속 충전 (DC)", value: "0→80% 30분" },
    { label: "가정용 충전 (AC)", value: "0→100% 6시간" },
    { label: "충전 포트", value: "CCS2 + Type 2" },
  ]},
  { category: "제원", specs: [
    { label: "전장", value: "3,610 mm" },
    { label: "전폭", value: "1,680 mm" },
    { label: "전고", value: "1,530 mm" },
    { label: "휠베이스", value: "2,340 mm" },
    { label: "적재 공간", value: "185 L" },
  ]},
  { category: "기술", specs: [
    { label: "디스플레이", value: "10.25\" 터치스크린" },
    { label: "OTA 업데이트", value: "무선 자동 업데이트" },
    { label: "스마트 주차", value: "Urban+, Sport 기본" },
    { label: "운전자 지원", value: "레벨 2 (전 트림)" },
  ]},
];

export function TechSpecs() {
  return (
    <section className="bg-[var(--light-bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <h2 className="font-michroma text-[clamp(28px,3vw,48px)] text-[var(--text-on-light)] leading-[0.93] tracking-[-0.03em] mb-16">
          상세 사양
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
