import type { PortfolioItem } from "../../types/project";
import project01Content_01 from "./project-01.md?raw";

export const project01: PortfolioItem = {
  id: "project-01",
  slug: "project-01",
  title: "長夏高懸",
  wordCount: "25K words",
  description: "在台北，無盡的夏天。",
  thumbnailImage: "/momoblog/images/project-01/project-01-02.jpg",
  hasAdultContent: true,
  tags: ["长夏高悬", ],
  blocks: [
    {
      type: "image",
      src: "/momoblog/images/project-01/project-01-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "wide"
    },
    {
      type: "markdown",
      content: project01Content_01
    },
    {
      type: "image",
      src: "/momoblog/images/project-01/project-01-02.jpg",
      label: "[Image placeholder]",
      aspectRatio: "standard"
    },
  ]
};
