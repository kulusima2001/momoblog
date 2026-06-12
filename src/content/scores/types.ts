export type ProgramType = "Short Program" | "Free Skating";

export type ScoreJudge = {
  label: string;
};

export type ScoreSkater = {
  name: string;
  country: string;
  rank: string;
  startNumber: string;
};

export type TechnicalElement = {
  number: string;
  executedElement: string;
  info: string;
  baseValue: string;
  goe: string;
  judges: string[];
  ref: string;
  panelScore: string;
};

export type ProgramComponent = {
  component: string;
  factor: string;
  judges: string[];
  score: string;
};

export type TechnicalTotals = {
  baseValue: string;
  panelScore: string;
};

export type Deduction = {
  label: string;
  value: string;
  count?: string;
};

export type ScoreSheetData = {
  id: string;
  title: string;
  eventName: string;
  eventYear: string;
  programType: ProgramType;
  skater: ScoreSkater;
  tes: string;
  pcs: string;
  totalScore: string;
  deductions: string;
  judges: ScoreJudge[];
  technicalElements: TechnicalElement[];
  technicalTotals: TechnicalTotals;
  programComponents: ProgramComponent[];
  componentTotal: string;
  deductionItems: Deduction[];
};
