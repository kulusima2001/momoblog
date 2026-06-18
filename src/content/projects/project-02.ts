import type { PortfolioItem } from "../../types/project";

export const project02: PortfolioItem = {
  id: "project-02",
  slug: "project-02",
  title: "罗森所见证的",
  wordCount: "comic",
  description: "未说出口的心意。",
  thumbnailImage: "/momoblog/images/project-02/project-02-01.jpg",
  hasAdultContent: false,
  tags: ["气膜冰场的雨季", ],
  blocks: [
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
          src: "/momoblog/images/project-02/project-02-02.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        }
      ]
    },
    {
      type: "imageGroup",
      images: [
        {
          type: "image",
          src: "/momoblog/images/project-02/project-02-03.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        },
        {
          type: "image",
          src: "/momoblog/images/project-02/project-02-04.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        }
      ]
    },
    {
      type: "imageGroup",
      images: [
        {
          type: "image",
          src: "/momoblog/images/project-02/project-02-05.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        },
        {
          type: "image",
          src: "/momoblog/images/project-02/project-02-06.jpg",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        }
      ]
    },
    {
      type: "image",
      src: "/momoblog/images/project-02/project-02-07.jpg",
      label: "[Image placeholder]",
      aspectRatio: "standard"
    },
  ]
};
