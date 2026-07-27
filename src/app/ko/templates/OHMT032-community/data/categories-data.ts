export interface Category {
  slug: string
  name: string
  description: string
}

export const categories: Category[] = [
  { slug: 'free', name: '자유', description: '자유롭게 이야기를 나누는 공간' },
  { slug: 'question', name: '질문', description: '궁금한 것을 묻고 답하는 공간' },
  { slug: 'info', name: '정보', description: '유용한 정보를 공유하는 공간' },
  { slug: 'review', name: '후기', description: '경험과 후기를 나누는 공간' },
  { slug: 'notice', name: '공지', description: '운영진 공지사항' },
]

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}
