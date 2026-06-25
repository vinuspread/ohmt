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
    img: "/templates/magazine/mag-2.jpg",
    author: "Anders Holm",
    content: "The Nordic approach to architecture has long been defined by a commitment to simplicity, functionality, and a deep respect for natural materials. From the sleek lines of Alvar Aalto's modernist masterpieces to contemporary passive-house designs that blend seamlessly with their forested surroundings, the region's architectural identity continues to evolve while staying true to its roots.\n\nIn Copenhagen, the emphasis on bicycle-friendly urban planning has influenced building design, with structures that prioritize human scale and community interaction. Stockholm's recent developments showcase how glass and steel can harmonize with historic waterfronts, while Oslo's bold public buildings demonstrate a commitment to sustainable innovation."
  },
  {
    slug: "hidden-galleries-berlin-east-side",
    tag: "Culture",
    title: "Hidden galleries of Berlin's East Side.",
    desc: "Exploring the underground art scene thriving in abandoned industrial spaces.",
    img: "/templates/magazine/mag-3.jpg",
    author: "Marta Weber",
    content: "Berlin's art scene has always flourished in the city's interstitial spaces - the courtyards, former factories, and bombed-out buildings that tell the story of a city perpetually reinventing itself. East Berlin, in particular, offers a treasure trove of clandestine galleries operating in repurposed industrial complexes.\n\nThese spaces, often unmarked and accessible only through word of mouth, represent the antithesis of the commercial white cube gallery. Here, the raw concrete walls and exposed brick provide a dialog with the art itself, creating an experience that is uniquely Berlin."
  },
  {
    slug: "regenerative-agriculture-future",
    tag: "Sustainability",
    title: "The future of regenerative agriculture.",
    desc: "How farmers are restoring ecosystems while feeding communities.",
    img: "/templates/magazine/mag-4.jpg",
    author: "Sarah Chen",
    content: "Regenerative agriculture represents a paradigm shift from conventional farming practices. Rather than merely sustaining current output, regenerative methods actively improve soil health, increase biodiversity, and sequester carbon from the atmosphere.\n\nAcross the Midwest, farmers are adopting no-till practices, cover cropping, and rotational grazing - techniques that mimic natural ecosystems. The result is not just healthier food, but farms that are more resilient to drought and extreme weather events."
  }
];

export const editorsPicks: Article[] = [
  {
    slug: "sensory-language-ceramics",
    title: "The sensory language of ceramics.",
    desc: "Why handcrafted objects are becoming the ultimate luxury in a digital era.",
    img: "/templates/magazine/mag-5.jpg",
    author: "Julian Vance"
  },
  {
    slug: "urban-gardening-vertical-revolution",
    title: "Urban gardening: A vertical revolution.",
    desc: "Reclaiming concrete spaces to build sustainable food ecosystems in the city.",
    img: "/templates/magazine/mag-6.jpg",
    author: "Elena Rossi"
  },
  {
    slug: "slow-living-digital-world",
    title: "The art of slow living in a fast-paced digital world.",
    desc: "Exploring the intersections of design, culture, and sustainability through the lens of modern minimalism.",
    img: "/templates/magazine/mag-1.jpg",
    author: "Julian Vance",
    tag: "Issue No. 42 - Summer 2026",
    content: "In an era of constant notifications and infinite scroll, the slow living movement offers a radical proposition: what if we designed our lives around what matters most? This philosophy extends beyond personal habits into the realms of design, architecture, and urban planning.\n\nFrom the Japanese concept of wabi-sabi - finding beauty in imperfection - to the Scandinavian tradition of hygge, cultures around the world have long understood the value of intentional living. Today, these principles are being rediscovered and adapted for contemporary life, influencing everything from home design to workplace culture."
  },
  {
    slug: "sustainable-fashion-circular",
    title: "The future of sustainable fashion is circular.",
    desc: "How circular economy principles are transforming the fashion industry from the ground up.",
    img: "/templates/magazine/mag-3.jpg",
    author: "Clara Hoffmann",
    content: "The fashion industry is undergoing a fundamental transformation. As consumers become increasingly aware of the environmental impact of fast fashion, a new model is emerging - one based on circularity rather than linear consumption.\n\nCircular fashion encompasses everything from clothing rental services and resale platforms to innovative recycling technologies that can break down garments into their constituent fibers for reuse. Brands that once built their business models on planned obsolescence are now racing to implement take-back programs and design for disassembly.\n\nThe shift is not without challenges. Building a truly circular system requires rethinking supply chains, investing in new technologies, and convincing consumers to embrace a different relationship with their wardrobes. But the potential rewards - environmental, economic, and social - are immense."
  },
  {
    slug: "return-to-film-photography",
    title: "Why we're returning to film photography.",
    desc: "The analog renaissance and what it says about our relationship with images.",
    img: "/templates/magazine/mag-5.jpg",
    author: "David Kim",
    content: "In an age where we carry terabyte-capable cameras in our pockets, the resurgence of film photography might seem paradoxical. Yet sales of film cameras and rolls have been climbing steadily for the past decade, driven by a generation that came of age in the digital era.\n\nWhat explains this analog renaissance? For many, the appeal lies in the constraints that film imposes. With only 36 exposures per roll, each frame becomes deliberate. The absence of instant feedback encourages patience and craft. The unique aesthetic of different film stocks - the grain, the color rendition, the imperfections - offers a materiality that digital filters can only approximate.\n\nBut perhaps the deepest appeal is philosophical. In a world where every moment can be documented, shared, and immediately forgotten, film forces us to slow down and pay attention. The physical negative becomes a tangible artifact - proof not just that a moment existed, but that someone thought it worth preserving."
  },
  {
    slug: "hidden-costs-minimalism",
    title: "The hidden costs of minimalism.",
    desc: "A critical look at the aesthetics of austerity and who really benefits.",
    img: "/templates/magazine/mag-8.jpg",
    author: "Sophia Torres",
    content: "Minimalism has become one of the defining aesthetics of our time. From Instagram-worthy interiors to the sleek product designs of Silicon Valley, the clean lines and empty spaces of minimalism convey a message of clarity, intentionality, and sophistication.\n\nBut beneath the surface of this design philosophy lies a more complicated reality. The minimalist aesthetic, critics argue, often functions as a marker of privilege - the ability to own less is predicated on the certainty that one can afford more when needed. The visual vocabulary of minimalism also has roots in various cultural traditions, from Japanese wabi-sabi to Scandinavian functionalism, which are often appropriated without acknowledgment.\n\nMore troubling is the way minimalism intersects with corporate interests. The same companies that sell us \"essential\" products with minimalist branding are, after all, still selling us things. The aesthetic of having less becomes, paradoxically, another way to consume."
  }
];

export const heroArticle: Article = {
  slug: "slow-living-digital-world",
  title: "The art of slow living in a fast-paced digital world.",
  desc: "Exploring the intersections of design, culture, and sustainability through the lens of modern minimalism.",
  img: "/templates/magazine/mag-1.jpg",
  author: "Julian Vance",
  tag: "Issue No. 42 - Summer 2026",
  content: "In an era of constant notifications and infinite scroll, the slow living movement offers a radical proposition: what if we designed our lives around what matters most? This philosophy extends beyond personal habits into the realms of design, architecture, and urban planning.\n\nFrom the Japanese concept of wabi-sabi - finding beauty in imperfection - to the Scandinavian tradition of hygge, cultures around the world have long understood the value of intentional living. Today, these principles are being rediscovered and adapted for contemporary life, influencing everything from home design to workplace culture."
};
