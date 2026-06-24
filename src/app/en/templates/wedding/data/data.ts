export interface Project {
  id: string;
  title: string;
  location: string;
  year: number;
  image: string;
}

export interface Package {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  image: string;
}

export interface AboutInfo {
  name: string;
  role: string;
  bio: string[];
  stats: { num: string; label: string }[];
  philosophy: {
    title: string;
    paragraphs: string[];
  };
  approach: {
    title: string;
    items: { title: string; description: string }[];
  };
}

export interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "amelia-jonathan",
    title: "Amelia & Jonathan",
    location: "The Glasshouse, Jakarta",
    year: 2023,
    image: "/templates/OHMT025-wedding/gallery-01.jpg",
  },
  {
    id: "maya-cristoper",
    title: "Maya & Cristoper",
    location: "Ayana Resort, Bali",
    year: 2023,
    image: "/templates/OHMT025-wedding/gallery-02.jpg",
  },
  {
    id: "clara-daniel",
    title: "Clara & Daniel",
    location: "Uluwatu Cliff, Bali",
    year: 2024,
    image: "/templates/OHMT025-wedding/wedding-story-03.jpg",
  },
  {
    id: "sarah-michael",
    title: "Sarah & Michael",
    location: "Chateau de Villette, France",
    year: 2024,
    image: "/templates/OHMT025-wedding/gallery-03.jpg",
  },
  {
    id: "emma-james",
    title: "Emma & James",
    location: "Villa Balbiano, Lake Como",
    year: 2024,
    image: "/templates/OHMT025-wedding/gallery-04.jpg",
  },
  {
    id: "sophia-alexander",
    title: "Sophia & Alexander",
    location: "Cliff House, San Francisco",
    year: 2025,
    image: "/templates/OHMT025-wedding/gallery-05.jpg",
  },
  {
    id: "olivia-ethan",
    title: "Olivia & Ethan",
    location: "Biltmore Estate, Asheville",
    year: 2025,
    image: "/templates/OHMT025-wedding/gallery-06.jpg",
  },
  {
    id: "isabella-william",
    title: "Isabella & William",
    location: "Castle Howard, Yorkshire",
    year: 2025,
    image: "/templates/OHMT025-wedding/wedding-story-01.jpg",
  },
  {
    id: "ava-benjamin",
    title: "Ava & Benjamin",
    location: "Four Seasons, Maui",
    year: 2025,
    image: "/templates/OHMT025-wedding/wedding-story-02.jpg",
  }
];

export const packages: Package[] = [
  {
    id: "essence",
    title: "Essence Collection",
    price: "$1,800",
    description: "Perfect for intimate weddings and elopements",
    features: [
      "6 hours of continuous coverage",
      "400+ high-resolution edited photos",
      "Online private gallery for download",
      "Pre-wedding planning consultation"
    ],
    image: "/templates/OHMT025-wedding/wedding-story-01.jpg",
  },
  {
    id: "elegance",
    title: "Elegance Collection",
    price: "$2,600",
    description: "Complete coverage of your beautiful day",
    features: [
      "10 hours of continuous coverage",
      "600+ high-resolution edited photos",
      "Complimentary engagement shoot (2 hours)",
      "Online private gallery & print release",
      "Second photographer included"
    ],
    image: "/templates/OHMT025-wedding/about-clara.jpg",
  },
  {
    id: "ever-after",
    title: "Ever After Collection",
    price: "$3,800",
    description: "The ultimate storytelling experience",
    features: [
      "Full day coverage (unlimited hours)",
      "800+ high-resolution edited photos",
      "Engagement session & rehearsal dinner coverage",
      "Two professional photographers",
      "Premium lay-flat leather photo album",
      "Online gallery & fast-track 3-week delivery"
    ],
    image: "/templates/OHMT025-wedding/wedding-story-02.jpg",
  }
];

export const about: AboutInfo = {
  name: "Clara",
  role: "Founder & Lead Photographer",
  bio: [
    "For over 8 years, I've been capturing weddings filled with laughter, intimacy, and timeless beauty. My goal is to create images that feel like your memories - warm, authentic, and everlasting.",
    "I blend into the crowd so you can stay completely present. The frames I return to you will feel lived-in, not posed. Every wedding I photograph is a new story, a new beginning, and I approach each one with fresh eyes and an open heart.",
    "Based in Austin but working worldwide, I've documented love stories across 12 countries and 200+ weddings. From intimate elopements in the mountains to grand celebrations at historic estates, every love story deserves to be told beautifully.",
  ],
  stats: [
    { num: "8+", label: "Years" },
    { num: "200+", label: "Weddings" },
    { num: "12", label: "Countries" },
  ],
  philosophy: {
    title: "My Philosophy",
    paragraphs: [
      "Your wedding is not a photoshoot. It's a once-in-a-lifetime celebration. I believe in documentary storytelling meets fine art composition. Every frame should feel lived-in, not posed.",
      "I don't just take pictures - I preserve the feeling of your day. The nervous excitement before you walk down the aisle, the tear in your parent's eye, the spontaneous laughter during speeches. These are the moments that matter.",
    ],
  },
  approach: {
    title: "My Approach",
    items: [
      { title: "Authentic", description: "No stiff poses. I guide you naturally so every image feels like a genuine moment between you and your partner." },
      { title: "Editorial", description: "Fine art composition meets documentary storytelling. Every frame is crafted with light, texture, and emotion." },
      { title: "Discreet", description: "I blend into the background so you can focus on each other. Most couples forget I'm even there." },
    ],
  },
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Let's Connect",
    description: "Reach out via our form. We will set up a warm call to discuss your vision, timeline, and answer any questions you have.",
    image: "/templates/OHMT025-wedding/process-01.jpg"
  },
  {
    number: "02",
    title: "Plan Together",
    description: "We will co-create a tailored photography schedule and map out key spots so everything flows naturally on the big day.",
    image: "/templates/OHMT025-wedding/process-02.jpg"
  },
  {
    number: "03",
    title: "Style the Details",
    description: "From stationery to florals, we help curate the small details that make your story feel uniquely yours.",
    image: "/templates/OHMT025-wedding/process-03.jpg"
  },
  {
    number: "04",
    title: "Walk the Venue",
    description: "We scout your venue ahead of time to map the best light and angles, so nothing is left to chance on the day.",
    image: "/templates/OHMT025-wedding/process-04.jpg"
  },
  {
    number: "05",
    title: "The First Look",
    description: "We capture that breathless first moment you see each other, raw and unscripted, before the celebration begins.",
    image: "/templates/OHMT025-wedding/process-05.jpg"
  },
  {
    number: "06",
    title: "Capture the Day",
    description: "Enjoy your celebration to the fullest. We blend into the crowd to capture raw, authentic emotions and fine art details.",
    image: "/templates/OHMT025-wedding/process-06.jpg"
  },
  {
    number: "07",
    title: "Dance the Night",
    description: "As the evening unfolds, we stay close to catch the joy, the laughter, and the quiet moments shared on the dance floor.",
    image: "/templates/OHMT025-wedding/process-07.jpg"
  },
  {
    number: "08",
    title: "Cherish Forever",
    description: "Receive your beautiful gallery, fully hand-edited with warm tones, ready to be shared and printed for generations to come.",
    image: "/templates/OHMT025-wedding/process-08.jpg"
  }
];
