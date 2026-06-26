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
      /** Text displayed beside standard and portrait images. */
      sideText?: string;
    };

export const diaryTemplate: DiaryEntry = {
  id: "diary-template",
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
      caption: "标准图片说明占位",
      variant: "standard",
      align: "left",
      sideText: "图片旁文字占位。"
    },
    {
      type: "image",
      src: "",
      alt: "横向图片占位",
      caption: "横向图片说明占位",
      variant: "wide"
    },
    {
      type: "image",
      src: "",
      alt: "竖向图片占位",
      caption: "竖向图片说明占位",
      variant: "portrait",
      align: "right",
      sideText: "图片旁文字占位。"
    },
    {
      type: "paragraph",
      text: "正文占位文字第二段。"
    }
  ]
};
