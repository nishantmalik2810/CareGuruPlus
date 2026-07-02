import { ChatRequest, ChatResponse } from "../types/chat.types";

import { sessionService } from "../services/SessionService";
import { EmergencyService } from "../services/EmergencyService";
import { ConversationEngine } from "../services/ConversationEngine";
import { InfermedicaService } from "../services/InfermedicaService";
import { GeminiService } from "../services/GeminiService";
import { ResponseFormatter } from "../services/ResponseFormatter";

export class SendMessageUseCase {

    private emergencyService = new EmergencyService();

    private conversationEngine = new ConversationEngine();

    private infermedicaService = new InfermedicaService();

    private geminiService = new GeminiService();

    private formatter = new ResponseFormatter();


  async execute(payload: ChatRequest): Promise<ChatResponse> {

    // 🚨 Emergency check FIRST
    if (this.emergencyService.check(payload.message)) {
      return {
        success: true,
        reply: `🚨 Your message may describe a medical emergency.

Please seek emergency medical care immediately or call your local emergency services (112 in India).

This is not a substitute for professional medical advice.`,
        triageLevel: "emergency",
        actions: [
          "Call 112",
          "Talk to a real doctor"
        ]
      };
    }

   // STEP 1 - Get current session
const state = sessionService.getState(payload.sessionId);
const history = sessionService.getHistory(payload.sessionId);

// STEP 2 - Save user message
sessionService.addMessage(payload.sessionId, {
  role: "user",
  content: payload.message,
  timestamp: new Date()
});

// STEP 3 - Process conversation
const conversation = this.conversationEngine.processMessage(
  state,
  payload.message
);
// STEP 5 - Analyze symptoms
const diagnosis = await this.infermedicaService.analyze(payload.message);

// STEP 6 - Generate AI response
const aiReply = await this.geminiService.chat(`
User Symptoms:
${payload.message}

Detected Symptoms:
${diagnosis.symptoms.join(", ") || "None"}

Possible Conditions:
${diagnosis.possibleConditions.join(", ") || "Unknown"}

Follow-up Question:
${diagnosis.followUpQuestion ?? "None"}

Triage Level:
${diagnosis.triageLevel}

Respond naturally as CareGuru+, explaining the possible conditions, asking the follow-up question if needed, and always remind the user that this is not a substitute for professional medical advice.
`);

// STEP 7 - Format response
const response = this.formatter.format(
  aiReply,
  diagnosis,
  history.length + 1
);

// STEP 8 - Save assistant reply
sessionService.addMessage(payload.sessionId, {
  role: "assistant",
  content: response.reply,
  timestamp: new Date()
});

return response;

  }
}
