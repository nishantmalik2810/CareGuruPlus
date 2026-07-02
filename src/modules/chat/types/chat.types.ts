import { Assessment } from "./assessment.types";

export type TriageLevel =
  | "unknown"
  | "self-care"
  | "doctor"
  | "emergency";

export interface ChatRequest {
  message: string;
  sessionId: string;
}

export interface ChatResponse {
  success: boolean;
  reply: string;
  assessment?: Assessment;
  triageLevel: TriageLevel;
  actions: string[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}