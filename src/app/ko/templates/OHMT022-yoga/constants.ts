import type { YogaClass, Instructor, Testimonial, ScheduleItem } from "./types";

export const NAV_ITEMS = [
  { label: "홈", href: "/ko/templates/OHMT022-yoga" },
  { label: "클래스", href: "/ko/templates/OHMT022-yoga/classes" },
  { label: "소개", href: "/ko/templates/OHMT022-yoga/about" },
  { label: "일정", href: "/ko/templates/OHMT022-yoga/schedule" },
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
    subtitle: "호흡에 맞춰 이어가는 움직임",
    description: "호흡에 맞춰 자세를 자연스럽게 이어가며 몸을 충분히 움직이는 수업입니다.",
    longDescription: "들숨과 날숨에 맞춰 여러 자세를 연결합니다. 자신의 속도에 맞게 강도를 조절하며 움직입니다.",
    image: "/templates/OHMT022-yoga/class-vinyasa.jpg",
    duration: "60분",
    level: "중급",
    benefits: ["지구력 향상", "유연성 향상", "긴장 완화", "호흡과 움직임의 연결"],
  },
  {
    id: "2",
    slug: "hatha-yoga",
    name: "하타 요가",
    subtitle: "기본 자세와 호흡",
    description: "기본 자세를 천천히 익히며 호흡과 몸의 정렬에 집중하는 수업입니다.",
    longDescription: "동작을 서두르지 않고 자세를 하나씩 살펴봅니다. 요가가 처음인 분도 편안하게 참여할 수 있습니다.",
    image: "/templates/OHMT022-yoga/class-hatha.jpg",
    duration: "75분",
    level: "모든 수준",
    benefits: ["기초 근력", "바른 정렬 익히기", "몸의 감각 익히기", "편안한 이완"],
  },
  {
    id: "3",
    slug: "meditation",
    name: "명상",
    subtitle: "호흡과 감각에 집중하는 시간",
    description: "안내에 따라 호흡과 몸의 감각을 차분히 살펴보는 명상 수업입니다.",
    longDescription: "몸의 감각을 차례로 살피며 긴장을 내려놓고, 잠시 조용히 머무는 연습을 합니다.",
    image: "/templates/OHMT022-yoga/class-meditation.jpg",
    duration: "45분",
    level: "모든 수준",
    benefits: ["긴장 내려놓기", "집중력 향상", "감정 돌아보기", "편안한 휴식"],
  },
  {
    id: "4",
    slug: "pilates",
    name: "필라테스",
    subtitle: "코어와 신체 정렬",
    description: "몸의 중심을 사용하며 안정적인 정렬을 익히는 필라테스 수업입니다.",
    longDescription: "호흡에 맞춰 몸의 중심을 사용하고, 움직임을 안정적으로 연결하는 법을 익힙니다.",
    image: "/templates/OHMT022-yoga/class-pilates.jpg",
    duration: "50분",
    level: "모든 수준",
    benefits: ["코어 강화", "바른 정렬 익히기", "유연성 향상", "움직임 안정성"],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "소피아 첸",
    role: "빈야사 & 하타 강사",
    bio: "15년 넘게 요가를 수련하고 지도해 왔으며, 자세를 세심하게 살펴 편안하게 안내합니다.",
    image: "/templates/OHMT022-yoga/instructor-1.jpg",
  },
  {
    id: "2",
    name: "마커스 웹",
    role: "명상 & 호흡 가이드",
    bio: "호흡과 몸의 감각에 집중하는 명상 수업을 진행하며, 처음 참여하는 분도 따라오기 쉽게 안내합니다.",
    image: "/templates/OHMT022-yoga/instructor-2.jpg",
  },
  {
    id: "3",
    name: "레나 박",
    role: "필라테스 & 체형 교정 코치",
    bio: "무용 경험을 바탕으로 몸의 정렬과 코어 사용을 차분하고 정확하게 안내합니다.",
    image: "/templates/OHMT022-yoga/instructor-3.jpg",
  },
  {
    id: "4",
    name: "다니엘 포스터",
    role: "회복 요가 & 모빌리티 강사",
    bio: "관절의 가동 범위와 몸의 회복에 집중하며, 무리하지 않고 오래 이어갈 수 있는 수련을 안내합니다.",
    image: "/templates/OHMT022-yoga/instructor-4.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "1", name: "에마 R.", text: "무리해서 동작을 따라가기보다 몸의 상태를 살피는 법을 배웠습니다. 강사들이 자세를 세심하게 봐줍니다.", rating: 5 },
  { id: "2", name: "제임스 K.", text: "요가가 처음이었지만 기본 자세부터 차근차근 안내해 주어 부담 없이 참여했습니다.", rating: 5 },
  { id: "3", name: "니나 P.", text: "필라테스를 꾸준히 들으면서 몸의 중심을 사용하는 방법을 알게 됐습니다.", rating: 5 },
  { id: "4", name: "데이비드 L.", text: "도심에 있지만 스튜디오 안은 조용해서 수업에 집중하기 좋았습니다.", rating: 4 },
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
      { time: "09:00", name: "회복 하타 요가", instructor: "다니엘 포스터", slug: "hatha-yoga" },
      { time: "11:00", name: "명상", instructor: "마커스 웹", slug: "meditation" },
    ],
  },
];

export const BRAND = {
  name: "OHMT",
  tagline: "호흡과 움직임의 균형",
  email: "contact@ohmt.site",
  copyright: "© 2026 OHMT.",
} as const;
