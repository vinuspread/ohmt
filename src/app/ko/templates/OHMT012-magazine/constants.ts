export interface Article {
  slug: string;
  title: string;
  desc: string;
  img: string;
  tag?: string;
  author: string;
  content?: string;
}

export const featuredArticles: Article[] = [
  {
    slug: "minimalist-architecture-nordic-cities",
    tag: "디자인",
    title: "북유럽 미니멀 건축의 진화",
    desc: "코펜하겐에서 스톡홀름까지, 기능과 자연 소재가 도시 풍경을 바꾸는 방식.",
    img: "/templates/OHMT012-magazine/mag-article-nordic-architecture-v2.jpg",
    author: "Anders Holm",
    content: "북유럽 건축은 단순한 형태와 기능, 자연 소재에 대한 존중으로 오랫동안 사랑받아 왔습니다. 알바르 알토의 모더니즘부터 숲과 어우러지는 패시브하우스까지, 이 지역의 건축은 전통을 지키면서도 꾸준히 변해왔습니다.\n코펜하겐에서는 자전거 중심의 도시 계획이 사람의 눈높이와 이웃 간의 관계를 고려한 건축으로 이어졌습니다. 스톡홀름에서는 유리와 철재가 오래된 수변 경관과 조화를 이루고, 오슬로의 공공건축은 지속가능한 기술을 과감하게 실험합니다.\n이 흐름을 관통하는 태도는 절제를 제약이 아닌 설계 도구로 사용하는 것입니다. 목재와 콘크리트는 감추지 않고, 자연광은 공간을 만드는 재료로 다룹니다. 그렇게 완성된 건축은 낡기보다 시간이 흐를수록 깊이를 더합니다."
  },
  {
    slug: "hidden-galleries-berlin-east-side",
    tag: "문화",
    title: "베를린 동부의 숨은 갤러리",
    desc: "오래된 산업 공간에서 이어지는 베를린의 독립 예술 현장.",
    img: "/templates/OHMT012-magazine/mag-article-berlin-gallery-v2.jpg",
    author: "Marta Weber",
    content: "베를린의 예술은 안뜰과 폐공장, 전쟁의 흔적이 남은 건물처럼 도시의 틈에서 성장해 왔습니다. 특히 동부 지역에는 오래된 산업 시설을 개조한 작은 갤러리가 곳곳에 숨어 있습니다.\n간판조차 없는 경우가 많고, 소식은 주로 입소문으로 퍼집니다. 하얀 벽으로 정돈된 상업 갤러리와 달리, 노출된 콘크리트와 벽돌이 작품의 일부처럼 남아 베를린만의 분위기를 만듭니다.\n이 공간들은 안정적이지 않습니다. 문을 연 지 몇 년 만에 임대료나 개발 문제로 사라지기도 합니다. 하지만 바로 그 덧없음 때문에 사람들은 지금 열리는 전시를 놓치지 않으려 합니다."
  },
  {
    slug: "regenerative-agriculture-future",
    tag: "지속가능성",
    title: "재생 농업이 바꾸는 미래",
    desc: "토양을 되살리면서 지역의 먹거리를 생산하는 농부들.",
    img: "/templates/OHMT012-magazine/mag-article-regenerative-farm-v2.jpg",
    author: "Sarah Chen",
    content: "재생 농업은 단순히 생산량을 유지하는 데서 멈추지 않습니다. 토양을 회복하고 생물다양성을 높이며, 농지가 더 오래 건강하게 기능하도록 만드는 데 초점을 둡니다.\n농부들은 땅을 갈지 않는 무경운 농법, 피복 작물, 순환 방목을 도입해 자연의 순환을 되살리고 있습니다. 그 결과 토양은 물을 더 오래 머금고, 농장은 가뭄과 이상 기후에도 조금 더 견딜 수 있게 됩니다.\n전환 과정은 쉽지 않습니다. 초기에는 수확량이 줄 수 있고 새로운 장비에도 비용이 듭니다. 그럼에도 장기적으로 비료와 물 사용을 줄이고 토양의 회복력을 높일 수 있다는 점에서 재생 농업은 중요한 대안으로 주목받고 있습니다."
  }
];

export const editorsPicks: Article[] = [
  {
    slug: "sensory-language-ceramics",
    title: "손으로 빚은 도자기의 가치",
    desc: "빠른 시대에 손으로 만든 물건이 오래 남는 이유.",
    img: "/templates/OHMT012-magazine/mag-editors-ceramics-v3.jpg",
    author: "Julian Vance",
    content: "흙을 다루는 일에는 기다림이 필요합니다. 가마를 서두를 수도, 한 번 구운 결과를 되돌릴 수도 없습니다. 이 느린 과정이 오히려 사람들을 도자기로 이끕니다.\n대량생산품이 넘치는 시대일수록, 한 사람이 오랜 시간 공들여 만든 물건의 가치는 더 선명해집니다. 손으로 빚은 그릇에는 미세한 흔들림과 비대칭이 남고, 그것은 어떤 기계도 똑같이 복제할 수 없는 흔적이 됩니다.\n수집가들은 이름 없는 공장 제품보다 작가의 개성이 드러나는 생활 도자를 찾기 시작했습니다. 쓰임과 작품의 경계가 흐려지면서, 도자기는 일상 속에서 경험하는 예술이 되고 있습니다."
  },
  {
    slug: "urban-gardening-vertical-revolution",
    title: "도시 농업, 위로 자라다",
    desc: "버려진 벽과 옥상을 식량을 만드는 공간으로 바꾸는 실험.",
    img: "/templates/OHMT012-magazine/mag-editors-urban-farming-v3.jpg",
    author: "Elena Rossi",
    content: "수직 농장은 한때 전시장에서나 볼 법한 기술로 여겨졌지만, 이제는 도시 곳곳에서 실제 식량을 생산하고 있습니다. 벽과 옥상에 층층이 설치한 재배 시설은 좁은 공간에서도 높은 생산성을 내고 물 사용량도 줄일 수 있습니다.\n중요한 변화는 기술보다 누가 그것을 운영하느냐에 있습니다. 대형 기업뿐 아니라 지역 단체와 학교도 주차장과 유휴 공간에 작은 수직 농장을 만들며, 쓰이지 않던 콘크리트 공간을 생활 기반으로 바꾸고 있습니다.\n도시 안에서 재배한 농산물은 이동 거리가 짧아 운송 부담을 줄이고, 신선한 식품을 가까운 곳에서 구할 수 있게 합니다. 수직 농업은 도시의 빈 공간을 지역의 먹거리와 연결하는 새로운 방법입니다."
  },
  {
    slug: "slow-living-digital-world",
    title: "빠른 세상에서 천천히 사는 법",
    desc: "디자인과 일상에서 속도를 늦추는 방법.",
    img: "/templates/OHMT012-magazine/mag-article-slow-living-v2.jpg",
    author: "Julian Vance",
    tag: "제42호 - 2026년 여름",
    content: "알림과 무한 스크롤이 일상이 된 시대에 슬로우 리빙은 단순한 휴식법이 아닙니다. 무엇에 시간을 쓰고 무엇을 덜어낼지 스스로 선택하자는 태도에 가깝습니다. 이 생각은 개인의 습관을 넘어 집과 일터, 도시를 설계하는 방식에도 영향을 줍니다.\n일본의 와비사비와 북유럽의 휘게처럼 여러 문화는 오래전부터 천천히 살아가는 가치를 알고 있었습니다. 오늘날 우리는 그 원칙을 다시 발견해 공간, 물건, 일하는 방식에 맞게 적용하고 있습니다.\n속도를 늦추는 일에도 의식적인 노력이 필요합니다. 알림을 끄고, 휴대전화를 잠시 멀리 두고, 한 가지 일에 집중하는 작은 선택에서 시작할 수 있습니다. 중요한 것은 느리게 사는 모습이 아니라, 자신의 속도를 되찾는 일입니다."
  },
  {
    slug: "sustainable-fashion-circular",
    title: "순환하는 패션의 미래",
    desc: "버리는 옷을 줄이고 다시 쓰는 구조를 만드는 방법.",
    img: "/templates/OHMT012-magazine/mag-article-circular-fashion-v2.jpg",
    author: "Clara Hoffmann",
    content: "패션 산업은 생산하고 소비한 뒤 버리는 선형 구조에서 벗어나려 하고 있습니다. 소비자들이 패스트 패션의 환경 부담을 인식하면서, 오래 쓰고 다시 순환시키는 새로운 방식이 주목받고 있습니다.\n의류 대여와 중고 거래, 브랜드의 회수 프로그램, 섬유 재활용 기술은 모두 순환형 패션의 일부입니다. 일부 브랜드는 제품을 쉽게 분해하고 재활용할 수 있도록 처음부터 소재와 봉제 방식을 바꾸고 있습니다.\n전환은 간단하지 않습니다. 공급망을 다시 설계하고 새로운 설비에 투자해야 하며, 소비자가 옷을 소유하고 버리는 방식도 달라져야 합니다. 하지만 자원 낭비를 줄이고 제품의 수명을 늘린다는 점에서 변화의 필요성은 분명합니다.\n가장 실질적인 혁신은 눈에 잘 띄지 않는 곳에서 일어납니다. 한 가지 섬유로 옷을 만들거나 쉽게 분리할 수 있는 구조를 적용하면, 사용이 끝난 옷을 다시 원료로 되돌리기가 훨씬 쉬워집니다."
  },
  {
    slug: "return-to-film-photography",
    title: "다시 필름 사진을 찾는 이유",
    desc: "아날로그 사진이 이미지와 맺는 관계를 바꾸는 방식.",
    img: "/templates/OHMT012-magazine/mag-article-film-photography-v2.jpg",
    author: "David Kim",
    content: "누구나 스마트폰으로 수천 장의 사진을 찍는 시대에 필름 카메라를 찾는 사람이 다시 늘고 있습니다. 디지털 환경에서 자란 세대가 오히려 필름의 느린 과정과 물성을 새롭게 받아들이고 있습니다.\n필름의 매력은 제한에서 시작됩니다. 한 롤에 담을 수 있는 장면이 정해져 있어 셔터를 누르기 전에 더 오래 바라보게 됩니다. 결과를 바로 확인할 수 없고, 필름마다 다른 입자와 색감이 남는다는 점도 디지털 사진과 다른 경험을 만듭니다.\n더 중요한 것은 사진을 대하는 태도입니다. 모든 순간을 기록하고 곧바로 공유하는 대신, 필름은 한 장면을 선택하고 기다리게 합니다. 현상된 네거티브는 그 순간을 남기기로 결정했다는 물리적인 기록이 됩니다."
  },
  {
    slug: "hidden-costs-minimalism",
    title: "미니멀리즘이 감추고 있는 것",
    desc: "적게 소유하는 미학과 그 이면을 다시 살펴보다.",
    img: "/templates/OHMT012-magazine/mag-article-minimalism-cost-v2.jpg",
    author: "Sophia Torres",
    content: "미니멀리즘은 오늘날 가장 익숙한 디자인 언어 중 하나입니다. 정돈된 인테리어와 매끄러운 제품 디자인은 명료함과 세련됨을 보여주는 상징처럼 사용됩니다.\n하지만 그 이면에는 복잡한 질문이 남습니다. 적게 소유하는 선택은 필요할 때 다시 살 수 있다는 여유를 전제로 하기도 합니다. 또한 미니멀리즘의 시각 언어는 일본의 와비사비와 북유럽 기능주의처럼 여러 문화적 전통에서 영향을 받았지만, 그 배경은 자주 생략됩니다.\n기업이 미니멀리즘을 상품화하는 방식도 살펴볼 필요가 있습니다. 적게 가지자는 메시지가 또 다른 소비를 부추긴다면, 미니멀리즘은 삶의 태도보다 하나의 판매 방식에 가까워질 수 있습니다."
  },
  {
    slug: "acoustics-of-silence",
    title: "침묵을 설계하는 법",
    desc: "도시의 소음에서 벗어나 집중과 휴식을 돕는 공간.",
    img: "/templates/OHMT012-magazine/mag-editors-acoustic-silence-v3.jpg",
    author: "Julian Vance",
    content: "소리가 거의 반사되지 않는 무향실에 들어가면 자신의 심장 소리까지 들린다고 합니다. 일상에 그런 극단적인 정적이 필요하지는 않지만, 조용한 공간을 찾는 욕구는 도서관과 사무실, 공항 등 여러 장소의 설계에 영향을 주고 있습니다.\n디자이너들은 녹음 스튜디오에서 사용하던 방법을 일상 공간에 적용합니다. 부드럽게 닫히는 문, 펠트 패널, 소리가 멀리 퍼지지 않도록 꺾인 동선이 대표적입니다. 이런 장치는 눈에 잘 띄지 않지만 공간의 분위기를 크게 바꿉니다.\n조용함은 단순한 편안함을 넘어 집중과 기억에도 영향을 줍니다. 그래서 침묵은 우연히 생기는 상태가 아니라, 필요에 따라 설계해야 할 하나의 기능이 됩니다."
  }
];

export const featuredStories: Article[] = [
  {
    slug: "brutalist-heart-london",
    tag: "사진",
    title: "빛과 그림자로 기록한 런던 브루탈리즘",
    desc: "거친 콘크리트 건축이 만든 도시의 표정을 따라가다.",
    img: "/templates/OHMT012-magazine/mag-article-brutalist-london-v2.jpg",
    author: "Priya Nair",
    content: "브루탈리즘은 런던에서 여전히 논쟁적인 건축 양식입니다. 차갑고 비인간적이라는 비판과, 재료를 숨기지 않는 정직한 건축이라는 평가가 동시에 따라다닙니다. 사진으로 이 건축을 제대로 담으려면 강한 햇빛과 짙은 그림자를 피하기보다 활용해야 합니다.\n바비칸과 국립극장은 잘 알려진 사례지만, 더 흥미로운 장면은 도심 바깥의 주거단지에서 발견됩니다. 관광지로 주목받지 않아도 같은 시대의 이상과 설계 원칙이 고스란히 남아 있습니다.\n거칠게 드러난 콘크리트는 세월을 감추지 않습니다. 표면의 흔적과 빛의 변화가 건물의 시간을 그대로 보여줍니다. 수십 년이 지난 지금, 그 정직함은 처음의 평가와는 다른 아름다움을 만들어냅니다."
  },
  {
    slug: "hidden-teahouses-kyoto",
    tag: "여행",
    title: "교토 외곽의 숨은 찻집",
    desc: "관광지에서 벗어나 만나는 오래된 차 문화와 고요.",
    img: "/templates/OHMT012-magazine/mag-article-kyoto-teahouse-v2.jpg",
    author: "Priya Nair",
    content: "교토의 유명한 찻집에는 늘 긴 줄이 이어지지만, 외곽으로 조금만 나가면 전혀 다른 풍경을 만날 수 있습니다. 몇 세대에 걸쳐 단골을 맞아온 작은 찻집들은 간판조차 없는 경우가 많습니다.\n이곳은 광고보다 소개로 손님을 맞습니다. 차는 잎에 맞는 온도로 천천히 우리고, 대화 사이의 침묵도 서비스의 일부처럼 받아들입니다. 빠르게 소비되는 관광 경험과는 다른 시간의 흐름이 있습니다.\n사라지는 것은 다도 자체보다 그 주변의 맥락일지 모릅니다. 주인이 은퇴하면서 오래된 찻집이 문을 닫을수록, 교토 외곽은 차를 본래의 속도로 경험할 수 있는 드문 장소가 되어갑니다."
  }
];

export const heroArticle: Article = {
  slug: "slow-living-digital-world",
  title: "빠른 세상에서 천천히 사는 법",
  desc: "디자인과 일상에서 속도를 늦추는 방법.",
  img: "/templates/OHMT012-magazine/mag-article-slow-living-v2.jpg",
  author: "Julian Vance",
  tag: "제42호 - 2026년 여름",
  content: "알림과 무한 스크롤이 일상이 된 시대에 슬로우 리빙은 단순한 휴식법이 아닙니다. 무엇에 시간을 쓰고 무엇을 덜어낼지 스스로 선택하자는 태도에 가깝습니다. 이 생각은 개인의 습관을 넘어 집과 일터, 도시를 설계하는 방식에도 영향을 줍니다.\n일본의 와비사비와 북유럽의 휘게처럼 여러 문화는 오래전부터 천천히 살아가는 가치를 알고 있었습니다. 오늘날 우리는 그 원칙을 다시 발견해 공간, 물건, 일하는 방식에 맞게 적용하고 있습니다.\n속도를 늦추는 일에도 의식적인 노력이 필요합니다. 알림을 끄고, 휴대전화를 잠시 멀리 두고, 한 가지 일에 집중하는 작은 선택에서 시작할 수 있습니다. 중요한 것은 느리게 사는 모습이 아니라, 자신의 속도를 되찾는 일입니다."
};

export interface Issue {
  number: number;
  season: string;
  year: number;
  theme: string;
  cover: string;
  leadSlug: string;
}

export const issues: Issue[] = [
  { number: 42, season: "여름", year: 2026, theme: "슬로우 리빙 특집", cover: "/templates/OHMT012-magazine/mag-article-slow-living-v2.jpg", leadSlug: "slow-living-digital-world" },
  { number: 41, season: "봄", year: 2026, theme: "북유럽 건축 특집", cover: "/templates/OHMT012-magazine/mag-article-nordic-architecture-v2.jpg", leadSlug: "minimalist-architecture-nordic-cities" },
  { number: 40, season: "겨울", year: 2025, theme: "언더그라운드 예술 특집", cover: "/templates/OHMT012-magazine/mag-article-berlin-gallery-v2.jpg", leadSlug: "hidden-galleries-berlin-east-side" },
  { number: 39, season: "가을", year: 2025, theme: "재생 농업 특집", cover: "/templates/OHMT012-magazine/mag-article-regenerative-farm-v2.jpg", leadSlug: "regenerative-agriculture-future" },
];

export function getAllArticles(): Article[] {
  const seen = new Set<string>();
  const list: Article[] = [];
  for (const article of [heroArticle, ...featuredArticles, ...editorsPicks, ...featuredStories]) {
    if (seen.has(article.slug)) continue;
    seen.add(article.slug);
    list.push(article);
  }
  return list;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}
