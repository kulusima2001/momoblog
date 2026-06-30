import type { PortfolioItem } from "../../types/project";
import project07Content_01 from "./project-07.md?raw";

export const project07: PortfolioItem = {
  id: "project-07",
  slug: "project-07",
  title: "天才主义",
  wordCount: "未完待续中",
  description: "她似乎没那么在意成绩了。",
  thumbnailImage: "/momoblog/images/project-07/project-07-01.jpg",
  hasAdultContent: true,
  adultContentNotice: {
    eyebrow: "Content notice",
    title: "阅读预警",
    message: "这篇文章包含成人内容和产子等可能令人不适的情节，请确认您已满 18 岁，并愿意继续阅读。",
    confirmText: "确认进入",
    cancelText: "取消"
  },
  tags: ["天才主义", "ECHO.2", ],
  blocks: [
    {
      type: "image",
      src: "/momoblog/images/project-07/project-07-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "wide"
    },
    {
      type: "markdown",
      content: project07Content_01
    },
  ]
};
