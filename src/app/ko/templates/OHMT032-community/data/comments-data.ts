export interface Comment {
  id: string
  postId: string
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
  likes: number
  parentId?: string
}

export const comments: Comment[] = [
  { id: 'c1', postId: '1001', author: { name: '민준', avatar: '민' }, content: '카테고리 수를 줄이라는 부분에 동의합니다. 처음부터 너무 세분화하면 글 쓰기 전에 멈추게 되더라고요.', createdAt: '2026.07.01', likes: 22 },
  { id: 'c2', postId: '1001', author: { name: '서윤', avatar: '서' }, content: '첫 댓글 속도가 중요하다는 말이 실감납니다. 운영진이 초반 흐름을 잡아 주면 분위기가 안정됩니다.', createdAt: '2026.07.01', likes: 18 },
  { id: 'c3', postId: '1001', author: { name: '운영팀', avatar: '운' }, content: '맞습니다. 초반에는 자동화보다 사람이 먼저 반응하는 방식이 더 효과적이었습니다.', createdAt: '2026.07.01', likes: 11, parentId: 'c2' },
  { id: 'c4', postId: '1002', author: { name: '도현', avatar: '도' }, content: '질문 템플릿을 입력창 위에 붙여 두면 작성 품질이 꽤 올라갑니다.', createdAt: '2026.07.02', likes: 9 },
  { id: 'c5', postId: '1002', author: { name: '유진', avatar: '유' }, content: '제목 예시를 보여 주는 것도 좋습니다. 모바일에서는 placeholder보다 짧은 안내 문구가 더 잘 보였습니다.', createdAt: '2026.07.02', likes: 8, parentId: 'c4' },
  { id: 'c6', postId: '1004', author: { name: '태오', avatar: '태' }, content: '회고 템플릿 세 항목은 바로 써 볼 수 있겠네요. 너무 복잡하지 않아서 좋습니다.', createdAt: '2026.06.28', likes: 14 },
  { id: 'c7', postId: '1007', author: { name: '나은', avatar: '나' }, content: '메뉴가 많은 커뮤니티라면 드로어가 맞는 것 같습니다. 대신 현재 위치 표시가 꼭 필요합니다.', createdAt: '2026.06.24', likes: 7 },
  { id: 'c8', postId: '1010', author: { name: '하린', avatar: '하' }, content: '질문 작성 예시가 생긴 뒤 답변하기가 쉬워졌습니다.', createdAt: '2026.06.19', likes: 12 },
]
