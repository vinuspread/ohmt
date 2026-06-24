export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/en/templates/OHMT026-spa-EN" },
  { label: "About", href: "/en/templates/OHMT026-spa-EN/about" },
  { label: "Service", href: "/en/templates/OHMT026-spa-EN/service" },
  { label: "Blog", href: "/en/templates/OHMT026-spa-EN/blog" },
  { label: "Contact", href: "/en/templates/OHMT026-spa-EN/contact" },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "laser-resurfacing",
    title: "Laser Skin Resurfacing",
    description: "Smooths texture and tone with precision laser treatment for visibly renewed skin.",
    image: "/templates/spa/service-laser-resurfacing.jpg",
  },
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    description: "Gentle exfoliating peels that reveal brighter, more even-toned skin.",
    image: "/templates/spa/service-chemical-peels.jpg",
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial Therapy",
    description: "A deep cleanse and hydration ritual that leaves skin glowing and refreshed.",
    image: "/templates/spa/service-hydrafacial.jpg",
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Stimulates natural collagen renewal for firmer, smoother skin over time.",
    image: "/templates/spa/service-microneedling.jpg",
  },
  {
    id: "body-massage",
    title: "Deep Tissue Massage",
    description: "Targets muscle tension with firm, therapeutic pressure for full-body relief.",
    image: "/templates/spa/service-body-massage.jpg",
  },
  {
    id: "aromatherapy",
    title: "Aromatherapy Ritual",
    description: "Blends essential oils with gentle massage to calm the mind and restore balance.",
    image: "/templates/spa/service-aromatherapy.jpg",
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  featured: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$149",
    period: "/mo",
    featured: false,
    features: ["1 facial session per month", "Skin consultation", "Aftercare guide"],
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "$299",
    period: "/mo",
    featured: true,
    features: ["2 facial sessions per month", "Personalized skin plan", "Priority booking", "Complimentary product set"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$499",
    period: "/mo",
    featured: false,
    features: ["Unlimited monthly sessions", "Dedicated therapist", "At-home care kit", "Quarterly progress review"],
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { id: "emily-carter", name: "Dr. Emily Carter", role: "Lead Therapist", image: "/templates/spa/team-emily-carter.jpg" },
  { id: "marcus-lee", name: "Marcus Lee", role: "Senior Esthetician", image: "/templates/spa/team-marcus-lee.jpg" },
  { id: "ana-rivera", name: "Ana Rivera", role: "Wellness Specialist", image: "/templates/spa/team-ana-rivera.jpg" },
  { id: "james-park", name: "James Park", role: "Massage Therapist", image: "/templates/spa/team-james-park.jpg" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How long does a typical session last?",
    answer: "Most treatments run between 45 and 90 minutes, depending on the service you book.",
  },
  {
    question: "Do I need a consultation before my first visit?",
    answer: "Yes, we recommend a short consultation so your therapist can tailor the treatment to your skin and goals.",
  },
  {
    question: "What should I avoid before a treatment?",
    answer: "Avoid sun exposure, retinoids, and exfoliating products for 48 hours before your appointment.",
  },
  {
    question: "Can I combine multiple treatments?",
    answer: "Yes, our therapists can build a combined plan during your consultation based on your skin goals.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We ask for at least 24 hours notice to reschedule or cancel an appointment without a fee.",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sophie Allen",
    role: "Member since 2024",
    quote: "The team here genuinely listens. My skin has never felt this calm and even.",
  },
  {
    name: "Daniel Kim",
    role: "Member since 2025",
    quote: "Booking is effortless and every session feels personalized to what I need that week.",
  },
  {
    name: "Priya Nair",
    role: "Member since 2023",
    quote: "A premium experience from the moment you walk in to the moment you leave.",
  },
];

export interface StatCounter {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatCounter[] = [
  { value: 10, suffix: "k+", label: "Happy clients" },
  { value: 98, suffix: "%", label: "Satisfaction rate" },
  { value: 15, suffix: "+", label: "Years experience" },
];

export interface Advantage {
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  { title: "Certified therapists", description: "Every treatment is led by licensed professionals with advanced training." },
  { title: "Personalized plans", description: "Your skin is unique - we tailor every session to your specific needs." },
  { title: "Premium products", description: "We use medical-grade and organic products for safe, visible results." },
  { title: "Calm environment", description: "Relax in a serene space designed to reduce stress and promote healing." },
  { title: "Flexible booking", description: "Schedule online anytime. Reschedule with 24-hour notice at no cost." },
  { title: "Results guaranteed", description: "If you're not satisfied after your first session, we'll make it right." },
];

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  detail: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "acne-recovery",
    title: "Acne Scar Recovery",
    summary: "A 6-month journey from cystic acne to smooth, confident skin using microneedling and laser therapy.",
    detail: "The client presented with deep cystic acne scars after years of active acne. We combined fractional CO2 laser resurfacing with a series of 4 microneedling sessions at 6-week intervals, supported by a medical-grade home care routine including retinoids and vitamin C serum.",
    result: "90% reduction in scar depth after 6 months. Client reported significantly improved confidence and now maintains results with quarterly maintenance sessions.",
  },
  {
    id: "anti-aging",
    title: "Age Management Transformation",
    summary: "A comprehensive anti-aging program combining peels, collagen induction, and customized skincare.",
    detail: "The client in her late 40s wanted to address fine lines, loss of firmness, and uneven pigmentation without surgery. We designed a 12-month protocol alternating between medium-depth chemical peels and microneedling with PRP, supported by a strict sunscreen and peptide regimen.",
    result: "Visible improvement in skin firmness and texture within 3 months. Fine lines reduced by 60% and pigmentation visibly faded after the full program.",
  },
  {
    id: "hyperpigmentation",
    title: "Hyperpigmentation Correction",
    summary: "Melasma and sun damage reversed through a targeted combination of peels and laser therapy.",
    detail: "The client had stubborn melasma exacerbated by sun exposure and hormonal changes. We used a gentle approach of serial superficial peels (lactic acid) combined with broad-spectrum sunscreen education and a tyrosinase-inhibitor home care protocol.",
    result: "Melasma improved by 70% over 5 months without rebound hyperpigmentation. The client continues maintenance peels every 8 weeks.",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "skincare-routine-guide",
    title: "Building a Skincare Routine That Actually Works",
    excerpt: "A dermatologist-approved step-by-step guide to creating a routine tailored to your skin type and concerns.",
    image: "/templates/spa/blog-01.jpg",
    date: "2026-02-15",
    author: "Dr. Emily Carter",
    category: "Skincare",
  },
  {
    id: "benefits-of-microneedling",
    title: "What to Expect From Your First Microneedling Session",
    excerpt: "Everything you need to know about collagen induction therapy, from prep to recovery and results.",
    image: "/templates/spa/blog-02.jpg",
    date: "2026-01-28",
    author: "Marcus Lee",
    category: "Treatments",
  },
  {
    id: "summer-skin-protection",
    title: "Summer Skin Protection: A Complete Guide",
    excerpt: "Protect your skin from UV damage, heat stress, and humidity with these expert-recommended tips.",
    image: "/templates/spa/blog-03.jpg",
    date: "2026-01-10",
    author: "Ana Rivera",
    category: "Wellness",
  },
  {
    id: "stress-and-skin",
    title: "How Stress Affects Your Skin (And What to Do About It)",
    excerpt: "The science behind stress-induced breakouts and the treatments that can help restore balance.",
    image: "/templates/spa/blog-04.jpg",
    date: "2025-12-22",
    author: "Dr. Emily Carter",
    category: "Wellness",
  },
];

export const instagramImages: string[] = [
  "/templates/spa/instagram-01.jpg",
  "/templates/spa/instagram-02.jpg",
  "/templates/spa/instagram-03.jpg",
  "/templates/spa/instagram-04.jpg",
  "/templates/spa/instagram-05.jpg",
  "/templates/spa/instagram-06.jpg",
  "/templates/spa/instagram-07.jpg",
  "/templates/spa/instagram-08.jpg",
];
