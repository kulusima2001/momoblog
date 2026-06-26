import type { DiaryEntry } from "./template";

export const diary02: DiaryEntry = {
  id: "diary-02",
  date: "2013年5月7日 星期二",
  title: "sad...sad...",
  weather: "阴天",
  location: "北京",
  blocks: [
    {
      type: "paragraph",
      text: "早上坐飞机回北京，中午到机场，李理把我送回家.开门一看，家里果然没人。"
    },
    {
      type: "paragraph",
      text: "我问李理能不能带我回家，李理很为难，告诉我她妈妈生病了，她得去医院。"
    },
    {
      type: "paragraph",
      text: "我说我可以和她一起去，但她说最近有流感，拒绝了我。我没好意思再求她了，毕竟，李理也很忙呢。"
    },
  ]
};
