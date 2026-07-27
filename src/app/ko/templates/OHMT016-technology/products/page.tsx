"use client"

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import FormSelect from '../_components/FormSelect'
import { modelData, featuresData } from '../data/data'
import { useState } from 'react'

const comparisonRows = [
  { spec: '크기', gen2: '45 x 38 x 52 cm', prime: '58 x 48 x 68 cm' },
  { spec: '무게', gen2: '18 kg', prime: '32 kg' },
  { spec: '연속 운용 시간', gen2: '24시간', prime: '18시간 (확장 배터리 30시간)' },
  { spec: '최대 적재 하중', gen2: '8 kg', prime: '22 kg' },
  { spec: '카메라', gen2: '4K RGB 카메라 2대', prime: '4K RGB·열화상 카메라 3대' },
  { spec: 'AI 연산 성능', gen2: '온디바이스 NPU 40 TOPS', prime: '온디바이스 NPU 80 TOPS' },
  { spec: '센서', gen2: 'LiDAR, IMU, 초음파', prime: 'LiDAR, IMU, 초음파, 레이저 거리측정기' },
  { spec: '내비게이션', gen2: '실내 V-SLAM', prime: '실내·실외 RTK-GPS + V-SLAM' },
  { spec: '방진·방수', gen2: 'IP54', prime: 'IP67' },
]

export default function TechnologyProductsPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', model: '', quantity: '1', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <TemplateWrapper theme={theme}>
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 md:py-40 border-b border-[var(--color-border)]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] block">
              제품 라인업
            </span>
            <h1 className="mb-6 text-[length:var(--text-h1)] font-bold tracking-[-0.03em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading break-keep">
              현장 규모에 맞는 두 가지 모델
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[var(--color-text-muted)] leading-[var(--leading-heading)]">
              실내 자동화부터 산업 현장까지
              <br />
              작업 환경과 적재 하중에 맞춰 선택할 수 있는 두 가지 자율 로봇입니다.
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
              <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.02em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading break-keep">
                모델 선택
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
                    <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-body)]">
                      {model.description}
                    </p>
                    <div className="flex items-baseline gap-3 pt-2">
                      <span className="text-3xl font-bold text-[var(--color-text)] font-heading">
                        {model.id === 'gen2' ? '28,000,000원' : '35,000,000원'}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)] line-through">
                        {model.slashedPrice}
                      </span>
                      <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[var(--color-success)]/10 text-[var(--color-success)] rounded-sm">
                        {model.saveAmount}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">{model.financing}</p>
                    <div className="pt-2">
                      <a
                        href="#reserve"
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--color-accent)] text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
                      >
                        사전 예약
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
                핵심 기술
              </span>
              <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.02em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading break-keep">
                주요 기능
              </h2>
              <p className="mt-4 mx-auto max-w-xl text-sm md:text-base text-[var(--color-text-muted)] leading-[var(--leading-heading)]">
                각 구성 요소는 실제 작업 환경에서 안정적으로 작동하도록 설계했습니다.
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
                  <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-heading)]">
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
              <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.02em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading break-keep">
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
                <h2 className="text-[length:var(--text-h1)] font-bold tracking-[-0.02em] leading-[var(--leading-heading)] text-[var(--color-text)] font-heading mb-6 break-keep">
                  제품을 먼저 만나보세요
                </h2>
                <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-body)] max-w-sm">
                  제품을 사전 예약하면 현재 가격과 예상 공급 일정을 안내해 드립니다. 신청 후 24시간 이내에 담당자가 연락드립니다.
                </p>
                <ul className="mt-8 space-y-3">
                  {['예약 시 결제 없음', '24시간 이내 담당자 확인', '유연한 배송 일정'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                      <span className="w-5 h-5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
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
                      사전 예약이 접수되었습니다
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-body)] max-w-md mx-auto">
                      24시간 이내에 예약 내용과 다음 절차를 안내해 드리겠습니다.
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
                          회사명
                        </label>
                        <input
                          type="text" id="company" name="company" value={form.company} onChange={handleChange} required
                          placeholder="회사명을 입력해 주세요"
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
                        <FormSelect
                          id="model"
                          name="model"
                          value={form.model}
                          onChange={(model) => setForm((current) => ({ ...current, model }))}
                          required
                          placeholder="모델 선택"
                          options={[
                            { value: 'gen2', label: 'OmniBot Gen 2 · 28,000,000원' },
                            { value: 'prime', label: 'OmniBot Prime · 35,000,000원' },
                          ]}
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          수량
                        </label>
                        <FormSelect
                          id="quantity"
                          name="quantity"
                          value={form.quantity}
                          onChange={(quantity) => setForm((current) => ({ ...current, quantity }))}
                          placeholder="수량 선택"
                          options={['1', '2', '3', '4', '5', '6-10', '10+'].map((quantity) => ({
                            value: quantity,
                            label: `${quantity}개`,
                          }))}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        추가 요청 사항
                      </label>
                      <textarea
                        id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                        placeholder="사용할 장소와 필요한 작업, 도입 일정을 알려주세요."
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 resize-none rounded-md"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
                    >
                      예약 신청
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </TemplateWrapper>
  )
}
