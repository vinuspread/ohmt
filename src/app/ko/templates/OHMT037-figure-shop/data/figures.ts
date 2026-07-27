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
  priceKrw: number
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
    label: '1:7 스케일 피규어',
    blurb: '전신 원형과 전용 베이스를 함께 구성한 대형 스케일 피규어 라인입니다.',
    image: `${IMG}/line-scale.webp`,
  },
  {
    id: 'mecha',
    label: '메카',
    blurb: '관절 구조와 교체 파츠, 새틴 패널을 갖춘 기계형 피규어 라인입니다.',
    image: `${IMG}/line-mecha.webp`,
  },
  {
    id: 'chibi',
    label: '치비',
    blurb: '작고 둥근 비율로 제작한 소프트 비닐 피규어 라인입니다.',
    image: `${IMG}/line-chibi.webp`,
  },
  {
    id: 'garage',
    label: '개러지 키트',
    blurb: '도색하지 않은 레진 부품으로 구성해 직접 조립하고 칠할 수 있는 키트입니다.',
    image: `${IMG}/line-garage.webp`,
  },
  {
    id: 'limited',
    label: '한정 에디션',
    blurb: '정해진 수량만 제작하고 판매를 종료하는 한정 색상 에디션입니다.',
    image: `${IMG}/line-limited.webp`,
  },
]

export const CAMPAIGN = {
  title: 'Ceramic Art Series 01',
  subtitle: '선반 위에 함께 놓을 수 있도록 디자인한 세 가지 미니멀 아트 토이 컬렉션입니다.',
  image: `${IMG}/campaign-kaiju.webp`,
}

export const FIGURES: Figure[] = [
  {
    slug: 'vala-kaiju-03',
    name: 'Solis',
    line: 'limited',
    scale: 'Non-scale',
    heightMm: 280,
    priceKrw: 289000,
    status: 'Pre-order',
    editionSize: 300,
    claimedPct: 72,
    paintGrade: 92,
    assembly: 10,
    artist: 'Rin Okabe',
    materials: ['폴리스톤 바디', '클레이 질감 파츠', '손도색 무광 마감'],
    description:
      'Ceramic Art Series 01을 대표하는 피규어입니다.\n크림 화이트와 베이지 톤의 유기적인 베이스에 파스텔 테라코타 선을 손으로 칠했습니다.\n베이스 플레이트에는 각 제품의 에디션 번호를 새깁니다.',
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
    priceKrw: 168000,
    status: 'In stock',
    editionSize: 800,
    claimedPct: 41,
    paintGrade: 68,
    assembly: 55,
    artist: 'FORMA Mecha Bureau',
    materials: ['ABS 프레임', 'POM 조인트', '새틴 패널 플레이트'],
    description:
      '각도를 조절할 수 있는 모듈형 디스플레이 타워입니다.\n34개의 가동 지점과 옅은 회색 새틴 패널로 구성했으며, 원목 전시대가 함께 제공됩니다.',
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
    priceKrw: 64000,
    status: 'In stock',
    editionSize: 1200,
    claimedPct: 33,
    paintGrade: 45,
    assembly: 0,
    artist: 'Hana Lieu',
    materials: ['소프트 비닐', '투톤 에어브러시'],
    description:
      '세이지 그린과 샌드 색상을 조합한 작은 식물 모티프 피규어입니다.\n매끈한 비닐 본체에 두 단계의 에어브러시 그라데이션을 더했으며, 조립 없이 바로 전시할 수 있습니다.',
    images: { main: `${IMG}/figure-03a.webp`, alt: `${IMG}/figure-03b.webp` },
    colorways: [{ id: 'sage', label: 'Sage / Cream' }],
  },
  {
    slug: 'wanderer-17',
    name: 'The Meadow',
    line: 'scale',
    scale: '1:7',
    heightMm: 260,
    priceKrw: 224000,
    status: 'Pre-order',
    editionSize: 500,
    claimedPct: 58,
    paintGrade: 88,
    assembly: 15,
    artist: 'Rin Okabe',
    materials: ['PVC', '클레이 질감 조형 코트', '샌드 워시 베이스'],
    description:
      '자연스러운 곡선을 살린 클레이 조형 피규어입니다.\n돌처럼 거친 표면을 손으로 다듬고, 마지막에 옅은 샌드 워시를 더해 마감했습니다.',
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
    priceKrw: 88000,
    status: 'In stock',
    editionSize: 400,
    claimedPct: 22,
    paintGrade: 0,
    assembly: 85,
    artist: 'FORMA 스튜디오',
    materials: ['미도색 레진 14파츠', '브라스 핀 로드 포함'],
    description:
      '샌드스톤 색상의 꽃봉오리 원형을 바탕으로 만든 키트입니다.\n서로 맞물리는 14개의 레진 부품으로 구성했으며, 개러지 키트를 처음 조립하는 분도 비교적 쉽게 시작할 수 있습니다.',
    images: { main: `${IMG}/figure-05a.webp`, alt: `${IMG}/figure-05b.webp` },
    colorways: [{ id: 'primer', label: 'Primer Gray' }],
  },
  {
    slug: 'bitto-companion',
    name: 'Ova Dome',
    line: 'mecha',
    scale: 'Non-scale',
    heightMm: 140,
    priceKrw: 120000,
    status: 'Coming soon',
    editionSize: 900,
    claimedPct: 0,
    paintGrade: 58,
    assembly: 5,
    artist: 'Hana Lieu',
    materials: ['ABS 쉘', '비닐 돔 헤드', '새틴 투톤 마감'],
    description:
      '크림과 민트 색상을 조합한 탁상용 돔 피규어입니다.\n돔 형태의 머리를 돌릴 수 있고 일부 부품을 교체할 수 있으며, 한 손에 들어오는 작은 크기입니다.',
    images: { main: `${IMG}/figure-06a.webp`, alt: `${IMG}/figure-06b.webp` },
    colorways: [{ id: 'cream', label: 'Cream / Teal' }],
  },
  {
    slug: 'bonefox',
    name: 'Luna Fox',
    line: 'chibi',
    scale: 'Non-scale',
    heightMm: 130,
    priceKrw: 78000,
    status: 'Sold out',
    editionSize: 600,
    claimedPct: 100,
    paintGrade: 52,
    assembly: 0,
    artist: 'Hana Lieu',
    materials: ['비닐', '브라스 조인트 포인트'],
    description:
      '아이보리색 본체에 광택을 낸 황동 장식을 더한 여우 모티프 피규어입니다.\n출시 첫 주말에 준비 수량이 모두 판매된 FORMA의 초기 에디션입니다.',
    images: { main: `${IMG}/figure-07a.webp`, alt: `${IMG}/figure-07b.webp` },
    colorways: [{ id: 'bone', label: 'Bone / Brass' }],
  },
  {
    slug: 'vala-night-patrol',
    name: 'Solis: Dusk Edition',
    line: 'limited',
    scale: 'Non-scale',
    heightMm: 280,
    priceKrw: 320000,
    status: 'Pre-order',
    editionSize: 150,
    claimedPct: 86,
    paintGrade: 94,
    assembly: 10,
    artist: 'Rin Okabe',
    materials: ['폴리스톤', '무광 테라코타 마감', '손으로 넣은 아이보리 라인'],
    description:
      'Solis 원형을 무광 테라코타와 아이보리 도색으로 새롭게 구성한 Dusk Edition입니다.\n총 150개만 제작하며 같은 구성으로 재생산하지 않습니다.',
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

export const formatKrw = (n: number) => `${n.toLocaleString('ko-KR')}원`
