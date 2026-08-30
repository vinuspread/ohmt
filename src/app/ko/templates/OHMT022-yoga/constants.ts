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
    intensity: 3,
    instructorId: "1",
    preparation: "움직이기 편한 옷과 개인 물병을 준비해 주세요. 수업 2시간 전에는 가벼운 식사를 권합니다.",
    benefits: ["이어지는 동작", "가동 범위 살피기", "호흡에 맞춘 속도", "쿨다운과 휴식"],
    recommendedFor: ["충분히 움직이며 땀을 내고 싶은 분", "기본 요가 자세를 익힌 분", "호흡과 동작의 연결을 배우고 싶은 분"],
    curriculum: [
      { title: "호흡 깨우기", description: "짧은 호흡 관찰과 관절 움직임으로 오늘의 몸 상태를 확인합니다." },
      { title: "플로우 쌓기", description: "태양경배를 바탕으로 선 자세를 하나씩 연결하며 리듬을 만듭니다." },
      { title: "균형과 집중", description: "서서 균형 잡는 자세와 코어 동작으로 흐트러진 중심을 다잡습니다." },
      { title: "쿨다운", description: "바닥 동작과 사바사나로 심박을 낮추고 호흡을 고르게 정리합니다." },
    ],
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
    intensity: 2,
    instructorId: "1",
    preparation: "도구는 스튜디오에서 제공합니다. 무릎이나 손목이 불편하다면 수업 전에 강사에게 알려 주세요.",
    benefits: ["기본 자세", "정렬 기준", "몸의 감각 살피기", "도구를 활용한 휴식"],
    recommendedFor: ["요가를 처음 시작하는 분", "자세를 천천히 정확하게 익히고 싶은 분", "빠른 수업보다 충분한 설명이 필요한 분"],
    curriculum: [
      { title: "몸 상태 확인", description: "앉은 자세에서 호흡과 좌우 균형을 살피고 수련 강도를 정합니다." },
      { title: "기본 정렬", description: "산 자세, 전굴, 런지 등 기본 동작의 발과 골반 위치를 익힙니다." },
      { title: "자세 머물기", description: "도구를 활용해 무리 없이 자세에 머물며 호흡의 변화를 관찰합니다." },
      { title: "회복과 휴식", description: "등과 골반을 부드럽게 풀고 긴 사바사나로 수업을 마칩니다." },
    ],
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
    intensity: 1,
    instructorId: "2",
    preparation: "편안한 옷차림이면 충분합니다. 의자에 앉아 참여할 수도 있습니다.",
    benefits: ["호흡 세기", "주의 기울이기", "바디 스캔", "조용한 휴식"],
    recommendedFor: ["생각이 많아 쉽게 쉬지 못하는 분", "잠들기 전 긴장을 낮추고 싶은 분", "명상을 짧고 구체적으로 배우고 싶은 분"],
    curriculum: [
      { title: "도착하기", description: "몸을 편안히 지지하고 주변의 소리와 접촉 감각을 알아차립니다." },
      { title: "호흡 세기", description: "호흡을 바꾸려 하지 않고 들숨과 날숨의 길이를 차분히 셉니다." },
      { title: "바디 스캔", description: "발끝부터 얼굴까지 감각을 옮겨가며 남아 있는 긴장을 확인합니다." },
      { title: "일상으로 돌아오기", description: "짧은 침묵 뒤 시선과 움직임을 천천히 되찾으며 마무리합니다." },
    ],
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
    intensity: 2,
    instructorId: "3",
    preparation: "몸에 붙는 편안한 옷을 권합니다. 허리나 목 통증이 있다면 시작 전에 알려 주세요.",
    benefits: ["중심을 쓰는 방법", "정렬 확인", "조절된 움직임", "안정적인 연결"],
    recommendedFor: ["오래 앉아 허리와 어깨가 자주 뻐근한 분", "몸의 중심을 안정적으로 쓰고 싶은 분", "반복 동작을 세밀하게 교정받고 싶은 분"],
    curriculum: [
      { title: "정렬 점검", description: "누운 자세에서 골반과 갈비뼈의 위치, 호흡 패턴을 확인합니다." },
      { title: "코어 연결", description: "작은 범위의 반복 동작으로 복부와 골반저의 연결을 익힙니다." },
      { title: "전신 통합", description: "팔과 다리의 움직임을 더해 중심을 유지하는 힘을 기릅니다." },
      { title: "척추 이완", description: "등과 고관절을 부드럽게 풀고 편안한 호흡으로 마칩니다." },
    ],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "소피아 첸",
    role: "빈야사 & 하타 강사",
    bio: "수업 전 몸 상태를 먼저 묻고, 각 자세의 발과 골반 위치를 차분히 설명합니다.",
    image: "/templates/OHMT022-yoga/instructor-1.jpg",
  },
  {
    id: "2",
    name: "미라 송",
    role: "명상 & 호흡 가이드",
    bio: "호흡과 몸의 감각에 집중하는 명상 수업을 진행하며, 처음 참여하는 분도 따라오기 쉽게 안내합니다.",
    image: "/templates/OHMT022-yoga/instructor-2.jpg",
  },
  {
    id: "3",
    name: "레나 박",
    role: "필라테스 & 체형 교정 코치",
    bio: "몸의 정렬과 코어 사용을 작은 동작부터 확인하며 차분하고 정확하게 안내합니다.",
    image: "/templates/OHMT022-yoga/instructor-3.jpg",
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
      { time: "17:00", name: "명상", instructor: "미라 송", slug: "meditation" },
    ],
  },
  {
    day: "화요일",
    classes: [
      { time: "07:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "10:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "17:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "19:00", name: "명상", instructor: "미라 송", slug: "meditation" },
    ],
  },
  {
    day: "수요일",
    classes: [
      { time: "07:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "09:30", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "12:00", name: "명상", instructor: "미라 송", slug: "meditation" },
      { time: "17:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
    ],
  },
  {
    day: "목요일",
    classes: [
      { time: "07:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "10:00", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "17:00", name: "명상", instructor: "미라 송", slug: "meditation" },
      { time: "19:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
    ],
  },
  {
    day: "금요일",
    classes: [
      { time: "07:00", name: "하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "09:30", name: "빈야사 플로우", instructor: "소피아 첸", slug: "vinyasa-flow" },
      { time: "12:00", name: "필라테스", instructor: "레나 박", slug: "pilates" },
      { time: "15:00", name: "명상", instructor: "미라 송", slug: "meditation" },
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
      { time: "09:00", name: "회복 하타 요가", instructor: "소피아 첸", slug: "hatha-yoga" },
      { time: "11:00", name: "명상", instructor: "미라 송", slug: "meditation" },
    ],
  },
];

export const BRAND = {
  name: "PRANA",
  tagline: "호흡과 움직임의 균형",
  email: "contact@prana.site",
  copyright: "2026 PRANA.",
} as const;
