// src/app/templates/OHMT008-airline/destinations/[slug]/destinationData.ts

export interface Highlight {
  name: string;
  desc: string;
  img: string;
}

export interface Flight {
  departure: string;
  arrival: string;
  duration: string;
  price: string;
  class: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  desc: string;
  heroImg: string;
  iataCode: string;
  flightDuration: string;
  priceFrom: string;
  facts: { label: string; value: string }[];
  bestMonths: string[];
  highlights: Highlight[];
  flights: Flight[];
  related: string[];
}

export const destinations: Record<string, Destination> = {
  paris: {
    slug: "paris",
    name: "Paris",
    country: "프랑스",
    iataCode: "CDG",
    tagline: "빛과 낭만의 도시",
    desc: "파리는 웅장한 대로, 세계적 수준의 요리, 상징적인 랜드마크로 모든 여행자를 매혹합니다. 황혼의 에펠탑 황금빛에서부터 몬마르트르 자갈길의 조용한 매력까지, 프랑스의 수도는 예술, 역사, 현대적 럭셔리의 비교할 수 없는 조화를 선사합니다.",
    heroImg: "/templates/OHMT008-airline/paris.png",
    flightDuration: "12h 30m",
    priceFrom: "₩1,890,000",
    facts: [
      { label: "공용어", value: "프랑스어" },
      { label: "통화", value: "EUR (€)" },
      { label: "시간대", value: "UTC+1 / CET" },
      { label: "비자", value: "쉥겐 비자 필요" },
    ],
    bestMonths: ["4월", "5월", "6월", "9월", "10월"],
    highlights: [
      {
        name: "에펠탑",
        desc: "샹드마르스 광장에 우뚝 선 상징적인 철제 타워 — 트로카데로에서 바라보는 야경이 가장 아름답습니다.",
        img: "/templates/OHMT008-airline/paris-gallery.jpg",
      },
      {
        name: "루브르 박물관",
        desc: "모나리자와 밀로의 비너스를 포함한 35,000점의 예술 작품을 소장한 세계 최대의 박물관입니다.",
        img: "/templates/OHMT008-airline/korean-cuisine.jpg",
      },
      {
        name: "몬마르트르",
        desc: "구불구불한 골목길, 사크레쿠르 대성당, 숨 막히는 도시 전망이 펼쳐진 보헤미안 언덕 마을입니다.",
        img: "/templates/OHMT008-airline/wellness-set.jpg",
      },
    ],
    flights: [
      { departure: "09:10", arrival: "15:40+1", duration: "12h 30m", price: "₩1,890,000", class: "Economy" },
      { departure: "22:30", arrival: "05:00+2", duration: "12h 30m", price: "₩2,450,000", class: "Business" },
      { departure: "14:00", arrival: "20:30+1", duration: "12h 30m", price: "₩6,900,000", class: "First" },
    ],
    related: ["tokyo", "new-york", "dubai"],
  },
  tokyo: {
    slug: "tokyo",
    name: "Tokyo",
    country: "일본",
    iataCode: "NRT",
    tagline: "전통과 미래가 공존하는 곳",
    desc: "도쿄는 놀라운 대비의 도시입니다 — 고대 사원이 네온 빛 마천루 옆에 우뚝 서 있고, 고요한 정원이 세계에서 가장 분주한 기차역과 맞닿아 있습니다. 일본의 수도는 정교한 장인 정신과 최첨단 현대성이 어우러진 비할 바 없는 감각적 경험을 선사합니다.",
    heroImg: "/templates/OHMT008-airline/tokyo.png",
    flightDuration: "2h 30m",
    priceFrom: "₩480,000",
    facts: [
      { label: "공용어", value: "일본어" },
      { label: "통화", value: "JPY (¥)" },
      { label: "시간대", value: "UTC+9 / JST" },
      { label: "비자", value: "무비자 (90일)" },
    ],
    bestMonths: ["3월", "4월", "10월", "11월"],
    highlights: [
      {
        name: "시부야 교차로",
        desc: "세계에서 가장 분주한 횡단보도 — 도쿄의 전기 같은 에너지와 속도를 상징하는 살아있는 랜드마크입니다.",
        img: "/templates/OHMT008-airline/destination-2.jpg",
      },
      {
        name: "센소지 절",
        desc: "아사쿠사에 자리한 도쿄에서 가장 오래되고 중요한 불교 사원, 전통 나카미세 상점가가 길목을 장식합니다.",
        img: "/templates/OHMT008-airline/tokyo-gallery.jpg",
      },
      {
        name: "후지산 당일 여행",
        desc: "하코네나 후지카와구치코에서 가장 잘 보이는 일본의 상징적인 성스러운 봉우리 — 도시에서 짧은 거리에 있습니다.",
        img: "/templates/OHMT008-airline/destination-main.jpg",
      },
    ],
    flights: [
      { departure: "07:30", arrival: "10:05", duration: "2h 30m", price: "₩480,000", class: "Economy" },
      { departure: "13:00", arrival: "15:35", duration: "2h 30m", price: "₩950,000", class: "Business" },
      { departure: "19:45", arrival: "22:20", duration: "2h 30m", price: "₩2,800,000", class: "First" },
    ],
    related: ["bali", "paris", "sydney"],
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    country: "미국",
    iataCode: "JFK",
    tagline: "잠들지 않는 도시",
    desc: "뉴욕은 지구상 그 어느 곳과도 비교할 수 없는 에너지로 고동칩니다. 맨해튼의 하늘을 찌르는 타워에서부터 브루클린의 문화적 풍요까지, 이 글로벌 메트로폴리스는 세계적 수준의 다이닝, 예술, 패션, 엔터테인먼트를 하나의 특별한 도시에서 제공합니다.",
    heroImg: "/templates/OHMT008-airline/new-york.png",
    flightDuration: "14h 00m",
    priceFrom: "₩1,890,000",
    facts: [
      { label: "공용어", value: "영어" },
      { label: "통화", value: "USD ($)" },
      { label: "시간대", value: "UTC-5 / EST" },
      { label: "비자", value: "ESTA 필요" },
    ],
    bestMonths: ["4월", "5월", "9월", "10월"],
    highlights: [
      {
        name: "센트럴 파크",
        desc: "맨해튼 중심부에 자리한 843에이커의 조경 공원 — 뉴욕의 허파이자 녹색 오아시스입니다.",
        img: "/templates/OHMT008-airline/airline-main-hero.png",
      },
      {
        name: "메트로폴리탄 미술관",
        desc: "세계 최고의 미술관 중 하나 — 지구 곳곳의 5,000년 이상 예술을 전시합니다.",
        img: "/templates/OHMT008-airline/newyork-gallery.jpg",
      },
      {
        name: "브루클린 브리지",
        desc: "맨해튼과 브루클린을 연결하는 공학의 경이 — 일출에 걸으면 상징적인 스카이라인을 감상할 수 있습니다.",
        img: "/templates/OHMT008-airline/airline-experience-hero.png",
      },
    ],
    flights: [
      { departure: "11:00", arrival: "13:00+1", duration: "14h 00m", price: "₩1,890,000", class: "Economy" },
      { departure: "21:30", arrival: "23:30+1", duration: "14h 00m", price: "₩4,200,000", class: "Business" },
      { departure: "16:00", arrival: "18:00+1", duration: "14h 00m", price: "₩11,000,000", class: "First" },
    ],
    related: ["paris", "dubai", "sydney"],
  },
  dubai: {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    iataCode: "DXB",
    tagline: "사막의 럭셔리",
    desc: "두바이는 최고의 도시입니다 — 가장 높은 타워, 가장 큰 쇼핑몰, 가장 호화로운 호텔. 아라비아 사막에서 솟아오른 이 빛나는 메트로폴리스는 상업, 관광, 건축적 야망의 글로벌 허브로 변모했습니다.",
    heroImg: "/templates/OHMT008-airline/dubai.png",
    flightDuration: "9h 45m",
    priceFrom: "₩1,400,000",
    facts: [
      { label: "공용어", value: "아랍어 / 영어" },
      { label: "통화", value: "AED (د.إ)" },
      { label: "시간대", value: "UTC+4 / GST" },
      { label: "비자", value: "도착 비자 (30일)" },
    ],
    bestMonths: ["11월", "12월", "1월", "2월", "3월"],
    highlights: [
      {
        name: "부르즈 할리파",
        desc: "828m 세계 최고층 건물 — 148층 전망대까지 엘리베이터로 올라가 숨 막히는 전망을 감상하세요.",
        img: "/templates/OHMT008-airline/dubai-gallery.jpg",
      },
      {
        name: "두바이 마리나",
        desc: "마천루, 럭셔리 요트, 파인 다이닝, 활기찬 나이트라이프가 늘어선 아름다운 워터프론트 지구입니다.",
        img: "/templates/OHMT008-airline/airline-book-hero.png",
      },
      {
        name: "사막 사파리",
        desc: "듄 언덕 드라이빙, 낙타 타기, 별빛 아래 전통 베두인 디너를 경험하세요 — 잊을 수 없는 추억.",
        img: "/templates/OHMT008-airline/airline-loyalty-hero.png",
      },
    ],
    flights: [
      { departure: "08:00", arrival: "13:45", duration: "9h 45m", price: "₩1,400,000", class: "Economy" },
      { departure: "18:30", arrival: "00:15+1", duration: "9h 45m", price: "₩3,600,000", class: "Business" },
      { departure: "23:00", arrival: "04:45+1", duration: "9h 45m", price: "₩9,400,000", class: "First" },
    ],
    related: ["paris", "bali", "new-york"],
  },
  sydney: {
    slug: "sydney",
    name: "Sydney",
    country: "호주",
    iataCode: "SYD",
    tagline: "항구의 우아함",
    desc: "시드니는 아름다운 항구, 세계적으로 유명한 오페라 하우스, 황금빛 서핑 해변으로 매혹합니다. 호주에서 가장 상징적인 도시는 여유로운 해안가 라이프스타일과 세련된 도시 문화를 조화시켜 세계에서 가장 매력적인 여행지 중 하나로 손꼽힙니다.",
    heroImg: "/templates/OHMT008-airline/sydney.png",
    flightDuration: "10h 30m",
    priceFrom: "₩1,500,000",
    facts: [
      { label: "공용어", value: "영어" },
      { label: "통화", value: "AUD ($)" },
      { label: "시간대", value: "UTC+10 / AEST" },
      { label: "비자", value: "ETA 필요" },
    ],
    bestMonths: ["9월", "10월", "11월", "3월", "4월"],
    highlights: [
      {
        name: "시드니 오페라 하우스",
        desc: "20세기 최고의 건축적 성과 중 하나 — 항구에 자리한 유네스코 세계문화유산입니다.",
        img: "/templates/OHMT008-airline/sydney-gallery.jpg",
      },
      {
        name: "본다이 비치",
        desc: "호주에서 가장 유명한 해변 — 황금빛 모래, 넘실대는 파도, 활기찬 카페와 부티크가 어우러진 곳.",
        img: "/templates/OHMT008-airline/korean-cuisine.jpg",
      },
      {
        name: "블루 마운틴",
        desc: "시내에서 단 90분 거리 — 극적인 사암 절벽, 폭포, 고대 유칼립투스 숲이 펼쳐집니다.",
        img: "/templates/OHMT008-airline/michelin-dining.jpg",
      },
    ],
    flights: [
      { departure: "09:30", arrival: "20:00", duration: "10h 30m", price: "₩1,500,000", class: "Economy" },
      { departure: "22:45", arrival: "09:15+1", duration: "10h 30m", price: "₩4,000,000", class: "Business" },
      { departure: "15:00", arrival: "01:30+1", duration: "10h 30m", price: "₩10,100,000", class: "First" },
    ],
    related: ["tokyo", "bali", "new-york"],
  },
  bali: {
    slug: "bali",
    name: "Bali",
    country: "인도네시아",
    iataCode: "DPS",
    tagline: "기다리는 열대 낙원",
    desc: "발리는 그 자체로 하나의 세계입니다 — 계단식 논이 정글 계곡으로 흘러내리고, 신성한 사원이 해안 절벽에 자리하며, 공기엔 향과 프랑기파니 향기가 감돈다. 신들의 섬은 영적 풍요로움과 자연의 아름다움이 어우러진 특별한 경험을 선사합니다.",
    heroImg: "/templates/OHMT008-airline/bali.png",
    flightDuration: "7h 00m",
    priceFrom: "₩800,000",
    facts: [
      { label: "공용어", value: "발리어 / 인도네시아어" },
      { label: "통화", value: "IDR (Rp)" },
      { label: "시간대", value: "UTC+8 / WITA" },
      { label: "비자", value: "도착 비자" },
    ],
    bestMonths: ["4월", "5월", "6월", "7월", "8월", "9월"],
    highlights: [
      {
        name: "우부드 논",
        desc: "전설적인 테갈라랑 계단식 논 — 수세기 동안 언덕에 새겨진 에메랄드 빛 계단입니다.",
        img: "/templates/OHMT008-airline/destination-2.jpg",
      },
      {
        name: "타나롯 사원",
        desc: "바위 섬에 자리한 신비로운 바다 사원 — 하늘을 배경으로 실루엣이 드리우는 일몰이 가장 장관입니다.",
        img: "/templates/OHMT008-airline/airline-experience-hero.png",
      },
      {
        name: "세미냉 비치",
        desc: "발리에서 가장 세련된 해변 — 디자이너 비치 클럽, 최고의 서핑, 전설적인 일몰 칵테일이 기다립니다.",
        img: "/templates/OHMT008-airline/bali-gallery.jpg",
      },
    ],
    flights: [
      { departure: "07:00", arrival: "14:00", duration: "7h 00m", price: "₩800,000", class: "Economy" },
      { departure: "16:30", arrival: "23:30", duration: "7h 00m", price: "₩1,900,000", class: "Business" },
      { departure: "23:55", arrival: "06:55+1", duration: "7h 00m", price: "₩5,500,000", class: "First" },
    ],
    related: ["tokyo", "dubai", "sydney"],
  },
};
