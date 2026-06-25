// src/app/ko/templates/kids-education/data/data.ts

export interface Highlight {
  emoji: string;
  title: string;
  description: string;
}

export interface ClassItem {
  id: string;
  title: string;
  category: string;
  age: string;
  price: string;
  image: string;
  color: string;
  description?: string;
  schedule?: string;
  materials?: string[];
  curriculum?: string[];
  teacherId?: string;
  highlights?: Highlight[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  image: string;
  color: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const classes: ClassItem[] = [
  {
    id: "coding",
    title: "크리에이티브 코딩",
    category: "IT & 테크",
    age: "6-12세 대상",
    price: "120,000원",
    image: "/templates/kids-education/class-coding.jpg",
    color: "var(--color-primary)",
    description: "재미있고 직관적인 프로젝트를 통해 소프트웨어 프로그래밍의 세계를 접합니다. 게임, 애니메이션, 앱을 직접 개발하며 자연스럽게 컴퓨팅 사고력과 문제 해결 능력을 기릅니다.",
    schedule: "화 / 목 오후 4:00 - 5:30",
    teacherId: "mike",
    materials: ["개인 노트북 또는 태블릿", "헤드폰", "가득한 호기심과 상상력"],
    curriculum: [
      "블록 기반 비주얼 코딩 기초",
      "나만의 애니메이션 캐릭터 움직이기",
      "인터랙션 스토리북 제작",
      "기초 게임 설계 및 알고리즘 구현",
      "심플한 앱 구조 이해 및 개발",
    ],
    highlights: [
      { emoji: "💻", title: "프로젝트 중심", description: "첫날부터 직접 간단한 게임과 앱을 만듭니다." },
      { emoji: "🌟", title: "문제 해결력", description: "다양한 도전을 풀며 논리적인 사고를 발달시킵니다." },
      { emoji: "👥", title: "협동 학습", description: "페어 프로그래밍을 통해 협업 능력을 배웁니다." },
    ],
  },
  {
    id: "art",
    title: "창작 미술 스튜디오",
    category: "미술 & 창작",
    age: "3-8세 대상",
    price: "90,000원",
    image: "/templates/kids-education/class-art.jpg",
    color: "var(--color-accent)",
    description: "아이들이 색깔, 질감, 모형을 자유롭게 경험할 수 있는 예술 놀이터입니다. 매 세션 손과 마음으로 나만의 멋진 예술 작품을 완성합니다.",
    schedule: "월 / 수 오후 3:30 - 5:00",
    teacherId: "emma",
    materials: ["미술용 앞치마 또는 편한 여벌 옷", "개인 물통"],
    curriculum: [
      "핑거 페인팅과 다양한 텍스처 놀이",
      "수채화 및 다채로운 색 혼합 탐색",
      "클레이 점토 조형 미술 기초",
      "콜라주 및 믹스드 미디어 디자인",
      "시즌 테마 및 명화 콜라보 공예",
    ],
    highlights: [
      { emoji: "🎨", title: "표현의 자유", description: "아이들 저마다의 독창적인 표현 방식을 존중합니다." },
      { emoji: "🧡", title: "감각 발달", description: "다양한 재료를 손으로 만지고 조작하며 촉각을 깨웁니다." },
      { emoji: "🌈", title: "소근육 단련", description: "미세한 미술 손동작을 통해 신체 조절 능력을 기릅니다." },
    ],
  },
  {
    id: "science",
    title: "창의 과학 실험실",
    category: "자연 과학",
    age: "5-10세 대상",
    price: "110,000원",
    image: "/templates/kids-education/hero-kids-science.jpg",
    color: "var(--color-secondary)",
    description: "눈앞에서 펼쳐지는 재미있는 실험을 통해 과학의 기초 원리를 탐색합니다. 화산 폭발부터 슬라임 제작까지, 신비롭고 재미있는 실험이 매주 찾아옵니다.",
    schedule: "수 / 금 오후 4:00 - 5:30",
    teacherId: "mike",
    materials: ["실험용 보안경 (원내 제공)", "개인 실험 노트와 연필"],
    curriculum: [
      "화학 반응과 화산 분출 시뮬레이션",
      "식물의 성장 주기와 자연 생태계 관찰",
      "도구와 도르래 등 단순 기계 원리",
      "기초 전기 회로 및 친환경 에너지",
      "지구와 우주 천체 관찰 입문",
    ],
    highlights: [
      { emoji: "🔬", title: "직접 실험", description: "직접 결과를 이끌어내는 신나는 과학 실험을 수행합니다." },
      { emoji: "🌀", title: "STEM 기반", description: "물리, 화학, 공학 영역에 관한 열린 흥미를 유발합니다." },
      { emoji: "📊", title: "탐색 데이터", description: "현상을 관찰하고 기록하며 기초 과학적 통찰력을 배웁니다." },
    ],
  },
  {
    id: "math",
    title: "수학 퍼즐 모험",
    category: "수학 & 논리",
    age: "4-9세 대상",
    price: "95,000원",
    image: "/templates/kids-education/class-math.jpg",
    color: "var(--color-red)",
    description: "다채로운 교구와 수학 퍼즐 게임을 활용하여 수학을 재미있게 정복합니다. 숫자에 관한 자신감을 가지며 논리력을 키울 수 있는 신나는 보드게임 수학 놀이입니다.",
    schedule: "월 / 금 오후 3:30 - 5:00",
    teacherId: "sarah",
    materials: ["연필과 지우개", "수학 수 모형 교구 (원내 제공)"],
    curriculum: [
      "수 개념 정립 및 수 세기 놀이",
      "더하기와 빼기 게임 보드게임",
      "도형과 공간 입체 기하학 이해",
      "패턴 규칙성 인지 및 응용 문제 풀이",
      "놀이로 배우는 기초 곱셈 원리",
    ],
    highlights: [
      { emoji: "🧩", title: "게임 중심", description: "퍼즐, 보드게임, 팀 대항 퀴즈로 재미있게 수학을 배웁니다." },
      { emoji: "💭", title: "논리적 사고", description: "스스로 해답을 찾아가며 문제 해결력을 차근차근 다집니다." },
      { emoji: "💰", title: "일상 속 연계", description: "시각적 도구와 생활 속 상황을 연결해 응용력을 키웁니다." },
    ],
  },
];

export const teachers: Teacher[] = [
  { id: "sarah", name: "김사라", role: "교육 디렉터", image: "/templates/kids-education/teacher-01.png", color: "var(--color-primary)" },
  { id: "mike", name: "마이크 첸", role: "STEM 교육 총괄", image: "/templates/kids-education/teacher-02.png", color: "var(--color-secondary)" },
  { id: "emma", name: "엠마 데이비스", role: "미술 수석 강사", image: "/templates/kids-education/teacher-03.png", color: "var(--color-accent)" },
];

export const homeClasses: ClassItem[] = classes.slice(0, 3);

export const classCategories = [...new Set(classes.map((c) => c.category))];
