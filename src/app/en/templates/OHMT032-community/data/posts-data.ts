export interface Author {
  name: string
  avatar: string
  level: string
}

export interface Post {
  id: string
  category: string
  tags: string[]
  title: string
  excerpt: string
  body: string[]
  author: Author
  createdAt: string
  views: number
  likes: number
  commentCount: number
  readMinutes: number
  pinned?: boolean
  thumbnail?: string
}

export const posts: Post[] = [
  {
    id: '1001',
    category: 'notice',
    tags: ['Operations', 'Guide'],
    title: 'Three first decisions for new communities',
    excerpt: 'Even a small community becomes easier to join when rules, categories, and first-post expectations are clear.',
    body: [
      'A community communicates atmosphere before features. The first screen should quickly explain what people talk about, who should join, and what kinds of posts are welcome.',
      'Start with operating rules. Instead of a long list of restrictions, show examples of good posts and useful replies.',
      'Keep categories limited at launch. General, Questions, Resources, Reviews, and Notices are enough until posting volume proves otherwise.',
      'Finally, respond quickly to early posts. A fast first reply makes the space feel active.',
    ],
    author: { name: 'Ops Team', avatar: 'O', level: 'Manager' },
    createdAt: '2026.07.01',
    views: 4280,
    likes: 312,
    commentCount: 28,
    readMinutes: 4,
    pinned: true,
  },
  {
    id: '1002',
    category: 'question',
    tags: ['Question', 'Operations'],
    title: 'What makes question posts easier to answer?',
    excerpt: 'Clear titles and a short list of attempted solutions usually improve answer quality.',
    body: [
      'A good question removes guesswork. Separate the desired outcome, current situation, and methods already tried.',
      'Put the core issue in the title. “Mobile menu will not open” is more useful than “Need help.”',
      'End with the kind of answer you want: diagnosis, code example, operations advice, or a quick second opinion.',
    ],
    author: { name: 'Harin', avatar: 'H', level: 'Member' },
    createdAt: '2026.07.02',
    views: 1890,
    likes: 146,
    commentCount: 19,
    readMinutes: 3,
  },
  {
    id: '1003',
    category: 'info',
    tags: ['Playbook', 'Onboarding'],
    title: 'Short onboarding prompts worked better for new members',
    excerpt: 'One sentence that asks for a first action outperformed long welcome instructions.',
    body: [
      'New members rarely read every rule at once. On the first visit, guide one simple action.',
      '“Pick one topic you care about and leave a comment” is more specific than “Introduce yourself.”',
      'Move detailed rules to About or Notices. Keep the home screen focused on purpose and first action.',
    ],
    author: { name: 'Mason', avatar: 'M', level: 'Builder' },
    createdAt: '2026.06.29',
    views: 2710,
    likes: 238,
    commentCount: 34,
    readMinutes: 4,
  },
  {
    id: '1004',
    category: 'review',
    tags: ['Review', 'Study Group'],
    title: 'A checklist from running a four-week study community',
    excerpt: 'Weekly retrospectives and lightweight check-ins improved retention.',
    body: [
      'Short study groups are focused, but drop-off can happen quickly. The first week needs low, specific expectations.',
      'The most effective tool was a weekly retrospective template: what I did, where I got stuck, and what I will try next.',
      'Check-ins do not need to be complex. Process notes create better peer support than completion badges alone.',
    ],
    author: { name: 'Sonia', avatar: 'S', level: 'Host' },
    createdAt: '2026.06.27',
    views: 1430,
    likes: 121,
    commentCount: 16,
    readMinutes: 3,
  },
  {
    id: '1005',
    category: 'free',
    tags: ['Intro', 'Discussion'],
    title: 'New here. What topics are people reading most lately?',
    excerpt: 'I am trying to understand the current community flow and find the best threads to start with.',
    body: [
      'Hello, I joined today. I noticed a lot of discussion around operations, writing, and study groups.',
      'What topics are most active right now? I would appreciate recommendations for posts or categories to read first.',
      'I am interested in small-group operations and knowledge systems. I will share notes as I learn.',
    ],
    author: { name: 'Jay', avatar: 'J', level: 'New' },
    createdAt: '2026.07.03',
    views: 870,
    likes: 64,
    commentCount: 12,
    readMinutes: 2,
  },
  {
    id: '1006',
    category: 'info',
    tags: ['Tools', 'Search'],
    title: 'Better post search starts with titles, not tags',
    excerpt: 'Even without a perfect tag system, title guidelines improve discovery.',
    body: [
      'Search quality often improves through titles before tags. People forget taxonomy, but remember problem words.',
      'A useful title includes the object, situation, and desired result. “Copy tests to reduce signup-form drop-off” is stronger than “Signup form improvement.”',
      'Use tags as supporting metadata, and publish title examples in writing guidelines.',
    ],
    author: { name: 'Dylan', avatar: 'D', level: 'Member' },
    createdAt: '2026.06.25',
    views: 1560,
    likes: 132,
    commentCount: 10,
    readMinutes: 3,
  },
  {
    id: '1007',
    category: 'question',
    tags: ['Design', 'Mobile'],
    title: 'Does hiding the left menu on mobile hurt accessibility?',
    excerpt: 'I am comparing a hamburger drawer with bottom shortcuts for a category-heavy community.',
    body: [
      'The left menu works well on desktop, but consumes too much space on mobile. I am considering a drawer pattern.',
      'For communities with frequent category switching, menu access matters. Button placement, current-category states, and clear close behavior are important.',
      'Bottom shortcuts are accessible, but harder to maintain when the menu grows. They work best with four or fewer primary destinations.',
    ],
    author: { name: 'Eugene', avatar: 'E', level: 'Designer' },
    createdAt: '2026.06.24',
    views: 990,
    likes: 87,
    commentCount: 21,
    readMinutes: 3,
  },
  {
    id: '1008',
    category: 'review',
    tags: ['Review', 'Membership'],
    title: 'Removing member ranks made questions feel easier',
    excerpt: 'In an early community, friendly responses motivated participation more than status levels.',
    body: [
      'Rank systems can highlight active members, but they may make beginners hesitate.',
      'When we reduced rank emphasis and surfaced helpful answers first, first-question volume increased.',
      'Badges can return later. At the start, lowering the participation barrier matters more.',
    ],
    author: { name: 'Theo', avatar: 'T', level: 'Host' },
    createdAt: '2026.06.21',
    views: 1210,
    likes: 109,
    commentCount: 14,
    readMinutes: 4,
  },
  {
    id: '1009',
    category: 'free',
    tags: ['Discussion', 'Content'],
    title: 'What should a strong community home show first?',
    excerpt: 'I am choosing between a latest-post feed and a more curated home experience.',
    body: [
      'A latest-post home feels alive, but it can lack context for first-time visitors.',
      'A curated home explains the community direction, but requires ongoing maintenance.',
      'A balanced mix of pinned notices, latest posts, and popular discussions is usually the most practical.',
    ],
    author: { name: 'Nora', avatar: 'N', level: 'Member' },
    createdAt: '2026.06.19',
    views: 760,
    likes: 53,
    commentCount: 9,
    readMinutes: 2,
  },
  {
    id: '1010',
    category: 'notice',
    tags: ['Notice', 'Update'],
    title: 'July operations update and board cleanup',
    excerpt: 'We reduced duplicate categories and added better examples for Questions and Resources.',
    body: [
      'Starting in July, the board structure is simpler. General, Questions, Resources, Reviews, and Notices remain the core categories.',
      'Questions now include writing examples, and Resources includes a clearer source-credit recommendation.',
      'Existing posts remain in place, but duplicate tags will be cleaned up. Leave feedback in the notice comments.',
    ],
    author: { name: 'Ops Team', avatar: 'O', level: 'Manager' },
    createdAt: '2026.06.18',
    views: 2210,
    likes: 187,
    commentCount: 23,
    readMinutes: 3,
    pinned: true,
  },
  {
    id: '1011',
    category: 'question',
    tags: ['Comments', 'Policy'],
    title: 'How deep should nested replies go?',
    excerpt: 'Deep discussion is useful, but the interface gets complex quickly.',
    body: [
      'Deep nesting supports long debates, but it becomes hard to read on mobile.',
      'One reply level is enough for most communities. If a thread needs deeper discussion, turning it into a new post keeps the record cleaner.',
      'Documenting this rule early keeps comment structure simple.',
    ],
    author: { name: 'Ken', avatar: 'K', level: 'Member' },
    createdAt: '2026.06.15',
    views: 680,
    likes: 41,
    commentCount: 8,
    readMinutes: 2,
  },
  {
    id: '1012',
    category: 'info',
    tags: ['Operations', 'Analytics'],
    title: 'Why return-read posts matter more than raw views',
    excerpt: 'For community health, repeat reading can be more useful than simple traffic volume.',
    body: [
      'Views swing with external traffic. Return-read posts are better signals of what the community actually values.',
      'Operational reports should also track posts with late comments, high saves, and repeated references from similar questions.',
      'Those posts often deserve promotion into notices or beginner guides.',
    ],
    author: { name: 'Erin', avatar: 'E', level: 'Analyst' },
    createdAt: '2026.06.12',
    views: 1340,
    likes: 118,
    commentCount: 11,
    readMinutes: 3,
  },
]

export function getPost(id: string) {
  return posts.find((post) => post.id === id)
}

export function getPostsByCategory(category: string) {
  return posts.filter((post) => post.category === category)
}
