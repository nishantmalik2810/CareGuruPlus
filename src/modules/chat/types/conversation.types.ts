export interface ConversationState {
  age?: number;

  sex?: "male" | "female";

  duration?: string;

  severity?: number;

  symptoms: string[];

  completed: boolean;
}