import Image from 'next/image'
import Link from 'next/link'

export function ImageCard({
  href,
  image,
  alt,
  meta,
  title,
  description,
  imageClassName = 'object-cover',
}: {
  href?: string
  image: string
  alt: string
  meta?: string
  title: string
  description?: string
  imageClassName?: string
}) {
  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden ohmt033-photo-frame">
        <Image
          unoptimized
          src={`/templates/OHMT033-foundation/${image}`}
          alt={alt}
          fill
          className={`${imageClassName} ohmt033-photo-cool transition-transform duration-500 group-hover:scale-[1.03]`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      {meta ? <p className="mt-4 text-xs font-medium leading-snug text-[var(--color-text-muted)]">{meta}</p> : null}
      <h2 className="mt-2 font-heading text-lg font-semibold leading-snug text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
        {title}
      </h2>
      {description ? <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">{description}</p> : null}
    </>
  )

  if (href) {
    return (
      <Link href={href} className="group block">
        {content}
      </Link>
    )
  }

  return <article className="group">{content}</article>
}
