import type { PortfolioItem } from "../../types/project";
import project01Content_01 from "./project-01.md?raw";

export const project01: PortfolioItem = {
  id: "project-01",
  slug: "project-01",
  title: "長夏高懸",
  description: "一個髮生在無儘夏日的故事。",
  thumbnailImage: "/momoblog/images/project-01-02.jpg",
  tags: ["台女if线", "全文共计2.5w字"],
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
