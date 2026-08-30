import Image from 'next/image'

const callouts = [
  {
    k: 'A',
    title: 'Separate thermal zones',
    text: 'Brew and steam boilers are tuned independently so milk service never steals heat from the next shot.',
  },
  {
    k: 'B',
    title: 'Visible pressure',
    text: 'The analog gauge turns extraction into a readable signal, not a hidden appliance cycle.',
  },
  {
    k: 'C',
    title: 'Serviceable core',
    text: 'Pump, boiler, and gasket assemblies are replaceable modules, not sealed black boxes.',
  },
]

export function MachineAnatomy() {
  return (
    <section className="bg-[#111820] px-5 py-18 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/46">
              Machine anatomy
            </p>
            <h2 className="mt-4 max-w-[560px] font-display text-[length:var(--text-h2)] font-bold leading-[var(--leading-display)] tracking-tight">
              Not a closed appliance. A visible pressure system.
            </h2>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-white/62 md:col-span-7 md:justify-self-end md:text-sm">
            The most important parts are deliberately legible: where heat lives, where pressure reads, and where
            service happens after years of use.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-8">
          <div className="relative min-h-[380px] overflow-hidden border border-white/12 bg-white/[0.03] md:col-span-8 md:min-h-[640px]">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/technology-diagram.jpg"
              alt="NOVA dual-boiler internal structure diagram"
              fill
              className="object-cover brightness-[1.06] contrast-[1.05]"
              sizes="(min-width: 768px) 900px, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,32,0)_0%,rgba(17,24,32,0.26)_100%)]" />
            <div className="absolute left-[10%] top-[20%] h-3 w-3 bg-white" />
            <div className="absolute left-[11%] top-[calc(20%+5px)] h-px w-[34%] bg-white/55" />
            <div className="absolute right-[21%] top-[44%] h-3 w-3 bg-white" />
            <div className="absolute right-[22%] top-[calc(44%+5px)] h-px w-[28%] bg-white/55" />
          </div>

          <div className="grid border-l border-t border-white/14 md:col-span-4">
            {callouts.map((item) => (
              <article key={item.k} className="grid gap-8 border-b border-r border-white/14 p-6 md:p-7">
                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-5xl font-semibold leading-none text-white">{item.k}</p>
                  <span className="mt-2 h-px w-16 bg-white/28" />
                </div>
                <div className="self-end">
                  <h3 className="font-display text-lg font-bold leading-[1.05]">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/64 md:text-sm">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
