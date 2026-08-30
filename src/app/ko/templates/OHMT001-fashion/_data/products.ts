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
    image: "/templates/OHMT001-fashion/wool-hat.png",
    category: "collection",
    material: "뉴질랜드산 울 100%",
    color: "차콜 블랙",
    description: "뉴질랜드산 울로 만든 버킷 햇입니다. 형태가 자연스럽게 잡히는 챙과 부드러운 코튼 안감을 적용해 편안하게 착용할 수 있습니다."
  },
  {
    id: 2,
    name: "클래식 트렌치코트",
    price: "₩850,000",
    image: "/templates/OHMT001-fashion/trench-coat.png",
    category: "collection",
    material: "고밀도 코튼 개버딘",
    color: "아이보리",
    description: "고밀도 코튼 개버딘으로 만든 더블브레스트 트렌치코트입니다. 래글런 소매로 움직임이 편하며, 스톰 플랩과 허리 벨트로 실루엣을 조절할 수 있습니다."
  },
  {
    id: 3,
    name: "왁스드 캔버스 백팩",
    price: "₩350,000",
    image: "/templates/OHMT001-fashion/backpack.png",
    category: "archive",
    material: "왁스드 캔버스 · 천연 가죽",
    color: "블랙",
    description: "넉넉한 메인 수납공간과 충격을 줄여주는 노트북 수납칸을 갖춘 백팩입니다. 자주 닿는 부분은 천연 가죽으로 보강해 오래 사용할 수 있도록 만들었습니다."
  },
  {
    id: 4,
    name: "가죽 앵클부츠",
    price: "₩480,000",
    image: "/templates/OHMT001-fashion/boots.png",
    category: "archive",
    material: "풀그레인 송아지 가죽",
    color: "다크 브라운",
    description: "풀그레인 송아지 가죽으로 만든 앵클부츠입니다. 굿이어 웰트 제법을 적용해 밑창 수선이 가능하며, 발끝은 단정한 스퀘어 토로 마무리했습니다."
  },
  {
    id: 5,
    name: "실크 이브닝 드레스",
    price: "₩1,200,000",
    image: "/templates/OHMT001-fashion/silk-dress.png",
    category: "collection",
    material: "18모메 실크 새틴",
    color: "미드나이트 블루",
    description: "18모메 실크 새틴을 사선으로 재단해 몸을 따라 부드럽게 흐르는 드레스입니다. 어깨끈의 길이를 조절할 수 있으며, 등 부분은 자연스러운 드레이프로 마무리했습니다."
  },
  {
    id: 6,
    name: "수피마 코튼 티셔츠",
    price: "₩65,000",
    image: "/templates/OHMT001-fashion/basic-tee.png",
    category: "collection",
    material: "260gsm 수피마 코튼 저지",
    color: "화이트",
    description: "도톰한 260gsm 수피마 코튼으로 만든 크루넥 티셔츠입니다. 어깨선을 보강해 세탁 후에도 형태가 쉽게 무너지지 않으며, 여유 있는 핏으로 편하게 입을 수 있습니다."
  },
  {
    id: 7,
    name: "양가죽 라이더 재킷",
    price: "₩950,000",
    image: "/templates/OHMT001-fashion/leather-jacket-2.png",
    category: "archive",
    material: "이탈리아산 양가죽",
    color: "블랙",
    description: "부드러운 이탈리아산 양가죽으로 만든 더블 라이더 재킷입니다. 움직이기 편하도록 패턴을 조정하고, 안쪽에는 매끄러운 퀼팅 새틴 안감을 적용했습니다."
  },
  {
    id: 8,
    name: "울 블레이저",
    price: "₩620,000",
    image: "/templates/OHMT001-fashion/product-blazer.jpg",
    category: "collection",
    material: "버진 울 100%",
    color: "네이비",
    description: "버진 울로 만든 비구조적 블레이저입니다. 부드럽게 떨어지는 어깨선과 패치 포켓을 적용해 셔츠는 물론 티셔츠와도 편하게 맞춰 입을 수 있습니다."
  },
  {
    id: 9,
    name: "케이블 니트",
    price: "₩280,000",
    image: "/templates/OHMT001-fashion/product-knit.jpg",
    category: "collection",
    material: "메리노 울 혼방",
    color: "오트밀",
    description: "입체적인 케이블 짜임을 살린 크루넥 니트입니다. 부드러운 메리노 울 혼방 소재를 사용해 맨살에 닿아도 부담이 적고 따뜻하게 입을 수 있습니다."
  },
  {
    id: 10,
    name: "와이드 팬츠",
    price: "₩320,000",
    image: "/templates/OHMT001-fashion/product-trousers.jpg",
    category: "collection",
    material: "울 · 폴리에스터 혼방",
    color: "차콜",
    description: "허리선이 높고 다리선이 여유롭게 떨어지는 와이드 팬츠입니다. 앞면의 깊은 주름이 실루엣을 단정하게 잡아주며, 재킷과 니트 모두에 잘 어울립니다."
  },
  {
    id: 11,
    name: "가죽 벨트",
    price: "₩150,000",
    image: "/templates/OHMT001-fashion/accessories-2.png",
    category: "archive",
    material: "베지터블 태닝 가죽",
    color: "탄 브라운",
    description: "이탈리아산 베지터블 태닝 가죽으로 만든 벨트입니다. 황동 버클을 사용하고 가장자리를 손으로 다듬어, 오래 사용할수록 색과 질감이 자연스럽게 깊어집니다."
  },
  {
    id: 12,
    name: "아세테이트 선글라스",
    price: "₩240,000",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop",
    category: "collection",
    material: "아세테이트 · 편광 렌즈",
    color: "글로스 블랙",
    description: "손으로 다듬은 아세테이트 프레임에 자외선 차단 편광 렌즈를 적용했습니다. 코와 귀에 닿는 부분의 균형을 조정해 장시간 착용해도 부담이 적습니다."
  }
];
