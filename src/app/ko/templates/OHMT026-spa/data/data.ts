export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "홈", href: "/ko/templates/OHMT026-spa" },
  { label: "소개", href: "/ko/templates/OHMT026-spa/about" },
  { label: "서비스", href: "/ko/templates/OHMT026-spa/service" },
  { label: "멤버십", href: "/ko/templates/OHMT026-spa/pricing" },
  { label: "전문가", href: "/ko/templates/OHMT026-spa/therapists" },
  { label: "블로그", href: "/ko/templates/OHMT026-spa/blog" },
  { label: "문의", href: "/ko/templates/OHMT026-spa/contact" },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  { id: "laser-resurfacing", title: "레이저 피부 관리", description: "피부 상태에 맞춰 레이저 강도를 조절하며 피부결과 톤을 세심하게 관리합니다.", image: "/templates/OHMT026-spa/service-laser-resurfacing.jpg" },
  { id: "chemical-peels", title: "필링 케어", description: "피부 타입에 맞춘 필링으로 묵은 각질과 거친 피부결을 정돈합니다.", image: "/templates/OHMT026-spa/service-chemical-peels.jpg" },
  { id: "hydrafacial", title: "수분 페이셜", description: "클렌징과 수분 공급을 함께 진행해 피부를 편안하고 촉촉하게 정돈합니다.", image: "/templates/OHMT026-spa/service-hydrafacial.jpg" },
  { id: "microneedling", title: "마이크로니들 케어", description: "피부 상태에 맞춰 미세 자극을 조절하며 피부결과 탄력을 관리합니다.", image: "/templates/OHMT026-spa/service-microneedling.jpg" },
  { id: "body-massage", title: "딥 티슈 마사지", description: "깊고 안정적인 압으로 뭉친 근육과 몸의 긴장을 부드럽게 풀어줍니다.", image: "/templates/OHMT026-spa/service-body-massage.jpg" },
  { id: "aromatherapy", title: "아로마 케어", description: "향과 부드러운 마사지로 몸의 긴장을 낮추고 편안한 휴식을 돕습니다.", image: "/templates/OHMT026-spa/service-aromatherapy.jpg" },
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
  { id: "basic", name: "베이직 멤버십", price: "149,000원", period: "/월", featured: false, features: ["월 1회 페이셜 케어", "피부 상담", "홈케어 안내"] },
  { id: "advanced", name: "어드밴스드 멤버십", price: "299,000원", period: "/월", featured: true, features: ["월 2회 페이셜 케어", "개인별 피부 관리 계획", "우선 예약", "홈케어 제품 세트"] },
  { id: "premium", name: "프리미엄 멤버십", price: "499,000원", period: "/월", featured: false, features: ["월 이용 횟수 제한 없음", "담당 전문가", "홈케어 키트", "분기별 관리 상담"] },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { id: "emily-carter", name: "에밀리 카터 박사", role: "수석 테라피스트", image: "/templates/OHMT026-spa/team-emily-carter.jpg" },
  { id: "marcus-lee", name: "마커스 리", role: "시니어 에스테티션", image: "/templates/OHMT026-spa/team-marcus-lee.jpg" },
  { id: "ana-rivera", name: "아나 리베라", role: "웰니스 스페셜리스트", image: "/templates/OHMT026-spa/team-ana-rivera.jpg" },
  { id: "james-park", name: "제임스 박", role: "마사지 테라피스트", image: "/templates/OHMT026-spa/team-james-park.jpg" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  { question: "일반적인 세션 시간은 얼마나 걸리나요?", answer: "대부분의 관리는 선택한 서비스에 따라 약 45분에서 90분 정도 진행됩니다." },
  { question: "첫 방문 전 상담이 필요한가요?", answer: "네. 첫 방문에는 짧은 상담을 진행해 피부 상태와 원하는 관리 방향을 확인합니다." },
  { question: "관리 전 피해야 할 것이 있나요?", answer: "관리 종류에 따라 주의사항이 다릅니다. 예약 전 안내문을 확인하고, 자극적인 각질 제거 제품은 미리 중단해주세요." },
  { question: "여러 관리를 함께 받을 수 있나요?", answer: "피부 상태와 관리 종류에 따라 가능합니다. 상담 후 무리가 없는 범위에서 구성해드립니다." },
  { question: "취소 정책은 어떻게 되나요?", answer: "예약 변경이나 취소는 최소 24시간 전에 알려주시면 수수료 없이 가능합니다." },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  { name: "김수아", role: "2024년부터 회원", quote: "상담할 때 제 이야기를 충분히 들어줘서 좋았어요. 관리 후에도 피부가 편안했습니다." },
  { name: "이준호", role: "2025년부터 회원", quote: "예약이 편하고, 방문할 때마다 그날 피부 상태에 맞춰 관리해줘서 만족스럽습니다." },
  { name: "박지영", role: "2023년부터 회원", quote: "공간이 조용하고 상담부터 마무리까지 서두르지 않아 편안했습니다." },
];

export interface StatCounter {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatCounter[] = [
  { value: 10, suffix: "k+", label: "누적 고객" },
  { value: 98, suffix: "%", label: "만족도" },
  { value: 15, suffix: "+", label: "년의 운영 경험" },
];

export interface Advantage {
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  { title: "전문 테라피스트", description: "각 분야의 교육과 경험을 갖춘 전문가가 상담과 케어를 진행합니다." },
  { title: "개인별 관리", description: "피부 상태와 목표에 따라 세션 구성을 조정합니다." },
  { title: "전문 관리 제품", description: "민감한 피부에도 부담이 적은 전문 제품을 선별해 사용합니다." },
  { title: "차분한 환경", description: "조용한 공간에서 상담부터 마무리까지 여유 있게 진행합니다." },
  { title: "유연한 예약", description: "언제든 온라인으로 예약하세요. 24시간 전 통보로 무료 변경 가능합니다." },
  { title: "사후 안내", description: "관리 후 불편하거나 궁금한 점이 있으면 확인 후 필요한 안내를 제공합니다." },
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
    title: "트러블 흔적 관리",
    summary: "레이저 관리와 마이크로니들 케어를 병행한 6개월 관리 사례.",
    detail: "오랜 트러블 이후 남은 피부 흔적과 거친 피부결을 고민하는 고객에게 레이저 관리와 마이크로니들 케어를 일정 간격으로 진행하고, 자극을 줄인 홈케어 방법을 함께 안내했습니다.",
    result: "6개월 동안 피부결과 흔적의 변화를 확인했으며, 이후에는 피부 상태에 따라 주기적인 유지 관리를 이어가고 있습니다.",
  },
  {
    id: "anti-aging",
    title: "탄력·피부결 관리",
    summary: "필링과 마이크로니들 케어, 홈케어를 함께 구성한 피부 관리 사례.",
    detail: "피부 탄력과 잔주름, 고르지 않은 피부 톤을 고민하는 고객에게 필링과 마이크로니들 케어를 피부 상태에 맞춰 진행하고, 자외선 차단과 홈케어 방법을 함께 안내했습니다.",
    result: "관리 기간 동안 피부결과 탄력, 피부 톤의 변화를 확인했으며 이후에도 주기적인 홈케어를 이어가고 있습니다.",
  },
  {
    id: "hyperpigmentation",
    title: "피부 톤 관리",
    summary: "필링과 레이저 관리를 함께 구성한 피부 톤 관리 사례.",
    detail: "자외선 노출 이후 고르지 않은 피부 톤을 고민하는 고객에게 피부 상태에 맞는 필링과 자외선 차단, 홈케어 방법을 안내했습니다.",
    result: "5개월 동안 피부 톤의 변화를 살피며 관리했고, 이후에는 피부 상태에 따라 유지 관리를 진행하고 있습니다.",
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
  { id: "skincare-routine-guide", title: "내 피부에 맞는 루틴 만들기", excerpt: "피부 타입과 고민에 맞춰 아침, 저녁 루틴을 정리하는 방법.", image: "/templates/OHMT026-spa/blog-01.jpg", date: "2026-02-15", author: "에밀리 카터 박사", category: "스킨케어" },
  { id: "benefits-of-microneedling", title: "첫 마이크로니들 케어 전 알아둘 점", excerpt: "관리 전 준비와 이후 주의사항을 첫 방문 전에 확인해보세요.", image: "/templates/OHMT026-spa/blog-02.jpg", date: "2026-01-28", author: "마커스 리", category: "트리트먼트" },
  { id: "summer-skin-protection", title: "여름 피부를 지키는 기본 루틴", excerpt: "자외선, 열감, 습도 변화에 맞춰 피부 부담을 줄이는 방법.", image: "/templates/OHMT026-spa/blog-03.jpg", date: "2026-01-10", author: "아나 리베라", category: "웰니스" },
  { id: "stress-and-skin", title: "스트레스가 피부에 남기는 신호", excerpt: "스트레스성 트러블을 줄이기 위해 살펴볼 생활 습관과 케어.", image: "/templates/OHMT026-spa/blog-04.jpg", date: "2025-12-22", author: "에밀리 카터 박사", category: "웰니스" },
];
