export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/en/templates/OHMT026-spa" },
  { label: "About", href: "/en/templates/OHMT026-spa/about" },
  { label: "Service", href: "/en/templates/OHMT026-spa/service" },
  { label: "Pricing", href: "/en/templates/OHMT026-spa/pricing" },
  { label: "Therapists", href: "/en/templates/OHMT026-spa/therapists" },
  { label: "Blog", href: "/en/templates/OHMT026-spa/blog" },
  { label: "Contact", href: "/en/templates/OHMT026-spa/contact" },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  priceFrom: string;
  idealFor: string;
}

export const services: Service[] = [
  {
    id: "laser-resurfacing",
    title: "Laser Skin Resurfacing",
    description: "Smooths texture and tone with precision laser treatment for visibly renewed skin.",
    image: "/templates/OHMT026-spa/service-laser-resurfacing.jpg",
    duration: "60 min",
    priceFrom: "From $220",
    idealFor: "For pores & texture",
  },
  {
    id: "chemical-peels",
    title: "Chemical Peels",
    description: "Gentle exfoliating peels that reveal brighter, more even-toned skin.",
    image: "/templates/OHMT026-spa/service-chemical-peels.jpg",
    duration: "40 min",
    priceFrom: "From $140",
    idealFor: "For dull tone",
  },
  {
    id: "hydrafacial",
    title: "Hydrafacial Therapy",
    description: "A deep cleanse and hydration ritual that leaves skin glowing and refreshed.",
    image: "/templates/OHMT026-spa/service-hydrafacial.jpg",
    duration: "50 min",
    priceFrom: "From $180",
    idealFor: "For instant glow",
  },
  {
    id: "microneedling",
    title: "Microneedling",
    description: "Stimulates natural collagen renewal for firmer, smoother skin over time.",
    image: "/templates/OHMT026-spa/service-microneedling.jpg",
    duration: "60 min",
    priceFrom: "From $250",
    idealFor: "For firmness & scars",
  },
  {
    id: "body-massage",
    title: "Deep Tissue Massage",
    description: "Targets muscle tension with firm, therapeutic pressure for full-body relief.",
    image: "/templates/OHMT026-spa/service-body-massage.jpg",
    duration: "75 min",
    priceFrom: "From $160",
    idealFor: "For chronic tension",
  },
  {
    id: "aromatherapy",
    title: "Aromatherapy Ritual",
    description: "Blends essential oils with gentle massage to calm the mind and restore balance.",
    image: "/templates/OHMT026-spa/service-aromatherapy.jpg",
    duration: "60 min",
    priceFrom: "From $130",
    idealFor: "For stress & sleep",
  },
];

export interface PricingComparisonRow {
  feature: string;
  basic: string | boolean;
  advanced: string | boolean;
  premium: string | boolean;
}

export const pricingComparison: PricingComparisonRow[] = [
  { feature: "Sessions per month", basic: "1", advanced: "2", premium: "Unlimited" },
  { feature: "Priority booking", basic: false, advanced: true, premium: true },
  { feature: "At-home care kit", basic: false, advanced: false, premium: true },
  { feature: "Quarterly progress review", basic: false, advanced: false, premium: true },
  { feature: "Change or cancel plan", basic: "Anytime", advanced: "Anytime", premium: "Anytime" },
];

export const pricingFaqs: FaqItem[] = [
  { question: "How does billing work?", answer: "You're billed automatically each month, starting from the date of your first booked session." },
  { question: "Can I get a refund?", answer: "Unused sessions are fully refundable within 7 days of payment." },
  { question: "Can I switch plans?", answer: "Yes, upgrade or downgrade anytime from your account or during a consultation." },
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
  bio: string;
  credentials: string[];
  specialtyIds: string[];
}

export const team: TeamMember[] = [
  { id: "emily-carter", name: "Dr. Emily Carter", role: "Lead Therapist", image: "/templates/OHMT026-spa/team-emily-carter.jpg", bio: "With 15 years in clinical dermatology, Emily specializes in laser and resurfacing treatments and personally leads every initial skin assessment.", credentials: ["Board-certified dermatologist", "International laser certification"], specialtyIds: ["laser-resurfacing", "microneedling"] },
  { id: "marcus-lee", name: "Marcus Lee", role: "Senior Esthetician", image: "/templates/OHMT026-spa/team-marcus-lee.jpg", bio: "Marcus focuses on exfoliation and tone correction, designing gentle protocols for sensitive skin.", credentials: ["Certified chemical peel specialist", "10 years experience"], specialtyIds: ["chemical-peels", "hydrafacial"] },
  { id: "ana-rivera", name: "Ana Rivera", role: "Wellness Specialist", image: "/templates/OHMT026-spa/team-ana-rivera.jpg", bio: "Ana treats body and mind together as a wellness specialist, with particular care for stress-related skin concerns.", credentials: ["Certified aromatherapist", "Wellness coaching certificate"], specialtyIds: ["aromatherapy", "hydrafacial"] },
  { id: "james-park", name: "James Park", role: "Massage Therapist", image: "/templates/OHMT026-spa/team-james-park.jpg", bio: "James relieves chronic tension with firm, therapeutic deep tissue work, drawing on extensive experience in athletic recovery massage.", credentials: ["Sports massage certification", "8 years experience"], specialtyIds: ["body-massage"] },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  { year: "2010", title: "First private treatment room opens", description: "Our story began in a single room." },
  { year: "2014", title: "Medical team joins", description: "A board-certified dermatologist and senior esthetician joined to form our full clinical team." },
  { year: "2018", title: "In-house home care line launches", description: "We introduced our own aftercare product line." },
  { year: "2023", title: "10,000 clients served", description: "A number built on more than a decade of trust." },
  { year: "2026", title: "SERENITY today", description: "A wellness clinic designed as one continuous flow, from diagnosis to aftercare." },
];

export interface Certification {
  label: string;
  detail: string;
}

export const certifications: Certification[] = [
  { label: "Medical-grade equipment", detail: "All laser and resurfacing equipment is FDA-approved, medical-grade." },
  { label: "Hygiene protocol", detail: "Every treatment room is fully sanitized between sessions; single-use tools by default." },
  { label: "Ongoing education", detail: "All therapists complete quarterly training on the latest techniques." },
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
  featured?: boolean;
}

export const contactFaqs: FaqItem[] = [
  { question: "What should I bring on my first visit?", answer: "Just your ID and a list of any medications you're currently taking." },
  { question: "Can I go straight into a treatment without a consultation?", answer: "Your first visit always starts with a free 15-minute consultation." },
  { question: "Is there a no-show policy?", answer: "A no-show without prior notice will deduct one session from your plan." },
  { question: "Can I bring someone with me?", answer: "Guests are welcome in the waiting area, but only clients may enter treatment rooms." },
];

export const preCare: string[] = [
  "Avoid sun exposure for 48 hours before your appointment.",
  "Stop using retinoids or exfoliating products 3 days before.",
  "Come in with light or no makeup on the day.",
];

export const postCare: string[] = [
  "Apply sunscreen diligently for 24 hours after treatment.",
  "Avoid saunas, steam rooms, and intense exercise on the day.",
  "Follow your prescribed home care routine in order.",
];

export const blogPosts: BlogPost[] = [
  {
    id: "skincare-routine-guide",
    title: "Building a Skincare Routine That Actually Works",
    excerpt: "A dermatologist-approved step-by-step guide to creating a routine tailored to your skin type and concerns.",
    image: "/templates/OHMT026-spa/blog-01.jpg",
    date: "2026-02-15",
    author: "Dr. Emily Carter",
    category: "Skincare",
    featured: true,
  },
  {
    id: "benefits-of-microneedling",
    title: "What to Expect From Your First Microneedling Session",
    excerpt: "Everything you need to know about collagen induction therapy, from prep to recovery and results.",
    image: "/templates/OHMT026-spa/blog-02.jpg",
    date: "2026-01-28",
    author: "Marcus Lee",
    category: "Treatments",
  },
  {
    id: "summer-skin-protection",
    title: "Summer Skin Protection: A Complete Guide",
    excerpt: "Protect your skin from UV damage, heat stress, and humidity with these expert-recommended tips.",
    image: "/templates/OHMT026-spa/blog-03.jpg",
    date: "2026-01-10",
    author: "Ana Rivera",
    category: "Wellness",
  },
  {
    id: "stress-and-skin",
    title: "How Stress Affects Your Skin (And What to Do About It)",
    excerpt: "The science behind stress-induced breakouts and the treatments that can help restore balance.",
    image: "/templates/OHMT026-spa/blog-04.jpg",
    date: "2025-12-22",
    author: "Dr. Emily Carter",
    category: "Wellness",
  },
];

export const instagramImages: string[] = [
  "/templates/OHMT026-spa/instagram-01.jpg",
  "/templates/OHMT026-spa/instagram-02.jpg",
  "/templates/OHMT026-spa/instagram-03.jpg",
  "/templates/OHMT026-spa/instagram-04.jpg",
  "/templates/OHMT026-spa/instagram-05.jpg",
  "/templates/OHMT026-spa/instagram-06.jpg",
  "/templates/OHMT026-spa/instagram-07.jpg",
  "/templates/OHMT026-spa/instagram-08.jpg",
];
