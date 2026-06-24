export type CustomerStatus = 'active' | 'inactive'

export type Customer = {
  id: number
  name: string
  email: string
  plan: string
  status: CustomerStatus
  joinDate: string
  avatarUrl?: string
}

export const customers: Customer[] = [
  { id: 1, name: 'Morgan Chen', email: 'morgan@ohmytemplate.io', plan: 'Pro', status: 'active', joinDate: 'Jan 2024' },
  { id: 2, name: 'Maria Lopez', email: 'maria@example.com', plan: 'Standard', status: 'active', joinDate: 'Mar 2024' },
  { id: 3, name: 'James Kim', email: 'james@example.com', plan: 'Pro', status: 'inactive', joinDate: 'Jun 2024' },
  { id: 4, name: 'Sara Martins', email: 'sara@example.com', plan: 'Free', status: 'active', joinDate: 'Aug 2024' },
  { id: 5, name: 'Tom Chen', email: 'tom@example.com', plan: 'Enterprise', status: 'active', joinDate: 'Sep 2024' },
  { id: 6, name: 'Emma Wilson', email: 'emma@example.com', plan: 'Standard', status: 'inactive', joinDate: 'Oct 2024' },
  { id: 7, name: 'David Park', email: 'david@example.com', plan: 'Enterprise', status: 'active', joinDate: 'Nov 2024' },
  { id: 8, name: 'Lisa Brown', email: 'lisa@example.com', plan: 'Pro', status: 'active', joinDate: 'Dec 2024' },
  { id: 9, name: 'Michael Lee', email: 'michael@example.com', plan: 'Free', status: 'active', joinDate: 'Jan 2025' },
  { id: 10, name: 'Anna Garcia', email: 'anna@example.com', plan: 'Standard', status: 'inactive', joinDate: 'Feb 2025' },
  { id: 11, name: 'Chris Miller', email: 'chris@example.com', plan: 'Pro', status: 'active', joinDate: 'Mar 2025' },
  { id: 12, name: 'Sophie Wang', email: 'sophie@example.com', plan: 'Enterprise', status: 'active', joinDate: 'Apr 2025' },
]

export const customerStats = {
  total: 8420,
  active: 7103,
  newPerMonth: 284,
  churn: 2.1,
}
