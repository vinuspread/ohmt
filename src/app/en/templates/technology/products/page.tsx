"use client"

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import { modelData, featuresData } from '../data/data'
import { useState } from 'react'

const comparisonRows = [
  { spec: 'Dimensions', gen2: '45 x 38 x 52 cm', prime: '58 x 48 x 68 cm' },
  { spec: 'Weight', gen2: '18 kg', prime: '32 kg' },
  { spec: 'Battery Life', gen2: '24 hours', prime: '18 hours (extended pack: 30h)' },
  { spec: 'Max Payload', gen2: '8 kg', prime: '22 kg' },
  { spec: 'Camera', gen2: '4K RGB (dual)', prime: '4K RGB + Thermal (triple)' },
  { spec: 'AI Processing', gen2: 'On-device NPU 40 TOPS', prime: 'On-device NPU 80 TOPS' },
  { spec: 'Sensors', gen2: 'LiDAR, IMU, Ultrasonic', prime: 'LiDAR, IMU, Ultrasonic, Laser Rangefinder' },
  { spec: 'Navigation', gen2: 'Indoor V-SLAM', prime: 'Indoor/Outdoor RTK-GPS + V-SLAM' },
  { spec: 'IP Rating', gen2: 'IP54', prime: 'IP67' },
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
      <Header />
      <main>

        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--color-bg)] py-24 md:py-40 border-b border-[var(--color-border)]">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/5 blur-[120px] pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] block">
              Our Lineup
            </span>
            <h1 className="mb-6 text-[clamp(2.2rem,5vw,3.8rem)] font-bold tracking-[-0.03em] leading-[1.15] text-[var(--color-text)] font-heading">
              Built for every scale of operation
            </h1>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-[var(--color-text-muted)] leading-[1.2]">
              Two purpose-built autonomous systems engineered for different deployment environments, payload requirements, and operational scales.
            </p>
          </div>
        </section>

        {/* Models */}
        <section className="bg-[var(--color-bg)] py-20 md:py-32 border-b border-[var(--color-border)]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3 block">
                Models
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading">
                Choose your system
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
                        Reserve Now
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
                Capabilities
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading">
                Core features
              </h2>
              <p className="mt-4 mx-auto max-w-xl text-sm md:text-base text-[var(--color-text-muted)] leading-[1.2]">
                Every subsystem is engineered to combine reliability with next-generation machine intelligence.
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
                Specifications
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading">
                Compare models
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)]">
                      Specification
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
                  Reserve
                </span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-[-0.02em] leading-[1.2] text-[var(--color-text)] font-heading mb-6">
                  Secure your unit today
                </h2>
                <p className="text-sm text-[var(--color-text-muted)] leading-[1.6] max-w-sm">
                  Reserve a unit now and lock in the early-access price. Our team will follow up within 24 hours to confirm availability and delivery timeline.
                </p>
                <ul className="mt-8 space-y-3">
                  {['No payment required to reserve', '24-hour confirmation from our team', 'Flexible delivery scheduling'].map((item) => (
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
                      Reservation received
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-[1.6] max-w-md mx-auto">
                      We will get back to you within 24 business hours to confirm your reservation and discuss next steps.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          Full Name
                        </label>
                        <input
                          type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                          placeholder="Jane Doe"
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          Company
                        </label>
                        <input
                          type="text" id="company" name="company" value={form.company} onChange={handleChange} required
                          placeholder="Acme Robotics Inc."
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        Email
                      </label>
                      <input
                        type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                        placeholder="jane@acmerobotics.com"
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="model" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          Model
                        </label>
                        <select
                          id="model" name="model" value={form.model} onChange={handleChange} required
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        >
                          <option value="">Select a model</option>
                          <option value="gen2">OmniBot Gen 2 - $20K</option>
                          <option value="prime">OmniBot Prime - $25K</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                          Quantity
                        </label>
                        <select
                          id="quantity" name="quantity" value={form.quantity} onChange={handleChange}
                          className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 rounded-md"
                        >
                          {['1', '2', '3', '4', '5', '6-10', '10+'].map((q) => (
                            <option key={q} value={q}>{q} unit{q === '1' ? '' : 's'}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text)] mb-2">
                        Message (optional)
                      </label>
                      <textarea
                        id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your deployment environment or any questions..."
                        className="w-full border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 resize-none rounded-md"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
                    >
                      Submit Reservation
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
