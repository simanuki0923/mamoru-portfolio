export type ProjectCategory = "personal" | "learning";

export type ProjectStatus =
  | "開発中"
  | "完成"
  | "学習中"
  | "設計中";

export type ProjectVisualType =
  | "dashboard"
  | "shop"
  | "mobile";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  role: string;
  period: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  challenges: string[];
  visualType: ProjectVisualType;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  imageAlt?: string;
};