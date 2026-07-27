import Image from 'next/image'

const hours = [
  { day: '목요일', hours: '09:00 ~ 17:00', status: '운영' },
  { day: '금요일', hours: '09:00 ~ 17:00', status: '운영' },
  { day: '토요일', hours: '09:00 ~ 17:00', status: '운영' },
  { day: '일요일', hours: '09:00 ~ 16:00', status: '운영' },
  { day: '월요일~수요일', hours: '휴무', status: '휴무' },
]

const seasonalCalendar = [
  { season: '봄(5월~6월)', crops: '딸기, 오디, 봄꿀, 어린 시금치', status: '직판장' },
  { season: '여름(7월~8월)', crops: '복숭아, 체리, 블랙베리, 자두', status: '직판장·수확 체험' },
  { season: '가을(9월~11월)', crops: '토종 사과, 착즙 주스, 호박, 배', status: '직판장·수확 체험' },
  { season: '겨울(12월~4월)', crops: '과일잼, 사과즙, 말린 과일 상자', status: '온라인 배송' },
]

export default function VisitPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Title & Introduction */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="ledger-num text-xs font-bold bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[var(--color-accent)] rounded">
            [ 01 ]
          </span>
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">과수원 방문 안내</span>
        </div>
        <h1 className="copy-heading mt-8 max-w-4xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] text-[var(--color-text)] sm:text-5xl">
          과수원 입구 직판장에서
          <br className="hidden sm:block" /> 제철 과일을 만나보세요.
        </h1>
        <p className="copy-body max-w-4xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
          직판장은 과수원 입구에 있습니다. 온라인으로 주문한 상품을 찾아가거나, 그날 수확한 과일을 현장에서 구매할 수 있습니다.
          <br className="hidden sm:block" /> 수확 체험 기간에는 안내에 따라 과수원 일부 구역을 둘러볼 수 있습니다.
        </p>
      </section>

      {/* Banner Photo */}
      <section className="relative aspect-[21/9] w-full overflow-hidden rounded border border-[var(--color-border)]">
        <Image
          src="/templates/OHMT036-amber-grove/marquee-soil.jpg"
          alt="앰버 그로브의 흙과 나무 사이 풋거름 작물"
          fill
          priority
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover"
        />
      </section>

      {/* Hours and Location */}
      <section className="border-t border-[var(--color-border)] pt-12 space-y-8">
        <div className="space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 02 / 위치와 운영시간 ]</span>
          <h2 className="copy-heading font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-4xl">과수원 직판장</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Location */}
          <div className="space-y-4">
            <span className="ledger-num text-xs font-bold text-[var(--color-text-muted)] block">[ 과수원 주소 ]</span>
            <div className="text-sm leading-relaxed text-[var(--color-text-muted)] space-y-4">
              <div>
                <p className="font-semibold text-[var(--color-text)]">앰버 그로브 과수원</p>
                <p>경북 상주시 외남면<br />과수원길 148</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[var(--color-text)]">연락처</p>
                <p>전화 054-533-0891</p>
                <p>harvest@ambergrove.test</p>
              </div>
            </div>
          </div>

          {/* Column 2: Pickup Directions */}
          <div className="space-y-4">
            <span className="ledger-num text-xs font-bold text-[var(--color-text-muted)] block">[ 방문 수령 안내 ]</span>
            <p className="copy-body max-w-sm text-sm leading-relaxed text-[var(--color-text-muted)]">
              빨간 창고를 지나 ‘직판장’ 표지판을 따라오면 방문 수령 구역이 나옵니다.
              <br /> 도착 후 포장동 직원에게 주문 번호를 보여주세요.
            </p>
          </div>

          {/* Column 3: Operating Hours */}
          <div className="space-y-4">
            <span className="ledger-num text-xs font-bold text-[var(--color-accent)] block">[ 직판장 운영시간 ]</span>
            <div className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between items-center py-2 text-sm">
                  <span className="font-semibold text-[var(--color-text)]">{item.day}</span>
                  <div className="flex gap-3 items-center">
                    <span className="ledger-num text-xs text-[var(--color-text-muted)]">{item.hours}</span>
                    <span className={`ledger-num text-xs px-2 py-0.5 rounded font-medium ${item.status === '운영' ? 'bg-[var(--color-accent-light)] text-[var(--color-accent)]' : 'bg-red-50 text-red-700'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Crop Calendar */}
      <section className="border-t border-[var(--color-border)] pt-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-8">
            <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 03 / 수확 달력 ]</span>
            <h2 className="copy-heading font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-4xl">계절별 수확 품목</h2>
          </div>
          <p className="copy-body max-w-lg pb-1 text-sm leading-6 text-[var(--color-text-muted)]">
            수확 품목과 체험 일정은 날씨와 생육 상태에 따라 달라집니다.
            <br /> 방문 전에 이번 주 수확 안내를 확인해 주세요.
          </p>
        </div>

        <div className="overflow-x-auto border border-[var(--color-border)] rounded">
          <table className="min-w-full divide-y divide-[var(--color-border)] text-left text-sm">
            <thead className="bg-[var(--color-bg-secondary)]">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold text-[var(--color-text)]">시기</th>
                <th scope="col" className="px-6 py-4 font-bold text-[var(--color-text)]">수확 품목</th>
                <th scope="col" className="px-6 py-4 font-bold text-[var(--color-text)]">판매·체험</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] bg-white">
              {seasonalCalendar.map((item) => (
                <tr key={item.season}>
                  <td className="px-6 py-4 font-semibold text-[var(--color-text)] whitespace-nowrap">{item.season}</td>
                  <td className="px-6 py-4 text-[var(--color-text-muted)]">{item.crops}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="ledger-num text-xs bg-[var(--color-bg-secondary)] px-2.5 py-1 rounded text-[var(--color-accent)] font-medium">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Wholesale */}
      <section className="border-t border-[var(--color-border)] pt-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-8">
            <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 04 / 도매 거래 ]</span>
            <h2 className="copy-heading font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-4xl">식당·매장 납품 안내</h2>
          </div>
          <p className="copy-body max-w-lg pb-1 text-sm leading-6 text-[var(--color-text-muted)]">
            복숭아와 자두 같은 제철 과일, 착즙용 사과,
            <br className="hidden xl:block" /> 과일잼을 일부 식당과 지역 청과점에 직접 납품합니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-text)] leading-[var(--leading-body)]">사업자 거래 안내</h3>
            <p className="copy-body max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)]">
              유기농 인증 과일을 로트 단위로 구매하려는 식당, 청과점, 음료 제조업체는 도매 담당 이메일로 문의해 주세요.
              <br className="hidden sm:block" /> 현재 출고 가능한 품목과 수량을 정리한 주간 재고표를 보내드립니다.
            </p>
          </div>
          <div className="flex flex-col justify-between p-6 border border-[var(--color-border)] rounded bg-white space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-[var(--color-border)] pb-3">
              <span className="ledger-num text-xs text-[var(--color-text-muted)] font-semibold">이메일</span>
              <strong className="text-[var(--color-text)]">wholesale@ambergrove.test</strong>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-[var(--color-border)] pb-3">
              <span className="ledger-num text-xs text-[var(--color-text-muted)] font-semibold">회신</span>
              <span className="ledger-num text-xs font-medium text-[var(--color-accent)]">영업일 기준 24시간 내</span>
            </div>
            <a href="mailto:wholesale@ambergrove.test" className="inline-flex items-center justify-center rounded bg-[var(--color-bg-dark)] px-5 py-2.5 text-xs font-bold text-[var(--color-text-contrast)] transition-colors duration-200 hover:opacity-90">
              주간 재고표 요청
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
