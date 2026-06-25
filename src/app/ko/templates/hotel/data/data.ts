export const rooms = [
  {
    id: "deluxe",
    name: "디럭스 룸",
    price: "₩550,000",
    size: "45 m²",
    view: "가든 뷰",
    capacity: "성인 2명",
    amenities: ["킹사이즈 침대", "레인 샤워", "무료 Wi-Fi", "미니 바", "평면 TV"],
    image: "/templates/hotel/room-deluxe-01.jpg",
    desc: "정성스럽게 제작된 가구와 부드러운 린넨이 조화를 이루는 디럭스 룸은 무성한 정원이 내려다보이는 고요한 휴식처를 제공합니다."
  },
  {
    id: "executive",
    name: "이그제큐티브 스위트",
    price: "₩890,000",
    size: "72 m²",
    view: "오션 뷰",
    capacity: "성인 3명",
    amenities: ["별도 거실", "워크인 클로젯", "자쿠지", "버틀러 서비스", "파노라마 발코니"],
    image: "/templates/hotel/room-suite-01.jpg",
    desc: "넓은 거실과 탁 트인 바다 전망의 프라이빗 발코니를 갖춘 특별한 공간입니다."
  },
  {
    id: "villa",
    name: "풀 빌라",
    price: "₩1,600,000",
    size: "120 m²",
    view: "프라이빗 풀 & 가든",
    capacity: "성인 4명",
    amenities: ["프라이빗 풀", "야외 샤워", "가든 테라스", "개인 셰프", "라운지 공간"],
    image: "/templates/hotel/room-villa-01.jpg",
    desc: "최고의 럭셔리. 프라이빗 풀과 열대 정원, 맞춤형 버틀러 서비스를 갖춘 독립형 빌라입니다."
  }
];

export const services = [
  { icon: "Swimming", title: "인피니티 풀", desc: "수평선 너머로 펼쳐지는 파노라마 바다 전망을 감상하며 힐링하는 무한 가장자리 풀." },
  { icon: "Spa", title: "아만 스파", desc: "고대 치유 의식과 현대 웰니스가 만나는 수상 경력의 스파 성역." },
  { icon: "Dining", title: "미쉐린 다이닝", desc: "세계적으로 유명한 셰프들이 선사하는 세 개의 시그니처 레스토랑." },
  { icon: "Fitness", title: "웰니스 센터", desc: "최신 장비와 매일 진행되는 요가, 개인 트레이닝 세션을 제공합니다." },
  { icon: "Concierge", title: "컨시어지", desc: "24시간 맞춤형 컨시어지 서비스로 예약과 특별한 경험을 도와드립니다." },
  { icon: "Transport", title: "프라이빗 트랜스퍼", desc: "공항 왕편 최고급 차량 서비스와 전문 셔틀을 제공합니다." }
];

export const testimonials = [
  {
    id: 1,
    name: "김서연",
    location: "서울, 대한민국",
    text: "잊을 수 없는 휴식이었습니다. 웰컴 티부터 턴다운 서비스까지 모든 디테일이 완벽했습니다. 프라이빗 풀 빌라는 기대 이상이었어요.",
    rating: 5,
    avatar: "/templates/hotel/guest-01.jpg"
  },
  {
    id: 2,
    name: "Kenji T.",
    location: "도쿄, 일본",
    text: "건축과 자연의 조화가 숨 막힐 듯 아름답습니다. 현지 허브를 사용한 스파 트리트먼트는 깊은 회복을 선사했습니다.",
    rating: 5,
    avatar: "/templates/hotel/guest-02.jpg"
  },
  {
    id: 3,
    name: "박지민",
    location: "부산, 대한민국",
    text: "도착하는 순간부터 모든 스태프의 서비스가 탁월했습니다. 예약 단계에서부터 선호도를 기억해주는 세심함에 감동했습니다.",
    rating: 5,
    avatar: "/templates/hotel/guest-03.jpg"
  },
  {
    id: 4,
    name: "이정호",
    location: "대구, 대한민국",
    text: "결혼기념일을 이곳에서 보냈는데 정말 마법 같았어요. 별빛 아래서의 프라이빗 다이닝은 평생 간직할 추억이 되었습니다.",
    rating: 5,
    avatar: "/templates/hotel/guest-03.jpg"
  }
];
