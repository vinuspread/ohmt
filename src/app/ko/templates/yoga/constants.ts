import type { YogaClass, Instructor, Testimonial, ScheduleItem } from "./types";

export const NAV_ITEMS = [
  { label: "홈", href: "/ko/templates/yoga" },
  { label: "클래스", href: "/ko/templates/yoga/classes" },
  { label: "소개", href: "/ko/templates/yoga/about" },
  { label: "예약", href: "/ko/templates/yoga/schedule" },
  { label: "마이페이지", href: "/ko/templates/yoga/mypage" },
] as const;

export const SOCIAL_LINKS = [
  { label: "인스타그램", href: "#" },
  { label: "유튜브", href: "#" },
  { label: "페이스북", href: "#" },
] as const;

export const CLASSES: YogaClass[] = [
  {
    id: "1",
    slug: "vinyasa-flow",
    name: "비니야사 플로우",
    subtitle: "호흡과 함께하는 다이내믹 무브먼트",
    description: "호흡에 맞춰 진행되는 유연한 동작 시퀀스로 체온과 집중력을 높입니다.",
    longDescription: "비니야사 플로우는 모든 동작을 들숨과 날숨에 연결하여 내부 열을 생성하고 유연성을 향상시키며 신체를 강화하는 움직이는 명상입니다. 몸과 마음을 함께 도전하는 다이내믹한 수행을 원하는 분들에게 적합합니다.",
    image: "/templates/yoga/class-vinyasa.jpg",
    duration: "60분",
    level: "중급",
    benefits: ["심혈관 지구력 향상", "유연성 증가", "스트레스 완화", "몸-마음 연결 강화"],
  },
  {
    id: "2",
    slug: "hatha-yoga",
    name: "하타 요가",
    subtitle: "전통 자세와 호흡 수련",
    description: "의식적인 호흡과 함께 기본 자세를 유지하는 부드러운 입문 과정입니다.",
    longDescription: "하타 요가는 자세를 오래 유지하며 정렬과 호흡에 집중하는 전통적인 접근법입니다. 이 수련은 모든 요가 스타일의 튼튼한 기초를 다져주며, 초보자나 느리고 명상적인 수행을 원하는 분들에게 완벽합니다.",
    image: "/templates/yoga/class-hatha.jpg",
    duration: "75분",
    level: "모든 레벨",
    benefits: ["코어 근력 강화", "자세 개선", "신체 인식 향상", "이완 촉진"],
  },
  {
    id: "3",
    slug: "meditation",
    name: "명상",
    subtitle: "내면의 고요함을 찾는 시간",
    description: "마음을 진정시키고 내면의 평화를 키우는 가이드 명상 세션입니다.",
    longDescription: "저희 명상 세션은 호흡 인식, 바디 스캔, 가이드 시각화를 결합하여 마음을 조용히 돕습니다. 정기적인 수련은 불안을 줄이고 집중력을 향상시키며 깊은 내적 평화와 명확함을 키워줍니다.",
    image: "/templates/yoga/class-meditation.jpg",
    duration: "45분",
    level: "모든 레벨",
    benefits: ["불안 감소", "집중력 향상", "정서적 건강 증진", "수면 질 개선"],
  },
  {
    id: "4",
    slug: "pilates",
    name: "필라테스",
    subtitle: "코어 근력과 바디 정렬",
    description: "코어를 강화하고 신체 정렬을 개선하는 집중적인 수련입니다.",
    longDescription: "필라테스는 깊은 코어 근육 강화, 척추 정렬 개선, 길고 날렵한 근육 형성에 중점을 둡니다. 각 세션은 자세 근육을 목표로 하여 부상을 예방하고 균형 잡힌 신체를 만듭니다.",
    image: "/templates/yoga/class-pilates.jpg",
    duration: "50분",
    level: "모든 레벨",
    benefits: ["코어 강화", "자세 개선", "유연성 증가", "부상 예방"],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "소피아 첸",
    role: "비니야사 & 하타 강사",
    bio: "15년 이상의 수련 경험과 다양한 요가 전통의 자격증을 보유한 소피아는 모든 클래스에 따뜻함과 정확성을 더합니다.",
    image: "/templates/yoga/instructor-1.jpg",
  },
  {
    id: "2",
    name: "마커스 웹",
    role: "명상 & 브레스워크 가이드",
    bio: "마커스는 불교 전통과 현대 신경과학에서 영감을 받아 마음챙김과 명상을 전문으로 지도합니다.",
    image: "/templates/yoga/instructor-2.jpg",
  },
  {
    id: "3",
    name: "레나 박",
    role: "필라테스 & 정렬 코치",
    bio: "전직 무용수에서 필라테스 전문가로 전향한 레나는 정렬, 코어 근력, 우아한 움직임에 중점을 둡니다.",
    image: "/templates/yoga/instructor-3.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "김은정",
    text: "이 스튜디오는 제가 움직임과 맺는 관계를 완전히 바꿔놓았어요. 강사분들은 놀라울 정도로 세심하고 커뮤니티가 정말 따뜻합니다.",
    rating: 5,
  },
  {
    id: "2",
    name: "박준호",
    text: "완전 초보로 시작했는데 모든 단계에서 지지를 받는다고 느꼈어요. 명상 세션이 인생을 바꿔놓았습니다.",
    rating: 5,
  },
  {
    id: "3",
    name: "이나영",
    text: "필라테스 수업 덕분에 허리 통증이 완전히 사라졌어요. 그 어느 때보다 몸이 강하고 정렬된 느낌입니다.",
    rating: 5,
  },
  {
    id: "4",
    name: "최민수",
    text: "도시 한복판에 있는 평화로운 안식처입니다. 매 수업이 끝나면 새로워지고 중심을 잡은 기분이 들어요.",
    rating: 4,
  },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: "월요일",
    classes: [
      { time: "07:00", name: "비니야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "09:30", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "17:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "화요일",
    classes: [
      { time: "07:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "10:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "17:00", name: "비니야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "19:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "수요일",
    classes: [
      { time: "07:00", name: "비니야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "09:30", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "12:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
      { time: "17:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
    ],
  },
  {
    day: "목요일",
    classes: [
      { time: "07:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "10:00", name: "비니야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "17:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
      { time: "19:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
    ],
  },
  {
    day: "금요일",
    classes: [
      { time: "07:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "09:30", name: "비니야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "15:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "토요일",
    classes: [
      { time: "08:00", name: "비니야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "10:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
    ],
  },
  {
    day: "일요일",
    classes: [
      { time: "09:00", name: "회복 하타", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "11:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
];

export const BRAND = {
  name: "Oh My Template",
  tagline: "내면의 평화를 찾아서",
  email: "vinus@vinus.co.kr",
  copyright: "2026 Oh My Template.",
} as const;
