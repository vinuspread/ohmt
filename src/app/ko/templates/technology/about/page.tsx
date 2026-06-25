"use client"

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Header from '../_components/Header'
import Footer from '../_components/Footer'

const timeline = [
  { year: '2024', event: '고급 로보틱스와 자율 하드웨어 시스템의 대중화를 비전으로 회사 설립.' },
  { year: '2025', event: 'TechWorld Expo에서 OmniBot Gen 1 프로토타입 공개. R&D 확장을 위해 1200만 달러 시리즈 A 투자 유치.' },
  { year: '2026', event: '온디바이스 AI, 모듈형 디자인, 음성/제스처 인식을 갖춘 OmniBot Gen 2 출시. 서울 R&D 센터 오픈.' },
]

const team = [
  {
    name: 'Dr. Aris Chen',
    role: 'R&D 책임자',
    bio: '전 JPL 로보틱스 아키텍트로서 자율 내비게이션 및 센서 융합 분야 전문가.',
    image: '/templates/OHMT016-technology/team-aris.jpg',
  },
  {
    name: 'Maya Torres',
    role: '로보틱스 엔지니어링 책임자',
    bio: 'Boston Dynamics에서 액추에이터 설계를 주도. 고토크 모션 시스템 전문가.',
    image: '/templates/OHMT016-technology/team-maya.jpg',
  },
  {
    name: 'James Park',
    role: 'AI 및 머신러닝 책임자',
    bio: '컴퓨터 비전 및 엣지 AI 분야에서 20편 이상의 논문을 발표한 딥러닝 연구자.',
    image: '/templates/OHMT016-technology/team-james.jpg',
  },
  {
    name: 'Sophia Kim',
    role: '제품 총괄',
    bio: '이전 직책에서 세 가지 하드웨어 제품을 컨셉부터 양산까지 성공적으로 이끌었습니다.',
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
              Robotflow 소개
            </span>
            <h1 className="mb-6 text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-text)] font-heading break-keep">
              물리적 미래를 설계하다
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[var(--color-text-muted)] leading-[1.2]">
              우리는 인공지능과 물리적 세계 사이의 격차를 해소하는 지능형 하드웨어 시스템을 구축하여 규모에 맞는 자율 기능을 가능하게 합니다.
            </p>
          </div>
        </section>

        {/* Full-bleed Vision Image */}
        <section className="w-full aspect-[21/9] overflow-hidden border-b border-[var(--color-border)]">
          <img
            src="/templates/OHMT016-technology/full_bg_img.jpeg"
            alt="Robotflow 비전"
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
                  이정표
                </span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading mb-6 break-keep">
                  우리의 여정
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
                      <p className="text-sm text-[var(--color-text-muted)] leading-[1.6]">
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
                리더십
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading break-keep">
                팀 소개
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
                  <p className="text-sm text-[var(--color-text-muted)] leading-[1.2]">
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
