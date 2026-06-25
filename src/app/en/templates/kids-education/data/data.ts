export interface Highlight {
  emoji: string;
  title: string;
  description: string;
}

export interface ClassItem {
  id: string;
  title: string;
  category: string;
  age: string;
  price: string;
  image: string;
  color: string;
  description?: string;
  schedule?: string;
  materials?: string[];
  curriculum?: string[];
  teacherId?: string;
  highlights?: Highlight[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  image: string;
  color: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const classes: ClassItem[] = [
  {
    id: "coding",
    title: "Creative Coding",
    category: "Technology",
    age: "Ages 6-12",
    price: "$120",
    image: "/templates/kids-education/class-coding.jpg",
    color: "var(--color-primary)",
    description: "Introduce your child to the world of programming through fun, interactive projects. They will build games, animations, and apps while learning problem-solving skills.",
    schedule: "Tue / Thu 4:00 PM - 5:30 PM",
    teacherId: "mike",
    materials: ["Laptop or tablet", "Headphones", "Curiosity and imagination"],
    curriculum: [
      "Introduction to block-based coding",
      "Building simple animations",
      "Creating interactive stories",
      "Game design fundamentals",
      "Basic app development",
    ],
    highlights: [
      { emoji: "\u{1F5A5}\uFE0F", title: "Project-Based", description: "Build real games and apps from day one" },
      { emoji: "\u{1F31F}", title: "Problem Solving", description: "Develop logical thinking through fun challenges" },
      { emoji: "\u{1F465}", title: "Collaborative", description: "Pair programming and team projects" },
    ],
  },
  {
    id: "art",
    title: "Art Studio",
    category: "Creative Arts",
    age: "Ages 3-8",
    price: "$90",
    image: "/templates/kids-education/class-art.jpg",
    color: "var(--color-accent)",
    description: "Let your child explore colors, textures, and shapes in our messy and joyful art studio. Every session is a new masterpiece waiting to happen.",
    schedule: "Mon / Wed 3:30 PM - 5:00 PM",
    teacherId: "emma",
    materials: ["Art smock or old clothes", "Water bottle"],
    curriculum: [
      "Finger painting and texture art",
      "Watercolor exploration",
      "Clay sculpting basics",
      "Collage and mixed media",
      "Seasonal craft projects",
    ],
    highlights: [
      { emoji: "\u{1F3A8}", title: "Creative Freedom", description: "Every child creates their own unique masterpiece" },
      { emoji: "\u{1F9E1}", title: "Sensory Play", description: "Explore textures, colors, and materials hands-on" },
      { emoji: "\u{1F308}", title: "Skill Building", description: "Fine motor skills and color theory through art" },
    ],
  },
  {
    id: "science",
    title: "Science Lab",
    category: "Discovery",
    age: "Ages 5-10",
    price: "$110",
    image: "/templates/kids-education/hero-kids-science.jpg",
    color: "var(--color-secondary)",
    description: "Hands-on experiments that make science come alive. From volcanoes to slime, every class is a new discovery.",
    schedule: "Wed / Fri 4:00 PM - 5:30 PM",
    teacherId: "mike",
    materials: ["Safety goggles", "Notebook and pencil"],
    curriculum: [
      "Chemical reactions and volcanoes",
      "Plant life cycles",
      "Simple machines",
      "Electricity and circuits",
      "Earth and space science",
    ],
    highlights: [
      { emoji: "\u{1F52C}", title: "Hands-On Labs", description: "Real experiments with real results every week" },
      { emoji: "\u{1F300}", title: "STEM Foundation", description: "Build curiosity for science and engineering" },
      { emoji: "\u{1F4CA}", title: "Data Skills", description: "Learn to observe, measure, and record findings" },
    ],
  },
  {
    id: "math",
    title: "Math Adventures",
    category: "Problem Solving",
    age: "Ages 4-9",
    price: "$95",
    image: "/templates/kids-education/class-math.jpg",
    color: "var(--color-red)",
    description: "Make math fun with puzzles, games, and hands-on activities. Your child will develop confidence in numbers while having a blast.",
    schedule: "Mon / Fri 3:30 PM - 5:00 PM",
    teacherId: "sarah",
    materials: ["Pencil and eraser", "Counting blocks (provided)"],
    curriculum: [
      "Number sense and counting",
      "Addition and subtraction games",
      "Shapes and geometry",
      "Pattern recognition",
      "Introduction to multiplication",
    ],
    highlights: [
      { emoji: "\u{1F9E9}", title: "Game-Based", description: "Math through puzzles, games, and friendly competitions" },
      { emoji: "\u{1F4AD}", title: "Critical Thinking", description: "Build confidence in problem-solving step by step" },
      { emoji: "\u{1F4B0}", title: "Real-World Math", description: "Apply math to everyday situations and money skills" },
    ],
  },
];

export const teachers: Teacher[] = [
  { id: "sarah", name: "Sarah Kim", role: "Creative Director", image: "/templates/kids-education/teacher-01.png", color: "var(--color-primary)" },
  { id: "mike", name: "Mike Chen", role: "STEM Lead", image: "/templates/kids-education/teacher-02.png", color: "var(--color-secondary)" },
  { id: "emma", name: "Emma Davis", role: "Art Instructor", image: "/templates/kids-education/teacher-03.png", color: "var(--color-accent)" },
];

export const homeClasses: ClassItem[] = classes.slice(0, 3);

export const classCategories = [...new Set(classes.map((c) => c.category))];
