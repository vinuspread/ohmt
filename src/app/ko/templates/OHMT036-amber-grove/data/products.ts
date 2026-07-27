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

const imageBase = '/templates/OHMT036-amber-grove'

export const products: Product[] = [
  {
    slug: 'summer-stone-fruit',
    name: '여름 복숭아·자두 상자',
    category: '복숭아·자두',
    price: '₩38,000',
    season: '6월~8월',
    image: `${imageBase}/product-stone-fruit.jpg`,
    description:
      '복숭아, 천도복숭아, 살구, 자두를 익는 순서에 맞춰 담아 며칠에 걸쳐 차례로 즐길 수 있는 혼합 상자입니다.',
    details: ['4~5kg 혼합 구성', '배송을 고려해 단단할 때 수확', '후숙 안내 카드 포함'],
    shipWindow: '화요일과 수요일에 선별·포장을 마친 뒤 출고합니다.',
  },
  {
    slug: 'mountain-berries',
    name: '제철 베리 한 상자',
    category: '베리류',
    price: '₩34,000',
    season: '5월~7월',
    image: `${imageBase}/product-berries.jpg`,
    description:
      '딸기, 블루베리, 라즈베리, 블랙베리를 수확 당일 선별해 종이 용기 6개에 나누어 담습니다.',
    details: ['종이 용기 6개', '종이 용기 포장', '수령 후 4일 이내 섭취 권장'],
    shipWindow: '수확 당일 아침 포장해 인근 지역에만 당일 배송합니다.',
  },
  {
    slug: 'winter-citrus',
    name: '겨울 감귤류 상자',
    category: '감귤류',
    price: '₩42,000',
    season: '12월~3월',
    image: `${imageBase}/product-citrus.jpg`,
    description:
      '오래 거래해 온 제주 농가의 감귤, 레몬, 자몽을 생과용과 마멀레이드용으로 나누어 담습니다.',
    details: ['5kg 혼합 상자', '수확 상태에 따라 잎이 달린 과일 포함', '겨울철 보온 포장'],
    shipWindow: '기온이 낮은 월요일부터 수요일 사이에 포장해 출고합니다.',
  },
  {
    slug: 'heritage-apples',
    name: '토종 사과 혼합 상자',
    category: '사과',
    price: '₩36,000',
    season: '9월~11월',
    image: `${imageBase}/product-apples.jpg`,
    description:
      '장기 보관성보다 향과 맛을 기준으로 고른 사과를 수확 시기에 따라 바꿔 담습니다.',
    details: ['5~7개 품종', '시식 카드 포함', '생과·베이킹용으로 활용'],
    shipWindow: '아침에 선별한 뒤 정해진 출고일에 보냅니다.',
  },
  {
    slug: 'small-batch-preserves',
    name: '소량으로 끓인 과일잼',
    category: '잼·가공식품',
    price: '₩28,000',
    season: '연중',
    image: `${imageBase}/product-preserves.jpg`,
    description:
      '배송하기에는 너무 익었지만 맛과 향이 좋은 과일을 골라, 설탕 사용량을 줄이고 작은 솥에서 소량씩 끓입니다.',
    details: ['240ml 3병', '복숭아·베리·감귤류 순환 구성', '인공 색소 무첨가'],
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
      '제철 과일과 잼, 그 주의 수확 기록 카드를 목재 상자에 함께 담은 선물용 구성입니다.',
    details: ['제철 과일 혼합', '잼 1병', '종이 완충재와 노끈 포장'],
    shipWindow: '희망 배송일에 맞춰 출고하며, 작황과 날씨에 따라 일정이 조정될 수 있습니다.',
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}
