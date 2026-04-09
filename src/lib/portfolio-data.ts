export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
}

export const designerInfo = {
  name: 'Vinuspread Designer',
  role: 'Creative Director & Product Architect',
  tagline: 'Crafting digital environments where clarity meets emotion.',
  philosophy: 'Authenticity through radical simplification. We remove the noise to reveal the soul of the product.',
  email: 'hello@vinuspread.com',
  instagram: 'vinuspread',
  linkedin: 'vinuspread-designer',
  location: 'Seoul, KR',
  contact: {
    email: 'hello@vinuspread.com',
    phone: '+82 2 1234 5678'
  },
  nav: [
    { name: 'Works', href: '/portfolio' },
    { name: 'Manifesto', href: '/portfolio/manifesto' },
    { name: 'Journal', href: '/portfolio/journal' }
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Aura Meditation',
    category: 'Mobile App / Wellness',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200',
    description: 'A wellness and meditation app focused on minimalist interaction and calming aesthetics.',
    challenge: 'How to maintain utility while removing 80% of traditional UI elements?',
    solution: 'We chose radical simplicity, creating an intuitive navigation system that felt invisible.',
    images: []
  },
  {
    id: '2',
    title: 'Metric Hub',
    category: 'Product Design / SaaS',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200',
    description: 'Empowering data-driven decisions through advanced visualization and seamless workflows.',
    challenge: 'Visualizing complex data sets without overwhelming the user.',
    solution: 'Designed a modular dashboard system with highly focused visual hierarchy.',
    images: []
  },
  {
    id: '3',
    title: 'Noir Gallery',
    category: 'Web Design / Exhibition',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200',
    description: 'An immersive digital exhibition platform for contemporary monochromatic art.',
    challenge: 'Translating the physical gallery experience into a digital medium.',
    solution: 'Utilized monumental typography and deep negative space to create a gallery feel.',
    images: []
  }
];

export const siteConfig = {
  name: designerInfo.name,
  tagline: designerInfo.tagline,
  nav: designerInfo.nav
};
