export interface Category {
  slug: string
  name: string
  description: string
}

export const categories: Category[] = [
  { slug: 'free', name: 'General', description: 'Open discussion and community updates' },
  { slug: 'question', name: 'Questions', description: 'Ask for help and compare approaches' },
  { slug: 'info', name: 'Resources', description: 'Useful guides, references, and operating notes' },
  { slug: 'review', name: 'Reviews', description: 'Lessons learned from real community operations' },
  { slug: 'notice', name: 'Notices', description: 'Official announcements from the moderation team' },
]

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}
