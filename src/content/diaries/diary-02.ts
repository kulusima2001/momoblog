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
    };

export const diary02: DiaryEntry = {
  id: "diary-02",
  date: "日期占位",
  title: "标题占位",
  weather: "天气占位",
  location: "地点占位",
  blocks: [
    {
      type: "paragraph",
      text: "正文占位文字第一段。"
    },
    {
      type: "image",
      src: "",
      alt: "图片占位",
      caption: "图片说明占位"
    },
    {
      type: "paragraph",
      text: "正文占位文字第二段。"
    }
  ]
};
