export type DiaryEntry = {
  id: string;
  date: string;
  title: string;
  weather?: string;
  location?: string;
  content?: string[];
  blocks?: DiaryContentBlock[];
  image?: string;
};

export type DiaryContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt?: string;
      caption?: string;
      variant?: "standard" | "wide" | "portrait";
      align?: "left" | "right";
      wrap?: boolean;
    };

export const diary01: DiaryEntry = {
  id: "diary-01",
  date: "2013年5月6日",
  title: "去迪士尼(◍•ᴗ•◍)♡",
  weather: "晴天",
  location: "香港",
  blocks: [
    {
      type: "image",
      src: "/momoblog/images/diary-01/diary-01-01.jpg",
      alt: "图片占位",
      caption: "我戴了米妮耳朵！",
      variant: "portrait",
      align: "left",
      wrap: true
    },
    {
      type: "paragraph",
      text: "天朗气清，风和日丽。由于我表现优异，李理带我去迪士尼了！迪士尼！那可是迪士尼！超喜欢！(◍•ᴗ•◍)♡"
    },
    {
      type: "paragraph",
      text: "李理拿出了两个发箍，问我要哪一个。我本来是想选玲娜贝儿的，但李理的发带颜色和贝儿好搭。于是我选了米妮。"
    },
    {
      type: "image",
      src: "/momoblog/images/diary-01/diary-01-02.jpg",
      alt: "竖向图片占位",
      caption: "很合适！",
      variant: "portrait",
      align: "right",
      wrap: true
    },
    {
      type: "paragraph",
      text: "果然，李理超级超级适合玲娜贝儿啊！果然，我是一个好孩子！"
    }
  ]
};
