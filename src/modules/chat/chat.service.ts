import { ChatRequest, ChatResponse } from "./types/chat.types";

export class ChatService {
  async chat(payload: ChatRequest): Promise<ChatResponse> {
    return {
      success: true,
      reply: `Hello! You said: "${payload.message}"`,
      triageLevel: "unknown",
      actions: [
        "Talk to a real doctor"
      ]
    };
  }
}