import type { NewsItem } from "../../types/news";
import project01Content_01 from "../projects/project-01.md?raw";

export const news02: NewsItem = {
  id: "news-02",
  slug: "news-02",
  title: "震惊！花滑冠军生日当天宣布退役！",
  date: "2018-04-01",
  description: "没有解释！李理生日当天微博宣布退役！",
  hasAdultContent: false,
  blocks: [
    {
      type: "text",
      text: "4月1日清晨，2018年冬奥会花样滑冰女子单人滑冠军李理微博宣布退役。博文中，李理表示退役是花滑人生的终点，但也是崭新人生的开端。" +
          "李理并未解释其退役原因，仅感谢广大冰迷多年来对她的关注。"
    },
    {
      type: "text",
      text: "在刚刚结束的东京世锦赛中，李理于短节目中受伤退赛。冰迷留言退役是否与本次受伤有关，关于类似评论，李理均未做出正面回答。"
    },
    {
      type: "image",
      src: "/momoblog/images/news-01/news-01-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "standard"
    },
    {
      type: "text",
      text: "“她的决定很突然，在此之前俱乐部内从未有过相关传闻。”李理最强劲的竞争对手，本届冬奥会的银牌得主黎涵也表示对此事并不知情。" +
          "“也许她会在高考结束后复出，谁知道呢？”"
    },
    {
      type: "text",
      text: "有关于李理退役的后续情况，小编将持续为您追踪报道。"
    },
  ]
};
