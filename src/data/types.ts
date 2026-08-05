import type { MediaItem } from "../components/projectDemo";

export interface WorkEntry {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  coverImage?: string;

  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  learnings?: string;

  media?: MediaItem[];

  techStack?: string[];
  teamSize?: number;
  duration?: string;
  role?: string;

  githubUrl?: string;
  liveUrl?: string;
  paperUrl?: string;
}
