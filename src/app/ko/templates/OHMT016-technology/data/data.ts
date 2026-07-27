export interface FeatureItem {
  id: string
  title: string
  description: string
  image: string
  icon: string
}

export interface SpecItem {
  id: string
  title: string
  description: string
  side: 'left' | 'right'
}

export interface ModelItem {
  id: string
  name: string
  description: string
  price: string
  slashedPrice: string
  financing: string
  saveAmount: string
  image: string
}

export interface BlogItem {
  id: string
  title: string
  category: string
  date: string
  image: string
}

export const featuresData: FeatureItem[] = [
  {
    id: 'mobility',
    title: '정밀한 이동 제어',
    description: '정밀 모션 제어와 자율주행, 지형 적응 알고리즘으로 다양한 환경에서 안정적으로 이동합니다.',
    image: '/templates/OHMT016-technology/feature-mobility-nuki.png',
    icon: '\ue911',
  },
  {
    id: 'ai',
    title: '온디바이스 AI',
    description: '환경 분석과 객체 인식, 실시간 대응을 기기 안에서 처리하는 딥러닝 엔진입니다.',
    image: '/templates/OHMT016-technology/feature-ai-nuki.png',
    icon: '\ue90a',
  },
  {
    id: 'dexterity',
    title: '정밀 조작',
    description: '정밀 제어와 촉각 피드백을 바탕으로 섬세한 작업을 수행하는 로봇 조작 기술입니다.',
    image: '/templates/OHMT016-technology/feature-dexterity.jpg',
    icon: '\ue915',
  },
]

export const specData: SpecItem[] = [
  {
    id: 'battery',
    title: '지속 운용 배터리',
    description: '고속 무선 충전 스테이션과 자동 복귀 기능으로 최대 24시간 연속 운용을 지원합니다.',
    side: 'left',
  },
  {
    id: 'voice',
    title: '음성 제어',
    description: '여러 언어의 명령을 이해하고 처리하는 온디바이스 자연어 인식 기능입니다.',
    side: 'left',
  },
  {
    id: 'modular',
    title: '모듈형 디자인',
    description: '퀵 마운트 구조로 작업에 필요한 모듈을 빠르게 교체할 수 있습니다.',
    side: 'right',
  },
  {
    id: 'gesture',
    title: '제스처 인식',
    description: '다중 광학 센서와 적외선 추적을 활용해 사용자의 제스처를 정확하게 인식합니다.',
    side: 'right',
  },
]

export const modelData: ModelItem[] = [
  {
    id: 'gen2',
    name: 'OmniBot Gen 2',
    description: '4K 카메라와 120° 광각 시야, 온디바이스 AI, 야간 시야 기능을 갖춘 모듈형 실내 자율 로봇입니다.',
    price: '28,000,000원',
    slashedPrice: '35,000,000원',
    financing: '월 1,166,667원 (24개월 할부)',
    saveAmount: '7,000,000원 절약',
    image: '/templates/OHMT016-technology/product-gen2.png',
  },
  {
    id: 'prime',
    name: 'OmniBot Prime',
    description: '고토크 구동 모터와 강화 외장, 산업용 레이저 거리측정기를 갖춘 고하중 작업용 모델입니다.',
    price: '35,000,000원',
    slashedPrice: '42,000,000원',
    financing: '월 1,458,333원 (24개월 할부)',
    saveAmount: '7,000,000원 절약',
    image: '/templates/OHMT016-technology/product-prime.png',
  }
]

export const blogData: BlogItem[] = [
  {
    id: 'featured',
    title: 'OmniBot이 반복 작업을 줄이는 방법',
    category: '인사이트',
    date: '2026. 1. 28.',
    image: '/templates/OHMT016-technology/blog-featured.png',
  },
  {
    id: 'news1',
    title: 'OmniBot v1.3 업데이트: 앱에 추가된 새로운 기능',
    category: '뉴스',
    date: '2026. 1. 28.',
    image: '/templates/OHMT016-technology/news-ai.png',
  },
  {
    id: 'news2',
    title: 'AI가 로봇의 학습과 행동을 개선하는 방법',
    category: '리소스',
    date: '2026. 1. 28.',
    image: '/templates/OHMT016-technology/news-dexterity.png',
  },
  {
    id: 'news3',
    title: '인간·로봇 협업 공간을 위한 안전 및 규정 준수 안내',
    category: '안전·규정',
    date: '2026. 1. 28.',
    image: '/templates/OHMT016-technology/news-mobility.png',
  },
]
