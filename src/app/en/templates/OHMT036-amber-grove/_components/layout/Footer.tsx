import Link from 'next/link'

const columns = [
  { label: 'Call', value: '+1 503 214 0891' },
  { label: 'Email', value: 'harvest@ambergrove.test' },
  { label: 'Hours', value: 'Thu to Sun, 8AM to 3PM' },
  { label: 'Location', value: 'Willamette Valley, Oregon' },
]

export function Footer() {
  return (
    <footer id="visit" className="bg-[var(--color-bg-dark)] text-[var(--color-text-contrast)] w-full">
      <div className="mx-auto px-4 pb-10 pt-14 sm:px-6 lg:px-14 lg:pt-20">
        <div className="grid grid-cols-12 gap-y-6 border-b border-white/12 pb-8 sm:gap-x-10 lg:gap-x-16 lg:items-center">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-tight sm:text-3xl">
              Build a box around what is actually ripe this week.
            </h2>
            <Link href="/en/templates/OHMT036-amber-grove/shop" className="mt-4 inline-flex items-center justify-center rounded bg-[var(--color-secondary-accent)] px-5 py-2 text-sm font-semibold text-[var(--color-bg-dark)] transition-colors duration-200 hover:opacity-90">
              Shop the crop
            </Link>
          </div>

          <form className="col-span-12 flex items-center gap-2 lg:col-span-5">
            <input
              aria-label="Email for harvest notes"
              type="email"
              placeholder="Get next week's harvest note"
              className="w-full border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder:text-white/40 focus:border-[var(--color-accent-light)] focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 text-sm font-semibold text-[var(--color-accent-light)] transition-colors duration-200 hover:text-white"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 border-b border-white/12 py-6 text-sm">
          {columns.map((item) => (
            <p key={item.label} className="text-white/70">
              <span className="text-white/40">{item.label} </span>
              <span className="ledger-num text-white">{item.value}</span>
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-5 text-sm text-[var(--color-text-muted-contrast)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-white">Amber Grove</p>
          <div className="flex gap-5">
            <Link href="/en/templates/OHMT036-amber-grove/shop" className="hover:text-white">Shop</Link>
            <Link href="/en/templates/OHMT036-amber-grove/about" className="hover:text-white">About</Link>
            <Link href="/en/templates/OHMT036-amber-grove/journal" className="hover:text-white">Journal</Link>
            <Link href="/en/templates/OHMT036-amber-grove/visit" className="hover:text-white">Visit</Link>
          </div>
          <p>&copy; 2026 Oh My Template.</p>
        </div>
      </div>
    </footer>
  )
}
