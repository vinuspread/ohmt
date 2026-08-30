import type { Metadata } from 'next'
import { Hammer, Leaf, Package, MapPin, UsersThree, Tag } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: 'Atelier House - 스튜디오 소개',
  description: '아틀리에 하우스는 여섯 명의 제작자가 작업실에서 원목 가구와 조명을 만드는 소규모 디자인 스튜디오입니다.',
}

const principles = [
  {
    title: '오직 원목만을 다룹니다',
    desc: '가공판재(MDF/합판)를 쓰지 않습니다. 하드우드 원목 구조로 튼튼히 짤 수 없는 형태라면 제품으로 출시하지 않습니다.',
  },
  {
    title: '품질을 직접 테스트합니다',
    desc: '모든 신제품은 스튜디오의 팀원 중 최소 한 명이 한 계절 이상 집에서 직접 써보며 생활 속 편안함을 확인한 후 카탈로그에 등록합니다.',
  },
  {
    title: '수리가 가능한 조립 방식',
    desc: '강력한 접착제나 못으로 일회성 조립을 하는 대신 짜맞춤 결구를 적용해, 훗날 헐거워지더라도 뼈대를 다시 결합해 고쳐 쓸 수 있습니다.',
  },
]

const focus = [
  {
    title: '지속 가능한 가치',
    desc: '한 계절 반짝 예쁜 사진으로 소비되는 가구가 아닌, 십 년 이상 매일 함께하며 손때를 묻히고 나이 드는 가구를 지향합니다.',
  },
  {
    title: '제작자의 사명',
    desc: '제품 기획부터 프로토타입 제작, 마감 작업까지 전 과정을 직접 거쳐 당사 기준을 통과한 가구만을 제안합니다.',
  },
]

const values = [
  { icon: Hammer, title: '고쳐 쓰는 가구', desc: '짜맞춤 기법을 사용하여 헐거워진 결구를 다시 맞추고 평생 쓸 수 있게 설계합니다.' },
  { icon: Package, title: '소량 주문 제작', desc: '창고에 재고를 쌓아두는 방식이 아닌, 접수된 주문 규모에 맞춰 정성스레 작업합니다.' },
  { icon: Leaf, title: '벌목 이력 확인', desc: 'FSC 인증 원목 판재만 취급하며, 출처가 불분명한 목재는 사용하지 않습니다.' },
  { icon: UsersThree, title: '선 테스트 후 출시', desc: '제작 단계에서 끝내지 않고 실생활에서 직접 겪은 후 피드백을 반영하여 보완합니다.' },
  { icon: MapPin, title: '작업실 단일 공정', desc: '뼈대 하청 조립을 주지 않고 모든 제작 단계를 한 지붕 밑에서 완료합니다.' },
  { icon: Tag, title: '합리적인 가격', desc: '불필요한 대형 전시장 운영비나 유통 거품을 빼고, 나무 자재비와 정직한 공임만 책정합니다.' },
]

const team = [
  { name: 'Mireille Okafor', role: '스튜디오 설립자 / 대표 목수', image: 'team-mireille-okafor.jpg' },
  { name: 'Tomas Ferreira', role: '프레임 제작 및 결구', image: 'team-tomas-ferreira.jpg' },
  { name: 'Priya Nair', role: '패브릭 및 가죽 마감', image: 'team-priya-nair.jpg' },
  { name: 'Sander Voss', role: '오일 마감 및 가구 수선', image: 'team-sander-voss.jpg' },
  { name: 'Elena Kowalski', role: '스튜디오 매니저', image: 'team-elena-kowalski.jpg' },
  { name: 'Marcus Webb', role: '사진 기록 및 카탈로그 관리', image: 'team-marcus-webb.jpg' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            소개
          </p>
          <h1 className="mt-4 max-w-[680px] font-display text-[length:var(--text-h1)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] word-keep-all">
            소규모 작업실의 정직한 태도를 유지합니다.
          </h1>
          <p className="mt-6 max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
            아틀리에 하우스는 이웃을 위해 식탁을 만들던 여섯 명의 목수가 모여 출발했습니다. 작업 규모는 조금씩 자라났지만, 대량 인쇄하듯 찍어내지 않는 소량 제작 방식과 꼼꼼한 마감 태도는 예나 지금이나 그대로 고수하고 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="relative mx-auto aspect-[21/9] max-w-[1440px] overflow-hidden rounded-[8px]">
          <img
            src="/templates/OHMT035-atelier-house/about-hero-band.jpg"
            alt="원목 프레임들과 공구들이 단정하게 놓인 스튜디오 전체 전경"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
            카탈로그가 지키는 세 가지 기본 철학.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title}>
                <p className="text-xs font-semibold text-[var(--color-accent)]">0{i + 1}</p>
                <h3 className="mt-3 text-base font-semibold text-[var(--color-text)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              방향성
            </p>
            <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              스튜디오가 고집스럽게 추구하는 미래.
            </h2>
            <div className="mt-9 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {focus.map((f, i) => (
                <div key={f.title} className="grid grid-cols-2 gap-4 py-6">
                  <p className="text-xs font-semibold text-[var(--color-accent)]">0{i + 1}</p>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-text)]">{f.title}</h3>
                    <p className="mt-2 max-w-[420px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] md:h-[460px] md:aspect-auto">
            <img
              src="/templates/OHMT035-atelier-house/brand-workshop.jpg"
              alt="아틀리에 하우스 목조 작업대에서 도구를 가지고 정밀하게 나무를 다듬는 모습"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-[560px] font-display text-[length:var(--text-h3)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
            작업 과정에서 타협하지 않는 여섯 가지 약속.
          </h2>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[6px] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[0_1px_0_rgba(20,20,20,0.03)]">
                  <v.icon size={36} weight="regular" className="text-[var(--color-text-muted)]" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[var(--color-text)]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-[560px] font-display text-[length:var(--text-h3)] font-semibold leading-tight tracking-tight text-[var(--color-text)]">
            스튜디오를 이끄는 여섯 명의 제작자.
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                  <img
                    src={`/templates/OHMT035-atelier-house/${member.image}`}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-text)]">{member.name}</h3>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
