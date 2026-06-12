export interface FeatureItem {
  id: string
  title: string
  description: string
  image: string
  icon: string
}

export interface SpecItem {
  id: string
  title: string
  description: string
  side: 'left' | 'right'
}

export interface ModelItem {
  id: string
  name: string
  description: string
  price: string
  slashedPrice: string
  financing: string
  saveAmount: string
  image: string
}

export interface BlogItem {
  id: string
  title: string
  category: string
  date: string
  image: string
}

export const featuresData: FeatureItem[] = [
  {
    id: 'mobility',
    title: 'Enhanced mobility',
    description: 'High-performance motion control with advanced autonomous navigation and multi-terrain adaptation algorithms.',
    image: '/templates/technology/feature-mobility-nuki.png',
    icon: '', // Custom code representing movement icon
  },
  {
    id: 'ai',
    title: 'Advanced AI',
    description: 'On-device deep learning engine designed to maximize real-time environmental analysis, object detection, and response.',
    image: '/templates/technology/feature-ai-nuki.png',
    icon: '', // Custom code representing chip/neural icon
  },
  {
    id: 'dexterity',
    title: 'Human-like dexterity',
    description: 'Robotic manipulation engineered to perform tasks with a human level of precision, speed, and tactile feedback.',
    image: '/templates/technology/feature-dexterity.jpg',
    icon: '', // Custom code representing hand/dexterity icon
  },
]

export const specData: SpecItem[] = [
  {
    id: 'battery',
    title: 'Long life battery',
    description: '24-hour continuous uptime supported by a fast wireless self-charging base.',
    side: 'left',
  },
  {
    id: 'voice',
    title: 'Voice assistant',
    description: 'Built-in semantic natural language processing supporting multi-lingual smart control.',
    side: 'left',
  },
  {
    id: 'modular',
    title: 'Modular design',
    description: 'Quick-attach mounting hardware allows flexible task swapping for various applications.',
    side: 'right',
  },
  {
    id: 'gesture',
    title: 'Gesture recognition',
    description: 'Equipped with multi-point optical gesture trackers and infrared user tracking.',
    side: 'right',
  },
]

export const modelData: ModelItem[] = [
  {
    id: 'gen2',
    name: 'OmniBot Gen 2',
    description: '4K resolution cameras, 120° FOV, on-device neural processing, and night vision. Our flagship modular indoor system.',
    price: '$20,000 USD',
    slashedPrice: '$25,000 USD',
    financing: '$833.33/month with 24-month financing',
    saveAmount: 'Save $5,000',
    image: '/templates/technology/product-gen2.png',
  },
  {
    id: 'prime',
    name: 'OmniBot Prime',
    description: 'Heavy duty high-torque driving motors, external ruggedized armor plating, and secondary laser rangefinders for industrial uses.',
    price: '$25,000 USD',
    slashedPrice: '$30,000 USD',
    financing: '$1,041.66/month with 24-month financing',
    saveAmount: 'Save $5,000',
    image: '/templates/technology/product-prime.png',
  }
]

export const blogData: BlogItem[] = [
  {
    id: 'featured',
    title: 'How OmiBot’s robot could transform your daily life and streamline operations',
    category: 'Articles',
    date: 'Jan 28, 2026',
    image: '/templates/technology/blog-featured.png',
  },
  {
    id: 'news1',
    title: 'New update v1.3 for OmniBot now enables new features in your app',
    category: 'News',
    date: 'Jan 28, 2026',
    image: '/templates/technology/news-ai.png',
  },
  {
    id: 'news2',
    title: 'How AI enhances learning and behavior in humanoid robots',
    category: 'Resources',
    date: 'Jan 28, 2026',
    image: '/templates/technology/news-dexterity.png',
  },
  {
    id: 'news3',
    title: 'Safety protocols and compliance guidelines for human-robot workspaces',
    category: 'Compliance',
    date: 'Jan 28, 2026',
    image: '/templates/technology/news-mobility.png',
  },
]
