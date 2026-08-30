import Image from 'next/image'

const hours = [
  { day: 'Thursday', hours: '9:00 AM – 5:00 PM', status: 'Open' },
  { day: 'Friday', hours: '9:00 AM – 5:00 PM', status: 'Open' },
  { day: 'Saturday', hours: '9:00 AM – 5:00 PM', status: 'Open' },
  { day: 'Sunday', hours: '9:00 AM – 4:00 PM', status: 'Open' },
  { day: 'Mon – Wed', hours: 'Closed', status: 'Closed' },
]

const seasonalCalendar = [
  { season: 'Spring (May – June)', crops: 'Strawberries, rhubarb, spring honey, early spinach', status: 'Stand Only' },
  { season: 'Summer (July – Aug)', crops: 'Willamette peaches, sweet cherries, blackberries, plums', status: 'Stand & Pick-Your-Own' },
  { season: 'Autumn (Sept – Nov)', crops: 'Heritage apples, fresh cider, pumpkins, pears', status: 'Stand & Pick-Your-Own' },
  { season: 'Winter (Dec – April)', crops: 'Orchard preserves, apple butter, dried fruit crates', status: 'Online Shipping Only' },
]

export default function VisitPage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Title & Introduction */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="ledger-num text-xs font-bold bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[var(--color-accent)] rounded">
            [ 01 ]
          </span>
          <span className="ledger-num text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">Visit the Orchard</span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] mt-8">
          Fresh fruit direct from our Willamette rows.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-muted)] max-w-3xl">
          Our farm stand sits right at the entrance of our main fruit blocks. You can pick up pre-ordered crates, purchase fresh-picked seasonal varieties, or walk the rows during select public harvest weeks.
        </p>
      </section>

      {/* Banner Photo */}
      <section className="relative aspect-[21/9] w-full overflow-hidden rounded border border-[var(--color-border)]">
        <Image
          src="/templates/OHMT036-amber-grove/marquee-soil.jpg"
          alt="Soil and crops at Amber Grove"
          fill
          priority
          sizes="(min-width: 1024px) 80vw, 100vw"
          className="object-cover"
        />
      </section>

      {/* Hours and Location (3-Column Layout with Top Section Header) */}
      <section className="border-t border-[var(--color-border)] pt-12 space-y-8">
        <div className="space-y-8">
          <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 02 / LOCATION & HOURS ]</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-heading)]">Farm Stand</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Location */}
          <div className="space-y-4">
            <span className="ledger-num text-xs font-bold text-[var(--color-text-muted)] block uppercase tracking-wider">[ ORCHARD ADDRESS ]</span>
            <div className="text-sm leading-relaxed text-[var(--color-text-muted)] space-y-4">
              <div>
                <p className="font-semibold text-[var(--color-text)]">Amber Grove Orchard</p>
                <p>1482 Orchard Lane,<br />Willamette Valley, Oregon</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[var(--color-text)]">Contact Info</p>
                <p>Tel: +1 503 214 0891</p>
                <p>harvest@ambergrove.test</p>
              </div>
            </div>
          </div>

          {/* Column 2: Pickup Directions */}
          <div className="space-y-4">
            <span className="ledger-num text-xs font-bold text-[var(--color-text-muted)] block uppercase tracking-wider">[ PICKUP DIRECTIONS ]</span>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              Drive past the main red barn. Follow the "Farm Stand" signs to the designated loading zone. Please have your order number ready and present it to our packhouse team on arrival.
            </p>
          </div>

          {/* Column 3: Operating Hours */}
          <div className="space-y-4">
            <span className="ledger-num text-xs font-bold text-[var(--color-accent)] block uppercase tracking-wider">[ STAND HOURS ]</span>
            <div className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between items-center py-2 text-sm">
                  <span className="font-semibold text-[var(--color-text)]">{item.day}</span>
                  <div className="flex gap-3 items-center">
                    <span className="ledger-num text-xs text-[var(--color-text-muted)]">{item.hours}</span>
                    <span className={`ledger-num text-xs px-2 py-0.5 rounded font-medium ${item.status === 'Open' ? 'bg-[var(--color-accent-light)] text-[var(--color-accent)]' : 'bg-red-50 text-red-700'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Crop Calendar (Full-Width Header & Table) */}
      <section className="border-t border-[var(--color-border)] pt-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-8">
            <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 03 / CALENDAR ]</span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-heading)]">What to Pick</h2>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] max-w-md pb-1">
            Crops change weekly based on climate conditions. Check our picking ledger before planning a harvest walk.
          </p>
        </div>

        <div className="overflow-x-auto border border-[var(--color-border)] rounded">
          <table className="min-w-full divide-y divide-[var(--color-border)] text-left text-sm">
            <thead className="bg-[var(--color-bg-secondary)]">
              <tr>
                <th scope="col" className="px-6 py-4 font-bold text-[var(--color-text)]">Season</th>
                <th scope="col" className="px-6 py-4 font-bold text-[var(--color-text)]">Crops Available</th>
                <th scope="col" className="px-6 py-4 font-bold text-[var(--color-text)]">Stand Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border)] bg-white">
              {seasonalCalendar.map((item) => (
                <tr key={item.season}>
                  <td className="px-6 py-4 font-semibold text-[var(--color-text)] whitespace-nowrap">{item.season}</td>
                  <td className="px-6 py-4 text-[var(--color-text-muted)]">{item.crops}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="ledger-num text-xs bg-[var(--color-bg-secondary)] px-2.5 py-1 rounded text-[var(--color-accent)] font-medium">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Wholesale & Commercial Programs (Full-Width Header & Info Grid) */}
      <section className="border-t border-[var(--color-border)] pt-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-8">
            <span className="ledger-num text-xs font-bold text-[var(--color-accent)]">[ 04 / PARTNERSHIP ]</span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-semibold leading-[var(--leading-heading)]">Direct Wholesale</h2>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] max-w-md pb-1">
            We supply small-batch stone fruit, cider apples, and cold-pressed preserves to select restaurants and local grocers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--color-text)] leading-[var(--leading-heading)]">Wholesale & Culinary Accounts</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              If you are a chef, grocer, or beverage producer looking for certified organic raw fruit lot orders, please contact our wholesale packing room directly or request our weekly inventory ledger.
            </p>
          </div>
          <div className="flex flex-col justify-between p-6 border border-[var(--color-border)] rounded bg-white space-y-4">
            <div className="flex justify-between items-center text-sm border-b border-[var(--color-border)] pb-3">
              <span className="ledger-num text-xs text-[var(--color-text-muted)] font-semibold">EMAIL</span>
              <strong className="text-[var(--color-text)]">wholesale@ambergrove.test</strong>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-[var(--color-border)] pb-3">
              <span className="ledger-num text-xs text-[var(--color-text-muted)] font-semibold">RESPONSE TIME</span>
              <span className="ledger-num text-xs font-medium text-[var(--color-accent)]">WITHIN 24 HOURS</span>
            </div>
            <a href="mailto:wholesale@ambergrove.test" className="inline-flex items-center justify-center rounded bg-[var(--color-bg-dark)] px-5 py-2.5 text-xs font-bold text-[var(--color-text-contrast)] transition-colors duration-200 hover:opacity-90">
              Request Inventory Ledger
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
