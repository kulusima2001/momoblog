import type { NewsItem } from "../../types/news";

export const news03: NewsItem = {
  id: "news-03",
  slug: "news-03",
  title: "天才少女蝉联世青赛冠军",
  date: "2016-02-27",
  description: "16岁花样滑冰女子单人滑选手黎涵再拿一金！",
  hasAdultContent: false,
  blocks: [
    {
      type: "text",
      text: "小编相信大家一定对天才少女黎涵并不陌生。黎涵于2013/2014赛季青年组大奖赛泰国站首次亮相国际赛场，自那以后，这位出生于哈尔滨的选手为国家赢得了数项荣誉。"
    },
    {
      type: "text",
      text: "2015年3月3日，黎涵赢得其首个青年组世界冠军。而在今年的世青赛上，黎涵以完美的发挥赢得了她第二枚世青赛金牌。"
    },
    {
      type: "image",
      src: "/momoblog/images/news-03/news-03-01.jpg",
      label: "[Image placeholder]",
      aspectRatio: "standard"
    },
    {
      type: "text",
      text: "黎涵在赛后采访中表示，明年是她在青年组的最后一年，她希望自己能够保持同样良好的状态，争取获得青年组三连冠的成就。"
    },
  ]
};
