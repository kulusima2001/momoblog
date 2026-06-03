export type ProjectTextBlock = {
  type: "text";
  text: string;
};

export type ProjectMarkdownBlock = {
  type: "markdown";
  content: string;
};

export type ProjectImageBlock = {
  type: "image";
  src: string;
  label: string;
  aspectRatio?: "wide" | "standard" | "portrait";
};

export type ProjectImageGroupBlock = {
  type: "imageGroup";
  images: ProjectImageBlock[];
};

export type ProjectContentBlock =
  | ProjectTextBlock
  | ProjectMarkdownBlock
  | ProjectImageBlock
  | ProjectImageGroupBlock;

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  wordCount: string;
  description: string;
  thumbnailImage: string;
  tags: string[];
  blocks: ProjectContentBlock[];
};
