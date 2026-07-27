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
  { id: 'c1', postId: '1001', author: { name: 'Mason', avatar: 'M' }, content: 'I agree with keeping the category count small. Too many choices can stop people before they write.', createdAt: '2026.07.01', likes: 22 },
  { id: 'c2', postId: '1001', author: { name: 'Sonia', avatar: 'S' }, content: 'The first-response point is real. When moderators shape the early flow, the whole room feels steadier.', createdAt: '2026.07.01', likes: 18 },
  { id: 'c3', postId: '1001', author: { name: 'Ops Team', avatar: 'O' }, content: 'Exactly. In the beginning, human response beats automation.', createdAt: '2026.07.01', likes: 11, parentId: 'c2' },
  { id: 'c4', postId: '1002', author: { name: 'Dylan', avatar: 'D' }, content: 'Putting a question template above the editor usually improves the quality right away.', createdAt: '2026.07.02', likes: 9 },
  { id: 'c5', postId: '1002', author: { name: 'Eugene', avatar: 'E' }, content: 'Title examples help too. On mobile, short guidance text is easier to notice than placeholder copy.', createdAt: '2026.07.02', likes: 8, parentId: 'c4' },
  { id: 'c6', postId: '1004', author: { name: 'Theo', avatar: 'T' }, content: 'The three-part retrospective format is practical enough to use immediately.', createdAt: '2026.06.28', likes: 14 },
  { id: 'c7', postId: '1007', author: { name: 'Nora', avatar: 'N' }, content: 'For communities with many sections, a drawer makes sense. Current-location states are essential though.', createdAt: '2026.06.24', likes: 7 },
  { id: 'c8', postId: '1010', author: { name: 'Harin', avatar: 'H' }, content: 'The question examples made it much easier to answer new posts.', createdAt: '2026.06.19', likes: 12 },
]
