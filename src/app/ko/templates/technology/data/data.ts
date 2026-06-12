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
    title: '향상된 이동성',
    description: '고성능 모션 컨트롤과 고급 자율 주행, 다양한 지형 적응 알고리즘을 갖춘 이동 시스템.',
    image: '/templates/technology/feature-mobility-nuki.png',
    icon: '\ue911',
  },
  {
    id: 'ai',
    title: '고급 AI',
    description: '실시간 환경 분석, 객체 감지 및 응답을 극대화하도록 설계된 온디바이스 딥러닝 엔진.',
    image: '/templates/technology/feature-ai-nuki.png',
    icon: '\ue90a',
  },
  {
    id: 'dexterity',
    title: '인간형 손재주',
    description: '인간 수준의 정밀도, 속도 및 촉각 피드백으로 작업을 수행하도록 설계된 로봇 조작 기술.',
    image: '/templates/technology/feature-dexterity.jpg',
    icon: '\ue915',
  },
]

export const specData: SpecItem[] = [
  {
    id: 'battery',
    title: '장시간 배터리',
    description: '고속 무선 자체 충전 베이스로 지원되는 24시간 연속 작동.',
    side: 'left',
  },
  {
    id: 'voice',
    title: '음성 어시스턴트',
    description: '다국어 스마트 제어를 지원하는 내장형 의미론적 자연어 처리 기능.',
    side: 'left',
  },
  {
    id: 'modular',
    title: '모듈형 디자인',
    description: '빠른 장착 하드웨어로 다양한 작업에 유연하게 대응할 수 있습니다.',
    side: 'right',
  },
  {
    id: 'gesture',
    title: '제스처 인식',
    description: '멀티포인트 광학 제스처 트래커와 적외선 사용자 추적 기능 탑재.',
    side: 'right',
  },
]

export const modelData: ModelItem[] = [
  {
    id: 'gen2',
    name: 'OmniBot Gen 2',
    description: '4K 해상도 카메라, 120° 화각, 온디바이스 신경망 처리 및 야간 투시 기능을 갖춘 플래그십 모듈형 실내 시스템.',
    price: '$20,000 USD',
    slashedPrice: '$25,000 USD',
    financing: '$833.33/월 (24개월 할부)',
    saveAmount: '$5,000 절약',
    image: '/templates/technology/product-gen2.png',
  },
  {
    id: 'prime',
    name: 'OmniBot Prime',
    description: '고토크 구동 모터, 견고한 외부 장갑판, 산업용 2차 레이저 거리 측정기를 갖춘 중장비 모델.',
    price: '$25,000 USD',
    slashedPrice: '$30,000 USD',
    financing: '$1,041.66/월 (24개월 할부)',
    saveAmount: '$5,000 절약',
    image: '/templates/technology/product-prime.png',
  }
]

export const blogData: BlogItem[] = [
  {
    id: 'featured',
    title: 'OmiBot 로봇이 일상 생활을 변화시키고 운영을 간소화하는 방법',
    category: '아티클',
    date: '2026. 1. 28.',
    image: '/templates/technology/blog-featured.png',
  },
  {
    id: 'news1',
    title: 'OmniBot v1.3 업데이트로 앱에서 새로운 기능을 사용할 수 있습니다',
    category: '뉴스',
    date: '2026. 1. 28.',
    image: '/templates/technology/news-ai.png',
  },
  {
    id: 'news2',
    title: 'AI가 인간형 로봇의 학습과 행동을 향상시키는 방법',
    category: '리소스',
    date: '2026. 1. 28.',
    image: '/templates/technology/news-dexterity.png',
  },
  {
    id: 'news3',
    title: '인간-로봇 협업 공간을 위한 안전 프로토콜 및 규정 준수 가이드라인',
    category: '컴플라이언스',
    date: '2026. 1. 28.',
    image: '/templates/technology/news-mobility.png',
  },
]
