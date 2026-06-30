import type { PortfolioItem } from "../../types/project";
import project08Content_01 from "./project-08.md?raw";

export const project08: PortfolioItem = {
  id: "project-08",
  slug: "project-08",
  title: "太阳雨",
  wordCount: "未完待续中",
  description: "黎涵其实是不恨李理的。",
  thumbnailImage: "/momoblog/images/project-08/project-08-01.jpg",
  hasAdultContent: true,
  adultContentNotice: {
    eyebrow: "Content notice",
    title: "阅读前提示",
    message: "这篇文章包含成人内容、非自愿性行为与可能令人不适的情节。请确认您已满 18 岁，并愿意继续阅读。",
    confirmText: "确认进入",
    cancelText: "取消"
  },
  tags: ["太阳雨", ],
  blocks: [
    {
      type: "image",
      src: "/momoblog/images/project-08/project-08-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "portrait"
    },
    {
      type: "markdown",
      content: project08Content_01
    },
  ]
};
