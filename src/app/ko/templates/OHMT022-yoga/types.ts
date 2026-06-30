export interface YogaClass {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  level: string;
  benefits: string[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ScheduleItem {
  day: string;
  classes: {
    time: string;
    name: string;
    instructor: string;
    slug: string;
  }[];
}
