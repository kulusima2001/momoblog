import type { NewsItem } from "../../types/news";
import project01Content_01 from "../projects/project-01.md?raw";

export const news01: NewsItem = {
  id: "news-01",
  slug: "news-01",
  title: "新晋奥运冠亚军的爱恨情仇？",
  date: "2018-02-25",
  description: "新晋金牌得主李理表示：“我和黎涵是一起长大的。”",
  hasAdultContent: false,
  blocks: [
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
