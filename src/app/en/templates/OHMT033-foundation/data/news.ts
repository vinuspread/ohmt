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
    tag: 'Youth in Tech',
    title: 'Youth in Tech opens 40 new fellowship seats for 2026',
    excerpt: 'The expanded cohort adds two new workshop cities and a returning-mentor track for alumni.',
    image: 'news-1.jpg',
  },
  {
    id: 'health-corps-10000-hours',
    date: '2026-05-18',
    tag: 'Neighborhood Health Corps',
    title: 'Neighborhood Health Corps passes 10,000 volunteer hours this year',
    excerpt: 'Volunteers across 14 neighborhoods reached the milestone three months ahead of schedule.',
    image: 'news-2.jpg',
  },
  {
    id: 'green-futures-millionth-tree',
    date: '2026-04-22',
    tag: 'Green Futures',
    title: 'Green Futures plants its 1.2 millionth tree',
    excerpt: 'The milestone tree was planted by a volunteer crew that has returned to the same watershed for six seasons.',
    image: 'news-3.jpg',
  },
  {
    id: 'first-gen-largest-cohort',
    date: '2026-03-30',
    tag: 'First Gen Scholars',
    title: 'First Gen Scholars welcomes its largest cohort yet',
    excerpt: '138 incoming students were matched with mentors ahead of the fall semester, the largest class since the program began.',
    image: 'news-4.jpg',
  },
  {
    id: 'corporate-impact-award-finalist',
    date: '2026-03-11',
    tag: 'Foundation',
    title: 'OHMT Foundation named finalist for Corporate Impact Award',
    excerpt: 'The nomination recognized the Foundation’s community-led program design across all four initiatives.',
    image: 'news-5.jpg',
  },
  {
    id: 'local-makers-q3-grants',
    date: '2026-02-24',
    tag: 'Local Makers Fund',
    title: 'Local Makers Fund opens applications for Q3 grants',
    excerpt: 'Small business owners in the program’s partner regions can now apply for equipment and working-capital grants.',
    image: 'news-6.jpg',
  },
]
