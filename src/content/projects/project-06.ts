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
  adultContentNotice: {
    eyebrow: "Content notice",
    title: "阅读预警",
    message: "这篇文章包含产子等可能令人不适的情节，请确认您已满 18 岁，并愿意继续阅读。",
    confirmText: "确认进入",
    cancelText: "取消"
  },
  tags: ["天外来祸", "ECHO.1", ],
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
