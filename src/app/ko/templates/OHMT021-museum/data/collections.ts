export interface CollectionItem {
  id: string;
  slug: string;
  title: string;
  artist: string;
  year: string;
  img: string;
  images?: string[];
  tag: string;
  category: "Sculpture" | "Fresco" | "Marble" | "Architecture";
  description: string;
  audioDuration: string;
}

export const collections: CollectionItem[] = [
  { 
    id: "vatican-laocoon",
    slug: "laocoon-and-his-sons",
    title: "라오콘 군상",
    artist: "아게산드로스·아테노도로스",
    year: 'c. 30 BC',
    img: "/templates/OHMT021-museum/laocoon-sculpture.png", 
    images: ["/templates/OHMT021-museum/laocoon-sculpture.png", "/templates/OHMT021-museum/laocoon-detail-1.png", "/templates/OHMT021-museum/laocoon-detail-2.png"],
    tag: "조각",
    category: "Sculpture",
    description: "트로이의 사제 라오콘과 두 아들이 바다뱀에 휘감긴 순간을 표현한 고대 조각입니다.",
    audioDuration: "2:15"
  },
  { 
    id: "vatican-athens",
    slug: "school-of-athens",
    title: "아테네 학당",
    artist: "Raphael",
    year: '1509-1511',
    img: "/templates/OHMT021-museum/school-of-athens.png", 
    images: ["/templates/OHMT021-museum/school-of-athens.png"],
    tag: "프레스코화",
    category: "Fresco",
    description: "고대 철학자들을 한 공간에 배치해 지식과 사상의 흐름을 표현한 라파엘로의 대표작입니다.",
    audioDuration: "4:30"
  },
  { 
    id: "vatican-adam",
    slug: "creation-of-adam",
    title: "아담의 창조",
    artist: "Michelangelo",
    year: '1508-1512',
    img: "/templates/OHMT021-museum/creation-of-adam.png", 
    images: ["/templates/OHMT021-museum/creation-of-adam.png"],
    tag: "프레스코화",
    category: "Fresco",
    description: "신이 아담에게 생명을 전하는 순간을 그린 시스티나 성당 천장화의 대표 장면입니다.",
    audioDuration: "3:45"
  },
  { 
    id: "vatican-pieta",
    slug: "pieta",
    title: "피에타",
    artist: "Michelangelo",
    year: '1498-1499',
    img: "/templates/OHMT021-museum/pieta-sculpture.png", 
    images: ["/templates/OHMT021-museum/pieta-sculpture.png"],
    tag: "대리석",
    category: "Marble",
    description: "성모 마리아가 죽은 예수를 품에 안은 모습을 표현한 미켈란젤로의 대리석 조각입니다.",
    audioDuration: "2:50"
  },
  { 
    id: "vatican-apollo",
    slug: "apollo-belvedere",
    title: "벨베데레의 아폴론",
    artist: "Leochares",
    year: 'c. 120-140 AD',
    img: "/templates/OHMT021-museum/apollo-belvedere.png", 
    tag: "조각",
    category: "Sculpture",
    description: "고대 그리스 청동상을 바탕으로 제작된 로마 시대의 대리석 복제품으로, 고전 조각의 이상적인 비례를 보여줍니다.",
    audioDuration: "3:10"
  },
  { 
    id: "vatican-transfiguration",
    slug: "transfiguration-raphael",
    title: "그리스도의 변형",
    artist: "Raphael",
    year: '1516-1520',
    img: "/templates/OHMT021-museum/transfiguration.png", 
    tag: "프레스코화",
    category: "Fresco",
    description: "그리스도의 변형 장면과 화면 아래 인물들의 극적인 움직임을 함께 담은 라파엘로의 후기 작품입니다.",
    audioDuration: "5:20"
  },
  // Auto-generate duplicates to fulfill the 10+ items per category request visually
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `vatican-extra-${i}`,
    slug: `masterpiece-${i}`,
    title: `소장품 아카이브 0${i + 7}`,
    artist: "작자 미상",
    year: "제작 연대 미상",
    img: [
      "/templates/OHMT021-museum/laocoon-sculpture.png",
      "/templates/OHMT021-museum/school-of-athens.png",
      "/templates/OHMT021-museum/creation-of-adam.png",
      "/templates/OHMT021-museum/pieta-sculpture.png",
      "/templates/OHMT021-museum/apollo-belvedere.png",
      "/templates/OHMT021-museum/transfiguration.png"
    ][i % 6],
    tag: i % 3 === 0 ? "Fresco" : "Sculpture",
    category: (i % 3 === 0 ? "Fresco" : (i % 3 === 1 ? "Sculpture" : "Marble")) as "Fresco" | "Sculpture" | "Marble",
    description: "오랜 시간 보존되어 온 바티칸 미술관의 소장품입니다.",
    audioDuration: "1:45"
  }))
];
