export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: "collection" | "archive";
  material: string;
  color: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "울 버킷 햇",
    price: "₩120,000",
    image: "/templates/fashion/wool-hat.png",
    category: "collection",
    material: "퓨어 뉴질랜드 울",
    color: "차콜 블랙",
    description: "프리미엄 이탈리안 울로 제작된 모던한 실루엣의 버킷 햇입니다. 구조적인 브림과 통기성 좋은 코튼 안감이 특징입니다."
  },
  {
    id: 2,
    name: "클래식 트렌치 코트",
    price: "₩850,000",
    image: "/templates/fashion/trench-coat.png",
    category: "collection",
    material: "코튼 개버딘",
    color: "아이보리",
    description: "고밀도 코튼 개버딘으로 제작된 더블 브레스트 트렌치 코트입니다. 래글런 슬리브, 스톰 플랩, 칼라와 커프스의 버클 스트랩 디테일이 돋보입니다."
  },
  {
    id: 3,
    name: "미니멀리스트 백팩",
    price: "₩350,000",
    image: "/templates/fashion/backpack.png",
    category: "archive",
    material: "왁스드 캔버스 & 레더",
    color: "블랙",
    description: "하나의 메인 수납공간과 패딩 처리된 노트북 슬리브, 수공 마감 레더 트림이 적용된 세련된 백팩입니다."
  },
  {
    id: 4,
    name: "프리미엄 레더 부츠",
    price: "₩480,000",
    image: "/templates/fashion/boots.png",
    category: "archive",
    material: "풀그레인 송아지 가죽",
    color: "다크 체스트넛",
    description: "굿이어 웰트 공법과 블레이크 스티치로 제작된 부츠입니다. 식물성 가죽 갑피, 레더 솔, 모던한 스퀘어 토 프로필이 특징입니다."
  },
  {
    id: 5,
    name: "실크 이브닝 드레스",
    price: "₩1,200,000",
    image: "/templates/fashion/silk-dress.png",
    category: "collection",
    material: "18mm 실크 새틴",
    color: "미드나잇 블루",
    description: "리퀴드 실크 새틴의 바이어스 컷 플로어-랭스 드레스입니다. 조절 가능한 숄더 타이와 드레이프 카울 백이 적용되었습니다."
  },
  {
    id: 6,
    name: "코튼 베이직 티",
    price: "₩65,000",
    image: "/templates/fashion/basic-tee.png",
    category: "collection",
    material: "수피마 코튼 저지",
    color: "화이트",
    description: "헤비웨이트 260gsm 수피마 코튼. 리브 크루넥, 강화 숄더 심, 세탁 후에도 형태를 유지하는 박시 핏입니다."
  },
  {
    id: 7,
    name: "클래식 레더 재킷",
    price: "₩950,000",
    image: "/templates/fashion/leather-jacket-2.png",
    category: "archive",
    material: "이탈리안 부드러운 양가죽",
    color: "블랙",
    description: "부드러운 양가죽으로 제작된 더블 라이더 실루엣의 클래식 가죽 재킷입니다. 중량감 있는 메탈 하드웨어와 퀼팅 새틴 안감이 특징입니다."
  },
  {
    id: 8,
    name: "테일러드 울 블레이저",
    price: "₩620,000",
    image: "/templates/fashion/product-blazer.jpg",
    category: "collection",
    material: "버진 울 100%",
    color: "네이비 블루",
    description: "자연스러운 드레이프가 돋보이는 모던한 언스트럭처드 블레이저입니다. 노치 라펠과 패치 포켓으로 캐주얼하게 매치하기 좋습니다."
  },
  {
    id: 9,
    name: "케이블 니트 스웨터",
    price: "₩280,000",
    image: "/templates/fashion/product-knit.jpg",
    category: "collection",
    material: "메리노 울 블렌드",
    color: "오트밀",
    description: "클래식한 케이블 패턴의 크루넥 니트입니다. 메리노 울 블렌드로 까슬거림이 없고 우수한 보온성을 제공합니다."
  },
  {
    id: 10,
    name: "와이드 레그 트라우저",
    price: "₩320,000",
    image: "/templates/fashion/product-trousers.jpg",
    category: "collection",
    material: "울 & 폴리에스테르 혼방",
    color: "차콜",
    description: "여유로운 와이드 핏과 전면의 칼주름이 돋보이는 하이웨이스트 트라우저입니다."
  },
  {
    id: 11,
    name: "미니멀 가죽 벨트",
    price: "₩150,000",
    image: "/templates/fashion/accessories-2.png",
    category: "archive",
    material: "베지터블 태닝 가죽",
    color: "탄 (Tan)",
    description: "이탈리아산 베지터블 태닝 가죽으로 제작된 심플한 벨트입니다. 황동 버클과 수작업 엣지 마감으로 완성도를 높였습니다."
  },
  {
    id: 12,
    name: "프리미엄 선글라스",
    price: "₩240,000",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop",
    category: "collection",
    material: "아세테이트 & 편광 렌즈",
    color: "글로스 블랙",
    description: "수작업 아세테이트 프레임과 UV 차단 편광 렌즈가 결합된 프리미엄 선글라스입니다. 세련된 실루엣과 편안한 착용감을 제공합니다."
  }
];
