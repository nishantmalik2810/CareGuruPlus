import { ChatMessage } from "./chat.types";
import { ConversationState } from "./conversation.types";

export interface SessionData {
  history: ChatMessage[];
  state: ConversationState;
}