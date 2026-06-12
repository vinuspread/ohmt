export const categories = [
  { id: 'accessories', name: '액세서리', image: '/templates/multi-shop/category-accessories.jpg' },
  { id: 'footwear', name: '신발', image: '/templates/multi-shop/category-footwear.jpg' },
  { id: 'womens', name: '여성', image: '/templates/multi-shop/category-women.jpg' },
  { id: 'mens', name: '남성', image: '/templates/multi-shop/category-men.jpg' },
]

export const products = [
  { id: '1', name: '스퀘어 선글라스', price: 29, originalPrice: 45, rating: 4.8, reviewCount: 124, category: 'accessories', tag: 'New', image: '/templates/multi-shop/product-01.jpg', description: '미니멀한 스퀘어 프레임 선글라스에 UV400 보호 기능. 가벼운 아세테이트 소재로 하루 종일 편안하게.' },
  { id: '2', name: '캔버스 토트백', price: 45, rating: 4.6, reviewCount: 89, category: 'accessories', tag: 'New', image: '/templates/multi-shop/product-02.jpg', description: '강화 스티칭이 적용된 유기농 코튼 캔버스 토트백. 넉넉한 내부 공간으로 데일리 필수품을 모두 수납.' },
  { id: '3', name: '릴라 리본 스커트', price: 149, originalPrice: 199, rating: 4.9, reviewCount: 57, category: 'womens', tag: 'New', image: '/templates/multi-shop/product-03.jpg', description: '허리에 섬세한 리본 디테일이 돋보이는 우아한 A라인 스커트. 프리미엄 피치 새틴으로 제작.' },
  { id: '4', name: '미니멀 레더 스니커즈', price: 89, rating: 4.7, reviewCount: 203, category: 'footwear', tag: 'New', image: '/templates/multi-shop/product-04.jpg', description: '쿠셔닝 인솔이 적용된 슬릭한 레더 스니커즈. 다양한 스타일에 매치되는 활용도 높은 디자인.' },
  { id: '5', name: '클래식 린넨 셔츠', price: 65, originalPrice: 89, rating: 4.5, reviewCount: 145, category: 'mens', tag: 'New', image: '/templates/multi-shop/product-05.jpg', description: '자개 단추가 달린 루즈핏 린넨 셔츠. 따뜻한 날씨에 완벽한 통기성 원단.' },
  { id: '6', name: '골지 니트 스웨터', price: 95, rating: 4.9, reviewCount: 312, category: 'womens', tag: 'Best', image: '/templates/multi-shop/product-06.jpg', description: '루즈한 실루엣의 가는 골지 니트 스웨터. 부드러운 메리노 울 블렌드.' },
  { id: '7', name: '슬림 치노 팬츠', price: 75, originalPrice: 110, rating: 4.6, reviewCount: 178, category: 'mens', tag: 'Best', image: '/templates/multi-shop/product-07.jpg', description: '스트레치 코튼 트윌 소재의 테일러드 슬림핏 치노. 클래식한 5포켓 스타일링.' },
  { id: '8', name: '레더 크로스바디', price: 120, rating: 4.8, reviewCount: 94, category: 'accessories', tag: 'Best', image: '/templates/multi-shop/product-08.jpg', description: '길이 조절 가능한 스트랩의 이탈리안 레더 크로스바디 백. 미니멀한 실루엣에 히든 포켓.' },
  { id: '9', name: '앵클 부츠', price: 135, originalPrice: 180, rating: 4.9, reviewCount: 267, category: 'footwear', tag: 'Best', image: '/templates/multi-shop/product-09.jpg', description: '스택드 레더 힐의 포인티드 토 앵클 부츠. 사이드 지퍼로 간편한 착용.' },
  { id: '10', name: '플로럴 랩 드레스', price: 110, rating: 4.7, reviewCount: 83, category: 'womens', tag: 'Best', image: '/templates/multi-shop/product-10.jpg', description: '커스텀 플로럴 프린트의 랩 드레스. 가벼운 비스코스 소재에 플러터링한 타이 웨이스트와 V넥라인.' },
  { id: '11', name: '옥스포드 로퍼', price: 99, originalPrice: 140, rating: 4.8, reviewCount: 156, category: 'footwear', tag: 'Best', image: '/templates/multi-shop/product-11.jpg', description: '광택 처리된 송아지 가죽의 클래식 페니 로퍼. 쿠셔닝 풋베드와 내구성 좋은 레더 솔.' },
]

export const newArrivals = products.filter(p => p.tag === 'New')
export const bestSellers = products.filter(p => p.tag === 'Best')

export const teamMembers = [
  { id: '1', name: 'Sofia Laurent', role: '크리에이티브 디렉터', image: '/templates/multi-shop/team-01.jpg', instagram: '#', linkedin: '#' },
  { id: '2', name: 'James Avery', role: '디자인 총괄', image: '/templates/multi-shop/team-02.jpg', instagram: '#', linkedin: '#' },
  { id: '3', name: 'Mia Chen', role: '브랜드 전략가', image: '/templates/multi-shop/team-03.jpg', instagram: '#', linkedin: '#' },
]

export const reviews = [
  { id: '1', rating: 5, text: '품질이 정말 뛰어납니다. 레더 크로스바디가 완벽하게 포장되어 도착했고, 이제 제 데일리 필수품이 되었어요.', reviewer: 'Emma W.', product: '레더 크로스바디' },
  { id: '2', rating: 5, text: '스타일과 편안함을 모두 잡은 패션 브랜드를 드디어 찾았어요. 골지 니트 스웨터가 아름답게 맞아요.', reviewer: 'Lucas M.', product: '골지 니트 스웨터' },
  { id: '3', rating: 5, text: '빠른 배송, 고급스러운 패키징, 그리고 스퀘어 선글라스는 직접 보니 더 좋아요.', reviewer: 'Chloe K.', product: '스퀘어 선글라스' },
  { id: '4', rating: 5, text: '앵클 부츠는 정말 가치 있는 투자예요. 우아한 디자인에 믿을 수 없을 정도로 편안해요.', reviewer: 'Noah R.', product: '앵클 부츠' },
]

export const blogPosts = [
  { id: '1', slug: 'style-minimalist-accessories', title: '이번 시즌 미니멀 액세서리 스타일링하는 방법', category: '스타일 가이드', date: '2026년 6월 5일', readTime: '5분', image: '/templates/multi-shop/blog-01.jpg', excerpt: '절제된 우아함의 미학을 경험하세요. 어떤 룩도 돋보이게 만드는 미니멀 액세서리 큐레이티드 가이드.' },
  { id: '2', slug: 'sustainable-fashion', title: '지속 가능한 패션: 우리 브랜드의 약속', category: '브랜드 스토리', date: '2026년 5월 28일', readTime: '4분', image: '/templates/multi-shop/blog-02.jpg', excerpt: '지속 가능한 실천을 향한 우리의 여정과 의미 있는 패션을 재정의하는 방법을 알아보세요.' },
  { id: '3', slug: 'mens-wardrobe-checklist', title: '남성 필수 옷장 체크리스트', category: '남성 가이드', date: '2026년 5월 15일', readTime: '6분', image: '/templates/multi-shop/blog-03.jpg', excerpt: '시간을 초월한 옷장을 구성하는 필수 아이템 체크리스트로 클래식한 스타일을 완성하세요.' },
]

