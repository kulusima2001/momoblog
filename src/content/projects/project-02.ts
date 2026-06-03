import type { PortfolioItem } from "../../types/project";

export const project02: PortfolioItem = {
  id: "project-02",
  slug: "project-02",
  title: "罗森所见证的",
  wordCount: "0 word",
  description: "发生在小黎15岁JGPF前夕的故事。",
  thumbnailImage: "/momoblog/images/project-02/project-02-01.jpg",
  tags: ["气膜冰场的雨季", ],
  blocks: [
    {
      type: "text",
      text: "[Text placeholder]"
    },
    {
      type: "imageGroup",
      images: [
        {
          type: "image",
          src: "/momoblog/images/project-02/project-02-01.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        },
        {
          type: "image",
          src: "/momoblog/images/project-02/project-02-01.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        }
      ]
    },
    {
      type: "text",
      text: "[Text placeholder]"
    }
  ]
};
