import type { PortfolioItem } from "../../types/project";

export const project03: PortfolioItem = {
  id: "project-03",
  slug: "project-03",
  title: "一起滑冰的约定",
  wordCount: "comic",
  description: "有关于约定的小漫画。",
  thumbnailImage: "/momoblog/images/project-03/project-03-02.jpg",
  hasAdultContent: false,
  tags: ["一起滑冰的约定", "青年组",],
  blocks: [
    {
      type: "imageGroup",
      images: [
        {
          type: "image",
          src: "/momoblog/images/project-03/project-03-01.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        },
        {
          type: "image",
          src: "/momoblog/images/project-03/project-03-02.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        }
      ]
    },
  ]
};
