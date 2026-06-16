import { HanLI2018OgFreeSkating } from "./han-li-2018-og-free-skating";
import { HanLI2018OgShortProgram } from "./han-li-2018-og-short-program";
import { LiLI2018OgShortProgram } from "./li-li-2018-og-short-program";
import { LiLI2018OgFreeSkating } from "./li-li-2018-og-free-skating";
import type { ScoreSheetData } from "./types";

export type { ScoreSheetData } from "./types";

export const scoreSheets: Record<string, ScoreSheetData> = {
  [HanLI2018OgFreeSkating.id]: HanLI2018OgFreeSkating,
  [LiLI2018OgFreeSkating.id]: LiLI2018OgFreeSkating,
  [HanLI2018OgShortProgram.id]: HanLI2018OgShortProgram,
  [LiLI2018OgShortProgram.id]: LiLI2018OgShortProgram,
};

export const scoreSheetList = Object.values(scoreSheets);
