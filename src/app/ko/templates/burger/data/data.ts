export const menuCategories = [
  { id: 'sets',     label: '세트 메뉴' },
  { id: 'burger',   label: '버거' },
  { id: 'chicken',  label: '치킨' },
  { id: 'sides',    label: '사이드' },
  { id: 'desserts', label: '디저트' },
  { id: 'drinks',   label: '음료' },
] as const;

export type MenuCategory = typeof menuCategories[number]['id'];

export const menuItems = [
  // 버거
  { id: '1', name: '클래식 스매시 버거', category: 'burger', description: '더블 비프 패티, 아메리칸 치즈, 피클, 양파, 시크릿 소스를 브리오슈 번에.', price: 12.90, image: '/templates/burger/menu-burger-01.png', isSignature: true, calories: 780 },
  { id: '2', name: '트러플 머쉬룸 스위스', category: 'burger', description: '비프 패티, 트러플 아이올리, 버섯 볶음, 스위스 치즈, 아루굴라.', price: 14.90, image: '/templates/burger/menu-burger-02.png', isSignature: true, calories: 720 },
  { id: '3', name: '스파이시 할라피뇨 크런치', category: 'burger', description: '비프 패티, 페퍼 잭 치즈, 할라피뇨, 크리스피 어니언, 치폴레 마요, 양상추.', price: 13.50, image: '/templates/burger/menu-burger-03.png', isSignature: true, calories: 810 },
  { id: '4', name: '클래식 치즈버거', category: 'burger', description: '싱글 비프 패티, 체다 치즈, 양상추, 토마토, 양파, 피클, 스페셜 소스.', price: 9.90, image: '/templates/burger/menu-burger-01.png', calories: 650 },
  { id: '5', name: '베이컨 BBQ 버거', category: 'burger', description: '비프 패티, 스모크 베이컨, BBQ 소스, 체다 치즈, 어니언 링, 코울슬로.', price: 13.90, image: '/templates/burger/menu-burger-02.png', calories: 890 },
  { id: '6', name: '더블 스택', category: 'burger', description: '두 장의 비프 패티, 더블 치즈, 그릴드 어니언, 머스타드, 케찹.', price: 11.90, image: '/templates/burger/menu-burger-03.png', calories: 920 },
  // 치킨
  { id: '7', name: '크리스피 치킨 클래식', category: 'chicken', description: '버터밀크 프라이드 치킨, 브리오슈 번, 양상추, 토마토, 허브 마요.', price: 11.50, image: '/templates/burger/menu-chicken-01.png', calories: 680 },
  { id: '8', name: '스파이시 치킨 디럭스', category: 'chicken', description: '매콤한 글레이즈 치킨, 슬로, 피클, 랜치 드레싱.', price: 12.50, image: '/templates/burger/menu-chicken-02.png', calories: 710 },
  { id: '9', name: '그릴드 치킨 클럽', category: 'chicken', description: '그릴드 치킨 가슴살, 스모크 베이컨, 아보카도, 토마토, 갈릭 아이올리.', price: 13.50, image: '/templates/burger/menu-chicken-03.png', calories: 640 },
  // 세트
  { id: '10', name: '클래식 세트', category: 'sets', description: '클래식 치즈버거 + 레귤러 프라이 + 음료 선택.', price: 15.90, image: '/templates/burger/set-classic.png', calories: 980 },
  { id: '11', name: '스매시 세트', category: 'sets', description: '클래식 스매시 버거 + 트러플 파마산 프라이 + 음료 선택.', price: 18.90, image: '/templates/burger/set-smash.png', calories: 1150 },
  { id: '12', name: '치킨 세트', category: 'sets', description: '크리스피 치킨 클래식 + 고구마 프라이 + 음료 선택.', price: 17.50, image: '/templates/burger/set-chicken.png', calories: 1020 },
  { id: '25', name: '스파이시 세트', category: 'sets', description: '스파이시 할라피뇨 크런치 + 크리스피 어니언 링 + 음료 선택.', price: 19.90, image: '/templates/burger/set-smash.png', calories: 1200 },
  { id: '26', name: 'BBQ 세트', category: 'sets', description: '베이컨 BBQ 버거 + 레귤러 프라이 + 음료 선택.', price: 19.50, image: '/templates/burger/set-classic.png', calories: 1280 },
  { id: '27', name: '더블 세트', category: 'sets', description: '더블 스택 + 트러플 파마산 프라이 + 쉐이크 또는 음료 선택.', price: 21.90, image: '/templates/burger/set-smash.png', calories: 1420 },
  // 사이드
  { id: '13', name: '트러플 파마산 프라이', category: 'sides', description: '바삭한 프라이에 트러플 오일, 파마산 치즈, 신선한 허브.', price: 6.90, image: '/templates/burger/menu-side-01.png', calories: 450 },
  { id: '14', name: '크리스피 어니언 링', category: 'sides', description: '맥주 반죽 어니언 링과 스모키 치폴레 딥 소스.', price: 5.90, image: '/templates/burger/menu-side-01.png', calories: 380 },
  { id: '15', name: '고구마 프라이', category: 'sides', description: '바삭한 고구마 프라이와 허니 스리라차 딥.', price: 6.50, image: '/templates/burger/menu-side-01.png', calories: 410 },
  // 디저트
  { id: '16', name: '바닐라 소프트아이스크림', category: 'desserts', description: '크리미한 소프트 바닐라 아이스크림, 와플콘에 담아.', price: 3.90, image: '/templates/burger/menu-dessert-01.png', calories: 280 },
  { id: '17', name: '초콜릿 브라우니 선데', category: 'desserts', description: '따뜻한 초콜릿 브라우니, 소프트 아이스크림, 핫 퍼지, 휘핑크림.', price: 6.50, image: '/templates/burger/menu-dessert-02.png', calories: 520 },
  { id: '18', name: '딸기 치즈케이크', category: 'desserts', description: '하우스메이드 치즈케이크 슬라이스, 신선한 딸기 콤포트.', price: 5.90, image: '/templates/burger/menu-dessert-03.png', calories: 440 },
  // 음료
  { id: '19', name: '바닐라 쉐이크', category: 'drinks', description: '핸드 스핀 바닐라 밀크쉐이크, 스테인리스 컵에 휘핑크림과 체리.', price: 7.50, image: '/templates/burger/menu-shake-01.png', calories: 520 },
  { id: '20', name: '초콜릿 쉐이크', category: 'drinks', description: '진한 초콜릿 밀크쉐이크, 다크 초콜릿 드리즐과 휘핑크림.', price: 7.50, image: '/templates/burger/menu-shake-02.png', calories: 580 },
  { id: '21', name: '딸기 쉐이크', category: 'drinks', description: '상큼한 딸기 밀크쉐이크, 생딸기 가니쉬와 휘핑크림.', price: 7.50, image: '/templates/burger/menu-shake-03.png', calories: 540 },
  { id: '22', name: '크래프트 레모네이드', category: 'drinks', description: '직접 짜낸 레모네이드, 얼음과 레몬 슬라이스, 민트.', price: 4.50, image: '/templates/burger/menu-drink-02.png', calories: 140 },
  { id: '23', name: '클래식 콜라', category: 'drinks', description: '차가운 콜라, 톨 글라스에 탄산 가득.', price: 3.50, image: '/templates/burger/menu-drink-01.png', calories: 150 },
  { id: '24', name: '크래프트 루트비어', category: 'drinks', description: '소규모 양조 루트비어, 프로스티드 머그에 제공.', price: 4.00, image: '/templates/burger/menu-drink-01.png', calories: 170 },
];

export const locations = [
  { id: '1', city: '서울', address: '서울 종로구 광화문로 45', hours: '매일 11AM-10PM', phone: '02-1234-5678' },
  { id: '2', city: '뉴욕', address: '350 Fifth Avenue, New York, NY 10118', hours: '매일 11AM-11PM', phone: '212-123-4567' },
  { id: '3', city: '도쿄', address: '2-6-1 Ginza, Chuo-ku, Tokyo', hours: '매일 11AM-10PM', phone: '03-1234-5678' },
  { id: '4', city: '런던', address: '29 Camden High Street, London NW1 7JE', hours: '매일 12PM-10PM', phone: '020-7123-4567' },
  { id: '5', city: '두바이', address: 'Sheikh Zayed Road, Downtown Dubai', hours: '매일 11AM-12AM', phone: '04-123-4567' },
  { id: '6', city: '싱가포르', address: '88 Orchard Road, Singapore 238859', hours: '매일 11AM-10PM', phone: '6234-5678' },
];

export const testimonials = [
  { id: '1', name: 'Sarah Kim', text: '트러플 머쉬룸 버거는 정말 인생이 바뀌는 맛입니다. 단언컨대 지금까지 먹어본 버거 중 최고예요.', location: '서울' },
  { id: '2', name: 'James Park', text: '드디어 제대로 된 버거 맛집을 찾았습니다. 좋은 재료, 완벽한 패티, 감자튀김도 중독성이 있어요.', location: '뉴욕' },
  { id: '3', name: 'Yuki Tanaka', text: '음식만큼이나 분위기도 좋아요. 깔끔하고 모던한 인테리어, 직원들도 친절합니다.', location: '도쿄' },
];
