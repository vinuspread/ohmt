export type EventCategory = 'meeting' | 'review' | 'launch' | 'personal'

export type CalendarEvent = {
  id: number
  title: string
  date: string
  time: string
  category: EventCategory
  description: string
}

export const eventCategoryMeta: Record<EventCategory, { label: string; color: string }> = {
  meeting: { label: '회의', color: 'var(--color-primary)' },
  review: { label: '검토', color: 'var(--color-warning)' },
  launch: { label: '런칭', color: 'var(--color-success)' },
  personal: { label: '개인', color: 'var(--color-info)' },
}

export const events: CalendarEvent[] = [
  { id: 1, title: 'Team Standup', date: '2026-06-10', time: '09:00', category: 'meeting', description: 'Daily team standup meeting' },
  { id: 2, title: 'Q2 Review', date: '2026-06-15', time: '14:00', category: 'review', description: 'Quarterly business review' },
  { id: 3, title: 'Product Launch', date: '2026-06-22', time: '10:00', category: 'launch', description: 'New product version launch' },
  { id: 4, title: 'Design Review', date: '2026-06-12', time: '11:00', category: 'meeting', description: 'Review new dashboard designs' },
  { id: 5, title: 'API Documentation', date: '2026-06-14', time: '15:00', category: 'review', description: 'Review updated API docs' },
  { id: 6, title: 'Marketing Sync', date: '2026-06-18', time: '13:00', category: 'meeting', description: 'Marketing campaign sync' },
  { id: 7, title: 'Team Lunch', date: '2026-06-20', time: '12:00', category: 'personal', description: 'Monthly team lunch' },
  { id: 8, title: 'DevOps Migration', date: '2026-06-25', time: '09:00', category: 'launch', description: 'Server infrastructure migration' },
  { id: 9, title: 'Sprint Retrospective', date: '2026-06-17', time: '16:00', category: 'meeting', description: 'End of sprint retrospective' },
  { id: 10, title: 'Doctor Appointment', date: '2026-06-19', time: '10:30', category: 'personal', description: 'Annual health check' },
]
