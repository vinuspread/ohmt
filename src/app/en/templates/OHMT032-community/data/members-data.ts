export interface Member {
  name: string
  avatar: string
  level: string
  points: number
  joinedAt: string
}

export const members: Member[] = [
  { name: 'Ops Team', avatar: 'O', level: 'Manager', points: 18420, joinedAt: '2025.12' },
  { name: 'Sonia', avatar: 'S', level: 'Host', points: 9240, joinedAt: '2026.01' },
  { name: 'Mason', avatar: 'M', level: 'Builder', points: 8120, joinedAt: '2026.02' },
  { name: 'Eugene', avatar: 'E', level: 'Designer', points: 7310, joinedAt: '2026.02' },
]
