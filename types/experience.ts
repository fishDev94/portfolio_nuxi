import type { ExperienceProject } from "./projects";

export interface Experience {
  jobTitle: string;
  where: string;
  from: string;
  to: string;
  description: string;
  projects?: Array<ExperienceProject>;
  tools: Array<string>;
}
