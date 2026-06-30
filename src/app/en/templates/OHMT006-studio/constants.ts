export const STUDIO_ROUTES = {
  HOME: '/studio',
  SERVICES: '/templates/OHMT006-studio/services',
  PROJECTS: '/templates/OHMT006-studio/projects',
  CONTACT: '/templates/OHMT006-studio/contact',
  ABOUT: '/templates/OHMT006-studio/about',
} as const;

export const STUDIO_BRAND = {
  NAME: 'OHMT.',
  TAGLINE: 'Elevating the corporate landscape through strategic design and architectural excellence.',
  EMAIL: 'hello@ohmytemplate.design',
  PHONE: '512 827 2100',
  ADDRESS: {
    STREET: '213 West 5th Street',
    CITY: 'Austin, Texas 78701',
    COUNTRY: 'USA',
  },
} as const;

export const NAV_ITEMS = [
  { name: 'Services', href: STUDIO_ROUTES.SERVICES },
  { name: 'Projects', href: STUDIO_ROUTES.PROJECTS },
  { name: 'Contact', href: STUDIO_ROUTES.CONTACT },
  { name: 'About', href: STUDIO_ROUTES.ABOUT },
] as const;

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Dribbble', href: '#' },
] as const;
