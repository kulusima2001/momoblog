import type { ScoreSheetData } from "./types";

export const protocolScoreSheetTemplate: ScoreSheetData = {
  id: "protocol-score-sheet-template",
  title: "Protocol Score Sheet Template",
  eventName: "[Event Name]",
  eventYear: "[Event Year]",
  programType: "Free Skating",
  skater: {
    name: "[Skater Name]",
    country: "[Nation]",
    rank: "[Rank]",
    startNumber: "[Starting Number]",
  },
  totalScore: "[Total Segment Score]",
  tes: "[Total Element Score]",
  pcs: "[Total Program Component Score]",
  deductions: "[Total Deductions]",
  judges: [
    { label: "J1" },
    { label: "J2" },
    { label: "J3" },
    { label: "J4" },
    { label: "J5" },
    { label: "J6" },
    { label: "J7" },
    { label: "J8" },
    { label: "J9" },
  ],
  technicalElements: [
    { number: "1", executedElement: "[Element]", info: "[Info]", baseValue: "[Base]", goe: "[GOE]", judges: ["[J1]", "[J2]", "[J3]", "[J4]", "[J5]", "[J6]", "[J7]", "[J8]", "[J9]"], ref: "[Ref.]", panelScore: "[Score]" },
  ],
  technicalTotals: {
    baseValue: "[Base Total]",
    panelScore: "[TES]",
  },
  programComponents: [
    { component: "Composition", factor: "[Factor]", judges: ["[J1]", "[J2]", "[J3]", "[J4]", "[J5]", "[J6]", "[J7]", "[J8]", "[J9]"], score: "[Score]" },
    { component: "Presentation", factor: "[Factor]", judges: ["[J1]", "[J2]", "[J3]", "[J4]", "[J5]", "[J6]", "[J7]", "[J8]", "[J9]"], score: "[Score]" },
    { component: "Skating Skills", factor: "[Factor]", judges: ["[J1]", "[J2]", "[J3]", "[J4]", "[J5]", "[J6]", "[J7]", "[J8]", "[J9]"], score: "[Score]" },
  ],
  componentTotal: "[PCS]",
  deductionItems: [],
};
