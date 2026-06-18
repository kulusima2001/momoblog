import type { NewsItem } from "../../types/news";

export const newsTemplate: NewsItem = {
  id: "news-template",
  slug: "news-template",
  title: "[News title placeholder]",
  date: "2026-06-18",
  description: "[News description placeholder]",
  hasAdultContent: false,
  blocks: [
    {
      type: "markdown",
      content: `
# [News title placeholder]

[News content placeholder]
`
    }
  ]
};
