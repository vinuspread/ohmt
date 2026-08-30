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
      '손으로 엮은 웨빙 시트와 단단한 자작나무 프레임으로 제작한 낮고 넓은 라운지 체어입니다. 등받이 각도는 단순히 앉아있기보다 책을 읽기에 가장 편안하도록 설계했습니다.',
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
      '6인용으로 적합한 부드러운 가장자리의 참나무 테이블입니다. 얇은 무늬목을 붙인 것이 아닌 단단한 참나무 집성 원목 상판을 사용하여, 흠집이 나면 상판을 갈아내고 다시 오일을 칠해 평생 사용할 수 있습니다.',
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
      '슬림한 황동 지지대 위에 린넨 소재의 전등갓을 얹었습니다. 빛을 아래로 강하게 쏘는 인위적인 콘 모양 대신, 공간 전체에 은은하고 고르게 퍼뜨립니다.',
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
      '가공판재(합판/MDF)를 쓰지 않고 인공 건조한 단단한 하드우드로 기본 프레임을 짜고, 복원력이 우수한 3쿠션 시트를 얹은 깊고 아늑한 소파입니다.',
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
      '공간을 많이 차지하지 않는 자작나무 라운지 체어 전용 2단 사이드 테이블입니다. 단단한 물푸레나무 원목으로 제작해 좁은 공간에서도 동선을 방해하지 않습니다.',
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
      '묵직한 대리석 베이스와 슬림한 스틸 지지대로 구성되어, 전선이 당겨져도 쉽게 넘어지지 않도록 무게 중심을 아래로 잡았습니다.',
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
      '면과 린넨을 촘촘히 엮어 만든 톡톡하고 묵직한 담요입니다. 적당한 무게감이 있어 소파 팔걸이에 무심히 얹어두어도 바닥으로 쉽게 흘러내리지 않습니다.',
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
      '겹겹이 쌓은 양모 솜으로 속을 가득 채운 낮고 넓은 사각형 쿠션입니다. 바닥 생활을 즐기거나 독서 공간을 꾸밀 때, 혹은 의자보다 바닥에 눕는 것을 더 좋아하는 이들에게 적합합니다.',
    material: '천연 양모 충전재, 헤비 코튼 캔버스 커버',
    dimensions: '71cm(W) x 71cm(D) x 12cm(H)',
  },
]

export const categories = ['의자', '테이블', '조명', '패브릭'] as const
