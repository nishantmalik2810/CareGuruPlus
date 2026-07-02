"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessageUseCase = void 0;
const SessionService_1 = require("../services/SessionService");
const EmergencyService_1 = require("../services/EmergencyService");
const ConversationEngine_1 = require("../services/ConversationEngine");
const InfermedicaService_1 = require("../services/InfermedicaService");
const ClaudeService_1 = require("../services/ClaudeService");
const ResponseFormatter_1 = require("../services/ResponseFormatter");
class SendMessageUseCase {
    emergencyService = new EmergencyService_1.EmergencyService();
    conversationEngine = new ConversationEngine_1.ConversationEngine();
    infermedicaService = new InfermedicaService_1.InfermedicaService();
    claudeService = new ClaudeService_1.ClaudeService();
    formatter = new ResponseFormatter_1.ResponseFormatter();
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
        // STEP 1 - Get current session
        const state = SessionService_1.sessionService.getState(payload.sessionId);
        const history = SessionService_1.sessionService.getHistory(payload.sessionId);
        // STEP 2 - Save user message
        SessionService_1.sessionService.addMessage(payload.sessionId, {
            role: "user",
            content: payload.message,
            timestamp: new Date()
        });
        // STEP 3 - Process conversation
        const conversation = this.conversationEngine.processMessage(state, payload.message);
        // STEP 5 - Analyze symptoms
        const diagnosis = await this.infermedicaService.analyze(payload.message);
        // STEP 6 - Generate AI response
        const aiReply = await this.claudeService.chat(`User Symptoms:
${payload.message}

Possible Conditions:
${diagnosis.possibleConditions.join(", ")}

Follow-up Question:
${diagnosis.followUpQuestion ?? "None"}`);
        // STEP 7 - Format response
        const response = this.formatter.format(aiReply, diagnosis, history.length + 1);
        // STEP 8 - Save assistant reply
        SessionService_1.sessionService.addMessage(payload.sessionId, {
            role: "assistant",
            content: response.reply,
            timestamp: new Date()
        });
        return response;
    }
}
exports.SendMessageUseCase = SendMessageUseCase;
//# sourceMappingURL=SendMessageUseCase.js.map