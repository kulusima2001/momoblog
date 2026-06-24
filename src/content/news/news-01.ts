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
      src: "/momoblog/images/news-02/news-02-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "wide"
    },
    {
      type: "text",
      text: "2018年冬季奥林匹克运动会花样滑冰女子单人滑项目圆满落下帷幕，代表中国参赛的李理和黎涵分别获得冠亚军。" +
          "赛后，央视体育记者对两位新晋奖牌得主进行了采访。"
    },
    {
      type: "text",
      text: "两位选手均发表了自己的获奖感言，感谢国家和教练对她们的悉心栽培，感谢亲人朋友的支持与鼓励。" +
          "除此之外，记者也请两位选手聊了聊对彼此的看法。"
    },
    {
      type: "text",
      text: "李理表示两人一起训练长大，黎涵是她最熟悉的对手，也是她竞技生涯中最重要的锚点。针对李理的发言，黎涵微笑赞同。" +
          "黎涵补充两人曾一起外训，也正是在外训的那段时间建立了良好关系。"
    },
    {
      type: "text",
      text: "关于记者后续提出的两人因世青赛金牌归属而不和的传闻，两人均表示关系从未因此生出嫌隙。"
    },
  ]
};
