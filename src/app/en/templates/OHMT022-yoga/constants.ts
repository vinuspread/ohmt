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
    subtitle: "Movement paced by breath",
    description: "Link poses to the breath while adjusting pace and intensity to your body.",
    longDescription: "Link several poses to each inhale and exhale. You can adjust the pace and range while keeping the sequence continuous.",
    image: "/templates/OHMT022-yoga/class-vinyasa.jpg",
    duration: "60 min",
    level: "Intermediate",
    intensity: 3,
    instructorId: "1",
    preparation: "Wear clothes you can move in and bring water. A light meal at least two hours before class is recommended.",
    benefits: ["Continuous sequencing", "Exploring range of motion", "Breath-led pacing", "A settled cool-down"],
    recommendedFor: ["People who want an active, sweat-building practice", "Students familiar with foundational poses", "Anyone learning to connect breath and movement"],
    curriculum: [
      { title: "Arrive in the breath", description: "A short breath check and joint mobility sequence establishes how your body feels today." },
      { title: "Build the flow", description: "Sun salutations grow into a continuous sequence of standing postures." },
      { title: "Balance and focus", description: "Standing balances and core work bring attention back to your centre." },
      { title: "Cool down", description: "Floor stretches and savasana settle the heart rate and smooth the breath." },
    ],
  },
  {
    id: "2",
    slug: "hatha-yoga",
    name: "Hatha Yoga",
    subtitle: "Foundational poses and breath",
    description: "Take time with foundational poses and learn clear alignment cues.",
    longDescription: "Work through one pose at a time without rushing. Clear options and studio props make the class approachable for first-time students.",
    image: "/templates/OHMT022-yoga/class-hatha.jpg",
    duration: "75 min",
    level: "All Levels",
    intensity: 2,
    instructorId: "1",
    preparation: "All props are provided. Tell your instructor before class if your knees or wrists need extra support.",
    benefits: ["Foundational poses", "Alignment cues", "Body awareness", "Supported rest"],
    recommendedFor: ["First-time yoga students", "Anyone wanting slower, precise instruction", "Students who benefit from time to explore each pose"],
    curriculum: [
      { title: "Body check-in", description: "Seated breathwork reveals left-to-right balance and helps set an appropriate pace." },
      { title: "Foundational alignment", description: "Mountain, folds and lunges establish clear placement for feet and pelvis." },
      { title: "Stay and observe", description: "Props make room to hold each shape without strain and notice changes in the breath." },
      { title: "Restore", description: "Gentle work for the back and hips leads into an extended savasana." },
    ],
  },
  {
    id: "3",
    slug: "meditation",
    name: "Meditation",
    subtitle: "Breath and body awareness",
    description: "Follow clear prompts to notice breath, contact, and sensation.",
    longDescription: "Move attention through the body, notice where effort remains, and practise sitting quietly for a short, supported period.",
    image: "/templates/OHMT022-yoga/class-meditation.jpg",
    duration: "45 min",
    level: "All Levels",
    intensity: 1,
    instructorId: "2",
    preparation: "Comfortable clothing is all you need. The complete practice can also be done from a chair.",
    benefits: ["Counting the breath", "Attention practice", "Body scanning", "Quiet rest"],
    recommendedFor: ["People who find it difficult to switch off", "Anyone wanting to settle before sleep", "Beginners looking for concrete meditation guidance"],
    curriculum: [
      { title: "Arrive", description: "Find a supported seat and notice sound, weight and points of contact." },
      { title: "Count the breath", description: "Observe the natural length of each inhale and exhale without changing it." },
      { title: "Body scan", description: "Move attention from the feet to the face and notice where effort remains." },
      { title: "Return", description: "A short silence gives way to gentle movement and a gradual return of the gaze." },
    ],
  },
  {
    id: "4",
    slug: "pilates",
    name: "Pilates",
    subtitle: "Core control and alignment",
    description: "Coordinate the centre with controlled, repeatable movement.",
    longDescription: "Use the centre with the breath, then add arm and leg patterns while keeping each movement steady and controlled.",
    image: "/templates/OHMT022-yoga/class-pilates.jpg",
    duration: "50 min",
    level: "All Levels",
    intensity: 2,
    instructorId: "3",
    preparation: "Close-fitting, comfortable clothing works best. Let us know about neck or lower-back pain before class.",
    benefits: ["Core coordination", "Postural awareness", "Controlled mobility", "Stable movement patterns"],
    recommendedFor: ["People who feel stiff after long hours sitting", "Anyone learning to use the centre with more control", "Students who value detailed correction"],
    curriculum: [
      { title: "Alignment check", description: "Supine breathing establishes the position of the pelvis and rib cage." },
      { title: "Connect the core", description: "Small, repeated movements coordinate the abdominals and pelvic floor." },
      { title: "Integrate", description: "Arm and leg patterns add challenge while the centre stays organised." },
      { title: "Release the spine", description: "Gentle mobility for the back and hips closes the session." },
    ],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "Sofia Chen",
    role: "Vinyasa & Hatha Instructor",
    bio: "Sofia starts by asking how your body feels, then explains foot and pelvic alignment in clear, measured steps.",
    image: "/templates/OHMT022-yoga/instructor-1.jpg",
  },
  {
    id: "2",
    name: "Mira Song",
    role: "Meditation & Breathwork Guide",
    bio: "Mira guides breath-led meditation with clear cues that make the practice approachable for first-time students.",
    image: "/templates/OHMT022-yoga/instructor-2.jpg",
  },
  {
    id: "3",
    name: "Lena Park",
    role: "Pilates & Alignment Coach",
    bio: "Lena checks alignment and core control through small movements before adding range or resistance.",
    image: "/templates/OHMT022-yoga/instructor-3.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "1", name: "Emma R.", text: "This studio transformed my relationship with movement. The instructors are incredibly attentive and the community is so welcoming.", rating: 5 },
  { id: "2", name: "James K.", text: "I started as a complete beginner and felt supported every step of the way. The meditation sessions have been life-changing.", rating: 5 },
  { id: "3", name: "Nina P.", text: "The Pilates classes completely fixed my back pain. I have never felt stronger or more aligned in my body.", rating: 5 },
  { id: "4", name: "David L.", text: "A serene sanctuary in the middle of the city. Every class leaves me feeling renewed and centered.", rating: 4 },
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: "Monday",
    classes: [
      { time: "07:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "09:30", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "12:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "17:00", name: "Meditation", instructor: "Mira Song", slug: "meditation" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "07:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "10:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "17:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "19:00", name: "Meditation", instructor: "Mira Song", slug: "meditation" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "07:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "09:30", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "12:00", name: "Meditation", instructor: "Mira Song", slug: "meditation" },
      { time: "17:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "07:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "10:00", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "17:00", name: "Meditation", instructor: "Mira Song", slug: "meditation" },
      { time: "19:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "07:00", name: "Hatha Yoga", instructor: "Sofia Chen", slug: "hatha-yoga" },
      { time: "09:30", name: "Vinyasa Flow", instructor: "Sofia Chen", slug: "vinyasa-flow" },
      { time: "12:00", name: "Pilates", instructor: "Lena Park", slug: "pilates" },
      { time: "15:00", name: "Meditation", instructor: "Mira Song", slug: "meditation" },
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
      { time: "09:00", name: "Restorative Hatha", instructor: "Daniel Foster", slug: "hatha-yoga" },
      { time: "11:00", name: "Meditation", instructor: "Mira Song", slug: "meditation" },
    ],
  },
];

export const BRAND = {
  name: "PRANA",
  tagline: "Find Your Peace",
  email: "contact@prana.site",
  copyright: "2026 PRANA.",
} as const;
