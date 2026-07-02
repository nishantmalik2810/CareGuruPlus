import { ChatRequest, ChatResponse } from "../types/chat.types";
import { ClaudeService } from "../services/ClaudeService";
import { SessionService } from "../services/SessionService";
import { InfermedicaService } from "../services/InfermedicaService";
import { EmergencyService } from "../services/EmergencyService";
import { ResponseFormatter } from "../services/ResponseFormatter";

export class SendMessageUseCase {
  private sessionService = new SessionService();
  private emergencyService = new EmergencyService();
  private claudeService = new ClaudeService();
  private infermedicaService = new InfermedicaService();
  private responseFormatter = new ResponseFormatter();

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

    // Save user message
    this.sessionService.addMessage(payload.sessionId, {
      role: "user",
      content: payload.message,
      timestamp: new Date()
    });

    // Get history
    const history = this.sessionService.getHistory(payload.sessionId);

   const diagnosis = await this.infermedicaService.analyze(payload.message);

const aiReply = await this.claudeService.chat(
  `
User Symptoms:
${payload.message}

Possible Conditions:
${diagnosis.possibleConditions.join(", ")}

Follow-up Question:
${diagnosis.followUpQuestion}
`
);

const reply = `
${aiReply}

----------------------------

Symptoms:
${diagnosis.symptoms.join(", ") || "None"}

Possible Conditions:
${diagnosis.possibleConditions.join(", ") || "Unknown"}

Triage:
${diagnosis.triageLevel}

Follow-up:
${diagnosis.followUpQuestion}

Conversation Length:
${history.length} messages

This is not a substitute for professional medical advice.
`;

    // Save assistant reply
    this.sessionService.addMessage(payload.sessionId, {
      role: "assistant",
      content: reply,
      timestamp: new Date()
    });

    return this.responseFormatter.format(
  reply,
  diagnosis,
  history.length
);
  }
}