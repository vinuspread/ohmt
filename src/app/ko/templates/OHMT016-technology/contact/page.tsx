"use client"

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import { useState } from 'react'

const officeData = [
  {
    city: 'San Francisco',
    role: '글로벌 본사',
    address: '388 Market Street, Suite 1200, San Francisco, CA 94111',
    email: 'info@robotflow.net',
    phone: '+1 (415) 555-0192',
  },
  {
    city: 'Seoul',
    role: 'R&D 센터',
    address: '서울특별시 강남구 테헤란로 2길 45 06236',
    email: 'rd.seoul@robotflow.net',
    phone: '+82 (2) 555-0193',
  },
]

export default function TechnologyContactPage() {
  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    model: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
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
              연락처
            </span>
            <h1 className="mb-6 text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-text)] font-heading break-keep">
              함께 미래를 만들어갑시다
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[var(--color-text-muted)] leading-[1.2]">
              운영에 자율 로보틱스를 도입할 준비가 되셨나요? 컨설팅이나 데모를 위해 팀에 문의하세요.
            </p>
          </div>
        </section>

        {/* Form + Offices */}
        <section className="bg-[var(--color-bg-secondary)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Form */}
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                  문의 양식
                </span>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-[var(--color-text)] font-heading mb-8">
                  컨설팅 요청
                </h2>

                {submitted ? (
                  <div className="border border-[var(--color-accent)] bg-[var(--color-bg)] p-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-[var(--color-accent)] text-[var(--color-accent)] text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 font-heading">
                      감사합니다
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-[1.2] max-w-md mx-auto">
                      문의가 접수되었습니다. 24시간 이내에 담당 팀이 연락드릴 예정입니다.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          회사명
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          required
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                          placeholder="(주) 로보틱스"
                        />
                      </div>
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          담당자명
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                          placeholder="홍길동"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        이메일 주소
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        placeholder="hong@robotflow.kr"
                      />
                    </div>

                    <div>
                      <label htmlFor="model" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        관심 모델
                      </label>
                      <select
                        id="model"
                        name="model"
                        value={form.model}
                        onChange={handleChange}
                        required
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                      >
                        <option value="">모델 선택</option>
                        <option value="gen2">OmniBot Gen 2</option>
                        <option value="prime">OmniBot Prime</option>
                        <option value="both">둘 다 / 잘 모르겠음</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        메시지
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 resize-none rounded-md"
                        placeholder="프로젝트와 자동화 목표에 대해 알려주세요..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
                    >
                      문의 제출
                    </button>
                  </form>
                )}
              </div>

              {/* Offices */}
              <div className="lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                  글로벌 오피스
                </span>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-[var(--color-text)] font-heading mb-8">
                  우리의 위치
                </h2>
                <div className="space-y-8">
                  {officeData.map((office) => (
                    <div
                      key={office.city}
                      className="p-6 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-8 w-8 items-center justify-center text-[var(--color-accent)] font-mono text-xs font-bold">
                          {office.city === 'San Francisco' ? 'SF' : 'SL'}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[var(--color-text)] font-heading">
                            {office.city}
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                            {office.role}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--color-text-muted)] leading-[1.2] mb-1">
                        {office.address}
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">{office.email}</p>
                      <p className="text-sm text-[var(--color-text-muted)]">{office.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </TemplateWrapper>
  )
}
