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
  name: 'Vinuspread',
  role: 'Creative Studio',
  tagline: 'Bold brands. Beautiful websites. Ideas that refuse to be ordinary.',
  philosophy: 'We cultivate bold brands, beautiful websites, and ideas that refuse to be ordinary.',
  location: 'Seoul, KR',
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
    { num: '_01', name: 'Works', href: '/en/templates/portfolio' },
    { num: '_02', name: 'About', href: '/en/templates/portfolio/about' },
    { num: '_03', name: 'Journal', href: '/en/templates/portfolio/journal' },
    { num: '_04', name: 'Contact', href: '/en/templates/portfolio/contact' },
  ]
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'AURA®',
    category: 'Branding / Mobile App',
    year: '2026',
    date: '07.26',
    thumbnail: '/templates/portfolio/portfolio-1.png',
    description: 'A wellness and meditation brand built around radical minimalism and calming interaction design.',
    challenge: 'How to maintain utility while removing 80% of traditional UI elements?',
    solution: 'We chose radical simplicity, creating an intuitive navigation system that felt invisible.',
    images: ['/templates/portfolio/portfolio-1.png', '/templates/portfolio/portfolio-hero.png'],
    tags: ['Branding', 'UI/UX', 'Mobile'],
  },
  {
    id: '2',
    title: 'METRIC+',
    category: 'Product Design / SaaS',
    year: '2026',
    date: '10.26',
    thumbnail: '/templates/portfolio/portfolio-2.png',
    description: 'Empowering data-driven decisions through advanced visualization and seamless workflows.',
    challenge: 'Visualizing complex data sets without overwhelming the user.',
    solution: 'Designed a modular dashboard system with highly focused visual hierarchy.',
    images: ['/templates/portfolio/portfolio-2.png'],
    tags: ['SaaS', 'Dashboard', 'Data Viz'],
  },
  {
    id: '3',
    title: 'NOIR GALLERY',
    category: 'Web Design / Exhibition',
    year: '2025',
    date: '11.25',
    thumbnail: '/templates/portfolio/portfolio-3.png',
    description: 'An immersive digital exhibition platform for contemporary monochromatic art.',
    challenge: 'Translating the physical gallery experience into a digital medium.',
    solution: 'Utilized monumental typography and deep negative space to create a gallery feel.',
    images: ['/templates/portfolio/portfolio-3.png'],
    tags: ['Web Design', 'Exhibition', 'Art'],
  },
  {
    id: '4',
    title: 'ASTERISK®',
    category: 'Brand Identity / Packaging',
    year: '2025',
    date: '09.25',
    thumbnail: '/templates/portfolio/portfolio-4.png',
    description: 'A luxury packaging and identity system for an independent spirits brand.',
    challenge: 'Standing out in a saturated premium market without resorting to cliché.',
    solution: 'Built a brand language around geometric precision and typographic restraint.',
    images: ['/templates/portfolio/portfolio-4.png'],
    tags: ['Branding', 'Packaging', 'Identity'],
  },
  {
    id: '5',
    title: 'ZYPHER®',
    category: 'Digital / Motion',
    year: '2025',
    date: '02.25',
    thumbnail: '/templates/portfolio/portfolio-5.png',
    description: 'A motion-first digital experience for a next-generation fintech platform.',
    challenge: 'Making financial data feel alive and approachable to non-expert users.',
    solution: 'Developed a micro-interaction library that turns every data point into a visual event.',
    images: ['/templates/portfolio/portfolio-5.png'],
    tags: ['Motion', 'Fintech', 'UX'],
  },
  {
    id: '6',
    title: 'GROTESKS',
    category: 'Type Design / Editorial',
    year: '2025',
    date: '08.25',
    thumbnail: '/templates/portfolio/portfolio-6.png',
    description: 'A custom typeface family and editorial system for an independent magazine.',
    challenge: 'Designing a typeface that reads beautifully in print and on screen.',
    solution: 'Created an optical-size aware variable font with extensive character support.',
    images: ['/templates/portfolio/portfolio-6.png'],
    tags: ['Type Design', 'Editorial', 'Print'],
  },
];

export const services = [
  { num: '001', name: 'BRANDING', desc: 'Logos and brand systems that leave a lasting impression across every touchpoint.' },
  { num: '002', name: 'DEVELOPMENT', desc: 'Beautiful and functional websites built with purpose, performance, and precision.' },
  { num: '003', name: 'SEO OPTIMIZATION', desc: 'Tailored SEO strategies backed by real data and built for long-term growth.' },
  { num: '004', name: 'SOCIAL MEDIA', desc: 'Plan, post, and grow your brand consistently across all major platforms.' },
];

export const stats = [
  { num: '3m+', label: 'Capital raised' },
  { num: '289', label: 'Brands launched' },
  { num: '56', label: 'Awards won' },
  { num: '97%', label: 'Client satisfaction' },
];

export const testimonials = [
  { name: 'Sarah Conor', role: 'CEO, Clonify', text: 'Vinuspread transformed our brand identity from a forgettable logo into a cohesive visual language. The attention to detail is unmatched.', img: '/templates/portfolio/portfolio-1.png' },
  { name: 'Bruce Lee', role: 'Founder, Maiz', text: 'Working with them felt less like hiring an agency and more like gaining a creative partner. They understood our vision before we could articulate it.', img: '/templates/portfolio/portfolio-2.png' },
  { name: 'Elena Marco', role: 'CMO, Marcom', text: 'The website they built for us drove a 340% increase in qualified leads within the first quarter. Design that actually converts.', img: '/templates/portfolio/portfolio-3.png' },
];

export const faqs = [
  { q: 'What does a typical project look like?', a: 'Every engagement starts with a discovery session where we align on goals, audience, and success metrics. From there we move through research, concept, design, and delivery — usually over 4–12 weeks depending on scope.' },
  { q: 'Do you offer one-off projects?', a: 'Yes. We take on standalone projects like logo design, website builds, and campaign concepts. No retainer required.' },
  { q: 'What platforms do you build on?', a: 'We work primarily with Next.js, Webflow, and Framer. For enterprise clients we can build on any stack.' },
  { q: 'How many revision rounds are included?', a: 'We include two structured revision rounds in every project. Additional rounds are billed at our standard day rate.' },
  { q: "What's your typical timeline?", a: 'A brand identity project takes 3–5 weeks. A full website design and build typically runs 8–12 weeks. Larger scopes are scoped individually.' },
  { q: 'Do you work with international clients?', a: 'Absolutely. Roughly 60% of our clients are based outside of Korea. We work async-first and hold weekly syncs on your timezone.' },
  { q: 'How does payment work?', a: 'We invoice 50% upfront and 50% on delivery. We accept wire transfer, credit card, and crypto.' },
  { q: 'Can you support our brand after launch?', a: 'Yes. We offer ongoing support and growth retainers for clients who want continued creative partnership.' },
];

export const blogPosts = [
  { slug: 'crafting-brand-identity', title: 'Inside the Studio: Our Process for Crafting a Standout Identity', date: 'May 23, 2026', category: 'Process', img: '/templates/portfolio/portfolio-4.png' },
  { slug: 'sketch-to-screen', title: 'From Sketch to Screen: How Ideas Evolve Into Impactful Designs', date: 'May 10, 2026', category: 'Design', img: '/templates/portfolio/portfolio-5.png' },
  { slug: 'visual-language', title: 'Why Every Brand Needs a Signature Visual Language', date: 'Apr 28, 2026', category: 'Branding', img: '/templates/portfolio/portfolio-6.png' },
];

export const siteConfig = {
  name: designerInfo.name,
  tagline: designerInfo.tagline,
  nav: designerInfo.nav
};
