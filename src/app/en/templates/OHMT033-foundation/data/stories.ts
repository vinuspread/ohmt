export type Story = {
  id: string
  name: string
  role: string
  program: string
  quote: string
  excerpt: string
  body: string[]
  image: string
}

export const stories: Story[] = [
  {
    id: 'mina-kim',
    name: 'Mina Kim',
    role: 'AI Research Fellow, Class of 2024',
    program: 'Youth in Tech',
    quote: 'The robot I built at 14 is the reason I study machine learning today.',
    excerpt:
      'A weekend robotics workshop turned into a five-year path toward a university AI lab - and a mentorship she now gives back.',
    body: [
      'When Mina Kim first walked into a Youth in Tech workshop, she assumed she would build one robot and move on. Instead, the mentors kept inviting her back - first as a participant, then as a peer tutor, and eventually as a teaching assistant for the next cohort.',
      'By her final year of high school, Mina was leading a team that built an assistive-navigation prototype for visually impaired students. The project won a regional science fair and, more importantly, convinced her that engineering could serve people directly.',
      'Today, Mina is an AI Research Fellow studying reinforcement learning. She still returns to Youth in Tech twice a year to run the same workshop that changed her path - this time from the other side of the workbench.',
    ],
    image: 'story-1.jpg',
  },
  {
    id: 'daniel-osei',
    name: 'Daniel Osei',
    role: 'Community Health Volunteer',
    program: 'Neighborhood Health Corps',
    quote: 'I knew every household on my block before I knew I was doing public health work.',
    excerpt:
      'A retired mechanic became the most trusted health contact in his neighborhood, one porch conversation at a time.',
    body: [
      'Daniel Osei joined Neighborhood Health Corps to fill his weekends after retiring from thirty years as an auto mechanic. He expected to hand out pamphlets. Instead, he became the person his block called first - about blood pressure checks, flu shots, or which clinic had a Saturday slot.',
      'Over three years, Daniel logged more than 400 volunteer hours and helped connect 60 households to regular primary care, many for the first time in over a decade.',
      'He says the training never really felt like training - just neighbors teaching each other how to look out for one another. That is exactly how the program was designed.',
    ],
    image: 'story-2.jpg',
  },
  {
    id: 'aria-santos',
    name: 'Aria Santos',
    role: 'Reforestation Program Lead',
    program: 'Green Futures',
    quote: 'You can measure a forest in trees, but you feel it in the people who return to it.',
    excerpt:
      'A former ranger now leads the volunteer crews replanting the watershed she grew up hiking.',
    body: [
      'Aria Santos spent a decade as a park ranger watching the watershed near her hometown thin out year after year. When Green Futures launched a replanting initiative in the region, she left the park service to lead it full-time.',
      'Her crews are mostly local volunteers - students, retirees, and families who grew up near the same trails. Aria built the training program herself, insisting every volunteer learn to read the soil, not just dig holes.',
      'The watershed has now regained close to 40% of its original canopy cover, and volunteer retention is the highest of any Green Futures site in the country.',
    ],
    image: 'story-3.jpg',
  },
  {
    id: 'jonah-park',
    name: 'Jonah Park',
    role: 'Small Business Grant Recipient',
    program: 'Local Makers Fund',
    quote: 'The grant paid for a kiln. What it really funded was three more years of my business existing.',
    excerpt:
      'A ceramics studio one bad month from closing used a Local Makers Fund grant to rebuild - and now employs two apprentices.',
    body: [
      'Jonah Park had run his ceramics studio for six years when a broken kiln nearly ended it. A Local Makers Fund grant covered the replacement and a small cushion of working capital.',
      'That breathing room let Jonah do something he had wanted to do for years: train apprentices instead of working alone. He now employs two part-time apprentices, both former students at the community center next door.',
      'He describes the grant less as funding and more as time - time to plan instead of just survive.',
    ],
    image: 'story-4.jpg',
  },
  {
    id: 'leila-haddad',
    name: 'Leila Haddad',
    role: 'Scholarship Alumna',
    program: 'First Gen Scholars',
    quote: 'Nobody in my family had gone past high school. The scholarship covered tuition, but the mentors covered everything else.',
    excerpt:
      'The first in her family to attend university, now finishing a master’s degree and mentoring the newest scholarship cohort.',
    body: [
      'Leila Haddad was accepted to university with no idea how any of it worked - financial aid forms, housing deposits, which classes actually counted toward a major. First Gen Scholars paired her with a mentor who had walked the same path two years earlier.',
      'The scholarship covered tuition and housing, but Leila says the weekly mentor calls were what kept her enrolled through a difficult second year.',
      'She is now finishing a master’s degree in public policy and mentors two First Gen Scholars herself, making the same weekly calls she once relied on.',
    ],
    image: 'story-5.jpg',
  },
  {
    id: 'tomas-rivera',
    name: 'Tomas Rivera',
    role: 'Vocational Training Graduate',
    program: 'Skills Forward',
    quote: 'I finished the program on a Friday and started my first job the following Monday.',
    excerpt:
      'A six-month electrical training track turned into a full-time apprenticeship with a local contractor.',
    body: [
      'Tomas Rivera enrolled in Skills Forward’s electrical training track after two years of unstable warehouse shifts. The program combined classroom instruction with paid on-site hours at partner contractors.',
      'By his final module, Tomas had already been offered a full-time apprenticeship by the contractor he trained under - one of eleven graduates placed directly into jobs that quarter.',
      'He is now a licensed apprentice electrician and returns to Skills Forward each term to speak to incoming students about what the six months actually feels like.',
    ],
    image: 'story-6.jpg',
  },
]
