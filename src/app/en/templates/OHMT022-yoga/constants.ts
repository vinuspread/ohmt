import type { YogaClass, Instructor, Testimonial, ScheduleItem } from "./types";

export const NAV_ITEMS = [
  { label: "Home", href: "/en/templates/OHMT022-yoga" },
  { label: "Classes", href: "/en/templates/OHMT022-yoga/classes" },
  { label: "About", href: "/en/templates/OHMT022-yoga/about" },
  { label: "Book", href: "/en/templates/OHMT022-yoga/schedule" },
  { label: "My Page", href: "/en/templates/OHMT022-yoga/mypage" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

export const CLASSES: YogaClass[] = [
  {
    id: "1",
    slug: "vinyasa-flow",
    name: "Vinyasa Flow",
    subtitle: "Dynamic Breath-Linked Movement",
    description: "A fluid sequence of poses synchronized with breath, building heat and focus.",
    longDescription: "Vinyasa Flow links each movement with an inhale or exhale, creating a moving meditation that builds internal heat, improves flexibility, and strengthens the body. Suitable for those who want a dynamic practice that challenges both mind and body.",
    image: "/templates/OHMT022-yoga/class-vinyasa.jpg",
    duration: "60 min",
    level: "Intermediate",
    benefits: ["Builds cardiovascular endurance", "Improves flexibility", "Reduces stress", "Enhances mind-body connection"],
  },
  {
    id: "2",
    slug: "hatha-yoga",
    name: "Hatha Yoga",
    subtitle: "Traditional Poses & Breath Work",
    description: "A gentle introduction to foundational poses held with conscious breathing.",
    longDescription: "Hatha is a traditional approach that emphasizes holding poses for longer durations, focusing on alignment and breath. This practice builds a strong foundation for all other yoga styles and is perfect for beginners or those seeking a slower, more meditative practice.",
    image: "/templates/OHMT022-yoga/class-hatha.jpg",
    duration: "75 min",
    level: "All Levels",
    benefits: ["Builds core strength", "Improves posture", "Increases body awareness", "Promotes relaxation"],
  },
  {
    id: "3",
    slug: "meditation",
    name: "Meditation",
    subtitle: "Inner Stillness Practice",
    description: "Guided meditation sessions to calm the mind and cultivate inner peace.",
    longDescription: "Our meditation sessions combine breath awareness, body scanning, and guided visualization to help quiet the mind. Regular practice reduces anxiety, improves concentration, and fosters a deep sense of inner calm and clarity.",
    image: "/templates/OHMT022-yoga/class-meditation.jpg",
    duration: "45 min",
    level: "All Levels",
    benefits: ["Reduces anxiety", "Improves concentration", "Enhances emotional health", "Promotes better sleep"],
  },
  {
    id: "4",
    slug: "pilates",
    name: "Pilates",
    subtitle: "Core Strength & Alignment",
    description: "A focused practice that strengthens the core and improves body alignment.",
    longDescription: "Pilates focuses on strengthening the deep core muscles, improving spinal alignment, and building long, lean muscles. Each session targets postural muscles, helping to prevent injury and create a balanced, aligned body.",
    image: "/templates/OHMT022-yoga/class-pilates.jpg",
    duration: "50 min",
    level: "All Levels",
    benefits: ["Strengthens core", "Improves posture", "Increases flexibility", "Prevents injury"],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "Sofia Chen",
    role: "Vinyasa & Hatha Instructor",
    bio: "With over 15 years of practice and certification in multiple yoga traditions, Sofia brings warmth and precision to every class.",
    image: "/templates/OHMT022-yoga/instructor-1.jpg",
  },
  {
    id: "2",
    name: "Marcus Webb",
    role: "Meditation & Breathwork Guide",
    bio: "Marcus specializes in mindfulness and meditation, drawing from Buddhist traditions and modern neuroscience.",
    image: "/templates/OHMT022-yoga/instructor-2.jpg",
  },
  {
    id: "3",
    name: "Lena Park",
    role: "Pilates & Alignment Coach",
    bio: "A former dancer turned Pilates specialist, Lena focuses on alignment, core strength, and graceful movement.",
    image: "/templates/OHMT022-yoga/instructor-3.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Emma R.",
    text: "This studio transformed my relationship with movement. The instructors are incredibly attentive and the community is so welcoming.",
    rating: 5,
  },
  {
    id: "2",
    name: "James K.",
    text: "I started as a complete beginner and felt supported every step of the way. The meditation sessions have been life-changing.",
    rating: 5,
  },
  {
    id: "3",
    name: "Nina P.",
    text: "The Pilates classes completely fixed my back pain. I have never felt stronger or more aligned in my body.",
    rating: 5,
  },
  {
    id: "4",
    name: "David L.",
    text: "A serene sanctuary in the middle of the city. Every class leaves me feeling renewed and centered.",
    rating: 4,
  },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: "Monday",
    classes: [
      { time: "07:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "09:30", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "12:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "17:00", name: "Meditation", instructor: "Marcus Webb", slug: "meditation" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "07:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "10:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "17:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "19:00", name: "Meditation", instructor: "Marcus Webb", slug: "meditation" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "07:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "09:30", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "12:00", name: "Meditation", instructor: "Marcus Webb", slug: "meditation" },
      { time: "17:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "07:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "10:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "17:00", name: "Meditation", instructor: "Marcus Webb", slug: "meditation" },
      { time: "19:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "07:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "09:30", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "12:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "15:00", name: "Meditation", instructor: "Marcus Webb", slug: "meditation" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "08:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "10:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "12:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "09:00", name: "Restorative Hatha", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "11:00", name: "Meditation", instructor: "Marcus Webb", slug: "meditation" },
    ],
  },
];

export const BRAND = {
  name: "OHMT",
  tagline: "Find Your Peace",
  email: "contact@ohmt.site",
  copyright: "2026 OHMT.",
} as const;
