export type NewsItem = {
  id: string
  date: string
  tag: string
  title: string
  excerpt: string
  image: string
}

export const news: NewsItem[] = [
  {
    id: 'youth-in-tech-2026-cohort',
    date: '2026-06-02',
    tag: '유스 인 테크',
    title: '유스 인 테크, 2026 펠로우십 정원 40명 확대',
    excerpt: '두 개 도시에서 워크숍을 새로 열고 졸업생 멘토 과정을 추가했습니다.',
    image: 'news-youth-tech-2026.webp',
  },
  {
    id: 'health-corps-10000-hours',
    date: '2026-05-18',
    tag: '헬스 코어',
    title: '네이버후드 헬스 코어, 연간 봉사 1만 시간 달성',
    excerpt: '14개 지역의 봉사자가 연간 활동 목표를 예정보다 세 달 앞서 달성했습니다.',
    image: 'news-health-corps-hours.webp',
  },
  {
    id: 'green-futures-millionth-tree',
    date: '2026-04-22',
    tag: '그린 퓨처스',
    title: '그린 퓨처스, 누적 120만 그루 식재',
    excerpt: '같은 유역에서 여섯 시즌 동안 활동한 봉사팀이 120만 번째 식재에 참여했습니다.',
    image: 'news-green-futures-tree.webp',
  },
  {
    id: 'first-gen-largest-cohort',
    date: '2026-03-30',
    tag: '퍼스트젠 스칼러스',
    title: '퍼스트젠 스칼러스, 역대 최대 규모 장학생 선발',
    excerpt: '가을 학기를 앞두고 신입 장학생 138명에게 전담 멘토를 연결했습니다.',
    image: 'program-3.jpg',
  },
  {
    id: 'corporate-impact-award-finalist',
    date: '2026-03-11',
    tag: '재단 소식',
    title: 'OHMT 파운데이션, 사회공헌 임팩트 어워드 최종 후보 선정',
    excerpt: '지역 주도형 프로그램 운영과 확인 가능한 성과 관리 체계를 인정받았습니다.',
    image: 'news-5.jpg',
  },
  {
    id: 'local-makers-q3-grants',
    date: '2026-02-24',
    tag: '로컬 메이커스 펀드',
    title: '로컬 메이커스 펀드, 3분기 지원 신청 접수',
    excerpt: '협력 지역의 소상공인을 대상으로 장비 구입비와 운영자금 신청을 받습니다.',
    image: 'program-1.jpg',
  },
]
