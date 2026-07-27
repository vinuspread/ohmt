export type Program = {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  stat: string
}

export const programs: Program[] = [
  {
    id: 'youth-in-tech',
    name: 'Youth in Tech',
    tagline: 'STEM and robotics access for underserved students',
    description:
      'Weekend and after-school workshops that put real robotics and AI tools in the hands of students who would otherwise never touch them, taught by working engineers.',
    image: 'story-1.jpg',
    stat: '2,400 students since 2020',
  },
  {
    id: 'neighborhood-health-corps',
    name: 'Neighborhood Health Corps',
    tagline: 'Volunteer-led health access in local communities',
    description:
      'Trained neighborhood volunteers who connect households to primary care, preventive screenings, and vaccination drives block by block.',
    image: 'program-2.jpg',
    stat: '92,000 volunteer hours logged',
  },
  {
    id: 'green-futures',
    name: 'Green Futures',
    tagline: 'Reforestation and watershed restoration',
    description:
      'Community-led replanting programs that restore local watersheds and train the next generation of land stewards.',
    image: 'program-3.jpg',
    stat: '1.2M trees planted since 2019',
  },
  {
    id: 'first-gen-scholars',
    name: 'First Gen Scholars',
    tagline: 'Tuition and mentorship for first-generation students',
    description:
      'Full scholarships paired with weekly mentorship for students who are the first in their family to attend university.',
    image: 'program-4.jpg',
    stat: '$14.6M distributed since 2016',
  },
]
