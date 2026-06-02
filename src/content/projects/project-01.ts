import type { PortfolioItem } from "../../types/project";
import project01Content_01 from "./project-01.md?raw";

export const project01: PortfolioItem = {
  id: "project-01",
  slug: "project-01",
  title: "長夏高懸",
  description: "[Short description placeholder]",
  thumbnailImage: "/momoblog/images/project-01-02.jpg",
  tags: ["[Tag]", "[Tag]", "[Tag]"],
  blocks: [
    {
      type: "image",
      src: "/momoblog/images/project-01-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "wide"
    },
    {
      type: "markdown",
      content: project01Content_01
    },
    {
      type: "image",
      src: "/momoblog/images/project-01-02.jpg",
      label: "[Image placeholder]",
      aspectRatio: "standard"
    },
  ]
};
