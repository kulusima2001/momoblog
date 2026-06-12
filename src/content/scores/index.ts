import { hanLi2018OgFreeSkating } from "./han-li-2018-og-free-skating";
import { hanLi2018OgShortProgram } from "./han-li-2018-og-short-program";
import type { ScoreSheetData } from "./types";

export type { ScoreSheetData } from "./types";

export const scoreSheets: Record<string, ScoreSheetData> = {
  [hanLi2018OgFreeSkating.id]: hanLi2018OgFreeSkating,
  [hanLi2018OgShortProgram.id]: hanLi2018OgShortProgram,
};

export const scoreSheetList = Object.values(scoreSheets);
