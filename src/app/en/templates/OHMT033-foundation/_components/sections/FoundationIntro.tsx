import { ButtonLink } from '../ui/ButtonLink'

const base = '/en/templates/OHMT033-foundation'

const notes = [
  {
    title: 'Built for verification',
    body: 'Programs are designed around data that can be checked later: attendance logs, grant ledgers, volunteer hours, and follow-up outcomes.',
  },
  {
    title: 'Written around people',
    body: 'The numbers matter because they point back to students, neighbors, volunteers, and first-generation graduates with names and histories.',
  },
]

export function FoundationIntro() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:pb-16 md:pt-32">
      <div className="mx-auto max-w-[1440px] border-t border-[#111827] pt-6 md:pt-7">
        <div className="flex flex-col gap-6 md:gap-8">
          <p className="text-xs font-semibold leading-[var(--leading-heading)] text-[var(--color-accent)] md:text-sm">About VERITAS Foundation</p>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-6 md:gap-12">
          <h2 className="max-w-[525px] font-heading text-4xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
            A foundation built to make impact easier to inspect.
          </h2>
          <ButtonLink href={`${base}/about`} variant="outline" size="sm">
            About the foundation
          </ButtonLink>
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <p className="max-w-[346px] text-base leading-[var(--leading-body)] text-[var(--color-text)]">
              VERITAS Foundation funds community programs only when the work can be named, counted, and followed over
              time. That makes the site less like a campaign page and more like a public record people can return to.
            </p>
          <div className="grid gap-6 md:max-w-[385px]">
            {notes.map((note) => (
              <div key={note.title}>
                <h3 className="font-heading text-base font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-lg">
                  {note.title}
                </h3>
                <p className="mt-2 text-sm leading-[var(--leading-body)] text-[var(--color-text-muted)] md:mt-3">{note.body}</p>
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
