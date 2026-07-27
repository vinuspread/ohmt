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
    title: "에센스 패키지",
    price: "180만 원",
    description: "소규모 예식과 야외 웨딩에 적합한 기본 구성",
    features: [
      "6시간 촬영",
      "고해상도 보정본 400장 이상",
      "다운로드 가능한 비공개 온라인 갤러리",
      "촬영 전 일정 및 동선 상담"
    ],
    image: "/templates/OHMT025-wedding/wedding-story-01.jpg",
  },
  {
    id: "elegance",
    title: "엘레강스 패키지",
    price: "260만 원",
    description: "예식 준비부터 주요 순서까지 넉넉하게 기록하는 구성",
    features: [
      "10시간 촬영",
      "고해상도 보정본 600장 이상",
      "2시간 사전 촬영 포함",
      "비공개 온라인 갤러리 및 사진 사용 권한 제공",
      "보조 포토그래퍼 포함, 2인 촬영"
    ],
    image: "/templates/OHMT025-wedding/about-clara.jpg",
  },
  {
    id: "ever-after",
    title: "에버 애프터 패키지",
    price: "380만 원",
    description: "예식 전후의 모든 일정을 폭넓게 기록하는 프리미엄 구성",
    features: [
      "예식 당일 종일 촬영",
      "고해상도 보정본 800장 이상",
      "사전 촬영 및 리허설 디너 촬영 포함",
      "전문 포토그래퍼 2인 촬영",
      "수제 가죽 앨범 제작",
      "비공개 온라인 갤러리 및 3주 이내 보정본 전달"
    ],
    image: "/templates/OHMT025-wedding/wedding-story-02.jpg",
  }
];

export const about: AboutInfo = {
  name: "클라라",
  role: "대표 & 수석 포토그래퍼",
  bio: [
    "8년 넘게 다양한 결혼식을 촬영하며 웃음과 눈물, 작은 표정까지 기록해왔습니다.\n시간이 지나 다시 보아도 그날의 분위기가 떠오르는 사진을 만드는 것이 제 목표입니다.",
    "촬영을 의식하지 않아도 되도록 현장에 자연스럽게 머뭅니다.\n필요한 순간에만 간단히 안내하고, 대부분은 두 사람의 표정과 움직임을 그대로 기록합니다.",
    "미국 오스틴을 기반으로 12개국에서 200회 이상의 결혼식을 촬영했습니다.\n장소와 규모가 달라도 두 사람다운 분위기를 가장 중요하게 생각합니다.",
  ],
  stats: [
    { num: "8+", label: "촬영 경력" },
    { num: "200+", label: "촬영한 결혼식" },
    { num: "12", label: "촬영 국가" },
  ],
  philosophy: {
    title: "촬영 철학",
    paragraphs: [
      "결혼식은 정해진 장면만 남기는 촬영이 아닙니다.\n두 사람과 가족, 친구들이 함께 만든 하루의 흐름을 자연스럽게 기록하는 일입니다.",
      "입장 전의 긴장, 가족의 눈물, 축사 중 터지는 웃음처럼 계획할 수 없는 순간에 집중합니다.\n시간이 흐른 뒤에도 그날의 감정이 떠오르는 사진을 남깁니다.",
    ],
  },
  approach: {
    title: "작업 방식",
    items: [
      { title: "진정성", description: "과한 연출 대신 필요한 만큼만 안내해 두 사람다운 표정과 움직임을 담습니다." },
      { title: "구도", description: "빛과 배경을 세심하게 정리하면서도 순간의 감정은 자연스럽게 남깁니다." },
      { title: "자연스러움", description: "두 사람이 예식에 집중할 수 있도록 촬영 개입을 최소화합니다." },
    ],
  },
};

export const steps: Step[] = [
  {
    number: "01",
    title: "상담",
    description: "문의 내용을 확인한 뒤 예식 일정과 원하는 촬영 범위를 간단히 상담합니다.",
    image: "/templates/OHMT025-wedding/process-01.jpg"
  },
  {
    number: "02",
    title: "촬영 계획",
    description: "예식 순서와 동선을 바탕으로 촬영 시간표와 주요 촬영 지점을 정리합니다.",
    image: "/templates/OHMT025-wedding/process-02.jpg"
  },
  {
    number: "03",
    title: "세부 준비",
    description: "청첩장과 반지, 꽃 장식처럼 사진에 남길 소품과 디테일을 미리 확인합니다.",
    image: "/templates/OHMT025-wedding/process-03.jpg"
  },
  {
    number: "04",
    title: "사전 답사",
    description: "필요한 경우 예식장을 미리 확인해 빛의 방향과 주요 촬영 동선을 점검합니다.",
    image: "/templates/OHMT025-wedding/process-04.jpg"
  },
  {
    number: "05",
    title: "첫 만남 촬영",
    description: "예식 전에 서로를 처음 마주하는 순간을 조용하고 자연스럽게 기록합니다.",
    image: "/templates/OHMT025-wedding/process-05.jpg"
  },
  {
    number: "06",
    title: "예식 당일",
    description: "두 사람은 예식에 집중하고, 촬영팀은 현장의 흐름을 방해하지 않으면서 주요 장면과 디테일을 기록합니다.",
    image: "/templates/OHMT025-wedding/process-06.jpg"
  },
  {
    number: "07",
    title: "피로연",
    description: "춤과 웃음이 이어지는 피로연의 활기와 그 사이의 조용한 순간까지 담습니다.",
    image: "/templates/OHMT025-wedding/process-07.jpg"
  },
  {
    number: "08",
    title: "사진 전달",
    description: "선별과 보정을 거친 사진을 비공개 온라인 갤러리로 전달합니다.",
    image: "/templates/OHMT025-wedding/process-08.jpg"
  }
];
