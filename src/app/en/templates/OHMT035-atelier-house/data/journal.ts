export type JournalPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'reading-wood-grain',
    title: 'How to Read Wood Grain Before You Buy',
    date: 'June 14, 2026',
    excerpt:
      'Straight grain, rift grain, and figure each move differently as a room changes through the year. Here is what to look for.',
    body: [
      'Grain direction tells you more about how a piece will age than the species name on the tag. Straight-grain boards move the least across seasons, which is why we use them for tabletops that need to stay flat.',
      'Rift-sawn boards split the difference: more visual movement than straight grain, more stability than flat-sawn. We use rift-sawn oak for anything with a joint that has to stay tight.',
      'Figure, the wavy or curled patterns some boards show, is beautiful but less predictable. We reserve figured stock for smaller pieces like side tables, where a little seasonal movement will not open a joint.',
    ],
  },
  {
    slug: 'small-room-seating',
    title: 'Sizing a Lounge Chair for a Small Room',
    date: 'May 2, 2026',
    excerpt:
      'A chair that looks right in a showroom can swallow a small room. Three measurements to take before you order one.',
    body: [
      'Measure the walking path first, not the empty floor space. A chair needs about 30 inches of clearance behind it for someone to get up comfortably.',
      'Seat height matters more than overall footprint for a room that feels tight. A slightly lower seat reads as less bulky even at the same width.',
      'Arm height should clear the nearest side table by at least two inches, or the two pieces will visually compete instead of pairing.',
    ],
  },
  {
    slug: 'oiled-vs-lacquered',
    title: 'Oiled Finish vs. Lacquer: What Actually Changes',
    date: 'April 9, 2026',
    excerpt:
      'The finish decides how a table ages, not just how it looks on day one. Here is the maintenance trade-off in plain terms.',
    body: [
      'A lacquered top resists water rings out of the box, but once it is scratched, refinishing means stripping the whole surface.',
      'An oiled top shows wear sooner. It needs a light reapplication every six months or so, but a scratch is a five-minute spot repair, not a full refinish.',
      'We finish our dining tables in oil by default because most households will touch the surface more than they will protect it, and oil forgives that.',
    ],
  },
  {
    slug: 'wood-joint-stability',
    title: 'Why We Still Use Mortise and Tenon Joinery',
    date: 'July 1, 2026',
    excerpt:
      'Traditional joinery requires more labor than screws or dowels, but it lasts ten times longer. Here is the mechanics of why.',
    body: [
      'Traditional joinery relies on mechanical lock rather than chemical bond. The mortise and tenon joint has been used for thousands of years because it maximizes the surface contact between two pieces of wood.',
      'When glue fails over decades, a mortise and tenon joint still holds mechanically. Dowels and screws concentrate stress in a single point, eventually splitting the wood grain, whereas a tenon distributes load across the entire width of the rail.',
      'We cut every tenon by hand and test the fit before gluing. It is slow, but it ensures that the chair or table you buy today remains rock-solid for the next generation.',
    ],
  },
  {
    slug: 'solid-wood-seasonal-care',
    title: 'Living With Solid Wood: Summer vs. Winter',
    date: 'May 20, 2026',
    excerpt:
      'Solid wood is alive, breathing moisture in and out. Here is how to keep your furniture flat and happy as seasons shift.',
    body: [
      'Wood expands across the grain when humidity rises in the summer, and contracts in the dry winter air. This is not a defect—it is the natural behavior of organic material.',
      'To prevent warping, avoid placing solid wood tables directly over HVAC registers or in the direct path of drafty air conditioners. A stable indoor humidity between 35% and 55% is ideal.',
      'If a joint feels slightly tight or loose as the season shifts, give it a few weeks to adjust. Solid wood moves slowly, adapting to its environment, which is why we build movement allowance into all our tabletop mountings.',
    ],
  },
]
