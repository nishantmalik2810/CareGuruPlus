"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageUseCase = void 0;
const ClaudeService_1 = require("../services/ClaudeService");
const SessionService_1 = require("../services/SessionService");
const InfermedicaService_1 = require("../services/InfermedicaService");
const EmergencyService_1 = require("../services/EmergencyService");
const ResponseFormatter_1 = require("../services/ResponseFormatter");
class SendMessageUseCase {
    sessionService = new SessionService_1.SessionService();
    emergencyService = new EmergencyService_1.EmergencyService();
    claudeService = new ClaudeService_1.ClaudeService();
    infermedicaService = new InfermedicaService_1.InfermedicaService();
    responseFormatter = new ResponseFormatter_1.ResponseFormatter();
    async execute(payload) {
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
        const aiReply = await this.claudeService.chat(`
User Symptoms:
${payload.message}

Possible Conditions:
${diagnosis.possibleConditions.join(", ")}

Follow-up Question:
${diagnosis.followUpQuestion}
`);
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
        return this.responseFormatter.format(reply, diagnosis, history.length);
    }
}
exports.SendMessageUseCase = SendMessageUseCase;
//# sourceMappingURL=SendMessageUseCase.backup.js.map