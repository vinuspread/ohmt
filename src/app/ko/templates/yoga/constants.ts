import type { YogaClass, Instructor, Testimonial, ScheduleItem } from "./types";

export const NAV_ITEMS = [
  { label: "홈", href: "/ko/templates/OHMT022-yoga" },
  { label: "클래스", href: "/ko/templates/OHMT022-yoga/classes" },
  { label: "소개", href: "/ko/templates/OHMT022-yoga/about" },
  { label: "예약", href: "/ko/templates/OHMT022-yoga/schedule" },
  { label: "마이페이지", href: "/ko/templates/OHMT022-yoga/mypage" },
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
    name: "빈야사 플로우",
    subtitle: "호흡과 연결된 역동적인 움직임",
    description: "호흡에 맞춰 자세를 연결하는 유동적인 시퀀스로 열기와 집중력을 높입니다.",
    longDescription: "빈야사 플로우는 들숨과 날숨에 맞춰 동작을 연결해 내면의 열기를 만들고 유연성을 향상시키며 신체를 강화하는 움직이는 명상입니다.",
    image: "/templates/OHMT022-yoga/class-vinyasa.jpg",
    duration: "60분",
    level: "중급",
    benefits: ["심폐 지구력 강화", "유연성 향상", "스트레스 해소", "심신 연결 강화"],
  },
  {
    id: "2",
    slug: "hatha-yoga",
    name: "하타 요가",
    subtitle: "전통 자세와 호흡 수련",
    description: "의식적인 호흡과 함께 기본 자세를 유지하는 부드러운 입문 수련입니다.",
    longDescription: "하타는 자세를 오래 유지하며 정렬과 호흡에 집중하는 전통적인 방식입니다.",
    image: "/templates/OHMT022-yoga/class-hatha.jpg",
    duration: "75분",
    level: "전체 수준",
    benefits: ["코어 근력 강화", "자세 교정", "신체 인식 향상", "휴식 촉진"],
  },
  {
    id: "3",
    slug: "meditation",
    name: "명상",
    subtitle: "내면의 고요를 찾는 수련",
    description: "마음을 가라앉히고 내면의 평화를 가꾸는 가이드 명상 수업입니다.",
    longDescription: "명상 수업은 호흡 인식, 바디스캔, 가이드 시각화를 결합해 마음을 고요히 합니다.",
    image: "/templates/OHMT022-yoga/class-meditation.jpg",
    duration: "45분",
    level: "전체 수준",
    benefits: ["불안 감소", "집중력 향상", "정서 건강 증진", "수면의 질 개선"],
  },
  {
    id: "4",
    slug: "pilates",
    name: "필라테스",
    subtitle: "코어 근력과 체형 교정",
    description: "코어를 강화하고 신체 정렬을 개선하는 집중 수련입니다.",
    longDescription: "필라테스는 심부 코어 근육 강화, 척추 정렬 개선, 길고 탄탄한 근육 만들기에 집중합니다.",
    image: "/templates/OHMT022-yoga/class-pilates.jpg",
    duration: "50분",
    level: "전체 수준",
    benefits: ["코어 강화", "자세 교정", "유연성 향상", "부상 예방"],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "소피아 천",
    role: "빈야사 & 하타 강사",
    bio: "15년 이상의 수련 경험으로 모든 수업에 따뜻함과 정확성을 불어넣습니다.",
    image: "/templates/OHMT022-yoga/instructor-1.jpg",
  },
  {
    id: "2",
    name: "마커스 웹",
    role: "명상 & 호흡 가이드",
    bio: "불교 전통과 현대 신경과학을 바탕으로 마음챙김과 명상을 전문으로 합니다.",
    image: "/templates/OHMT022-yoga/instructor-2.jpg",
  },
  {
    id: "3",
    name: "레나 박",
    role: "필라테스 & 체형 교정 코치",
    bio: "무용가 출신의 필라테스 전문가로 정렬, 코어 근력, 우아한 움직임에 집중합니다.",
    image: "/templates/OHMT022-yoga/instructor-3.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "1", name: "에마 R.", text: "이 스튜디오가 운동에 대한 제 인식을 바꿔놓았습니다. 강사들이 매우 세심하고 커뮤니티가 정말 따뜻합니다.", rating: 5 },
  { id: "2", name: "제임스 K.", text: "완전 초보자로 시작했는데 매 단계마다 든든한 지원을 받았습니다. 명상 수업은 삶을 바꿔놓았어요.", rating: 5 },
  { id: "3", name: "니나 P.", text: "필라테스 수업 덕분에 허리 통증이 완전히 나았습니다.", rating: 5 },
  { id: "4", name: "데이비드 L.", text: "도시 한복판에 있는 고요한 안식처입니다.", rating: 4 },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: "월요일",
    classes: [
      { time: "07:00", name: "빈야사 플로우", instructor: "소피아 천", slug: "vinyasa-flow" },
      { time: "09:30", name: "하타 요가", instructor: "소피아 천", slug: "hatha-yoga" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "17:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "화요일",
    classes: [
      { time: "07:00", name: "하타 요가", instructor: "소피아 천", slug: "hatha-yoga" },
      { time: "10:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "17:00", name: "빈야사 플로우", instructor: "소피아 천", slug: "vinyasa-flow" },
      { time: "19:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "수요일",
    classes: [
      { time: "07:00", name: "빈야사 플로우", instructor: "소피아 천", slug: "vinyasa-flow" },
      { time: "09:30", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "12:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
      { time: "17:00", name: "하타 요가", instructor: "소피아 천", slug: "hatha-yoga" },
    ],
  },
  {
    day: "목요일",
    classes: [
      { time: "07:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "10:00", name: "빈야사 플로우", instructor: "소피아 천", slug: "vinyasa-flow" },
      { time: "17:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
      { time: "19:00", name: "하타 요가", instructor: "소피아 천", slug: "hatha-yoga" },
    ],
  },
  {
    day: "금요일",
    classes: [
      { time: "07:00", name: "하타 요가", instructor: "소피아 천", slug: "hatha-yoga" },
      { time: "09:30", name: "빈야사 플로우", instructor: "소피아 천", slug: "vinyasa-flow" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "15:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
  {
    day: "토요일",
    classes: [
      { time: "08:00", name: "빈야사 플로우", instructor: "소피아 천", slug: "vinyasa-flow" },
      { time: "10:00", name: "하타 요가", instructor: "소피아 천", slug: "hatha-yoga" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
    ],
  },
  {
    day: "일요일",
    classes: [
      { time: "09:00", name: "리스토러티브 하타", instructor: "소피아 천", slug: "hatha-yoga" },
      { time: "11:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
];

export const BRAND = {
  name: "OHMT",
  tagline: "내면의 평화를 찾아서",
  email: "contact@ohmt.site",
  copyright: "2026 OHMT.",
} as const;
