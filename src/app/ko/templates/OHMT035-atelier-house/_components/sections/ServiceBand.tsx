import { TreeStructure, ShieldCheck, ArrowsClockwise } from '@phosphor-icons/react/dist/ssr'

const services = [
  {
    icon: TreeStructure,
    title: '원목 소재 보증',
    desc: '모든 뼈대는 FSC 인증을 통과한 단단한 원목만을 사용합니다. 합판이나 무늬목으로 대체하지 않습니다.',
  },
  {
    icon: ShieldCheck,
    title: '10년 프레임 무상 보증',
    desc: '가구의 뼈대는 10년 동안 무상으로 수리해 드립니다. 패브릭 및 오일 마감 보증 기간은 2년입니다.',
  },
  {
    icon: ArrowsClockwise,
    title: '30일 체험 제도',
    desc: '집 안 분위기와 생활 방식에 맞는지 충분히 겪어보세요. 불만족 시 회수 비용 없이 반품해 드립니다.',
  },
]

export function ServiceBand() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-3">
        <div className="relative min-h-[280px] overflow-hidden rounded-[12px] md:min-h-[520px]">
          <img
            src="/templates/OHMT035-atelier-house/service-wood-detail.jpg"
            alt="원목의 결이 부드럽게 살아있는 면과 패브릭 텍스처 접사"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex min-h-[420px] flex-col justify-between rounded-[12px] bg-[#1A1A1A] p-6 text-white md:min-h-[520px] md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/42">품질 약속</p>
            <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight word-keep-all">
              집으로 배송된 이후의 오랜 시간까지 책임집니다.
            </h2>
            <p className="mt-5 max-w-[430px] text-sm leading-relaxed text-white/58 word-keep-all">
              단순한 품질 약속 아이콘 나열을 넘어, 공간에 놓인 후에도 흔들림 없는 일상의 지원군이 되겠다는 다짐입니다.
            </p>
          </div>

          <div className="mt-9 divide-y divide-white/12 border-t border-white/12">
            {services.map((s) => (
              <div key={s.title} className="grid grid-cols-2 gap-4 py-5">
                <s.icon size={24} weight="light" className="mt-0.5 text-[var(--color-accent)]" />
                <div>
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-[360px] text-xs leading-relaxed text-white/55 word-keep-all">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-[12px] md:min-h-[520px]">
          <img
            src="/templates/OHMT035-atelier-house/service-workshop-corner.jpg"
            alt="가구 뼈대 프레임들과 원단 샘플들이 차분히 정돈된 스튜디오 구석"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
