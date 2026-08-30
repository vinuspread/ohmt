// src/app/ko/templates/OHMT005-sneaker/_components/sections/ProductGrid.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";

export const products = [
  {
    id: "sn-001",
    name: "Air Stride Pro",
    price: 240,
    originalPrice: 280,
    rating: 4.5,
    reviews: 128,
    img: "/templates/OHMT005-sneaker/product-1.jpg",
    badge: "베스트셀러",
    longDesc: "기록 단축을 위한 카본 플레이트 러닝화입니다. 중창 전체 길이에 카본 플레이트를 넣고, 서로 다른 밀도의 고반발 폼을 겹쳐 빠른 페이스에서 자연스럽게 앞으로 구를 수 있도록 설계했습니다.\n\n얇은 워프 니트 메시 갑피는 발을 가볍게 감싸고 열과 습기를 배출합니다. 뒤꿈치의 TPU 지지대는 착지할 때 발이 좌우로 흔들리는 것을 줄여줍니다.\n\n마라톤 대회나 인터벌 훈련처럼 속도를 내는 러닝에 적합합니다. 카본화를 처음 신는 경우 짧은 거리부터 적응하는 것을 권장합니다.",
    specs: [
      { label: "중창", value: "고반발 이중 밀도 폼" },
      { label: "카본 플레이트", value: "중창 전체 길이의 3D 카본 플레이트" },
      { label: "갑피", value: "초경량 워프 니트 메시" },
      { label: "밑창", value: "젖은 노면을 고려한 고마모 고무 밑창" },
      { label: "드롭", value: "8mm" },
      { label: "무게", value: "약 215g · 270mm 한 짝 기준" },
      { label: "아치", value: "중립형" },
      { label: "추천 용도", value: "로드 레이스, 인터벌·스피드 훈련" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "김지민", rating: 5, date: "2026년 5월", text: "반발력이 빠르게 느껴지고 발이 앞으로 자연스럽게 굴러갑니다. 발볼은 다소 좁은 편이라 구매 전에 사이즈표를 확인하는 것이 좋습니다." },
      { id: "r2", reviewer: "박은우", rating: 4, date: "2026년 4월", text: "빠른 페이스에서 신기 좋은 러닝화입니다. 평소 발볼이 넓은 편이라 반 사이즈 크게 선택했더니 편했습니다." },
      { id: "r3", reviewer: "이민우", rating: 5, date: "2026년 5월", text: "갑피가 얇고 통풍이 잘됩니다. 여름철 훈련에서도 발이 답답하지 않았고 무게도 가볍게 느껴졌습니다." },
      { id: "r4", reviewer: "최서진", rating: 5, date: "2026년 6월", text: "쿠션은 부드럽기보다 탄탄하고 반발력이 있는 편입니다. 장거리 조깅보다는 속도 훈련에서 더 잘 맞았습니다." }
    ]
  },
  {
    id: "sn-002",
    name: "Urban Classic",
    price: 180,
    originalPrice: null,
    rating: 4.3,
    reviews: 96,
    img: "/templates/OHMT005-sneaker/product-2.jpg",
    badge: null,
    longDesc: "장식을 줄인 기본형 가죽 스니커즈입니다. 풀그레인 나파 가죽을 사용해 처음에는 형태가 단단하지만 신을수록 발 모양에 맞게 부드러워집니다.\n\n안쪽에는 천연 가죽 안감을 덧대 마찰을 줄였고, 쿠셔닝 인솔을 넣어 일상에서 오래 걸을 때도 부담이 적도록 구성했습니다. 고무 컵솔은 옆면을 스티치로 한 번 더 고정해 접착부가 쉽게 벌어지지 않도록 했습니다.\n\n데님과 치노 팬츠, 슬랙스처럼 다양한 옷에 맞춰 신기 좋습니다. 밝은 색 가죽은 오염이 생기면 부드러운 마른 천으로 먼저 닦아주세요.",
    specs: [
      { label: "갑피", value: "풀그레인 나파 송아지 가죽" },
      { label: "안감", value: "천연 돈피 가죽" },
      { label: "밑창", value: "스티치로 고정한 천연 고무 컵솔" },
      { label: "인솔", value: "충격 흡수 폼과 가죽 커버 인솔" },
      { label: "제작 방식", value: "컵솔 사이드월 스티치" },
      { label: "무게", value: "약 340g · 270mm 한 짝 기준" },
      { label: "신발끈", value: "왁스 코팅 면 끈" },
      { label: "제조국", value: "포르투갈 제화 공방 제작" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "이유진", rating: 5, date: "2026년 3월", text: "두 번째 색상을 추가로 구매했습니다. 가죽의 결이 자연스럽고 데님이나 슬랙스에 모두 잘 어울립니다." },
      { id: "r2", reviewer: "윤성하", rating: 4, date: "2026년 2월", text: "전체적인 형태가 깔끔해 출근할 때도 자주 신습니다. 처음 며칠은 가죽이 조금 단단했지만 신을수록 편해졌습니다." },
      { id: "r3", reviewer: "정재원", rating: 5, date: "2026년 4월", text: "봉제선이 고르고 컵솔 연결 부분도 깔끔합니다. 밑창이 쉽게 닳지 않아 일상용으로 만족스럽습니다." },
      { id: "r4", reviewer: "송민우", rating: 4, date: "2026년 5월", text: "평소 신는 사이즈로 선택했는데 발에 잘 맞았습니다. 앞코가 슬림한 편이므로 발볼이 넓다면 사이즈표를 확인하는 것이 좋습니다." }
    ]
  },
  {
    id: "sn-003",
    name: "Shadow Runner",
    price: 320,
    originalPrice: 380,
    rating: 4.7,
    reviews: 214,
    img: "/templates/OHMT005-sneaker/product-3.jpg",
    badge: "20% 할인",
    longDesc: "비와 젖은 노면을 고려한 테크 스니커즈입니다. 방수·방풍 멤브레인 위에 립스탑 나일론과 합성 가죽 보강재를 덧대 마찰이 잦은 부분의 내구성을 높였습니다.\n\n원터치 퀵 레이스로 끈의 조임을 빠르게 조절할 수 있으며, 뒤꿈치와 옆면의 반사 패널은 어두운 환경에서 빛을 받으면 밝게 보입니다. 중창은 단단한 편으로 보행할 때 발을 안정적으로 받쳐줍니다.\n\n생활 방수 제품이지만 장시간 물에 잠기거나 깊은 물을 통과하는 용도로는 적합하지 않습니다. 젖은 뒤에는 직사광선을 피해 통풍이 잘되는 곳에서 말려주세요.",
    specs: [
      { label: "방수", value: "방수·방풍 멤브레인" },
      { label: "갑피", value: "립스탑 나일론과 합성 가죽 보강재" },
      { label: "끈 조절", value: "원터치 퀵 레이스 토글" },
      { label: "반사 소재", value: "고휘도 반사 패널" },
      { label: "중창", value: "고탄성 파일론 폼" },
      { label: "밑창", value: "사계절용 고접지 고무 밑창" },
      { label: "품질 보증", value: "방수 멤브레인 1년 품질 보증" },
      { label: "제조국", value: "베트남 아웃도어화 전문 공장" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "최민혁", rating: 5, date: "2026년 4월", text: "퀵 레이스 덕분에 신고 벗기 편합니다. 비가 오는 날 짧게 걸었을 때 안쪽까지 젖지 않았고 무게도 예상보다 가벼웠습니다." },
      { id: "r2", reviewer: "장태우", rating: 4, date: "2026년 3월", text: "테크웨어나 카고 팬츠에 잘 어울립니다. 생활 방수는 만족스럽고 쿠션은 부드럽기보다 단단한 편입니다." },
      { id: "r3", reviewer: "윤성현", rating: 5, date: "2026년 5월", text: "반사 패널이 과하게 번쩍이지 않고 빛을 받을 때만 은은하게 보입니다. 야간 보행 때도 눈에 잘 띄는 편입니다." },
      { id: "r4", reviewer: "황보림", rating: 5, date: "2026년 6월", text: "표면에 진흙이 묻었을 때 젖은 천으로 닦으니 쉽게 정리됐습니다. 퀵 레이스 고정도 안정적입니다." }
    ]
  },
  {
    id: "sn-004",
    name: "Velocity Edge",
    price: 195,
    originalPrice: null,
    rating: 4.2,
    reviews: 73,
    img: "/templates/OHMT005-sneaker/product-4.jpg",
    badge: null,
    longDesc: "실내 코트 운동과 웨이트 트레이닝을 함께 고려한 로우 프로필 트레이닝화입니다. 4mm 드롭과 넓은 밑창이 바닥에 가까운 안정감을 제공하며, 앞발의 유연한 홈은 방향을 빠르게 바꿀 때 자연스럽게 구부러집니다.\n\n니트 갑피는 발등을 감싸고, 측면 아웃트리거가 좌우 움직임에서 발이 밑창 밖으로 밀리는 것을 줄여줍니다. 다방향 헤링본 고무 밑창은 실내 바닥에서 접지력을 높여줍니다.\n\n쿠션이 단단한 편이므로 장거리 러닝보다는 배드민턴, 실내 서킷 운동, 스쿼트와 데드리프트 같은 훈련에 적합합니다.",
    specs: [
      { label: "갑피", value: "신축성 있는 지지형 니트" },
      { label: "드롭", value: "4mm 로우 드롭" },
      { label: "밑창 패턴", value: "다방향 헤링본 고무 밑창" },
      { label: "측면 지지", value: "좌우 흔들림을 줄이는 아웃트리거 구조" },
      { label: "무게", value: "약 260g · 270mm 한 짝 기준" },
      { label: "인솔", value: "미끄럼을 줄이는 미세 요철 인솔" },
      { label: "제조국", value: "인도네시아 스포츠화 전문 공장" },
      { label: "품질 보증", value: "접착과 부품 결함 6개월 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "임지우", rating: 4, date: "2026년 5월", text: "배드민턴을 할 때 신는데 방향 전환 시 발이 신발 안에서 밀리지 않습니다. 밑창 접지력도 안정적인 편입니다." },
      { id: "r2", reviewer: "김건우", rating: 4, date: "2026년 4월", text: "스쿼트와 데드리프트를 할 때 뒤꿈치가 안정적으로 놓입니다. 쿠션이 단단해 장거리 러닝용으로는 맞지 않았습니다." },
      { id: "r3", reviewer: "배정민", rating: 5, date: "2026년 5월", text: "니트 갑피가 발등을 단단히 감싸줘 실내 운동 중 발이 흔들리지 않습니다. 양말처럼 지나치게 조이지는 않았습니다." }
    ]
  },
  {
    id: "sn-005",
    name: "Pearl Low",
    price: 160,
    originalPrice: 190,
    rating: 4.4,
    reviews: 182,
    img: "/templates/OHMT005-sneaker/product-5.jpg",
    badge: "15% 할인",
    longDesc: "은은한 펄 마감의 나파 가죽으로 만든 데일리 로우탑 스니커즈입니다. 앞코는 여유 있게 설계해 발가락이 눌리는 느낌을 줄였고, 3.2cm 높이의 컵솔과 쿠셔닝 인솔을 적용했습니다.\n\n가죽 가장자리는 자연스러운 단면이 보이도록 마감하고, 건메탈 색상의 금속 아일렛을 더했습니다. 펄 코팅은 빛의 각도에 따라 밝기가 조금씩 달라지며, 착용하면서 생기는 잔주름도 자연스럽게 드러납니다.\n\n물에 젖었을 때는 문지르지 말고 마른 천으로 눌러 물기를 제거해 주세요. 일반 가죽용 무색 크림을 소량 테스트한 뒤 사용하는 것을 권장합니다.",
    specs: [
      { label: "갑피", value: "펄 코팅 나파 송아지 가죽" },
      { label: "인솔", value: "항균·방취 쿠셔닝 폼 인솔" },
      { label: "아일렛", value: "산화 방지 처리한 건메탈 알루미늄" },
      { label: "핏", value: "앞코가 여유로운 와이드 토 핏" },
      { label: "굽 높이", value: "3.2cm" },
      { label: "봉제", value: "가죽 단면을 살린 이중 스티치" },
      { label: "제조국", value: "포르투갈 가죽 신발 전문 공방" },
      { label: "관리", value: "물기를 피해 보관 · 오염 시 부드러운 천과 무색 가죽 크림 사용" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "김서아", rating: 5, date: "2026년 4월", text: "출퇴근할 때 자주 신습니다. 펄 광택이 과하지 않고 앞코가 여유 있어 오래 걸어도 발가락이 편했습니다." },
      { id: "r2", reviewer: "이정은", rating: 4, date: "2026년 3월", text: "전체적으로 둥근 형태라 캐주얼한 옷에 잘 어울립니다. 처음에는 뒤꿈치가 조금 단단해 긴 양말과 함께 신었습니다." },
      { id: "r3", reviewer: "최하은", rating: 5, date: "2026년 4월", text: "흔하지 않은 펄 화이트 색상이라 포인트가 됩니다. 인솔 쿠션이 도톰해 일상에서 편하게 신기 좋습니다." }
    ]
  },
  {
    id: "sn-006",
    name: "Terra Boot",
    price: 290,
    originalPrice: null,
    rating: 4.6,
    reviews: 104,
    img: "/templates/OHMT005-sneaker/product-6.jpg",
    badge: "신상품",
    longDesc: "비와 눈, 거친 길을 함께 고려한 하이탑 아웃도어 슈즈입니다. 방수 멤브레인과 고무 머드가드가 발 주변을 보호하며, 5.5mm 깊이의 러그가 있는 고무 밑창이 흙길과 젖은 노면에서 접지력을 높여줍니다.\n\n발목은 패딩을 넣은 네오프렌 칼라로 감싸고, 퀵 레이스 훅을 적용해 끈을 빠르게 조절할 수 있습니다. 270mm 기준 약 420g으로 일반 로우탑보다 무게감이 있지만, 등산화와 비교하면 비교적 가벼운 편입니다.\n\n방수 기능을 오래 유지하려면 사용 후 흙과 이물질을 제거하고 통풍이 잘되는 그늘에서 충분히 말려주세요.",
    specs: [
      { label: "방수", value: "방수·방풍 멤브레인" },
      { label: "테두리 보강", value: "마모를 줄이는 고무 머드가드" },
      { label: "밑창", value: "5.5mm 러그가 있는 고접지 고무 밑창" },
      { label: "발목", value: "패딩을 넣은 이중 네오프렌 칼라" },
      { label: "끈 조절", value: "알루미늄 퀵 레이스 훅" },
      { label: "무게", value: "약 420g · 270mm 한 짝 기준" },
      { label: "제조국", value: "스페인 등산화 전문 공방" },
      { label: "품질 보증", value: "밑창 접착과 구조적 결함 2년 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "정우진", rating: 5, date: "2026년 6월", text: "등산화보다 가볍고 일반 스니커즈보다 발목을 안정적으로 잡아줍니다. 비나 눈이 오는 날에도 자주 신습니다." },
      { id: "r2", reviewer: "임정호", rating: 5, date: "2026년 5월", text: "젖은 바위와 흙길에서 접지력이 좋은 편이었습니다. 다만 어떤 노면에서도 미끄러질 수 있어 주의는 필요합니다." },
      { id: "r3", reviewer: "성주한", rating: 4, date: "2026년 5월", text: "등산화 기준으로는 가벼운 편이지만 로우탑보다는 확실히 묵직합니다. 정사이즈보다 약간 여유롭게 느껴졌습니다." }
    ]
  },
  {
    id: "sn-007",
    name: "High Volt",
    price: 215,
    originalPrice: 250,
    rating: 4.1,
    reviews: 58,
    img: "/templates/OHMT005-sneaker/product-7.jpg",
    badge: null,
    longDesc: "트랙 훈련과 짧은 거리 러닝을 위한 초경량 러닝화입니다. 얇은 모노필라멘트 메시 갑피와 열압착 보강 패널을 사용해 무게를 줄이고, 뒤꿈치의 TPU 지지대가 착지 때 발을 안정적으로 잡아줍니다.\n\n4mm 드롭과 얇은 밑창은 지면 감각을 빠르게 전달하며, 마모가 잦은 부분에만 고무를 배치했습니다. 형광 색상은 낮과 어두운 환경에서 눈에 잘 띕니다.\n\n갑피가 얇고 핏이 타이트한 제품입니다. 양말 없이 착용하는 것은 권장하지 않으며, 발볼이 넓다면 사이즈표를 확인해 주세요.",
    specs: [
      { label: "지지 패널", value: "TPU 아치·뒤꿈치 지지대" },
      { label: "갑피", value: "싱글 레이어 모노필라멘트 메시" },
      { label: "접합 방식", value: "무봉제 열압착 공법" },
      { label: "신발끈", value: "풀림을 줄이는 요철형 나일론 끈" },
      { label: "무게", value: "약 195g · 270mm 한 짝 기준" },
      { label: "드롭", value: "4mm" },
      { label: "제조국", value: "중국 스포츠화 전문 공장" },
      { label: "품질 보증", value: "갑피 접합부 6개월 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "강동우", rating: 4, date: "2026년 5월", text: "형광 색상이 화면보다 선명합니다. 갑피가 얇아 통풍이 잘되고 트랙 훈련에서 가볍게 느껴졌습니다." },
      { id: "r2", reviewer: "윤재용", rating: 4, date: "2026년 4월", text: "신발이 얇고 가벼운 대신 핏이 타이트합니다. 발볼이 넓다면 반 사이즈 크게 신어보는 편이 좋겠습니다." }
    ]
  },
  {
    id: "sn-008",
    name: "Neon Sprint",
    price: 175,
    originalPrice: null,
    rating: 4.5,
    reviews: 239,
    img: "/templates/OHMT005-sneaker/product-8.jpg",
    badge: null,
    longDesc: "스쿼트와 리프팅, 버피처럼 다양한 동작을 반복하는 피트니스 훈련을 위한 신발입니다. 넓고 평평한 뒤꿈치 구조가 하중을 안정적으로 받치고, 앞발의 깊은 유연성 홈은 런지와 점프 동작에서 자연스럽게 구부러집니다.\n\n고탄성 EVA 중창은 착지 충격을 줄이면서도 지나치게 푹신하지 않도록 조정했습니다. 마모에 강한 니트 갑피와 넓은 밑창이 좌우 움직임을 안정적으로 지지합니다.\n\n웨이트와 고강도 인터벌 훈련에 적합하며, 쿠션이 단단하고 밑창이 평평해 장거리 러닝용으로는 권장하지 않습니다.",
    specs: [
      { label: "추천 용도", value: "크로스핏, HIIT, 실내 웨이트 트레이닝" },
      { label: "중창", value: "고탄성 EVA 폼" },
      { label: "뒤꿈치 지지", value: "넓고 평평한 안정형 힐 플레이트" },
      { label: "앞발 유연성", value: "다방향 움직임을 돕는 깊은 플렉스 홈" },
      { label: "갑피", value: "통기성과 내마모성을 갖춘 엔지니어드 니트" },
      { label: "무게", value: "약 280g · 270mm 한 짝 기준" },
      { label: "제조국", value: "베트남 피트니스화 전문 공장" },
      { label: "품질 보증", value: "제조상 결함 6개월 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "송지영", rating: 5, date: "2026년 5월", text: "스쿼트와 버피를 할 때 일반 러닝화보다 뒤꿈치가 안정적으로 느껴졌습니다. 좌우 움직임에서도 밑창이 잘 받쳐줍니다." },
      { id: "r2", reviewer: "박태형", rating: 4, date: "2026년 4월", text: "데드리프트할 때 평평한 밑창이 안정적입니다. 러닝용으로는 쿠션이 단단해 웨이트 훈련 때만 사용하고 있습니다." }
    ]
  },
  {
    id: "sn-009",
    name: "Obsidian Hike",
    price: 340,
    originalPrice: 400,
    rating: 4.8,
    reviews: 311,
    img: "/templates/OHMT005-sneaker/product-9.jpg",
    badge: "15% 할인",
    longDesc: "산길과 자갈길을 달리는 트레일 러너를 위한 방수·투습 러닝화입니다. 갑피 안쪽의 멤브레인이 물의 유입을 줄이고, 앞발의 보호 플레이트가 날카로운 자갈과 돌의 압력을 분산합니다.\n\n5.5mm 러그가 있는 고무 밑창은 젖은 흙을 배출하면서 접지력을 높여줍니다. 앞코와 뒤꿈치에는 보강재를 덧대 돌이나 나뭇가지에 부딪힐 때 갑피가 쉽게 손상되지 않도록 했습니다.\n\n방수 제품도 발목 위로 물이 들어오면 젖을 수 있습니다. 사용 후에는 깔창을 분리하고 통풍이 잘되는 곳에서 충분히 말려주세요.",
    specs: [
      { label: "방수 안감", value: "방수·투습 멤브레인" },
      { label: "발바닥 보호", value: "앞발 보호 플레이트" },
      { label: "중창", value: "고밀도 반발 폼" },
      { label: "밑창 러그", value: "5.5mm 흙 배출형 고무 러그" },
      { label: "갑피", value: "립스탑 나일론과 합성 보강재" },
      { label: "무게", value: "약 310g · 270mm 한 짝 기준" },
      { label: "제조국", value: "스페인 아웃도어화 전문 공방" },
      { label: "품질 보증", value: "방수 멤브레인 1년 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "한정원", rating: 5, date: "2026년 6월", text: "얕은 물웅덩이를 지나도 안쪽이 쉽게 젖지 않았습니다. 젖은 산길에서는 보폭을 줄여 걸었고 접지력은 안정적인 편이었습니다." },
      { id: "r2", reviewer: "이강민", rating: 5, date: "2026년 5월", text: "오래 신어도 내부가 지나치게 답답하지 않았습니다. 앞발 보호판 덕분에 자갈을 밟을 때 충격도 덜하게 느껴졌습니다." }
    ]
  },
  {
    id: "sn-010",
    name: "Oxford Slim",
    price: 260,
    originalPrice: null,
    rating: 4.3,
    reviews: 87,
    img: "/templates/OHMT005-sneaker/product-10.jpg",
    badge: null,
    longDesc: "비즈니스 캐주얼에 맞춰 신기 좋은 스웨이드 하이브리드 슈즈입니다. 옥스퍼드화의 단정한 형태에 가벼운 고무 밑창과 쿠셔닝 인솔을 조합해, 구두보다 편안하고 일반 스니커즈보다 차분한 인상을 줍니다.\n\n이탈리아산 카프 스웨이드와 부드러운 가죽 안감을 사용했으며, 발등의 새들 밴드는 손바느질로 마감했습니다. 슬랙스와 셋업 수트, 치노 팬츠에 자연스럽게 어울립니다.\n\n스웨이드는 물과 오염에 민감합니다. 착용 전 보호 스프레이를 사용하고, 먼지는 전용 브러시로 결을 따라 가볍게 털어주세요.",
    specs: [
      { label: "갑피", value: "이탈리아산 카프 스웨이드" },
      { label: "안감", value: "부드러운 송아지 가죽" },
      { label: "밑창", value: "유연한 로우 프로필 고무 밑창" },
      { label: "발등", value: "손바느질 새들 밴드" },
      { label: "무게", value: "약 295g · 270mm 한 짝 기준" },
      { label: "인솔", value: "라텍스 메모리폼 가죽 인솔" },
      { label: "제조국", value: "포르투갈 가죽 신발 전문 공방" },
      { label: "핏", value: "날렵한 슬림 핏" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "서태수", rating: 4, date: "2026년 5월", text: "출근할 때 구두 대신 자주 신습니다. 형태는 단정하지만 밑창과 인솔이 부드러워 오래 걸어도 비교적 편합니다." },
      { id: "r2", reviewer: "황지훈", rating: 5, date: "2026년 4월", text: "스웨이드가 부드럽고 뒤꿈치 쓸림도 거의 없었습니다. 비 오는 날에는 피하고 있지만 셋업 수트와 잘 어울립니다." }
    ]
  },
  {
    id: "sn-011",
    name: "Trail Burst",
    price: 185,
    originalPrice: 220,
    rating: 4.4,
    reviews: 142,
    img: "/templates/OHMT005-sneaker/product-11.jpg",
    badge: "15% 할인",
    longDesc: "립스탑 나일론 갑피와 이중 스트랩을 적용한 아웃도어 슈즈입니다. 신발끈 대신 두 개의 벨크로 스트랩으로 발등과 발목을 각각 조절할 수 있어 신고 벗기 쉽고, 이동 중 끈이 풀릴 걱정이 적습니다.\n\n앞코에는 고무 보강재를 덧대 돌이나 나뭇가지와의 마찰을 줄였으며, 깊은 러그가 있는 고무 밑창이 자갈길과 흙길에서 접지력을 높여줍니다. EVA 중창은 보행 시 충격을 흡수합니다.\n\n발등이 높은 경우 스트랩 길이가 짧게 느껴질 수 있으므로 상세 치수를 확인해 주세요.",
    specs: [
      { label: "갑피", value: "립스탑 나일론과 합성 가죽 보강재" },
      { label: "고정 방식", value: "이중 벨크로 스트랩" },
      { label: "중창", value: "충격 흡수 EVA 폼" },
      { label: "밑창", value: "자갈·흙길용 러그 고무 밑창" },
      { label: "앞코 보강", value: "고경도 고무 토캡" },
      { label: "무게", value: "약 320g · 270mm 한 짝 기준" },
      { label: "제조국", value: "중국 아웃도어화 전문 공장" },
      { label: "품질 보증", value: "스트랩과 고정부 1년 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "임채규", rating: 5, date: "2026년 4월", text: "이중 스트랩이 발을 안정적으로 잡아줘 내리막길에서도 발가락이 앞으로 덜 밀렸습니다. 끈을 묶지 않아도 되는 점도 편합니다." },
      { id: "r2", reviewer: "오세정", rating: 4, date: "2026년 3월", text: "카고 팬츠나 아웃도어 옷에 잘 어울립니다. 발등이 높은 편이라 위쪽 스트랩이 조금 짧게 느껴졌습니다." }
    ]
  },
  {
    id: "sn-012",
    name: "Apex Lite",
    price: 210,
    originalPrice: null,
    rating: 4.6,
    reviews: 196,
    img: "/templates/OHMT005-sneaker/product-12.jpg",
    badge: "신상품",
    longDesc: "가벼운 걷기와 일상 러닝을 위한 니트 스포츠화입니다. 270mm 한 짝 기준 약 190g이며, 한 장으로 짠 메시 니트 갑피가 발등을 부드럽게 감쌉니다.\n\n가벼운 고반발 중창과 통기성 인솔을 적용해 장시간 보행에서 부담을 줄였고, 밑창은 마찰이 잦은 앞꿈치와 뒤꿈치에만 고무를 덧대 무게를 줄였습니다.\n\n니트 갑피는 통풍이 잘되는 대신 방수 기능이 없습니다. 비 오는 날이나 거친 산길보다는 마른 노면의 걷기와 가벼운 러닝에 적합합니다.",
    specs: [
      { label: "무게", value: "약 190g · 270mm 한 짝 기준" },
      { label: "갑피", value: "싱글 원사 메시 니트" },
      { label: "중창", value: "질소 주입 고반발 경량 중창" },
      { label: "발목", value: "신축성 있는 양말형 칼라" },
      { label: "인솔", value: "통기성 쿠셔닝 인솔" },
      { label: "밑창", value: "마모가 잦은 부분에만 고무 보강" },
      { label: "제조국", value: "인도네시아 니트 스포츠화 전문 공장" },
      { label: "품질 보증", value: "니트 원사 풀림 6개월 무상 수선" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "김현진", rating: 5, date: "2026년 6월", text: "무게가 가벼워 하루 종일 걷는 날 자주 신습니다. 쿠션은 지나치게 물렁하지 않고 발바닥을 안정적으로 받쳐줍니다." },
      { id: "r2", reviewer: "신혜지", rating: 4, date: "2026년 5월", text: "니트가 부드럽고 발가락 움직임이 편합니다. 통풍이 잘되는 대신 비가 오면 쉽게 젖으므로 날씨를 확인하고 신습니다." }
    ]
  },
  {
    id: "sn-013",
    name: "Sport Flex",
    price: 155,
    originalPrice: 185,
    rating: 4.2,
    reviews: 63,
    img: "/templates/OHMT005-sneaker/product-13.jpg",
    badge: null,
    longDesc: "신발끈 없이 빠르게 신고 벗을 수 있는 니트 슬립온입니다. 신축성 있는 메시 니트가 발의 움직임에 맞춰 늘어나며, 뒤꿈치의 풀탭을 잡아당기면 쉽게 착용할 수 있습니다.\n\n밑창에는 여러 방향으로 홈을 넣어 걸을 때 자연스럽게 구부러지도록 했고, 분리 가능한 쿠셔닝 인솔이 발바닥을 받쳐줍니다. 동네 산책이나 장보기, 여행 중 가벼운 이동에 적합합니다.\n\n갑피가 얇고 유연한 제품으로 추운 겨울이나 비 오는 날보다는 봄부터 가을까지 마른 날씨에 신기 좋습니다.",
    specs: [
      { label: "갑피", value: "신축성 있는 오가닉 메시 니트" },
      { label: "착화 방식", value: "끈 없는 양말형 슬립온" },
      { label: "밑창", value: "발의 굴곡을 따라 구부러지는 다축 홈 구조" },
      { label: "인솔", value: "분리형 쿠셔닝 아치 서포트 인솔" },
      { label: "무게", value: "약 240g · 한 짝 기준" },
      { label: "두께", value: "얇고 유연함 · 봄·여름·가을 권장" },
      { label: "제조국", value: "중국 협력 공장 OEM" },
      { label: "품질 보증", value: "밑창 접착부 6개월 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "오은하", rating: 4, date: "2026년 5월", text: "끈을 묶지 않아도 돼 동네 산책이나 잠깐 외출할 때 자주 신습니다. 뒤꿈치도 부드러워 쓸림이 적었습니다." },
      { id: "r2", reviewer: "박은경", rating: 5, date: "2026년 4월", text: "인솔이 발바닥을 편안하게 받쳐줍니다. 신고 벗기 쉬워 부모님께도 선물했는데 만족해하셨습니다." }
    ]
  },
  {
    id: "sn-014",
    name: "Loafer Classic",
    price: 230,
    originalPrice: null,
    rating: 4.5,
    reviews: 77,
    img: "/templates/OHMT005-sneaker/product-14.jpg",
    badge: null,
    longDesc: "페니 로퍼의 단정한 형태에 가벼운 쿠셔닝 컵솔을 결합한 하이브리드 로퍼입니다. 세미 글로스 송아지 가죽을 사용해 광택이 과하지 않으며, 안쪽 전체를 부드러운 가죽으로 마감했습니다.\n\n발등의 새들 밴드는 손바느질로 고정하고, 메모리폼 인솔과 유연한 밑창을 적용해 일반 구두보다 편안하게 걸을 수 있도록 구성했습니다. 수트와 비즈니스 캐주얼, 치노 팬츠에 잘 어울립니다.\n\n처음에는 가죽이 다소 단단하게 느껴질 수 있습니다. 착용 후에는 먼지를 닦고 무색 가죽 크림을 소량 사용해 관리해 주세요.",
    specs: [
      { label: "갑피", value: "이탈리아산 세미 글로스 송아지 가죽" },
      { label: "밑창", value: "메모리폼 쿠셔닝 컵솔" },
      { label: "발등", value: "손바느질 페니 로퍼 새들 밴드" },
      { label: "안감", value: "천연 가죽 전체 안감" },
      { label: "무게", value: "약 310g · 270mm 한 짝 기준" },
      { label: "제조국", value: "포르투갈 신발 전문 공방 제작" },
      { label: "품질 보증", value: "봉제와 밑창 접착부 1년 품질 보증" },
      { label: "관리", value: "마른 천으로 먼지 제거 · 무색 가죽 크림 사용 권장" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "정주호", rating: 5, date: "2026년 6월", text: "출장이나 미팅 때 자주 신습니다. 겉모습은 로퍼처럼 단정하고 밑창은 일반 구두보다 부드러워 이동이 많은 날에도 편했습니다." },
      { id: "r2", reviewer: "홍성진", rating: 4, date: "2026년 5월", text: "가죽 광택이 은은하고 수트와 잘 어울립니다. 처음 며칠은 가죽이 단단했지만 신으면서 조금씩 부드러워졌습니다." }
    ]
  },
  {
    id: "sn-015",
    name: "Carbon Run",
    price: 280,
    originalPrice: 320,
    rating: 4.7,
    reviews: 188,
    img: "/templates/OHMT005-sneaker/product-15.jpg",
    badge: "12% 할인",
    longDesc: "마라톤과 장거리 레이스를 위한 초경량 카본 러닝화입니다. 곡선형 카본 플레이트를 중창 전체 길이에 넣고, 질소 주입 고반발 폼을 위아래로 배치해 착지에서 이지오프까지 빠르게 이어지도록 설계했습니다.\n\n반투명 모노필라멘트 메시 갑피는 발을 가볍게 감싸며 통풍을 돕습니다. 밑창은 마모가 잦은 부분에만 경량 고무를 배치해 전체 무게를 약 205g으로 줄였습니다.\n\n8mm 드롭의 중립형 레이싱화로 빠른 페이스에 적합합니다. 일상 조깅보다 대회와 스피드 훈련을 중심으로 사용하는 것을 권장합니다.",
    specs: [
      { label: "카본 플레이트", value: "중창 전체 길이의 곡선형 카본 플레이트" },
      { label: "중창", value: "질소 주입 이중 고반발 폼" },
      { label: "갑피", value: "반투명 모노필라멘트 메시" },
      { label: "밑창", value: "마모 구간에 배치한 경량 고접지 고무" },
      { label: "무게", value: "약 205g · 270mm 한 짝 기준" },
      { label: "드롭", value: "8mm" },
      { label: "제조국", value: "중국 스포츠화 전문 생산 라인" },
      { label: "품질 보증", value: "카본 플레이트와 중창 박리 1년 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "임혁준", rating: 5, date: "2026년 5월", text: "탄탄한 반발력이 빠르게 느껴집니다. 5km 기록 훈련에서 페이스를 유지하기 편했지만 천천히 달릴 때는 다소 단단했습니다." },
      { id: "r2", reviewer: "강호성", rating: 5, date: "2026년 4월", text: "반투명 메시라 양말 색이 은은하게 비칩니다. 갑피가 얇고 통풍이 잘되며 무게도 매우 가볍습니다." }
    ]
  },
  {
    id: "sn-016",
    name: "Street Low",
    price: 145,
    originalPrice: null,
    rating: 4.0,
    reviews: 44,
    img: "/templates/OHMT005-sneaker/product-16.jpg",
    badge: null,
    longDesc: "헤비 코튼 캔버스와 천연 스웨이드 보강재를 조합한 스케이트 슈즈입니다. 보드와 자주 마찰하는 앞코와 옆면에는 이중 스티치와 스웨이드 패치를 적용해 내구성을 높였습니다.\n\n도톰한 설포가 발등을 보호하고, 벌커나이즈 고무 밑창이 보드 위에서 지면 감각과 접지력을 전달합니다. 착지 충격을 줄이는 쿠셔닝 인솔도 함께 구성했습니다.\n\n밑창이 평평하고 단단한 편이라 스케이트보드와 일상적인 짧은 보행에 잘 맞습니다. 장시간 걷기에는 발바닥이 피로할 수 있습니다.",
    specs: [
      { label: "갑피", value: "12oz 헤비 코튼 캔버스와 송아지 스웨이드" },
      { label: "설포", value: "도톰한 패딩 설포" },
      { label: "밑창", value: "벌커나이즈 고밀도 고무 밑창" },
      { label: "인솔", value: "착지 충격을 줄이는 쿠셔닝 인솔" },
      { label: "무게", value: "약 360g · 한 짝 기준" },
      { label: "신발끈", value: "폭이 넓은 면 끈" },
      { label: "제조국", value: "중국 협력 공장 OEM" },
      { label: "품질 보증", value: "고무 밑창 접착부 6개월 품질 보증" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "윤성오", rating: 4, date: "2026년 4월", text: "보드를 탈 때 밑창 접지력이 좋고 캔버스도 튼튼합니다. 투박한 형태가 와이드 데님과 잘 어울립니다." },
      { id: "r2", reviewer: "최준수", rating: 4, date: "2026년 3월", text: "캔버스와 스웨이드가 두꺼워 내구성은 좋습니다. 밑창이 평평한 스케이트화라 오래 걸으면 발바닥이 조금 피로했습니다." }
    ]
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={12}
          className={i <= Math.round(rating) ? "fill-black text-black" : "fill-black/20 text-black/20"}
        />
      ))}
      <span className="text-[0.7rem] text-black/50 ml-1">{rating}</span>
    </div>
  );
}

function getBadgeStyle(badge: string) {
  const normalized = badge.toLowerCase();
  if (normalized.includes("best") || normalized.includes("베스트")) {
    return "bg-orange-50 text-orange-600 border border-orange-200/40";
  }
  if (normalized.includes("new") || normalized.includes("신상")) {
    return "bg-emerald-50 text-emerald-600 border border-emerald-200/40";
  }
  if (normalized.includes("off") || normalized.includes("%") || normalized.includes("할인")) {
    return "bg-red-50 text-red-600 border border-red-200/40";
  }
  return "bg-zinc-50 text-zinc-600 border border-zinc-200/40";
}

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Link href={`/ko/templates/OHMT005-sneaker/product/${product.id}`} className="group block border border-black/10 hover:border-black transition-colors duration-200">
      <div className="relative overflow-hidden aspect-square bg-[var(--color-bg-secondary)]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[3px] backdrop-blur-sm ${getBadgeStyle(product.badge)}`}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-[0.88rem] font-bold text-black mb-1.5 tracking-[-0.03em]">{product.name}</h3>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[0.95rem] font-black text-black">${product.price} USD</span>
          {product.originalPrice && (
            <span className="text-[0.8rem] text-black/30 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

interface Props {
  title: string;
  items?: typeof products;
  limit?: number;
}

export function ProductGrid({ title, items, limit = 8 }: Props) {
  const [page, setPage] = useState(0);
  const source = items ?? products;
  const pages = Math.ceil(source.length / limit);
  const visible = source.slice(page * limit, page * limit + limit);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-[1.6rem] font-black tracking-[-0.03em] uppercase">{title}</h2>
          <Link href="/ko/templates/OHMT005-sneaker/shop-all" className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/50 hover:text-black transition-colors border-b border-black/20 pb-0.5">
            전체 상품 보기
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visible.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {pages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-8 h-8 text-[0.78rem] font-bold border transition-colors ${page === i ? "bg-black text-white border-black" : "bg-white text-black border-black/20 hover:border-black"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
