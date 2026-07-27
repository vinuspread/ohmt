export type JournalPost = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  body: string[]
}

const imageBase = '/templates/OHMT036-amber-grove'

export const journalPosts: JournalPost[] = [
  {
    slug: 'how-we-pick-stone-fruit',
    title: '복숭아를 물러지기 전에 수확하는 방법',
    date: '2026년 7월 2일',
    image: `${imageBase}/feature-harvest.jpg`,
    excerpt:
      '복숭아와 살구는 수확 뒤에도 후숙이 진행됩니다. 멍이 적고 향이 살아 있는 상태로 보내기 위해 어떤 기준으로 수확하는지 소개합니다.',
    body: [
      '복숭아와 살구 같은 핵과류는 하루만 보고 수확 시기를 정하지 않습니다. 아침마다 나무를 살피고, 과실 어깨 부분의 탄력과 향, 색을 확인해 익은 열매를 골라 땁니다.',
      '직판장에서 바로 가져가는 과일은 충분히 익은 상태로 준비합니다. 배송용 과일은 이동 시간과 집에서 하루 이틀 후숙할 시간을 고려해 조금 단단할 때 수확합니다. 상자에 후숙 안내 카드를 넣는 이유입니다.',
      '배송 중에는 형태를 유지하고, 받은 뒤 알맞게 후숙해 향과 식감이 좋아지는 상태를 기준으로 선별합니다.',
    ],
  },
  {
    slug: 'packing-fruit-without-plastic',
    title: '플라스틱 용기를 줄인 과일 포장',
    date: '2026년 6월 18일',
    image: `${imageBase}/tracking-crates.jpg`,
    excerpt:
      '종이 용기와 완충재, 세심한 선별로 플라스틱 사용을 줄입니다. 포장 방식과 분리배출 방법을 함께 소개합니다.',
    body: [
      '포장 속도보다 과일이 흔들리거나 눌리지 않게 담는 일이 중요합니다. 종이 용기와 성형 트레이, 접은 완충재를 사용해 과일 사이에 공간을 만들고 통풍도 확보합니다.',
      '과일의 단단함과 무게를 확인해 상자에 담습니다. 단단한 과일은 아래에, 쉽게 무르는 과일은 위에 놓고, 배송에 적합하지 않을 만큼 익은 과일은 잼 재료로 사용합니다.',
      '플라스틱 용기보다 포장 시간이 더 걸리지만, 포장재를 분리해 버리기 쉽고 플라스틱 사용도 줄일 수 있습니다.',
    ],
  },
  {
    slug: 'why-cover-crops-matter',
    title: '나무 사이에 풀을 남겨두는 이유',
    date: '2026년 5월 29일',
    image: `${imageBase}/marquee-soil.jpg`,
    excerpt:
      '과수원 바닥의 풀은 흙의 온도와 수분을 조절하고 유기물을 보충합니다. 풀을 관리하는 방식과 이유를 설명합니다.',
    body: [
      '과수원 바닥의 클로버와 풋거름 작물은 한여름에 흙이 빠르게 마르고 갈라지는 것을 줄여줍니다.',
      '풀은 너무 짧게 베지 않고 뿌리를 남깁니다. 잘린 풀과 뿌리가 천천히 분해되면 흙에 유기물이 보충되고, 과실이 자라는 시기의 토양 수분도 비교적 고르게 유지됩니다.',
      '눈에 띄는 작업은 아니지만, 토양 상태와 나무의 생육을 꾸준히 관리하는 데 중요한 과정입니다.',
    ],
  },
]

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug)
}
