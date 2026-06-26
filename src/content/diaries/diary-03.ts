import type { DiaryEntry } from "./template";

export const diary03: DiaryEntry = {
  id: "diary-03",
  date: "2013年5月8日 星期三",
  title: "平平无奇的一天",
  weather: "阴天",
  location: "北京",
  blocks: [
    {
      type: "paragraph",
      text: "今天去上学了，去了半天。早晨最后一节是体育课，和同学们打乒乓球。"
    },
    {
      type: "paragraph",
      text: "下午去冰场练习见到了李理，她很忙，忙着教几个刚转来俱乐部的小孩。"
    },
    {
      type: "paragraph",
      text: "训练结束后李理带我吃饭，又把我送回了家。谢天谢地，今晚回家的时候妈妈在家。"
    },
  ]
};
