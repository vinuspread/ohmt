import type { YogaClass, Instructor, Testimonial, ScheduleItem } from "./types";

export const NAV_ITEMS = [
  { label: "홈", href: "/ko/templates/OHMT022-yoga" },
  { label: "수업", href: "/ko/templates/OHMT022-yoga/classes" },
  { label: "소개", href: "/ko/templates/OHMT022-yoga/about" },
  { label: "예약", href: "/ko/templates/OHMT022-yoga/schedule" },
  { label: "마이페이지", href: "/ko/templates/OHMT022-yoga/mypage" },
] as const;

export const SOCIAL_LINKS = [
  { label: "인스타그램", href: "#" },
  { label: "유튜브", href: "#" },
  { label: "카카오톡", href: "#" },
] as const;

export const CLASSES: YogaClass[] = [
  {
    id: "1",
    slug: "vinyasa-flow",
    name: "빈야사 플로우",
    subtitle: "호흡과 연결된 역동적인 움직임",
    description: "호흡에 맞춰 흐르듯 이어지는 동작 시퀀스로 내면의 열과 집중력을 키웁니다.",
    longDescription: "빈야사 플로우는 각 움직임을 들숨과 날숨에 연결하여 내면의 열을 만들고 유연성을 향상시키며 신체를 강화하는 움직이는 명상을 만들어냅니다. 몸과 마음을 모두 도전하는 역동적인 수련을 원하는 분들께 적합합니다.",
    image: "/templates/OHMT022-yoga/class-vinyasa.jpg",
    duration: "60분",
    level: "중급",
    benefits: ["심폐 지구력 향상", "유연성 증가", "스트레스 감소", "몸과 마음의 연결 강화"],
  },
  {
    id: "2",
    slug: "hatha-yoga",
    name: "하타 요가",
    subtitle: "전통 자세와 호흡 수련",
    description: "의식적인 호흡과 함께 기본 자세를 유지하는 부드러운 요가 입문 과정입니다.",
    longDescription: "하타 요가는 자세를 더 오래 유지하며 정렬과 호흡에 집중하는 전통적인 접근법입니다. 이 수련은 모든 요가 스타일의 탄탄한 기초를 만들어주며, 초보자나 느리고 명상적인 수련을 원하는 분들께 완벽합니다.",
    image: "/templates/OHMT022-yoga/class-hatha.jpg",
    duration: "75분",
    level: "모든 수준",
    benefits: ["코어 근력 향상", "자세 교정", "신체 인식 증가", "긴장 이완"],
  },
  {
    id: "3",
    slug: "meditation",
    name: "명상",
    subtitle: "내면의 고요함을 찾는 시간",
    description: "마음을 평온하게 하고 내면의 평화를 키우는 가이드 명상 세션입니다.",
    longDescription: "명상 세션은 호흡 인식, 신체 스캐닝, 가이드 시각화를 결합하여 마음을 조용히 합니다. 규칙적인 수련은 불안을 줄이고 집중력을 향상시키며 깊은 내면의 평온과 명료함을 키워줍니다.",
    image: "/templates/OHMT022-yoga/class-meditation.jpg",
    duration: "45분",
    level: "모든 수준",
    benefits: ["불안 감소", "집중력 향상", "정서적 건강 증진", "수면 질 개선"],
  },
  {
    id: "4",
    slug: "pilates",
    name: "필라테스",
    subtitle: "코어 강화와 자세 교정",
    description: "코어를 강화하고 신체 정렬을 개선하는 집중적인 수련입니다.",
    longDescription: "필라테스는 심부 코어 근육 강화, 척추 정렬 개선, 길고 균형잡힌 근육 만들기에 집중합니다. 각 세션은 자세 근육을 단련하여 부상을 예방하고 균형잡힌 몸을 만들어줍니다.",
    image: "/templates/OHMT022-yoga/class-pilates.jpg",
    duration: "50분",
    level: "모든 수준",
    benefits: ["코어 강화", "자세 개선", "유연성 증가", "부상 예방"],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "소피아 첸",
    role: "빈야사 & 하타 강사",
    bio: "15년 이상의 수련 경력과 다양한 요가 전통에서의 자격증을 보유한 소피아는 모든 수업에 따뜻함과 정확성을 가져옵니다.",
    image: "/templates/OHMT022-yoga/instructor-1.jpg",
  },
  {
    id: "2",
    name: "마커스 웹",
    role: "명상 & 호흡법 가이드",
    bio: "마커스는 불교 전통과 현대 신경과학을 바탕으로 마음챙김과 명상을 전문으로 합니다.",
    image: "/templates/OHMT022-yoga/instructor-2.jpg",
  },
  {
    id: "3",
    name: "레나 박",
    role: "필라테스 & 정렬 코치",
    bio: "전직 댄서 출신의 필라테스 전문가인 레나는 정렬, 코어 강화, 우아한 움직임에 집중합니다.",
    image: "/templates/OHMT022-yoga/instructor-3.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "김수아",
    text: "처음에는 유연성이 부족해서 걱정했지만 강사분들이 늘 도와주셔서 정말 즐겁게 배우고 있습니다.",
    rating: 5,
  },
  {
    id: "2",
    name: "이준혁",
    text: "매일 아침 시작했는데 몸이 훨씬 가볍고 집중력도 높아졌어요. 명상 수업은 정말 추천합니다.",
    rating: 5,
  },
  {
    id: "3",
    name: "박지은",
    text: "필라테스 수업 덕분에 오래 고생했던 허리 통증이 줄었어요. 선생님의 세심한 지도가 큰 도움이 됩니다.",
    rating: 5,
  },
  {
    id: "4",
    name: "최민준",
    text: "도심 속에서 이런 평화로운 공간이 있다니 놀랍습니다. 바쁜 일상에서 진짜 쉬고 있다는 느낌이에요.",
    rating: 4,
  },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: "월요일",
    classes: [
      { time: "07:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
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
      { time: "17:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "19:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "수요일",
    classes: [
      { time: "07:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "09:30", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "12:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
      { time: "17:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
    ],
  },
  {
    day: "목요일",
    classes: [
      { time: "07:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "10:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "17:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
      { time: "19:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
    ],
  },
  {
    day: "금요일",
    classes: [
      { time: "07:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "09:30", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "15:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "토요일",
    classes: [
      { time: "08:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "10:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
    ],
  },
  {
    day: "일요일",
    classes: [
      { time: "09:00", name: "부드러운 하타", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "11:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
];

export const BRAND = {
  name: "OHMT",
  tagline: "내면의 평화를 찾아가는 여정",
  email: "contact@ohmt.site",
  copyright: "2026 OHMT.",
} as const;
