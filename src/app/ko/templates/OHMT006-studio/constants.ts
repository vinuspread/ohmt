export const STUDIO_ROUTES = {
  HOME: '/studio-ko',
  SERVICES: '/ko/templates/OHMT006-studio/services',
  PROJECTS: '/ko/templates/OHMT006-studio/projects',
  CONTACT: '/ko/templates/OHMT006-studio/contact',
  ABOUT: '/ko/templates/OHMT006-studio/about',
} as const;

export const STUDIO_BRAND = {
  NAME: 'TECTA.',
  TAGLINE: '생활과 업무 방식에 맞는 공간을 설계합니다.',
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
