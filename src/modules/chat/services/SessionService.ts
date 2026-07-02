import { ChatMessage } from "../types/chat.types";
import { ConversationState } from "../types/conversation.types";
import { SessionData } from "../types/session.types";



export class SessionService {
  private sessions: Map<string, SessionData> = new Map();

  private createDefaultState(): ConversationState {
    return {
      symptoms: [],
      completed: false,
    };
  }

  private createSession(): SessionData {
    return {
      history: [],
      state: this.createDefaultState(),
    };
  }

  getSession(sessionId: string): SessionData {
    if (!this.sessions.has(sessionId)) {
      this.sessions.set(sessionId, this.createSession());
    }

    return this.sessions.get(sessionId)!;
  }

  getHistory(sessionId: string): ChatMessage[] {
    return this.getSession(sessionId).history;
  }

  addMessage(sessionId: string, message: ChatMessage): void {
    this.getSession(sessionId).history.push(message);
  }

  getState(sessionId: string): ConversationState {
    return this.getSession(sessionId).state;
  }

  updateState(
    sessionId: string,
    state: Partial<ConversationState>
  ): void {
    const session = this.getSession(sessionId);

    session.state = {
      ...session.state,
      ...state,
    };
  }

  clearSession(sessionId: string): void {
    this.sessions.delete(sessionId);
  }
}

export const sessionService = new SessionService();