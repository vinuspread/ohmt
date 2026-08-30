export type JournalPost = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  body: string[]
}

const imageBase = '/templates/en/OHMT036-amber-grove'

export const journalPosts: JournalPost[] = [
  {
    slug: 'how-we-pick-stone-fruit',
    title: 'How We Pick Stone Fruit Before It Goes Soft',
    date: 'July 2, 2026',
    image: `${imageBase}/feature-harvest.jpg`,
    excerpt:
      'Peaches and apricots need time after picking. Here is how we choose fruit that arrives fragrant, not bruised.',
    body: [
      'Stone fruit is never a single-day decision. We walk each row in the morning, mark the trees that are close, and pick only the shoulders that give slightly under the thumb.',
      'Fruit for local pickup can be softer. Fruit that travels needs one or two quiet days in the kitchen. That difference is why each crate includes a ripening note.',
      'The goal is simple: fruit that still has structure when it reaches you, then opens into full aroma at home.',
    ],
  },
  {
    slug: 'packing-fruit-without-plastic',
    title: 'Packing Fruit Without Plastic Clamshells',
    date: 'June 18, 2026',
    image: `${imageBase}/tracking-crates.jpg`,
    excerpt:
      'Paper, tissue, and careful sorting replace most plastic in our packing room. The work is slower but worth it.',
    body: [
      'The fastest package is not always the gentlest one. We use paper punnets, molded trays, and folded tissue so fruit can breathe without rolling around.',
      'Every box is packed by weight and touch. Soft fruit sits high, firm fruit anchors the bottom, and anything overripe goes to preserves instead of the shipping line.',
      'It takes longer than clamshell packing, but it keeps the crate honest and easier to recycle.',
    ],
  },
  {
    slug: 'why-cover-crops-matter',
    title: 'Why Cover Crops Matter Between the Rows',
    date: 'May 29, 2026',
    image: `${imageBase}/marquee-soil.jpg`,
    excerpt:
      'The green under the trees is not decoration. It cools the soil, holds moisture, and feeds the orchard over time.',
    body: [
      'Healthy fruit starts below the ladder. Clover, grasses, and seasonal cover crops keep the ground from baking during hot weeks.',
      'We mow high, leave roots in place, and let organic matter return slowly. That keeps moisture steadier when the fruit is sizing up.',
      'It is quiet work, but it changes the flavor and resilience of the orchard more than any single harvest day.',
    ],
  },
]

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug)
}
