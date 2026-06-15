-- Oh My Template - Seed Data
-- Supabase SQL Editor에서 실행

insert into templates (slug, name_en, name_ko, category, description_en, description_ko, thumbnail_url, price, status, sort_order, is_featured) values
('airline',    'Airline',              '에어라인',          'hospitality', 'Premium airline booking and travel experience template',      '프리미엄 항공 예약 및 여행 경험 템플릿',        '/templates/airline/thumbnail.jpg',    0, 'published',  1, false),
('car',        'Car Showroom',         '자동차 쇼룸',        'retail',      'Luxury car showroom and model showcase template',             '럭셔리 자동차 쇼룸 및 모델 소개 템플릿',        '/templates/car/thumbnail.jpg',        0, 'published',  2, false),
('cosmetic',   'Cosmetic Store',       '코스메틱 스토어',     'lifestyle',   'Beauty and cosmetic brand store template',                    '뷰티 코스메틱 브랜드 스토어 템플릿',            '/templates/cosmetic/thumbnail.jpg',   0, 'published',  3, false),
('dashboard',  'Dashboard',            '대시보드',           'service',     'Analytics and business intelligence dashboard template',       '분석 및 비즈니스 인텔리전스 대시보드 템플릿',    '/templates/dashboard/thumbnail.jpg',  0, 'published',  4, false),
('docs',       'Documentation',        '문서 시스템',         'service',     'Documentation workspace and knowledge base template',         '문서 협업 워크스페이스 및 지식 베이스 템플릿',   '/templates/docs/thumbnail.jpg',       0, 'published',  5, false),
('exhibition', 'Exhibition',           '전시관',             'portfolio',   'Museum and art exhibition showcase template',                  '미술관 및 전시 쇼케이스 템플릿',               '/templates/exhibition/thumbnail.jpg', 0, 'published',  6, false),
('fashion',    'Fashion Store',        '패션 스토어',         'lifestyle',   'Elegant fashion brand store and lookbook template',           '엘레강트한 패션 브랜드 스토어 및 룩북 템플릿',  '/templates/fashion/thumbnail.jpg',    0, 'published',  7, false),
('furniture',  'Furniture Modern',     '퍼니처 모던',         'retail',      'Clean and modern furniture store template',                   '깔끔하고 현대적인 가구 스토어 템플릿',          '/templates/furniture/thumbnail.jpg',  0, 'published',  8, false),
('ir',         'IR',                   'IR',                'corporate',   'Investor relations and financial reporting template',          '투자자 관계 및 재무 보고 템플릿',               '/templates/ir/thumbnail.jpg',         0, 'published',  9, false),
('jewelry',    'Jewelry',              '주얼리',             'lifestyle',   'Luxury jewelry brand store template',                         '럭셔리 주얼리 브랜드 스토어 템플릿',            '/templates/jewelry/thumbnail.jpg',    0, 'published', 10, false),
('magazine',   'Magazine',             '매거진',             'media',       'Editorial magazine and content publishing template',          '에디토리얼 매거진 및 콘텐츠 퍼블리싱 템플릿',   '/templates/magazine/thumbnail.jpg',   0, 'published', 11, false),
('multi-shop', 'Multi Shop',           '멀티샵',             'retail',      'Multi-category shopping mall template',                       '멀티 카테고리 쇼핑몰 템플릿',                  '/templates/multi-shop/thumbnail.jpg', 0, 'published', 12, false),
('newspaper',  'Newspaper',            '신문',               'media',       'Online newspaper and news portal template',                   '온라인 신문 및 뉴스 포털 템플릿',               '/templates/newspaper/thumbnail.jpg',  0, 'published', 13, false),
('portfolio',  'Portfolio',            '포트폴리오',          'portfolio',   'Creative portfolio and personal branding template',           '크리에이티브 포트폴리오 및 퍼스널 브랜딩 템플릿', '/templates/portfolio/thumbnail.jpg',  0, 'published', 14, false),
('sneaker',    'Sneaker Store',        '스니커 스토어',       'retail',      'Sneaker and streetwear culture store template',               '스니커 및 스트리트웨어 문화 스토어 템플릿',      '/templates/sneaker/thumbnail.jpg',    0, 'published', 15, false),
('studio',     'Studio',               '스튜디오',           'portfolio',   'Creative studio and project showcase template',               '크리에이티브 스튜디오 및 프로젝트 쇼케이스 템플릿', '/templates/studio/thumbnail.jpg',   0, 'published', 16, false),
('technology', 'Technology - Robotflow', '테크놀로지 - 로봇플로우', 'corporate', 'AI robotics company and technology showcase template', 'AI 로봇 기업 및 기술 쇼케이스 템플릿',          '/templates/technology/thumbnail.jpg', 0, 'published', 17, true);
