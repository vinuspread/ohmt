export interface Project {
  name: string;
  category: string;
  year: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface BlogPost {
  date: string;
  title: string;
  slug?: string;
}
