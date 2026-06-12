export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'completed' | 'cancelled'

export type Order = {
  id: number
  customer: string
  email: string
  plan: string
  amount: number
  status: OrderStatus
  date: string
}

export const orders: Order[] = [
  { id: 4821, customer: 'Morgan Chen', email: 'morgan@ohmytemplate.io', plan: 'Pro', amount: 299, status: 'completed', date: 'Jun 9' },
  { id: 4820, customer: 'Maria Lopez', email: 'maria@example.com', plan: 'Standard', amount: 149, status: 'shipped', date: 'Jun 8' },
  { id: 4819, customer: 'James Kim', email: 'james@example.com', plan: 'Enterprise', amount: 799, status: 'processing', date: 'Jun 8' },
  { id: 4818, customer: 'Sara Martins', email: 'sara@example.com', plan: 'Free', amount: 0, status: 'completed', date: 'Jun 7' },
  { id: 4817, customer: 'Tom Chen', email: 'tom@example.com', plan: 'Pro', amount: 299, status: 'pending', date: 'Jun 7' },
  { id: 4816, customer: 'Emma Wilson', email: 'emma@example.com', plan: 'Standard', amount: 149, status: 'completed', date: 'Jun 6' },
  { id: 4815, customer: 'David Park', email: 'david@example.com', plan: 'Enterprise', amount: 799, status: 'shipped', date: 'Jun 6' },
  { id: 4814, customer: 'Lisa Brown', email: 'lisa@example.com', plan: 'Pro', amount: 299, status: 'cancelled', date: 'Jun 5' },
  { id: 4813, customer: 'Michael Lee', email: 'michael@example.com', plan: 'Standard', amount: 149, status: 'completed', date: 'Jun 5' },
  { id: 4812, customer: 'Anna Garcia', email: 'anna@example.com', plan: 'Free', amount: 0, status: 'completed', date: 'Jun 4' },
  { id: 4811, customer: 'John Davis', email: 'john@example.com', plan: 'Pro', amount: 299, status: 'processing', date: 'Jun 4' },
  { id: 4810, customer: 'Rachel Kim', email: 'rachel@example.com', plan: 'Enterprise', amount: 799, status: 'pending', date: 'Jun 3' },
  { id: 4809, customer: 'Chris Miller', email: 'chris@example.com', plan: 'Standard', amount: 149, status: 'shipped', date: 'Jun 3' },
  { id: 4808, customer: 'Sophie Wang', email: 'sophie@example.com', plan: 'Pro', amount: 299, status: 'completed', date: 'Jun 2' },
  { id: 4807, customer: 'Daniel Taylor', email: 'daniel@example.com', plan: 'Free', amount: 0, status: 'completed', date: 'Jun 2' },
  { id: 4806, customer: 'Olivia Johnson', email: 'olivia@example.com', plan: 'Standard', amount: 149, status: 'cancelled', date: 'Jun 1' },
  { id: 4805, customer: 'Mark Thompson', email: 'mark@example.com', plan: 'Enterprise', amount: 799, status: 'completed', date: 'Jun 1' },
  { id: 4804, customer: 'Elena Rodriguez', email: 'elena@example.com', plan: 'Pro', amount: 299, status: 'processing', date: 'May 31' },
  { id: 4803, customer: 'Kevin White', email: 'kevin@example.com', plan: 'Standard', amount: 149, status: 'pending', date: 'May 31' },
  { id: 4802, customer: 'Nina Patel', email: 'nina@example.com', plan: 'Pro', amount: 299, status: 'completed', date: 'May 30' },
]

export const orderStats = {
  total: 1284,
  pending: 142,
  shipped: 398,
  completed: 744,
}
