import { TreeStructure, ShieldCheck, ArrowsClockwise } from '@phosphor-icons/react/dist/ssr'

const services = [
  {
    icon: TreeStructure,
    title: 'FSC 인증 원목 사용',
    desc: '프레임에는 FSC 인증 원목을 사용하며 합판이나 무늬목으로 대체하지 않습니다.',
  },
  {
    icon: ShieldCheck,
    title: '10년 프레임 무상 보증',
    desc: '가구 프레임은 10년, 패브릭과 오일 마감은 2년 동안 보증합니다.\n세부 범위는 제품별 보증 기준에 따릅니다.',
  },
  {
    icon: ArrowsClockwise,
    title: '30일 체험 후 반품',
    desc: '30일 동안 공간과 생활 방식에 맞는지 확인할 수 있습니다.\n불만족 시 회수 비용 없이 반품할 수 있습니다.',
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
              배송 후에도 이어지는 관리</h2>
            <p className="mt-5 max-w-[430px] text-sm leading-relaxed text-white/58 word-keep-all">
              사용 원목과 보증 기간, 체험 및 반품 기준을 구체적으로 안내해 구매 후 관리까지 확인할 수 있습니다.</p>
          </div>

          <div className="mt-9 divide-y divide-white/12 border-t border-white/12">
            {services.map((s) => (
              <div key={s.title} className="grid grid-cols-2 gap-4 py-5">
                <s.icon size={24} weight="light" className="mt-0.5 text-[var(--color-accent)]" />
                <div>
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-[360px] whitespace-pre-line text-xs leading-relaxed text-white/55 word-keep-all">{s.desc}</p>
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
