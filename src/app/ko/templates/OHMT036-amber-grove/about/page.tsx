import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT036-amber-grove'

const principles = [
  {
    title: '가장 맛있는 때를 기다립니다',
    label: '철저한 제철 원칙',
    text: '직판장과 온라인 스토어의 판매 일정은 작물의 상태에 따라 달라집니다. 날씨와 토양, 생육 상태를 살펴 충분히 익었을 때 수확합니다. 출하 시기를 억지로 앞당기지 않고, 제철의 맛이 오른 열매만 보내드립니다.',
  },
  {
    title: '건강한 땅에서 좋은 열매가 자랍니다',
    label: '흙을 살리는 농사',
    text: '질소를 보충하는 풋거름 작물과 퇴비를 사용하고, 잡초는 손으로 직접 관리합니다. 합성 자재에 의존하기보다 지역 생태와 어울리는 방식으로 땅의 힘을 키우며, 나무가 오래도록 건강하게 자랄 수 있는 환경을 만듭니다.',
  },
  {
    title: '수확부터 포장까지 꼼꼼하게',
    label: '산지 직송 콜드체인',
    text: '수확한 열매는 농장 내 포장 시설에서 바로 선별하고 포장합니다. 상자마다 수확 구역과 구역 번호, 권장 섭취 시기를 표시해 보내드립니다. 어느 나무에서 수확해 어떻게 출고했는지 전 과정을 확인해보세요.',
  },
]

const timeline = [
  { year: '1984', title: '길가의 작은 노점', text: '김태석·정은주 부부가 길가 평상에 직접 기른 복숭아를 내놓으며 과수원의 첫걸음을 시작했습니다.' },
  { year: '1998', title: '유기농 재배의 시작', text: '합성 자재 사용을 줄이고 직접 퇴비장을 마련했습니다. 풋거름 작물을 심으며 땅을 살리는 농사를 시작했습니다.' },
  { year: '2008', title: '자체 포장동 마련', text: '수확한 열매를 과수원에서 바로 선별하고 포장할 수 있도록 농장 안에 포장동을 지었습니다.' },
  { year: '2026', title: '3대째 이어지는 과수원', text: '이제는 손녀 김하람이 농사를 이어갑니다. 수확부터 포장까지, 오랫동안 지켜 온 기준을 그대로 이어가고 있습니다.' },
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
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">앰버 그로브 소개</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-5xl font-semibold leading-[var(--leading-body)] text-[var(--color-text)] mt-8">
          3대가 이어온 밭에서, 한 상자씩 정성을 담습니다.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-3xl">
          1984년 장터 한 귀퉁이 노점에서 시작된 앰버그로브. 처음 심은 나무들이 어느덧 훌쩍 자라나 산지 직거래 과수원으로 성장했습니다. 손으로 직접 따고, 소량씩 포장해서 기준에 맞춰 출하합니다.
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
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-body)]">이렇게 키웁니다.</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            손이 많이 가더라도 전통 방식을 고집합니다. 과일 하나하나 손으로 직접 만지고 수확해 맛이 다릅니다.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="space-y-2">
                <span className="ledger-num text-xs font-bold text-[var(--color-accent)] block">{item.label}</span>
                <h3 className="text-base font-bold text-[var(--color-text)] leading-[var(--leading-body)]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 03 / 걸어온 길 ]</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-body)]">과수원에 쌓인 40년의 시간</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            길가의 작은 노점에서 시작해 오늘의 산지 직송까지, 40년 동안 한결같이 지켜 온 수확과 농사의 기록입니다.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="relative border-l border-[var(--color-border)] pl-6 ml-3 space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[29px] top-1 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-white" />
                <span className="ledger-num font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-accent)]">{item.year}</span>
                <h3 className="text-base font-bold mt-1 text-[var(--color-text)] leading-[var(--leading-body)]">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="grid gap-10 lg:grid-cols-12 border-t border-[var(--color-border)] pt-12">
        <div className="lg:col-span-4 space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 04 / 인증 ]</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-body)]">받은 인증</h2>
          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
            유기농산물과 우수관리 기준을 매년 심사받아 유지하고 있습니다.
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
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-heading)] text-2xl sm:text-4xl font-semibold leading-[var(--leading-body)]">
              수확철에는 목요일부터 일요일까지 픽업이 가능합니다.
            </h2>
          </div>
          <Link href={`${base}/visit`} className="inline-flex shrink-0 items-center justify-center rounded bg-[var(--color-secondary-accent)] px-6 py-2.5 text-xs font-bold text-[var(--color-bg-dark)] transition-colors duration-200 hover:opacity-90">
            방문 방법 및 운영시간
          </Link>
        </div>
      </section>
    </div>
  )
}
