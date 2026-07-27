import Image from 'next/image'

type ProgramRowProps = {
  id: string
  name: string
  stat: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  reversed?: boolean
}

export function ProgramRow({ id, name, stat, tagline, description, image, imageAlt, reversed = false }: ProgramRowProps) {
  return (
    <article id={id} className="grid scroll-mt-24 gap-6 md:grid-cols-2 md:gap-16">
      <div className={`relative aspect-[16/11] overflow-hidden ohmt033-photo-frame ${reversed ? 'md:order-2' : ''}`}>
        <Image
          unoptimized
          src={`/templates/OHMT033-foundation/${image}`}
          alt={imageAlt}
          fill
          className="object-cover ohmt033-photo-cool"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xs font-medium leading-snug text-[var(--color-text-muted)]">{stat}</p>
        <h2 className="font-heading mt-2 text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
          {name}
        </h2>
        <p className="mt-2 text-base leading-relaxed text-[var(--color-text-muted)]">{tagline}</p>
        <p className="mt-4 max-w-[440px] text-base leading-relaxed text-[var(--color-text)]">{description}</p>
      </div>
    </article>
  )
}
