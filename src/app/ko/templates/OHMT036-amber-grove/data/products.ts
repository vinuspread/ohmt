export type Product = {
  slug: string
  name: string
  category: string
  price: string
  season: string
  image: string
  description: string
  details: string[]
  shipWindow: string
}

const imageBase = '/templates/ko/OHMT036-amber-grove'

export const products: Product[] = [
  {
    slug: 'summer-stone-fruit',
    name: '여름 핵과 상자',
    category: '핵과',
    price: '₩38,000',
    season: '6월~8월',
    image: `${imageBase}/product-stone-fruit.jpg`,
    description:
      '복숭아, 천도복숭아, 살구, 자두를 한 주에 걸쳐 드실 수 있도록 익는 순서를 맞춰 담은 상자입니다.',
    details: ['4~5kg 혼합 구성', '단단하게 익었을 때 수확', '후숙 안내 카드 포함'],
    shipWindow: '당도가 가장 오른 화요일과 수요일에 출고합니다.',
  },
  {
    slug: 'mountain-berries',
    name: '산지 베리 한 판',
    category: '베리',
    price: '₩34,000',
    season: '5월~7월',
    image: `${imageBase}/product-berries.jpg`,
    description:
      '딸기, 블루베리, 라즈베리, 블랙베리를 수확한 날 아침에 종이 용기에 차갑게 담습니다.',
    details: ['종이 용기 6개', '플라스틱 용기 없음', '4일 안에 드시길 권장'],
    shipWindow: '수확일 아침, 권역 내 당일 배송만 합니다.',
  },
  {
    slug: 'winter-citrus',
    name: '겨울 시트러스 상자',
    category: '시트러스',
    price: '₩42,000',
    season: '12월~3월',
    image: `${imageBase}/product-citrus.jpg`,
    description:
      '오래 거래해 온 제주 농가의 감귤과 레몬, 자몽을 생과용과 마멀레이드용으로 나누어 선별해 담습니다.',
    details: ['5kg 혼합 상자', '수확 상황에 따라 잎 달린 과일 포함', '겨울철 보온 포장'],
    shipWindow: '기온이 낮은 월요일부터 수요일 사이에 출고합니다.',
  },
  {
    slug: 'heritage-apples',
    name: '토종 사과 바구니',
    category: '사과',
    price: '₩36,000',
    season: '9월~11월',
    image: `${imageBase}/product-apples.jpg`,
    description:
      '진열대에서 오래 버티는 품종 대신, 향과 맛을 기준으로 기른 사과를 철마다 바꿔 담습니다.',
    details: ['5~7개 품종', '시식 카드 포함', '생식과 베이킹 모두 적합'],
    shipWindow: '아침 선별을 마친 뒤 매주 출고합니다.',
  },
  {
    slug: 'small-batch-preserves',
    name: '소량 제조 과일잼',
    category: '잼과 저장식품',
    price: '₩28,000',
    season: '연중',
    image: `${imageBase}/product-preserves.jpg`,
    description:
      '배송하기엔 너무 익었지만 버리기엔 아까운 과일로, 설탕을 줄여 작은 솥에 소량씩 끓입니다.',
    details: ['240ml 3병', '복숭아, 베리, 시트러스 순환 구성', '인공 색소 없음'],
    shipWindow: '매주 금요일에 출고합니다.',
  },
  {
    slug: 'orchard-gift-crate',
    name: '과수원 선물 상자',
    category: '선물 상자',
    price: '₩68,000',
    season: '계절 구성',
    image: `${imageBase}/product-gift-crate.jpg`,
    description:
      '제철 과일과 잼, 그 주의 밭 기록 카드를 나무 상자에 함께 담은 선물용 구성입니다.',
    details: ['제철 과일 혼합', '잼 1병', '종이 완충재와 노끈 손포장'],
    shipWindow: '원하시는 날짜에 맞춰 출고합니다. 작황과 날씨에 따라 조정될 수 있습니다.',
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
