export const BASE = '/en/templates/OHMT037-figure-shop'
export const IMG = '/templates/OHMT037-figure-shop/optimized'

export type LineId = 'scale' | 'mecha' | 'chibi' | 'garage' | 'limited'

export type FigureStatus = 'In stock' | 'Pre-order' | 'Coming soon' | 'Sold out'

export type Line = {
  id: LineId
  label: string
  blurb: string
  image: string
}

export type Figure = {
  slug: string
  name: string
  line: LineId
  scale: string
  heightMm: number
  priceUsd: number
  status: FigureStatus
  editionSize: number
  claimedPct: number
  paintGrade: number
  assembly: number
  artist: string
  materials: string[]
  description: string
  images: { main: string; alt: string }
  colorways: { id: string; label: string }[]
}

export const LINES: Line[] = [
  {
    id: 'scale',
    label: '1:7 Scale',
    blurb: 'Full character sculpts at collector scale, hand-finished in small batches.',
    image: `${IMG}/line-scale.webp`,
  },
  {
    id: 'mecha',
    label: 'Mecha',
    blurb: 'Frame figures with exposed joints, swap parts, and satin panel finishes.',
    image: `${IMG}/line-mecha.webp`,
  },
  {
    id: 'chibi',
    label: 'Chibi',
    blurb: 'Compact vinyl sculpts in muted tones. The soft entry into the catalog.',
    image: `${IMG}/line-chibi.webp`,
  },
  {
    id: 'garage',
    label: 'Garage Kit',
    blurb: 'Unpainted resin kits for builders. Primer gray, every sculpt line visible.',
    image: `${IMG}/line-garage.webp`,
  },
  {
    id: 'limited',
    label: 'Limited',
    blurb: 'Numbered colorways that do not return. One run, one ledger.',
    image: `${IMG}/line-limited.webp`,
  },
]

export const CAMPAIGN = {
  title: 'Ceramic Art Series 01',
  subtitle: 'Three quiet objects, one shelf. The first collection of FORMA minimalist art toys.',
  image: `${IMG}/campaign-kaiju.webp`,
}

export const FIGURES: Figure[] = [
  {
    slug: 'vala-kaiju-03',
    name: 'Solis',
    line: 'limited',
    scale: 'Non-scale',
    heightMm: 280,
    priceUsd: 289,
    status: 'Pre-order',
    editionSize: 300,
    claimedPct: 72,
    paintGrade: 92,
    assembly: 10,
    artist: 'Rin Okabe',
    materials: ['Polystone body', 'Clay finish parts', 'Hand-painted matte finish'],
    description:
      'The flagship of Ceramic Series 01. A soft organic vase sculpt in cream white and beige, finished with a single pastel terracotta stripe. Each piece is numbered on the base plate.',
    images: { main: `${IMG}/figure-01a.webp`, alt: `${IMG}/figure-01b.webp` },
    colorways: [
      { id: 'slate', label: 'Slate / Bone' },
      { id: 'night', label: 'Night Patrol' },
    ],
  },
  {
    slug: 'frame-07-vanguard',
    name: 'Mesa 07 Tower',
    line: 'mecha',
    scale: '1:12',
    heightMm: 190,
    priceUsd: 168,
    status: 'In stock',
    editionSize: 800,
    claimedPct: 41,
    paintGrade: 68,
    assembly: 55,
    artist: 'FORMA Mecha Bureau',
    materials: ['ABS frame', 'POM joints', 'Panel-lined satin plates'],
    description:
      'A modular geometry display tower with 34 points of adjustable structural angles and satin pale grey plates. Ships with a minimalist wooden display stand.',
    images: { main: `${IMG}/figure-02a.webp`, alt: `${IMG}/figure-02b.webp` },
    colorways: [
      { id: 'gunmetal', label: 'Gunmetal' },
      { id: 'arctic', label: 'Arctic Test' },
    ],
  },
  {
    slug: 'moss-spirit',
    name: 'Moss Oasis',
    line: 'chibi',
    scale: 'Non-scale',
    heightMm: 110,
    priceUsd: 64,
    status: 'In stock',
    editionSize: 1200,
    claimedPct: 33,
    paintGrade: 45,
    assembly: 0,
    artist: 'Hana Lieu',
    materials: ['Soft vinyl', 'Two-tone airbrush'],
    description:
      'A serene botanical art object in soft sage green and sand. Smooth vinyl with a two-pass airbrush gradient. No assembly, no fuss. The one everyone starts with.',
    images: { main: `${IMG}/figure-03a.webp`, alt: `${IMG}/figure-03b.webp` },
    colorways: [{ id: 'sage', label: 'Sage / Cream' }],
  },
  {
    slug: 'wanderer-17',
    name: 'The Meadow',
    line: 'scale',
    scale: '1:7',
    heightMm: 260,
    priceUsd: 224,
    status: 'Pre-order',
    editionSize: 500,
    claimedPct: 58,
    paintGrade: 88,
    assembly: 15,
    artist: 'Rin Okabe',
    materials: ['PVC', 'Cloth-textured sculpted coat', 'Weathered base'],
    description:
      'An organic smooth clay sculpture capturing fluid natural curves. The stone-like texture is hand-sculpted and takes a light sand-wash pass by hand.',
    images: { main: `${IMG}/figure-04a.webp`, alt: `${IMG}/figure-04b.webp` },
    colorways: [
      { id: 'earth', label: 'Earth Road' },
      { id: 'dusk', label: 'Dusk Road' },
    ],
  },
  {
    slug: 'hatchling-kit',
    name: 'Petal Cast Kit',
    line: 'garage',
    scale: 'Non-scale',
    heightMm: 160,
    priceUsd: 88,
    status: 'In stock',
    editionSize: 400,
    claimedPct: 22,
    paintGrade: 0,
    assembly: 85,
    artist: 'Studio cast',
    materials: ['Unpainted resin, 14 parts', 'Brass pinning rods included'],
    description:
      'A minimalist organic flower bud maquette in raw sandstone, fourteen resin parts with keyed seams. The friendliest sculpt in the kit line, and still a real build.',
    images: { main: `${IMG}/figure-05a.webp`, alt: `${IMG}/figure-05b.webp` },
    colorways: [{ id: 'primer', label: 'Primer Gray' }],
  },
  {
    slug: 'bitto-companion',
    name: 'Ova Dome',
    line: 'mecha',
    scale: 'Non-scale',
    heightMm: 140,
    priceUsd: 120,
    status: 'Coming soon',
    editionSize: 900,
    claimedPct: 0,
    paintGrade: 58,
    assembly: 5,
    artist: 'Hana Lieu',
    materials: ['ABS shell', 'Vinyl dome head', 'Satin two-tone finish'],
    description:
      'A modern desktop ceramic dome in cream and mint. The dome head rotates, the elements swap, and the whole object fits in one hand.',
    images: { main: `${IMG}/figure-06a.webp`, alt: `${IMG}/figure-06b.webp` },
    colorways: [{ id: 'cream', label: 'Cream / Teal' }],
  },
  {
    slug: 'bonefox',
    name: 'Luna Fox',
    line: 'chibi',
    scale: 'Non-scale',
    heightMm: 130,
    priceUsd: 78,
    status: 'Sold out',
    editionSize: 600,
    claimedPct: 100,
    paintGrade: 52,
    assembly: 0,
    artist: 'Hana Lieu',
    materials: ['Vinyl', 'Brass joint accents'],
    description:
      'A graceful stylized fox sculpture in smooth bone white with polished brass accents. The first FORMA art toy to sell through its run in one weekend.',
    images: { main: `${IMG}/figure-07a.webp`, alt: `${IMG}/figure-07b.webp` },
    colorways: [{ id: 'bone', label: 'Bone / Brass' }],
  },
  {
    slug: 'vala-night-patrol',
    name: 'Solis: Dusk Edition',
    line: 'limited',
    scale: 'Non-scale',
    heightMm: 280,
    priceUsd: 320,
    status: 'Pre-order',
    editionSize: 150,
    claimedPct: 86,
    paintGrade: 94,
    assembly: 10,
    artist: 'Rin Okabe',
    materials: ['Polystone', 'Matte terracotta finish', 'Ivory detail stripe, hand-lined'],
    description:
      'The Solis sculpt in matte terracotta and ivory. One hundred fifty pieces, numbered, never recast.',
    images: { main: `${IMG}/figure-08a.webp`, alt: `${IMG}/figure-08b.webp` },
    colorways: [{ id: 'night', label: 'Night Patrol' }],
  },
]

export const NEW_DROPS = ['vala-kaiju-03', 'frame-07-vanguard', 'wanderer-17', 'moss-spirit', 'bitto-companion']
export const ART_TOY_DROPS = ['moss-spirit', 'bonefox', 'bitto-companion', 'hatchling-kit', 'vala-night-patrol']

export const figureBySlug = (slug: string) => FIGURES.find((f) => f.slug === slug)

export const figuresBySlugs = (slugs: string[]) =>
  slugs.map((s) => figureBySlug(s)).filter((f): f is Figure => Boolean(f))

export const lineLabel = (id: LineId) => LINES.find((l) => l.id === id)?.label ?? id

export const formatUsd = (n: number) => `${n.toFixed(2)} USD`
