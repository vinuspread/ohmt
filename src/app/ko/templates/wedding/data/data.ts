export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  image: string;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  image: string;
}

export interface AboutInfo {
  name: string;
  role: string;
  bio: string[];
  stats: { num: string; label: string }[];
  philosophy: {
    title: string;
    paragraphs: string[];
  };
  approach: {
    title: string;
    items: { title: string; description: string }[];
  };
}

export interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "amelia-jonathan",
    title: "아멜리아 & 조나단",
    location: "자카르타 더 글래스하우스",
    year: 2023,
    image: "/templates/OHMT025-wedding/gallery-01.jpg",
  },
  {
    id: "maya-cristoper",
    title: "마야 & 크리스토퍼",
    location: "발리 아야나 리조트",
    year: 2023,
    image: "/templates/OHMT025-wedding/gallery-02.jpg",
  },
  {
    id: "clara-daniel",
    title: "클라라 & 대니얼",
    location: "발리 울루와투 절벽",
    year: 2024,
    image: "/templates/OHMT025-wedding/wedding-story-03.jpg",
  },
  {
    id: "sarah-michael",
    title: "사라 & 마이클",
    location: "샤토 드 빌레트, 프랑스",
    year: 2024,
    image: "/templates/OHMT025-wedding/gallery-03.jpg",
  },
  {
    id: "emma-james",
    title: "에마 & 제임스",
    location: "빌라 발비아노, 코모호",
    year: 2024,
    image: "/templates/OHMT025-wedding/gallery-04.jpg",
  },
  {
    id: "sophia-alexander",
    title: "소피아 & 알렉산더",
    location: "클리프 하우스, 샌프란시스코",
    year: 2025,
    image: "/templates/OHMT025-wedding/gallery-05.jpg",
  },
  {
    id: "olivia-ethan",
    title: "올리비아 & 이든",
    location: "빌트모어 에스테이트, 애슈빌",
    year: 2025,
    image: "/templates/OHMT025-wedding/gallery-06.jpg",
  },
  {
    id: "isabella-william",
    title: "이사벨라 & 윌리엄",
    location: "캐슬 하워드, 요크셔",
    year: 2025,
    image: "/templates/OHMT025-wedding/wedding-story-01.jpg",
  },
  {
    id: "ava-benjamin",
    title: "아바 & 벤저민",
    location: "포시즌스, 마우이",
    year: 2025,
    image: "/templates/OHMT025-wedding/wedding-story-02.jpg",
  }
];

export const packages: Package[] = [
  {
    id: "essence",
    title: "에센스 컬렉션",
    price: "180만 원",
    description: "스몰 웨딩과 엘롭먼트를 위한 최적의 패키지",
    features: [
      "6시간 연속 촬영 제공",
      "400장 이상의 고해상도 보정본",
      "다운로드 가능한 온라인 개인 갤러리",
      "촬영 전 사전 조율 및 플래닝 상담"
    ],
    image: "/templates/OHMT025-wedding/wedding-story-01.jpg",
  },
  {
    id: "elegance",
    title: "엘레강스 컬렉션",
    price: "260만 원",
    description: "소중한 날의 모든 순간을 기록하는 완벽한 구성",
    features: [
      "10시간 연속 촬영 제공",
      "600장 이상의 고해상도 보정본",
      "2시간 무료 프리웨딩(가석) 촬영 포함",
      "온라인 개인 갤러리 및 사진 소유권 제공",
      "서브 스냅 작가(2인 촬영) 기본 포함"
    ],
    image: "/templates/OHMT025-wedding/about-clara.jpg",
  },
  {
    id: "ever-after",
    title: "에버 애프터 컬렉션",
    price: "380만 원",
    description: "한 편의 영화 같은 이야기를 담아내는 최고급 패키지",
    features: [
      "하루 종일 무제한 촬영 제공",
      "800장 이상의 고해상도 보정본",
      "프리웨딩 및 리허설 디너 전체 촬영 포함",
      "2인의 전문 포토그래퍼 현장 상주",
      "최고급 수제 가죽 앨범 제작",
      "온라인 갤러리 및 3주 내 고속 보정본 전달"
    ],
    image: "/templates/OHMT025-wedding/wedding-story-02.jpg",
  }
];

export const about: AboutInfo = {
  name: "클라라",
  role: "대표 & 수석 포토그래퍼",
  bio: [
    "8년 넘게 수백 커플의 사랑 이야기를 기록하며, 웃음과 진정성 그리고 시간이 흘러도 변하지 않는 아름다움을 사진에 담아왔습니다. 제 목표는 마치 여러분의 기억처럼 따뜻하고 진실된 이미지를 만드는 것입니다.",
    "저는 현장에 자연스럽게 스며들어 신랑 신부가 온전히 순간에 집중할 수 있도록 합니다. 제가 전해드리는 사진은 연출된 듯 보이지 않으면서도 살아있는 듯한 온기가 느껴집니다.",
    "텍사스 오스틴을 기반으로 전 세계에서 활동하고 있으며, 12개국 200회 이상의 웨딩을 촬영했습니다. 모든 사랑 이야기는 아름답게 기록될 자격이 있습니다.",
  ],
  stats: [
    { num: "8+", label: "연차" },
    { num: "200+", label: "웨딩" },
    { num: "12", label: "국가" },
  ],
  philosophy: {
    title: "나의 철학",
    paragraphs: [
      "결혼식은 사진 촬영이 아닙니다. 평생 단 한 번뿐인 축제입니다. 다큐멘터리 스토리텔링과 파인아트 구도가 만나 모든 프레임이 살아 숨쉬도록 만듭니다.",
      "저는 단순히 사진을 찍지 않습니다. 그날의 감정을 보존합니다. 신부가 입장하기 전의 설렘, 부모님의 눈물, 축사 중 터져 나오는 웃음. 바로 이런 순간들이 진정으로 중요한 순간입니다.",
    ],
  },
  approach: {
    title: "작업 방식",
    items: [
      { title: "진정성", description: "억지스러운 포즈는 없습니다. 자연스러운 가이드를 통해 두 사람의 진짜 모습이 담기도록 합니다." },
      { title: "에디토리얼", description: "파인아트 구성과 다큐멘터리 스토리텔링의 조화. 모든 컷은 빛과 질감, 감정으로 완성됩니다." },
      { title: "자연스러움", description: "현장에 스며들어 신랑 신부가 서로에게 집중할 수 있게 합니다. 대부분의 커플은 제가 있는지조차 잊습니다." },
    ],
  },
};

export const steps: Step[] = [
  {
    number: "01",
    title: "상담 및 연결",
    description: "문의 폼을 통해 연락 주시면, 따뜻한 통화로 비전과 일정에 대해 이야기 나누고 궁금한 점을 모두 해결해 드립니다.",
    image: "/templates/OHMT025-wedding/process-01.jpg"
  },
  {
    number: "02",
    title: "함께하는 플래닝",
    description: "맞춤형 촬영 타임라인과 주요 포토 스팟을 함께 설계하여, 웨딩 당일 모든 장면이 자연스럽게 흘러가도록 준비합니다.",
    image: "/templates/OHMT025-wedding/process-02.jpg"
  },
  {
    number: "03",
    title: "스타일링 디테일",
    description: "청첩장부터 플로럴까지, 여러분의 이야기를 더욱 특별하게 만들어 줄 작은 디테일들을 함께 큐레이팅합니다.",
    image: "/templates/OHMT025-wedding/process-03.jpg"
  },
  {
    number: "04",
    title: "사전 답사",
    description: "웨딩 전에 장소를 미리 방문하여 최적의 조명과 앵글을 확인합니다. 어떤 순간도 놓치지 않도록 철저히 준비합니다.",
    image: "/templates/OHMT025-wedding/process-04.jpg"
  },
  {
    number: "05",
    title: "퍼스트 룩",
    description: "축제가 시작되기 전, 서로를 처음 마주하는 숨 막히는 순간을 진정성 있게 담아냅니다. 가장 생생하고 감동적인 장면입니다.",
    image: "/templates/OHMT025-wedding/process-05.jpg"
  },
  {
    number: "06",
    title: "본 촬영",
    description: "여러분은 축제를 온전히 즐기세요. 우리는 현장에 자연스럽게 녹아들어 진짜 감정과 파인아트 디테일을 기록합니다.",
    image: "/templates/OHMT025-wedding/process-06.jpg"
  },
  {
    number: "07",
    title: "밤을 수놓다",
    description: "저녁이 깊어갈수록 우리는 가까이에서 춤추는 순간의 기쁨과 웃음, 그리고 조용한 교감을 포착합니다.",
    image: "/templates/OHMT025-wedding/process-07.jpg"
  },
  {
    number: "08",
    title: "영원히 간직할 순간",
    description: "따뜻한 색감으로 손수 보정한 아름다운 갤러리를 전달받아 대대손손 공유하고 간직합니다.",
    image: "/templates/OHMT025-wedding/process-08.jpg"
  }
];
