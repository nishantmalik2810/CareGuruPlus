export type TriageLevel =
  | "unknown"
  | "self-care"
  | "doctor"
  | "emergency";

export interface InfermedicaResult {
  symptoms: string[];
  possibleConditions: string[];
  triageLevel: TriageLevel;
  followUpQuestion?: string;
}