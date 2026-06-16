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
    image: "/templates/wedding/gallery-01.jpg",
  },
  {
    id: "maya-cristoper",
    title: "Maya & Cristoper",
    location: "Ayana Resort, Bali",
    year: 2023,
    image: "/templates/wedding/gallery-02.jpg",
  },
  {
    id: "clara-daniel",
    title: "Clara & Daniel",
    location: "Uluwatu Cliff, Bali",
    year: 2024,
    image: "/templates/wedding/wedding-story-03.jpg",
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
    image: "/templates/wedding/wedding-story-01.jpg",
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
    image: "/templates/wedding/about-clara.jpg",
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
    image: "/templates/wedding/wedding-story-02.jpg",
  }
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Let's Connect",
    description: "Reach out via our form. We will set up a warm call to discuss your vision, timeline, and answer any questions you have.",
    image: "/templates/wedding/process-01.jpg"
  },
  {
    number: "02",
    title: "Plan Together",
    description: "We will co-create a tailored photography schedule and map out key spots so everything flows naturally on the big day.",
    image: "/templates/wedding/process-02.jpg"
  },
  {
    number: "03",
    title: "Style the Details",
    description: "From stationery to florals, we help curate the small details that make your story feel uniquely yours.",
    image: "/templates/wedding/process-03.jpg"
  },
  {
    number: "04",
    title: "Walk the Venue",
    description: "We scout your venue ahead of time to map the best light and angles, so nothing is left to chance on the day.",
    image: "/templates/wedding/process-04.jpg"
  },
  {
    number: "05",
    title: "The First Look",
    description: "We capture that breathless first moment you see each other, raw and unscripted, before the celebration begins.",
    image: "/templates/wedding/process-05.jpg"
  },
  {
    number: "06",
    title: "Capture the Day",
    description: "Enjoy your celebration to the fullest. We blend into the crowd to capture raw, authentic emotions and fine art details.",
    image: "/templates/wedding/process-06.jpg"
  },
  {
    number: "07",
    title: "Dance the Night",
    description: "As the evening unfolds, we stay close to catch the joy, the laughter, and the quiet moments shared on the dance floor.",
    image: "/templates/wedding/process-07.jpg"
  },
  {
    number: "08",
    title: "Cherish Forever",
    description: "Receive your beautiful gallery, fully hand-edited with warm tones, ready to be shared and printed for generations to come.",
    image: "/templates/wedding/process-08.jpg"
  }
];
