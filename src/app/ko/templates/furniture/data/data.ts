export const C = {
  white: "var(--color-bg)",
  bg: "var(--color-light-bg)",
  text: "var(--color-text)",
  sub: "var(--color-secondary)",
  accent: "var(--color-primary)",
  border: "#D2D2D7",
};

export const products = [
  {
    id: "1",
    name: "시에로 라운지 체어",
    category: "의자",
    price: "$1,290",
    image: "/templates/furniture/chair.png",
    tag: "에센셜",
    desc: "안락함과 디자인적 절제미가 어우러진 시그니처 체어. 미니멀한 실루엣을 유지하며 이상적인 인간공학적 서포트를 보장합니다.",
    details: {
      material: "Solid Walnut, Premium Italian Leather",
      dimensions: "82cm x 75cm x 88cm",
      weight: "18kg",
      origin: "Handcrafted in Milan"
    },
    gallery: ["/templates/furniture/chair.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "2",
    name: "벨벳 모노 소파",
    category: "소파",
    price: "$3,400",
    image: "/templates/furniture/sofa.png",
    tag: "럭셔리",
    desc: "최상급 린넨과 거위털 패딩을 채워넣어 온전한 몰입과 안락을 선사하는 마스터피스 소파.",
    details: { material: "Italian Linen, Goose Down", dimensions: "240 x 105 x 75 cm", weight: "62kg", origin: "Italy" },
    gallery: ["/templates/furniture/sofa.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "3",
    name: "오크 다이닝 테이블",
    category: "다이닝",
    price: "$4,200",
    image: "/templates/furniture/table.png",
    tag: "에센셜",
    desc: "친환경 유기농 오크 원목으로 만들어져 현대적인 주방의 중심이자 만남의 광장이 되어줄 테이블.",
    details: { material: "Solid European Oak", dimensions: "200 x 90 x 75 cm", weight: "85kg", origin: "Denmark" },
    gallery: ["/templates/furniture/table.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "4",
    name: "월넛 라운지 체어",
    category: "라운지",
    price: "$2,850",
    image: "/templates/furniture/chair.png",
    tag: "아이코닉",
    desc: "정교하게 손으로 다듬어진 아메리칸 월넛 바디와 조각 같은 디자인이 돋보이는 럭셔리 라운저.",
    details: { material: "American Walnut, Semi-Aniline Leather", dimensions: "85 x 82 x 78 cm", weight: "24kg", origin: "USA" },
    gallery: ["/templates/furniture/chair.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "5",
    name: "세라믹 펜던트 조명",
    category: "조명",
    price: "$890",
    image: "/templates/furniture/lamp.png",
    tag: "앰비언트",
    desc: "거친 흙빛의 도자기 질감과 매끄러운 비례가 아름다운 공간의 은은한 조도를 연출해주는 조명.",
    details: { material: "Hand-thrown Ceramic, Brass", dimensions: "45 x 45 x 20 cm", weight: "4.5kg", origin: "Japan" },
    gallery: ["/templates/furniture/lamp.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "6",
    name: "브루탈리스트 사이드 테이블",
    category: "리빙",
    price: "$1,150",
    image: "/templates/furniture/sidetable.png",
    tag: "로우",
    desc: "초경량 콘크리트로 캐스팅한 후 섬세한 오일 마감을 거쳐 소재 그대로의 성질을 부각한 가구.",
    details: { material: "Architectural Concrete", dimensions: "40 x 40 x 45 cm", weight: "18kg", origin: "Germany" },
    gallery: ["/templates/furniture/sidetable.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "7",
    name: "플로팅 월 데스크",
    category: "홈 오피스",
    price: "$1,650",
    image: "/templates/furniture/desk.png",
    tag: "슬릭",
    desc: "공간 활용도가 극대화된 책상으로, 벽면에 깔끔하게 고정되어 세련된 작업실 분위기를 연출합니다.",
    details: { material: "Powder-coated Steel, Oak", dimensions: "120 x 50 x 12 cm", weight: "32kg", origin: "Sweden" },
    gallery: ["/templates/furniture/desk.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "8",
    name: "린넨 플랫폼 베드",
    category: "침실",
    price: "$5,400",
    image: "/templates/furniture/bed.png",
    tag: "서린",
    desc: "고급 벨기에산 린넨 헤드보드와 애쉬 원목 조합으로 안락함의 온전한 쉼터가 되어주는 프레임.",
    details: { material: "Belgian Linen, Ash Wood", dimensions: "180 x 210 x 95 cm", weight: "110kg", origin: "Belgium" },
    gallery: ["/templates/furniture/bed.png", "/templates/furniture/lifestyle-narrative.png"]
  },
  {
    id: "9",
    name: "애쉬 원목 워드로브",
    category: "수납",
    price: "$7,800",
    image: "/templates/furniture/wardrobe.png",
    tag: "그랜드",
    desc: "애쉬 원목의 자연스러운 결을 살린 모노리스적 존재감, 브래스 디테일이 돋보이는 대용량 수납장.",
    details: { material: "Solid Ash Wood, Brass", dimensions: "160 x 60 x 220 cm", weight: "145kg", origin: "Finland" },
    gallery: ["/templates/furniture/wardrobe.png", "/templates/furniture/lifestyle-narrative.png"]
  }
];

export const stats = [
  { label: "행복한 고객", value: "30K+" },
  { label: "디자인 어워드", value: "500+" },
  { label: "헤리티지", value: "15년" }
];
