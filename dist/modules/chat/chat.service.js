"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
class ChatService {
    async chat(payload) {
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
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map