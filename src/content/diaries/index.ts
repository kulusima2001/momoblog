import type { DiaryEntry } from "./template";
import { diaryTemplate } from "./template";
import { diary01 } from "./diary-01";
import { diary02 } from "./diary-02";
import { diary03 } from "./diary-03";

export const diaries = [diary01, diary02, diary03] satisfies DiaryEntry[];
