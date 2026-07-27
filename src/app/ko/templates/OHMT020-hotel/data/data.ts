export const rooms = [
  {
    id: "deluxe",
    name: "디럭스 룸",
    price: "550,000원",
    size: "45㎡",
    view: "정원 전망",
    capacity: "성인 2명",
    amenities: ["킹사이즈 침대", "레인 샤워", "무료 Wi-Fi", "미니바", "스마트 TV"],
    image: "/templates/OHMT020-hotel/room-deluxe-01.jpg",
    desc: "편안한 침구와 단정한 가구를 갖춘 객실입니다. 창밖으로 푸른 정원을 바라보며 조용하게 쉴 수 있습니다."
  },
  {
    id: "executive",
    name: "이그제큐티브 스위트",
    price: "890,000원",
    size: "72㎡",
    view: "바다 전망",
    capacity: "성인 3명",
    amenities: ["별도 거실", "워크인 클로젯", "자쿠지", "전담 버틀러 서비스", "바다 전망 발코니"],
    image: "/templates/OHMT020-hotel/room-suite-01.jpg",
    desc: "별도의 거실과 넓은 발코니를 갖춘 스위트입니다. 객실 안과 발코니에서 바다 전망을 즐길 수 있습니다."
  },
  {
    id: "villa",
    name: "풀 빌라",
    price: "1,600,000원",
    size: "120㎡",
    view: "전용 수영장과 정원",
    capacity: "성인 4명",
    amenities: ["프라이빗 풀", "야외 샤워", "가든 테라스", "개인 셰프", "라운지 공간"],
    image: "/templates/OHMT020-hotel/room-villa-01.jpg",
    desc: "전용 수영장과 열대 정원을 갖춘 독립형 빌라입니다. 넓은 라운지와 전담 버틀러 서비스를 이용할 수 있습니다."
  }
];

export const services = [
  { icon: "Swimming", title: "인피니티 풀", desc: "바다와 맞닿은 듯한 전망을 즐기며 여유롭게 쉴 수 있는 인피니티 풀입니다." },
  { icon: "Spa", title: "웰니스 스파", desc: "현지 허브와 오일을 활용한 마사지와 웰니스 프로그램을 운영합니다." },
  { icon: "Dining", title: "시그니처 다이닝", desc: "현지 식재료와 계절 메뉴를 선보이는 세 곳의 레스토랑을 운영합니다." },
  { icon: "Fitness", title: "웰니스 센터", desc: "운동 시설과 요가 수업, 예약제 개인 트레이닝을 이용할 수 있습니다." },
  { icon: "Concierge", title: "컨시어지", desc: "레스토랑과 스파 예약, 섬 투어와 기념일 준비를 24시간 도와드립니다." },
  { icon: "Transport", title: "전용 차량 서비스", desc: "공항과 리조트 사이를 편안하게 이동할 수 있는 전용 차량을 운영합니다." }
];

export const testimonials = [
  {
    id: 1,
    name: "김서연",
    location: "서울, 대한민국",
    text: "웰컴 티부터 객실 정돈까지 세심하게 준비되어 있었습니다. 전용 수영장이 있는 빌라에서 조용하게 쉬기 좋았어요.",
    rating: 5,
    avatar: "/templates/OHMT020-hotel/guest-01.jpg"
  },
  {
    id: 2,
    name: "켄지 T.",
    location: "도쿄, 일본",
    text: "건물과 주변 자연이 잘 어우러져 있었습니다. 현지 허브를 사용한 스파 프로그램도 편안하게 이용했습니다.",
    rating: 5,
    avatar: "/templates/OHMT020-hotel/guest-02.jpg"
  },
  {
    id: 3,
    name: "박지민",
    location: "부산, 대한민국",
    text: "도착부터 체크아웃까지 직원들이 친절하게 안내해 주었습니다. 예약할 때 전달한 요청 사항도 잘 반영되어 있었습니다.",
    rating: 5,
    avatar: "/templates/OHMT020-hotel/guest-03.jpg"
  },
  {
    id: 4,
    name: "이정호",
    location: "대구, 대한민국",
    text: "결혼기념일에 방문했는데 조용하고 편안하게 머물 수 있었습니다. 야외에서 준비해 준 저녁 식사도 기억에 남습니다.",
    rating: 5,
    avatar: "/templates/OHMT020-hotel/guest-03.jpg"
  }
];
