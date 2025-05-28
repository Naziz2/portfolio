export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon: string;
}