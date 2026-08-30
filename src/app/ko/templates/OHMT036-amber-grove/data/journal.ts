export type JournalPost = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  body: string[]
}

const imageBase = '/templates/ko/OHMT036-amber-grove'

export const journalPosts: JournalPost[] = [
  {
    slug: 'how-we-pick-stone-fruit',
    title: '복숭아가 물러지기 전에 따는 법',
    date: '2026년 7월 2일',
    image: `${imageBase}/feature-harvest.jpg`,
    excerpt:
      '복숭아와 살구는 딴 뒤에도 시간이 필요합니다. 멍 없이 향이 살아서 도착하는 과일은 어떻게 고르는지 적었습니다.',
    body: [
      '핵과 수확은 하루 만에 정하는 일이 아닙니다. 아침마다 나무 사이를 걸으며 익어가는 나무에 표시를 해 두고, 엄지로 눌렀을 때 어깨 부분이 살짝 들어가는 과일만 땁니다.',
      '직판장에서 가져가실 과일은 조금 더 무르게 익어도 됩니다. 배송되는 과일은 부엌에서 하루 이틀 조용히 후숙할 시간이 필요합니다. 상자마다 후숙 안내 카드를 넣는 이유입니다.',
      '목표는 단순합니다. 도착할 때까지 형태가 살아 있다가, 집에서 향이 완전히 열리는 과일입니다.',
    ],
  },
  {
    slug: 'packing-fruit-without-plastic',
    title: '플라스틱 용기 없이 과일을 포장하는 일',
    date: '2026년 6월 18일',
    image: `${imageBase}/tracking-crates.jpg`,
    excerpt:
      '종이와 완충지, 꼼꼼한 선별이 포장실의 플라스틱 대부분을 대신합니다. 손은 더 가지만 그만한 값을 합니다.',
    body: [
      '가장 빠른 포장이 가장 안전한 포장은 아닙니다. 종이 용기와 성형 트레이, 접은 완충지를 써서 과일이 굴러다니지 않으면서도 숨 쉴 수 있게 담습니다.',
      '모든 상자는 무게와 손끝 감각으로 채웁니다. 무른 과일은 위에, 단단한 과일은 바닥에 자리 잡고, 너무 익은 과일은 배송 대신 잼 솥으로 갑니다.',
      '플라스틱 용기보다 손이 많이 가지만, 상자가 정직해지고 분리배출도 훨씬 쉬워집니다.',
    ],
  },
  {
    slug: 'why-cover-crops-matter',
    title: '나무 사이에 풀을 기르는 이유',
    date: '2026년 5월 29일',
    image: `${imageBase}/marquee-soil.jpg`,
    excerpt:
      '나무 아래 초록은 장식이 아닙니다. 흙을 식히고 수분을 붙잡아 두며, 시간이 지날수록 과수원을 먹여 살립니다.',
    body: [
      '건강한 과일은 사다리 아래에서 시작됩니다. 클로버와 풀, 계절 풋거름 작물이 더운 주에도 땅이 마르고 갈라지는 것을 막아 줍니다.',
      '풀은 높게 깎고 뿌리는 그대로 둡니다. 유기물이 천천히 흙으로 돌아가면 과일이 굵어지는 시기에 수분이 훨씬 고르게 유지됩니다.',
      '눈에 잘 띄지 않는 일이지만, 어떤 수확날보다 과수원의 맛과 회복력을 크게 바꿔 놓습니다.',
    ],
  },
]

export function getJournalPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug)
}
