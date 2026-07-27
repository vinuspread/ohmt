import type { Metadata } from 'next'
import { Hammer, Leaf, Package, MapPin, UsersThree, Tag } from '@phosphor-icons/react/dist/ssr'

export const metadata: Metadata = {
  title: '스튜디오 소개 | 아틀리에 하우스',
  description: '아틀리에 하우스는 여섯 명의 제작자가 원목 가구와 조명을 직접 설계하고 만드는 소규모 디자인 스튜디오입니다.',
}

const principles = [
  {
    title: '가공판재 대신 원목',
    desc: 'MDF와 합판을 사용하지 않습니다.\n하드우드 원목으로 견고하게 제작하기 어려운 형태는 제품으로 출시하지 않습니다.',
  },
  {
    title: '생활 환경에서 먼저 사용',
    desc: '신제품은 팀원 중 최소 한 명이 한 계절 이상 집에서 사용하며 착석감과 관리 편의성을 확인한 뒤 출시합니다.',
  },
  {
    title: '다시 조일 수 있는 짜맞춤',
    desc: '못과 접착제에만 의존하지 않고 짜맞춤 결구를 적용합니다.\n사용 중 결구가 헐거워지면 다시 조정해 수리할 수 있습니다.',
  },
]

const focus = [
  {
    title: '십 년 뒤에도 쓰는 가구',
    desc: '유행에 따라 쉽게 교체하는 가구보다, 오랜 사용 흔적이 자연스럽게 남고 필요할 때 수리할 수 있는 가구를 지향합니다.',
  },
  {
    title: '한 작업실에서 완성',
    desc: '제품 기획과 시제품 제작부터 가공, 조립, 마감까지 주요 공정을 작업실에서 직접 관리합니다.',
  },
]

const values = [
  { icon: Hammer, title: '고쳐 쓰는 가구', desc: '짜맞춤 결구를 적용해 헐거워진 부분을 다시 맞추고 수리하며 오래 사용할 수 있도록 설계합니다.' },
  { icon: Package, title: '소량 주문 제작', desc: '재고를 대량으로 쌓아두지 않고 접수된 주문량에 맞춰 소량으로 제작합니다.' },
  { icon: Leaf, title: '목재 출처 확인', desc: 'FSC 인증 원목만 사용하며, 출처를 확인하기 어려운 목재는 사용하지 않습니다.' },
  { icon: UsersThree, title: '생활 테스트 후 출시', desc: '시제품을 실제 생활 공간에서 사용해 본 뒤 불편한 점을 보완하고 제품으로 출시합니다.' },
  { icon: MapPin, title: '제작 공정 직접 관리', desc: '프레임 제작을 외주 조립에 맡기지 않고 주요 제작 공정을 한 작업실에서 진행합니다.' },
  { icon: Tag, title: '제작비 중심의 가격', desc: '대형 전시장과 복잡한 유통 단계를 줄여 원목 자재비와 제작 공임을 중심으로 가격을 책정합니다.' },
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
          <h1 className="mt-4 max-w-[680px] whitespace-pre-line font-display text-[length:var(--text-h1)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] word-keep-all">
            여섯 제작자가
한 작업실에서 만듭니다.</h1>
          <p className="mt-6 max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
            아틀리에 하우스는 이웃의 식탁을 만들던 여섯 명의 제작자가 함께 시작했습니다.
            <br className="hidden md:block" />
            규모가 커진 뒤에도 주문량에 맞춰 소량으로 제작하고, 가공부터 마감까지 직접 확인하는 방식을 유지합니다.
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
            제품을 만드는 세 가지 기준</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p.title}>
                <p className="text-xs font-semibold text-[var(--color-accent)]">0{i + 1}</p>
                <h3 className="mt-3 text-base font-semibold text-[var(--color-text)]">{p.title}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              제작 방향</p>
            <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              오래 쓰는 가구를 위한 기준</h2>
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
            제작 과정에서 지키는 여섯 가지 약속</h2>
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
            여섯 명의 제작자</h2>
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
