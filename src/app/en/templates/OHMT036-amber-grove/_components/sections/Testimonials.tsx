const testimonials = [
  {
    quote: 'The fruit arrives like it was packed by someone who knows exactly when we will eat it. That is rare.',
    name: 'Mara Bell',
    role: 'Restaurant buyer',
  },
  {
    quote: 'Our customers ask for the orchard name now. The field notes make the box feel personal without being precious.',
    name: 'Jonas Reed',
    role: 'Neighborhood grocer',
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 gap-y-8 sm:gap-x-10 lg:gap-x-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">05 · Trade notes</p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight sm:text-4xl">
            Bought by people who notice ripeness.
          </h2>
        </div>
        <div className="col-span-12 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] lg:col-span-8">
          {testimonials.map((item, index) => (
            <figure key={item.name} className="grid gap-3 py-10 sm:grid-cols-2 sm:gap-6">
              <figcaption className="flex items-start gap-3 sm:flex-col sm:gap-1">
                <span className="ledger-num text-xs font-semibold text-[var(--color-text-muted)]">0{index + 1}</span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{item.role}</p>
                </div>
              </figcaption>
              <blockquote className="text-lg font-medium leading-snug text-[var(--color-text)]">
                "{item.quote}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
