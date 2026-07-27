export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  date: string;
  thumbnail: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
  tags: string[];
}

export const designerInfo = {
  name: 'OHMT',
  role: '크리에이티브 스튜디오',
  tagline: '선명한 브랜드, 완성도 높은 웹사이트, 평범함에 머물지 않는 아이디어.',
  philosophy: '브랜드의 방향을 정리하고 아름답고 기능적인 웹사이트와 평범함에 머물지 않는 아이디어를 만듭니다.',
  location: '서울, 대한민국',
  contact: {
    email: 'hi@ohmytemplate.io',
    phone: '+82 2 1234 5678'
  },
  social: {
    behance: '#',
    dribbble: '#',
    twitter: '#',
  },
  nav: [
    { num: '_01', name: '프로젝트', href: '/en/templates/OHMT007-portfolio' },
    { num: '_02', name: '소개', href: '/en/templates/OHMT007-portfolio/about' },
    { num: '_03', name: '저널', href: '/en/templates/OHMT007-portfolio/journal' },
    { num: '_04', name: '문의', href: '/en/templates/OHMT007-portfolio/contact' },
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'AURA®',
    category: '브랜딩 / 모바일 앱',
    year: '2026',
    date: '07.26',
    thumbnail: '/templates/OHMT007-portfolio/portfolio-1.png',
    description: '절제된 미니멀리즘과 차분한 인터랙션을 바탕으로 설계한 웰니스·명상 브랜드입니다.',
    challenge: '기존 UI 요소의 80%를 덜어내면서도 사용성을 유지하는 것이 핵심 과제였습니다.',
    solution: '필요한 기능만 남기고 사용자가 구조를 의식하지 않아도 되는 직관적인 내비게이션을 설계했습니다.',
    images: ['/templates/OHMT007-portfolio/portfolio-1.png', '/templates/OHMT007-portfolio/portfolio-hero.png'],
    tags: ['브랜딩', 'UI/UX', '모바일'],
  },
  {
    id: '2',
    title: 'METRIC+',
    category: '프로덕트 디자인 / SaaS',
    year: '2026',
    date: '10.26',
    thumbnail: '/templates/OHMT007-portfolio/portfolio-2.png',
    description: '복잡한 데이터를 쉽게 이해하고 업무 흐름을 빠르게 이어갈 수 있도록 설계한 SaaS 대시보드입니다.',
    challenge: '정보량이 많은 데이터도 사용자가 부담 없이 파악할 수 있도록 시각화해야 했습니다.',
    solution: '콘텐츠 우선순위를 분명히 하고 필요한 모듈을 조합할 수 있는 대시보드 시스템을 설계했습니다.',
    images: ['/templates/OHMT007-portfolio/portfolio-2.png'],
    tags: ['SaaS', '대시보드', '데이터 시각화'],
  },
  {
    id: '3',
    title: 'NOIR GALLERY',
    category: '웹 디자인 / 전시',
    year: '2025',
    date: '11.25',
    thumbnail: '/templates/OHMT007-portfolio/portfolio-3.png',
    description: '현대 단색 회화를 몰입감 있게 감상할 수 있도록 제작한 디지털 전시 플랫폼입니다.',
    challenge: '실제 갤러리에서 느끼는 공간감과 작품 집중도를 디지털 환경으로 옮기는 것이 과제였습니다.',
    solution: '큰 타이포그래피와 넓은 여백, 절제된 움직임을 활용해 온라인에서도 전시 공간의 긴장감을 느낄 수 있도록 했습니다.',
    images: ['/templates/OHMT007-portfolio/portfolio-3.png'],
    tags: ['웹 디자인', '전시', '예술'],
  },
  {
    id: '4',
    title: 'ASTERISK®',
    category: '브랜드 아이덴티티 / 패키지',
    year: '2025',
    date: '09.25',
    thumbnail: '/templates/OHMT007-portfolio/portfolio-4.png',
    description: '독립 주류 브랜드를 위해 개발한 프리미엄 패키지와 브랜드 아이덴티티 시스템입니다.',
    challenge: '익숙한 고급 이미지에 기대지 않고 경쟁이 치열한 시장에서 차별화해야 했습니다.',
    solution: '기하학적 형태와 절제된 타이포그래피를 중심으로 일관된 브랜드 언어를 구축했습니다.',
    images: ['/templates/OHMT007-portfolio/portfolio-4.png'],
    tags: ['브랜딩', '패키지', '아이덴티티'],
  },
  {
    id: '5',
    title: 'ZYPHER®',
    category: '디지털 / 모션',
    year: '2025',
    date: '02.25',
    thumbnail: '/templates/OHMT007-portfolio/portfolio-5.png',
    description: '차세대 핀테크 플랫폼을 위해 모션을 중심으로 설계한 디지털 경험입니다.',
    challenge: '전문 지식이 없는 사용자도 금융 데이터를 쉽고 친근하게 이해하도록 만드는 것이 과제였습니다.',
    solution: '데이터의 변화를 자연스럽게 보여주는 마이크로 인터랙션 체계를 개발했습니다.',
    images: ['/templates/OHMT007-portfolio/portfolio-5.png'],
    tags: ['모션', '핀테크', 'UX'],
  },
  {
    id: '6',
    title: 'GROTESKS',
    category: '타입 디자인 / 편집',
    year: '2025',
    date: '08.25',
    thumbnail: '/templates/OHMT007-portfolio/portfolio-6.png',
    description: '독립 매거진을 위해 개발한 맞춤 서체 패밀리와 편집 디자인 시스템입니다.',
    challenge: '인쇄물과 화면 모두에서 안정적으로 읽히는 서체를 설계해야 했습니다.',
    solution: '다양한 글자와 크기를 지원하는 옵티컬 사이즈 기반 가변 서체를 제작했습니다.',
    images: ['/templates/OHMT007-portfolio/portfolio-6.png'],
    tags: ['타입 디자인', '편집 디자인', '인쇄'],
  },
];

export const services = [
  { num: '001', name: '브랜딩', desc: '로고와 브랜드 시스템을 설계해 모든 접점에서 일관된 인상을 만듭니다.' },
  { num: '002', name: '웹 개발', desc: '목적과 성과를 고려해 빠르고 안정적인 웹사이트를 제작합니다.' },
  { num: '003', name: '검색 최적화', desc: '검색 의도와 데이터를 바탕으로 지속적인 유입을 만드는 SEO 전략을 설계합니다.' },
  { num: '004', name: '소셜 미디어', desc: '채널에 맞는 콘텐츠를 기획하고 일관된 브랜드 운영을 돕습니다.' },
];

export const stats = [
  { num: '3m+', label: '누적 투자 유치액' },
  { num: '289', label: '론칭한 브랜드' },
  { num: '56', label: '수상 실적' },
  { num: '97%', label: '고객 만족도' },
];

export const testimonials = [
  { name: 'Sarah Conor', role: 'Clonify 대표', text: 'OHMT는 평범했던 로고를 일관된 브랜드 언어로 확장해 주었습니다.\n세부 요소까지 놓치지 않는 완성도가 인상적이었습니다.', img: '/templates/OHMT007-portfolio/portfolio-1.png' },
  { name: 'Bruce Lee', role: 'Maiz 창립자', text: '에이전시를 고용했다기보다 새로운 크리에이티브 파트너를 얻은 느낌이었습니다.\n우리가 미처 설명하지 못한 방향까지 먼저 이해했습니다.', img: '/templates/OHMT007-portfolio/portfolio-2.png' },
  { name: 'Elena Marco', role: 'Marcom CMO', text: 'OHMT가 제작한 웹사이트를 공개한 뒤 첫 분기에 유효 문의가 340% 증가했습니다.\n디자인이 실제 성과로 이어졌습니다.', img: '/templates/OHMT007-portfolio/portfolio-3.png' },
];

export const faqs = [
  { q: '프로젝트는 어떤 과정으로 진행되나요?', a: '초기 상담에서 목표와 고객, 필요한 업무 범위와 성공 기준을 정리합니다. 이후 리서치, 방향 설정, 디자인, 제작과 검수 순서로 진행하며 보통 4~12주가 필요합니다.' },
  { q: '단일 프로젝트도 의뢰할 수 있나요?', a: '가능합니다. 브랜드 아이덴티티, 웹사이트 제작, 캠페인 디자인처럼 한 번에 완료되는 프로젝트도 진행하며 장기 계약은 필수가 아닙니다.' },
  { q: '어떤 도구와 플랫폼으로 제작하나요?', a: '주로 Next.js, Webflow, Framer를 사용하며 프로젝트의 목적과 운영 환경에 맞는 기술을 선택합니다.' },
  { q: '디자인 수정은 몇 번 진행되나요?', a: '모든 프로젝트에 두 차례의 정식 수정 과정을 포함합니다. 추가 수정은 범위에 따라 별도로 협의합니다.' },
  { q: "프로젝트 기간은 얼마나 걸리나요?", a: '브랜드 아이덴티티는 보통 3~5주, 웹사이트 디자인과 개발은 8~12주가 필요합니다. 규모가 큰 프로젝트는 업무 범위를 확인한 뒤 일정을 산정합니다.' },
  { q: '해외 클라이언트와도 협업하나요?', a: '가능합니다. 이메일과 화상 회의, 문서 기반 협업을 활용해 시간대가 다른 해외 클라이언트와도 프로젝트를 진행합니다.' },
  { q: '결제는 어떻게 진행되나요?', a: '착수 시 50%, 완료 시 50%를 결제하며 자세한 결제 방식은 계약 전에 안내합니다.' },
  { q: '출시 후에도 지원을 받을 수 있나요?', a: '가능합니다. 출시 후 안정화 지원과 지속적인 운영을 위한 유지보수 계약을 제공합니다.' },
];

export const blogPosts = [
  { slug: 'crafting-brand-identity', title: '스튜디오 안에서: 차별화된 브랜드 아이덴티티를 만드는 과정', date: '2026. 5. 23.', category: '프로세스', img: '/templates/OHMT007-portfolio/portfolio-4.png' },
  { slug: 'sketch-to-screen', title: '스케치에서 화면까지: 아이디어가 디자인으로 발전하는 과정', date: '2026. 5. 10.', category: '디자인', img: '/templates/OHMT007-portfolio/portfolio-5.png' },
  { slug: 'visual-language', title: '브랜드에 고유한 시각 언어가 필요한 이유', date: '2026. 4. 28.', category: '브랜딩', img: '/templates/OHMT007-portfolio/portfolio-6.png' },
];

export const siteConfig = {
  name: designerInfo.name,
  tagline: designerInfo.tagline,
  nav: designerInfo.nav
};
