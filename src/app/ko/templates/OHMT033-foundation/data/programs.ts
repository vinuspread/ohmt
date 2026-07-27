export type Program = {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  stat: string
}

export const programs: Program[] = [
  {
    id: 'youth-in-tech',
    name: '유스 인 테크',
    tagline: '청소년 로보틱스·AI 교육',
    description:
      '주말과 방과 후 워크숍에서 학생들이 로보틱스와 AI 도구를 직접 다룹니다. 현업 엔지니어의 멘토링을 통해 기술 경험을 진로 탐색으로 이어갑니다.',
    image: 'story-1.jpg',
    stat: '2020년 이후 2,400명 참여',
  },
  {
    id: 'neighborhood-health-corps',
    name: '네이버후드 헬스 코어',
    tagline: '지역 봉사자가 연결하는 건강 정보와 의료기관',
    description:
      '교육을 받은 지역 봉사자가 가정을 방문해 예방 검진과 백신 접종 정보, 이용 가능한 지역 의료기관을 안내합니다.',
    image: 'program-2.jpg',
    stat: '누적 봉사 92,000시간',
  },
  {
    id: 'green-futures',
    name: '그린 퓨처스',
    tagline: '숲과 유역을 되살리는 복원 사업',
    description:
      '지역 주민과 함께 훼손된 숲과 유역을 복원하고, 학생과 봉사자를 대상으로 생태계 모니터링 교육을 진행합니다.',
    image: 'program-3.jpg',
    stat: '2019년 이후 120만 그루 식재',
  },
  {
    id: 'first-gen-scholars',
    name: '퍼스트젠 스칼러스',
    tagline: '가족 중 처음 대학에 진학하는 학생을 위한 장학금·멘토링',
    description:
      '가족 중 처음 대학에 진학하는 학생에게 장학금과 정기 멘토링을 제공해 학업과 대학 생활 적응을 지원합니다.',
    image: 'program-4.jpg',
    stat: '2016년 이후 1,460만 달러 지원',
  },
]
