"use client"

import Header from '../_components/Header'
import Footer from '../_components/Footer'
import { modelData, featuresData } from '../data/data'
import { useState } from 'react'
import { TemplateWrapper } from '../_components/TemplateWrapper'
import theme from '../theme.json'

const comparisonRows = [
  { spec: '크기', gen2: '45 x 38 x 52 cm', prime: '58 x 48 x 68 cm' },
  { spec: '무게', gen2: '18 kg', prime: '32 kg' },
  { spec: '배터리 수명', gen2: '24시간', prime: '18시간 (확장팩: 30시간)' },
  { spec: '최대 탑재량', gen2: '8 kg', prime: '22 kg' },
  { spec: '카메라', gen2: '4K RGB (듀얼)', prime: '4K RGB + 열화상 (트리플)' },
  { spec: 'AI 처리', gen2: '온디바이스 NPU 40 TOPS', prime: '온디바이스 NPU 80 TOPS' },
  { spec: '센서', gen2: 'LiDAR, IMU, 초음파', prime: 'LiDAR, IMU, 초음파, 레이저 거리측정기' },
  { spec: '내비게이션', gen2: '실내 V-SLAM', prime: '실내/실외 RTK-GPS + V-SLAM' },
  { spec: '방진방수', gen2: 'IP54', prime: 'IP67' },
]

export default function TechnologyProductsPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', model: '', quantity: '1', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <TemplateWrapper theme={theme}>
      <>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 md:py-40 border-b border-[var(--color-border)]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] block">
              제품 라인업
            </span>
            <h1 className="mb-6 text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-text)] font-heading break-keep">
              모든 운영 규모에 맞춰 설계되다
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[var(--color-text-muted)] leading-[1.2]">
              다양한 배포 환경, 탑재 요구 사항 및 운영 규모에 맞게 설계된 두 가지 목적 기반 자율 시스템.
            </p>
          </div>
        </section>

        {/* Models */}
        <section className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                모델
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading break-keep">
                시스템 선택
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {modelData.map((model) => (
                <div key={model.id} className="group flex flex-col gap-8">
                  {/* Model image */}
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-[48px]">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Info */}
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-[var(--color-text)] font-heading tracking-tight">
                      {model.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-[1.6]">
                      {model.description}
                    </p>
                    <div className="flex items-baseline gap-3 pt-2">
                      <span className="text-3xl font-bold text-[var(--color-text)] font-heading">
                        {model.id === 'gen2' ? '$20K' : '$25K'}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)] line-through">
                        {model.slashedPrice}
                      </span>
                      <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--color-success)]/10 text-[var(--color-success)] rounded-sm">
                        {model.saveAmount}
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-muted)]">{model.financing}</p>
                    <div className="pt-2">
                      <a
                        href="#reserve"
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--color-accent)] text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
                      >
                        지금 예약하기
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-[var(--color-bg-secondary)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                핵심 기능
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading break-keep">
                주요 기능
              </h2>
              <p className="mt-4 mx-auto max-w-xl text-sm md:text-base text-[var(--color-text-muted)] leading-[1.2]">
                모든 서브시스템은 신뢰성과 차세대 기계 지능을 결합하도록 설계되었습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {featuresData.map((feature) => (
                <div key={feature.id} className="group flex flex-col">
                  {/* Feature image */}
                  <div className="aspect-[4/3] w-full overflow-hidden mb-6 rounded-[48px] border border-transparent group-hover:border-[var(--color-accent)]/20 transition-all duration-300">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 font-heading transition-colors group-hover:text-[var(--color-accent)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-[1.2]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs Comparison */}
        <section className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                사양
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading break-keep">
                모델 비교
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)]">
                      사양
                    </th>
                    {modelData.map((model) => (
                      <th key={model.id} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-accent)] bg-[var(--color-bg-secondary)]">
                        {model.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.spec}
                      className={`border-b border-[var(--color-border)] transition-colors duration-200 hover:bg-[var(--color-bg-secondary)] ${
                        i % 2 === 0 ? 'bg-transparent' : 'bg-[var(--color-bg-secondary)]/40'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-[var(--color-text)]">
                        {row.spec}
                      </td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-muted)]">{row.gen2}</td>
                      <td className="px-6 py-4 text-sm text-[var(--color-text-muted)]">{row.prime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Reservation Form */}
        <section id="reserve" className="bg-[var(--color-bg-secondary)] py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left: copy */}
              <div className="lg:col-span-5 flex flex-col justify-start">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                  예약
                </span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading mb-6 break-keep">
                  오늘 유닛을 확보하세요
                </h2>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.6] max-w-sm">
                  지금 유닛을 예약하고 얼리 액세스 가격을 확정하세요. 24시간 이내에 담당 팀이 가용성 및 배송 일정을 확인해 드립니다.
                </p>
                <ul className="mt-8 space-y-3">
                  {['예약에 결제 불필요', '24시간 내 팀 확인', '유연한 배송 일정'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="bg-[var(--color-bg)] rounded-2xl p-10 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 font-heading">
                      예약이 접수되었습니다
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-[1.6] max-w-md mx-auto">
                      24시간 이내에 예약 확인 및 다음 단계 논의를 위해 연락드리겠습니다.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          이름
                        </label>
                        <input
                          type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                          placeholder="홍길동"
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          회사
                        </label>
                        <input
                          type="text" id="company" name="company" value={form.company} onChange={handleChange} required
                          placeholder="(주) 로보틱스"
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        이메일
                      </label>
                      <input
                        type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="hong@robotflow.kr"
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="model" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          모델
                        </label>
                        <select
                          id="model" name="model" value={form.model} onChange={handleChange} required
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        >
                          <option value="">모델 선택</option>
                          <option value="gen2">OmniBot Gen 2 - $20K</option>
                          <option value="prime">OmniBot Prime - $25K</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          수량
                        </label>
                        <select
                          id="quantity" name="quantity" value={form.quantity} onChange={handleChange}
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        >
                          {['1', '2', '3', '4', '5', '6-10', '10+'].map((q) => (
                            <option key={q} value={q}>{q}개</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        메시지 (선택 사항)
                      </label>
                      <textarea
                        id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                        placeholder="배포 환경이나 문의사항에 대해 알려주세요..."
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 resize-none rounded-md"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
                    >
                      예약 제출
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
    </TemplateWrapper>
  )
}
