export const STUDIO_ROUTES = {
  HOME: '/studio-ko',
  SERVICES: '/ko/templates/studio/services',
  PROJECTS: '/ko/templates/studio/projects',
  CONTACT: '/ko/templates/studio/contact',
  ABOUT: '/ko/templates/studio/about',
} as const;

export const STUDIO_BRAND = {
  NAME: 'Oh My Template.',
  TAGLINE: '감각적인 공간 설계로 삶의 질을 높입니다.',
  EMAIL: 'hello@ohmytemplate.design',
  PHONE: '+82 (2) 6123-4567',
  ADDRESS: {
    STREET: '강남구 테헤란로 123, 8층',
    CITY: '서울, 한국',
    COUNTRY: '대한민국',
  },
} as const;

export const NAV_ITEMS = [
  { name: '서비스', href: STUDIO_ROUTES.SERVICES },
  { name: '포트폴리오', href: STUDIO_ROUTES.PROJECTS },
  { name: '문의', href: STUDIO_ROUTES.CONTACT },
  { name: '소개', href: STUDIO_ROUTES.ABOUT },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Pinterest', href: '#' },
] as const;
