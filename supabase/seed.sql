-- Oh My Template - Seed Data
-- Supabase SQL Editor에서 실행 (slug, lang) 단위로 en/ko 행을 각각 생성
-- 총 31개 템플릿 x 2 (en/ko) = 62행

delete from templates
where slug in (
  'fashion',
  'jewelry',
  'exhibition',
  'furniture',
  'sneaker',
  'studio',
  'portfolio',
  'airline',
  'car',
  'cosmetic',
  'ir',
  'magazine',
  'newspaper',
  'docs',
  'dashboard',
  'technology',
  'multi-shop',
  'burger',
  'coffee',
  'hotel',
  'museum',
  'yoga',
  'game',
  'kids-education',
  'wedding',
  'spa',
  'architecture',
  'ev',
  'fitness',
  'resort',
  'luma-camera'
);

insert into templates (slug, lang, template_key, name, category, description, thumbnail_url, price, status, sort_order, is_featured) values

-- 1. Fashion
('OHMT001-fashion', 'en', 'OHMT001', 'Fashion Store', 'lifestyle', 'Elegant fashion brand store and lookbook template', '/templates/OHMT001-fashion/og-image.jpg', 0, 'published', 1, false),
('OHMT001-fashion', 'ko', 'OHMT001', '패션 스토어', 'lifestyle', '엘레강트한 패션 브랜드 스토어 및 룩북 템플릿', '/templates/OHMT001-fashion/og-image.jpg', 0, 'published', 1, false),

-- 2. Jewelry
('OHMT002-jewelry', 'en', 'OHMT002', 'Jewelry', 'lifestyle', 'Luxury jewelry brand store template', '/templates/OHMT002-jewelry/og-image.jpg', 0, 'published', 2, false),
('OHMT002-jewelry', 'ko', 'OHMT002', '주얼리', 'lifestyle', '럭셔리 주얼리 브랜드 스토어 템플릿', '/templates/OHMT002-jewelry/og-image.jpg', 0, 'published', 2, false),

-- 3. Exhibition
('OHMT003-exhibition', 'en', 'OHMT003', 'Exhibition', 'portfolio', 'Museum and art exhibition showcase template', '/templates/OHMT003-exhibition/og-image.jpg', 0, 'published', 3, true),
('OHMT003-exhibition', 'ko', 'OHMT003', '전시관', 'portfolio', '미술관 및 전시 쇼케이스 템플릿', '/templates/OHMT003-exhibition/og-image.jpg', 0, 'published', 3, true),

-- 4. Furniture
('OHMT004-furniture', 'en', 'OHMT004', 'Furniture Modern', 'retail', 'Clean and modern furniture store template', '/templates/OHMT004-furniture/og-image.jpg', 0, 'published', 4, false),
('OHMT004-furniture', 'ko', 'OHMT004', '퍼니처 모던', 'retail', '깔끔하고 현대적인 가구 스토어 템플릿', '/templates/OHMT004-furniture/og-image.jpg', 0, 'published', 4, false),

-- 5. Sneaker
('OHMT005-sneaker', 'en', 'OHMT005', 'Sneaker Store', 'retail', 'Sneaker and streetwear culture store template', '/templates/OHMT005-sneaker/og-image.jpg', 0, 'published', 5, false),
('OHMT005-sneaker', 'ko', 'OHMT005', '스니커 스토어', 'retail', '스니커 및 스트리트웨어 문화 스토어 템플릿', '/templates/OHMT005-sneaker/og-image.jpg', 0, 'published', 5, false),

-- 6. Studio
('OHMT006-studio', 'en', 'OHMT006', 'Studio', 'portfolio', 'Creative studio and project showcase template', '/templates/OHMT006-studio/og-image.jpg', 0, 'published', 6, true),
('OHMT006-studio', 'ko', 'OHMT006', '스튜디오', 'portfolio', '크리에이티브 스튜디오 및 프로젝트 쇼케이스 템플릿', '/templates/OHMT006-studio/og-image.jpg', 0, 'published', 6, true),

-- 7. Portfolio
('OHMT007-portfolio', 'en', 'OHMT007', 'Portfolio', 'portfolio', 'Creative portfolio and personal branding template', '/templates/OHMT007-portfolio/og-image.jpg', 0, 'published', 7, false),
('OHMT007-portfolio', 'ko', 'OHMT007', '포트폴리오', 'portfolio', '크리에이티브 포트폴리오 및 퍼스널 브랜딩 템플릿', '/templates/OHMT007-portfolio/og-image.jpg', 0, 'published', 7, false),

-- 8. Airline
('OHMT008-airline', 'en', 'OHMT008', 'Airline', 'hospitality', 'Premium airline booking and travel experience template', '/templates/OHMT008-airline/og-image.jpg', 0, 'published', 8, false),
('OHMT008-airline', 'ko', 'OHMT008', '에어라인', 'hospitality', '프리미엄 항공 예약 및 여행 경험 템플릿', '/templates/OHMT008-airline/og-image.jpg', 0, 'published', 8, false),

-- 9. Car
('OHMT009-car', 'en', 'OHMT009', 'Car Showroom', 'retail', 'Luxury car showroom and model showcase template', '/templates/OHMT009-car/og-image.jpg', 0, 'published', 9, false),
('OHMT009-car', 'ko', 'OHMT009', '자동차 쇼룸', 'retail', '럭셔리 자동차 쇼룸 및 모델 소개 템플릿', '/templates/OHMT009-car/og-image.jpg', 0, 'published', 9, false),

-- 10. Cosmetic
('OHMT010-cosmetic', 'en', 'OHMT010', 'Cosmetic Store', 'lifestyle', 'Beauty and cosmetic brand store template', '/templates/OHMT010-cosmetic/og-image.jpg', 0, 'published', 10, false),
('OHMT010-cosmetic', 'ko', 'OHMT010', '코스메틱 스토어', 'lifestyle', '뷰티 코스메틱 브랜드 스토어 템플릿', '/templates/OHMT010-cosmetic/og-image.jpg', 0, 'published', 10, false),

-- 11. IR
('OHMT011-ir', 'en', 'OHMT011', 'IR', 'corporate', 'Investor relations and financial reporting template', '/templates/OHMT011-ir/og-image.jpg', 0, 'published', 11, false),
('OHMT011-ir', 'ko', 'OHMT011', 'IR', 'corporate', '투자자 관계 및 재무 보고 템플릿', '/templates/OHMT011-ir/og-image.jpg', 0, 'published', 11, false),

-- 12. Magazine
('OHMT012-magazine', 'en', 'OHMT012', 'Magazine', 'media', 'Editorial magazine and content publishing template', '/templates/OHMT012-magazine/og-image.jpg', 0, 'published', 12, false),
('OHMT012-magazine', 'ko', 'OHMT012', '매거진', 'media', '에디토리얼 매거진 및 콘텐츠 퍼블리싱 템플릿', '/templates/OHMT012-magazine/og-image.jpg', 0, 'published', 12, false),

-- 13. Newspaper
('OHMT013-newspaper', 'en', 'OHMT013', 'Newspaper', 'media', 'Online newspaper and news portal template', '/templates/OHMT013-newspaper/og-image.jpg', 0, 'published', 13, false),
('OHMT013-newspaper', 'ko', 'OHMT013', '신문', 'media', '온라인 신문 및 뉴스 포털 템플릿', '/templates/OHMT013-newspaper/og-image.jpg', 0, 'published', 13, false),

-- 14. Docs
('OHMT014-docs', 'en', 'OHMT014', 'Documentation', 'service', 'Documentation workspace and knowledge base template', '/templates/OHMT014-docs/og-image.jpg', 0, 'published', 14, false),
('OHMT014-docs', 'ko', 'OHMT014', '문서 시스템', 'service', '문서 협업 워크스페이스 및 지식 베이스 템플릿', '/templates/OHMT014-docs/og-image.jpg', 0, 'published', 14, false),

-- 15. Dashboard
('OHMT015-dashboard', 'en', 'OHMT015', 'Dashboard', 'service', 'Analytics and business intelligence dashboard template', '/templates/OHMT015-dashboard/og-image.jpg', 0, 'published', 15, true),
('OHMT015-dashboard', 'ko', 'OHMT015', '대시보드', 'service', '분석 및 비즈니스 인텔리전스 대시보드 템플릿', '/templates/OHMT015-dashboard/og-image.jpg', 0, 'published', 15, true),

-- 16. Technology
('OHMT016-technology', 'en', 'OHMT016', 'Technology - Robotflow', 'corporate', 'AI robotics company and technology showcase template', '/templates/OHMT016-technology/og-image.jpg', 0, 'published', 16, false),
('OHMT016-technology', 'ko', 'OHMT016', '테크놀로지 - 로봇플로우', 'corporate', 'AI 로봇 기업 및 기술 쇼케이스 템플릿', '/templates/OHMT016-technology/og-image.jpg', 0, 'published', 16, false),

-- 17. Multi Shop
('OHMT017-multi-shop', 'en', 'OHMT017', 'Multi Shop', 'retail', 'Multi-category shopping mall template', '/templates/OHMT017-multi-shop/og-image.jpg', 0, 'published', 17, false),
('OHMT017-multi-shop', 'ko', 'OHMT017', '멀티샵', 'retail', '멀티 카테고리 쇼핑몰 템플릿', '/templates/OHMT017-multi-shop/og-image.jpg', 0, 'published', 17, false),

-- 18. Burger
('OHMT018-burger', 'en', 'OHMT018', 'Burger', 'hospitality', 'Premium burger restaurant experience template', '/templates/OHMT018-burger/og-image.jpg', 0, 'published', 18, false),
('OHMT018-burger', 'ko', 'OHMT018', '버거', 'hospitality', '프리미엄 버거 레스토랑 경험 템플릿', '/templates/OHMT018-burger/og-image.jpg', 0, 'published', 18, false),

-- 19. Coffee
('OHMT019-coffee', 'en', 'OHMT019', 'Coffee', 'hospitality', 'Premium coffee shop & roastery experience template', '/templates/OHMT019-coffee/og-image.jpg', 0, 'published', 19, false),
('OHMT019-coffee', 'ko', 'OHMT019', '커피', 'hospitality', '프리미엄 커피숍 & 로스터리 경험 템플릿', '/templates/OHMT019-coffee/og-image.jpg', 0, 'published', 19, false),

-- 20. Hotel
('OHMT020-hotel', 'en', 'OHMT020', 'Hotel', 'hospitality', 'Premium luxury hotel & resort experience template', '/templates/OHMT020-hotel/og-image.jpg', 0, 'published', 20, false),
('OHMT020-hotel', 'ko', 'OHMT020', '호텔', 'hospitality', '프리미엄 럭셔리 호텔 & 리조트 경험 템플릿', '/templates/OHMT020-hotel/og-image.jpg', 0, 'published', 20, false),

-- 21. Museum
('OHMT021-museum', 'en', 'OHMT021', 'Museum', 'portfolio', 'Art museum and cultural institution showcase template', '/templates/OHMT021-museum/og-image.jpg', 0, 'published', 21, false),
('OHMT021-museum', 'ko', 'OHMT021', '뮤지엄', 'portfolio', '미술관 및 문화 기관 쇼케이스 템플릿', '/templates/OHMT021-museum/og-image.jpg', 0, 'published', 21, false),

-- 22. Yoga
('OHMT022-yoga', 'en', 'OHMT022', 'Yoga', 'lifestyle', 'Find your inner peace with premium yoga and wellness classes template', '/templates/OHMT022-yoga/og-image.jpg', 0, 'published', 22, false),
('OHMT022-yoga', 'ko', 'OHMT022', '요가', 'lifestyle', '프리미엄 요가 및 웰니스 클래스로 일상의 균형을 되찾는 템플릿', '/templates/OHMT022-yoga/og-image.jpg', 0, 'published', 22, false),

-- 23. Game
('OHMT023-game', 'en', 'OHMT023', 'Game Studio', 'lifestyle', 'Premium game studio & development showcase template', '/templates/OHMT023-game/og-image.jpg', 0, 'published', 23, false),
('OHMT023-game', 'ko', 'OHMT023', '게임 스튜디오', 'lifestyle', '프리미엄 게임 스튜디오 & 개발 쇼케이스 템플릿', '/templates/OHMT023-game/og-image.jpg', 0, 'published', 23, false),

-- 24. Kids Education
('OHMT024-kids-education', 'en', 'OHMT024', 'Kids Academy', 'service', 'Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.', '/templates/OHMT024-kids-education/og-image.jpg', 0, 'published', 24, false),
('OHMT024-kids-education', 'ko', 'OHMT024', '키즈 아카데미', 'service', '놀이로 시작하는 배움. 코딩부터 미술, 과학 실험까지 50가지 이상의 어린이 창의 클래스를 만나보세요.', '/templates/OHMT024-kids-education/og-image.jpg', 0, 'published', 24, false),

-- 25. Wedding
('OHMT025-wedding', 'en', 'OHMT025', 'Wedding', 'lifestyle', 'Timeless and authentic wedding photography template with documentary style and fine art elegance.', '/templates/OHMT025-wedding/og-image.jpg', 0, 'published', 25, false),
('OHMT025-wedding', 'ko', 'OHMT025', '루멘 웨딩', 'lifestyle', '현실적이고 감성적인 다큐멘터리 스타일로 영원한 사랑을 기록하는 웨딩 사진작가 포트폴리오 템플릿.', '/templates/OHMT025-wedding/og-image.jpg', 0, 'published', 25, false),

-- 26. Spa
('OHMT026-spa', 'en', 'OHMT026', 'Spa Wellness', 'lifestyle', 'Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.', '/templates/OHMT026-spa/og-image.jpg', 0, 'published', 26, false),
('OHMT026-spa', 'ko', 'OHMT026', '스파 웰니스', 'lifestyle', '다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.', '/templates/OHMT026-spa/og-image.jpg', 0, 'published', 26, false),

-- 27. Architecture
('OHMT027-architecture', 'en', 'OHMT027', 'Architecture Portfolio', 'portfolio', 'A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.', '/templates/OHMT027-architecture/og-image.jpg', 0, 'published', 27, false),
('OHMT027-architecture', 'ko', 'OHMT027', '아키텍처 포트폴리오', 'portfolio', '에디토리얼 타이포그래피와 몰입감 있는 비주얼 스토리텔링의 건축 포트폴리오 템플릿.', '/templates/OHMT027-architecture/og-image.jpg', 0, 'published', 27, false),

-- 28. EV
('OHMT028-ev', 'en', 'OHMT028', 'EV Concept', 'retail', 'An electric vehicle brand template with cinematic product sections, performance storytelling, specification pages, and an immersive configuration flow.', '/templates/OHMT028-ev/og-image.jpg', 0, 'published', 28, false),
('OHMT028-ev', 'ko', 'OHMT028', '전기차 컨셉', 'retail', '시네마틱 제품 섹션, 퍼포먼스 스토리, 사양 페이지, 몰입형 구성 흐름을 갖춘 전기차 브랜드 템플릿.', '/templates/OHMT028-ev/og-image.jpg', 0, 'published', 28, false),

-- 29. Fitness
('OHMT029-fitness', 'en', 'OHMT029', 'Fitness Studio', 'lifestyle', 'A premium fitness and wellness studio template for classes, coaches, B2B operations, boutique memberships, and conversion-focused program pages.', '/templates/OHMT029-fitness/og-image.jpg', 0, 'published', 29, false),
('OHMT029-fitness', 'ko', 'OHMT029', '피트니스 스튜디오', 'lifestyle', '클래스, 코치, B2B 운영, 부티크 멤버십, 전환 중심 프로그램 페이지를 갖춘 프리미엄 피트니스 웰니스 스튜디오 템플릿.', '/templates/OHMT029-fitness/og-image.jpg', 0, 'published', 29, false),

-- 30. Resort
('OHMT030-resort', 'en', 'OHMT030', 'Coastal Luxury Resort', 'hospitality', 'A coastal resort template for rooms, dining, experiences, booking prompts, and destination storytelling with a quiet luxury hospitality mood.', '/templates/OHMT030-resort/og-image.jpg', 0, 'published', 30, false),
('OHMT030-resort', 'ko', 'OHMT030', '해안 럭셔리 리조트', 'hospitality', '객실, 다이닝, 경험, 예약 유도, 여행지 스토리를 조용한 럭셔리 호스피탈리티 무드로 구성한 코스탈 리조트 템플릿.', '/templates/OHMT030-resort/og-image.jpg', 0, 'published', 30, false),

-- 31. LUMA Camera
('OHMT031-luma-camera', 'en', 'OHMT031', 'LUMA Camera', 'retail', 'A premium compact camera template for product storytelling, everyday shooting scenes, image-quality samples, app notes, and creator-focused shop pages.', '/templates/OHMT031-luma-camera/og-image.jpg', 0, 'published', 31, false),
('OHMT031-luma-camera', 'ko', 'OHMT031', '루마 카메라', 'retail', '제품 스토리, 일상 촬영 장면, 이미지 품질 샘플, 앱 노트, 크리에이터 중심 구매 흐름을 갖춘 프리미엄 컴팩트 카메라 템플릿.', '/templates/OHMT031-luma-camera/og-image.jpg', 0, 'published', 31, false)

on conflict (slug, lang) do update set
  template_key = excluded.template_key,
  name = excluded.name,
  category = excluded.category,
  description = excluded.description,
  thumbnail_url = excluded.thumbnail_url,
  status = excluded.status,
  sort_order = excluded.sort_order,
  is_featured = excluded.is_featured,
  updated_at = now();
