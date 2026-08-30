export interface Article {
  slug: string;
  title: string;
  desc: string;
  img: string;
  tag?: string;
  author: string;
  content?: string;
}

export const featuredArticles: Article[] = [
  {
    slug: "minimalist-architecture-nordic-cities",
    tag: "Design",
    title: "The evolution of minimalist architecture in Nordic cities.",
    desc: "How functionalism and natural materials are redefining urban landscapes from Copenhagen to Stockholm.",
    img: "/templates/OHMT012-magazine/mag-2.jpg",
    author: "Anders Holm",
    content: "The Nordic approach to architecture has long been defined by a commitment to simplicity, functionality, and a deep respect for natural materials. From the sleek lines of Alvar Aalto's modernist masterpieces to contemporary passive-house designs that blend seamlessly with their forested surroundings, the region's architectural identity continues to evolve while staying true to its roots.\n\nIn Copenhagen, the emphasis on bicycle-friendly urban planning has influenced building design, with structures that prioritize human scale and community interaction. Stockholm's recent developments showcase how glass and steel can harmonize with historic waterfronts, while Oslo's bold public buildings demonstrate a commitment to sustainable innovation.\n\nWhat unites these approaches is restraint used as a design tool rather than a limitation. Timber ceilings are left exposed instead of covered, concrete is finished rather than clad, and daylight is treated as a building material in its own right. The result is architecture that ages instead of merely wearing out."
  },
  {
    slug: "hidden-galleries-berlin-east-side",
    tag: "Culture",
    title: "Hidden galleries of Berlin's East Side.",
    desc: "Exploring the underground art scene thriving in abandoned industrial spaces.",
    img: "/templates/OHMT012-magazine/mag-3.jpg",
    author: "Marta Weber",
    content: "Berlin's art scene has always flourished in the city's interstitial spaces - the courtyards, former factories, and bombed-out buildings that tell the story of a city perpetually reinventing itself. East Berlin, in particular, offers a treasure trove of clandestine galleries operating in repurposed industrial complexes.\n\nThese spaces, often unmarked and accessible only through word of mouth, represent the antithesis of the commercial white cube gallery. Here, the raw concrete walls and exposed brick provide a dialog with the art itself, creating an experience that is uniquely Berlin.\n\nMany of these galleries operate on a pay-what-you-can basis, or simply pass a jar around at closing time. The economics are precarious, and buildings are frequently reclaimed by developers within a year or two of opening. But that impermanence is part of the appeal: nobody visits expecting the same show twice."
  },
  {
    slug: "regenerative-agriculture-future",
    tag: "Sustainability",
    title: "The future of regenerative agriculture.",
    desc: "How farmers are restoring ecosystems while feeding communities.",
    img: "/templates/OHMT012-magazine/mag-4.jpg",
    author: "Sarah Chen",
    content: "Regenerative agriculture represents a paradigm shift from conventional farming practices. Rather than merely sustaining current output, regenerative methods actively improve soil health, increase biodiversity, and sequester carbon from the atmosphere.\n\nAcross the Midwest, farmers are adopting no-till practices, cover cropping, and rotational grazing - techniques that mimic natural ecosystems. The result is not just healthier food, but farms that are more resilient to drought and extreme weather events.\n\nThe transition is not without cost. Yields often dip in the first few seasons as soil biology recovers, and specialized equipment for no-till planting is expensive. Even so, the farmers who stick with it report lower input costs within five years, as healthier soil needs less fertilizer and holds water longer during dry spells."
  }
];

export const editorsPicks: Article[] = [
  {
    slug: "sensory-language-ceramics",
    title: "The sensory language of ceramics.",
    desc: "Why handcrafted objects are becoming the ultimate luxury in a digital era.",
    img: "/templates/OHMT012-magazine/mag-5.jpg",
    author: "Julian Vance",
    content: "There is a particular kind of attention required to work with clay: it demands presence in a way that few modern activities do. You cannot rush a kiln, and you cannot undo a fired piece. That discipline is precisely what draws people to it now.\n\nAs mass production has made nearly everything instantly available, the appeal of an object that took hours of a single person's attention has only grown. A hand-thrown bowl carries the faint asymmetry of the hand that made it - a signature no factory can replicate.\n\nCollectors increasingly seek out named makers rather than anonymous studio lines, treating functional ceramics with the same attention once reserved for fine art. The line between craft and collectible is thinning."
  },
  {
    slug: "urban-gardening-vertical-revolution",
    title: "Urban gardening: A vertical revolution.",
    desc: "Reclaiming concrete spaces to build sustainable food ecosystems in the city.",
    img: "/templates/OHMT012-magazine/mag-gardening.jpg",
    author: "Elena Rossi",
    content: "Vertical farms once seemed like a novelty confined to trade show demos, but they are now quietly feeding entire city blocks. Stacked growing systems on unused walls and rooftops can produce more per square foot than a traditional field, using a fraction of the water.\n\nThe real innovation isn't the technology itself but who is using it. Community groups, not just agribusiness, are installing modular vertical systems in parking structures and school courtyards, turning idle concrete into working farmland.\n\nThe produce rarely leaves the neighborhood it's grown in, cutting transportation emissions to nearly zero and putting fresh food back within walking distance of people who had lost access to it."
  },
  {
    slug: "slow-living-digital-world",
    title: "The art of slow living in a fast-paced digital world.",
    desc: "Exploring the intersections of design, culture, and sustainability through the lens of modern minimalism.",
    img: "/templates/OHMT012-magazine/mag-workspace.jpg",
    author: "Julian Vance",
    tag: "Issue No. 42 - Summer 2026",
    content: "In an era of constant notifications and infinite scroll, the slow living movement offers a radical proposition: what if we designed our lives around what matters most? This philosophy extends beyond personal habits into the realms of design, architecture, and urban planning.\n\nFrom the Japanese concept of wabi-sabi - finding beauty in imperfection - to the Scandinavian tradition of hygge, cultures around the world have long understood the value of intentional living. Today, these principles are being rediscovered and adapted for contemporary life, influencing everything from home design to workplace culture.\n\nThe irony is that slowing down often takes deliberate effort. Turning off notifications, leaving a phone in another room, or simply sitting with a task until it's finished requires more discipline than the constant stimulation it replaces. But the people who manage it describe something close to relief."
  },
  {
    slug: "sustainable-fashion-circular",
    title: "The future of sustainable fashion is circular.",
    desc: "How circular economy principles are transforming the fashion industry from the ground up.",
    img: "/templates/OHMT012-magazine/mag-fashion.jpg",
    author: "Clara Hoffmann",
    content: "The fashion industry is undergoing a fundamental transformation. As consumers become increasingly aware of the environmental impact of fast fashion, a new model is emerging - one based on circularity rather than linear consumption.\n\nCircular fashion encompasses everything from clothing rental services and resale platforms to innovative recycling technologies that can break down garments into their constituent fibers for reuse. Brands that once built their business models on planned obsolescence are now racing to implement take-back programs and design for disassembly.\n\nThe shift is not without challenges. Building a truly circular system requires rethinking supply chains, investing in new technologies, and convincing consumers to embrace a different relationship with their wardrobes. But the potential rewards - environmental, economic, and social - are immense.\n\nSome of the most promising work is happening at the seam level: garments designed from a single fiber type so they can be shredded and respun without separating blended materials first. It's an unglamorous fix, but it may matter more than any recycled-polyester marketing campaign."
  },
  {
    slug: "return-to-film-photography",
    title: "Why we're returning to film photography.",
    desc: "The analog renaissance and what it says about our relationship with images.",
    img: "/templates/OHMT012-magazine/mag-5.jpg",
    author: "David Kim",
    content: "In an age where we carry terabyte-capable cameras in our pockets, the resurgence of film photography might seem paradoxical. Yet sales of film cameras and rolls have been climbing steadily for the past decade, driven by a generation that came of age in the digital era.\n\nWhat explains this analog renaissance? For many, the appeal lies in the constraints that film imposes. With only 36 exposures per roll, each frame becomes deliberate. The absence of instant feedback encourages patience and craft. The unique aesthetic of different film stocks - the grain, the color rendition, the imperfections - offers a materiality that digital filters can only approximate.\n\nBut perhaps the deepest appeal is philosophical. In a world where every moment can be documented, shared, and immediately forgotten, film forces us to slow down and pay attention. The physical negative becomes a tangible artifact - proof not just that a moment existed, but that someone thought it worth preserving."
  },
  {
    slug: "hidden-costs-minimalism",
    title: "The hidden costs of minimalism.",
    desc: "A critical look at the aesthetics of austerity and who really benefits.",
    img: "/templates/OHMT012-magazine/mag-8.jpg",
    author: "Sophia Torres",
    content: "Minimalism has become one of the defining aesthetics of our time. From Instagram-worthy interiors to the sleek product designs of Silicon Valley, the clean lines and empty spaces of minimalism convey a message of clarity, intentionality, and sophistication.\n\nBut beneath the surface of this design philosophy lies a more complicated reality. The minimalist aesthetic, critics argue, often functions as a marker of privilege - the ability to own less is predicated on the certainty that one can afford more when needed. The visual vocabulary of minimalism also has roots in various cultural traditions, from Japanese wabi-sabi to Scandinavian functionalism, which are often appropriated without acknowledgment.\n\nMore troubling is the way minimalism intersects with corporate interests. The same companies that sell us \"essential\" products with minimalist branding are, after all, still selling us things. The aesthetic of having less becomes, paradoxically, another way to consume."
  },
  {
    slug: "acoustics-of-silence",
    title: "The acoustics of silence.",
    desc: "Designing spaces that offer psychological refuge from the noise of modern life.",
    img: "/templates/OHMT012-magazine/mag-7.jpg",
    author: "Julian Vance",
    content: "Acoustic engineers have a term for the quietest room ever built: an anechoic chamber, so free of reflected sound that visitors report hearing their own heartbeat within minutes. Few of us need that extreme, but the instinct behind it - the search for a genuinely quiet room - is showing up everywhere from libraries to airports.\n\nDesigners are borrowing techniques once reserved for recording studios: soft-close doors, felt wall panels, staggered layouts that break up sound paths before they can travel far. None of it is visible in a finished space, which is exactly the point.\n\nThe payoff isn't just comfort. Studies on open-plan offices consistently link uncontrolled ambient noise to measurable drops in concentration and memory recall. Silence, it turns out, is a feature worth engineering for."
  }
];

export const featuredStories: Article[] = [
  {
    slug: "brutalist-heart-london",
    tag: "Photography",
    title: "Light & Shadow: Capturing the brutalist heart of London.",
    desc: "A photographic journey through the city's most controversial concrete monuments.",
    img: "/templates/OHMT012-magazine/mag-3.jpg",
    author: "Priya Nair",
    content: "Brutalism has spent decades as London's most argued-over architectural style, alternately condemned as inhuman concrete sprawl and celebrated as honest, unapologetic form. Photographing it well means working with what most people try to avoid: harsh midday light and hard shadow.\n\nThe Barbican Estate and the National Theatre remain the most photographed subjects, but the real material is in the estates further from the centre - housing blocks built with the same conviction as the famous landmarks, without any of the tourist attention.\n\nWhat the camera keeps finding, across every building, is a consistency of intent. Board-marked concrete, deliberately left rough, ages in a way that reveals rather than hides its history. Fifty years on, that honesty is aging better than the reputation ever did."
  },
  {
    slug: "hidden-teahouses-kyoto",
    tag: "Travel",
    title: "The hidden teahouses of Kyoto's outer districts.",
    desc: "Finding tradition and tranquility away from the tourist crowds.",
    img: "/templates/OHMT012-magazine/mag-gardening.jpg",
    author: "Priya Nair",
    content: "Kyoto's famous tea houses draw lines that stretch around city blocks, but a short train ride into the outer districts reveals a different tradition entirely: family-run rooms that have served the same handful of regulars for generations, with no sign out front.\n\nThese spaces operate on introduction rather than advertisement. A guest is typically brought by someone the owner already knows, and the ritual itself slows to match: water heated to a specific temperature for each leaf, silence treated as part of the service rather than an absence of it.\n\nWhat's disappearing isn't the tea ceremony itself, but the unhurried context that gives it meaning. As more of these rooms close when their owners retire, the outer districts are becoming the last place to experience tea the way it was meant to be served."
  }
];

export const heroArticle: Article = {
  slug: "slow-living-digital-world",
  title: "The art of slow living in a fast-paced digital world.",
  desc: "Exploring the intersections of design, culture, and sustainability through the lens of modern minimalism.",
  img: "/templates/OHMT012-magazine/mag-1.jpg",
  author: "Julian Vance",
  tag: "Issue No. 42 - Summer 2026",
  content: "In an era of constant notifications and infinite scroll, the slow living movement offers a radical proposition: what if we designed our lives around what matters most? This philosophy extends beyond personal habits into the realms of design, architecture, and urban planning.\n\nFrom the Japanese concept of wabi-sabi - finding beauty in imperfection - to the Scandinavian tradition of hygge, cultures around the world have long understood the value of intentional living. Today, these principles are being rediscovered and adapted for contemporary life, influencing everything from home design to workplace culture.\n\nThe irony is that slowing down often takes deliberate effort. Turning off notifications, leaving a phone in another room, or simply sitting with a task until it's finished requires more discipline than the constant stimulation it replaces. But the people who manage it describe something close to relief."
};

export interface Issue {
  number: number;
  season: string;
  year: number;
  theme: string;
  cover: string;
  leadSlug: string;
}

export const issues: Issue[] = [
  { number: 42, season: "Summer", year: 2026, theme: "The Slow Living Issue", cover: "/templates/OHMT012-magazine/mag-1.jpg", leadSlug: "slow-living-digital-world" },
  { number: 41, season: "Spring", year: 2026, theme: "The Nordic Issue", cover: "/templates/OHMT012-magazine/mag-2.jpg", leadSlug: "minimalist-architecture-nordic-cities" },
  { number: 40, season: "Winter", year: 2025, theme: "The Underground Issue", cover: "/templates/OHMT012-magazine/mag-3.jpg", leadSlug: "hidden-galleries-berlin-east-side" },
  { number: 39, season: "Autumn", year: 2025, theme: "The Regeneration Issue", cover: "/templates/OHMT012-magazine/mag-4.jpg", leadSlug: "regenerative-agriculture-future" },
];

export function getAllArticles(): Article[] {
  const seen = new Set<string>();
  const list: Article[] = [];
  for (const article of [heroArticle, ...featuredArticles, ...editorsPicks, ...featuredStories]) {
    if (seen.has(article.slug)) continue;
    seen.add(article.slug);
    list.push(article);
  }
  return list;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}
