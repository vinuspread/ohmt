export type Product = {
  slug: string
  name: string
  category: string
  price: number
  tag: string
  description: string
  material: string
  dimensions: string
}

export const products: Product[] = [
  {
    slug: 'birch-lounge-chair',
    name: '자작나무 라운지 체어',
    category: '의자',
    price: 640000,
    tag: '신제품',
    description:
      '손으로 엮은 웨빙 시트와 자작나무 원목 프레임으로 제작한 낮고 넓은 라운지 체어입니다.\n독서할 때 등을 안정적으로 받치도록 등받이 각도를 조정했습니다.',
    material: '자작나무 원목, 울 혼방 패브릭',
    dimensions: '71cm(W) x 81cm(D) x 76cm(H)',
  },
  {
    slug: 'quarry-dining-table',
    name: '쿼리 다이닝 테이블',
    category: '테이블',
    price: 1180000,
    tag: '베스트셀러',
    description:
      '여섯 명이 사용하기 좋은 크기의 참나무 테이블입니다.\n무늬목 대신 참나무 집성 원목 상판을 사용해, 흠집이 생기면 표면을 다듬고 오일을 다시 발라 오래 사용할 수 있습니다.',
    material: '화이트 오크 원목, 무광 오일 마감',
    dimensions: '182cm(W) x 96cm(D) x 73cm(H)',
  },
  {
    slug: 'linden-pendant-light',
    name: '린덴 펜던트 조명',
    category: '조명',
    price: 220000,
    tag: '신제품',
    description:
      '슬림한 황동 지지대와 린넨 전등갓으로 구성한 펜던트 조명입니다.\n전등갓이 빛을 부드럽게 걸러 식탁 주변에 고르게 퍼지도록 설계했습니다.',
    material: '린넨 전등갓, 브러시드 황동 지지대',
    dimensions: '지름 35cm, 최대 조절 길이 152cm',
  },
  {
    slug: 'harbor-sofa',
    name: '하버 소파',
    category: '의자',
    price: 2140000,
    tag: '베스트셀러',
    description:
      '합판과 MDF 대신 인공 건조한 하드우드로 프레임을 제작하고, 복원력을 고려한 3쿠션 시트를 적용한 깊은 좌석의 소파입니다.',
    material: '인공 건조 하드우드 프레임, 고기능성 방수 패브릭',
    dimensions: '213cm(W) x 91cm(D) x 83cm(H)',
  },
  {
    slug: 'field-side-table',
    name: '필드 사이드 테이블',
    category: '테이블',
    price: 290000,
    tag: '신제품',
    description:
      '자작나무 라운지 체어 옆에 두기 좋은 2단 사이드 테이블입니다.\n물푸레나무 원목으로 제작하고 폭을 줄여 좁은 공간에서 동선 부담을 낮췄습니다.',
    material: '물푸레나무 원목, 무광 오일 마감',
    dimensions: '45cm(W) x 45cm(D) x 55cm(H)',
  },
  {
    slug: 'moor-floor-lamp',
    name: '무어 플로어 스탠드',
    category: '조명',
    price: 340000,
    tag: '베스트셀러',
    description:
      '대리석 베이스와 슬림한 스틸 지지대로 구성한 플로어 조명입니다.\n무게 중심을 아래에 두어 사용 중 흔들림을 줄였습니다.',
    material: ' 연마한 대리석 베이스, 분체 도장 스틸',
    dimensions: '베이스 지름 30cm, 높이 147cm',
  },
  {
    slug: 'canvas-weave-throw',
    name: '캔버스 위브 블랭킷',
    category: '패브릭',
    price: 160000,
    tag: '신제품',
    description:
      '면과 린넨을 촘촘히 엮어 만든 도톰하고 묵직한 블랭킷입니다.\n적당한 무게가 있어 소파 팔걸이에 걸쳐 두었을 때 쉽게 흘러내리지 않습니다.',
    material: '면·린넨 혼방, 바이어스 마감',
    dimensions: '137cm(W) x 182cm(L)',
  },
  {
    slug: 'ridge-floor-cushion',
    name: '릿지 플로어 쿠션',
    category: '패브릭',
    price: 210000,
    tag: '한정판',
    description:
      '천연 양모 충전재를 겹겹이 채운 낮고 넓은 사각형 쿠션입니다.\n바닥에 앉아 책을 읽거나 낮은 휴식 공간을 구성할 때 사용할 수 있습니다.',
    material: '천연 양모 충전재, 헤비 코튼 캔버스 커버',
    dimensions: '71cm(W) x 71cm(D) x 12cm(H)',
  },
]

export const categories = ['의자', '테이블', '조명', '패브릭'] as const
