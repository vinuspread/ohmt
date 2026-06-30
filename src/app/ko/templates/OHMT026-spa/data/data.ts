export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "홈", href: "/ko/templates/OHMT026-spa" },
  { label: "소개", href: "/ko/templates/OHMT026-spa/about" },
  { label: "서비스", href: "/ko/templates/OHMT026-spa/service" },
  { label: "가격", href: "/ko/templates/OHMT026-spa/pricing" },
  { label: "테라피스트", href: "/ko/templates/OHMT026-spa/therapists" },
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
  { id: "laser-resurfacing", title: "레이저 스킨 리서페이싱", description: "정밀 레이저로 피부 결과 톤을 개선하고 생기 있는 피부로 가꿔줍니다.", image: "/templates/OHMT026-spa/service-01.jpg" },
  { id: "chemical-peels", title: "케미컬 필", description: "순한 각질 제거 필로 환하고 고른 피부 톤을 만들어줍니다.", image: "/templates/OHMT026-spa/service-02.jpg" },
  { id: "hydrafacial", title: "하이드라페이셜", description: "딥 클렌징과 보충으로 피부에 윤기와 생기를 되찾아주는 리추얼.", image: "/templates/OHMT026-spa/service-03.jpg" },
  { id: "microneedling", title: "마이크로니들링", description: "자연 콜라겐 생성을 촉진하여 탄력 있고 매끄러운 피부로.", image: "/templates/OHMT026-spa/service-04.jpg" },
  { id: "body-massage", title: "딥 티슈 마사지", description: "강하고 치료적인 압력으로 근육 긴장을 완화하는 전신 릴리프.", image: "/templates/OHMT026-spa/service-05.jpg" },
  { id: "aromatherapy", title: "아로마테라피 리추얼", description: "에센셜 오일과 부드러운 마사지가 조화를 이루어 마음을 진정시키고 균형을 회복합니다.", image: "/templates/OHMT026-spa/service-06.jpg" },
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
  { id: "basic", name: "베이직", price: "$149", period: "/월", featured: false, features: ["월 1회 페이셜 세션", "피부 상담", "애프터케어 가이드"] },
  { id: "advanced", name: "어드밴스드", price: "$299", period: "/월", featured: true, features: ["월 2회 페이셜 세션", "맞춤형 피부 관리 플랜", "우선 예약", "무료 제품 세트"] },
  { id: "premium", name: "프리미엄", price: "$499", period: "/월", featured: false, features: ["월 무제한 세션", "전담 테라피스트", "홈케어 키트", "분기별 진료 리뷰"] },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { id: "emily-carter", name: "에밀리 카터 박사", role: "수석 테라피스트", image: "/templates/OHMT026-spa/team-01.jpg" },
  { id: "marcus-lee", name: "마커스 리", role: "시니어 에스테티션", image: "/templates/OHMT026-spa/team-02.jpg" },
  { id: "ana-rivera", name: "아나 리베라", role: "웰니스 스페셜리스트", image: "/templates/OHMT026-spa/team-03.jpg" },
  { id: "james-park", name: "제임스 박", role: "마사지 테라피스트", image: "/templates/OHMT026-spa/team-04.jpg" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  { question: "일반적인 세션 시간은 얼마나 걸리나요?", answer: "대부분의 트리트먼트는 예약하신 서비스에 따라 45분에서 90분 사이입니다." },
  { question: "첫 방문 전 상담이 필요한가요?", answer: "네, 짧은 상담을 통해 테라피스트가 귀하의 피부와 목표에 맞게 트리트먼트를 조정할 수 있습니다." },
  { question: "트리트먼트 전에 무엇을 피해야 하나요?", answer: "예약 48시간 전부터 자외선 노출, 레티노이드, 각질 제거 제품 사용을 피해주세요." },
  { question: "여러 트리트먼트를 병행할 수 있나요?", answer: "네, 테라피스트가 상담 중 피부 목표에 따라 복합 관리 플랜을 구성해드립니다." },
  { question: "취소 정책은 어떻게 되나요?", answer: "예약 변경이나 취소는 최소 24시간 전에 알려주시면 수수료 없이 가능합니다." },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  { name: "김수아", role: "2024년부터 회원", quote: "여기 팀은 진정으로 귀 기울여 줍니다. 피부가 이렇게 차분하고 균일해진 적이 없어요." },
  { name: "이준호", role: "2025년부터 회원", quote: "예약이 간편하고 매번 그 주에 필요한 맞춤 관리를 받는 기분이에요." },
  { name: "박지영", role: "2023년부터 회원", quote: "들어서는 순간부터 나가는 순간까지 프리미엄 경험 그 자체입니다." },
];

export interface StatCounter {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatCounter[] = [
  { value: 10, suffix: "k+", label: "만족한 고객" },
  { value: 98, suffix: "%", label: "만족도" },
  { value: 15, suffix: "+", label: "년 경력" },
];

export interface Advantage {
  title: string;
  description: string;
}

export const advantages: Advantage[] = [
  { title: "공인 테라피스트", description: "모든 트리트먼트는 고급 교육을 받은 면허 전문가가 진행합니다." },
  { title: "맞춤형 플랜", description: "당신의 피부는 유일합니다. 모든 세션을 개인에게 맞춥니다." },
  { title: "프리미엄 제품", description: "안전하고 확실한 결과를 위해 의료용 등급 유기농 제품을 사용합니다." },
  { title: "차분한 환경", description: "스트레스를 줄이고 치유를 촉진하도록 설계된 고요한 공간에서 휴식하세요." },
  { title: "유연한 예약", description: "언제든 온라인으로 예약하세요. 24시간 전 통보로 무료 변경 가능합니다." },
  { title: "결과 보장", description: "첫 세션 후 만족하지 않으시면 바로 조치해드립니다." },
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
    title: "여드름 흉터 개선",
    summary: "마이크로니들링과 레이저 치료를 통해 낭성 여드름에서 매끄럽고 자신감 있는 피부로의 6개월 여정.",
    detail: "고객은 장기간 활동성 여드름 이후 깊은 낭성 여드름 흉터를 가지고 내원했습니다. 프랙셔널 CO2 레이저 리서페이싱과 6주 간격 4회 마이크로니들링을 병행하고, 레티노이드와 비타민 C 세럼을 포함한 의료용 홈케어 루틴을 지원했습니다.",
    result: "6개월 후 흉터 깊이가 90% 감소했습니다. 고객은 자신감이 현저히 개선되었다고 보고했으며, 현재 분기별 유지 세션으로 결과를 관리하고 있습니다.",
  },
  {
    id: "anti-aging",
    title: "에이징 관리 트랜스포메이션",
    summary: "필, 콜라겐 유도, 맞춤형 스킨케어를 결합한 종합 항노화 프로그램.",
    detail: "40대 후반의 고객이 수술 없이 미세 주름, 탄력 저하, 색소 침착을 해결하고자 했습니다. 중간 깊이 케미컬 필과 PRP 마이크로니들링을 교차하는 12개월 프로토콜을 설계하고, 엄격한 선크림과 펩타이드 제품 사용을 병행했습니다.",
    result: "3개월 내 피부 탄력과 결이 눈에 띄게 개선되었습니다. 미세 주름이 60% 감소하고 전체 프로그램 후 색소 침착이 확연히 줄었습니다.",
  },
  {
    id: "hyperpigmentation",
    title: "색소 침착 교정",
    summary: "표적 필과 레이저 치료의 조합으로 기미와 자외선 손상 개선.",
    detail: "고객은 자외선 노출과 호르몬 변화로 악화된顽固한 기미를 가지고 있었습니다. 락트산 순차 표면 필과 광범위 자외선 차단 교육, 타이로시나제 억제 홈케어 프로토콜을 결합한 부드러운 접근법을 사용했습니다.",
    result: "5개월 동안 반동 색소 침착 없이 기미가 70% 개선되었습니다. 현재 8주마다 유지 필을 지속하고 있습니다.",
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
  { id: "skincare-routine-guide", title: "실제로 효과 있는 스킨케어 루틴 만들기", excerpt: "피부 타입과 고민에 맞는 루틴을 만드는 피부과 전문의 승인 단계별 가이드.", image: "/templates/OHMT026-spa/blog-01.jpg", date: "2026-02-15", author: "에밀리 카터 박사", category: "스킨케어" },
  { id: "benefits-of-microneedling", title: "첫 마이크로니들링, 무엇을 기대할까", excerpt: "준비부터 회복, 결과까지 콜라겐 유도 요법에 대해 알아야 할 모든 것.", image: "/templates/OHMT026-spa/blog-02.jpg", date: "2026-01-28", author: "마커스 리", category: "트리트먼트" },
  { id: "summer-skin-protection", title: "여름철 피부 보호 완벽 가이드", excerpt: "자외선 손상, 열 스트레스, 습기로부터 피부를 보호하는 전문가 추천 팁.", image: "/templates/OHMT026-spa/blog-03.jpg", date: "2026-01-10", author: "아나 리베라", category: "웰니스" },
  { id: "stress-and-skin", title: "스트레스가 피부에 미치는 영향과 해결법", excerpt: "스트레스 유발 트러블의 과학과 균형 회복에 도움이 되는 트리트먼트.", image: "/templates/OHMT026-spa/blog-04.jpg", date: "2025-12-22", author: "에밀리 카터 박사", category: "웰니스" },
];
