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
    tagline: "예술과 미식의 도시",
    desc: "파리는 넓은 대로와 미술관, 오래된 건축과 다양한 미식으로 잘 알려진 도시입니다. 에펠탑과 센강, 몽마르트르와 골목길을 걸으며 서로 다른 분위기의 지역을 만나볼 수 있습니다.",
    heroImg: "/templates/OHMT008-airline/paris.png",
    flightDuration: "12h 30m",
    priceFrom: "1,890,000원",
    facts: [
      { label: "공용어", value: "프랑스어" },
      { label: "통화", value: "EUR (€)" },
      { label: "시간대", value: "UTC+1 / CET" },
      { label: "비자", value: "여행 전 입국 요건 확인" },
    ],
    bestMonths: ["4월", "5월", "6월", "9월", "10월"],
    highlights: [
      {
        name: "에펠탑",
        desc: "샹드마르스 광장에 자리한 파리의 대표적인 철제 탑입니다. 트로카데로와 센강 주변에서 다양한 각도로 바라볼 수 있습니다.",
        img: "/templates/OHMT008-airline/paris-gallery.jpg",
      },
      {
        name: "루브르 박물관",
        desc: "고대 유물부터 근현대 작품까지 방대한 컬렉션을 소장한 세계적인 박물관입니다.",
        img: "/templates/OHMT008-airline/korean-cuisine.jpg",
      },
      {
        name: "몬마르트르",
        desc: "구불구불한 골목과 사크레쾨르 대성당, 파리 시내 전망으로 유명한 언덕 지역입니다.",
        img: "/templates/OHMT008-airline/wellness-set.jpg",
      },
    ],
    flights: [
      { departure: "09:10", arrival: "15:40+1", duration: "12h 30m", price: "1,890,000원", class: "Economy" },
      { departure: "22:30", arrival: "05:00+2", duration: "12h 30m", price: "2,450,000원", class: "Business" },
      { departure: "14:00", arrival: "20:30+1", duration: "12h 30m", price: "6,900,000원", class: "First" },
    ],
    related: ["tokyo", "new-york", "dubai"],
  },
  tokyo: {
    slug: "tokyo",
    name: "Tokyo",
    country: "일본",
    iataCode: "NRT",
    tagline: "전통과 미래가 공존하는 곳",
    desc: "도쿄는 오래된 사찰과 정원, 현대적인 건축과 번화가가 가까이 공존하는 도시입니다. 지역마다 음식과 쇼핑, 문화와 거리 풍경이 뚜렷하게 달라 다양한 여행을 즐길 수 있습니다.",
    heroImg: "/templates/OHMT008-airline/tokyo.png",
    flightDuration: "2h 30m",
    priceFrom: "480,000원",
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
        desc: "수많은 사람이 동시에 길을 건너는 모습으로 잘 알려진 도쿄의 대표적인 교차로입니다.",
        img: "/templates/OHMT008-airline/destination-2.jpg",
      },
      {
        name: "센소지 절",
        desc: "아사쿠사에 자리한 도쿄의 대표적인 사찰입니다. 입구에서 본당까지 이어지는 나카미세 거리에는 전통 간식과 기념품 가게가 모여 있습니다.",
        img: "/templates/OHMT008-airline/tokyo-gallery.jpg",
      },
      {
        name: "후지산 당일 여행",
        desc: "하코네나 후지카와구치코에서 다양한 모습으로 감상할 수 있으며, 도쿄에서 당일 또는 1박 일정으로 다녀오기 좋습니다.",
        img: "/templates/OHMT008-airline/destination-main.jpg",
      },
    ],
    flights: [
      { departure: "07:30", arrival: "10:05", duration: "2h 30m", price: "480,000원", class: "Economy" },
      { departure: "13:00", arrival: "15:35", duration: "2h 30m", price: "950,000원", class: "Business" },
      { departure: "19:45", arrival: "22:20", duration: "2h 30m", price: "2,800,000원", class: "First" },
    ],
    related: ["bali", "paris", "sydney"],
  },
  "new-york": {
    slug: "new-york",
    name: "New York",
    country: "미국",
    iataCode: "JFK",
    tagline: "잠들지 않는 도시",
    desc: "뉴욕은 맨해튼의 고층 건물과 브루클린의 거리 문화, 공연과 미술관, 다양한 음식이 한데 모인 도시입니다. 짧은 일정에도 지역마다 다른 분위기를 경험할 수 있습니다.",
    heroImg: "/templates/OHMT008-airline/new-york.png",
    flightDuration: "14h 00m",
    priceFrom: "1,890,000원",
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
        desc: "맨해튼 중심부에 자리한 대형 공원으로 산책로와 호수, 잔디밭과 문화시설을 갖추고 있습니다.",
        img: "/templates/OHMT008-airline/airline-main-hero.png",
      },
      {
        name: "메트로폴리탄 미술관",
        desc: "고대부터 현대까지 여러 지역의 예술과 유물을 폭넓게 전시하는 대형 미술관입니다.",
        img: "/templates/OHMT008-airline/newyork-gallery.jpg",
      },
      {
        name: "브루클린 브리지",
        desc: "맨해튼과 브루클린을 잇는 대표적인 다리로, 보행로에서 뉴욕의 스카이라인을 감상할 수 있습니다.",
        img: "/templates/OHMT008-airline/airline-experience-hero.png",
      },
    ],
    flights: [
      { departure: "11:00", arrival: "13:00+1", duration: "14h 00m", price: "1,890,000원", class: "Economy" },
      { departure: "21:30", arrival: "23:30+1", duration: "14h 00m", price: "4,200,000원", class: "Business" },
      { departure: "16:00", arrival: "18:00+1", duration: "14h 00m", price: "11,000,000원", class: "First" },
    ],
    related: ["paris", "dubai", "sydney"],
  },
  dubai: {
    slug: "dubai",
    name: "Dubai",
    country: "UAE",
    iataCode: "DXB",
    tagline: "사막과 현대 건축",
    desc: "두바이는 초고층 건축과 대형 쇼핑몰, 해변과 사막 체험을 함께 즐길 수 있는 도시입니다. 현대적인 도심과 전통 시장, 해안 지역이 서로 다른 분위기를 보여줍니다.",
    heroImg: "/templates/OHMT008-airline/dubai.png",
    flightDuration: "9h 45m",
    priceFrom: "1,400,000원",
    facts: [
      { label: "공용어", value: "아랍어 / 영어" },
      { label: "통화", value: "AED (د.إ)" },
      { label: "시간대", value: "UTC+4 / GST" },
      { label: "비자", value: "여행 전 입국 요건 확인" },
    ],
    bestMonths: ["11월", "12월", "1월", "2월", "3월"],
    highlights: [
      {
        name: "부르즈 할리파",
        desc: "두바이 도심을 대표하는 초고층 건물로, 전망대에서 도시와 사막, 해안의 전경을 볼 수 있습니다.",
        img: "/templates/OHMT008-airline/dubai-gallery.jpg",
      },
      {
        name: "두바이 마리나",
        desc: "고층 건물과 마리나 산책로, 레스토랑과 요트 선착장이 이어지는 해안 지역입니다.",
        img: "/templates/OHMT008-airline/airline-book-hero.png",
      },
      {
        name: "사막 사파리",
        desc: "사막 드라이브와 낙타 체험, 일몰 감상과 저녁 식사를 묶은 다양한 투어를 이용할 수 있습니다.",
        img: "/templates/OHMT008-airline/airline-loyalty-hero.png",
      },
    ],
    flights: [
      { departure: "08:00", arrival: "13:45", duration: "9h 45m", price: "1,400,000원", class: "Economy" },
      { departure: "18:30", arrival: "00:15+1", duration: "9h 45m", price: "3,600,000원", class: "Business" },
      { departure: "23:00", arrival: "04:45+1", duration: "9h 45m", price: "9,400,000원", class: "First" },
    ],
    related: ["paris", "bali", "new-york"],
  },
  sydney: {
    slug: "sydney",
    name: "Sydney",
    country: "호주",
    iataCode: "SYD",
    tagline: "항구의 우아함",
    desc: "시드니는 항구와 오페라 하우스, 도심과 해변을 함께 즐길 수 있는 도시입니다. 해안 산책과 공연, 근교 자연 여행까지 다양한 일정을 구성하기 좋습니다.",
    heroImg: "/templates/OHMT008-airline/sydney.png",
    flightDuration: "10h 30m",
    priceFrom: "1,500,000원",
    facts: [
      { label: "공용어", value: "영어" },
      { label: "통화", value: "AUD ($)" },
      { label: "시간대", value: "UTC+10 / AEST" },
      { label: "비자", value: "여행 전 전자여행허가 확인" },
    ],
    bestMonths: ["9월", "10월", "11월", "3월", "4월"],
    highlights: [
      {
        name: "시드니 오페라 하우스",
        desc: "시드니 항구를 대표하는 공연장으로 독특한 지붕 형태와 해안 전망으로 잘 알려져 있습니다.",
        img: "/templates/OHMT008-airline/sydney-gallery.jpg",
      },
      {
        name: "본다이 비치",
        desc: "서핑과 해안 산책으로 유명한 해변입니다. 주변에는 카페와 상점, 해안 산책로가 이어집니다.",
        img: "/templates/OHMT008-airline/korean-cuisine.jpg",
      },
      {
        name: "블루 마운틴",
        desc: "시드니 근교의 산악 지역으로 사암 절벽과 폭포, 유칼립투스 숲과 여러 하이킹 코스를 만날 수 있습니다.",
        img: "/templates/OHMT008-airline/michelin-dining.jpg",
      },
    ],
    flights: [
      { departure: "09:30", arrival: "20:00", duration: "10h 30m", price: "1,500,000원", class: "Economy" },
      { departure: "22:45", arrival: "09:15+1", duration: "10h 30m", price: "4,000,000원", class: "Business" },
      { departure: "15:00", arrival: "01:30+1", duration: "10h 30m", price: "10,100,000원", class: "First" },
    ],
    related: ["tokyo", "bali", "new-york"],
  },
  bali: {
    slug: "bali",
    name: "Bali",
    country: "인도네시아",
    iataCode: "DPS",
    tagline: "자연과 휴식이 어우러진 섬",
    desc: "발리는 계단식 논과 숲, 사원과 해변을 함께 만날 수 있는 섬입니다. 우붓과 남부 해안, 동부 지역마다 분위기가 달라 휴양과 문화 여행을 함께 즐기기 좋습니다.",
    heroImg: "/templates/OHMT008-airline/bali.png",
    flightDuration: "7h 00m",
    priceFrom: "800,000원",
    facts: [
      { label: "공용어", value: "인도네시아어·발리어" },
      { label: "통화", value: "IDR (Rp)" },
      { label: "시간대", value: "UTC+8 / WITA" },
      { label: "비자", value: "여행 전 입국 요건 확인" },
    ],
    bestMonths: ["4월", "5월", "6월", "7월", "8월", "9월"],
    highlights: [
      {
        name: "우부드 논",
        desc: "우붓 북쪽에 자리한 계단식 논으로 산책로와 전망대에서 주변 풍경을 감상할 수 있습니다.",
        img: "/templates/OHMT008-airline/destination-2.jpg",
      },
      {
        name: "타나롯 사원",
        desc: "바다 위 바위섬에 자리한 사원으로, 해 질 무렵 바다와 사원의 실루엣을 함께 볼 수 있습니다.",
        img: "/templates/OHMT008-airline/airline-experience-hero.png",
      },
      {
        name: "세미냉 비치",
        desc: "해변과 리조트, 레스토랑과 상점이 모여 있는 지역으로 일몰과 가벼운 해변 산책을 즐기기 좋습니다.",
        img: "/templates/OHMT008-airline/bali-gallery.jpg",
      },
    ],
    flights: [
      { departure: "07:00", arrival: "14:00", duration: "7h 00m", price: "800,000원", class: "Economy" },
      { departure: "16:30", arrival: "23:30", duration: "7h 00m", price: "1,900,000원", class: "Business" },
      { departure: "23:55", arrival: "06:55+1", duration: "7h 00m", price: "5,500,000원", class: "First" },
    ],
    related: ["tokyo", "dubai", "sydney"],
  },
};
