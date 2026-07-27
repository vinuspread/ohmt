import { TreeStructure, ShieldCheck, ArrowsClockwise } from '@phosphor-icons/react/dist/ssr'

const services = [
  {
    icon: TreeStructure,
    title: 'Solid wood, sourced traceably',
    desc: 'Every frame is FSC-tracked hardwood, no particleboard or veneer substitutions.',
  },
  {
    icon: ShieldCheck,
    title: '10-year frame warranty',
    desc: 'Frames are covered for a decade. Upholstery and finish are covered for two years.',
  },
  {
    icon: ArrowsClockwise,
    title: '30-day trial period',
    desc: 'Live with it for a month. Return anything that does not fit the room, no restocking fee.',
  },
]

export function ServiceBand() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-3">
        <div className="relative min-h-[280px] overflow-hidden rounded-[12px] md:min-h-[520px]">
          <img
            src="/templates/OHMT035-atelier-house/service-wood-detail.jpg"
            alt="Close view of oiled wood grain and woven upholstery"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex min-h-[420px] flex-col justify-between rounded-[12px] bg-[#1A1A1A] p-6 text-white md:min-h-[520px] md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/42">Service standard</p>
            <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight">
              The quiet parts matter after delivery.
            </h2>
            <p className="mt-5 max-w-[430px] text-sm leading-relaxed text-white/58">
              The template keeps service promises visible without turning them into a generic icon row.
            </p>
          </div>

          <div className="mt-9 divide-y divide-white/12 border-t border-white/12">
            {services.map((s) => (
              <div key={s.title} className="grid grid-cols-2 gap-4 py-5">
                <s.icon size={24} weight="light" className="mt-0.5 text-[var(--color-accent)]" />
                <div>
                  <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 max-w-[360px] text-xs leading-relaxed text-white/55">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-[12px] md:min-h-[520px]">
          <img
            src="/templates/OHMT035-atelier-house/service-workshop-corner.jpg"
            alt="Workshop corner with stacked furniture frames and fabric samples"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
