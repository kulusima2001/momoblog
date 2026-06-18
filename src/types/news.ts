import type { ProjectContentBlock } from "./project";

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  hasAdultContent: boolean;
  blocks: ProjectContentBlock[];
};
