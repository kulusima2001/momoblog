import type { PortfolioItem } from "../../types/project";
import project01Content_01 from "./project-01.md?raw";

export const template: PortfolioItem = {
  id: "project-03",
  slug: "project-03",
  title: "[Title placeholder]",
  wordCount: "[Word count placeholder]",
  description: "[Short description placeholder]",
  thumbnailImage: "",
  hasAdultContent: false,
  tags: ["[Tag]", "[Tag]", "[Tag]"],
  blocks: [
    {
      type: "markdown",
      content: project01Content_01
    },
    {
      type: "image",
      src: "",
      label: "[Image placeholder]",
      aspectRatio: "standard"
    },
    {
      type: "text",
      text: "[Text placeholder]"
    },
    {
      type: "imageGroup",
      images: [
        {
          type: "image",
          src: "",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        },
        {
          type: "image",
          src: "",
          label: "[Image placeholder]",
          aspectRatio: "standard"
        }
      ]
    },
  ]
};
