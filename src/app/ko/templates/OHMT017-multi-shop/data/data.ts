// src/app/ko/templates/OHMT017-multi-shop/data/data.ts

export const categories = [
  { id: 'accessories', name: '액세서리', image: '/templates/OHMT017-multi-shop/category-accessories.jpg' },
  { id: 'footwear', name: '신발', image: '/templates/OHMT017-multi-shop/category-footwear.jpg' },
  { id: 'womens', name: '여성', image: '/templates/OHMT017-multi-shop/category-women.jpg' },
  { id: 'mens', name: '남성', image: '/templates/OHMT017-multi-shop/category-men.jpg' },
]

export const products = [
  {
    id: '1',
    name: '스퀘어 선글라스',
    price: 29,
    originalPrice: 45,
    rating: 4.8,
    reviewCount: 124,
    category: 'accessories',
    tag: '신상품',
    image: '/templates/OHMT017-multi-shop/product-01.jpg',
    description: '가벼운 아세테이트 프레임과 UV400 렌즈를 적용한 스퀘어 선글라스입니다.',
    longDescription: '단정한 스퀘어 프레임과 가벼운 바이오 아세테이트 소재를 사용한 선글라스입니다. UV400 렌즈가 자외선을 차단하며, 둥글게 다듬은 템플과 편안한 코받침으로 장시간 착용 부담을 줄였습니다.\n\n도심의 일상복부터 야외 활동까지 폭넓게 활용할 수 있습니다. 힌지에는 보강 구조를 적용해 반복적인 착용에도 프레임이 쉽게 뒤틀리지 않도록 했습니다.\n\n남녀 모두 착용하기 좋은 균형 잡힌 크기로 제작했습니다. 얼굴이 작은 경우에는 상세 치수를 확인해 주세요.',
    specs: [
      { label: '프레임 소재', value: '수작업으로 광택을 낸 바이오 아세테이트' },
      { label: '렌즈 사양', value: 'UV400 자외선 차단 아크릴 렌즈' },
      { label: '힌지 하드웨어', value: '5배럴 강화 금속 힌지' },
      { label: '사이즈 (렌즈·브리지·템플)', value: '52mm / 20mm / 145mm' },
      { label: '무게', value: '28g' },
      { label: '제조국', value: '이탈리아 수공예 공방' },
      { label: '보증 기간', value: '구매일로부터 1년 무상 보증' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '김소현', rating: 5, date: '2026. 5. 12.', text: '핏감이 훌륭하고 적당히 묵직해서 고급스러워요. 렌즈가 정말 선명하네요. 저렴해 보이지 않는 무광 느낌이 매우 마음에 듭니다.' },
      { id: 'r2', reviewer: '이태민', rating: 4, date: '2026. 4. 28.', text: '어떤 스타일에도 무난하게 잘 어울리는 클래식 디자인입니다. 하루 종일 써도 귀가 안 아파요. 다만 얼굴이 작으신 분들은 조금 크게 느껴질 수도 있을 것 같네요.' },
      { id: 'r3', reviewer: '박서준', rating: 5, date: '2026. 5. 20.', text: '가성비 최고의 선글라스입니다. 배송도 정성스런 가죽 케이스에 담겨서 빠르게 왔어요. 데일리로 매일 가방에 넣고 다닙니다.' },
      { id: 'r4', reviewer: '최은영', rating: 5, date: '2026. 6. 2.', text: '여름 휴가 가기 전에 샀는데 정말 마음에 들어요. 안경알 크기도 적당해서 생얼에 쓰기에도 딱입니다. 강추해요!' }
    ]
  },
  {
    id: '2',
    name: '캔버스 토트백',
    price: 45,
    rating: 4.6,
    reviewCount: 89,
    category: 'accessories',
    tag: '신상품',
    image: '/templates/OHMT017-multi-shop/product-02.jpg',
    description: '두꺼운 유기농 면 캔버스와 보강 봉제를 적용한 넉넉한 토트백입니다.',
    longDescription: '두꺼운 유기농 면 캔버스로 제작한 일상용 토트백입니다. 하중이 집중되는 손잡이 연결부에는 X자 보강 봉제를 적용했고, 넓은 손잡이로 어깨에 편하게 멜 수 있습니다.\n\n안감을 생략해 캔버스의 자연스러운 질감을 살렸으며, 내부 오픈 포켓에 휴대전화와 열쇠 같은 작은 물건을 따로 보관할 수 있습니다. 바닥에는 보강재를 덧대 내용물을 넣었을 때 형태가 쉽게 무너지지 않도록 했습니다.\n\n사용하면서 생기는 주름과 색의 변화가 자연스럽게 더해지는 소재입니다.',
    specs: [
      { label: '소재 구성', value: '18oz 유기농 면 캔버스 100%' },
      { label: '크기', value: '가로 35cm × 세로 40cm × 폭 15cm' },
      { label: '손잡이 높이', value: '28cm' },
      { label: '내부 구조', value: '오픈형 메인 수납공간, 내부 오픈 포켓 1개' },
      { label: '봉제 기법', value: '이중 면사 봉제, 손잡이 연결부 X자 보강' },
      { label: '세탁 방법', value: '오염된 부분만 중성세제로 손세탁' },
      { label: '원산지', value: '포르투갈 섬유 전문 공장' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '이지은', rating: 5, date: '2026. 6. 1.', text: '캔버스가 진짜 도톰해서 아무것도 안 넣어도 혼자서 서 있을 정도로 핏이 잘 살아요. 색상도 맑은 아이보리라 예쁩니다.' },
      { id: 'r2', reviewer: '한메이슨', rating: 4, date: '2026. 5. 15.', text: '심플하고 튼튼합니다. 내부 포켓에 지갑이나 폰 넣기 편해요. 다만 가방 겉면에 먼지가 조금 잘 붙는 재질이라 관리가 필요하겠네요.' },
      { id: 'r3', reviewer: '윤아름', rating: 5, date: '2026. 5. 25.', text: '노트북 15인치 들어가고도 파우치와 텀블러까지 거뜬하게 들어가는 대용량이라 보부상족에게 완벽한 데일리백입니다.' },
      { id: 'r4', reviewer: '김동현', rating: 4, date: '2026. 6. 5.', text: '질감이 투박하면서도 마감이 세련되어 좋네요. 여자친구 선물용으로 샀는데 너무 만족해해서 뿌듯합니다.' }
    ]
  },
  {
    id: '3',
    name: '릴라 리본 스커트',
    price: 149,
    originalPrice: 199,
    rating: 4.9,
    reviewCount: 57,
    category: 'womens',
    tag: '신상품',
    image: '/templates/OHMT017-multi-shop/product-03.jpg',
    description: '은은한 광택의 피치 새틴과 허리 리본을 적용한 미디 스커트입니다.',
    longDescription: '허리선을 안정적으로 잡아주고 자연스럽게 퍼지는 미디 스커트입니다. 표면을 부드럽게 가공한 새틴 원단을 사용해 은은한 광택과 매끄러운 촉감을 살렸습니다.\n\n옆선의 리본은 원하는 형태로 묶을 수 있으며, 숨은 지퍼로 외관을 단정하게 정리했습니다. 바이어스 재단을 적용해 걸을 때 원단이 부드럽게 움직입니다.\n\n전체 안감을 넣어 비침과 정전기를 줄였습니다. 셔츠와 재킷에는 단정하게, 니트와 티셔츠에는 편안하게 연출할 수 있습니다.',
    specs: [
      { label: '원단 소재', value: '겉감: 85% 새틴 비스코스, 15% 폴리에스터' },
      { label: '안감 사양', value: '폴리에스터 100% 스트레치 안감' },
      { label: '핏과 총장', value: '하이웨이스트 미디 핏 · 총장 78cm' },
      { label: '지퍼 및 여밈', value: '옆선 숨은 지퍼, 금속 이중 후크' },
      { label: '두께와 비침', value: '중간 두께 · 비침 없음' },
      { label: '제조국', value: '포르투갈 의류 전문 공방' },
      { label: '세탁 방법', value: '찬물 손세탁 또는 세탁망에 넣어 울 코스 사용' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '유리나', rating: 5, date: '2026. 5. 30.', text: '새틴 소재가 정말 톡톡하고 부드러워요. 걸을 때 사르르 흔들리는 실루엣이 예술입니다. 포장 상태도 구김 없이 고급스럽게 도착했습니다.' },
      { id: 'r2', reviewer: '최은지', rating: 5, date: '2026. 5. 20.', text: '허리 리본이 과하지 않고 세련되었어요. 뱃살도 부드럽게 가려주네요. 사이즈 정사이즈 가시면 딱 맞습니다.' },
      { id: 'r3', reviewer: '정다솜', rating: 4, date: '2026. 6. 1.', text: '블라우스나 셔츠에 매치하면 하객 룩 완성입니다. 다만 새틴 원단이라 가방 쇠 장식 같은 데 올이 나가지 않게 조심해야 할 것 같아요.' },
      { id: 'r4', reviewer: '박은정', rating: 5, date: '2026. 6. 8.', text: '컬러가 딥네이비라 진짜 고풍스럽고 차분해 보입니다. 스커트 길이가 너무 길지도 짧지도 않아 완벽하네요. 대만족합니다.' }
    ]
  },
  {
    id: '4',
    name: '미니멀 레더 스니커즈',
    price: 89,
    rating: 4.7,
    reviewCount: 203,
    category: 'footwear',
    tag: '신상품',
    image: '/templates/OHMT017-multi-shop/product-04.jpg',
    description: '가죽 갑피와 쿠션 깔창을 적용한 단정한 로우톱 스니커즈입니다.',
    longDescription: '풀그레인 송아지 가죽으로 제작한 미니멀한 로우톱 스니커즈입니다. 발목을 감싸는 패딩과 메모리폼 깔창을 적용해 장시간 착용할 때의 부담을 줄였습니다.\n\n로고와 장식을 최소화해 데님, 치노, 슬랙스 등 다양한 옷차림에 자연스럽게 어울립니다. 고무 밑창은 접지력과 내구성을 높이고, 가장자리는 손으로 마감해 단정한 인상을 유지합니다.\n\n가죽 특성상 처음에는 단단하게 느껴질 수 있으며, 착용하면서 발 모양에 맞게 부드러워집니다.',
    specs: [
      { label: '갑피', value: '이탈리아산 풀그레인 송아지 가죽' },
      { label: '안감', value: '송아지 가죽 안감' },
      { label: '밑창', value: '이탈리아 Margom 고무 밑창' },
      { label: '깔창', value: '분리형 메모리폼 라텍스 깔창' },
      { label: '제작 방식', value: '360도 스티치다운 봉제' },
      { label: '사이즈 추천', value: '중간 사이즈는 한 단계 작은 사이즈 권장' },
      { label: '원산지', value: '포르투갈 제화 전문 공방' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '박민우', rating: 5, date: '2026. 6. 3.', text: '엄청 슬림하고 깔끔하네요. 가죽이 부드러워서 이틀 정도 신으니 제 발에 착 붙습니다. 하이엔드 브랜드 로퍼 부럽지 않아요.' },
      { id: 'r2', reviewer: '오세훈', rating: 4, date: '2026. 5. 18.', text: '마감이 정말 꼼꼼합니다. 바느질 선 하나 비뚤어진 데가 없네요. 이 가격에 이 정도 가죽 퀄리티면 가성비 최고 수준입니다.' },
      { id: 'r3', reviewer: '강태형', rating: 5, date: '2026. 5. 29.', text: '출퇴근용 출근룩 신발로 샀는데 슬랙스에 기가 막히게 어울립니다. 뒤꿈치 안 까져서 감격스러웠어요.' },
      { id: 'r4', reviewer: '윤지석', rating: 5, date: '2026. 6. 9.', text: '밑창 고무가 적당히 쫀득해서 대리석 바닥에서도 소음 없고 미끄러지지 않네요. 흰색 샀는데 올블랙도 하나 더 장만하려고요.' }
    ]
  },
  {
    id: '5',
    name: '클래식 린넨 셔츠',
    price: 65,
    originalPrice: 89,
    rating: 4.5,
    reviewCount: 145,
    category: 'mens',
    tag: '신상품',
    image: '/templates/OHMT017-multi-shop/product-05.jpg',
    description: '자개 단추와 여유 있는 핏을 적용한 통기성 좋은 린넨 셔츠입니다.',
    longDescription: '천연 린넨으로 제작한 여유 있는 핏의 셔츠입니다. 가먼트 워싱으로 초기 수축을 줄이고 피부에 닿는 촉감을 부드럽게 다듬었습니다.\n\n자개 단추와 프렌치 플래킷, 단정한 레귤러 칼라를 적용했습니다. 린넨 특유의 통기성과 빠른 건조 성질 덕분에 덥고 습한 날에도 편하게 입을 수 있습니다.\n\n입고 세탁할수록 원단이 자연스럽게 부드러워지며, 생활 주름은 린넨 특유의 편안한 분위기를 만듭니다.',
    specs: [
      { label: '소재 구성', value: '벨기에산 천연 린넨 100%' },
      { label: '단추 사양', value: '천연 자개 단추 · 두께 2mm' },
      { label: '칼라 형태', value: '7.5cm 레귤러 칼라' },
      { label: '핏', value: '여유 있는 레귤러 핏 · 드롭 숄더' },
      { label: '두께와 비침', value: '얇은 두께 · 밝은 색상은 약간의 비침 있음' },
      { label: '세탁 방법', value: '찬물에 중성세제로 손세탁 후 그늘에서 건조' },
      { label: '제조 공정', value: '벨기에산 원단 · 포르투갈 봉제' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '송승현', rating: 5, date: '2026. 6. 5.', text: '여름에 입기 정말 시원해요. 천연 린넨 특유의 기분 좋은 까슬까슬함이 매력적이에요. 자개 단추가 햇빛 아래서 영롱하게 빛나서 멋져요.' },
      { id: 'r2', reviewer: '강재형', rating: 4, date: '2026. 5. 22.', text: '가볍고 핏이 세련되게 예쁩니다. 세탁할수록 원단이 점점 더 부드러워지는 것 같아요. 다만 구김이 꽤 잘 가는 편이라 다림질해서 입어야 깔끔합니다.' },
      { id: 'r3', reviewer: '김선우', rating: 5, date: '2026. 5. 27.', text: '사이즈 오버핏으로 입으려고 한 사이즈 업했는데 셔츠 자락 빼서 반바지에 입으니 시원하고 딱 좋습니다. 색상도 내추럴 베이지라 예쁘네요.' },
      { id: 'r4', reviewer: '최한결', rating: 4, date: '2026. 6. 8.', text: '여름 리조트 룩으로 최고입니다. 까슬거림 민감한 편인데 가먼트 워싱 덕분에 크게 거슬리지 않고 편하게 입고 있습니다.' }
    ]
  },
  {
    id: '6',
    name: '골지 니트 스웨터',
    price: 95,
    rating: 4.9,
    reviewCount: 312,
    category: 'womens',
    tag: '베스트',
    image: '/templates/OHMT017-multi-shop/product-06.jpg',
    description: '메리노 울과 캐시미어를 혼방한 부드러운 골지 니트입니다.',
    longDescription: '메리노 울과 캐시미어를 혼방해 부드럽고 따뜻하게 만든 골지 니트입니다. 가는 12게이지 조직이 몸을 편안하게 감싸며, 여유 있는 실루엣으로 단독 또는 이너와 함께 입기 좋습니다.\n\n드롭 숄더와 부드러운 모크넥을 적용해 목을 조이지 않으면서도 보온성을 유지합니다. 신축성이 있어 움직임이 편하고, 솔기는 두께가 두드러지지 않도록 정리했습니다.\n\n마찰이 잦은 부위에는 보풀이 생길 수 있으므로 착용 후 부드러운 브러시로 관리해 주세요.',
    specs: [
      { label: '원사 혼용률', value: '호주산 메리노 울 70% · 몽골산 캐시미어 30%' },
      { label: '편직 게이지', value: '12게이지 골지 조직' },
      { label: '디자인 디테일', value: '드롭 숄더 · 슬릿 소매 · 모크넥' },
      { label: '두께감', value: '중간 두께 · 가볍고 따뜻한 착용감' },
      { label: '원사 인증', value: 'OEKO-TEX 인증 원사' },
      { label: '세탁 방법', value: '드라이클리닝 또는 울 전용 세제로 손세탁 후 평평하게 건조' },
      { label: '생산지', value: '스코틀랜드 니트 전문 공방' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '정다혜', rating: 5, date: '2026. 6. 10.', text: '엄청 부드럽고 가슬거림이 1도 없어요! 목 부분도 답답하지 않아서 겨울 내내 매일 입게 되네요. 보풀도 생각보다 거의 안 일어납니다.' },
      { id: 'r2', reviewer: '김희선', rating: 5, date: '2026. 5. 25.', text: '오트밀 베이지 샀는데 컬러감이 엄청 고급스럽고 핏도 부해 보이지 않아서 마음에 듭니다. 엄마한테도 하나 선물해 드렸어요.' },
      { id: 'r3', reviewer: '한유라', rating: 4, date: '2026. 5. 18.', text: '캐시미어가 섞여서 그런지 정말 가벼운데 엄청 따뜻합니다. 겨울철 이너로 요긴해요. 다만 손세탁할 때 모양 뒤틀리지 않게 살살 짜주셔야 합니다.' },
      { id: 'r4', reviewer: '임소진', rating: 5, date: '2026. 6. 2.', text: '소매 부분이 약간 길게 나와서 손등을 덮어주는데 이게 정말 귀엽고 세련되어 보입니다. 어깨선 떨어지는 핏이 여리여리해 보여서 강추!' }
    ]
  },
  {
    id: '7',
    name: '슬림 치노 팬츠',
    price: 75,
    originalPrice: 110,
    rating: 4.6,
    reviewCount: 178,
    category: 'mens',
    tag: '베스트',
    image: '/templates/OHMT017-multi-shop/product-07.jpg',
    description: '신축성 있는 면 트윌로 제작한 슬림 테이퍼드 치노 팬츠입니다.',
    longDescription: '신축성 있는 면 트윌 소재로 제작한 슬림 테이퍼드 치노 팬츠입니다. 허벅지에는 움직일 수 있는 여유를 두고 밑단으로 갈수록 자연스럽게 좁아지도록 설계했습니다.\n\n벨트 고리와 전면 사선 포켓, 후면 웰트 포켓을 적용했으며 YKK 지퍼와 천연 소뿔 단추로 마감했습니다. 셔츠와 재킷에는 단정하게, 티셔츠와 스니커즈에는 편안하게 어울립니다.\n\n원단은 세탁 후 수축과 형태 변화를 줄이기 위해 사전 가공했습니다.',
    specs: [
      { label: '원단 소재', value: '면 97% · 엘라스테인 3%' },
      { label: '원단 중량', value: '8.5oz · 사계절용 중간 두께' },
      { label: '핏', value: '슬림 테이퍼드 핏 · 힙 여유, 밑단 슬림' },
      { label: '주머니 구조', value: '전면 사선 포켓 2개 · 후면 단추형 웰트 포켓 2개' },
      { label: '부자재', value: 'YKK 황동 지퍼 · 천연 소뿔 단추' },
      { label: '수축 방지', value: '샌포라이징 가공으로 세탁 후 수축 최소화' },
      { label: '제조국', value: '베트남 테일러드 의류 전문 공장' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '윤동주', rating: 5, date: '2026. 6. 2.', text: '핏이 딱 맞춤복처럼 예뻐요. 스판이 살짝 섞여 있어서 사무실에서 하루 종일 앉아 있어도 무릎이 안 나오고 정말 편합니다.' },
      { id: 'r2', reviewer: '한정훈', rating: 4, date: '2026. 5. 14.', text: '바느질 마감이 아주 꼼꼼해요. 기장이 저한테는 아주 살짝 길긴 한데 턴업해서 입거나 수선해서 입으니 딱 좋네요. 먼지도 별로 안 묻습니다.' },
      { id: 'r3', reviewer: '조민기', rating: 5, date: '2026. 5. 22.', text: '다리가 얇은 편이라 바지 고르기 힘든데 펄럭이지 않고 다리 라인을 아주 매끈하고 길어 보이게 잡아줍니다. 재구매 의사 100%입니다.' },
      { id: 'r4', reviewer: '임채원', rating: 4, date: '2026. 6. 6.', text: '허리 밴딩 안쪽 마감이 실리콘 테이핑 처리되어 있어서 셔츠가 밖으로 잘 안 빠져나오네요. 이런 세심한 디테일이 만족스럽습니다.' }
    ]
  },
  {
    id: '8',
    name: '레더 크로스바디',
    price: 120,
    rating: 4.8,
    reviewCount: 94,
    category: 'accessories',
    tag: '베스트',
    image: '/templates/OHMT017-multi-shop/product-08.jpg',
    description: '길이 조절 스트랩과 실용적인 수납공간을 갖춘 가죽 크로스백입니다.',
    longDescription: '베지터블 태닝 송아지 가죽으로 제작한 크로스백입니다. 자연스러운 표면 질감과 시간이 지나며 깊어지는 색의 변화를 즐길 수 있습니다.\n\n자석 여밈 플랩 안쪽에 오픈 포켓을 두었고, 내부 지퍼 포켓과 조절 가능한 가죽 스트랩을 적용했습니다. 휴대전화와 지갑, 열쇠처럼 자주 사용하는 소지품을 나누어 보관하기 좋습니다.\n\n가죽 표면은 사용하면서 작은 흔적과 광택이 더해집니다. 물에 젖었을 때는 마른 천으로 닦고 그늘에서 말려 주세요.',
    specs: [
      { label: '가죽 사양', value: '이탈리아산 베지터블 태닝 송아지 가죽' },
      { label: '안감 소재', value: '재생 면 트윌 안감' },
      { label: '크기', value: '가로 23cm × 세로 16.5cm × 폭 7.5cm' },
      { label: '스트랩 길이', value: '50–60cm · 5단계 조절' },
      { label: '하드웨어', value: '앤티크 황동 지퍼와 버클' },
      { label: '수납 공간', value: '메인 수납공간 1개 · 오픈 포켓 1개 · 지퍼 포켓 1개' },
      { label: '제조국', value: '이탈리아 피렌체 가죽 공방' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '서진아', rating: 5, date: '2026. 6. 11.', text: '바느질 마감이 흠잡을 데 없이 탄탄하고 고급스러워요. 가죽 향도 좋고, 유행 안 타는 베이직한 디자인이라 데일리로 정말 강추합니다.' },
      { id: 'r2', reviewer: '민지연', rating: 5, date: '2026. 5. 28.', text: '보기보다 수납이 진짜 잘 돼요. 폰, 쿠션 팩트, 카드 지갑, 차 키, 무선 이어폰까지 뚱뚱해지지 않고 알차게 쏙 들어갑니다.' },
      { id: 'r3', reviewer: '이선혜', rating: 4, date: '2026. 5. 19.', text: '스트랩 끈 조절 폭이 넓어서 크로스로도 메고 숄더백으로 짧게 메기에도 좋습니다. 가죽이 단단해서 모양 변형도 없어요.' },
      { id: 'r4', reviewer: '박주은', rating: 5, date: '2026. 6. 4.', text: '백화점 명품 백 브랜드 못지않은 우수한 스티치 퀄리티입니다. 포장 박스와 더스트 백까지 고급스러워서 대접받는 느낌이었습니다.' }
    ]
  },
  {
    id: '9',
    name: '앵클 부츠',
    price: 135,
    originalPrice: 180,
    rating: 4.9,
    reviewCount: 267,
    category: 'footwear',
    tag: '베스트',
    image: '/templates/OHMT017-multi-shop/product-09.jpg',
    description: '포인티드 토와 5.5cm 적층 가죽 굽을 적용한 스웨이드 앵클부츠입니다.',
    longDescription: '부드러운 송아지 스웨이드로 제작한 포인티드 토 앵클부츠입니다. 5.5cm 높이의 적층 가죽 굽은 안정적인 폭으로 설계했고, 안쪽 지퍼로 편하게 신고 벗을 수 있습니다.\n\n가죽 안감과 충격을 흡수하는 라텍스 깔창을 적용해 착용감을 높였습니다. 앞코는 날렵한 형태를 유지하면서 발볼 공간을 확보했습니다.\n\n스웨이드 소재는 물과 오염에 민감합니다. 착용 전 전용 보호제를 사용하고, 젖었을 때는 그늘에서 충분히 말려 주세요.',
    specs: [
      { label: '갑피 소재', value: '천연 송아지 스웨이드' },
      { label: '안감 가죽', value: '천연 돼지가죽 안감' },
      { label: '굽 높이', value: '5.5cm 적층 가죽 블록 굽' },
      { label: '지퍼 사양', value: 'YKK 알루미늄 숨은 지퍼' },
      { label: '밑창', value: '미끄럼 방지 고무 하프솔' },
      { label: '제조국', value: '스페인 제화 전문 공방' },
      { label: '추천 가이드', value: '정사이즈 권장 · 두꺼운 양말 착용 시 반 사이즈 크게 선택' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '홍유리', rating: 5, date: '2026. 6. 9.', text: '굽이 적당히 넓어서 걸을 때 흔들림 없이 정말 안정적이고 편합니다. 스웨이드 질감도 싸구려 티 안 나고 엄청 촘촘하네요.' },
      { id: 'r2', reviewer: '신지수', rating: 5, date: '2026. 5. 19.', text: '앞코가 뾰족한 편인데도 발볼이 전혀 안 조여서 신기하네요. 라인이 투박하지 않고 다리 선을 예쁘게 뽑아줍니다. 바지나 스커트 다 잘 어울려요.' },
      { id: 'r3', reviewer: '김다은', rating: 4, date: '2026. 5. 27.', text: '스웨이드 부츠라 비 오는 날엔 피해야겠지만, 건조한 가을 겨울철 데일리 슈즈로는 최고입니다. 지퍼가 뻑뻑하지 않고 스무스하게 올라가네요.' },
      { id: 'r4', reviewer: '정수연', rating: 5, date: '2026. 6. 3.', text: '안창 쿠션이 되게 푹신합니다. 굽이 있는 부츠인데도 걷는 동안 충격을 잡아줘서 퇴근길 발바닥 아픈 게 훨씬 덜하네요.' }
    ]
  },
  {
    id: '10',
    name: '플로럴 랩 드레스',
    price: 110,
    rating: 4.7,
    reviewCount: 83,
    category: 'womens',
    tag: '베스트',
    image: '/templates/OHMT017-multi-shop/product-10.jpg',
    description: '가벼운 에코베로 비스코스와 조절 가능한 허리끈을 적용한 플로럴 랩 드레스입니다.',
    longDescription: '가볍고 부드러운 에코베로 비스코스에 자체 플로럴 패턴을 인쇄한 랩 드레스입니다. 허리끈을 체형에 맞게 조절할 수 있으며, V넥과 플러터 소매가 자연스럽게 이어집니다.\n\n통기성이 좋고 부피가 작아 여행지에서 편하게 입기 좋습니다. 안쪽 고정 단추를 더해 움직일 때 가슴 부분이 쉽게 벌어지지 않도록 했습니다.\n\n원단 손상을 줄이기 위해 찬물에 중성세제로 가볍게 손세탁해 주세요.',
    specs: [
      { label: '원단 소재', value: '렌징 에코베로 비스코스 100%' },
      { label: '디자인 패턴', value: '자체 제작 보태니컬 플로럴 패턴' },
      { label: '여밈 사양', value: '조절 가능한 허리끈 랩 디자인' },
      { label: '소매 마감', value: '플러터 소매' },
      { label: '총장 기준', value: '미디 롱 기장 · 총장 약 118cm' },
      { label: '관리 방법', value: '찬물에 중성세제로 가볍게 손세탁' },
      { label: '제조국', value: '포르투갈 의류 전문 공방' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '임다빈', rating: 5, date: '2026. 6. 4.', text: '패턴이 유치하지 않고 잔잔해서 입었을 때 정말 화사해 보여요. 휴가지에서 인생 샷 건졌습니다. 가벼워서 캐리어 무게도 차지 안 해요.' },
      { id: 'r2', reviewer: '정소윤', rating: 4, date: '2026. 5. 16.', text: '가슴 부분 파임 걱정했는데 안쪽 고정 단추 덕분에 움직여도 안 벌어지고 안심이 됩니다. 끈을 꽉 동여매면 허리 라인을 예쁘게 잡아줘요.' },
      { id: 'r3', reviewer: '최지아', rating: 5, date: '2026. 5. 30.', text: '살에 닿는 찰랑거리는 촉감이 진짜 시원하고 기분 좋아요. 구김도 많이 안 가는 편이라 휴가지 원피스로 완전 딱입니다.' },
      { id: 'r4', reviewer: '송혜령', rating: 5, date: '2026. 6. 7.', text: '키가 163인데 종아리 중간 살짝 아래로 내려오는 딱 예쁜 기장감입니다. 바람 불 때 치맛자락 흩날리는 게 진짜 예술이에요.' }
    ]
  },
  {
    id: '11',
    name: '옥스포드 로퍼',
    price: 99,
    originalPrice: 140,
    rating: 4.8,
    reviewCount: 156,
    category: 'footwear',
    tag: '베스트',
    image: '/templates/OHMT017-multi-shop/product-11.jpg',
    description: '은은한 광택의 송아지 가죽과 쿠션 깔창을 적용한 페니 로퍼입니다.',
    longDescription: '세미 글로시 송아지 가죽으로 제작한 클래식 페니 로퍼입니다. 굿이어 웰트 방식으로 갑피와 밑창을 연결해 수선과 밑창 교체가 가능하도록 만들었습니다.\n\n가죽 깔창 아래에 메모리폼을 넣어 바닥의 충격을 줄였고, 손으로 마감한 가죽 밑창에 미끄럼을 줄이는 고무 그립을 더했습니다.\n\n처음에는 가죽이 단단하게 느껴질 수 있습니다. 짧은 시간부터 착용하며 천천히 길들이는 것을 권장합니다.',
    specs: [
      { label: '갑피 소재', value: '세미 광택 송아지 가죽' },
      { label: '제작 방식', value: '수선과 밑창 교체가 가능한 굿이어 웰트' },
      { label: '중창 및 인솔', value: '메모리폼을 넣은 천연 가죽 깔창' },
      { label: '아웃솔 사양', value: '수작업 염색 가죽 밑창 · 미끄럼 방지 고무 그립' },
      { label: '발등 디테일', value: '손바느질 페니 스트랩' },
      { label: '제조국', value: '포르투갈 수제화 전문 공방' },
      { label: '길들이기 가이드', value: '처음 2–3일은 양말과 함께 짧은 시간 착용 권장' }
    ],
    reviewsList: [
      { id: 'r1', reviewer: '송지호', rating: 5, date: '2026. 6. 8.', text: '웰트 스티치 마감이 엄청 정교하고 튼튼해요. 클래식 로퍼의 정석 같은 디자인입니다. 신을수록 빈티지한 주름이 잡혀 더 멋있어지네요.' },
      { id: 'r2', reviewer: '황정민', rating: 4, date: '2026. 5. 23.', text: '처음에는 복스가죽이라 뒤축이 꽤 단단하고 뻑뻑해서 뒤꿈치가 쓸렸는데, 일주일 정도 매일 신으며 길들이니 이제는 맞춘 듯 발에 딱 달라붙어 대단히 편합니다.' },
      { id: 'r3', reviewer: '유동현', rating: 5, date: '2026. 5. 31.', text: '가죽 홍창이라 바닥 걸을 때 또각거리는 경쾌한 소리가 매력적입니다. 발바닥 메모리폼 패드 덕분에 평평한 로퍼치고도 피로도가 낮네요.' },
      { id: 'r4', reviewer: '최승우', rating: 5, date: '2026. 6. 9.', text: '청바지 롤업해서 같이 매치해도 이쁘고 슬랙스 기장 딱 떨어지게 코디해도 너무 세련되었습니다. 마감 품질이 엄청납니다.' }
    ]
  }
]

export const newArrivals = products.filter(p => p.tag === '신상품')
export const bestSellers = products.filter(p => p.tag === '베스트')

export const teamMembers = [
  { id: '1', name: 'Sofia Laurent', role: '크리에이티브 디렉터', image: '/templates/OHMT017-multi-shop/team-01.jpg', instagram: '#', linkedin: '#' },
  { id: '2', name: 'James Avery', role: '디자인 총괄', image: '/templates/OHMT017-multi-shop/team-02.jpg', instagram: '#', linkedin: '#' },
  { id: '3', name: 'Mia Chen', role: '브랜드 전략가', image: '/templates/OHMT017-multi-shop/team-03-v2.jpg', instagram: '#', linkedin: '#' },
  { id: '4', name: 'Elijah Brooks', role: '머천다이징 디렉터', image: '/templates/OHMT017-multi-shop/team-04.jpg', instagram: '#', linkedin: '#' },
]

export const reviews = [
  { id: '1', rating: 5, text: '포장이 꼼꼼했고 가죽과 봉제 상태도 만족스럽습니다. 크기가 부담스럽지 않아 매일 사용하고 있어요.', reviewer: 'Emma W.', product: '레더 크로스바디' },
  { id: '2', rating: 5, text: '골지 니트가 부드럽고 몸에 자연스럽게 맞습니다. 편하게 입으면서도 단정한 느낌이 좋아요.', reviewer: 'Lucas M.', product: '골지 니트 스웨터' },
  { id: '3', rating: 5, text: '배송이 빨랐고 포장도 깔끔했습니다. 선글라스는 사진보다 프레임 질감이 더 마음에 들어요.', reviewer: 'Chloe K.', product: '스퀘어 선글라스' },
  { id: '4', rating: 5, text: '앵클부츠의 라인이 단정하고 굽이 안정적입니다. 오래 걸어도 생각보다 편안했어요.', reviewer: 'Noah R.', product: '앵클 부츠' },
]

export const blogPosts = [
  { id: '1', slug: 'style-minimalist-accessories', title: '미니멀 액세서리를 자연스럽게 매치하는 법', category: '스타일 가이드', date: '2026. 6. 5.', readTime: '5분', image: '/templates/OHMT017-multi-shop/blog-01.jpg', excerpt: '액세서리를 과하지 않게 고르고 옷차림에 자연스럽게 더하는 방법을 소개합니다.' },
  { id: '2', slug: 'sustainable-fashion', title: '오래 입는 옷을 만들기 위한 선택', category: '브랜드 스토리', date: '2026. 5. 28.', readTime: '4분', image: '/templates/OHMT017-multi-shop/blog-02.jpg', excerpt: '소재와 생산량, 제작 파트너를 선택할 때 OHMT가 중요하게 보는 기준을 소개합니다.' },
  { id: '3', slug: 'mens-wardrobe-checklist', title: '남성 기본 옷장 체크리스트', category: '남성 스타일', date: '2026. 5. 15.', readTime: '6분', image: '/templates/OHMT017-multi-shop/blog-03.jpg', excerpt: '자주 입을 수 있는 셔츠와 팬츠, 재킷과 신발을 고르는 기준을 정리했습니다.' },
]
