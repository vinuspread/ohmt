-- Oh My Template - Seed Data
-- Supabase SQL Editor에서 실행 (slug, lang) 단위로 en/ko 행을 각각 생성
-- 총 27개 템플릿 × 2 (en/ko) = 54행

insert into templates (slug, lang, name, category, description, thumbnail_url, price, status, sort_order, is_featured) values

-- 1. Airline
('airline', 'en', 'Airline', 'hospitality', 'Premium airline booking and travel experience template', '/templates/airline/og-image.jpg', 0, 'published', 1, false),
('airline', 'ko', '에어라인', 'hospitality', '프리미엄 항공 예약 및 여행 경험 템플릿', '/templates/airline/og-image.jpg', 0, 'published', 1, false),

-- 2. Architecture
('architecture', 'en', 'Architecture Portfolio', 'portfolio', 'A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.', '/templates/architecture/og-image.jpg', 0, 'published', 2, false),
('architecture', 'ko', '아키텍처 포트폴리오', 'portfolio', '에디토리얼 타이포그래피와 몰입감 있는 비주얼 스토리텔링의 건축 포트폴리오 템플릿.', '/templates/architecture/og-image.jpg', 0, 'published', 2, false),

-- 3. Burger
('burger', 'en', 'Burger', 'hospitality', 'Premium burger restaurant experience template', '/templates/burger/og-image.jpg', 0, 'published', 3, false),
('burger', 'ko', '버거', 'hospitality', '프리미엄 버거 레스토랑 경험 템플릿', '/templates/burger/og-image.jpg', 0, 'published', 3, false),

-- 4. Car
('car', 'en', 'Car Showroom', 'retail', 'Luxury car showroom and model showcase template', '/templates/car/og-image.jpg', 0, 'published', 4, false),
('car', 'ko', '자동차 쇼룸', 'retail', '럭셔리 자동차 쇼룸 및 모델 소개 템플릿', '/templates/car/og-image.jpg', 0, 'published', 4, false),

-- 5. Coffee
('coffee', 'en', 'Coffee', 'hospitality', 'Premium coffee shop & roastery experience template', '/templates/coffee/og-image.jpg', 0, 'published', 5, false),
('coffee', 'ko', '커피', 'hospitality', '프리미엄 커피숍 & 로스터리 경험 템플릿', '/templates/coffee/og-image.jpg', 0, 'published', 5, false),

-- 6. Cosmetic
('cosmetic', 'en', 'Cosmetic Store', 'lifestyle', 'Beauty and cosmetic brand store template', '/templates/cosmetic/og-image.jpg', 0, 'published', 6, false),
('cosmetic', 'ko', '코스메틱 스토어', 'lifestyle', '뷰티 코스메틱 브랜드 스토어 템플릿', '/templates/cosmetic/og-image.jpg', 0, 'published', 6, false),

-- 7. Dashboard
('dashboard', 'en', 'Dashboard', 'service', 'Analytics and business intelligence dashboard template', '/templates/dashboard/og-image.jpg', 0, 'published', 7, true),
('dashboard', 'ko', '대시보드', 'service', '분석 및 비즈니스 인텔리전스 대시보드 템플릿', '/templates/dashboard/og-image.jpg', 0, 'published', 7, true),

-- 8. Docs
('docs', 'en', 'Documentation', 'service', 'Documentation workspace and knowledge base template', '/templates/docs/og-image.jpg', 0, 'published', 8, false),
('docs', 'ko', '문서 시스템', 'service', '문서 협업 워크스페이스 및 지식 베이스 템플릿', '/templates/docs/og-image.jpg', 0, 'published', 8, false),

-- 9. Exhibition
('exhibition', 'en', 'Exhibition', 'portfolio', 'Museum and art exhibition showcase template', '/templates/exhibition/og-image.jpg', 0, 'published', 9, true),
('exhibition', 'ko', '전시관', 'portfolio', '미술관 및 전시 쇼케이스 템플릿', '/templates/exhibition/og-image.jpg', 0, 'published', 9, true),

-- 10. Fashion
('fashion', 'en', 'Fashion Store', 'lifestyle', 'Elegant fashion brand store and lookbook template', '/templates/fashion/og-image.jpg', 0, 'published', 10, false),
('fashion', 'ko', '패션 스토어', 'lifestyle', '엘레강트한 패션 브랜드 스토어 및 룩북 템플릿', '/templates/fashion/og-image.jpg', 0, 'published', 10, false),

-- 11. Furniture
('furniture', 'en', 'Furniture Modern', 'retail', 'Clean and modern furniture store template', '/templates/furniture/og-image.jpg', 0, 'published', 11, false),
('furniture', 'ko', '퍼니처 모던', 'retail', '깔끔하고 현대적인 가구 스토어 템플릿', '/templates/furniture/og-image.jpg', 0, 'published', 11, false),

-- 12. Game
('game', 'en', 'Game Studio', 'lifestyle', 'Premium game studio & development showcase template', '/templates/game/og-image.jpg', 0, 'published', 12, false),
('game', 'ko', '게임 스튜디오', 'lifestyle', '프리미엄 게임 스튜디오 & 개발 쇼케이스 템플릿', '/templates/game/og-image.jpg', 0, 'published', 12, false),

-- 13. Hotel
('hotel', 'en', 'Hotel', 'hospitality', 'Premium luxury hotel & resort experience template', '/templates/hotel/og-image.jpg', 0, 'published', 13, false),
('hotel', 'ko', '호텔', 'hospitality', '프리미엄 럭셔리 호텔 & 리조트 경험 템플릿', '/templates/hotel/og-image.jpg', 0, 'published', 13, false),

-- 14. IR
('ir', 'en', 'IR', 'corporate', 'Investor relations and financial reporting template', '/templates/ir/og-image.jpg', 0, 'published', 14, false),
('ir', 'ko', 'IR', 'corporate', '투자자 관계 및 재무 보고 템플릿', '/templates/ir/og-image.jpg', 0, 'published', 14, false),

-- 15. Jewelry
('jewelry', 'en', 'Jewelry', 'lifestyle', 'Luxury jewelry brand store template', '/templates/jewelry/og-image.jpg', 0, 'published', 15, false),
('jewelry', 'ko', '주얼리', 'lifestyle', '럭셔리 주얼리 브랜드 스토어 템플릿', '/templates/jewelry/og-image.jpg', 0, 'published', 15, false),

-- 16. Kids Education
('kids-education', 'en', 'Kids Academy', 'service', 'Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.', '/templates/kids-education/og-image.jpg', 0, 'published', 16, false),
('kids-education', 'ko', '키즈 아카데미', 'service', '놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 만나보세요.', '/templates/kids-education/og-image.jpg', 0, 'published', 16, false),

-- 17. Magazine
('magazine', 'en', 'Magazine', 'media', 'Editorial magazine and content publishing template', '/templates/magazine/og-image.jpg', 0, 'published', 17, false),
('magazine', 'ko', '매거진', 'media', '에디토리얼 매거진 및 콘텐츠 퍼블리싱 템플릿', '/templates/magazine/og-image.jpg', 0, 'published', 17, false),

-- 18. Multi Shop
('multi-shop', 'en', 'Multi Shop', 'retail', 'Multi-category shopping mall template', '/templates/multi-shop/og-image.jpg', 0, 'published', 18, false),
('multi-shop', 'ko', '멀티샵', 'retail', '멀티 카테고리 쇼핑몰 템플릿', '/templates/multi-shop/og-image.jpg', 0, 'published', 18, false),

-- 19. Museum
('museum', 'en', 'Museum', 'portfolio', 'Art museum and cultural institution showcase template', '/templates/museum/og-image.jpg', 0, 'published', 19, false),
('museum', 'ko', '뮤지엄', 'portfolio', '미술관 및 문화 기관 쇼케이스 템플릿', '/templates/museum/og-image.jpg', 0, 'published', 19, false),

-- 20. Newspaper
('newspaper', 'en', 'Newspaper', 'media', 'Online newspaper and news portal template', '/templates/newspaper/og-image.jpg', 0, 'published', 20, false),
('newspaper', 'ko', '신문', 'media', '온라인 신문 및 뉴스 포털 템플릿', '/templates/newspaper/og-image.jpg', 0, 'published', 20, false),

-- 21. Portfolio
('portfolio', 'en', 'Portfolio', 'portfolio', 'Creative portfolio and personal branding template', '/templates/portfolio/og-image.jpg', 0, 'published', 21, false),
('portfolio', 'ko', '포트폴리오', 'portfolio', '크리에이티브 포트폴리오 및 퍼스널 브랜딩 템플릿', '/templates/portfolio/og-image.jpg', 0, 'published', 21, false),

-- 22. Sneaker
('sneaker', 'en', 'Sneaker Store', 'retail', 'Sneaker and streetwear culture store template', '/templates/sneaker/og-image.jpg', 0, 'published', 22, false),
('sneaker', 'ko', '스니커 스토어', 'retail', '스니커 및 스트리트웨어 문화 스토어 템플릿', '/templates/sneaker/og-image.jpg', 0, 'published', 22, false),

-- 23. Spa
('spa', 'en', 'Spa Wellness', 'lifestyle', 'Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.', '/templates/spa/og-image.jpg', 0, 'published', 23, false),
('spa', 'ko', '스파 웰니스', 'lifestyle', '다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.', '/templates/spa/og-image.jpg', 0, 'published', 23, false),

-- 24. Studio
('studio', 'en', 'Studio', 'portfolio', 'Creative studio and project showcase template', '/templates/studio/og-image.jpg', 0, 'published', 24, true),
('studio', 'ko', '스튜디오', 'portfolio', '크리에이티브 스튜디오 및 프로젝트 쇼케이스 템플릿', '/templates/studio/og-image.jpg', 0, 'published', 24, true),

-- 25. Technology
('technology', 'en', 'Technology - Robotflow', 'corporate', 'AI robotics company and technology showcase template', '/templates/technology/og-image.jpg', 0, 'published', 25, false),
('technology', 'ko', '테크놀로지 - 로봇플로우', 'corporate', 'AI 로봇 기업 및 기술 쇼케이스 템플릿', '/templates/technology/og-image.jpg', 0, 'published', 25, false),

-- 26. Wedding
('wedding', 'en', 'Wedding', 'lifestyle', 'Timeless and authentic wedding photography template with documentary style and fine art elegance.', '/templates/wedding/og-image.jpg', 0, 'published', 26, false),
('wedding', 'ko', '루멘 웨딩', 'lifestyle', '현실적이고 감성적인 다큐멘터리 스타일로 영원한 사랑을 기록하는 웨딩 사진작가 포트폴리오 템플릿.', '/templates/wedding/og-image.jpg', 0, 'published', 26, false),

-- 27. Yoga
('yoga', 'en', 'Yoga', 'lifestyle', 'Find your inner peace with premium yoga and wellness classes template', '/templates/yoga/og-image.jpg', 0, 'published', 27, false),
('yoga', 'ko', '요가', 'lifestyle', '프리미엄 요가 및 웰니스 클래스로 일상의 균형을 되찾는 템플릿', '/templates/yoga/og-image.jpg', 0, 'published', 27, false)

on conflict (slug, lang) do update set
  name = excluded.name,
  category = excluded.category,
  description = excluded.description,
  thumbnail_url = excluded.thumbnail_url,
  status = excluded.status,
  sort_order = excluded.sort_order,
  is_featured = excluded.is_featured,
  updated_at = now();
