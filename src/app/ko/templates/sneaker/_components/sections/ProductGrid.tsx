// src/app/ko/templates/sneaker/_components/sections/ProductGrid.tsx
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
    img: "/templates/sneaker/product-1.jpg",
    badge: "베스트셀러",
    longDesc: "신기록 갱신을 목표로 하는 질주와 고도의 안정을 위해 인체공학적으로 설계된 하이퍼포먼스 레이싱화입니다. 탄소 섬유 플레이트와 고반발 이중 밀도 폼 쿠셔닝을 결합하여 에너지 손실을 최소화하면서 폭발적인 추진력을 불어넣습니다. 통기성을 극대화한 워프 니트 메쉬 갑피가 러닝 내내 쾌적한 피팅감을 선사합니다.\n\n이 신발의 핵심은 중창 전체에 내장된 풀사이즈 3D 카본 플레이트로, 착지 시 가해지는 하중을 전방 추진력으로 신속하게 변환해 줍니다. 또한 뒤꿈치 부분의 고밀도 TPU 힐 카운터가 흔들림 없는 안정을 약속합니다.\n\n마라톤 풀코스 주자뿐만 아니라 스피드 훈련을 즐기는 크루 러너들에게 완벽한 주행 메커니즘을 제공하는 최상급 레이싱 플랫폼입니다.",
    specs: [
      { label: "쿠셔닝 미드솔", value: "고반발 이중 밀도 줌에어 테크 폼" },
      { label: "내장 플레이트", value: "100% 탄소 섬유 추진형 3D 카본 플레이트" },
      { label: "갑피 (Upper)", value: "초경량 워프니트 엔지니어드 브리더블 메쉬" },
      { label: "아웃솔 (Outsole)", value: "고마모 그립 강화 젖은 노면용 러버 트레드" },
      { label: "오프셋 (Drop)", value: "8mm 힐-투-토 드롭 (Heel-to-Toe Drop)" },
      { label: "중량 정보", value: "약 215g (270mm 한 짝 기준)" },
      { label: "아치 타입", value: "중립형 아치 서포트 설계" },
      { label: "추천 용도", value: "로드 마라톤 레이싱, 인터벌 스피드 트레이닝" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "김지민", rating: 5, date: "2026년 5월", text: "신어본 러닝화 중 최고입니다. 카본 플레이트의 탄성이 발을 앞으로 강하게 밀어줍니다. 기록 단축에 엄청나게 도움이 됐어요." },
      { id: "r2", reviewer: "박은우", rating: 4, date: "2026년 4월", text: "속도 내기에 최적화된 러닝화인데, 발볼이 살짝 좁은 느낌은 있네요. 발볼 넓으신 분들은 반업 필수입니다." },
      { id: "r3", reviewer: "이민우", rating: 5, date: "2026년 5월", text: "반발력이 차원이 다릅니다. 통풍도 잘 돼서 한여름 러닝에도 땀이 차지 않고 쾌적하게 뛸 수 있습니다." },
      { id: "r4", reviewer: "최서진", rating: 5, date: "2026년 6월", text: "쿠션이 단단하면서도 쫀득해서 무릎 충격이 훨씬 덜합니다. 가벼운 무게도 아주 마음에 듭니다." }
    ]
  },
  {
    id: "sn-002",
    name: "Urban Classic",
    price: 180,
    originalPrice: null,
    rating: 4.3,
    reviews: 96,
    img: "/templates/sneaker/product-2.jpg",
    badge: null,
    longDesc: "매일의 일상에 깊이를 더하는 미니멀리즘 데일리 클래식 스니커즈입니다. 최고급 천연 풀그레인 가죽을 수작업으로 제봉하여 착용할수록 발 모양에 편안하게 길들여집니다. 정교하게 스티칭된 천연 고무 아웃솔과 레트로한 실루엣이 결합되어 어떤 룩에도 자연스럽게 매치됩니다.\n\n외관의 로고 노출을 최소화하여 미니멀한 슬랙스 코디나 캐주얼 데님 팬츠 코디에 아주 우아하게 융합됩니다. 내부는 부드러운 천연 돈피 가죽 안감을 덧대어 쓸림을 방지했습니다.\n\n세대를 아우르는 단정한 디테일과 튼튼한 컵솔 마감으로 평생 소장하며 신을 수 있는 클래식 에센셜 슈즈입니다.",
    specs: [
      { label: "소재 (Upper)", value: "최고급 천연 풀그레인 나파 가죽 (송아지 가죽)" },
      { label: "안감 소재", value: "통기성이 뛰어나 땀 흡수가 빠른 천연 돈피 가죽" },
      { label: "창 (Outsole)", value: "마곰(Margom) 천연 러버 스티치드 컵솔 적용" },
      { label: "인솔 사양", value: "라텍스 충격 흡수 오소라이트 폼 가죽 인솔" },
      { label: "제법 기법", value: "사이드 월 스티치다운 컵솔 고정 공법" },
      { label: "무게", value: "약 340g (270mm 한 짝 기준)" },
      { label: "끈 (Lace)", value: "100% 왁스 코팅 플랫 코튼 슈레이스" },
      { label: "제조국", value: "포르투갈 전통 제화 아틀리에 수작업 마감" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "이유진", rating: 5, date: "2026년 3월", text: "색깔별로 두 켤레째 구매 중입니다. 가죽 질감이 훌륭하고 진짜 돈값을 하네요. 코디가 정말 편합니다." },
      { id: "r2", reviewer: "윤성하", rating: 4, date: "2026년 2월", text: "진짜 깔끔해요. 슬랙스나 청바지, 심지어 정장에도 무리 없이 다 잘 매치됩니다. 단점은 초기에 가죽이 좀 빳빳하다는 거네요." },
      { id: "r3", reviewer: "정재원", rating: 5, date: "2026년 4월", text: "스티치 라인이 명품 운동화 수준으로 고르고 깔끔합니다. 밑창 고무도 튼튼해서 마모가 덜 될 것 같습니다." },
      { id: "r4", reviewer: "송민우", rating: 4, date: "2026년 5월", text: "정사이즈 가니까 딱 맞고 슬림해 보여서 다리가 길어 보입니다. 가죽 냄새가 나지만 퀄리티는 백점입니다." }
    ]
  },
  {
    id: "sn-003",
    name: "Shadow Runner",
    price: 320,
    originalPrice: 380,
    rating: 4.7,
    reviews: 214,
    img: "/templates/sneaker/product-3.jpg",
    badge: "20% 할인",
    longDesc: "고기능성 아웃도어 소재와 다크한 사이버펑크 미학이 결합된 하이엔드 테크 스니커즈입니다. 고강도 방수 립스탑 패널, 쿠셔닝 리스폰스 미드솔, 편리한 신속 끈 조절형 퀵 레이스 토글 장치를 탑재했습니다.\n\n갑피는 마모와 찢어짐에 강한 발리스틱 나일론 스킨을 채택하여 거친 암석 지대나 진흙탕 속에서도 원단 손상이 없습니다. 또한 야간 활동 시 시인성을 극대화해 줄 3M 스카치 리플렉티브 패널이 탑재되었습니다.\n\n도시의 장마철이나 궂은 날씨 속에서도 패션과 기능을 동시에 충족시켜 줄 궁극의 전천후 테크웨어 슈즈입니다.",
    specs: [
      { label: "방수 기능", value: "OutDry 윈드프루프 & 워터프루프 방수 스킨 탑재" },
      { label: "갑피 (Upper)", value: "고강도 발리스틱 립스탑 나일론 & 신세틱 테크 레더" },
      { label: "레이싱 구조", value: "원터치 퀵 레이스 스피드 토글 락 장치" },
      { label: "야간 반사", value: "3M 스카치 브라이트 초고휘도 리플렉티브 패널" },
      { label: "미드솔", value: "에너지 리턴 고탄성 리스폰스 파일론 폼" },
      { label: "아웃솔 사양", value: "사계절 전천후 고접지 돌기형 하이퍼 그립 고무창" },
      { label: "보증 기간", value: "방수 멤브레인에 대해 1년 무상 품질 워런티" },
      { label: "원산지", value: "베트남 정밀 아웃도어 슈팩토리 생산" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "최민혁", rating: 5, date: "2026년 4월", text: "디자인이 너무 멋지고 엄청 가벼워요. 퀵 레이스 덕분에 끈 안 묶고 신고 벗기 무지하게 편합니다." },
      { id: "r2", reviewer: "장태우", rating: 4, date: "2026년 3월", text: "테크웨어 코디하기 최고예요. 방수가 진짜 잘 돼서 비 오는 날 무적입니다. 쿠션감은 살짝 단단한 편입니다." },
      { id: "r3", reviewer: "윤성현", rating: 5, date: "2026년 5월", text: "야간에 빛 받으면 은은하게 반짝거리는 실버 반사 패널이 대단히 미래지향적이고 예쁩니다." },
      { id: "r4", reviewer: "황보림", rating: 5, date: "2026년 6월", text: "테크웨어의 정석이네요. 진흙 묻어도 물티슈로 슥 닦으면 흔적도 없이 닦여서 관리도 최고입니다." }
    ]
  },
  {
    id: "sn-004",
    name: "Velocity Edge",
    price: 195,
    originalPrice: null,
    rating: 4.2,
    reviews: 73,
    img: "/templates/sneaker/product-4.jpg",
    badge: null,
    longDesc: "역동적인 방향 전환과 트레이닝에 최적화된 로우 프로필 민첩성 트레이너입니다. 반응성이 우수한 중창과 타이트한 니트 지지 그리드를 조합하여 폭발적인 스크린과 사이드 컷을 안정적으로 제어합니다.\n\n지면과 발바닥의 밀착도를 높이기 위해 설계된 로우 드롭 아웃솔은 스쿼트나 데드리프트 등 헬스장 웨이트 트레이닝 시 강력한 지지면을 확보해 줍니다. 좌우 횡방향 쏠림을 방지하기 위한 측면 사이드 범퍼도 장착되었습니다.\n\n체육관 스포츠, 크로스핏 및 고강도 기능성 트레이닝에 최적화된 스페셜 플레이어 슈즈입니다.",
    specs: [
      { label: "니트 소재", value: "하이-어질리티 신축 압박 조널 니트 (3D 삭스 레이아웃)" },
      { label: "프로필 사양", value: "낮고 안정적인 로우 드롭 코트 스탠스 (4mm 오프셋)" },
      { label: "아웃솔 패턴", value: "미끄럼 방지 다방향 딥 헤링본 러버솔 패턴" },
      { label: "사이드 가드", value: "횡방향 밀림 방지 강화 아웃트리거(Outrigger) 탑재" },
      { label: "중량", value: "약 260g (270mm 기준)" },
      { label: "인솔", value: "미끄럼 방지 논슬립 마이크로 텍스처 인솔" },
      { label: "제조국", value: "인도네시아 아디다스 라인 전문 공장 생산" },
      { label: "보증 기간", value: "접착 불량 및 부품 탈락 시 6개월 무상 교환" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "임지우", rating: 4, date: "2026년 5월", text: "실내 체육관에서 배드민턴 칠 때 신는데 접지가 쫀득쫀득하고 반응성이 좋습니다. 발을 꽉 잡아주는 느낌이에요." },
      { id: "r2", reviewer: "김건우", rating: 4, date: "2026년 4월", text: "스쿼트 할 때 뒤꿈치가 안 밀려요. 접지력은 우수하지만 쿠션이 단단해서 장거리 로드 런닝용으로는 추천하지 않습니다." },
      { id: "r3", reviewer: "배정민", rating: 5, date: "2026년 5월", text: "니트가 발을 양말처럼 싹 감싸줘서 신발 안에서 발이 헛돌지 않네요. 실내 트레이닝용으로 제격입니다." }
    ]
  },
  {
    id: "sn-005",
    name: "Pearl Low",
    price: 160,
    originalPrice: 190,
    rating: 4.4,
    reviews: 182,
    img: "/templates/sneaker/product-5.jpg",
    badge: "15% 할인",
    longDesc: "부드러운 진주빛 펄 가죽 광택과 내추럴한 편안함이 어우러진 데일리 로우탑 슈즈입니다. 컷오프 러프 에지와 커스텀 금속 아일렛 디테일을 지녔으며, 오소라이트 풋베드로 쿠셔닝을 강화했습니다.\n\n시간이 지날수록 가죽 표면에 자연스러운 주름이 가며 진주 가루를 흩뿌린 듯 은은한 오팔 광채가 감돌아 독특한 깊이감을 선사합니다. 발볼 부분이 여유롭게 제작되어 발등이 높으신 분들도 쾌적하게 착용할 수 있습니다.\n\n단정한 크롭 슬랙스나 미디 스커트에 매치하면 세련된 도회적 미학을 가미해 주는 클래식 스니커즈입니다.",
    specs: [
      { label: "갑피 레더", value: "은은한 진주 펄 코팅 천연 나파 가죽 (Calfskin)" },
      { label: "풋베드 인솔", value: "오소라이트(Ortholite) 항균 방취 쿠셔닝 폼 내장" },
      { label: "금속 아일렛", value: "산화 방지 처리 건메탈 아날로그 알루미늄 아일렛" },
      { label: "핏 형태", value: "발가락이 편안한 아시아 맞춤형 와이드-토 핏" },
      { label: "굽 높이", value: "3.2cm (자연스러운 카운터 굽 높이)" },
      { label: "봉제 기법", value: "더블 페이싱 로우 에지 컷오프 스티칭" },
      { label: "제조 공정", value: "포르투갈 가죽 전문 수제화 공방 생산" },
      { label: "가죽 케어", value: "물기가 닿지 않게 보관, 오염 시 스웨이드 지우개나 전용 크림 소량 케어" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "김서아", rating: 5, date: "2026년 4월", text: "출퇴근할 때 매일 신는데 발 아픈 걸 전혀 모르겠어요. 은은한 펄 광이 진짜 세련되었고 굽도 은근히 높아서 좋아요." },
      { id: "r2", reviewer: "이정은", rating: 4, date: "2026년 3월", text: "스니커즈가 둥글둥글 귀여워요. 다만 뒷꿈치 가죽이 초기에는 약간 부드럽지 않아 길들일 동안은 덧신 양말보다 긴 양말을 신는 게 편합니다." },
      { id: "r3", reviewer: "최하은", rating: 5, date: "2026년 4월", text: "흔하지 않은 은은한 펄 화이트라 친구들이 어디서 샀냐고 계속 물어봅니다. 오소라이트 깔창이라 진짜 푹신합니다." }
    ]
  },
  {
    id: "sn-006",
    name: "Terra Boot",
    price: 290,
    originalPrice: null,
    rating: 4.6,
    reviews: 104,
    img: "/templates/sneaker/product-6.jpg",
    badge: "신상품",
    longDesc: "높은 산행과 거친 지형, 도심의 악천후를 극복하기 위해 설계된 전천후 하이브리드 하이탑 부츠 스니커즈입니다. 완전한 방수 기능성 멤브레인 내장막, 견고한 고무 보강 테두리, 그리고 세계적인 접지력의 비브람창으로 무장했습니다.\n\n발목 부분을 단단하면서도 부드럽게 감싸주는 패딩 네오프렌 칼라를 삽입하여, 흙이나 자갈이 신발 내부로 유입되는 것을 원천 차단해 줍니다. 하이탑이지만 엘라스틱 퀵 끈 레이싱 덕분에 피팅 조절이 매우 빠릅니다.\n\n산악 하이킹 트래킹은 물론 도심 속 눈비 내리는 고르지 못한 지면에서도 뛰어난 안정성을 보장하는 올테레인 마스터피스입니다.",
    specs: [
      { label: "방수 기능", value: "OutDry 고성능 윈드프루프 & 워터프루프 방수막" },
      { label: "테두리 보강", value: "마모 방지용 아브라시온 루버 랜딩 머드가드 보강" },
      { label: "아웃솔 사양", value: "비브람 메가그립 (Vibram Megagrip) 5.5mm 깊은 러그 돌기창" },
      { label: "발목 설계", value: "고탄성 방수 네오프렌 이중 레이어 패디드 칼라" },
      { label: "끈 조절", value: "알루미늄 퀵-레이스 락 훅 스피드 레이싱 장치" },
      { label: "중량", value: "약 420g (270mm 기준 - 경량 부츠 범주)" },
      { label: "제조국", value: "스페인 등산화 아틀리에 전통 생산" },
      { label: "보증 사항", value: "비브람 창 벌어짐 현상 발생 시 2년간 무상 접착 및 창교환 지원" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "정우진", rating: 5, date: "2026년 6월", text: "등산화와 패션 스니커즈의 좋은 점만 기가 막히게 섞어놨습니다. 디자인도 엄청 튼튼하고 비 오거나 눈 오는 날 신기 최고입니다." },
      { id: "r2", reviewer: "임정호", rating: 5, date: "2026년 5월", text: "비브람 메가그립 아웃솔이라 젖은 바위나 미끄러운 흙길에서도 절대 안 미끄러집니다. 발목 지지력이 최고입니다." },
      { id: "r3", reviewer: "성주한", rating: 4, date: "2026년 5월", text: "신발 무게가 등산화 치고는 꽤 가볍지만 로우탑 스니커즈보다는 당연히 묵직합니다. 정사이즈보다 살짝 여유로운 핏입니다." }
    ]
  },
  {
    id: "sn-007",
    name: "High Volt",
    price: 215,
    originalPrice: 250,
    rating: 4.1,
    reviews: 58,
    img: "/templates/sneaker/product-7.jpg",
    badge: null,
    longDesc: "러너의 질주에 폭발적인 에너지를 불어넣는 트랙 전문 훈련화입니다. 시선을 사로잡는 형광 TPU 힐 카운터, 통기성이 우수한 모노필라멘트 메쉬, 트랙 접지력이 강력한 경량 러버 솔을 적용했습니다.\n\n갑피는 무봉제 열압착 공법(Seamless Heat-Bonding)으로 조립되어 실밥으로 인한 발등 쓸림이나 압박감이 전혀 없고, 양말을 신지 않고 러닝을 뛰어도 피부 마찰이 없습니다.\n\n눈에 띄는 고휘도 네온 컬러웨이는 야간 야외 러닝 시 멀리서도 러너의 위치를 명확히 인지시켜 주어 안전한 런닝 환경을 제공합니다.",
    specs: [
      { label: "지지대 패널", value: "네온 형광 고인장 TPU 아치 & 힐 서포트 플레이트" },
      { label: "갑피 원단", value: "초경량 싱글 레이어 모노필라멘트 직조 메쉬" },
      { label: "접합 마감", value: "무봉제 무박음질 열압착 노소(No-Sew) 공법" },
      { label: "레이스 사양", value: "질주 시 풀림을 원천 방지하는 톱니형 나일론 슈레이스" },
      { label: "중량", value: "약 195g (270mm 초경량 실측 기준)" },
      { label: "오프셋", value: "4mm 힐드롭 (트랙 지면에 밀착되는 지면 감각)" },
      { label: "제조국", value: "중국 스포츠 정밀 기계 공정 생산" },
      { label: "보증 보장", value: "갑피 접합부 6개월 무상 A/S 제공" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "강동우", rating: 4, date: "2026년 5월", text: "네온 컬러가 실물 깡패네요. 여름에 트랙 뛸 때 통풍이 미친 듯이 잘 돼서 발바닥이 정말 시원합니다. 무게도 깃털 수준." },
      { id: "r2", reviewer: "윤재용", rating: 4, date: "2026년 4월", text: "신발이 엄청 얇고 가볍습니다. 발볼이 타이트하게 꽉 쥐어짜 주는 핏이라 발볼러들은 한 사이즈 크게 사셔야 합니다." }
    ]
  },
  {
    id: "sn-008",
    name: "Neon Sprint",
    price: 175,
    originalPrice: null,
    rating: 4.5,
    reviews: 239,
    img: "/templates/sneaker/product-8.jpg",
    badge: null,
    longDesc: "고강도 서킷 트레이닝 및 피트니스 시 즉각적인 충격 완화와 고도의 수평 반발력을 제공하는 하이테크 피트니스 트레이닝 슈즈입니다. 깊은 앞코 유연성 홈(Flex Grooves)과 넓고 탄탄한 뒤꿈치 하중 분산 플레이트가 바닥과의 강력한 밀착력을 형성합니다.\n\n스쿼트나 리프팅 동작 시 뒤꿈치가 지면에서 뜨는 것을 막아주고, 고강도 플라이오메트릭 점프 동작 시 가해지는 관절 충격을 고탄성 완충 폼이 부드럽게 흡수합니다.\n\n크로스핏, 실내 헬스, GX 그룹 운동 등 다이나믹한 스포츠 웨이트 트레이닝에 완벽한 스탠스를 제공하는 피트니스 전용 마스터피스입니다.",
    specs: [
      { label: "추천 용도", value: "크로스핏, HIIT 고강도 트레이닝, 실내 웨이트 리프팅" },
      { label: "중창 완충", value: "고탄성 스프링백 리스폰스 완충 EVA 폼" },
      { label: "뒤꿈치 플레이트", value: "와이드형 고강도 안정성 플랫 힐 플레이트 탑재" },
      { label: "아웃솔 유연성", value: "다각도 방향 전환을 돕는 앞발 딥 플렉스 그루브 적용" },
      { label: "갑피 메쉬", value: "통기성이 뛰어나고 마모 저항력이 강한 엔지니어드 니트" },
      { label: "중량", value: "약 280g (270mm 기준)" },
      { label: "제조국", value: "베트남 정밀 피트니스화 생산 공장" },
      { label: "보증 기간", value: "6개월 품질 워런티 지원" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "송지영", rating: 5, date: "2026년 5월", text: "피티 받을 때 스쿼트 하거나 버피 할 때 지지력이 확실히 일반 런닝화보다 훨씬 좋습니다. 바닥에 딱 고정돼요." },
      { id: "r2", reviewer: "박태형", rating: 4, date: "2026년 4월", text: "역도나 데드리프트 할 때 뒤꿈치가 지면에 딱 박히는 느낌이 아주 우수합니다. 신발 밑창이 평평해서 달리기용으론 안 맞아요." }
    ]
  },
  {
    id: "sn-009",
    name: "Obsidian Hike",
    price: 340,
    originalPrice: 400,
    rating: 4.8,
    reviews: 311,
    img: "/templates/sneaker/product-9.jpg",
    badge: "15% 할인",
    longDesc: "산악 험로와 젖은 바위밭, 진흙탕을 달리는 고강도 트레일 러너들을 위한 최상급 아웃도어 트레일러입니다. 고어텍스 방수 안감, 바닥의 날카로운 자갈로부터 발바닥을 보호하는 플레이트, 그리고 흙을 배출하는 돌기창을 지녔습니다.\n\n산길의 돌뿌리나 거친 바위에 부딪히는 신발 앞코와 뒤꿈치 부분에는 튼튼한 토캡 가드와 힐 캡 가드를 덧대어 내구성을 한 차원 끌어올렸습니다.\n\n어떤 험난한 자연환경에서도 발을 완벽하게 보호하며 쾌적한 아웃도어 런닝 페이스를 유지하도록 설계된 트레일 프로 스니커즈입니다.",
    specs: [
      { label: "방수 내피", value: "GORE-TEX 오리지널 워터프루프 & 익스트림 투습 멤브레인" },
      { label: "바닥 플레이트", value: "ESS 고인장 앞발 보호 락 실드 플레이트 내장" },
      { label: "미드솔 쿠션", value: "에너지 리턴 기능성 고밀도 파일론 미드솔" },
      { label: "아웃솔 럭", value: "5.5mm 젖은 흙 배출형 머드그립 루버 아웃솔" },
      { label: "갑피 구성", value: "고인장 립스탑 나일론 & 신세틱 스킨 가드 복합 구조" },
      { label: "중량", value: "약 310g (270mm 기준)" },
      { label: "제조국", value: "스페인 아웃도어 슈즈 전문 아틀리에 생산" },
      { label: "보증 사항", value: "GORE-TEX 가죽 결함 발생 시 1년 내 무상 교환 지원" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "한정원", rating: 5, date: "2026년 6월", text: "개울물을 살짝 밟고 지나가도 발이 뽀송뽀송합니다. 비가 온 산행길에서도 미끄러지지 않고 안창 쿠션도 매우 탄탄하네요." },
      { id: "r2", reviewer: "이강민", rating: 5, date: "2026년 5월", text: "고어텍스라 그런지 땀 배출도 잘 돼서 오래 신어도 찝찝하지 않네요. 돌 밟았을 때 찌릿한 아픔이 전혀 느껴지지 않습니다." }
    ]
  },
  {
    id: "sn-010",
    name: "Oxford Slim",
    price: 260,
    originalPrice: null,
    rating: 4.3,
    reviews: 87,
    img: "/templates/sneaker/product-10.jpg",
    badge: null,
    longDesc: "비즈니스 캐주얼에 최적화된 하이브리드 포멀 스니커즈입니다. 옥스포드화 고유의 단정한 디테일에 스니커즈의 가벼운 고무 솔과 부드러운 카프 스웨이드를 매칭했습니다.\n\n직장에서 구두 대신 격식을 차리면서도 운동화 수준의 발의 편안함을 선사하기 위해 개발되었습니다. 테두리는 핸드 스티치 디테일로 정성스럽게 마감되어 고급 세단의 가죽 시트 같은 완성도를 자아냅니다.\n\n슬림하고 세련된 슬랙스 라인이나 단정한 수트 셋업 하부에 매치하기에 최고의 럭셔리 하이브리드 로퍼입니다.",
    specs: [
      { label: "갑피 소재", value: "이탈리아산 정품 엄선 카프 스웨이드 가죽 (소가죽)" },
      { label: "안감 내피", value: "천연 송아지 가죽 소프트 라이닝 (쓸림 및 땀 차임 억제)" },
      { label: "밑창 솔", value: "유연하고 완충력이 우수한 로우 프로필 루버 솔" },
      { label: "발등 장식", value: "클래식 페니 로퍼 옥스포드 새들 밴드 스티칭" },
      { label: "중량", value: "약 295g (270mm 기준)" },
      { label: "인솔", value: "라텍스 메모리폼 컴포트 레더 인솔 내장" },
      { label: "제조 공정", value: "포르투갈 가죽 수제화 공방 전통 수작업 생산" },
      { label: "피팅 핏", value: "단정하고 날렵한 로우 프로필 슬림 피팅" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "서태수", rating: 4, date: "2026년 5월", text: "회사에서 매일 신고 다니는 전천후 슈즈입니다. 겉보기엔 구두처럼 아주 단정한데 발바닥은 운동화보다 편하네요. 스웨이드 질감도 훌륭합니다." },
      { id: "r2", reviewer: "황지훈", rating: 5, date: "2026년 4월", text: "가죽이 엄청 부드러워서 뒤꿈치가 전혀 아프지 않습니다. 포멀한 셋업 슈트에도 아주 잘 어울려요. 비만 안 오면 맨날 신고 싶습니다." }
    ]
  },
  {
    id: "sn-011",
    name: "Trail Burst",
    price: 185,
    originalPrice: 220,
    rating: 4.4,
    reviews: 142,
    img: "/templates/sneaker/product-11.jpg",
    badge: "15% 할인",
    longDesc: "견고한 발리스틱 나일론 소재와 발등을 단단하게 감싸는 이중 벨크로 스트랩 고정 장치를 갖추어, 거친 아웃도어 환경에서도 흔들림 없는 지지력을 자랑하는 테크니컬 아웃도어 슈즈입니다.\n\n발등 부위에 신발 끈 대신 탄탄한 벨크로 이중 밴드를 탑재하여, 질주 시 신발 끈이 나뭇가지에 걸려 풀리는 사고를 근본적으로 방지하고 발 전체를 든든하게 락킹해 줍니다.\n\n어떠한 오프로드 환경에서도 아웃솔 러그의 접지력을 극대화하여 활기차고 빠른 질주를 가능하게 돕습니다.",
    specs: [
      { label: "갑피 원단", value: "고강도 발리스틱 립스탑 나일론 & 보강 스키드 가죽 스킨" },
      { label: "고정 방식", value: "이중 고강도 벨크로(Velcro) 스트랩 락킹 고정 장치" },
      { label: "중창 시스템", value: "충격 흡수 파일론 몰디드 고압축 EVA 미드솔" },
      { label: "접지 아웃솔", value: "자갈 및 오프로드 흙길 접지에 특화된 경량 스파이크 러버솔" },
      { label: "토캡 보강", value: "돌부리 타격 방지 고경도 고무 토캡 코팅 적용" },
      { label: "중량", value: "약 320g (270mm 기준)" },
      { label: "제조국", value: "중국 하이엔드 테크 슈즈 양조 공장" },
      { label: "워런티 보증", value: "벨크로 접착력 및 고정 버클 부분 1년 무상 품질 워런티 제공" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "임채규", rating: 5, date: "2026년 4월", text: "벨크로가 발을 단단하게 꽉 잡아줘서 산길 내리막 걸을 때 발가락이 앞코로 쏠리지 않아 진짜 편합니다. 신발 끈보다 훨씬 실용적이에요." },
      { id: "r2", reviewer: "오세정", rating: 4, date: "2026년 3월", text: "스포티하고 테크니컬한 아웃도어 패션 연출에 최고네요. 다만 발등이 엄청 높으신 분들은 스트랩이 조금 짧게 느껴질 수도 있겠습니다." }
    ]
  },
  {
    id: "sn-012",
    name: "Apex Lite",
    price: 210,
    originalPrice: null,
    rating: 4.6,
    reviews: 196,
    img: "/templates/sneaker/product-12.jpg",
    badge: "신상품",
    longDesc: "최소한의 무게로 누리는 극상의 아늑함을 구현한 데일리 스포츠 런닝 슈즈입니다. 270mm 기준 단 190g에 불과하여, 한 스레드로 짠 고기능성 니트 상판과 질소 주입 초경량 탄성 폼을 적용했습니다.\n\n양말을 신은 듯 발등을 포근하고 부드럽게 감싸는 일체형 삭스 라이닝 구조는 장시간 걷거나 뛰어도 신발 내부의 봉제선 마찰로 인한 물집이나 피부 자극이 없습니다.\n\n피로도 없는 가벼움과 세련된 니트 감성을 동시에 원하는 트렌디한 어반 러너와 현대인의 데일리 워킹에 완벽히 동화됩니다.",
    specs: [
      { label: "무게 정보", value: "단 190g (270mm 한 짝 기준 - 초경량 등급)" },
      { label: "갑피 직조", value: "단일 원사 정밀 편직 고밀도 삭스라이크 메쉬 니트" },
      { label: "미드솔", value: "질소(N2) 가스 고압 주입 고반발 초경량 완충 미드솔" },
      { label: "발목 부분", value: "양말 타입 탄성 밴드 카스킹 칼라" },
      { label: "인솔 사양", value: "통기성이 뛰어나고 쿠션감이 오래 지속되는 고급 에어셀 인솔" },
      { label: "아웃솔", value: "마찰이 잦은 부분에만 경량 고마모 러버 팁 부착 설계" },
      { label: "제조국", value: "인도네시아 정밀 니트 스포츠 제화 라인" },
      { label: "보증 기간", value: "니트 원사 풀림 발생 시 구매일로부터 6개월 이내 무상 수선 수리" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "김현진", rating: 5, date: "2026년 6월", text: "진짜 신발 안 신은 것처럼 깃털처럼 가볍네요. 쿠션도 물렁하지 않고 쫀득하게 발바닥 아치를 잘 받쳐줍니다. 하루 종일 걷는 직업인데 피로감이 싹 가셨어요." },
      { id: "r2", reviewer: "신혜지", rating: 4, date: "2026년 5월", text: "신축성이 좋은 니트 원단이라 발가락 움직임이 편합니다. 통풍이 잘 돼서 시원하네요. 비 오는 날 신으면 양말까지 바로 젖는 건 유의하세요." }
    ]
  },
  {
    id: "sn-013",
    name: "Sport Flex",
    price: 155,
    originalPrice: 185,
    rating: 4.2,
    reviews: 63,
    img: "/templates/sneaker/product-13.jpg",
    badge: null,
    longDesc: "유연한 스포츠 라이프스타일을 추구하는 이들을 위한 이지 슬립온 운동화입니다. 신축성이 탁월한 플렉스 직조 메쉬 소재가 발의 복잡한 움직임에 따라 유기적으로 수축 팽창하여 신속한 탈착과 오래 지속되는 안락함을 선사합니다.\n\n신발끈을 묶는 번거로움 없이 뒤꿈치 풀탭을 당겨 부드럽게 발을 집어넣을 수 있으며, 인솔 내부에는 탈착이 가능한 컴포트 아치 서포트 패드가 탑재되어 보행 시 아치 무너짐을 막아줍니다.\n\n동네 산책, 마트 장보기, 가벼운 야외 운동 시 신속하고 가장 편하게 선택하게 될 마이 데일리 스니커즈입니다.",
    specs: [
      { label: "원단 소재", value: "탄성이 가미된 플렉스 직조 오가닉 메쉬 니트" },
      { label: "피팅 구조", value: "끈 없는 슬립온 양말 타입 이지 삭스 라이닝" },
      { label: "밑창 구조", value: "발바닥 굴곡에 따라 자연스럽게 구부러지는 다축 컴포트 홈 슬릿 솔" },
      { label: "내부 인솔", value: "탈착형 인체공학 아치 서포트 오소라이트 풋베드" },
      { label: "중량", value: "약 240g" },
      { label: "두께감", value: "얇고 유연함 (봄, 여름, 가을 3계절 적합)" },
      { label: "제조국", value: "중국 위탁 협력 공장 OEM" },
      { label: "보증 사항", value: "밑창 접착부 벌어짐 현상 발생 시 6개월 이내 무상 접합" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "오은하", rating: 4, date: "2026년 5월", text: "신발끈 묶을 필요가 없어서 가벼운 동네 산책용으로 너무 손이 자주 갑니다. 뒤꿈치 안 까져요." },
      { id: "r2", reviewer: "박은경", rating: 5, date: "2026년 4월", text: "아치 서포트 쿠션이 제 발바닥 평발 기를 잘 받쳐줘서 엄청 편하네요. 부모님 효도화로 선물해 드려야겠습니다." }
    ]
  },
  {
    id: "sn-014",
    name: "Loafer Classic",
    price: 230,
    originalPrice: null,
    rating: 4.5,
    reviews: 77,
    img: "/templates/sneaker/product-14.jpg",
    badge: null,
    longDesc: "전통적인 이탈리아 페니 로퍼의 단정한 클래식 실루엣에 스포티한 컴포트 아웃솔의 기술을 결합한 프리미엄 하이브리드 로퍼 스니커즈입니다. 광택이 수려한 송아지 천연 가죽 바디를 수공 제작하고 발바닥에는 푹신한 컵솔을 하이브리드 접합했습니다.\n\n격식 있는 정장이나 캐주얼한 캐주얼 셋업 코디 시 하부 구두 특유의 딱딱함에서 벗어나, 종일 서 있어도 뛰어난 쿠셔닝을 만끽할 수 있습니다.\n\n구두의 무게와 발 피로감에 시달리던 직장인과 미팅이 잦은 비즈니스맨들에게 최적의 스마트 워킹 가치를 선사합니다.",
    specs: [
      { label: "갑피 레더", value: "이탈리아산 최고급 세미-글로스 카프 가죽 (송아지 가죽)" },
      { label: "밑창 아웃솔", value: "고탄성 메모리폼 하이브리드 컴포트 컵솔 장착" },
      { label: "여밈 디테일", value: "클래식 페니 로퍼 핸드 스티칭 새들 밴드 데코" },
      { label: "안감 소재", value: "천연 가죽 전체 안감 (부드럽고 땀 흡수가 용이)" },
      { label: "중량", value: "약 310g (270mm 기준)" },
      { label: "제조 공정", value: "포르투갈 슈즈 전문 아틀리에 핸드메이드" },
      { label: "보증 사항", value: "가죽 봉제선 터짐이나 단추 이탈 시 1년 보증 무상 수리" },
      { label: "가죽 관리", value: "오염 발생 시 마른 수건 케어, 가죽 전용 슈크림 왁싱 케어 권장" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "정주호", rating: 5, date: "2026년 6월", text: "정말 대단한 신발입니다. 겉보기엔 구두 로퍼인데 밑창은 운동화보다 편하네요. 출장 갈 때 이 신발만 신습니다." },
      { id: "r2", reviewer: "홍성진", rating: 4, date: "2026년 5월", text: "가죽 광택이 엄청 은은하고 이쁩니다. 다만 초기 가죽 길들일 때 가죽이 단단해서 살짝 적응 기간이 필요합니다." }
    ]
  },
  {
    id: "sn-015",
    name: "Carbon Run",
    price: 280,
    originalPrice: 320,
    rating: 4.7,
    reviews: 188,
    img: "/templates/sneaker/product-15.jpg",
    badge: "12% 할인",
    longDesc: "러닝 크루의 마라톤 피비를 갱신해 줄 풀-레벨 고강도 카본 레이싱 러닝화입니다. 전체 길이에 걸쳐 휘어진 고강도 카본 섬유 플레이트가 질소 가스를 주입해 고도로 팽창한 미드솔 사이에 샌드위치 구조로 완벽히 융합되어 폭발적인 반발 에너지를 제공합니다.\n\n매 발걸음 딛을 때마다 지면으로부터의 충격 에너지를 즉각적인 탄성 추진력으로 되돌려 주어, 다리 근육의 피로도를 방지하고 고속 질주 페이스를 오래 유지할 수 있도록 이끌어 줍니다.\n\n갑피는 반투명한 초경량 필라멘트 원사로 촘촘히 엮어, 발을 견고히 고정하면서도 땀 배출력이 무려 면의 3배 이상 뛰어나 쾌적한 레이싱을 선사합니다.",
    specs: [
      { label: "내장 판막", value: "전체 렝스(Full-Length) 곡선형 초고인장 카본 플레이트 내장" },
      { label: "완충 미드솔", value: "이중 질소 고팽창 고탄성 라이트-엑스 중창 시스템" },
      { label: "갑피 메쉬", value: "반투명 하이엔드 모노필라멘트 정밀 스크린 메쉬" },
      { label: "아웃솔 고무", value: "고접지력 경량 하이카본 러버솔 (주요 마모부 접합)" },
      { label: "중량", value: "약 205g (270mm 기준 초경량)" },
      { label: "드롭 오프셋", value: "8mm 오프셋 (러닝 추진 스탠스 유도)" },
      { label: "제조국", value: "중국 첨단 스포츠 기술 제화 라인" },
      { label: "품질 워런티", value: "카본 플레이트 파손 혹은 미드솔 박리 시 1년간 무상 교환 교정" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "임혁준", rating: 5, date: "2026년 5월", text: "탄성력이 진짜 역대급입니다. 밟았을 때 통 튕겨나가는 느낌이에요. 이거 신고 뛰었더니 첫날 바로 5km 피비 35초 단축했습니다. 대만족합니다." },
      { id: "r2", reviewer: "강호성", rating: 5, date: "2026년 4월", text: "반투명 메쉬라 양말 컬러에 따라 비치는 게 디자인적으로도 매력적이고 여름에 뛸 때 시원해서 환상적입니다. 아주 가볍습니다." }
    ]
  },
  {
    id: "sn-016",
    name: "Street Low",
    price: 145,
    originalPrice: null,
    rating: 4.0,
    reviews: 44,
    img: "/templates/sneaker/product-16.jpg",
    badge: null,
    longDesc: "올드스쿨 스케이트보더들의 터프하고 자유로운 감성을 고스란히 담아낸 스트리트 캔버스 스니커즈입니다. 촘촘하고 두터운 헤비 코튼 캔버스 원단에 마모 저항력이 뛰어난 천연 스웨이드 패치를 레이어링하고, 푹신한 패디드 텅(설포)과 든든한 벌커나이즈 솔로 마무리했습니다.\n\n스케이트보드 트릭 시 마찰이 가장 잦은 옆면 솔기 부분에는 이중 스티치 가죽 스키드 패치 처리를 가미해, 보드가 지면과 긁히는 마찰에도 스니커즈가 쉽게 찢어지지 않습니다.\n\n자유분방한 오버사이즈 와이드 진이나 힙한 스트리트 패션 코디에 완벽히 매칭되어 러프하고 힙한 매력을 배가시킵니다.",
    specs: [
      { label: "원단 구성", value: "12oz 헤비 코튼 캔버스 원단 및 프리미엄 천연 카프 스웨이드 가죽" },
      { label: "설포 구조", value: "쓸림을 방지하고 피팅감을 높인 도톰한 충진 패디드 텅(Tongue)" },
      { label: "아웃솔 공법", value: "고열 황화 벌커나이즈 공법 고밀도 생고무 그리드 솔" },
      { label: "안창 인솔", value: "보드 트릭 착지 충격을 완화하는 복원력 강화 고무 에어 인솔" },
      { label: "중량", value: "약 360g" },
      { label: "끈 타입", value: "고중량 코튼 와이드 납작 슈레이스" },
      { label: "제조국", value: "중국 위탁 협력 OEM 라인" },
      { label: "보증 사항", value: "고무 밑창 갈라짐 발생 시 6개월 이내 무상 접착" }
    ],
    reviewsList: [
      { id: "r1", reviewer: "윤성오", rating: 4, date: "2026년 4월", text: "스케이트 보드용이나 롱보드 탈 때 접지가 아주 쫀쫀하게 잘 되고 튼튼합니다. 디자인이 아주 투박하면서도 감성적입니다." },
      { id: "r2", reviewer: "최준수", rating: 4, date: "2026년 3월", text: "캔버스가 엄청 두껍고 튼튼하네요. 디자인은 이쁜데 보드용 운동화라 굽이 평평해서 하루 종일 걸으면 발바닥이 다소 뻐근할 순 있습니다." }
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
    <Link href={`/ko/templates/sneaker/product/${product.id}`} className="group block border border-black/10 hover:border-black transition-colors duration-200">
      <div className="relative overflow-hidden aspect-square bg-[var(--color-bg-secondary)]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-[3px] backdrop-blur-sm ${getBadgeStyle(product.badge)}`}>
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
          <Link href="/ko/templates/sneaker/shop-all" className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/50 hover:text-black transition-colors border-b border-black/20 pb-0.5">
            전체 보기
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
