import type { PortfolioItem } from "../../types/project";
import project06Content_01 from "./project-06.md?raw";

export const project06: PortfolioItem = {
  id: "project-06",
  slug: "project-06",
  title: "天外来祸",
  wordCount: "9.6k words",
  description: "是的，我们有一个孩子。",
  thumbnailImage: "/momoblog/images/project-06/project-06-01.jpg",
  hasAdultContent: true,
  tags: ["气膜冰场的雨季", "ECHO", "18+"],
  blocks: [
    {
      type: "image",
      src: "/momoblog/images/project-06/project-06-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "standard"
    },
    {
      type: "markdown",
      content: project06Content_01
    },
  ]
};
