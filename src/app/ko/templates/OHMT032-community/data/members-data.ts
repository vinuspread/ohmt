export interface Member {
  name: string
  avatar: string
  level: string
  points: number
  joinedAt: string
}

export const members: Member[] = [
  { name: '운영팀', avatar: '운', level: '매니저', points: 18420, joinedAt: '2025.12' },
  { name: '서윤', avatar: '서', level: '호스트', points: 9240, joinedAt: '2026.01' },
  { name: '민준', avatar: '민', level: '빌더', points: 8120, joinedAt: '2026.02' },
  { name: '유진', avatar: '유', level: '디자이너', points: 7310, joinedAt: '2026.02' },
]
