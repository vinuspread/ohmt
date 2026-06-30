export const menuCategories = [
  { id: 'all', label: '전체' },
  { id: 'coffee', label: '커피' },
  { id: 'non-coffee', label: '논커피' },
  { id: 'food', label: '푸드' },
] as const;

export type MenuCategory = 'coffee' | 'non-coffee' | 'food';

export const menuItems = [
  { id: '1', name: '더블 에스프레소', category: 'coffee' as MenuCategory, description: '꿀처럼 달콤한 바디감과 오래가는 크레마의 진한 더블 샷.', price: 3.50, image: '/templates/OHMT019-coffee/signature-espresso.jpg', options: ['hot'] as ('hot' | 'iced')[], isSignature: true },
  { id: '2', name: '아메리카노', category: 'coffee' as MenuCategory, description: '강렬한 에스프레소를 뜨거운 물로 깔끔하게 마무리.', price: 4.00, image: '/templates/OHMT019-coffee/menu-americano.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '3', name: '카푸치노', category: 'coffee' as MenuCategory, description: '더블 에스프레소에 스팀 밀크와 진한 폼을 더한 클래식.', price: 4.50, image: '/templates/OHMT019-coffee/menu-cappuccino.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '4', name: '코르타도', category: 'coffee' as MenuCategory, description: '에스프레소와 따뜻한 우유가 작은 잔에 조화롭게.', price: 4.00, image: '/templates/OHMT019-coffee/signature-espresso.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '5', name: '플랫 화이트', category: 'coffee' as MenuCategory, description: '더블 리스트레토 위에 벨벳 같은 마이크로폼을 부은 한 잔.', price: 4.50, image: '/templates/OHMT019-coffee/menu-americano.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '6', name: '시그니처 라떼', category: 'coffee' as MenuCategory, description: '하우스 메이드 바닐라 시럽과 에스프레소, 오트밀크의 완벽한 조화.', price: 5.50, image: '/templates/OHMT019-coffee/signature-latte.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[], isSignature: true },
  { id: '7', name: '바닐라 라떼', category: 'coffee' as MenuCategory, description: '취향에 맞는 우유로 즐기는 클래식 바닐라 라떼.', price: 5.50, image: '/templates/OHMT019-coffee/menu-vanilla-latte.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '8', name: '오트밀크 라떼', category: 'coffee' as MenuCategory, description: '자연스러운 단맛이 매력적인 부드러운 오트밀크 라떼.', price: 5.50, image: '/templates/OHMT019-coffee/signature-latte.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '9', name: '카라멜 라떼', category: 'coffee' as MenuCategory, description: '버터리한 카라멜 시럽이 스팀 밀크와 에스프레소에 스며든.', price: 5.50, image: '/templates/OHMT019-coffee/menu-vanilla-latte.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '10', name: '말차 라떼', category: 'coffee' as MenuCategory, description: '의식용 말차를 오트밀크와 부드럽게 섞은 한 잔.', price: 5.50, image: '/templates/OHMT019-coffee/menu-matcha.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '11', name: '콜드브루', category: 'coffee' as MenuCategory, description: '24시간 천천히 추출한 매끄럽고 초콜릿 같은 풍미.', price: 5.00, image: '/templates/OHMT019-coffee/signature-coldbrew.jpg', options: ['iced'] as ('hot' | 'iced')[], isSignature: true },
  { id: '12', name: '콜드브루 + 오트', category: 'coffee' as MenuCategory, description: '시그니처 콜드브루에 부드러운 오트밀크를 더한.', price: 5.50, image: '/templates/OHMT019-coffee/signature-coldbrew.jpg', options: ['iced'] as ('hot' | 'iced')[] },
  { id: '13', name: '흑설탕 콜드폼', category: 'coffee' as MenuCategory, description: '콜드브루 위에 흑설탕 바닐라 콜드폼을 얹은.', price: 6.00, image: '/templates/OHMT019-coffee/menu-cold-foam.jpg', options: ['iced'] as ('hot' | 'iced')[] },
  { id: '14', name: '나이트로 콜드브루', category: 'coffee' as MenuCategory, description: '질소를 주입해 크리미한 거품이 일품인 콜드브루.', price: 6.00, image: '/templates/OHMT019-coffee/signature-coldbrew.jpg', options: ['iced'] as ('hot' | 'iced')[] },
  { id: '15', name: '히비스커스 티', category: 'non-coffee' as MenuCategory, description: '히비스커스 아이스티에 아가베와 민트로 상쾌하게.', price: 4.50, image: '/templates/OHMT019-coffee/menu-tea.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '16', name: '카모마일 허니', category: 'non-coffee' as MenuCategory, description: '국산 꿀과 함께하는 편안한 카모마일 티.', price: 4.50, image: '/templates/OHMT019-coffee/menu-tea.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '17', name: '얼그레이 라떼', category: 'non-coffee' as MenuCategory, description: '베르가못 홍차 라떼에 바닐라와 스팀 밀크를 더한.', price: 5.00, image: '/templates/OHMT019-coffee/menu-tea.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '18', name: '민트 그린티', category: 'non-coffee' as MenuCategory, description: '유기농 녹차에 민트와 꿀을 살짝 더한.', price: 4.50, image: '/templates/OHMT019-coffee/menu-tea.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '19', name: '버터 크루아상', category: 'food' as MenuCategory, description: '황금빛 바삭한 프렌치 스타일 크루아상.', price: 4.00, image: '/templates/OHMT019-coffee/menu-croissant.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '20', name: '아몬드 크루아상', category: 'food' as MenuCategory, description: '아몬드 크림과 슬라이스 아몬드가 가득한 크루아상.', price: 4.50, image: '/templates/OHMT019-coffee/menu-croissant.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '21', name: '치즈케이크', category: 'food' as MenuCategory, description: '베리 콩포트와 함께하는 부드러운 뉴욕 스타일 치즈케이크.', price: 6.00, image: '/templates/OHMT019-coffee/menu-cake.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '22', name: '바나나 로프', category: 'food' as MenuCategory, description: '호두가 듬뿍 들어간 촉촉한 바나나 브레드.', price: 4.00, image: '/templates/OHMT019-coffee/menu-cake.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '23', name: '아보카도 토스트', category: 'food' as MenuCategory, description: '사워도우 위에 아보카도, 방울토마토, 올리브 오일.', price: 8.00, image: '/templates/OHMT019-coffee/menu-croissant.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '24', name: '그래놀라 볼', category: 'food' as MenuCategory, description: '그릭요거트와 제철 과일, 꿀을 곁들인 토스트 그래놀라.', price: 7.50, image: '/templates/OHMT019-coffee/menu-cake.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '25', name: '시즌 스페셜', category: 'coffee' as MenuCategory, description: '바리스타가 선정하는 시즌 한정 메뉴. 이달의 브루를 물어보세요.', price: 6.50, image: '/templates/OHMT019-coffee/hero-drink.jpg', options: ['iced'] as ('hot' | 'iced')[], isSignature: true },
];

export const locations = [
  { id: '1', name: '성수', address: '서울시 성동구 성수이로 45', hours: '월-금 08:00 - 21:00, 토-일 09:00 - 21:00', phone: '02-1234-5678', image: '/templates/OHMT019-coffee/location-seongsu.jpg' },
  { id: '2', name: '이태원', address: '서울시 용산구 이태원로 122', hours: '월-일 08:00 - 22:00', phone: '02-2345-6789', image: '/templates/OHMT019-coffee/location-itaewon.jpg' },
  { id: '3', name: '강남', address: '서울시 강남구 테헤란로 301', hours: '월-금 07:00 - 21:00, 토-일 09:00 - 20:00', phone: '02-3456-7890', image: '/templates/OHMT019-coffee/location-gangnam.jpg' },
  { id: '4', name: '한남', address: '서울시 용산구 한남대로 28', hours: '월-일 09:00 - 21:00', phone: '02-4567-8901', image: '/templates/OHMT019-coffee/location-hannam.jpg' },
  { id: '5', name: '연희', address: '서울시 서대문구 연희맛로 89', hours: '월-일 09:00 - 20:00', phone: '02-5678-9012', image: '/templates/OHMT019-coffee/location-yeonhui.jpg' },
];
