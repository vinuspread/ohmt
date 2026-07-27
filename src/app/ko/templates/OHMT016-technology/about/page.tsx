"use client"

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Header from '../_components/Header'
import Footer from '../_components/Footer'

const timeline = [
  { year: '2024', event: '첨단 로보틱스와 자율 하드웨어를 더 많은 현장에 보급하겠다는 목표로 설립.' },
  { year: '2025', event: 'TechWorld Expo에서 OmniBot Gen 1 시제품 공개. 연구개발 확대를 위해 168억 원 규모의 시리즈 A 투자 유치.' },
  { year: '2026', event: '온디바이스 AI와 모듈형 구조, 음성·제스처 인식을 적용한 OmniBot Gen 2 출시. 서울 연구개발센터 개소.' },
]

const team = [
  {
    name: 'Dr. Aris Chen',
    role: '연구개발 책임자',
    bio: 'JPL에서 로보틱스 시스템을 설계했으며, 자율주행과 센서 융합 분야를 연구해 왔습니다.',
    image: '/templates/OHMT016-technology/team-aris.jpg',
  },
  {
    name: 'Maya Torres',
    role: '로보틱스 엔지니어링 책임자',
    bio: 'Boston Dynamics에서 액추에이터 설계를 이끌었으며, 고토크 구동 시스템을 전문으로 합니다.',
    image: '/templates/OHMT016-technology/team-maya.jpg',
  },
  {
    name: 'James Park',
    role: 'AI·머신러닝 책임자',
    bio: '컴퓨터 비전과 엣지 AI 분야에서 20편 이상의 논문을 발표한 딥러닝 연구자입니다.',
    image: '/templates/OHMT016-technology/team-james.jpg',
  },
  {
    name: 'Sophia Kim',
    role: '제품 총괄',
    bio: '세 가지 하드웨어 제품을 기획 단계부터 양산까지 이끈 경험이 있습니다.',
    image: '/templates/OHMT016-technology/team-sophia.jpg',
  },
]


export default function TechnologyAboutPage() {
  return (
    <TemplateWrapper theme={theme}>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 md:py-40 border-b border-[var(--color-border)]">
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] block">
              Robotflow
            </span>
            <h1 className="mb-6 text-[length:var(--text-h1)] font-bold tracking-[-0.03em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading break-keep">
              현장에서 작동하는 지능을 만듭니다
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[var(--color-text-muted)] leading-[var(--leading-heading)]">
              Robotflow는 AI를 실제 작업 환경과 연결하는 자율 하드웨어를 개발합니다. 반복 작업부터 복잡한 현장 운영까지 안정적으로 확장할 수 있는 시스템을 만듭니다.
            </p>
          </div>
        </section>

        {/* Full-bleed Vision Image */}
        <section className="w-full aspect-[21/9] overflow-hidden border-b border-[var(--color-border)]">
          <img
            src="/templates/OHMT016-technology/full_bg_img.jpeg"
            alt="Robotflow 자율 로봇"
            className="w-full h-full object-cover"
          />
        </section>


        {/* Timeline */}
        <section className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: heading */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                  주요 기록
                </span>
                <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.02em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading mb-6 break-keep">
                  Robotflow의 여정
                </h2>
              </div>
              {/* Right: timeline items */}
              <div className="space-y-0 pt-2">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative flex gap-8 pb-16 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-mono text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="mt-2 w-px flex-1 bg-[var(--color-border)]" />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)] block mb-2">
                        {item.year}
                      </span>
                      <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-body)]">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="bg-[var(--color-bg-secondary)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                리더십 팀
              </span>
              <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.02em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading break-keep">
                함께 만드는 사람들
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group flex flex-col">
                  {/* Profile image */}
                  <div className="w-full aspect-square overflow-hidden rounded-[48px] bg-[var(--color-bg-secondary)] mb-5 border border-transparent group-hover:border-[var(--color-accent)]/20 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-1 font-heading transition-colors group-hover:text-[var(--color-accent)]">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)] mb-3 block">
                    {member.role}
                  </span>
                  <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-heading)]">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </TemplateWrapper>
  )
}
