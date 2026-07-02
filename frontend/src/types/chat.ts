export interface Assessment {
  symptoms: string[];
  possibleConditions: string[];
  recommendation: string;
  followUpQuestion: string;
}

export interface Conversation {
  id: string;
  title: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;

  assessment?: Assessment;

  actions?: string[];
}

export interface ChatResponse {
  success: boolean;
  reply: string;

  assessment?: Assessment;

  triageLevel: string;

  actions: string[];
}