import type { PortfolioItem } from "../../types/project";

export const project05: PortfolioItem = {
  id: "project-05",
  slug: "project-05",
  title: "废墟之上",
  wordCount: "0 word",
  description: "在核爆50年后的废土世界冒险吧！",
  thumbnailImage: "/momoblog/images/project-05/project-05-01.jpg",
  tags: ["来自新世界",],
  blocks: [
    {
      type: "image",
      src: "/momoblog/images/project-05/project-05-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "portrait"
    },
    {
      type: "text",
      text: "[Text placeholder]"
    },
  ]
};
