import type { DiaryEntry } from "./template";

export const diary01: DiaryEntry = {
  id: "diary-01",
  date: "2013年5月6日 星期一",
  title: "去迪士尼(◍•ᴗ•◍)♡",
  weather: "晴天",
  location: "香港",
  blocks: [
    {
      type: "paragraph",
      text: "天朗气清，风和日丽。由于我表现优异，李理带我去迪士尼了！迪士尼！那可是迪士尼！超喜欢！(◍•ᴗ•◍)♡"
    },
    {
      type: "image",
      src: "/momoblog/images/diary-01/diary-01-01.jpg",
      alt: "米妮耳朵",
      caption: "我戴了米妮耳朵！",
      variant: "portrait",
      align: "left",
      sideText: "李理拿出了两个发箍，问我要哪一个。我本来是想选玲娜贝儿的，但李理的发带颜色和贝儿好搭。于是我选了米妮，要把贝儿给她。"
    },
    {
      type: "paragraph",
      text: "结果李理居然告诉我都是我的，她一个也不想要。我想那怎么行！于是我非常强硬地帮她带上了。"
    },
    {
      type: "image",
      src: "/momoblog/images/diary-01/diary-01-02.jpg",
      alt: "佩戴发箍",
      caption: "很合适！",
      variant: "portrait",
      align: "right",
      sideText: "果然，李理超级超级适合玲娜贝儿呀！对老师，有时候就是要这样呀！"
    }
  ]
};
