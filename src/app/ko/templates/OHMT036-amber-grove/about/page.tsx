import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT036-amber-grove'

const principles = [
  {
    title: '제대로 익을 때까지 기다립니다',
    label: '제철에 맞춘 수확',
    text: '판매 일정은 달력보다 작물의 상태를 기준으로 정합니다. 날씨와 토양, 익은 정도를 살펴 수확하고 출하를 서두르지 않습니다. 제철에 충분히 익은 과일만 선별해 보내드립니다.',
  },
  {
    title: '건강한 흙에서 시작',
    label: '흙을 돌보는 재배 방식',
    text: '풋거름 작물과 퇴비로 흙의 힘을 보충하고, 잡초는 필요한 만큼 직접 관리합니다. 합성 자재 사용을 줄이고 지역 환경에 맞는 방식으로 나무가 건강하게 자랄 토양을 가꿉니다.',
  },
  {
    title: '수확한 날 바로 선별·포장',
    label: '과수원에서 바로 선별·포장',
    text: '수확한 과일은 과수원 안 포장동에서 바로 선별하고 포장합니다. 상자에는 수확 날짜와 구역, 품종, 권장 섭취 시기를 적어 보냅니다. 어떤 과일이 언제 수확되고 출고됐는지 확인할 수 있습니다.',
  },
]

const timeline = [
  { year: '1984', title: '길가의 작은 노점', text: '김태석·정은주 부부가 길가 평상에 직접 기른 복숭아를 내놓으며 과수원의 첫걸음을 시작했습니다.' },
  { year: '1998', title: '유기농 재배의 시작', text: '합성 자재 사용을 줄이고 농장 안에 퇴비장을 마련했습니다. 풋거름 작물을 심으며 토양을 관리하는 재배 방식으로 바꾸기 시작했습니다.' },
  { year: '2008', title: '자체 포장동 마련', text: '수확한 열매를 과수원에서 바로 선별하고 포장할 수 있도록 농장 안에 포장동을 지었습니다.' },
  { year: '2026', title: '3대째 이어지는 과수원', text: '현재는 손녀 김하람이 과수원을 이어 운영합니다. 수확 시기와 선별, 포장 기준도 가족이 함께 지켜 온 방식대로 관리합니다.' },
]

const certifications = [
  {
    name: '유기농산물 인증',
    agency: '국립농산물품질관리원',
    code: '제10-4-982호',
  },
  {
    name: '저탄소 농축산물 인증',
    agency: '농림축산식품부',
    code: '제R-2044호',
  },
  {
    name: 'GAP 우수관리인증',
    agency: '국립농산물품질관리원',
    code: '제V1-2026-036호',
  },
]

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Title & Introduction */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="ledger-num text-xs font-bold bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[var(--color-accent)] rounded">
            [ 01 ]
          </span>
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">앰버 그로브 과수원</span>
        </div>
        <h1 className="copy-heading mt-8 max-w-4xl font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] text-[var(--color-text)] sm:text-5xl">
          3대째 이어온 과수원
          제철에 맞춰 수확합니다.
        </h1>
        <p className="copy-body max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
          앰버 그로브는 1984년 장터 옆 작은 노점에서 시작했습니다.
          <br className="hidden sm:block" /> 지금은 3대가 함께 과수원을 돌보며, 익은 정도를 살펴 손으로 수확하고 농장 안 포장동에서 소량씩 선별해 보냅니다.
        </p>
      </section>

      {/* Banner Photo */}
      <section className="relative aspect-[21/9] w-full overflow-hidden rounded border border-[var(--color-border)]">
        <Image
          src="/templates/OHMT036-amber-grove/hero-orchard-v3.jpg"
          alt="아침 햇살이 비치는 앰버 그로브 과수원의 나무들"
          fill
          sizes="(min-width: 1024px) 80vw, 100vw"
          priority
          className="object-cover"
        />
      </section>

      {/* Farm Features */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 02 / 재배 기준 ]</span>
          <h2 className="copy-heading font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-4xl">과일을 기르는 기준</h2>
          <p className="copy-body max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
            작물의 상태를 자주 살피고, 익은 과일만 골라 손으로 수확합니다.
            <br /> 수확 시기를 서두르지 않고 토양과 나무를 함께 관리합니다.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="space-y-2">
                <span className="ledger-num text-xs font-bold text-[var(--color-accent)] block">{item.label}</span>
                <h3 className="copy-heading text-base font-bold leading-[var(--leading-body)] text-[var(--color-text)]">{item.title}</h3>
                <p className="copy-body text-xs leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 03 / 걸어온 길 ]</span>
          <h2 className="copy-heading font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-4xl">40년 넘게 이어온 과수원</h2>
          <p className="copy-body max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
            길가의 작은 노점에서 시작해 산지 직송 과수원이 되기까지,
            <br className="hidden xl:block" /> 40년 넘게 가족이 이어온 재배와 수확의 기록입니다.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="relative border-l border-[var(--color-border)] pl-6 ml-3 space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[29px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-white" />
                <span className="ledger-num font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-accent)]">{item.year}</span>
                <h3 className="copy-heading mt-1 text-base font-bold leading-[var(--leading-body)] text-[var(--color-text)]">{item.title}</h3>
                <p className="copy-body mt-2 max-w-2xl text-xs leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 04 / 인증 ]</span>
          <h2 className="copy-heading font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-4xl">인증 현황</h2>
          <p className="copy-body max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
            유기농산물, 저탄소 농축산물,
            <br className="hidden xl:block" /> 농산물우수관리 인증을 정기적으로 심사받아 유지하고 있습니다.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col justify-between rounded border border-[var(--color-border)] p-5 bg-white space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-text)] leading-[var(--leading-body)]">{cert.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1.5">{cert.agency}</p>
                </div>
                <div className="border-t border-[var(--color-border)] pt-3">
                  <span className="ledger-num text-xs text-[var(--color-accent)] bg-[var(--color-bg-secondary)] px-2 py-0.5 rounded font-semibold">
                    {cert.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--color-border)] pt-12 pb-6">
        <div className="flex flex-col gap-6 bg-[var(--color-bg-dark)] p-6 text-[var(--color-text-contrast)] sm:p-8 lg:flex-row lg:items-center lg:justify-between rounded">
          <div>
            <span className="ledger-num text-xs font-bold text-[var(--color-accent-light)]">[ 05 / 방문 안내 ]</span>
            <h2 className="copy-heading mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[var(--leading-body)] sm:text-4xl">
              수확철에는 목요일부터 일요일까지
              <br className="hidden sm:block" /> 방문 수령할 수 있습니다.
            </h2>
          </div>
          <Link href={`${base}/visit`} className="inline-flex shrink-0 items-center justify-center rounded bg-[var(--color-secondary-accent)] px-6 py-2.5 text-xs font-bold text-[var(--color-bg-dark)] transition-colors duration-200 hover:opacity-90">
            방문 안내 보기
          </Link>
        </div>
      </section>
    </div>
  )
}
