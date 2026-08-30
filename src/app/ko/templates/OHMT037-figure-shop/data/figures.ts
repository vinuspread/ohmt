export const BASE = '/ko/templates/OHMT037-figure-shop'
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
    label: '1:7 스케일',
    blurb: '전신 조형과 베이스까지 맞춘 컬렉터 스케일 라인.',
    image: `${IMG}/line-scale.webp`,
  },
  {
    id: 'mecha',
    label: 'Mecha',
    blurb: '노출 조인트, 교체 파츠, 새틴 패널을 갖춘 프레임 라인.',
    image: `${IMG}/line-mecha.webp`,
  },
  {
    id: 'chibi',
    label: 'Chibi',
    blurb: '작고 부드러운 비닐 피규어. 첫 컬렉션으로 고르기 쉽습니다.',
    image: `${IMG}/line-chibi.webp`,
  },
  {
    id: 'garage',
    label: 'Garage Kit',
    blurb: '도색 전 레진 키트. 조형선과 분할 구조가 그대로 보입니다.',
    image: `${IMG}/line-garage.webp`,
  },
  {
    id: 'limited',
    label: 'Limited',
    blurb: '정해진 수량만 만들고 닫는 컬러웨이.',
    image: `${IMG}/line-limited.webp`,
  },
]

export const CAMPAIGN = {
  title: 'Ceramic Art Series 01',
  subtitle: '세 개의 조용한 오브제, 하나의 선반. FORMA의 첫 미니멀 아트 토이 컬렉션.',
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
    materials: ['폴리스톤 바디', '클레이 질감 파츠', '손도색 무광 마감'],
    description:
      'Ceramic Series 01의 대표 피스. 크림 화이트와 베이지 톤의 유기적인 베이스에 파스텔 테라코타 라인을 손으로 넣었습니다. 각 피스는 베이스 플레이트에 번호를 새깁니다.',
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
    materials: ['ABS 프레임', 'POM 조인트', '새틴 패널 플레이트'],
    description:
      '각도를 조절할 수 있는 모듈형 디스플레이 타워. 34개의 구조 포인트와 옅은 그레이 새틴 패널을 갖췄습니다. 미니멀 우드 스탠드가 함께 제공됩니다.',
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
    materials: ['소프트 비닐', '투톤 에어브러시'],
    description:
      '세이지 그린과 샌드 톤의 작은 보태니컬 오브제. 매끈한 비닐 바디에 두 번의 에어브러시 그라데이션을 올렸습니다. 조립 없이 바로 전시할 수 있습니다.',
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
    materials: ['PVC', '클레이 질감 조형 코트', '샌드 워시 베이스'],
    description:
      '자연스러운 곡선을 살린 유기적 클레이 스컬프처. 돌 같은 표면 질감을 손으로 다듬고, 마지막에 가벼운 샌드 워시를 더합니다.',
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
    materials: ['미도색 레진 14파츠', '브라스 핀 로드 포함'],
    description:
      '샌드스톤 톤의 꽃봉오리 마케트. 14개의 레진 파츠와 맞물리는 결합부로 구성했습니다. Garage Kit 라인에서 가장 접근하기 쉽지만, 빌드감은 분명합니다.',
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
    materials: ['ABS 쉘', '비닐 돔 헤드', '새틴 투톤 마감'],
    description:
      '크림과 민트 톤의 데스크톱 세라믹 돔. 돔 헤드는 회전하고, 일부 파츠는 교체할 수 있습니다. 한 손에 들어오는 작은 오브제입니다.',
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
    materials: ['비닐', '브라스 조인트 포인트'],
    description:
      '본 화이트 바디와 폴리시드 브라스 포인트를 가진 폭스 오브제. 첫 주말에 전체 수량이 소진된 FORMA 초기 에디션입니다.',
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
    materials: ['폴리스톤', '무광 테라코타 마감', '손으로 넣은 아이보리 라인'],
    description:
      'Solis 조형을 무광 테라코타와 아이보리 라인으로 다시 구성한 Dusk Edition. 총 150개만 만들고 재생산하지 않습니다.',
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

export const statusLabel = (status: FigureStatus): string => {
  if (status === 'In stock') return '판매 중'
  if (status === 'Pre-order') return '예약 중'
  if (status === 'Coming soon') return '공개 예정'
  return '품절'
}

export const formatUsd = (n: number) => `${n.toFixed(2)} USD`
