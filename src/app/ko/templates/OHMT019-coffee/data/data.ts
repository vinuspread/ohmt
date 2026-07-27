export const menuCategories = [
  { id: 'all', label: '전체' },
  { id: 'coffee', label: '커피' },
  { id: 'non-coffee', label: '차·논커피' },
  { id: 'food', label: '디저트·푸드' },
] as const;

export type MenuCategory = 'coffee' | 'non-coffee' | 'food';

export const menuItems = [
  { id: '1', name: '더블 에스프레소', category: 'coffee' as MenuCategory, description: '짙은 단맛과 묵직한 질감, 풍성한 크레마를 즐길 수 있는 더블 샷.', price: 3.50, image: '/templates/OHMT019-coffee/menu-espresso.jpg', options: ['hot'] as ('hot' | 'iced')[], isSignature: true },
  { id: '2', name: '아메리카노', category: 'coffee' as MenuCategory, description: '더블 에스프레소에 뜨거운 물을 더해 깔끔하게 즐기는 커피.', price: 4.00, image: '/templates/OHMT019-coffee/menu-americano.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '3', name: '카푸치노', category: 'coffee' as MenuCategory, description: '더블 에스프레소에 따뜻한 우유와 풍성한 밀크폼을 더한 클래식 커피.', price: 4.50, image: '/templates/OHMT019-coffee/menu-cappuccino.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '4', name: '코르타도', category: 'coffee' as MenuCategory, description: '에스프레소와 따뜻한 우유를 같은 비율로 담아 진하고 부드럽게.', price: 4.00, image: '/templates/OHMT019-coffee/menu-cortado.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '5', name: '플랫 화이트', category: 'coffee' as MenuCategory, description: '더블 리스트레토에 얇고 부드러운 마이크로폼을 더한 커피.', price: 4.50, image: '/templates/OHMT019-coffee/menu-flat-white.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '6', name: '시그니처 라떼', category: 'coffee' as MenuCategory, description: '직접 만든 바닐라 시럽과 에스프레소, 오트밀크를 부드럽게 조합한 라떼.', price: 5.50, image: '/templates/OHMT019-coffee/signature-latte.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[], isSignature: true },
  { id: '7', name: '바닐라 라떼', category: 'coffee' as MenuCategory, description: '은은한 바닐라 향과 에스프레소를 원하는 우유와 함께 즐기는 라떼.', price: 5.50, image: '/templates/OHMT019-coffee/menu-vanilla-latte.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '8', name: '오트밀크 라떼', category: 'coffee' as MenuCategory, description: '오트밀크의 고소함과 자연스러운 단맛이 어우러진 부드러운 라떼.', price: 5.50, image: '/templates/OHMT019-coffee/menu-oat-latte.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '9', name: '카라멜 라떼', category: 'coffee' as MenuCategory, description: '카라멜의 진한 단맛에 에스프레소와 따뜻한 우유를 더한 라떼.', price: 5.50, image: '/templates/OHMT019-coffee/menu-caramel-macchiato.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '10', name: '말차 라떼', category: 'coffee' as MenuCategory, description: '진한 말차와 고소한 오트밀크를 부드럽게 섞은 라떼.', price: 5.50, image: '/templates/OHMT019-coffee/menu-matcha.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '11', name: '콜드브루', category: 'coffee' as MenuCategory, description: '24시간 저온 추출해 부드러운 질감과 초콜릿 같은 풍미를 살린 커피.', price: 5.00, image: '/templates/OHMT019-coffee/menu-cold-brew.jpg', options: ['iced'] as ('hot' | 'iced')[], isSignature: true },
  { id: '12', name: '콜드브루 + 오트', category: 'coffee' as MenuCategory, description: '시그니처 콜드브루에 고소한 오트밀크를 더한 음료.', price: 5.50, image: '/templates/OHMT019-coffee/menu-cold-brew-oat.jpg', options: ['iced'] as ('hot' | 'iced')[] },
  { id: '13', name: '흑설탕 콜드폼', category: 'coffee' as MenuCategory, description: '콜드브루 위에 흑설탕과 바닐라 향의 부드러운 콜드폼을 올린 음료.', price: 6.00, image: '/templates/OHMT019-coffee/menu-cold-foam.jpg', options: ['iced'] as ('hot' | 'iced')[] },
  { id: '14', name: '나이트로 콜드브루', category: 'coffee' as MenuCategory, description: '질소를 주입해 부드러운 거품과 매끄러운 질감을 살린 콜드브루.', price: 6.00, image: '/templates/OHMT019-coffee/menu-nitro.jpg', options: ['iced'] as ('hot' | 'iced')[] },
  { id: '15', name: '히비스커스 티', category: 'non-coffee' as MenuCategory, description: '히비스커스 티에 아가베 시럽과 민트를 더한 상큼한 음료.', price: 4.50, image: '/templates/OHMT019-coffee/menu-hibiscus.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '16', name: '카모마일 허니', category: 'non-coffee' as MenuCategory, description: '은은한 카모마일 향에 국내산 꿀을 더한 따뜻한 차.', price: 4.50, image: '/templates/OHMT019-coffee/menu-chamomile.jpg', options: ['hot'] as ('hot' | 'iced')[] },
  { id: '17', name: '얼그레이 라떼', category: 'non-coffee' as MenuCategory, description: '베르가못 향의 얼그레이에 바닐라와 따뜻한 우유를 더한 티 라떼.', price: 5.00, image: '/templates/OHMT019-coffee/menu-earl-grey.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '18', name: '민트 그린티', category: 'non-coffee' as MenuCategory, description: '유기농 녹차에 민트와 꿀을 가볍게 더한 산뜻한 차.', price: 4.50, image: '/templates/OHMT019-coffee/menu-green-tea.jpg', options: ['hot', 'iced'] as ('hot' | 'iced')[] },
  { id: '19', name: '버터 크루아상', category: 'food' as MenuCategory, description: '겉은 바삭하고 속은 촉촉하게 구운 버터 크루아상.', price: 4.00, image: '/templates/OHMT019-coffee/menu-croissant.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '20', name: '아몬드 크루아상', category: 'food' as MenuCategory, description: '고소한 아몬드 크림과 슬라이스 아몬드를 채운 크루아상.', price: 4.50, image: '/templates/OHMT019-coffee/menu-almond-croissant.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '21', name: '치즈케이크', category: 'food' as MenuCategory, description: '진하고 부드러운 치즈케이크에 새콤한 베리 콩포트를 곁들였습니다.', price: 6.00, image: '/templates/OHMT019-coffee/menu-cake.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '22', name: '바나나 브레드', category: 'food' as MenuCategory, description: '잘 익은 바나나와 호두를 넣어 촉촉하게 구운 바나나 브레드.', price: 4.00, image: '/templates/OHMT019-coffee/menu-banana-bread.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '23', name: '아보카도 토스트', category: 'food' as MenuCategory, description: '구운 사워도우에 아보카도와 방울토마토, 올리브 오일을 올린 메뉴.', price: 8.00, image: '/templates/OHMT019-coffee/menu-avocado-toast.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '24', name: '그래놀라 요거트 볼', category: 'food' as MenuCategory, description: '그릭요거트에 구운 그래놀라와 제철 과일, 꿀을 곁들인 볼.', price: 7.50, image: '/templates/OHMT019-coffee/menu-granola-bowl.jpg', options: [] as ('hot' | 'iced')[] },
  { id: '25', name: '시즌 한정 음료', category: 'coffee' as MenuCategory, description: '계절 재료와 원두로 선보이는 한정 음료입니다. 매장에서 이번 달 메뉴를 확인해 주세요.', price: 6.50, image: '/templates/OHMT019-coffee/hero-drink.jpg', options: ['iced'] as ('hot' | 'iced')[], isSignature: true },
];

export const locations = [
  { id: '1', name: '성수', address: '서울시 성동구 성수이로 45', hours: '월–금 08:00–21:00 · 토–일 09:00–21:00', phone: '02-1234-5678', image: '/templates/OHMT019-coffee/location-seongsu.jpg' },
  { id: '2', name: '이태원', address: '서울시 용산구 이태원로 122', hours: '매일 08:00–22:00', phone: '02-2345-6789', image: '/templates/OHMT019-coffee/location-itaewon.jpg' },
  { id: '3', name: '강남', address: '서울시 강남구 테헤란로 301', hours: '월–금 07:00–21:00 · 토–일 09:00–20:00', phone: '02-3456-7890', image: '/templates/OHMT019-coffee/location-gangnam.jpg' },
  { id: '4', name: '한남', address: '서울시 용산구 한남대로 28', hours: '매일 09:00–21:00', phone: '02-4567-8901', image: '/templates/OHMT019-coffee/location-hannam.jpg' },
  { id: '5', name: '연희', address: '서울시 서대문구 연희맛로 89', hours: '매일 09:00–20:00', phone: '02-5678-9012', image: '/templates/OHMT019-coffee/location-yeonhui.jpg' },
];
